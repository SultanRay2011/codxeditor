const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const rootDirectory = __dirname;
const restartRequiredNames = new Set(["server.js", ".env"]);
const ignoredNames = new Set([
  ".codx-github-sessions.enc",
  ".codx-github-sessions.enc.tmp",
  "package-lock.json",
  "published-projects.json",
]);

let serverProcess = null;
let restartTimer = null;
let forceStopTimer = null;
let restartRequested = false;
let isStopping = false;
let watcher = null;

function startServer() {
  restartRequested = false;
  serverProcess = spawn(process.execPath, [path.join(rootDirectory, "server.js")], {
    cwd: rootDirectory,
    env: process.env,
    stdio: "inherit",
    windowsHide: true,
  });

  serverProcess.once("exit", (code, signal) => {
    clearTimeout(forceStopTimer);
    forceStopTimer = null;
    serverProcess = null;
    if (isStopping) return;
    if (restartRequested) {
      console.log("[dev] Restarting CodX Editor...");
      startServer();
      return;
    }
    console.log(`[dev] Server stopped (${signal || code}). Waiting for a file change.`);
  });
}

function restartServer(fileName) {
  clearTimeout(restartTimer);
  restartTimer = setTimeout(() => {
    if (isStopping) return;
    console.log(`[dev] ${fileName} changed.`);
    restartRequested = true;
    if (!serverProcess) {
      startServer();
      return;
    }

    const processToStop = serverProcess;
    if (!processToStop.kill("SIGTERM")) {
      processToStop.kill("SIGKILL");
    }
    forceStopTimer = setTimeout(() => {
      if (serverProcess === processToStop) processToStop.kill("SIGKILL");
    }, 1500);
    forceStopTimer.unref();
  }, 350);
}

function shouldRestart(fileName) {
  const normalizedName = String(fileName || "").replace(/\\/g, "/");
  if (!normalizedName || normalizedName.includes("/")) return false;
  if (ignoredNames.has(normalizedName) || normalizedName.endsWith(".log")) return false;
  return restartRequiredNames.has(normalizedName);
}

function startDevelopmentServer() {
  watcher = fs.watch(rootDirectory, { persistent: true }, (_eventType, fileName) => {
    if (shouldRestart(fileName)) restartServer(String(fileName));
  });
  console.log("[dev] Static editor changes are served without restarting active features.");
  console.log("[dev] Watching server.js and .env for backend restarts.");
  startServer();
}

function stopDevelopmentServer(signal) {
  if (isStopping) return;
  isStopping = true;
  clearTimeout(restartTimer);
  watcher?.close();
  if (serverProcess) serverProcess.kill("SIGTERM");
  setTimeout(() => process.exit(0), 100).unref();
  console.log(`[dev] Received ${signal}. Development server stopped.`);
}

if (require.main === module) {
  process.once("SIGINT", () => stopDevelopmentServer("SIGINT"));
  process.once("SIGTERM", () => stopDevelopmentServer("SIGTERM"));
  startDevelopmentServer();
}

module.exports = { shouldRestart };
