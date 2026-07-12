import { WebContainer } from "/vendor/webcontainer/index.js";

const preview = document.querySelector(".preview");
const consoleContainer = document.getElementById("consoleContainer");
const terminal = document.getElementById("nodeTerminal");
const terminalOutput = document.getElementById("nodeTerminalOutput");
const terminalForm = document.getElementById("nodeTerminalForm");
const terminalInput = document.getElementById("nodeTerminalInput");
const toggleButton = document.getElementById("enableNodeRuntimeBtn");
const toggleLabel = document.getElementById("enableNodeRuntimeBtnLabel");
const previewTitle = document.getElementById("previewTitle");
const clearConsoleButton = document.getElementById("clearConsoleBtn");

let instance = null;
let bootPromise = null;
let enabled = false;
let previousPreviewTitle = "Preview";

function cleanTerminalOutput(value) {
  return String(value || "")
    .replace(/\x1b\][^\x07]*(?:\x07|\x1b\\)/g, "")
    .replace(/\x1b\[1G\x1b\[0K[\\|/\-]?/g, "")
    .replace(/\x1b\[[0-?]*[ -/]*[@-~]/g, "")
    .replace(/\x1b[@-_]/g, "")
    .replace(/\r/g, "")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001a\u001c-\u001f\u007f]/g, "");
}

function writeTerminal(value, className = "") {
  if (!terminalOutput) return;
  const cleanValue = cleanTerminalOutput(value);
  if (!cleanValue) return;
  const line = document.createElement("span");
  if (className) line.className = className;
  line.textContent = cleanValue;
  terminalOutput.appendChild(line);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function writeServerLink(port, runtimeUrl) {
  if (!terminalOutput) return;
  try {
    localStorage.setItem(`codxNodePreview:${port}`, runtimeUrl);
  } catch (_error) {
    // The preview page will show a useful message if storage is unavailable.
  }
  writeTerminal("\nServer ready: ", "success");
  const link = document.createElement("a");
  link.className = "node-terminal-server-link";
  link.href = `/node-preview.html?port=${encodeURIComponent(port)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = `http://localhost:${port}`;
  link.title = "Open Node.js server in a new tab";
  terminalOutput.append(link, document.createTextNode("\n"));
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

async function ensureDirectory(filePath) {
  const parts = String(filePath).split("/").filter(Boolean);
  parts.pop();
  if (parts.length) await instance.fs.mkdir(parts.join("/"), { recursive: true });
}

async function writeRuntimeFile(file) {
  const fileName = String(file.name || "").replace(/\\/g, "/").replace(/^\.\//, "");
  if (!fileName || fileName.startsWith("/") || fileName.split("/").includes("..")) return;
  await ensureDirectory(fileName);
  const content = String(file.content || "");
  if (/^data:[^,]+,/.test(content)) {
    const bytes = new Uint8Array(await fetch(content).then((response) => response.arrayBuffer()));
    await instance.fs.writeFile(fileName, bytes);
  } else {
    await instance.fs.writeFile(fileName, content);
  }
}

async function syncEditorFilesToRuntime() {
  const files = window.codxGetNodeProjectFiles?.() || [];
  for (const file of files) await writeRuntimeFile(file);
}

async function ensureStarterFiles() {
  const files = window.codxGetNodeProjectFiles?.() || [];
  const names = new Set(files.map((file) => file.name.toLowerCase()));
  if (!names.has("package.json")) {
    const contents = `${JSON.stringify({ name: "project", version: "1.0.0", private: true, scripts: { start: "node server.js" } }, null, 2)}\n`;
    window.codxUpsertNodeRuntimeFile?.("package.json", contents);
    await writeRuntimeFile({ name: "package.json", content: contents });
  } else {
    const packageFile = files.find((file) => file.name.toLowerCase() === "package.json");
    try {
      const packageData = JSON.parse(String(packageFile?.content || "{}"));
      if (packageData.name === "codx-node-app") {
        packageData.name = "project";
        const contents = `${JSON.stringify(packageData, null, 2)}\n`;
        window.codxUpsertNodeRuntimeFile?.("package.json", contents);
        await writeRuntimeFile({ name: "package.json", content: contents });
      }
    } catch (_error) {
      // Preserve custom package.json content even when it is not valid JSON yet.
    }
  }
  if (!names.has("server.js")) {
    const contents = `const http = require("http");\n\nconst port = process.env.PORT || 8000;\nconst server = http.createServer((_req, res) => {\n  res.writeHead(200, { "Content-Type": "text/plain" });\n  res.end("Hello from CodX Editor Node.js!\\n");\n});\n\nserver.listen(port, () => console.log(\`Server running on port \${port}\`));\n`;
    window.codxUpsertNodeRuntimeFile?.("server.js", contents);
    await writeRuntimeFile({ name: "server.js", content: contents });
  }
}

async function bootRuntime() {
  if (instance) return instance;
  if (bootPromise) return bootPromise;
  bootPromise = (async () => {
    if (!window.crossOriginIsolated) {
      throw new Error("Node.js requires a hard refresh after the isolation headers are enabled (Ctrl+Shift+R). Use Chrome or Edge.");
    }
    writeTerminal("Booting browser-isolated Node.js…\n", "info");
    instance = await WebContainer.boot({ coep: "credentialless" });
    instance.on("server-ready", (port, url) => {
      window.codxNodeRuntime.lastServer = { port, url, displayUrl: `http://localhost:${port}` };
      writeServerLink(port, url);
    });
    instance.on("error", (error) => writeTerminal(`\nRuntime error: ${error.message || error}\n`, "error"));
    await syncEditorFilesToRuntime();
    await ensureStarterFiles();
    writeTerminal("Node.js is ready. Try: npm install express\n$ ", "success");
    return instance;
  })().catch((error) => {
    instance = null;
    bootPromise = null;
    writeTerminal(`\n${error.message || error}\n`, "error");
    throw error;
  });
  return bootPromise;
}

async function syncDependencyFilesBack() {
  for (const name of ["package.json", "package-lock.json"]) {
    try {
      const contents = await instance.fs.readFile(name, "utf8");
      window.codxUpsertNodeRuntimeFile?.(name, contents);
    } catch (_error) {
      // The file does not exist yet.
    }
  }
}

async function runCommand(command) {
  const trimmed = String(command || "").trim();
  if (!trimmed) return;
  await bootRuntime();
  await syncEditorFilesToRuntime();
  writeTerminal(`${trimmed}\n`);
  const process = await instance.spawn("jsh", ["-c", trimmed], {
    terminal: { cols: 90, rows: 28 },
    env: {
      TERM: "dumb",
      FORCE_COLOR: "0",
      NO_COLOR: "1",
      NO_UPDATE_NOTIFIER: "1",
      npm_config_color: "false",
      npm_config_progress: "false",
      npm_config_update_notifier: "false",
      PORT: "8000",
    },
  });
  process.output.pipeTo(new WritableStream({ write: (data) => writeTerminal(data) })).catch(() => {});
  process.exit.then(async (code) => {
    await syncDependencyFilesBack();
    writeTerminal(`\n[process exited with code ${code}]\n$ `, code === 0 ? "success" : "error");
  });
}

async function toggle() {
  enabled = !enabled;
  preview?.classList.toggle("node-runtime-active", enabled);
  terminal.hidden = !enabled;
  toggleButton?.classList.toggle("node-runtime-enabled", enabled);
  if (toggleLabel) toggleLabel.textContent = enabled ? "DISABLE NODE.JS" : "ENABLE NODE.JS";
  toggleButton?.setAttribute("aria-pressed", enabled ? "true" : "false");
  if (!enabled) {
    if (previewTitle) previewTitle.textContent = previousPreviewTitle;
    return;
  }
  previousPreviewTitle = previewTitle?.textContent || "Preview";
  if (previewTitle) previewTitle.textContent = "Node.js Console";
  consoleContainer?.classList.add("show");
  terminalInput?.focus();
  await bootRuntime();
}

terminalForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const command = terminalInput.value;
  terminalInput.value = "";
  runCommand(command).catch((error) => writeTerminal(`\n${error.message || error}\n$ `, "error"));
});

clearConsoleButton?.addEventListener("click", () => {
  if (enabled && terminalOutput) terminalOutput.textContent = "";
});

window.codxNodeRuntime = { toggle, runCommand, get enabled() { return enabled; } };
