import { WebContainer } from "/vendor/webcontainer/index.js";

const preview = document.querySelector(".preview");
const consoleContainer = document.getElementById("consoleContainer");
const terminal = document.getElementById("nodeTerminal");
const terminalOutput = document.getElementById("nodeTerminalOutput");
const terminalForm = document.getElementById("nodeTerminalForm");
const terminalInput = document.getElementById("nodeTerminalInput");
const terminalRunButton = document.getElementById("nodeTerminalRunBtn");
const terminalStopButton = document.getElementById("nodeTerminalStopBtn");
const toggleButton = document.getElementById("enableNodeRuntimeBtn");
const toggleLabel = document.getElementById("enableNodeRuntimeBtnLabel");
const previewTitle = document.getElementById("previewTitle");
const clearConsoleButton = document.getElementById("clearConsoleBtn");

let instance = null;
let bootPromise = null;
let enabled = false;
let previousPreviewTitle = "Preview";
let consoleWasOpen = false;
let toggleInProgress = false;
let activeProcess = null;
let activeCommand = "";
let commandStarting = false;
let syncedEditorFileNames = new Set();
const activeServerPorts = new Set();

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
    activeServerPorts.add(String(port));
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

function clearServerLinks() {
  activeServerPorts.forEach((port) => {
    try {
      localStorage.removeItem(`codxNodePreview:${port}`);
    } catch (_error) {
      // Storage may be unavailable in a restricted browser context.
    }
  });
  activeServerPorts.clear();
  terminalOutput?.querySelectorAll(".node-terminal-server-link").forEach((link) => {
    link.replaceWith(document.createTextNode(`${link.textContent || "Server"} (stopped)`));
  });
  if (window.codxNodeRuntime) window.codxNodeRuntime.lastServer = null;
}

function normalizeRuntimeFileName(value) {
  const fileName = String(value || "").replace(/\\/g, "/").replace(/^\.\//, "");
  const parts = fileName.split("/").filter(Boolean);
  if (!fileName || fileName.startsWith("/") || parts.includes("..") || parts[0]?.toLowerCase() === "node_modules") {
    return "";
  }
  return parts.join("/");
}

async function ensureDirectory(filePath) {
  const parts = String(filePath).split("/").filter(Boolean);
  parts.pop();
  if (parts.length) await instance.fs.mkdir(parts.join("/"), { recursive: true });
}

async function writeRuntimeFile(file) {
  const fileName = normalizeRuntimeFileName(file.name);
  if (!fileName) return "";
  await ensureDirectory(fileName);
  const content = String(file.content || "");
  if (/^data:[^,]+,/.test(content)) {
    const bytes = new Uint8Array(await fetch(content).then((response) => response.arrayBuffer()));
    await instance.fs.writeFile(fileName, bytes);
  } else {
    await instance.fs.writeFile(fileName, content);
  }
  return fileName;
}

async function syncEditorFilesToRuntime() {
  const files = window.codxGetNodeProjectFiles?.() || [];
  const normalizedFiles = files
    .map((file) => ({ ...file, name: normalizeRuntimeFileName(file?.name) }))
    .filter((file) => file.name);
  const nextFileNames = new Set(normalizedFiles.map((file) => file.name));

  for (const fileName of syncedEditorFileNames) {
    if (!nextFileNames.has(fileName)) {
      await instance.fs.rm(fileName, { force: true, recursive: true });
    }
  }
  for (const file of normalizedFiles) await writeRuntimeFile(file);
  syncedEditorFileNames = nextFileNames;
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
    writeTerminal("Booting browser-isolated Node.js...\n", "info");
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

function setCommandControls(running) {
  if (terminalInput) {
    terminalInput.disabled = running;
    terminalInput.placeholder = running ? `Running: ${activeCommand}` : "npm install express";
  }
  if (terminalRunButton) terminalRunButton.disabled = running;
  if (terminalStopButton) terminalStopButton.disabled = !running || !activeProcess;
}

async function stopActiveProcess({ announce = true } = {}) {
  const processToStop = activeProcess;
  if (!processToStop) return false;
  if (announce) writeTerminal(`\nStopping ${activeCommand || "running command"}...\n`, "info");
  try {
    processToStop.kill();
    await processToStop.exit;
  } catch (error) {
    writeTerminal(`\nUnable to stop the command: ${error?.message || error}\n`, "error");
  }
  return true;
}

async function runCommand(command) {
  const trimmed = String(command || "").trim();
  if (!trimmed) return;
  if (activeProcess || commandStarting) {
    throw new Error(`"${activeCommand}" is still running. Stop it before starting another command.`);
  }
  commandStarting = true;
  activeCommand = trimmed;
  setCommandControls(true);
  let spawnedProcess = null;
  let code = 1;
  try {
    await bootRuntime();
    await syncEditorFilesToRuntime();
    writeTerminal(`$ ${trimmed}\n`);
    spawnedProcess = await instance.spawn("jsh", ["-c", trimmed], {
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
    activeProcess = spawnedProcess;
    commandStarting = false;
    setCommandControls(true);
    const outputComplete = spawnedProcess.output
      .pipeTo(new WritableStream({ write: (data) => writeTerminal(data) }))
      .catch(() => {});
    code = await spawnedProcess.exit;
    await outputComplete;
    await syncDependencyFilesBack();
  } finally {
    commandStarting = false;
    if (!spawnedProcess || activeProcess === spawnedProcess) {
      activeProcess = null;
      activeCommand = "";
      clearServerLinks();
      setCommandControls(false);
    }
  }
  writeTerminal(`\n[process exited with code ${code}]\n$ `, code === 0 ? "success" : "error");
  terminalInput?.focus();
  return code;
}

function setEnabled(nextEnabled) {
  enabled = Boolean(nextEnabled);
  preview?.classList.toggle("node-runtime-active", enabled);
  terminal.hidden = !enabled;
  toggleButton?.classList.toggle("node-runtime-enabled", enabled);
  if (toggleLabel) toggleLabel.textContent = enabled ? "DISABLE NODE.JS" : "ENABLE NODE.JS";
  toggleButton?.setAttribute("aria-pressed", enabled ? "true" : "false");
  toggleButton?.setAttribute("aria-label", `${enabled ? "Disable" : "Enable"} Node.js runtime`);
  toggleButton?.setAttribute("title", `${enabled ? "Disable" : "Enable"} the browser-isolated Node.js runtime`);
  if (previewTitle) previewTitle.textContent = enabled ? "Node.js Console" : previousPreviewTitle;
}

function restoreConsoleVisibility() {
  if (!consoleWasOpen) consoleContainer?.classList.remove("show");
}

async function toggle() {
  if (toggleInProgress) return;
  toggleInProgress = true;
  if (toggleButton) toggleButton.disabled = true;
  try {
    if (enabled) {
      if (commandStarting) {
        throw new Error("The Node.js command is still starting. Wait for Stop to become available, then try again.");
      }
      await stopActiveProcess();
      clearServerLinks();
      setEnabled(false);
      restoreConsoleVisibility();
      return;
    }

    previousPreviewTitle = previewTitle?.textContent || "Preview";
    consoleWasOpen = Boolean(consoleContainer?.classList.contains("show"));
    consoleContainer?.classList.add("show");
    setEnabled(true);
    window.codxSetMobileWorkspacePane?.("console");
    try {
      await bootRuntime();
      terminalInput?.focus();
    } catch (error) {
      setEnabled(false);
      restoreConsoleVisibility();
      throw error;
    }
  } finally {
    toggleInProgress = false;
    if (toggleButton) toggleButton.disabled = false;
  }
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

terminalStopButton?.addEventListener("click", () => {
  stopActiveProcess().catch((error) => writeTerminal(`\n${error?.message || error}\n`, "error"));
});

setCommandControls(false);
window.codxNodeRuntime = {
  toggle,
  runCommand,
  stop: stopActiveProcess,
  lastServer: null,
  get enabled() { return enabled; },
  get runningCommand() { return activeCommand; },
};
