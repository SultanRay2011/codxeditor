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
const nodeServerPreview = document.getElementById("nodeServerPreview");
const nodeServerFrame = document.getElementById("nodeServerFrame");
const nodeServerAddress = document.getElementById("nodeServerAddress");
const nodeServerReloadButton = document.getElementById("nodeServerReloadBtn");
const nodeServerOpenButton = document.getElementById("nodeServerOpenBtn");
const nodeViewToggleButton = document.getElementById("nodeViewToggleBtn");
const nodeViewToggleLabel = document.getElementById("nodeViewToggleLabel");
const nodeViewToggleIcon = document.getElementById("nodeViewToggleIcon");
const consoleOutputHeading = document.getElementById("consoleOutputHeading");

let activeServerUrl = "";

let instance = null;
let bootPromise = null;
let enabled = false;
let previousPreviewTitle = "Preview";
let consoleWasOpen = false;
let toggleInProgress = false;
let activeProcess = null;
let activeCommand = "";
let commandStarting = false;
// The command that last produced a running server, kept so the refresh button
// can stop and start it again (activeCommand is cleared when a process exits).
let lastServerCommand = "";
let restartInProgress = false;
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

/* ------------------------------------------------------------------
   Smart Node.js / npm problem detection
   Scans terminal output for well-known failures and explains them in
   plain language, with a one-click fix where one exists.
   ------------------------------------------------------------------ */

// Turn a require()/import specifier into the package to install:
// "express" -> "express", "@scope/pkg/sub" -> "@scope/pkg", "lodash/get" -> "lodash"
function toInstallablePackage(specifier) {
  const name = String(specifier || "").trim();
  if (!name || name.startsWith(".") || name.startsWith("/")) return "";
  if (/^(node:|fs$|path$|http$|https$|os$|url$|crypto$|events$|stream$|util$|child_process$|net$)/.test(name)) return "";
  const parts = name.split("/");
  return name.startsWith("@") ? parts.slice(0, 2).join("/") : parts[0];
}

const NODE_DIAGNOSTIC_RULES = [
  {
    // A broken package.json. npm's wording is very technical, so translate the
    // specific JSON complaint into the everyday typo that caused it.
    id: "invalid-package-json",
    // npm prints "code EJSONPARSE" first and the useful position on a later
    // line, so match the detail lines (which carry line/column) rather than the
    // bare code. `once` keeps the follow-up lines from adding duplicates.
    once: true,
    match: /Invalid package\.json|in JSON at position|JSON\.parse\b.*(?:Expected|Unexpected|Failed)|package\.json must be actual JSON/i,
    build: (m) => {
      const full = String(m.input || "");
      const at = full.match(/line (\d+) column (\d+)/i);
      const where = at ? ` (line ${at[1]}, column ${at[2]})` : "";
      const near = full.match(/while parsing near\s+"(.{0,60})/i);

      let fix;
      if (/Expected ',' or '}'/i.test(full)) {
        fix = at
          ? `Look at the end of line ${Number(at[1]) - 1} — it is probably missing a comma. Every entry needs a comma after it except the last one.`
          : "An entry is missing the comma that separates it from the next one.";
      } else if (/Expected ',' or ']'/i.test(full)) {
        fix = "An item in a list is missing the comma that separates it from the next one.";
      } else if (/Expected double-quoted property name/i.test(full)) {
        fix = at
          ? `There is probably an extra comma after the last entry before line ${at[1]}, or a name is missing its double quotes.`
          : "Remove the extra comma after the last entry, and put double quotes around every name.";
      } else if (/Expected ':'/i.test(full)) {
        fix = "A name is missing the colon between it and its value.";
      } else if (/Unexpected end of JSON/i.test(full)) {
        fix = "A closing } or ] is missing at the end of the file.";
      } else {
        fix = at
          ? `Open package.json and check line ${at[1]} around column ${at[2]}.`
          : "Open package.json and look for a missing comma, quote, or bracket.";
      }

      return {
        title: `package.json has a typo${where}`,
        detail:
          "npm could not read package.json because it is not valid JSON. JSON is stricter than JavaScript: every name and text value needs double quotes, entries are separated by commas, and the final entry must not have a comma after it." +
          (near ? ` The problem is near: ${near[1].replace(/\\n/g, " ").trim()}` : ""),
        fix,
        openFile: "package.json",
      };
    },
  },
  {
    id: "module-not-found",
    match: /(?:Cannot find module|Error: Cannot find package)\s+['"]([^'"]+)['"]/i,
    build: (m) => {
      const pkg = toInstallablePackage(m[1]);
      if (!pkg) {
        return {
          title: `File not found: ${m[1]}`,
          detail: "A require() or import points at a file that does not exist.",
          fix: "Check the path and file name (including capitalisation).",
        };
      }
      return {
        title: `Missing package: ${pkg}`,
        detail: `Your code imports "${m[1]}" but it is not installed.`,
        fix: `Install it, then run your command again.`,
        command: `npm install ${pkg}`,
        commandLabel: `INSTALL ${pkg}`,
      };
    },
  },
  {
    id: "port-in-use",
    match: /EADDRINUSE[^\d]*(\d+)?/i,
    build: (m) => ({
      title: `Port ${m[1] || ""} is already in use`.replace(/\s+/g, " ").trim(),
      detail: "Another server is still running on that port.",
      fix: "Press STOP to end the running server, then start it again — or listen on a different port.",
    }),
  },
  {
    id: "npm-404",
    // npm 10+ prints "npm error", older versions print "npm ERR!".
    match: /npm (?:ERR!|error)\s+404.*?['"]?([@\w./-]+)['"]?\s+is not in (?:this registry|the npm registry)/i,
    build: (m) => ({
      title: `Package not found: ${m[1]}`,
      detail: "npm could not find that package in the registry.",
      fix: "Check the spelling of the package name.",
    }),
  },
  {
    id: "eresolve",
    match: /ERESOLVE|unable to resolve dependency tree/i,
    build: () => ({
      title: "Dependency conflict",
      detail: "Two packages require incompatible versions of the same dependency.",
      fix: "Retry the install allowing legacy peer dependencies.",
      command: "npm install --legacy-peer-deps",
      commandLabel: "RETRY WITH --legacy-peer-deps",
    }),
  },
  {
    id: "missing-script",
    match: /(?:Missing script|missing script):\s*["']?([\w:-]+)["']?/i,
    build: (m) => ({
      title: `No "${m[1]}" script in package.json`,
      detail: `package.json has no "${m[1]}" entry under "scripts".`,
      fix: `Add it to "scripts", or run the file directly (for example: node server.js).`,
    }),
  },
  {
    id: "no-package-json",
    match: /ENOENT.*package\.json|Could not read package\.json/i,
    build: () => ({
      title: "No package.json found",
      detail: "This command needs a package.json in the project.",
      fix: "Create one first.",
      command: "npm init -y",
      commandLabel: "CREATE package.json",
    }),
  },
  {
    id: "esm-import",
    match: /Cannot use import statement outside a module/i,
    build: () => ({
      title: "import used in a CommonJS file",
      detail: "Node is treating this file as CommonJS, which cannot use import.",
      fix: 'Add "type": "module" to package.json, or use require() instead.',
    }),
  },
  {
    id: "require-esm",
    match: /ERR_REQUIRE_ESM|require\(\) of ES Module/i,
    build: () => ({
      title: "This package is ESM-only",
      detail: "It cannot be loaded with require().",
      fix: 'Use import instead, and add "type": "module" to package.json.',
    }),
  },
  {
    id: "syntax-error",
    match: /^\s*SyntaxError:\s*(.+)$/i,
    build: (m) => ({
      title: "Syntax error in your code",
      detail: m[1].trim(),
      fix: "Check the line shown just above for a missing bracket, quote or comma.",
    }),
  },
  {
    id: "reference-error",
    match: /^\s*ReferenceError:\s*(\w+) is not defined/i,
    build: (m) => ({
      title: `"${m[1]}" is not defined`,
      detail: `The name "${m[1]}" is used before it is declared or imported.`,
      fix: `Declare it, import it, or check the spelling.`,
    }),
  },
  {
    id: "type-error",
    match: /^\s*TypeError:\s*(.+)$/i,
    build: (m) => ({
      title: "Type error while running",
      detail: m[1].trim(),
      fix: "A value is not the type you expected — often undefined or null.",
    }),
  },
  {
    id: "network",
    match: /ENOTFOUND|EAI_AGAIN|network.*(?:unreachable|timeout)|ETIMEDOUT/i,
    build: () => ({
      title: "Network problem",
      detail: "npm could not reach the registry.",
      fix: "Check your internet connection and try again.",
    }),
  },
];

let terminalLineBuffer = "";
const reportedDiagnostics = new Set();

function resetTerminalDiagnostics() {
  terminalLineBuffer = "";
  reportedDiagnostics.clear();
}

function detectNodeIssue(line) {
  const text = String(line || "");
  if (!text.trim()) return null;
  for (const rule of NODE_DIAGNOSTIC_RULES) {
    const found = text.match(rule.match);
    if (!found) continue;
    const built = rule.build(found);
    // `once` rules report a single time per command, even when the tool prints
    // several related lines with differing wording.
    const key = rule.once ? rule.id : `${rule.id}:${built.title}`;
    return { id: rule.id, key, ...built };
  }
  return null;
}

function writeTerminalDiagnostic(diagnostic) {
  if (!terminalOutput) return;
  const box = document.createElement("div");
  box.className = "node-terminal-diagnostic";

  const heading = document.createElement("strong");
  heading.textContent = diagnostic.title;
  box.appendChild(heading);

  if (diagnostic.detail) {
    const detail = document.createElement("span");
    detail.textContent = diagnostic.detail;
    box.appendChild(detail);
  }
  if (diagnostic.fix) {
    const fix = document.createElement("em");
    fix.textContent = `Fix: ${diagnostic.fix}`;
    box.appendChild(fix);
  }
  if (diagnostic.command) {
    const action = document.createElement("button");
    action.type = "button";
    action.className = "node-terminal-diagnostic-action";
    action.textContent = diagnostic.commandLabel || diagnostic.command;
    action.title = diagnostic.command;
    action.addEventListener("click", () => {
      if (activeProcess || commandStarting) {
        writeTerminal("\nStop the running command first.\n", "error");
        return;
      }
      runCommand(diagnostic.command).catch((error) =>
        writeTerminal(`\n${error?.message || error}\n$ `, "error"),
      );
    });
    box.appendChild(action);
  }
  // Jump straight to the file that needs fixing.
  if (diagnostic.openFile && typeof window.switchFile === "function") {
    const open = document.createElement("button");
    open.type = "button";
    open.className = "node-terminal-diagnostic-action";
    open.textContent = `OPEN ${diagnostic.openFile}`;
    open.title = `Open ${diagnostic.openFile} in the editor`;
    open.addEventListener("click", () => {
      try {
        window.switchFile(diagnostic.openFile);
        setServerView("terminal");
      } catch (_error) {
        writeTerminal(`\nCould not open ${diagnostic.openFile}.\n`, "error");
      }
    });
    box.appendChild(open);
  }

  terminalOutput.appendChild(box);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// Buffers output so detection always runs on whole lines, never partial chunks.
function analyzeTerminalOutput(chunk, { flush = false } = {}) {
  terminalLineBuffer += cleanTerminalOutput(chunk);
  const lines = terminalLineBuffer.split("\n");
  terminalLineBuffer = flush ? "" : lines.pop() || "";
  if (flush && lines.length === 0) return;
  lines.forEach((line) => {
    const diagnostic = detectNodeIssue(line);
    if (!diagnostic || reportedDiagnostics.has(diagnostic.key)) return;
    reportedDiagnostics.add(diagnostic.key);
    writeTerminalDiagnostic(diagnostic);
  });
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
  // A WebContainer server lives inside this editor tab, so it can't be opened
  // as a separate browser tab (that just shows a blank page). Clicking the
  // address shows it live in the in-pane preview instead.
  const link = document.createElement("button");
  link.type = "button";
  link.className = "node-terminal-server-link";
  link.textContent = `http://localhost:${port}`;
  link.title = "Show the running server in the preview";
  link.addEventListener("click", () => setServerView("preview"));
  terminalOutput.append(
    link,
    document.createTextNode(" — showing in the preview above (use SHOW TERMINAL / SHOW PREVIEW to switch)\n"),
  );
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
  hideServerPreview();
}

// Switch the console area between the terminal and the live server preview.
// The WebContainer preview only renders embedded in this isolated page, so it
// is shown in-pane here rather than opened as a (blank) top-level browser tab.
function setServerView(view) {
  const showPreview = view === "preview";
  preview?.classList.toggle("node-view-preview", showPreview);
  if (nodeViewToggleButton) {
    nodeViewToggleButton.setAttribute("aria-pressed", showPreview ? "true" : "false");
  }
  if (nodeViewToggleLabel) {
    nodeViewToggleLabel.textContent = showPreview ? "SHOW TERMINAL" : "SHOW PREVIEW";
  }
  if (nodeViewToggleIcon) {
    nodeViewToggleIcon.className = showPreview ? "fa-solid fa-terminal" : "fa-solid fa-display";
  }
  if (consoleOutputHeading) {
    consoleOutputHeading.textContent = showPreview ? "Live Server" : "Node.js Terminal";
  }
}

// Reveal the running Node.js server live inside the editor so the user sees
// their site immediately, and expose the terminal/preview toggle button.
function showServerPreview(port, runtimeUrl) {
  if (!nodeServerPreview || !nodeServerFrame || !runtimeUrl) return;
  activeServerUrl = runtimeUrl;
  if (nodeServerAddress) nodeServerAddress.textContent = `http://localhost:${port}`;
  if (nodeServerOpenButton) {
    nodeServerOpenButton.href = `/node-preview.html?port=${encodeURIComponent(port)}`;
  }
  nodeServerFrame.src = runtimeUrl;
  nodeServerPreview.hidden = false;
  preview?.classList.add("node-server-live");
  // Land on the preview so the running site is visible right away.
  setServerView("preview");
}

function hideServerPreview() {
  activeServerUrl = "";
  if (nodeServerFrame) nodeServerFrame.removeAttribute("src");
  if (nodeServerPreview) nodeServerPreview.hidden = true;
  preview?.classList.remove("node-server-live");
  preview?.classList.remove("node-view-preview");
  if (consoleOutputHeading) consoleOutputHeading.textContent = "Console Output";
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
    // `require-corp` matches the editor page's isolation and produces preview
    // URLs that render both in-pane and when opened in a standalone browser tab.
    instance = await WebContainer.boot({ coep: "require-corp" });
    instance.on("server-ready", (port, url) => {
      window.codxNodeRuntime.lastServer = { port, url, displayUrl: `http://localhost:${port}` };
      // Remember what started this server so it can be restarted later.
      if (activeCommand) lastServerCommand = activeCommand;
      writeServerLink(port, url);
      showServerPreview(port, url);
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
  resetTerminalDiagnostics();
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
      .pipeTo(new WritableStream({
        write: (data) => {
          writeTerminal(data);
          analyzeTerminalOutput(data);
        },
      }))
      .catch(() => {});
    code = await spawnedProcess.exit;
    await outputComplete;
    // Check any final line that arrived without a trailing newline.
    analyzeTerminalOutput("", { flush: true });
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
  if (toggleButton) toggleButton.dataset.runtimeState = enabled ? "enabled" : "disabled";
  if (toggleLabel) toggleLabel.textContent = enabled ? "DISABLE NODE.JS" : "ENABLE NODE.JS";
  const toggleIcon = toggleButton?.querySelector("i");
  if (toggleIcon) toggleIcon.className = enabled ? "fa-solid fa-power-off" : "fa-brands fa-node-js";
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
  if (toggleButton) {
    toggleButton.disabled = true;
    toggleButton.setAttribute("aria-busy", "true");
  }
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
    setEnabled(enabled);
    if (toggleButton) {
      toggleButton.disabled = false;
      toggleButton.removeAttribute("aria-busy");
    }
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

// Stop the running server and start it again, so code changes are picked up.
// Falls back to reloading the page when there is no command to restart.
async function restartServerProcess() {
  if (restartInProgress) return;
  const command = activeCommand || lastServerCommand;
  if (!command) {
    if (nodeServerFrame && activeServerUrl) nodeServerFrame.src = activeServerUrl;
    return;
  }

  restartInProgress = true;
  if (nodeServerReloadButton) {
    nodeServerReloadButton.disabled = true;
    nodeServerReloadButton.setAttribute("aria-busy", "true");
  }
  try {
    writeTerminal(`\nRestarting ${command}...\n`, "info");
    await stopActiveProcess({ announce: false });
    // Wait for the previous run to finish tearing down before starting again,
    // otherwise runCommand rejects because a command is still active.
    for (let attempt = 0; attempt < 100 && (activeProcess || commandStarting); attempt += 1) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    // A server keeps running, so don't await completion here.
    runCommand(command).catch((error) =>
      writeTerminal(`\n${error?.message || error}\n$ `, "error"),
    );
  } catch (error) {
    writeTerminal(`\n${error?.message || error}\n$ `, "error");
  } finally {
    restartInProgress = false;
    if (nodeServerReloadButton) {
      nodeServerReloadButton.disabled = false;
      nodeServerReloadButton.removeAttribute("aria-busy");
    }
  }
}

nodeServerReloadButton?.addEventListener("click", () => {
  restartServerProcess();
});

nodeViewToggleButton?.addEventListener("click", () => {
  const showingPreview = preview?.classList.contains("node-view-preview");
  setServerView(showingPreview ? "terminal" : "preview");
});

setCommandControls(false);
window.codxNodeRuntime = {
  toggle,
  runCommand,
  stop: stopActiveProcess,
  restart: restartServerProcess,
  lastServer: null,
  get enabled() { return enabled; },
  get runningCommand() { return activeCommand; },
};
