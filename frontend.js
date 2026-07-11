// PART 1 - INITIALIZATION & CONSTANTS
const iframe = document.getElementById("output");
const autoRunCheckbox = document.getElementById("autoRun");
const showConsoleCheckbox = document.getElementById("showConsole");
const consoleContainer = document.querySelector(".console-container");
const consoleOutput = document.getElementById("consoleOutput");
const divider = document.querySelector(".divider");
const editorsPanel = document.querySelector(".editors");
const previewPanel = document.querySelector(".preview");
const lineNumbers = document.getElementById("lineNumbers");
const highlightLayer = document.getElementById("highlightLayer");
const remoteCursorLayer = document.getElementById("remoteCursorLayer");
const editorContainer = document.querySelector(".editor-container");
const settingsBtn = document.getElementById("settingsBtn");
const settingsModal = document.getElementById("settingsModal");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");
const applySettingsBtn = document.getElementById("applySettings");
const resetSettingsBtn = document.getElementById("resetSettings");
const editorBgColorInput = document.getElementById("editorBgColor");
const editorBgColorText = document.getElementById("editorBgColorText");
const themeColorInput = document.getElementById("themeColor");
const themeColorText = document.getElementById("themeColorText");
const resetThemeColorBtn = document.getElementById("resetThemeColorBtn");
const editorTextSizeInput = document.getElementById("editorTextSize");
const textSizeValue = document.getElementById("textSizeValue");
const zenShowFilesCheckbox = document.getElementById("zenShowFiles");
const fullscreenPreviewPanelCheckbox = document.getElementById("fullscreenPreviewPanel");
const editorFontFamilySelect = document.getElementById("editorFontFamily");
const editorFontEmbedInput = document.getElementById("editorFontEmbed");
const settingsPreview = document.getElementById("settingsPreview");
const settingsPreviewCode = document.getElementById("settingsPreviewCode");
const newFileBtn = document.getElementById("newFileBtn");
const fileList = document.getElementById("fileList");
const collabBtn = document.getElementById("collabBtn");
const collabModal = document.getElementById("collabModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeModalBtn = document.getElementById("closeModalBtn");
const typingIndicatorEl = document.getElementById("typingIndicator");
const editorWatermark = document.getElementById("editorWatermark");
const exportZipBtn = document.querySelector('button[aria-label="Export project as ZIP"]');
const importZipBtn = document.querySelector('button[aria-label="Import ZIP file"]');
const previewFullscreenBtn = document.getElementById("previewFullscreenBtn");
const previewTitleEl = document.getElementById("previewTitle");
const previewLinkEl = document.getElementById("previewLink");
const previewFaviconEl = document.getElementById("previewFavicon");
const previewInspectBtn = document.getElementById("previewInspectBtn");
const previewZoomBtn = document.getElementById("previewZoomBtn");
const previewZoomModal = document.getElementById("previewZoomModal");
const closePreviewZoomBtn = document.getElementById("closePreviewZoomBtn");
const previewZoomValue = document.getElementById("previewZoomValue");
const previewZoomOutBtn = document.getElementById("previewZoomOutBtn");
const previewZoomInBtn = document.getElementById("previewZoomInBtn");
const previewZoomResetBtn = document.getElementById("previewZoomResetBtn");
const errorMsgEl = document.getElementById("errorMsg");
const zenModeBtn = document.getElementById("zenModeBtn");
const zenExitBtn = document.getElementById("zenExitBtn");
const homepageButton = document.getElementById('homepageBtn');
const announcementPopup = document.getElementById("announcementPopup");
const announcementPopupText = document.getElementById("announcementPopupText");
const announcementPopupOkBtn = document.getElementById("announcementPopupOkBtn");
const appDialog = document.getElementById("appDialog");
const appDialogTitle = document.getElementById("appDialogTitle");
const appDialogMessage = document.getElementById("appDialogMessage");
const appDialogInput = document.getElementById("appDialogInput");
const appDialogActions = document.getElementById("appDialogActions");
const developerConsoleModal = document.getElementById("developerConsoleModal");
const developerConsoleOutput = document.getElementById("developerConsoleOutput");
const developerConsoleInput = document.getElementById("developerConsoleInput");
const runDeveloperCommandBtn = document.getElementById("runDeveloperCommandBtn");
const clearDeveloperConsoleBtn = document.getElementById("clearDeveloperConsoleBtn");
const closeDeveloperConsoleBtn = document.getElementById("closeDeveloperConsoleBtn");
const saveProjectBtn = document.getElementById("saveProjectBtn");
const projectStatusSaveBtn = document.getElementById("projectStatusSaveBtn");
const newProjectBtn = document.getElementById("newProjectBtn");
const openSavedProjectsBtn = document.getElementById("openSavedProjectsBtn");
const templatesBtn = document.getElementById("templatesBtn");
const publishProjectBtn = document.getElementById("publishProjectBtn");
const connectGitHubBtn = document.getElementById("connectGitHubBtn");
const connectGitHubBtnLabel = document.getElementById("connectGitHubBtnLabel");
const enableNodeRuntimeBtn = document.getElementById("enableNodeRuntimeBtn");
const enableNodeRuntimeBtnLabel = document.getElementById("enableNodeRuntimeBtnLabel");
const githubRepoModal = document.getElementById("githubRepoModal");
const githubRepoModalTitle = document.getElementById("githubRepoModalTitle");
const githubRepoModalBody = document.getElementById("githubRepoModalBody");
const closeGitHubRepoModalBtn = document.getElementById("closeGitHubRepoModalBtn");
const projectLibraryModal = document.getElementById("projectLibraryModal");
const closeProjectLibraryBtn = document.getElementById("closeProjectLibraryBtn");
const projectLibraryBody = document.getElementById("projectLibraryBody");
const projectStatusBadge = document.getElementById("projectStatusBadge");
const projectStatusMeta = document.getElementById("projectStatusMeta");
const runPreviewBtn = document.getElementById("runPreviewBtn");
const clearConsoleBtn = document.getElementById("clearConsoleBtn");
const headerMoreMenu = document.getElementById("headerMoreMenu");
const headerMoreBtn = document.getElementById("headerMoreBtn");
const headerMorePanel = document.getElementById("headerMorePanel");
const undoEditorBtn = document.getElementById("undoEditorBtn");
const redoEditorBtn = document.getElementById("redoEditorBtn");


function getModalDoneBtn() {
  return document.getElementById("modalDoneBtn");
}

function setHeaderMoreMenuOpen(isOpen) {
  if (!headerMoreBtn || !headerMorePanel) return;
  headerMoreBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  headerMorePanel.hidden = !isOpen;
}

if (headerMoreBtn && headerMorePanel) {
  headerMoreBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    setHeaderMoreMenuOpen(headerMorePanel.hidden);
  });

  headerMorePanel.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("click", (e) => {
    if (!headerMoreMenu || headerMorePanel.hidden) return;
    if (!headerMoreMenu.contains(e.target)) {
      setHeaderMoreMenuOpen(false);
    }
  });

  headerMorePanel.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      setHeaderMoreMenuOpen(false);
    });
  });
}

let githubConnectionState = {
  configured: true,
  connected: false,
  user: null,
  scope: "",
};
let githubRepoFileState = { repo: null, staged: new Map() };

function hasGitHubSessionCookie() {
  return document.cookie.split(";").some((part) => part.trim().startsWith("codx_github_session="));
}

function updateGitHubConnectButton() {
  if (!connectGitHubBtn || !connectGitHubBtnLabel) return;
  const login = String(githubConnectionState.user?.login || "").trim();
  connectGitHubBtn.classList.toggle("github-connected", githubConnectionState.connected);
  connectGitHubBtnLabel.textContent = githubConnectionState.connected && login
    ? `GITHUB: @${login}`
    : "CONNECT TO GITHUB";
  connectGitHubBtn.title = !githubConnectionState.configured
    ? "GitHub OAuth is not configured on this server"
    : githubConnectionState.connected
      ? `Connected as @${login}. Click to open your repositories.`
      : "Sign in with your GitHub account";
}

async function refreshGitHubConnectionStatus() {
  if (!connectGitHubBtn) return;
  const previousState = githubConnectionState;
  try {
    const response = await fetch("/api/github/status", {
      headers: { Accept: "application/json" },
      credentials: "same-origin",
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Unable to check GitHub connection");
    githubConnectionState = {
      configured: Boolean(data.configured),
      connected: Boolean(data.connected),
      user: data.user || null,
      scope: data.scope || "",
    };
    updateGitHubConnectButton();
  } catch (_err) {
    if (previousState.connected || hasGitHubSessionCookie()) {
      githubConnectionState = {
        ...previousState,
        connected: true,
        configured: previousState.configured !== false,
      };
    } else {
      githubConnectionState = { configured: true, connected: false, user: null, scope: "" };
    }
    updateGitHubConnectButton();
  }
}

function handleGitHubOAuthResult() {
  const url = new URL(window.location.href);
  const result = url.searchParams.get("github");
  if (!result) return;
  url.searchParams.delete("github");
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  const messages = {
    connected: ["GitHub account connected successfully.", "success"],
    access_denied: ["GitHub connection was cancelled.", "warn"],
    not_configured: ["GitHub OAuth is not configured on this server.", "error"],
    invalid_state: ["GitHub login expired or failed its security check. Please try again.", "error"],
    missing_code: ["GitHub did not return an authorization code.", "error"],
    failed: ["GitHub connection failed. Please try again.", "error"],
  };
  const [message, type] = messages[result] || ["GitHub connection could not be completed.", "error"];
  setTimeout(() => showNotification(message, type), 0);
}

if (connectGitHubBtn) {
  connectGitHubBtn.addEventListener("click", () => {
    if (!githubConnectionState.configured) {
      showNotification("Set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET on the server first.", "error");
      return;
    }
    if (githubConnectionState.connected) {
      openGitHubRepositoryModal();
      return;
    }
    beginGitHubOAuth();
  });
  handleGitHubOAuthResult();
  refreshGitHubConnectionStatus();
}

function beginGitHubOAuth() {
    const returnTo = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    window.location.assign(`/auth/github?returnTo=${encodeURIComponent(returnTo)}`);
}

function closeGitHubRepositoryModal() {
  if (githubRepoModal) githubRepoModal.hidden = true;
}

async function openGitHubRepositoryModal() {
  if (!githubRepoModal || !githubRepoModalBody) return;
  githubRepoModal.hidden = false;
  githubRepoModal.querySelector(".github-repo-dialog")?.focus();
  githubRepoModalTitle.textContent = "Repositories";
  githubRepoModalBody.innerHTML = '<div class="github-empty"><i class="fa-solid fa-spinner fa-spin"></i> Loading repositories…</div>';
  try {
    const response = await fetch("/api/github/repos", { credentials: "same-origin", headers: { Accept: "application/json" } });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Unable to load repositories.");
    renderGitHubRepositories(data.repos || [], data.scope || githubConnectionState.scope);
  } catch (error) {
    githubRepoModalBody.innerHTML = `<div class="github-status error">${escapeHtml(error.message)}</div>`;
  }
}

function renderGitHubRepositories(repositories, scope = "") {
  const hasRepoScope = String(scope).split(/[ ,]+/).includes("repo");
  githubRepoModalBody.innerHTML = `
    ${hasRepoScope ? "" : '<div class="github-file-warning">Reconnect to grant repository access if private repositories are missing. <button type="button" class="github-secondary-button" data-github-action="reconnect">Reconnect</button></div>'}
    <div class="github-repo-toolbar">
      <input id="githubRepoSearch" class="github-repo-search" type="search" placeholder="Search repositories…" aria-label="Search repositories">
      <button type="button" class="github-secondary-button" data-github-action="disconnect"><i class="fa-solid fa-right-from-bracket"></i> Disconnect</button>
    </div>
    <div id="githubRepoGrid" class="github-repo-grid"></div>`;
  const grid = document.getElementById("githubRepoGrid");
  const draw = (query = "") => {
    const filtered = repositories.filter((repo) => `${repo.fullName} ${repo.description}`.toLowerCase().includes(query.toLowerCase()));
    grid.innerHTML = filtered.length ? filtered.map((repo, index) => `
      <article class="github-repo-card">
        <h3><i class="fa-solid fa-code-branch"></i> ${escapeHtml(repo.fullName)}</h3>
        <div class="github-repo-meta"><span class="github-badge">${repo.private ? "Private" : "Public"}</span><span>${escapeHtml(repo.defaultBranch)}</span></div>
        <p>${escapeHtml(repo.description || "No description")}</p>
        <button type="button" class="github-primary-button" data-github-repo-index="${index}" ${repo.canPush ? "" : "disabled"}>${repo.canPush ? "Update files" : "Read only"}</button>
      </article>`).join("") : '<div class="github-empty">No matching repositories found.</div>';
    grid.querySelectorAll("[data-github-repo-index]").forEach((button) => {
      button.addEventListener("click", () => renderGitHubCommitView(filtered[Number(button.dataset.githubRepoIndex)]));
    });
  };
  draw();
  document.getElementById("githubRepoSearch")?.addEventListener("input", (event) => draw(event.target.value));
}

async function renderGitHubCommitView(repo) {
  if (!repo) return;
  githubRepoModalTitle.textContent = String(repo.fullName || repo.name || "Repository");
  githubRepoModalBody.innerHTML = '<div class="github-empty"><i class="fa-solid fa-spinner fa-spin"></i> Preparing files…</div>';
  try {
    githubRepoFileState = { repo, staged: new Map() };
    githubRepoModalBody.innerHTML = `
    <div class="github-commit-actions"><button type="button" class="github-secondary-button" data-github-action="repos"><i class="fa-solid fa-arrow-left"></i> Repositories</button><a class="github-secondary-button" href="${escapeHtmlAttributeValue(repo.htmlUrl)}" target="_blank" rel="noopener">Open on GitHub</a></div>
    <div class="github-repo-file-toolbar">
      <strong>Files in <span id="githubFilesBranchLabel">${escapeHtml(String(repo.defaultBranch || "main"))}</span></strong>
      <div class="github-repo-file-actions">
        <button id="githubRefreshFilesBtn" type="button" class="github-icon-button" aria-label="Refresh repository files" title="Refresh repository files"><i class="fa-solid fa-rotate"></i></button>
        <button id="githubCreateFileBtn" type="button" class="github-secondary-button"><i class="fa-solid fa-file-circle-plus"></i> Create file</button>
        <button id="githubUploadFileBtn" type="button" class="github-secondary-button"><i class="fa-solid fa-upload"></i> Upload file</button>
        <input id="githubUploadFileInput" type="file" multiple hidden>
      </div>
    </div>
    <div id="githubExistingFileList" class="github-file-list"><div class="github-empty"><i class="fa-solid fa-spinner fa-spin"></i> Loading repository files…</div></div>
    <section id="githubFileEditor" class="github-file-editor" hidden>
      <div class="github-form-field"><label for="githubFilePath">File path</label><input id="githubFilePath" class="github-form-control" placeholder="folder/file.html"></div>
      <div class="github-form-field"><label for="githubFileContent">File content</label><textarea id="githubFileContent" class="github-form-control" spellcheck="false"></textarea></div>
      <div class="github-commit-actions"><button id="githubCancelFileBtn" type="button" class="github-secondary-button">Cancel</button><button id="githubStageFileBtn" type="button" class="github-primary-button">Save change</button></div>
    </section>
    <div class="github-form-grid">
      <div class="github-form-field"><label for="githubCommitMessage">Commit message (optional)</label><input id="githubCommitMessage" class="github-form-control" maxlength="250" placeholder="Update files from CodX Editor"></div>
      <div class="github-form-field"><label for="githubCommitBranch">Branch</label><input id="githubCommitBranch" class="github-form-control" value="${escapeHtmlAttributeValue(repo.defaultBranch)}"></div>
    </div>
    <div class="github-form-field"><label for="githubCommitDescription">Description (optional)</label><textarea id="githubCommitDescription" class="github-form-control" placeholder="Add more details about this update"></textarea></div>
    <div class="github-form-field"><label>Created, edited, or uploaded files</label><div id="githubStagedFileList" class="github-file-list"><div class="github-empty">No repository file changes yet.</div></div></div>
    <div class="github-file-warning"><i class="fa-solid fa-shield-halved"></i> Review created, edited, and uploaded files before committing. Avoid uploading secrets such as .env files.</div>
    <div id="githubCommitStatus"></div>
    <div class="github-commit-actions"><span></span><button id="githubCommitBtn" type="button" class="github-primary-button"><i class="fa-solid fa-code-commit"></i> Commit selected files</button></div>`;
    document.getElementById("githubCommitBtn")?.addEventListener("click", () => commitProjectFilesToGitHub(repo));
    document.getElementById("githubRefreshFilesBtn")?.addEventListener("click", () => refreshGitHubRepositoryFiles(repo));
    document.getElementById("githubCreateFileBtn")?.addEventListener("click", () => { renderGitHubFileEditorControls(); openGitHubFileEditor(); });
    document.getElementById("githubUploadFileBtn")?.addEventListener("click", async () => {
      const choice = await showGitHubUploadSourcePicker();
      if (!choice?.ok) return;
      if (choice.source === "project") {
        const uploadedFiles = Array.isArray(projectFiles) ? projectFiles : [];
        const stagedCount = uploadedFiles.reduce((count, file) => {
          const fileName = normalizeProjectFileName(file?.name || "");
          if (!fileName) return count;
          githubRepoFileState.staged.set(fileName, { path: fileName, content: String(file?.content || ""), encoding: "utf-8" });
          return count + 1;
        }, 0);
        if (!stagedCount) {
          showNotification("There are no files in the current CodX Editor project to upload.", "warn");
          return;
        }
        renderGitHubStagedFiles();
        showNotification(`Added ${stagedCount} file(s) from the current CodX Editor project.`, "success");
        return;
      }
      document.getElementById("githubUploadFileInput")?.click();
    });
    document.getElementById("githubUploadFileInput")?.addEventListener("change", handleGitHubFileUpload);
    document.getElementById("githubCancelFileBtn")?.addEventListener("click", closeGitHubFileEditor);
    document.getElementById("githubStageFileBtn")?.addEventListener("click", stageGitHubEditedFile);
    document.getElementById("githubCommitMessage")?.focus();
    await loadExistingGitHubFiles(repo);
  } catch (error) {
    console.error("Unable to render GitHub files:", error);
    githubRepoModalBody.innerHTML = `<div class="github-status error"><strong>Files could not be displayed.</strong><br>${escapeHtml(String(error?.message || error || "Unknown error"))}</div><button type="button" class="github-secondary-button" data-github-action="repos">Back to repositories</button>`;
  }
}

async function loadExistingGitHubFiles(repo) {
  const container = document.getElementById("githubExistingFileList");
  if (!container) return;
  const branch = document.getElementById("githubCommitBranch")?.value.trim() || repo.defaultBranch;
  const branchLabel = document.getElementById("githubFilesBranchLabel");
  if (branchLabel) branchLabel.textContent = branch;
  container.innerHTML = '<div class="github-empty"><i class="fa-solid fa-spinner fa-spin"></i> Loading repository files…</div>';
  try {
    const response = await fetch(`/api/github/repos/${encodeURIComponent(repo.owner)}/${encodeURIComponent(repo.name)}/files?branch=${encodeURIComponent(branch)}`, {
      credentials: "same-origin", headers: { Accept: "application/json" },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Unable to load repository files.");
    container.innerHTML = data.files.length ? data.files.map((file) => {
      return `<button type="button" class="github-file-row github-file-row-button" data-github-existing-path="${escapeHtmlAttributeValue(file.path)}"><i class="fa-regular fa-file-code" aria-hidden="true"></i><span>${escapeHtml(file.path)}</span></button>`;
    }).join("") : '<div class="github-empty">This branch has no files yet.</div>';
    if (data.truncated) container.insertAdjacentHTML("beforeend", '<div class="github-file-warning">GitHub returned a shortened file list for this large repository.</div>');
    container.querySelectorAll("[data-github-existing-path]").forEach((button) => {
      button.addEventListener("click", () => editExistingGitHubFile(repo, button.dataset.githubExistingPath));
    });
  } catch (error) {
    container.innerHTML = `<div class="github-status error">${escapeHtml(error.message)}</div>`;
  }
}

async function refreshGitHubRepositoryFiles(repo) {
  const button = document.getElementById("githubRefreshFilesBtn");
  const icon = button?.querySelector("i");
  if (button) button.disabled = true;
  if (icon) icon.classList.add("fa-spin");
  await loadExistingGitHubFiles(repo);
  if (icon) icon.classList.remove("fa-spin");
  if (button) button.disabled = false;
}

function openGitHubFileEditor(path = "", content = "", lockPath = false) {
  const panel = document.getElementById("githubFileEditor");
  const pathInput = document.getElementById("githubFilePath");
  const contentInput = document.getElementById("githubFileContent");
  if (!panel || !pathInput || !contentInput) return;
  panel.hidden = false;
  pathInput.value = String(path || "");
  pathInput.readOnly = Boolean(lockPath);
  contentInput.value = String(content || "");
  (lockPath ? contentInput : pathInput).focus();
}

function closeGitHubFileEditor() {
  const panel = document.getElementById("githubFileEditor");
  if (panel) panel.hidden = true;
}

async function editExistingGitHubFile(repo, path) {
  const panel = document.getElementById("githubFileEditor");
  if (panel) {
    panel.hidden = false;
    panel.innerHTML = '<div class="github-empty"><i class="fa-solid fa-spinner fa-spin"></i> Loading file…</div>';
  }
  try {
    const branch = document.getElementById("githubCommitBranch")?.value.trim() || repo.defaultBranch;
    const response = await fetch(`/api/github/repos/${encodeURIComponent(repo.owner)}/${encodeURIComponent(repo.name)}/file?branch=${encodeURIComponent(branch)}&path=${encodeURIComponent(path)}`, { credentials: "same-origin", headers: { Accept: "application/json" } });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Unable to load this file.");
    if (data.file.binary) throw new Error("Binary files can be replaced with Upload file, but cannot be edited as text.");
    renderGitHubFileEditorControls();
    openGitHubFileEditor(data.file.path, data.file.content, true);
  } catch (error) {
    if (panel) panel.innerHTML = `<div class="github-status error">${escapeHtml(String(error.message || error))}</div><button type="button" class="github-secondary-button" onclick="this.closest('.github-file-editor').hidden=true">Close</button>`;
  }
}

function renderGitHubFileEditorControls() {
  const panel = document.getElementById("githubFileEditor");
  if (!panel) return;
  panel.innerHTML = `<div class="github-form-field"><label for="githubFilePath">File path</label><input id="githubFilePath" class="github-form-control" placeholder="folder/file.html"></div><div class="github-form-field"><label for="githubFileContent">File content</label><textarea id="githubFileContent" class="github-form-control" spellcheck="false"></textarea></div><div class="github-commit-actions"><button id="githubCancelFileBtn" type="button" class="github-secondary-button">Cancel</button><button id="githubStageFileBtn" type="button" class="github-primary-button">Save change</button></div>`;
  document.getElementById("githubCancelFileBtn")?.addEventListener("click", closeGitHubFileEditor);
  document.getElementById("githubStageFileBtn")?.addEventListener("click", stageGitHubEditedFile);
}

function stageGitHubEditedFile() {
  const rawPath = String(document.getElementById("githubFilePath")?.value || "").trim();
  const path = rawPath ? normalizeProjectFileName(rawPath) : "";
  const content = document.getElementById("githubFileContent")?.value || "";
  if (!path || path.split("/").some((part) => !part || part === "." || part === "..")) {
    showNotification("Enter a valid repository file path.", "error");
    return;
  }
  githubRepoFileState.staged.set(path, { path, content, encoding: "utf-8" });
  renderGitHubStagedFiles();
  closeGitHubFileEditor();
}

async function handleGitHubFileUpload(event) {
  const files = [...(event.target.files || [])];
  for (const file of files) {
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = () => reject(reader.error || new Error("Unable to read upload."));
      reader.readAsDataURL(file);
    });
    const fileName = normalizeProjectFileName(file.name);
    githubRepoFileState.staged.set(fileName, { path: fileName, content: dataUrl.split(",")[1] || "", encoding: "base64" });
  }
  event.target.value = "";
  renderGitHubStagedFiles();
}

function renderGitHubStagedFiles() {
  const container = document.getElementById("githubStagedFileList");
  if (!container) return;
  const files = [...githubRepoFileState.staged.values()];
  container.innerHTML = files.length ? files.map((file) => `<div class="github-file-row"><i class="fa-solid fa-code-commit"></i><span>${escapeHtml(file.path)}</span><button type="button" class="github-icon-button" data-github-remove-staged="${escapeHtmlAttributeValue(file.path)}" aria-label="Remove ${escapeHtmlAttributeValue(file.path)}"><i class="fa-solid fa-xmark"></i></button></div>`).join("") : '<div class="github-empty">No repository file changes yet.</div>';
  container.querySelectorAll("[data-github-remove-staged]").forEach((button) => button.addEventListener("click", () => {
    githubRepoFileState.staged.delete(button.dataset.githubRemoveStaged);
    renderGitHubStagedFiles();
  }));
}

async function commitProjectFilesToGitHub(repo) {
  const button = document.getElementById("githubCommitBtn");
  const status = document.getElementById("githubCommitStatus");
  const message = document.getElementById("githubCommitMessage")?.value.trim();
  const description = document.getElementById("githubCommitDescription")?.value.trim();
  const branch = document.getElementById("githubCommitBranch")?.value.trim();
  const stagedFiles = [...githubRepoFileState.staged.values()];
  if (!branch || !stagedFiles.length) {
    status.innerHTML = '<div class="github-status error">Enter a branch and create, edit, or upload at least one file.</div>';
    return;
  }
  const files = stagedFiles;
  button.disabled = true;
  status.innerHTML = '<div class="github-status"><i class="fa-solid fa-spinner fa-spin"></i> Creating commit…</div>';
  try {
    const response = await fetch(`/api/github/repos/${encodeURIComponent(repo.owner)}/${encodeURIComponent(repo.name)}/commit`, {
      method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ branch, message, description, files }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "The commit failed.");
    status.innerHTML = `<div class="github-status success">Committed ${data.commit.files} file(s) as <a href="${escapeHtmlAttributeValue(data.commit.htmlUrl)}" target="_blank" rel="noopener">${escapeHtml(data.commit.shortSha)}</a>.</div>`;
    showNotification("GitHub commit created successfully.", "success");
  } catch (error) {
    status.innerHTML = `<div class="github-status error">${escapeHtml(error.message)}</div>`;
  } finally {
    button.disabled = false;
  }
}

closeGitHubRepoModalBtn?.addEventListener("click", closeGitHubRepositoryModal);
githubRepoModal?.addEventListener("click", (event) => { if (event.target === githubRepoModal) closeGitHubRepositoryModal(); });
githubRepoModal?.addEventListener("keydown", (event) => {
  event.stopPropagation();
  if (event.key === "Escape") {
    event.preventDefault();
    closeGitHubRepositoryModal();
  }
}, true);
githubRepoModalBody?.addEventListener("click", async (event) => {
  const action = event.target.closest("[data-github-action]")?.dataset.githubAction;
  if (action === "repos") openGitHubRepositoryModal();
  if (action === "reconnect") beginGitHubOAuth();
  if (action === "disconnect") {
    await fetch("/api/github/logout", { method: "POST", credentials: "same-origin" });
    closeGitHubRepositoryModal();
    await refreshGitHubConnectionStatus();
    showNotification("GitHub account disconnected.", "info");
  }
});

enableNodeRuntimeBtn?.addEventListener("click", async () => {
  if (!window.codxNodeRuntime) {
    showNotification("The Node.js runtime is still loading. Try again in a moment.", "warn");
    return;
  }
  try {
    await window.codxNodeRuntime.toggle();
  } catch (error) {
    showNotification(String(error?.message || error || "Unable to enable Node.js."), "error");
  }
});

window.codxGetNodeProjectFiles = () => (Array.isArray(projectFiles) ? projectFiles : []).map((file) => ({
  name: String(file?.name || ""),
  content: String(file?.content || ""),
  type: String(file?.type || ""),
})).filter((file) => file.name);

window.codxUpsertNodeRuntimeFile = (name, content) => {
  const fileName = normalizeProjectFileName(name);
  if (!fileName || fileName.startsWith("node_modules/")) return;
  const existing = projectFiles.find((file) => String(file.name).toLowerCase() === fileName.toLowerCase());
  if (existing) existing.content = String(content || "");
  else projectFiles.push({ name: fileName, type: getFileType(fileName), content: String(content || ""), active: false });
  renderFileList();
  scheduleProjectAutosave();
};

if (announcementPopupOkBtn) {
  announcementPopupOkBtn.onclick = closeAnnouncementPopup;
}
if (announcementPopup) {
  announcementPopup.addEventListener("click", (e) => {
    if (e.target === announcementPopup) {
      closeAnnouncementPopup();
    }
  });
}
if (appDialog) {
  appDialog.addEventListener("click", (e) => {
    if (e.target === appDialog) {
      closeAppDialog({ ok: false, value: null });
    }
  });
}
if (developerConsoleModal) {
  developerConsoleModal.addEventListener("click", (e) => {
    if (e.target === developerConsoleModal) {
      closeDeveloperConsole();
    }
  });
}
if (closeDeveloperConsoleBtn) {
  closeDeveloperConsoleBtn.onclick = closeDeveloperConsole;
}
if (clearDeveloperConsoleBtn) {
  clearDeveloperConsoleBtn.onclick = clearDeveloperConsoleOutput;
}
if (runDeveloperCommandBtn) {
  runDeveloperCommandBtn.onclick = () => {
    if (!developerConsoleInput) return;
    const value = developerConsoleInput.value;
    developerConsoleInput.value = "";
    runDeveloperCommand(value);
    developerConsoleInput.focus();
  };
}
if (developerConsoleInput) {
  developerConsoleInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (runDeveloperCommandBtn) runDeveloperCommandBtn.click();
    }
    if (e.key === "Escape") {
      e.preventDefault();
      closeDeveloperConsole();
    }
  });
}

const settingsPreviewSampleCode = `function helloWorld() {
  console.log("Hello, World!");
}`;
const INDENT_UNIT = "    ";
let isZenMode = false;
const editorTextarea = document.getElementById("activeEditor");
const editorWrapperEl = editorTextarea
  ? editorTextarea.closest(".editor-wrapper")
  : null;
let errorHighlightLayer = document.getElementById("errorHighlightLayer");
if (!errorHighlightLayer && editorWrapperEl) {
  errorHighlightLayer = document.createElement("div");
  errorHighlightLayer.id = "errorHighlightLayer";
  errorHighlightLayer.setAttribute("aria-hidden", "true");
  editorWrapperEl.insertBefore(
    errorHighlightLayer,
    document.getElementById("remoteCursorLayer"),
  );
}
let activeInlineHtmlCorrection = null;
const MAX_EDITOR_HISTORY_ENTRIES = 150;
const fileEditHistory = new Map();
let pendingHistorySnapshot = null;
let isRestoringEditorHistory = false;

// ADDED: Tag suggestion elements
const suggestionPopup = document.getElementById("suggestionPopup");
let activeSuggestion = -1;
let activeCssColorPicker = null;

const selfClosingTags = [
  "img",
  "br",
  "hr",
  "input",
  "meta",
  "link",
  "area",
  "base",
  "col",
  "embed",
  "frame",
  "param",
  "source",
  "track",
  "wbr",
];

// Enhanced tag data with categories, icons, and descriptions
const htmlTagsData = {
  structure: [
    {
      tag: "html",
      icon: "🌐",
      desc: "Root element of HTML document",
      attrs: ["lang"],
    },
    { tag: "head", icon: "📋", desc: "Container for metadata", attrs: [] },
    { tag: "body", icon: "📄", desc: "Main content container", attrs: [] },
    {
      tag: "header",
      icon: "🎯",
      desc: "Header section",
      attrs: ["id", "class"],
    },
    {
      tag: "footer",
      icon: "📌",
      desc: "Footer section",
      attrs: ["id", "class"],
    },
    {
      tag: "main",
      icon: "📰",
      desc: "Main content area",
      attrs: ["id", "class"],
    },
    {
      tag: "section",
      icon: "📦",
      desc: "Generic section",
      attrs: ["id", "class"],
    },
    {
      tag: "article",
      icon: "📝",
      desc: "Self-contained content",
      attrs: ["id", "class"],
    },
    {
      tag: "aside",
      icon: "📎",
      desc: "Sidebar content",
      attrs: ["id", "class"],
    },
    {
      tag: "nav",
      icon: "🧭",
      desc: "Navigation links",
      attrs: ["id", "class"],
    },
    {
      tag: "div",
      icon: "⬜",
      desc: "Generic container",
      attrs: ["id", "class"],
    },
  ],
  text: [
    { tag: "h1", icon: "📰", desc: "Main heading", attrs: ["id", "class"] },
    {
      tag: "h2",
      icon: "📰",
      desc: "Subheading level 2",
      attrs: ["id", "class"],
    },
    {
      tag: "h3",
      icon: "📰",
      desc: "Subheading level 3",
      attrs: ["id", "class"],
    },
    {
      tag: "h4",
      icon: "📰",
      desc: "Subheading level 4",
      attrs: ["id", "class"],
    },
    {
      tag: "h5",
      icon: "📰",
      desc: "Subheading level 5",
      attrs: ["id", "class"],
    },
    {
      tag: "h6",
      icon: "📰",
      desc: "Subheading level 6",
      attrs: ["id", "class"],
    },
    { tag: "p", icon: "¶", desc: "Paragraph", attrs: ["id", "class"] },
    {
      tag: "span",
      icon: "✏️",
      desc: "Inline text container",
      attrs: ["id", "class"],
    },
    { tag: "strong", icon: "💪", desc: "Strong importance (bold)", attrs: [] },
    { tag: "em", icon: "✨", desc: "Emphasized text (italic)", attrs: [] },
    { tag: "b", icon: "B", desc: "Bold text", attrs: [] },
    { tag: "i", icon: "I", desc: "Italic text", attrs: [] },
    { tag: "u", icon: "U̲", desc: "Underlined text", attrs: [] },
    { tag: "mark", icon: "🖍️", desc: "Highlighted text", attrs: [] },
    { tag: "small", icon: "🔍", desc: "Smaller text", attrs: [] },
    { tag: "code", icon: "💻", desc: "Inline code", attrs: [] },
    { tag: "pre", icon: "📋", desc: "Preformatted text", attrs: [] },
    { tag: "blockquote", icon: "💬", desc: "Block quotation", attrs: ["cite"] },
  ],
  lists: [
    { tag: "ul", icon: "•", desc: "Unordered list", attrs: ["id", "class"] },
    {
      tag: "ol",
      icon: "1.",
      desc: "Ordered list",
      attrs: ["id", "class", "type", "start"],
    },
    { tag: "li", icon: "→", desc: "List item", attrs: ["value"] },
    { tag: "dl", icon: "📖", desc: "Description list", attrs: [] },
    { tag: "dt", icon: "📌", desc: "Description term", attrs: [] },
    { tag: "dd", icon: "💬", desc: "Description details", attrs: [] },
  ],
  media: [
    {
      tag: "img",
      icon: "🖼️",
      desc: "Image",
      badge: "self-closing",
      attrs: ["src", "alt", "width", "height"],
    },
    {
      tag: "video",
      icon: "🎥",
      desc: "Video player",
      attrs: ["src", "controls", "width", "height"],
    },
    {
      tag: "audio",
      icon: "🔊",
      desc: "Audio player",
      attrs: ["src", "controls"],
    },
    {
      tag: "source",
      icon: "📂",
      desc: "Media source",
      badge: "self-closing",
      attrs: ["src", "type"],
    },
    { tag: "picture", icon: "🖼️", desc: "Responsive images", attrs: [] },
    {
      tag: "canvas",
      icon: "🎨",
      desc: "Graphics canvas",
      attrs: ["id", "width", "height"],
    },
    {
      tag: "svg",
      icon: "🎨",
      desc: "Vector graphics",
      attrs: ["width", "height", "viewBox"],
    },
    {
      tag: "iframe",
      icon: "🖥️",
      desc: "Embedded frame",
      attrs: ["src", "width", "height"],
    },
  ],
  forms: [
    {
      tag: "form",
      icon: "📝",
      desc: "Form container",
      attrs: ["action", "method"],
    },
    {
      tag: "input",
      icon: "⌨️",
      desc: "Input field",
      badge: "self-closing",
      attrs: ["type", "name", "id", "placeholder", "value"],
    },
    {
      tag: "textarea",
      icon: "📄",
      desc: "Multi-line text input",
      attrs: ["name", "id", "rows", "cols"],
    },
    {
      tag: "button",
      icon: "🔘",
      desc: "Clickable button",
      attrs: ["type", "id", "class"],
    },
    { tag: "select", icon: "📋", desc: "Dropdown menu", attrs: ["name", "id"] },
    {
      tag: "option",
      icon: "•",
      desc: "Dropdown option",
      attrs: ["value", "selected"],
    },
    { tag: "label", icon: "🏷️", desc: "Input label", attrs: ["for"] },
    { tag: "fieldset", icon: "📦", desc: "Group form elements", attrs: [] },
    { tag: "legend", icon: "📌", desc: "Fieldset caption", attrs: [] },
  ],
  table: [
    {
      tag: "table",
      icon: "📊",
      desc: "Table container",
      attrs: ["id", "class"],
    },
    { tag: "thead", icon: "📋", desc: "Table header group", attrs: [] },
    { tag: "tbody", icon: "📄", desc: "Table body group", attrs: [] },
    { tag: "tfoot", icon: "📌", desc: "Table footer group", attrs: [] },
    { tag: "tr", icon: "→", desc: "Table row", attrs: [] },
    { tag: "th", icon: "📌", desc: "Header cell", attrs: ["scope"] },
    { tag: "td", icon: "⬜", desc: "Data cell", attrs: ["colspan", "rowspan"] },
  ],
  links: [
    { tag: "a", icon: "🔗", desc: "Hyperlink", attrs: ["href", "target"] },
    {
      tag: "link",
      icon: "📎",
      desc: "External resource",
      badge: "self-closing",
      attrs: ["rel", "href"],
    },
  ],
  meta: [
    {
      tag: "meta",
      icon: "ℹ️",
      desc: "Metadata",
      badge: "self-closing",
      attrs: ["charset", "name", "content"],
    },
    { tag: "title", icon: "📰", desc: "Page title", attrs: [] },
    { tag: "style", icon: "🎨", desc: "CSS styles", attrs: [] },
    {
      tag: "script",
      icon: "⚙️",
      desc: "JavaScript code",
      attrs: ["src", "type"],
    },
  ],
};

// Flatten all tags for quick lookup
const allHtmlTags = Object.values(htmlTagsData)
  .flat()
  .map((t) => t.tag);
// END: Tag suggestion elements

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
];

const additionalHtmlTags = `
  acronym big center dir fencedframe font frame frameset geolocation hgroup marquee math menu nobr
  noembed noframes plaintext rb rtc search selectedcontent slot strike tt xmp
`
  .trim()
  .split(/\s+/);
additionalHtmlTags.forEach((tag) => {
  if (!htmlTags.includes(tag)) htmlTags.push(tag);
});
if (!allHtmlTags.includes("svg")) htmlTags.push("svg");

const knownHtmlTags = new Set([...allHtmlTags, ...htmlTags, ...selfClosingTags]);
// END: Tag suggestion elements

const htmlTagMetaMap = new Map();
Object.entries(htmlTagsData).forEach(([category, tags]) => {
  tags.forEach((item) => {
    htmlTagMetaMap.set(item.tag, { ...item, category });
  });
});
htmlTags.forEach((tag) => {
  if (!htmlTagMetaMap.has(tag)) {
    htmlTagMetaMap.set(tag, {
      tag,
      icon: "</>",
      desc: "HTML element",
      attrs: [],
      category: "other",
    });
  }
});
const deprecatedHtmlTags = new Set(
  "acronym big center dir font frame frameset marquee nobr noembed noframes param plaintext rb rtc strike tt xmp".split(" "),
);
const experimentalHtmlTags = new Set(
  "fencedframe geolocation selectedcontent".split(" "),
);
deprecatedHtmlTags.forEach((tag) => {
  const meta = htmlTagMetaMap.get(tag);
  if (meta) htmlTagMetaMap.set(tag, { ...meta, desc: "Deprecated HTML element", badge: "deprecated" });
});
experimentalHtmlTags.forEach((tag) => {
  const meta = htmlTagMetaMap.get(tag);
  if (meta) htmlTagMetaMap.set(tag, { ...meta, desc: "Experimental HTML element", badge: "experimental" });
});
htmlTagMetaMap.set("lorem", {
  tag: "lorem",
  icon: "TXT",
  desc: "Insert lorem ipsum placeholder text",
  attrs: [],
  badge: "snippet",
  category: "snippet",
  insertText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
});
[
  {
    tag: "a:blank",
    desc: "Anchor link that opens in a new tab",
    insertText: '<a href="" target="_blank" rel="noopener noreferrer"></a>',
  },
  {
    tag: "a:link",
    desc: "Anchor link with an HTTP URL",
    insertText: '<a href="http://"></a>',
  },
  {
    tag: "a:mail",
    desc: "Email anchor link",
    insertText: '<a href="mailto:"></a>',
  },
  {
    tag: "a:tel",
    desc: "Telephone anchor link",
    insertText: '<a href="tel:"></a>',
  },
  {
    tag: "area:blank",
    desc: "Image map area link that opens in a new tab",
    insertText: '<area href="" target="_blank" rel="noopener noreferrer" alt="">',
  },
  {
    tag: "base:blank",
    desc: "Base URL target that opens links in a new tab",
    insertText: '<base href="" target="_blank">',
  },
  {
    tag: "button:button",
    desc: "Button element with button type",
    insertText: '<button type="button"></button>',
  },
  {
    tag: "button:reset",
    desc: "Button element with reset type",
    insertText: '<button type="reset"></button>',
  },
  {
    tag: "button:submit",
    desc: "Button element with submit type",
    insertText: '<button type="submit"></button>',
  },
  {
    tag: "form:get",
    desc: "Form element using GET",
    insertText: '<form action="" method="get"></form>',
  },
  {
    tag: "form:post",
    desc: "Form element using POST",
    insertText: '<form action="" method="post"></form>',
  },
  {
    tag: "html:5",
    desc: "HTML5 document shell",
    insertText:
      '<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title></title>\n</head>\n<body>\n\n</body>\n</html>',
  },
  {
    tag: "img:srcset",
    desc: "Responsive image with srcset and sizes",
    insertText: '<img src="" srcset="" sizes="" alt="">',
  },
  {
    tag: "input:button",
    desc: "Button input",
    insertText: '<input type="button" value="">',
  },
  {
    tag: "input:checkbox",
    desc: "Checkbox input",
    insertText: '<input type="checkbox" name="" id="">',
  },
  {
    tag: "input:color",
    desc: "Color input",
    insertText: '<input type="color" name="" id="">',
  },
  {
    tag: "input:date",
    desc: "Date input",
    insertText: '<input type="date" name="" id="">',
  },
  {
    tag: "input:email",
    desc: "Email input",
    insertText: '<input type="email" name="" id="">',
  },
  {
    tag: "input:file",
    desc: "File input",
    insertText: '<input type="file" name="" id="">',
  },
  {
    tag: "input:hidden",
    desc: "Hidden input",
    insertText: '<input type="hidden" name="" value="">',
  },
  {
    tag: "input:image",
    desc: "Image submit input",
    insertText: '<input type="image" src="" alt="">',
  },
  {
    tag: "input:number",
    desc: "Number input",
    insertText: '<input type="number" name="" id="">',
  },
  {
    tag: "input:password",
    desc: "Password input",
    insertText: '<input type="password" name="" id="">',
  },
  {
    tag: "input:radio",
    desc: "Radio input",
    insertText: '<input type="radio" name="" id="">',
  },
  {
    tag: "input:range",
    desc: "Range input",
    insertText: '<input type="range" name="" id="">',
  },
  {
    tag: "input:reset",
    desc: "Reset input",
    insertText: '<input type="reset" value="">',
  },
  {
    tag: "input:search",
    desc: "Search input",
    insertText: '<input type="search" name="" id="">',
  },
  {
    tag: "input:submit",
    desc: "Submit input",
    insertText: '<input type="submit" value="">',
  },
  {
    tag: "input:tel",
    desc: "Telephone input",
    insertText: '<input type="tel" name="" id="">',
  },
  {
    tag: "input:text",
    desc: "Text input",
    insertText: '<input type="text" name="" id="">',
  },
  {
    tag: "input:url",
    desc: "URL input",
    insertText: '<input type="url" name="" id="">',
  },
  {
    tag: "link:atom",
    desc: "Atom feed link",
    insertText: '<link rel="alternate" href="" type="application/atom+xml" title="">',
  },
  {
    tag: "link:css",
    desc: "Stylesheet link",
    insertText: '<link rel="stylesheet" href="">',
  },
  {
    tag: "link:favicon",
    desc: "Favicon link",
    insertText: '<link rel="icon" href="">',
  },
  {
    tag: "link:manifest",
    desc: "Web app manifest link",
    insertText: '<link rel="manifest" href="">',
  },
  {
    tag: "link:rss",
    desc: "RSS feed link",
    insertText: '<link rel="alternate" href="" type="application/rss+xml" title="">',
  },
  {
    tag: "link:touch",
    desc: "Apple touch icon link",
    insertText: '<link rel="apple-touch-icon" href="">',
  },
  {
    tag: "meta:compat",
    desc: "IE compatibility meta tag",
    insertText: '<meta http-equiv="X-UA-Compatible" content="IE=edge">',
  },
  {
    tag: "meta:refresh",
    desc: "Refresh meta tag",
    insertText: '<meta http-equiv="refresh" content="0; url=">',
  },
  {
    tag: "meta:utf",
    desc: "UTF-8 charset meta tag",
    insertText: '<meta charset="UTF-8">',
  },
  {
    tag: "meta:vp",
    desc: "Responsive viewport meta tag",
    insertText: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
  },
  {
    tag: "script:module",
    desc: "JavaScript module script",
    insertText: '<script type="module" src=""></script>',
  },
  {
    tag: "script:src",
    desc: "External JavaScript file",
    insertText: '<script src=""></script>',
  },
  {
    tag: "style:scoped",
    desc: "Scoped style element",
    insertText: '<style scoped></style>',
  },
].forEach((item, index) => {
  htmlTagMetaMap.set(item.tag, {
    ...item,
    attrs: [],
    category: "emmet",
    icon: "</>",
    kind: "Emmet Abbreviation",
    suggestionPriority: 100 - index,
  });
});
const tagSuggestionPool = Array.from(htmlTagMetaMap.values());
let currentSuggestionContext = null;
const globalHtmlAttributes = [
  "class",
  "id",
  "style",
  "title",
  "name",
  "value",
  "type",
  "placeholder",
  "disabled",
  "readonly",
  "required",
  "checked",
  "selected",
  "multiple",
  "autocomplete",
  "autofocus",
  "min",
  "max",
  "step",
  "role",
  "tabindex",
  "hidden",
  "draggable",
  "contenteditable",
  "spellcheck",
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-hidden",
  "aria-expanded",
  "aria-controls",
  "aria-live",
  "data-*",
];
const htmlAttributeDescriptions = {
  class: "CSS class names",
  id: "Unique element identifier",
  style: "Inline CSS styles",
  title: "Tooltip text",
  name: "Form field or element name",
  value: "Current field value",
  type: "Input or resource type",
  placeholder: "Hint text",
  disabled: "Disable interaction",
  readonly: "Make field read-only",
  required: "Require a value before submit",
  checked: "Pre-check checkbox or radio",
  selected: "Preselect option",
  multiple: "Allow multiple values",
  autocomplete: "Browser autocomplete behavior",
  autofocus: "Focus automatically on load",
  min: "Minimum allowed value",
  max: "Maximum allowed value",
  step: "Increment step value",
  role: "Accessibility role",
  tabindex: "Keyboard focus order",
  hidden: "Hide element",
  draggable: "Allow drag behavior",
  contenteditable: "Make content editable",
  spellcheck: "Enable spell checking",
  "aria-label": "Accessible label",
  "aria-labelledby": "Reference another label element",
  "aria-describedby": "Reference descriptive text",
  "aria-hidden": "Hide from assistive tech",
  "aria-expanded": "Expanded/collapsed state",
  "aria-controls": "Controlled element id",
  "aria-live": "Announce dynamic updates",
  "data-*": "Custom data attribute",
  href: "Link destination",
  src: "Source URL or file path",
  alt: "Image alternative text",
  width: "Display width",
  height: "Display height",
  controls: "Show media controls",
  autoplay: "Start media automatically",
  loop: "Repeat media playback",
  muted: "Mute media by default",
  poster: "Preview image for video",
  action: "Form submit URL",
  method: "Form submit method",
  enctype: "Form encoding type",
  for: "Associated input id",
  target: "Open destination target",
  rel: "Relationship metadata",
  lang: "Language code",
  charset: "Character encoding",
  content: "Meta content value",
  rows: "Textarea row count",
  cols: "Textarea column count",
  scope: "Header cell scope",
  colspan: "Cell column span",
  rowspan: "Cell row span",
  cite: "Citation URL",
  controlslist: "Allowed media controls",
  download: "Download target resource",
  loading: "Lazy/eager loading behavior",
  decoding: "Image decoding hint",
  srcset: "Responsive image sources",
  sizes: "Responsive image sizes",
  media: "Media query condition",
  async: "Load script asynchronously",
  defer: "Defer script execution",
  integrity: "Subresource integrity hash",
  crossorigin: "Cross-origin request mode",
  referrerpolicy: "Referrer handling policy",
  sandbox: "Restrict iframe capabilities",
  allow: "Iframe feature policy",
  srcdoc: "Inline iframe HTML",
  open: "Open details/dialog by default",
  datetime: "Machine-readable date or time",
  pattern: "Input validation pattern",
  minlength: "Minimum input length",
  maxlength: "Maximum input length",
};

const cssPropertySuggestions = [
  "all",
  "appearance",
  "accent-color",
  "display",
  "place-items",
  "place-content",
  "place-self",
  "position",
  "top",
  "right",
  "bottom",
  "left",
  "z-index",
  "width",
  "height",
  "min-width",
  "max-width",
  "min-height",
  "max-height",
  "margin",
  "margin-inline",
  "margin-block",
  "margin-top",
  "margin-right",
  "margin-bottom",
  "margin-left",
  "padding",
  "padding-inline",
  "padding-block",
  "padding-top",
  "padding-right",
  "padding-bottom",
  "padding-left",
  "border",
  "border-top",
  "border-right",
  "border-bottom",
  "border-left",
  "border-style",
  "border-radius",
  "border-color",
  "border-width",
  "border-bottom-width",
  "border-bottom-right-radius",
  "border-bottom-left-radius",
  "border-top-width",
  "border-top-right-radius",
  "border-top-left-radius",
  "border-left-width",
  "border-right-width",
  "border-left-color",
  "border-right-color",
  "border-bottom-color",
  "border-top-color",
  "border-bottom-style",
  "border-top-style",
  "border-left-style",
  "border-right-style",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-collapse",
  "border-spacing",
  "border-image",
  "border-image-source",
  "border-image-slice",
  "border-image-width",
  "border-image-outset",
  "border-image-repeat",
  "table-layout",
  "caption-side",
  "column-count",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "scroll-behavior",
  "scroll-snap-type",
  "scroll-snap-align",
  "transform-origin",
  "transform-style",
  "perspective",
  "perspective-origin",
  "mix-blend-mode",
  "background-blend-mode",
  "clip-path",
  "text-decoration-skip-ink",
  "writing-mode",
  "text-orientation",
  "box-sizing",
  "outline",
  "outline-color",
  "outline-width",
  "outline-style",
  "outline-offset",
  "box-shadow",
  "filter",
  "backdrop-filter",
  "background",
  "background-color",
  "background-image",
  "background-size",
  "background-position",
  "background-repeat",
  "background-attachment",
  "background-clip",
  "background-origin",
  "color",
  "accent-color",
  "caret-color",
  "opacity",
  "font",
  "font-size",
  "font-family",
  "font-weight",
  "font-style",
  "line-height",
  "letter-spacing",
  "text-wrap",
  "text-align",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-thickness",
  "text-shadow",
  "text-overflow",
  "text-transform",
  "word-break",
  "overflow-wrap",
  "white-space",
  "overflow",
  "overflow-x",
  "overflow-y",
  "visibility",
  "cursor",
  "z-index",
  "top",
  "right",
  "bottom",
  "left",
  "inset",
  "aspect-ratio",
  "isolation",
  "transition",
  "transition-property",
  "transition-duration",
  "transition-delay",
  "transition-timing-function",
  "transform",
  "animation",
  "animation-name",
  "animation-duration",
  "animation-delay",
  "animation-fill-mode",
  "animation-direction",
  "animation-iteration-count",
  "animation-timing-function",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "grid-column",
  "grid-row",
  "grid-auto-flow",
  "grid-auto-columns",
  "grid-auto-rows",
  "gap",
  "row-gap",
  "column-gap",
  "justify-content",
  "align-items",
  "justify-items",
  "justify-self",
  "align-content",
  "align-self",
  "flex",
  "flex-direction",
  "flex-wrap",
  "flex-grow",
  "flex-shrink",
  "flex-basis",
  "order",
  "object-fit",
  "object-position",
  "list-style",
  "list-style-type",
  "list-style-position",
  "pointer-events",
  "user-select",
  "resize",
  "content",
];

const additionalStandardCssProperties = `
  alignment-baseline anchor-name anchor-scope animation-composition animation-play-state
  animation-range animation-range-end animation-range-start animation-timeline backface-visibility
  background-position-x background-position-y background-repeat-x background-repeat-y baseline-shift
  baseline-source block-size border-block border-block-color border-block-end border-block-end-color
  border-block-end-style border-block-end-width border-block-start border-block-start-color
  border-block-start-style border-block-start-width border-block-style border-block-width
  border-end-end-radius border-end-start-radius border-inline border-inline-color border-inline-end
  border-inline-end-color border-inline-end-style border-inline-end-width border-inline-start
  border-inline-start-color border-inline-start-style border-inline-start-width border-inline-style
  border-inline-width border-start-end-radius border-start-start-radius box-align box-decoration-break
  box-direction box-flex box-flex-group box-lines box-ordinal-group box-orient box-pack break-after
  break-before break-inside caret caret-animation caret-shape clear clip clip-rule color-interpolation
  color-interpolation-filters color-scheme column-fill column-height column-rule-visibility-items columns
  column-width column-wrap contain container container-name container-type contain-intrinsic-block-size
  contain-intrinsic-height contain-intrinsic-inline-size contain-intrinsic-size contain-intrinsic-width
  content-visibility corner-block-end-shape corner-block-start-shape corner-bottom-left-shape
  corner-bottom-right-shape corner-bottom-shape corner-end-end-shape corner-end-start-shape
  corner-inline-end-shape corner-inline-start-shape corner-left-shape corner-right-shape corner-shape
  corner-start-end-shape corner-start-start-shape corner-top-left-shape corner-top-right-shape
  corner-top-shape counter-increment counter-reset counter-set cx cy d direction dominant-baseline
  dynamic-range-limit empty-cells field-sizing fill fill-opacity fill-rule flex-flow float flood-color
  flood-opacity font-feature-settings font-kerning font-language-override font-optical-sizing font-palette
  font-size-adjust font-smooth font-stretch font-synthesis font-synthesis-position
  font-synthesis-small-caps font-synthesis-style font-synthesis-weight font-variant
  font-variant-alternates font-variant-caps font-variant-east-asian font-variant-emoji
  font-variant-ligatures font-variant-numeric font-variant-position font-variation-settings font-width
  forced-color-adjust grid grid-area grid-column-end grid-column-start grid-row-end grid-row-start
  grid-template hanging-punctuation hyphenate-character hyphenate-limit-chars hyphens image-orientation
  image-rendering image-resolution initial-letter inline-size inset-block inset-block-end
  inset-block-start inset-inline inset-inline-end inset-inline-start interactivity interest-delay
  interest-delay-end interest-delay-start interpolate-size lighting-color line-break line-clamp
  line-height-step list-style-image margin-block-end margin-block-start margin-inline-end
  margin-inline-start margin-trim marker marker-end marker-mid marker-start mask mask-border
  mask-border-mode mask-border-outset mask-border-repeat mask-border-slice mask-border-source
  mask-border-width mask-clip mask-composite mask-image mask-mode mask-origin mask-position mask-repeat
  mask-size mask-type math-depth math-shift math-style max-block-size max-inline-size min-block-size
  min-inline-size object-view-box offset offset-anchor offset-distance offset-path offset-position
  offset-rotate orphans overflow-anchor overflow-block overflow-clip-margin overflow-inline overlay
  overscroll-behavior overscroll-behavior-block overscroll-behavior-inline overscroll-behavior-x
  overscroll-behavior-y padding-block-end padding-block-start padding-inline-end padding-inline-start
  page page-break-after page-break-before page-break-inside paint-order position-anchor position-area
  position-try position-try-fallbacks position-try-order position-visibility print-color-adjust quotes r
  reading-flow reading-order rotate row-rule-visibility-items ruby-align ruby-overhang ruby-position
  rule-visibility-items rx ry scale scrollbar-color scrollbar-gutter scrollbar-width
  scroll-initial-target scroll-margin scroll-margin-block scroll-margin-block-end
  scroll-margin-block-start scroll-margin-bottom scroll-margin-inline scroll-margin-inline-end
  scroll-margin-inline-start scroll-margin-left scroll-margin-right scroll-margin-top
  scroll-marker-group scroll-padding scroll-padding-block scroll-padding-block-end
  scroll-padding-block-start scroll-padding-bottom scroll-padding-inline scroll-padding-inline-end
  scroll-padding-inline-start scroll-padding-left scroll-padding-right scroll-padding-top
  scroll-snap-stop scroll-target-group scroll-timeline scroll-timeline-axis scroll-timeline-name
  shape-image-threshold shape-margin shape-outside shape-rendering speak-as stop-color stop-opacity stroke
  stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity
  stroke-width tab-size text-align-last text-anchor text-autospace text-box text-box-edge text-box-trim
  text-combine-upright text-decoration-inset text-decoration-line text-decoration-skip
  text-decoration-style text-emphasis text-emphasis-color text-emphasis-position text-emphasis-style
  text-indent text-justify text-rendering text-size-adjust text-spacing-trim text-underline-offset
  text-underline-position text-wrap-mode text-wrap-style timeline-scope touch-action transform-box
  transition-behavior translate unicode-bidi user-modify vector-effect vertical-align view-timeline
  view-timeline-axis view-timeline-inset view-timeline-name view-transition-class view-transition-name
  view-transition-scope white-space-collapse widows will-change word-spacing x y zoom
`
  .trim()
  .split(/\s+/);

additionalStandardCssProperties.forEach((property) => {
  if (!cssPropertySuggestions.includes(property)) cssPropertySuggestions.push(property);
});

// Include every additional property implemented by the current browser, including vendor extensions.
try {
  const browserComputedStyle = window.getComputedStyle(document.documentElement);
  for (let index = 0; index < browserComputedStyle.length; index += 1) {
    const property = browserComputedStyle[index];
    if (property && !property.startsWith("--") && !cssPropertySuggestions.includes(property)) {
      cssPropertySuggestions.push(property);
    }
  }
} catch (_err) {
  // The static MDN-derived property catalog remains available.
}

const cssValueSuggestionsByProperty = {
  display: ["block", "inline", "inline-block", "flex", "grid", "none"],
  position: ["static", "relative", "absolute", "fixed", "sticky"],
  "box-sizing": ["border-box", "content-box"],
  color: [
    "#000",
    "#111827",
    "#1f2937",
    "#374151",
    "#4b5563",
    "#6b7280",
    "#9ca3af",
    "#d1d5db",
    "#f8fafc",
    "#fff",
    "#ef4444",
    "#f97316",
    "#f59e0b",
    "#eab308",
    "#22c55e",
    "#14b8a6",
    "#0ea5e9",
    "#3b82f6",
    "#6366f1",
    "#8b5cf6",
    "#a855f7",
    "#ec4899",
    "#ef4444",
    "black",
    "white",
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "teal",
    "cyan",
    "magenta",
    "lime",
    "maroon",
    "navy",
    "olive",
    "aqua",
    "coral",
    "gold",
    "silver",
    "brown",
    "indigo",
    "lavender",
    "salmon",
    "skyblue",
    "seagreen",
    "darkslateblue",
    "rgb(0, 0, 0)",
    "rgba(0, 0, 0, 0.5)",
    "hsl(210, 50%, 50%)",
    "hsla(210, 50%, 50%, 0.5)",
    "transparent",
    "inherit",
  ],
  "background-color": [
    "transparent",
    "#fff",
    "#f8fafc",
    "#f1f5f9",
    "#e2e8f0",
    "#cbd5e1",
    "#94a3b8",
    "#64748b",
    "#334155",
    "#1e293b",
    "#000",
    "#ef4444",
    "#f97316",
    "#f59e0b",
    "#eab308",
    "#22c55e",
    "#14b8a6",
    "#0ea5e9",
    "#3b82f6",
    "#6366f1",
    "#8b5cf6",
    "#a855f7",
    "#ec4899",
    "black",
    "white",
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "teal",
    "cyan",
    "magenta",
    "lime",
    "navy",
    "olive",
    "coral",
    "gold",
    "silver",
    "brown",
    "indigo",
    "lavender",
    "salmon",
    "skyblue",
    "seagreen",
    "darkslateblue",
    "inherit",
  ],
  "background-repeat": ["no-repeat", "repeat", "repeat-x", "repeat-y"],
  "background-size": ["cover", "contain", "auto"],
  "background-position": ["center", "top", "right", "bottom", "left", "center center", "top center"],
  "background-attachment": ["scroll", "fixed", "local"],
  "background-clip": ["border-box", "padding-box", "content-box", "text"],
  "background-origin": ["border-box", "padding-box", "content-box"],
  "text-decoration-skip-ink": ["auto", "none"],
  "scroll-behavior": ["auto", "smooth"],
  "scroll-snap-type": ["none", "x", "y", "block", "inline", "both", "x mandatory", "y proximity"],
  "scroll-snap-align": ["start", "center", "end", "nearest"],
  "transform-origin": ["center", "top", "bottom", "left", "right", "center center", "top left", "50% 50%"],
  "transform-style": ["flat", "preserve-3d"],
  "perspective": ["none", "500px", "1000px", "1500px", "2000px"],
  "perspective-origin": ["50% 50%", "top left", "top center", "bottom right"],
  "mix-blend-mode": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
  "background-blend-mode": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion"],
  "clip-path": ["none", "circle(50% at 50% 50%)", "ellipse(50% 40% at 50% 50%)", "inset(0 0 0 0 round 16px)", "polygon(0 0, 100% 0, 100% 100%, 0 100%)"],
  "font-variant": ["normal", "small-caps", "all-small-caps", "petite-caps"],
  "table-layout": ["auto", "fixed"],
  "border-collapse": ["separate", "collapse"],
  "border-spacing": ["0", "0.5rem", "1rem", "2rem"],
  "caption-side": ["top", "bottom"],
  "writing-mode": ["horizontal-tb", "vertical-rl", "vertical-lr"],
  "text-orientation": ["mixed", "upright", "sideways"],
  "text-align": ["left", "center", "right", "justify"],
  "font-family": [
    "Arial, sans-serif",
    "Verdana, sans-serif",
    "'Trebuchet MS', sans-serif",
    "Tahoma, sans-serif",
    "'Century Gothic', sans-serif",
    "'Franklin Gothic Medium', sans-serif",
    "'Gill Sans', 'Gill Sans MT', sans-serif",
    "Optima, 'Segoe UI', sans-serif",
    "Futura, 'Century Gothic', sans-serif",
    "Avenir, 'Trebuchet MS', sans-serif",
    "'Times New Roman', serif",
    "Georgia, serif",
    "Garamond, serif",
    "'Palatino Linotype', serif",
    "Cambria, serif",
    "Baskerville, Georgia, serif",
    "'Book Antiqua', Palatino, serif",
    "'Bodoni MT', 'Times New Roman', serif",
    "Didot, 'Times New Roman', serif",
    "Rockwell, 'Courier New', serif",
    "'Courier New', monospace",
    "Consolas, monospace",
    "'Lucida Console', monospace",
    "Monaco, 'Lucida Console', monospace",
    "Menlo, Consolas, monospace",
    "'Andale Mono', Consolas, monospace",
    "Impact, fantasy",
    "Copperplate, fantasy",
    "Papyrus, fantasy",
    "Stencil, Impact, fantasy",
    "'Brush Script MT', cursive",
    "'Segoe Script', 'Brush Script MT', cursive",
    "'Bradley Hand', 'Comic Sans MS', cursive",
    "'Comic Sans MS', cursive",
    "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    "ui-sans-serif, system-ui, sans-serif",
    "ui-serif, Georgia, serif",
    "ui-monospace, SFMono-Regular, Menlo, monospace",
  ],
  "font-weight": ["400", "500", "600", "700", "bold", "normal"],
  "font-style": ["normal", "italic", "oblique"],
  "font-size": ["12px", "14px", "16px", "18px", "1rem", "1.25rem", "2rem", "clamp(1rem, 2vw, 2rem)"],
  "line-height": ["1", "1.2", "1.5", "1.7", "2", "normal"],
  "text-wrap": ["wrap", "nowrap", "balance", "pretty"],
  "text-decoration": ["none", "underline", "overline", "line-through"],
  "text-decoration-color": [
    "currentColor",
    "transparent",
    "#000",
    "#fff",
    "#ef4444",
    "#3b82f6",
    "#22c55e",
    "#f59e0b",
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "pink",
    "teal",
    "cyan",
    "orange",
    "magenta",
    "olive",
    "navy",
    "brown",
  ],
  "text-decoration-thickness": ["auto", "from-font", "1px", "2px", "0.08em"],
  "text-shadow": ["none", "0 1px 2px rgba(0, 0, 0, 0.2)", "0 2px 10px rgba(0, 0, 0, 0.16)"],
  "text-overflow": ["clip", "ellipsis"],
  "text-transform": ["none", "uppercase", "lowercase", "capitalize"],
  "letter-spacing": ["normal", "0.02em", "0.05em", "0.1em"],
  "word-break": ["normal", "break-all", "keep-all", "break-word"],
  "overflow-wrap": ["normal", "anywhere", "break-word"],
  "border-radius": ["0", "4px", "8px", "12px", "999px", "50%"],
  "border-style": ["none", "solid", "dashed", "dotted", "double"],
  "border-width": ["0", "1px", "2px", "4px"],
  "border-color": [
    "currentColor",
    "transparent",
    "#000",
    "#fff",
    "#ef4444",
    "#3b82f6",
    "#22c55e",
    "#f59e0b",
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "pink",
    "teal",
    "cyan",
    "orange",
    "magenta",
    "olive",
    "navy",
    "brown",
  ],
  "outline-style": ["none", "solid", "dashed", "dotted"],
  "outline-width": ["0", "1px", "2px", "4px"],
  "outline-color": [
    "currentColor",
    "transparent",
    "#000",
    "#fff",
    "#ef4444",
    "#3b82f6",
    "#22c55e",
    "#f59e0b",
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "pink",
    "teal",
    "cyan",
    "orange",
    "magenta",
    "olive",
    "navy",
    "brown",
  ],
  "outline-offset": ["0", "1px", "2px", "4px"],
  margin: ["0", "8px", "16px", "24px", "0 auto", "1rem auto"],
  "margin-inline": ["0", "auto", "1rem", "2rem"],
  "margin-block": ["0", "1rem", "2rem", "4rem"],
  padding: ["0", "8px", "12px", "16px", "24px", "1rem 1.5rem"],
  "padding-inline": ["0", "1rem", "1.5rem", "2rem"],
  "padding-block": ["0", "0.5rem", "1rem", "2rem"],
  width: ["auto", "100%", "100vw", "fit-content", "min-content", "max-content", "min(100%, 1200px)", "clamp(280px, 50vw, 720px)"],
  height: ["auto", "100%", "100vh", "fit-content", "min-content", "clamp(240px, 60vh, 720px)"],
  "max-width": ["100%", "480px", "720px", "960px", "1200px", "1400px", "min(100%, 80rem)"],
  "min-width": ["0", "100%", "240px", "320px", "min-content", "max-content"],
  "max-height": ["100%", "320px", "480px", "720px", "90vh"],
  "min-height": ["100vh", "50vh", "320px", "480px", "60svh"],
  overflow: ["hidden", "auto", "scroll", "visible"],
  "overflow-x": ["hidden", "auto", "scroll", "visible"],
  "overflow-y": ["hidden", "auto", "scroll", "visible"],
  cursor: ["pointer", "default", "text", "not-allowed", "move"],
  "z-index": ["0", "1", "10", "100", "1000", "-1"],
  top: ["0", "50%", "100%", "1rem", "2rem", "auto"],
  right: ["0", "50%", "100%", "1rem", "2rem", "auto"],
  bottom: ["0", "50%", "100%", "1rem", "2rem", "auto"],
  left: ["0", "50%", "100%", "1rem", "2rem", "auto"],
  inset: ["0", "auto", "0 auto auto 0", "1rem", "2rem"],
  "aspect-ratio": ["1 / 1", "16 / 9", "4 / 3", "3 / 2", "auto"],
  isolation: ["auto", "isolate"],
  "align-self": ["auto", "stretch", "flex-start", "center", "flex-end"],
  "justify-content": [
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
    "space-evenly",
  ],
  "align-items": ["stretch", "flex-start", "center", "flex-end", "baseline"],
  "justify-items": ["stretch", "start", "center", "end", "left", "right"],
  "justify-self": ["auto", "stretch", "start", "center", "end", "left", "right"],
  "align-content": ["stretch", "flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"],
  "flex-direction": ["row", "row-reverse", "column", "column-reverse"],
  "flex-wrap": ["nowrap", "wrap", "wrap-reverse"],
  "flex-grow": ["0", "1"],
  "flex-shrink": ["0", "1"],
  "flex-basis": ["auto", "0", "100%", "50%", "25rem", "clamp(16rem, 40vw, 28rem)"],
  flex: ["0 0 auto", "1 1 auto", "1 1 0", "0 1 50%", "1 0 100%"],
  order: ["0", "1", "2", "-1"],
  "grid-auto-flow": ["row", "column", "row dense", "column dense"],
  "grid-column": ["1 / -1", "span 2", "auto"],
  "grid-row": ["1 / -1", "span 2", "auto"],
  "grid-template-columns": ["1fr", "repeat(2, 1fr)", "repeat(3, minmax(0, 1fr))", "240px 1fr", "repeat(auto-fit, minmax(220px, 1fr))", "minmax(0, 320px) 1fr"],
  "grid-template-rows": ["auto", "1fr auto", "repeat(3, auto)", "min-content 1fr min-content"],
  "grid-template-areas": ['"header header" "sidebar main" "footer footer"'],
  gap: ["0", "8px", "12px", "16px", "24px", "1rem", "2rem"],
  "row-gap": ["0", "8px", "12px", "16px", "24px"],
  "column-gap": ["0", "8px", "12px", "16px", "24px"],
  "object-fit": ["cover", "contain", "fill", "none", "scale-down"],
  "object-position": ["center", "top", "right", "bottom", "left", "center center"],
  "box-shadow": ["none", "0 8px 24px rgba(0, 0, 0, 0.12)", "0 18px 40px rgba(0, 0, 0, 0.16)", "0 24px 60px rgba(15, 23, 42, 0.18)", "inset 0 1px 0 rgba(255,255,255,0.12)"],
  background: ["none", "#ffffff", "transparent", "linear-gradient(135deg, #ffffff, #f3f4f6)", "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(243,244,246,0.9))", "radial-gradient(circle at top left, rgba(59,130,246,0.18), transparent 45%)", "url(\"\") center / cover no-repeat"],
  "background-image": ["none", "linear-gradient(135deg, #ffffff, #f3f4f6)", "radial-gradient(circle at top, rgba(34,197,94,0.18), transparent 55%)", "url(\"\")"],
  transition: ["all 0.2s ease", "opacity 0.2s ease", "transform 0.2s ease", "background-color 0.2s ease", "color 0.2s ease", "box-shadow 0.25s ease"],
  "transition-property": ["all", "opacity", "transform", "background-color", "color"],
  "transition-duration": ["0.15s", "0.2s", "0.3s", "0.5s"],
  "transition-delay": ["0s", "0.1s", "0.2s"],
  "transition-timing-function": ["ease", "linear", "ease-in", "ease-out", "ease-in-out"],
  transform: ["none", "translateX(10px)", "translateY(-4px)", "scale(1.05)", "rotate(2deg)", "translate3d(0, -6px, 0)", "skewX(-4deg)"],
  filter: ["none", "blur(4px)", "brightness(1.1)", "contrast(1.1)", "drop-shadow(0 8px 24px rgba(0,0,0,0.15))", "grayscale(1)", "saturate(1.2)"],
  "backdrop-filter": ["none", "blur(8px)", "blur(12px)"],
  animation: ["none", "fadeIn 0.3s ease", "slideUp 0.3s ease", "spin 1s linear infinite"],
  "animation-name": ["none", "fadeIn", "slideUp", "spin", "pulse"],
  "animation-duration": ["0.2s", "0.3s", "0.5s", "1s"],
  "animation-delay": ["0s", "0.1s", "0.2s"],
  "animation-fill-mode": ["none", "forwards", "backwards", "both"],
  "animation-direction": ["normal", "reverse", "alternate", "alternate-reverse"],
  "animation-iteration-count": ["1", "2", "infinite"],
  "animation-timing-function": ["ease", "linear", "ease-in", "ease-out", "ease-in-out"],
  cursor: ["pointer", "default", "text", "not-allowed", "move", "grab", "zoom-in"],
  "pointer-events": ["auto", "none", "all", "fill", "stroke"],
  "user-select": ["auto", "none", "text", "all", "contain"],
  resize: ["none", "both", "horizontal", "vertical", "block", "inline"],
  "list-style-type": ["none", "disc", "circle", "square", "decimal", "lower-alpha", "upper-alpha", "lower-roman"],
  "list-style-position": ["inside", "outside"],
  "place-items": ["center", "start", "end", "stretch", "center stretch"],
  "place-content": ["center", "start", "end", "space-between", "space-evenly"],
  "place-self": ["auto", "center", "start", "end", "stretch"],
  "white-space": ["normal", "nowrap", "pre", "pre-wrap", "pre-line"],
  "visibility": ["visible", "hidden", "collapse"],
  "text-overflow": ["clip", "ellipsis", "\"...\""],
  content: ['""', '"•"', '"→"', 'attr(data-label)'],
};

const cssGenericValueSuggestions = [
  "auto",
  "inherit",
  "initial",
  "unset",
  "none",
  "0",
  "100%",
  "1rem",
  "2rem",
  "solid",
  "relative",
  "absolute",
  "flex",
  "grid",
  "center",
  "border-box",
  "content-box",
  "cover",
  "contain",
  "transparent",
  "currentColor",
  "isolate",
  "1px",
  "8px",
  "16px",
  "999px",
  "100vh",
  "100vw",
  "fit-content",
  "min-content",
  "max-content",
];

const cssSelectorSuggestions = [
  "*",
  "body",
  "html",
  "main",
  "header",
  "section",
  "article",
  "nav",
  "footer",
  "aside",
  "div",
  "span",
  "p",
  "a",
  "button",
  "input",
  "form",
  "img",
  "video",
  "audio",
  "canvas",
  "svg",
  "path",
  "figure",
  "figcaption",
  "ul",
  "ol",
  "li",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "label",
  "textarea",
  "select",
  "option",
  "input[type=\"text\"]",
  "input[type=\"email\"]",
  "input[type=\"submit\"]",
  "input[type=\"checkbox\"]",
  "input[type=\"radio\"]",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  ":root",
  "::selection",
  ":where(.class-name)",
  ":is(button, a)",
  ".class-name",
  "#id-name",
  "[data-state=\"active\"]",
  "[aria-expanded=\"true\"]",
  "[data-theme=\"dark\"]",
  "[type=\"button\"]",
  "button:hover",
  "button:focus",
  "button:focus-visible",
  "button:disabled",
  "a:hover",
  "a:visited",
  "input:focus",
  "input:checked",
  "input::placeholder",
  ".card:hover",
  ".card::before",
  ".card::after",
  ".card:has(img)",
  ".hero",
  ".container",
  ".wrapper",
  ".button",
  ".button-primary",
  ".button-secondary",
  ".grid",
  ".grid-item",
  ".stack",
  ".flow > * + *",
  ".visually-hidden",
  ".sr-only",
  ".button-group > button",
  ".card + .card",
  ".nav a.active",
  ".is-active",
  ".is-hidden",
  ".grid > *",
  ".stack > * + *",
  "main > section",
  "header nav a",
  "ul li",
  ":hover",
  ":focus",
  ":focus-visible",
  ":active",
  ":first-child",
  ":last-child",
  ":nth-child(2)",
  ":nth-of-type(2)",
  ":not(.active)",
  ":not(:last-child)",
  ":not([disabled])",
  ":empty",
  ":checked",
  ":disabled",
  ":required",
  ":first-of-type",
  ":last-of-type",
  ":has(.active)",
  "::before",
  "::after",
  "::placeholder",
  "::marker",
  "::selection",
  ":root",
  "@media",
  "@keyframes",
  "@supports",
  "@font-face",
  "@layer",
  "@container",
];

const jsSuggestions = [
  { value: "const", desc: "Declare a constant", insertText: "const " },
  { value: "let", desc: "Declare a block variable", insertText: "let " },
  { value: "function", desc: "Create a function", insertText: "function " },
  { value: "return", desc: "Return a value", insertText: "return " },
  { value: "if", desc: "Conditional statement", insertText: "if () {\n" + INDENT_UNIT + "\n}" },
  { value: "else", desc: "Fallback branch", insertText: "else {\n" + INDENT_UNIT + "\n}" },
  { value: "for", desc: "Loop over a range", insertText: "for (let i = 0; i < ; i++) {\n" + INDENT_UNIT + "\n}" },
  { value: "while", desc: "While loop", insertText: "while () {\n" + INDENT_UNIT + "\n}" },
  { value: "async", desc: "Async function keyword", insertText: "async " },
  { value: "await", desc: "Wait for a promise", insertText: "await " },
  { value: "console.log", desc: "Log to console", insertText: "console.log();" },
  { value: "document.querySelector", desc: "Select one DOM element", insertText: "document.querySelector(\"\");" },
  { value: "document.querySelectorAll", desc: "Select all matching DOM elements", insertText: "document.querySelectorAll(\"\");" },
  { value: "addEventListener", desc: "Attach an event listener", insertText: "addEventListener(\"\", () => {\n" + INDENT_UNIT + "\n});" },
  { value: "fetch", desc: "Make a network request", insertText: "fetch(\"\")\n  .then((response) => response.json())\n  .then((data) => {\n" + INDENT_UNIT + "console.log(data);\n  });" },
  { value: "setTimeout", desc: "Run code later", insertText: "setTimeout(() => {\n" + INDENT_UNIT + "\n}, 1000);" },
  { value: "try", desc: "Handle exceptions", insertText: "try {\n" + INDENT_UNIT + "\n} catch (error) {\n" + INDENT_UNIT + "console.error(error);\n}" },
  { value: "class", desc: "Define a class", insertText: "class Name {\n" + INDENT_UNIT + "constructor() {\n" + INDENT_UNIT + INDENT_UNIT + "\n" + INDENT_UNIT + "}\n}" },
];

const standardJavaScriptBuiltins = `
  AggregateError Array ArrayBuffer AsyncDisposableStack AsyncFunction AsyncGenerator
  AsyncGeneratorFunction AsyncIterator Atomics BigInt BigInt64Array BigUint64Array Boolean
  DataView Date decodeURI decodeURIComponent DisposableStack encodeURI encodeURIComponent Error
  escape eval EvalError FinalizationRegistry Float16Array Float32Array Float64Array Function
  Generator GeneratorFunction globalThis Infinity Int16Array Int32Array Int8Array InternalError Intl
  isFinite isNaN Iterator JSON Map Math NaN Number Object parseFloat parseInt Promise Proxy
  RangeError ReferenceError Reflect RegExp Set SharedArrayBuffer String SuppressedError Symbol
  SyntaxError Temporal TypedArray TypeError Uint16Array Uint32Array Uint8Array Uint8ClampedArray undefined
  unescape URIError WeakMap WeakRef WeakSet
`
  .trim()
  .split(/\s+/);

const standardJavaScriptLanguageEntries = [
  "var", "break", "case", "catch", "continue", "debugger", "default", "delete", "do",
  "export", "extends", "finally", "for...in", "for...of", "function*", "async function",
  "async function*", "import", "in", "instanceof", "new", "null", "of", "static", "super",
  "switch", "this", "throw", "true", "false", "typeof", "using", "await using", "void",
  "with", "yield", "constructor", "get", "set",
];

const browserJavaScriptGlobals = (() => {
  try {
    return Object.getOwnPropertyNames(globalThis).filter((name) => /^[A-Za-z_$][\w$]*$/.test(name));
  } catch (_err) {
    return [];
  }
})();

const existingJsSuggestionValues = new Set(jsSuggestions.map((entry) => entry.value));
[
  ...standardJavaScriptBuiltins.map((value) => ({ value, desc: "JavaScript standard built-in" })),
  ...standardJavaScriptLanguageEntries.map((value) => ({ value, desc: "JavaScript language construct" })),
  ...browserJavaScriptGlobals.map((value) => ({ value, desc: "Browser JavaScript global" })),
].forEach((entry) => {
  if (existingJsSuggestionValues.has(entry.value)) return;
  existingJsSuggestionValues.add(entry.value);
  jsSuggestions.push(entry);
});

let hasUnsavedChanges = false;
let activeSavedProjectName = null;
let autoRunTimeout;
let latestDiagnostics = [];
let sessionData = {};
let typingTimer;
let myInfo = {};
let collabSocket = null;
let collabParticipants = [];
let collabTimeline = [];
let lastParticipantsSnapshot = new Map();
let previousParticipantCount = 0;
let activeSessionId = null;
let isApplyingRemoteState = false;
let currentTypingIndicator = null;
let collabGroupMessages = [];
let collabPrivateMessages = [];
let collabChatMode = "group";
let collabChatTarget = "";
let remoteCursorState = {};
let remoteTypingState = {};
let lastCursorEmitAt = 0;
let fileErrorCounts = {};
let fileErrorLocations = {};
const defaultCollabPermissions = {
  disableGroupChat: false,
  disableAllChat: false,
  manageSelectedFiles: false,
  selectedFiles: [],
  disableSaveProject: false,
  disableOpenSavedProjects: false,
  disableTemplates: false,
  disablePublishShare: false,
  disableExportZip: false,
  disableImportZip: false,
  disableNewFile: false,
  disableRunCode: false,
  disableConsoleAccess: false,
  readOnlyAll: false,
  roomLocked: false,
  pauseCollab: false,
  quietMode: false,
  requireJoinApproval: false,
  pinnedFile: "",
  groupHighlightFile: "",
  announcementBar: "",
  sessionEndsAt: null,
};
let collabPermissions = { ...defaultCollabPermissions };
let collabHostName = "";
let collabModalView = "idle";
let activeGroupFeatureManager = { selectedName: "" };
let activeParticipantActionName = "";
let followedParticipantName = "";
let collabPendingJoins = [];
let collabShareLink = "";
let collabSessionPin = "";
let collabBans = [];
let joinRequestContext = { sessionId: "", name: "" };
let lastAnnouncementText = "";
let activeDialogResolver = null;
let developerChordArmed = false;
let developerChordTimer = null;
let editorPresenceSocket = null;
const editableTextExtensions = ["html", "htm", "css", "scss", "less", "js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "jsonc", "env", "md", "txt"];
const SAVED_PROJECTS_KEY = "codxSavedProjects";
const AUTOSAVE_PROJECT_KEY = "codxAutosaveProject";
const AUTOSAVE_META_KEY = "codxAutosaveMeta";
const AUTOSAVE_RESTORE_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 7;
const DEVICE_ID_KEY = "codxDeviceId";
let autosaveTimer = null;
let lastAutosaveAt = null;
let sessionSyncTimeout = null;
let lastEditorInputType = "";
let fileNameMigrationNoticeShown = false;
const defaultScriptWelcomeText = `console.log("WELCOME TO CODX EDITOR");`;

function normalizeProjectFileName(value, fallback = "file.txt") {
  const normalized = String(value || fallback)
    .replace(/\\/g, "/")
    .split("/")
    .map((segment) => segment.trim().replace(/\s+/g, "-"))
    .filter(Boolean)
    .join("/");
  return normalized || fallback;
}

function makeUniqueProjectFileName(name, usedNames) {
  const normalized = normalizeProjectFileName(name);
  if (!usedNames.has(normalized.toLowerCase())) return normalized;
  const slashIndex = normalized.lastIndexOf("/");
  const directory = slashIndex >= 0 ? normalized.slice(0, slashIndex + 1) : "";
  const leaf = slashIndex >= 0 ? normalized.slice(slashIndex + 1) : normalized;
  const dotIndex = leaf.lastIndexOf(".");
  const stem = dotIndex > 0 ? leaf.slice(0, dotIndex) : leaf;
  const extension = dotIndex > 0 ? leaf.slice(dotIndex) : "";
  let counter = 2;
  let candidate = "";
  do candidate = `${directory}${stem}-${counter++}${extension}`;
  while (usedNames.has(candidate.toLowerCase()));
  return candidate;
}

function normalizeProjectFileNamesInPlace(files, previewTarget = currentPreviewTarget) {
  if (!Array.isArray(files)) return false;
  const usedNames = new Set();
  const renames = [];
  files.forEach((file, index) => {
    if (!file) return;
    const oldName = String(file.name || `file-${index + 1}.txt`);
    const nextName = makeUniqueProjectFileName(normalizeProjectFileName(oldName, `file-${index + 1}.txt`), usedNames);
    usedNames.add(nextName.toLowerCase());
    if (oldName !== nextName) {
      file.name = nextName;
      file.type = getFileType(nextName) || file.type;
      renames.push([oldName, nextName]);
    }
  });
  if (!renames.length) return false;
  const renameMap = new Map(renames);
  const renamePattern = new RegExp(
    [...renameMap.keys()]
      .sort((left, right) => right.length - left.length)
      .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|"),
    "g",
  );
  files.forEach((file) => {
    if (!file || typeof file.content !== "string") return;
    file.content = file.content.replace(renamePattern, (oldName) => renameMap.get(oldName) || oldName);
  });
  renames.forEach(([oldName, nextName]) => {
    if (previewTarget?.fileName === oldName) previewTarget.fileName = nextName;
  });
  return true;
}

const starterTemplates = [
  {
    id: "landing-page",
    name: "Landing Page",
    icon: "fa-rocket",
    accent: "#2ea043",
    tone: "Launch-ready",
    description: "Hero, feature cards, and call-to-action sections for a polished product page.",
    highlights: ["Hero section", "Feature cards", "CTA layout"],
    files: [
      {
        name: "index.html",
        type: "html",
        content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Launch Better</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="page-shell">
      <header class="topbar">
        <div class="brand">Northstar Studio</div>
        <nav>
          <a href="#features">Features</a>
          <a href="#results">Results</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Launch-ready template</p>
          <h1>Build a cleaner, more credible story for your product.</h1>
          <p class="lead">Use this starter for SaaS pages, service websites, or product launches. It comes with a stronger hero, a simple feature layout, and a clear conversion section that already feels polished.</p>
          <div class="hero-actions">
            <a class="cta" href="#contact">Book a Demo</a>
            <a class="secondary-link" href="#features">See what is included</a>
          </div>
        </div>
        <aside class="hero-panel">
          <p class="panel-label">Quick snapshot</p>
          <strong>Built for launches, product pages, and conversion-focused messaging.</strong>
          <ul>
            <li>Clear above-the-fold structure</li>
            <li>Professional cards and spacing</li>
            <li>Responsive layout from the start</li>
          </ul>
        </aside>
      </main>
      <section id="features" class="features">
        <article><h2>Sharper messaging</h2><p>Swap in your offer, proof points, and CTA without rebuilding the page structure.</p></article>
        <article><h2>Client-ready layout</h2><p>Start from a cleaner visual system that looks presentable in demos and quick handoffs.</p></article>
        <article><h2>Faster iteration</h2><p>Refine copy, layout, and styling quickly inside CodX Editor without relying on a framework.</p></article>
      </section>
      <section id="results" class="results">
        <article><span>3 core sections</span><strong>Hero, features, and conversion block</strong></article>
        <article><span>Responsive base</span><strong>Adapts cleanly across modern screen sizes</strong></article>
      </section>
      <section id="contact" class="contact-banner">
        <h2>Ready to turn this into your own launch page?</h2>
        <p>Replace the placeholder copy, adjust the palette, and connect your own call to action.</p>
      </section>
    </div>
    <script src="script.js"></script>
  </body>
</html>`,
      },
      {
        name: "style.css",
        type: "css",
        content: `:root {
  --bg: #f5f8fb;
  --surface: #ffffff;
  --ink: #112031;
  --muted: #5a6878;
  --accent: #1f6feb;
  --accent-dark: #174ea6;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: var(--ink);
  background:
    radial-gradient(circle at top left, rgba(31, 111, 235, 0.18), transparent 22%),
    radial-gradient(circle at right center, rgba(56, 189, 248, 0.12), transparent 18%),
    linear-gradient(135deg, var(--bg), #ffffff 58%);
}
.page-shell {
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px;
}
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 18px 0 8px;
}
.brand {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
nav {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}
nav a {
  color: var(--muted);
  text-decoration: none;
}
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(280px, 360px);
  gap: 24px;
  align-items: stretch;
  padding: 56px 0 24px;
}
.hero-copy,
.hero-panel,
.features article,
.results article,
.contact-banner {
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(16px);
  box-shadow: 0 22px 45px rgba(17, 32, 49, 0.08);
}
.hero-copy,
.hero-panel {
  border-radius: 28px;
  padding: 34px;
}
.eyebrow,
.panel-label {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(31, 111, 235, 0.1);
  color: var(--accent);
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
h1 {
  font-size: clamp(2.4rem, 5vw, 4.6rem);
  line-height: 0.98;
  max-width: 11ch;
  margin: 18px 0 16px;
}
.lead {
  max-width: 60ch;
  line-height: 1.7;
  color: var(--muted);
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 24px;
}
.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 20px;
  border-radius: 999px;
  text-decoration: none;
  background: var(--accent);
  color: white;
  font-weight: 700;
}
.cta:hover {
  background: var(--accent-dark);
}
.secondary-link {
  display: inline-flex;
  align-items: center;
  color: var(--ink);
  font-weight: 600;
  text-decoration: none;
}
.hero-panel strong {
  display: block;
  margin: 16px 0 12px;
  font-size: 1.2rem;
  line-height: 1.45;
}
.hero-panel ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.8;
}
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
  padding: 12px 0 0;
}
.features article {
  border-radius: 22px;
  padding: 24px;
}
.features p {
  color: var(--muted);
  line-height: 1.65;
}
.results {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  padding: 18px 0;
}
.results article {
  border-radius: 22px;
  padding: 22px 24px;
}
.results span {
  display: block;
  margin-bottom: 10px;
  color: var(--muted);
}
.results strong {
  font-size: 1.1rem;
}
.contact-banner {
  border-radius: 28px;
  padding: 28px 30px 34px;
  margin: 8px 0 36px;
}
.contact-banner h2 {
  margin-top: 0;
}
.contact-banner p {
  color: var(--muted);
  line-height: 1.65;
}
@media (max-width: 860px) {
  .hero,
  .results {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 640px) {
  .page-shell {
    padding: 18px;
  }
  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }
  .hero-copy,
  .hero-panel {
    padding: 24px;
  }
}`,
      },
      {
        name: "script.js",
        type: "js",
        content: `console.log("Landing page template ready.");`,
      },
    ],
  },
  {
    id: "portfolio",
    name: "Portfolio",
    icon: "fa-id-card",
    accent: "#c0841a",
    tone: "Personal brand",
    description: "A personal portfolio starter with intro, projects, and contact section.",
    highlights: ["Intro header", "Project grid", "Simple navigation"],
    files: [
      {
        name: "index.html",
        type: "html",
        content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Creative Portfolio</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="topbar">
      <strong>Alex Carter</strong>
      <nav>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    <main class="intro">
      <div>
        <p class="eyebrow">Designer + Frontend Developer</p>
        <h1>I design digital experiences with clarity and edge.</h1>
        <p class="lead">Use this portfolio starter for a stronger personal-brand presentation. It gives you a sharper introduction, featured work cards, and simple supporting sections you can adapt quickly.</p>
      </div>
      <aside class="summary-card">
        <span>Available for select freelance projects</span>
        <strong>Brand systems, product interfaces, and launch visuals.</strong>
      </aside>
    </main>
    <section id="work" class="grid">
      <article><h2>Brand site</h2><p>Marketing website with a stronger visual system and a clearer conversion path.</p></article>
      <article><h2>Dashboard</h2><p>Internal tool UI focused on faster reporting, easier review, and cleaner states.</p></article>
      <article><h2>Prototype</h2><p>Interactive concept page built to help teams pitch, validate, and refine direction.</p></article>
    </section>
    <section id="about" class="about">
      <h2>About</h2>
      <p>I help teams translate strategy into digital experiences that feel elegant, usable, and commercially sharp. Replace this paragraph with your own background, strengths, and approach.</p>
    </section>
    <section id="contact" class="contact-strip">
      <h2>Let’s build something memorable.</h2>
      <a href="mailto:alex@example.com">alex@example.com</a>
    </section>
  </body>
</html>`,
      },
      {
        name: "style.css",
        type: "css",
        content: `body {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  background: linear-gradient(180deg, #fbf8f1, #f4efe5 100%);
  color: #1e1d19;
}
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 24px 28px;
}
.topbar nav {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}
.topbar a {
  color: inherit;
  text-decoration: none;
}
.intro {
  padding: 64px 28px 24px;
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(260px, 360px);
  gap: 24px;
  align-items: start;
}
.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.8rem;
}
h1 {
  max-width: 10ch;
  font-size: clamp(2.5rem, 7vw, 5.2rem);
  line-height: 0.96;
  margin: 18px 0 0;
}
.lead {
  max-width: 54ch;
  margin-top: 18px;
  color: #5d584f;
  line-height: 1.75;
}
.summary-card {
  padding: 22px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(30, 29, 25, 0.08);
  box-shadow: 0 18px 40px rgba(30, 29, 25, 0.08);
}
.summary-card span {
  display: block;
  text-transform: uppercase;
  font-size: 0.76rem;
  letter-spacing: 0.08em;
  color: #7a7367;
}
.summary-card strong {
  display: block;
  margin-top: 14px;
  font-size: 1.25rem;
  line-height: 1.45;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
  padding: 28px;
}
.grid article {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  padding: 22px;
  border: 1px solid rgba(30, 29, 25, 0.08);
  box-shadow: 0 18px 40px rgba(30, 29, 25, 0.06);
}
.about,
.contact-strip {
  margin: 0 28px 28px;
  padding: 24px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(30, 29, 25, 0.08);
}
.about p {
  max-width: 62ch;
  line-height: 1.75;
  color: #5d584f;
}
.contact-strip {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
.contact-strip a {
  color: inherit;
  text-decoration: none;
  font-weight: 700;
}
@media (max-width: 820px) {
  .intro {
    grid-template-columns: 1fr;
  }
  .contact-strip {
    flex-direction: column;
    align-items: flex-start;
  }
}
@media (max-width: 640px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }
}`,
      },
      { name: "script.js", type: "js", content: `console.log("Portfolio template ready.");` },
    ],
  },
  {
    id: "contact-form",
    name: "Contact Form",
    icon: "fa-envelope-open-text",
    accent: "#2563eb",
    tone: "Lead capture",
    description: "A polished form starter with responsive card layout and validation hooks.",
    highlights: ["Responsive form", "Card layout", "Validation-ready"],
    files: [
      {
        name: "index.html",
        type: "html",
        content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Us</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main class="shell">
      <section class="intro">
        <p class="eyebrow">Contact starter</p>
        <h1>Start more professional conversations.</h1>
        <p>Use this contact template for lead capture, service inquiries, or simple support pages. Replace the copy, connect your backend, and make it your own.</p>
      </section>
      <form class="card">
        <h2>Get in touch</h2>
        <div class="field-grid">
          <label>Name<input type="text" placeholder="Your name" /></label>
          <label>Email<input type="email" placeholder="you@example.com" /></label>
        </div>
        <label>Company<input type="text" placeholder="Your company or team" /></label>
        <label>Message<textarea rows="6" placeholder="Tell us a little about your project"></textarea></label>
        <button type="submit">Send Message</button>
      </form>
    </main>
  </body>
</html>`,
      },
      {
        name: "style.css",
        type: "css",
        content: `body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #eef6ff, #ffffff 56%, #effaf0);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #132033;
}
.shell {
  width: min(96vw, 980px);
  margin: 0 auto;
  padding: 56px 20px;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 560px);
  gap: 24px;
  align-items: center;
}
.intro {
  padding: 18px;
}
.eyebrow {
  margin: 0 0 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.8rem;
  font-weight: 700;
  color: #2563eb;
}
.intro h1 {
  margin: 0 0 14px;
  font-size: clamp(2.1rem, 5vw, 3.5rem);
  line-height: 1.02;
}
.intro p {
  margin: 0;
  color: #5a6574;
  line-height: 1.75;
}
.card {
  background: rgba(255, 255, 255, 0.92);
  padding: 30px;
  border-radius: 28px;
  box-shadow: 0 24px 48px rgba(19, 32, 51, 0.1);
  display: grid;
  gap: 16px;
  border: 1px solid rgba(19, 32, 51, 0.08);
}
.card h2 {
  margin: 0 0 4px;
}
.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
label {
  display: grid;
  gap: 8px;
  font-weight: 600;
}
input, textarea, button {
  font: inherit;
}
input, textarea {
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid rgba(20, 41, 27, 0.12);
  background: #ffffff;
}
button {
  border: none;
  border-radius: 999px;
  padding: 14px 18px;
  background: #2563eb;
  color: white;
  font-weight: 700;
  cursor: pointer;
}
button:hover {
  background: #1d4ed8;
}
@media (max-width: 780px) {
  .shell,
  .field-grid {
    grid-template-columns: 1fr;
  }
  .shell {
    padding-top: 36px;
    padding-bottom: 36px;
  }
}`,
      },
      { name: "script.js", type: "js", content: `console.log("Contact form template ready.");` },
    ],
  },
];

function resetTransientCollabUiState() {
  currentTypingIndicator = null;
  remoteCursorState = {};
  remoteTypingState = {};
  followedParticipantName = "";
  lastAnnouncementText = "";
  if (announcementPopup) {
    announcementPopup.style.display = "none";
  }
  if (typingIndicatorEl) {
    typingIndicatorEl.style.display = "none";
  }
  renderRemoteCursors();
}

function getCollabAnnouncementEl() {
  let el = document.getElementById("collabAnnouncementBar");
  if (!el) {
    el = document.createElement("div");
    el.id = "collabAnnouncementBar";
    el.style.cssText = `
      display:none;
      padding:10px 18px;
      background:linear-gradient(90deg, rgba(35,134,54,0.18), rgba(35,134,54,0.06));
      border-bottom:1px solid var(--border-color);
      color:var(--text-primary);
      font-size:13px;
      font-weight:600;
    `;
    const header = document.querySelector("header");
    if (header && header.parentNode) {
      header.parentNode.insertBefore(el, header.nextSibling);
    }
  }
  return el;
}

function formatSessionTimeRemaining(ts) {
  const value = Number(ts || 0);
  if (!value || value <= Date.now()) return "Expired";
  const totalSeconds = Math.max(0, Math.floor((value - Date.now()) / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) {
    const remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours}:${String(remainingMinutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function applyRoomIndicators() {
  const el = getCollabAnnouncementEl();
  if (!el) return;
  const parts = [];
  if (collabPermissions.announcementBar) {
    parts.push(`Announcement: ${collabPermissions.announcementBar}`);
  }
  if (collabPermissions.pinnedFile) {
    parts.push(`Pinned file: ${collabPermissions.pinnedFile}`);
  }
  if (collabPermissions.groupHighlightFile) {
    parts.push(`Team focus: ${collabPermissions.groupHighlightFile}`);
  }
  if (collabPermissions.sessionEndsAt) {
    parts.push(`Timer: ${formatSessionTimeRemaining(collabPermissions.sessionEndsAt)}`);
  }
  el.textContent = parts.join(" | ");
  el.style.display = parts.length ? "block" : "none";
}

function closeAnnouncementPopup() {
  if (announcementPopup) {
    announcementPopup.style.display = "none";
  }
}

function showAnnouncementPopup(message) {
  const text = String(message || "").trim();
  if (!announcementPopup || !announcementPopupText) return;
  if (!text) {
    closeAnnouncementPopup();
    return;
  }
  announcementPopupText.textContent = text;
  announcementPopup.style.display = "flex";
  if (announcementPopupOkBtn) {
    announcementPopupOkBtn.focus();
  }
}

function appendDeveloperConsoleLine(text = "") {
  if (!developerConsoleOutput) return;
  developerConsoleOutput.textContent += `${text}\n`;
  developerConsoleOutput.scrollTop = developerConsoleOutput.scrollHeight;
}

function clearDeveloperConsoleOutput() {
  if (!developerConsoleOutput) return;
  developerConsoleOutput.textContent = "";
}

function closeDeveloperConsole() {
  if (!developerConsoleModal) return;
  developerConsoleModal.style.display = "none";
}

function openDeveloperConsole() {
  if (!developerConsoleModal) return;
  developerConsoleModal.style.display = "flex";
  clearDeveloperConsoleOutput();
  appendDeveloperConsoleLine("CodX Editor Developer Tools");
  appendDeveloperConsoleLine("Type 'help' to see available commands.");
  appendDeveloperConsoleLine("");
  runDeveloperCommand("state", false);
  if (developerConsoleInput) {
    developerConsoleInput.value = "";
    developerConsoleInput.focus();
  }
}

function setDeveloperChordArmed(value) {
  developerChordArmed = Boolean(value);
  if (developerChordTimer) {
    clearTimeout(developerChordTimer);
    developerChordTimer = null;
  }
  if (developerChordArmed) {
    developerChordTimer = setTimeout(() => {
      developerChordArmed = false;
      developerChordTimer = null;
    }, 1400);
  }
}

function getDeveloperStateSummary() {
  return {
    activeFile: activeFile ? activeFile.name : null,
    projectFileCount: projectFiles.length,
    previewTarget: currentPreviewTarget,
    autoRun: Boolean(autoRunCheckbox?.checked),
    consoleVisible: Boolean(showConsoleCheckbox?.checked),
    zenMode: Boolean(isZenMode),
    activeSessionId: activeSessionId || null,
    role: getMyRole(),
    participantCount: collabParticipants.length,
    errorFileCount: Object.keys(fileErrorCounts || {}).length,
  };
}

function runDeveloperCommand(rawCommand, echoCommand = true) {
  const command = String(rawCommand || "").trim().toLowerCase();
  if (!command) return;
  if (echoCommand) {
    appendDeveloperConsoleLine(`> ${command}`);
  }
  switch (command) {
    case "help":
      appendDeveloperConsoleLine("Commands:");
      appendDeveloperConsoleLine("help");
      appendDeveloperConsoleLine("state");
      appendDeveloperConsoleLine("files");
      appendDeveloperConsoleLine("participants");
      appendDeveloperConsoleLine("permissions");
      appendDeveloperConsoleLine("errors");
      appendDeveloperConsoleLine("preview");
      appendDeveloperConsoleLine("clear");
      appendDeveloperConsoleLine("close");
      break;
    case "state":
      appendDeveloperConsoleLine(JSON.stringify(getDeveloperStateSummary(), null, 2));
      break;
    case "files":
      appendDeveloperConsoleLine(
        JSON.stringify(
          projectFiles.map((file) => ({
            name: file.name,
            type: file.type,
            active: Boolean(file.active),
            length: String(file.content || "").length,
          })),
          null,
          2,
        ),
      );
      break;
    case "participants":
      appendDeveloperConsoleLine(
        JSON.stringify(
          collabParticipants.map((participant) => ({
            name: participant.name,
            role: participant.role || "participant",
            currentFile: participant.currentFile || null,
            mutedChat: Boolean(participant.mutedChat),
            frozenEditing: Boolean(participant.frozenEditing),
            priority: Boolean(participant.priority),
          })),
          null,
          2,
        ),
      );
      break;
    case "permissions":
      appendDeveloperConsoleLine(JSON.stringify(collabPermissions, null, 2));
      break;
    case "errors":
      appendDeveloperConsoleLine(
        JSON.stringify(
          {
            counts: fileErrorCounts,
            locations: fileErrorLocations,
          },
          null,
          2,
        ),
      );
      break;
    case "preview":
      appendDeveloperConsoleLine(
        JSON.stringify(
          {
            target: currentPreviewTarget,
            title: previewTitleEl ? previewTitleEl.textContent : "",
          },
          null,
          2,
        ),
      );
      break;
    case "clear":
      clearDeveloperConsoleOutput();
      break;
    case "close":
      closeDeveloperConsole();
      break;
    default:
      appendDeveloperConsoleLine(`Unknown command: ${command}`);
      appendDeveloperConsoleLine("Type 'help' for available commands.");
  }
  appendDeveloperConsoleLine("");
}

function closeAppDialog(result = null) {
  if (appDialog) appDialog.style.display = "none";
  if (appDialogInput) {
    appDialogInput.style.display = "none";
    appDialogInput.value = "";
    appDialogInput.onkeydown = null;
  }
  if (appDialogActions) {
    appDialogActions.innerHTML = "";
  }
  const resolver = activeDialogResolver;
  activeDialogResolver = null;
  if (resolver) resolver(result);
}

function showAppDialog({
  title = "Dialog",
  message = "",
  messageHtml = "",
  input = false,
  inputValue = "",
  inputPlaceholder = "",
  okText = "OK",
  cancelText = "Cancel",
  okVariant = "",
}) {
  return new Promise((resolve) => {
    activeDialogResolver = resolve;
    if (appDialogTitle) appDialogTitle.textContent = title;
    if (appDialogMessage) {
      if (messageHtml) {
        appDialogMessage.innerHTML = messageHtml;
      } else {
        appDialogMessage.textContent = message;
      }
    }
    if (appDialogInput) {
      appDialogInput.style.display = input ? "block" : "none";
      appDialogInput.value = input ? String(inputValue || "") : "";
      appDialogInput.placeholder = input ? String(inputPlaceholder || "") : "";
    }
    if (appDialogActions) {
      appDialogActions.innerHTML = `
        <button type="button" id="appDialogCancelBtn" class="run-button" style="background:#6b7280;"><strong>${escapeHtml(cancelText)}</strong></button>
        <button type="button" id="appDialogOkBtn" class="run-button"${okVariant ? ` style="${escapeHtml(okVariant)}"` : ""}><strong>${escapeHtml(okText)}</strong></button>
      `;
    }
    if (appDialog) appDialog.style.display = "flex";
    const cancelBtn = document.getElementById("appDialogCancelBtn");
    const okBtn = document.getElementById("appDialogOkBtn");
    if (cancelBtn) cancelBtn.onclick = () => closeAppDialog({ ok: false, value: null });
    if (okBtn) {
      okBtn.onclick = () =>
        closeAppDialog({
          ok: true,
          value: input && appDialogInput ? appDialogInput.value : true,
        });
    }
    if (appDialogInput) {
      appDialogInput.onkeydown = (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          if (okBtn) okBtn.click();
        } else if (e.key === "Escape") {
          e.preventDefault();
          if (cancelBtn) cancelBtn.click();
        }
      };
    }
    if (input && appDialogInput) {
      setTimeout(() => appDialogInput.focus(), 0);
    } else if (okBtn) {
      setTimeout(() => okBtn.focus(), 0);
    }
  });
}

function showAppPrompt(title, message, inputValue = "", inputPlaceholder = "") {
  return showAppDialog({
    title,
    message,
    input: true,
    inputValue,
    inputPlaceholder,
    okText: "OK",
    cancelText: "CANCEL",
  });
}

function showPublishActionPrompt() {
  return new Promise((resolve) => {
    activeDialogResolver = resolve;
    if (appDialogTitle) appDialogTitle.textContent = "PUBLISH PROJECT";
    if (appDialogMessage) {
      appDialogMessage.innerHTML =
        'What do you want to do with your published link?<br><span style="display:block;margin-top:10px;color:var(--text-muted);font-size:12px">Create a new custom link, or update an existing link using its verification key.</span>';
    }
    if (appDialogInput) appDialogInput.style.display = "none";
    if (appDialogActions) {
      appDialogActions.innerHTML = `
        <button type="button" id="publishCreateLinkBtn" class="run-button"><i class="fa-solid fa-plus"></i> <strong>CREATE A LINK</strong></button>
        <button type="button" id="publishUpdateLinkBtn" class="run-button" style="background:#2563eb"><i class="fa-solid fa-pen-to-square"></i> <strong>UPDATE A LINK</strong></button>
        <button type="button" id="publishCancelBtn" class="run-button" style="background:#6b7280;"><strong>CANCEL</strong></button>
      `;
    }
    if (appDialog) appDialog.style.display = "flex";
    document.getElementById("publishCreateLinkBtn").onclick = () => closeAppDialog({ ok: true, action: "create" });
    document.getElementById("publishUpdateLinkBtn").onclick = () => closeAppDialog({ ok: true, action: "update" });
    document.getElementById("publishCancelBtn").onclick = () => closeAppDialog({ ok: false });
    setTimeout(() => document.getElementById("publishCreateLinkBtn")?.focus(), 0);
  });
}

function showPublishUrlPrompt(action = "create") {
  const publishBase = `${window.location.origin}/published/`;
  const defaultSlug = "my-project";
  const isUpdate = action === "update";
  const dialog = showAppDialog({
    title: isUpdate ? "UPDATE A LINK" : "CREATE A LINK",
    messageHtml: `${isUpdate ? "Type the custom link you want to update." : "Choose the end of your published link."}<br><span style="display:block;margin-top:10px;font-size:12px;color:var(--text-muted)">Your link</span><code id="publishUrlPreview" style="display:block;margin-top:4px;padding:9px 10px;border-radius:7px;background:var(--bg-primary);color:var(--text-primary);word-break:break-all">${escapeHtml(publishBase + defaultSlug)}</code>`,
    input: true,
    inputValue: defaultSlug,
    inputPlaceholder: "my-project",
    okText: isUpdate ? "NEXT" : "CREATE LINK",
    cancelText: "CANCEL",
  });
  const updatePreview = () => {
    const preview = document.getElementById("publishUrlPreview");
    if (!preview || !appDialogInput) return;
    preview.textContent = publishBase + encodeURIComponent(appDialogInput.value.trim());
  };
  if (appDialogInput) appDialogInput.addEventListener("input", updatePreview, { once: false });
  return dialog.finally(() => {
    if (appDialogInput) appDialogInput.removeEventListener("input", updatePreview);
  });
}

function showPublishedProjectDialog(shareLink, verificationKey = "", mode = "create") {
  return new Promise((resolve) => {
    activeDialogResolver = resolve;
    const isUpdate = mode === "update";
    if (appDialogTitle) appDialogTitle.textContent = isUpdate ? "LINK UPDATED" : "LINK PUBLISHED";
    if (appDialogMessage) {
      const keyHtml = verificationKey
        ? `<span style="display:block;margin:16px 0 6px;font-size:12px;color:var(--text-muted)">Verification key</span><code id="publishedVerificationKey" style="display:block;padding:9px 10px;border-radius:7px;background:var(--bg-primary);color:var(--text-primary);word-break:break-all">${escapeHtml(verificationKey)}</code><span style="display:block;margin-top:6px;font-size:12px;color:var(--text-muted)">Save this key. You will need it to update this link later.</span>`
        : !isUpdate
        ? `<span style="display:block;margin:16px 0 6px;font-size:12px;color:#f59e0b">Verification key was not returned. Try publishing again with a fresh custom link.</span>`
        : "";
      appDialogMessage.innerHTML = `<span style="display:block;margin-bottom:6px">${isUpdate ? "Your link has been updated:" : "Your link has been published:"}</span><a id="publishedProjectLink" target="_blank" rel="noopener noreferrer" style="display:block;padding:9px 10px;border-radius:7px;background:var(--bg-primary);color:var(--text-primary);word-break:break-all">${escapeHtml(shareLink)}</a>${keyHtml}<span style="display:block;margin:16px 0 8px;font-size:12px;color:var(--text-muted)">Share it</span><div id="publishedShareShortcuts" style="display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="run-button" data-share="whatsapp" style="background:#25d366"><i class="fa-brands fa-whatsapp"></i> <strong>WHATSAPP</strong></button><button type="button" class="run-button" data-share="discord" style="background:#5865f2"><i class="fa-brands fa-discord"></i> <strong>DISCORD</strong></button><button type="button" class="run-button" data-share="snapchat" style="background:#fffc00;color:#161616"><i class="fa-brands fa-snapchat"></i> <strong>SNAPCHAT</strong></button></div>`;
    }
    const publishedProjectLink = document.getElementById("publishedProjectLink");
    if (publishedProjectLink) publishedProjectLink.href = shareLink;
    if (appDialogInput) appDialogInput.style.display = "none";
    if (appDialogActions) {
      appDialogActions.innerHTML = `<button type="button" id="appDialogCopyLinkBtn" class="run-button" style="background:#2563eb"><i class="fa-regular fa-copy"></i> <strong>COPY LINK</strong></button>${verificationKey ? `<button type="button" id="appDialogCopyKeyBtn" class="run-button" style="background:#7c3aed"><i class="fa-solid fa-key"></i> <strong>COPY KEY</strong></button>` : ""}<button type="button" id="appDialogDoneBtn" class="run-button"><strong>DONE</strong></button>`;
    }
    if (appDialog) appDialog.style.display = "flex";

    const copyLink = async () => {
      try {
        await navigator.clipboard.writeText(shareLink);
        showNotification("Published link copied.", "success");
      } catch (_err) {
        showNotification("Copy the published link from this dialog.", "error");
      }
    };
    document.getElementById("appDialogCopyLinkBtn").onclick = copyLink;
    const copyKeyBtn = document.getElementById("appDialogCopyKeyBtn");
    if (copyKeyBtn) {
      copyKeyBtn.onclick = async () => {
        try {
          await navigator.clipboard.writeText(verificationKey);
          showNotification("Verification key copied.", "success");
        } catch (_err) {
          showNotification("Copy the verification key from this dialog.", "error");
        }
      };
    }
    document.getElementById("appDialogDoneBtn").onclick = () => closeAppDialog({ ok: true });
    document.querySelectorAll("#publishedShareShortcuts [data-share]").forEach((button) => {
      button.onclick = async () => {
        const service = button.dataset.share;
        if (service === "whatsapp") {
          window.open(`https://wa.me/?text=${encodeURIComponent(shareLink)}`, "_blank", "noopener,noreferrer");
          return;
        }
        if (navigator.share) {
          try {
            await navigator.share({ title: "Published project", url: shareLink });
            return;
          } catch (_err) {}
        }
        await copyLink();
        showNotification(`Link copied — paste it into ${service === "discord" ? "Discord" : "Snapchat"}.`, "success");
      };
    });
    setTimeout(() => document.getElementById("appDialogDoneBtn")?.focus(), 0);
  });
}

function showGitHubUploadSourcePicker() {
  return new Promise((resolve) => {
    activeDialogResolver = (result) => resolve(result);
    if (appDialogTitle) appDialogTitle.textContent = "Upload files";
    if (appDialogMessage) {
      appDialogMessage.innerHTML = '<div style="display:grid;gap:10px;text-align:left"><div><strong>Choose where to upload from:</strong></div><div>Use your current CodX Editor project files, or pick files from your computer.</div></div>';
    }
    if (appDialogInput) {
      appDialogInput.style.display = "none";
      appDialogInput.value = "";
      appDialogInput.onkeydown = null;
    }
    if (appDialogActions) {
      appDialogActions.innerHTML = `
        <button type="button" id="githubUploadFromProjectBtn" class="run-button" style="background:var(--accent-color);"><strong>FROM CURRENT PROJECT</strong></button>
        <button type="button" id="githubUploadFromLocalBtn" class="run-button" style="background:#2563eb;"><strong>FROM FILE EXPLORER</strong></button>
        <button type="button" id="githubUploadFromCancelBtn" class="run-button" style="background:#6b7280;"><strong>CANCEL</strong></button>
      `;
    }
    if (appDialog) appDialog.style.display = "flex";
    document.getElementById("githubUploadFromProjectBtn")?.addEventListener("click", () => closeAppDialog({ ok: true, source: "project" }));
    document.getElementById("githubUploadFromLocalBtn")?.addEventListener("click", () => closeAppDialog({ ok: true, source: "local" }));
    document.getElementById("githubUploadFromCancelBtn")?.addEventListener("click", () => closeAppDialog({ ok: false, source: null }));
    setTimeout(() => document.getElementById("githubUploadFromProjectBtn")?.focus(), 0);
  });
}

function showAppConfirm(title, message, okText = "YES", cancelText = "NO", okVariant = "") {
  return showAppDialog({
    title,
    message,
    input: false,
    okText,
    cancelText,
    okVariant,
  });
}

function showAppConfirmHtml(title, messageHtml, okText = "YES", cancelText = "NO", okVariant = "") {
  return showAppDialog({
    title,
    messageHtml,
    input: false,
    okText,
    cancelText,
    okVariant,
  });
}

function resetFileErrorCounts() {
  fileErrorCounts = {};
  fileErrorLocations = {};
}

function resolveProjectFileName(rawName) {
  const candidate = String(rawName || "").trim().split(/[\\/]/).pop();
  if (!candidate) return null;
  const match = projectFiles.find(
    (f) => f.name.toLowerCase() === candidate.toLowerCase(),
  );
  return match ? match.name : null;
}

function extractFileNameFromConsoleMessage(message) {
  const text = String(message || "");
  const bracketMatch = text.match(/\[([^\]]+\.(?:html|css|js))\]/i);
  if (bracketMatch) return resolveProjectFileName(bracketMatch[1]);

  const plainMatch = text.match(/\b([A-Za-z0-9_.-]+\.(?:html|css|js))\b/i);
  if (plainMatch) return resolveProjectFileName(plainMatch[1]);

  return null;
}

function extractErrorLocationFromConsoleMessage(message) {
  const text = String(message || "");
  const fileName = extractFileNameFromConsoleMessage(text);
  if (!fileName) return null;

  const lineColMatch =
    text.match(/\bline\s+(\d+)\s*[: ,]\s*(?:col\s*)?(\d+)\b/i) ||
    text.match(/\bline\s+(\d+)\s*,\s*col\s+(\d+)\b/i);
  if (lineColMatch) {
    return {
      fileName,
      line: Number(lineColMatch[1]),
      col: Number(lineColMatch[2]),
    };
  }

  const compactMatch = text.match(/\bline\s+(\d+):(\d+)\b/i);
  if (compactMatch) {
    return {
      fileName,
      line: Number(compactMatch[1]),
      col: Number(compactMatch[2]),
    };
  }

  const nearLineMatch = text.match(/\bnear line\s+(\d+)\b/i);
  if (nearLineMatch) {
    return {
      fileName,
      line: Number(nearLineMatch[1]),
      col: 1,
    };
  }

  const atLineMatch = text.match(/\bat line\s+(\d+)\b/i);
  if (atLineMatch) {
    return {
      fileName,
      line: Number(atLineMatch[1]),
      col: 1,
    };
  }

  return {
    fileName,
    line: 1,
    col: 1,
  };
}

function getTextIndexForLineAndColumn(text, line, col) {
  const lines = String(text || "").split("\n");
  const safeLine = Math.max(1, Number(line || 1));
  const safeCol = Math.max(1, Number(col || 1));
  let index = 0;

  for (let i = 0; i < lines.length; i++) {
    const currentLine = i + 1;
    if (currentLine === safeLine) {
      return index + Math.min(safeCol - 1, lines[i].length);
    }
    index += lines[i].length + 1;
  }

  return text.length;
}

function getLineRangeFromIndex(text, index) {
  const value = String(text || "");
  const safeIndex = Math.max(0, Math.min(Number(index || 0), value.length));
  const lineStart = value.lastIndexOf("\n", Math.max(0, safeIndex - 1)) + 1;
  const nextBreak = value.indexOf("\n", safeIndex);
  const lineEnd = nextBreak === -1 ? value.length : nextBreak;
  return { start: lineStart, end: lineEnd };
}

function getLineNumberFromIndex(text, index) {
  return String(text || "")
    .slice(0, Math.max(0, Number(index || 0)))
    .split("\n").length;
}

function clearInlineHtmlCorrectionDisplay() {
  activeInlineHtmlCorrection = null;
  return false;
}

function syncInlineHtmlCorrectionDisplay() {
  activeInlineHtmlCorrection = null;
}

function acceptInlineHtmlCorrection() {
  return false;
}

function getLineAndColumnFromIndex(text, index) {
  const safeText = String(text || "");
  const safeIndex = Math.max(0, Math.min(Number(index || 0), safeText.length));
  const before = safeText.slice(0, safeIndex);
  const lines = before.split("\n");
  return {
    line: lines.length,
    col: (lines[lines.length - 1] || "").length + 1,
  };
}

function jumpToEditorLocation(fileName, line, col = 1) {
  const normalizedFileName = String(fileName || "").trim().toLowerCase();
  const targetFile = projectFiles.find(
    (file) => String(file.name || "").trim().toLowerCase() === normalizedFileName,
  );
  if (!targetFile) return;

  if (
    !activeFile ||
    String(activeFile.name || "").trim().toLowerCase() !== normalizedFileName
  ) {
    switchFile(targetFile.name);
  }

  const editor = document.getElementById("activeEditor");
  if (!editor) return;

  const caretIndex = getTextIndexForLineAndColumn(
    targetFile.content || "",
    line,
    col,
  );

  editor.focus();
  editor.setSelectionRange(caretIndex, caretIndex);

  const computed = window.getComputedStyle(editor);
  const lineHeight = parseFloat(computed.lineHeight) || parseFloat(computed.fontSize) * 1.4 || 20;
  const targetTop = Math.max(0, (Math.max(1, Number(line || 1)) - 1) * lineHeight - editor.clientHeight / 2);
  editor.scrollTop = targetTop;

  if (typeof lineNumbers !== "undefined" && lineNumbers) {
    lineNumbers.scrollTop = editor.scrollTop;
  }
  if (highlightLayer) {
    highlightLayer.scrollTop = editor.scrollTop;
    highlightLayer.scrollLeft = editor.scrollLeft;
  }
}

function jumpToFirstErrorInFile(fileName) {
  const normalizedFileName = String(fileName || "").trim().toLowerCase();
  const resolvedKey =
    Object.keys(fileErrorLocations).find(
      (name) => String(name || "").trim().toLowerCase() === normalizedFileName,
    ) || fileName;
  const locations = fileErrorLocations[resolvedKey];
  if (!locations || !locations.length) {
    switchFile(resolvedKey);
    return;
  }
  const target = locations[0];
  jumpToEditorLocation(target.fileName, target.line, target.col);
}

function getErrorTokenLength(text, line, col) {
  const targetLine = String(text || "").split("\n")[Math.max(0, line - 1)] || "";
  if (!targetLine) return 1;

  let index = Math.max(0, Math.min(targetLine.length - 1, (col || 1) - 1));
  const isTokenChar = (char) => /[A-Za-z0-9_$:-]/.test(char);

  while (index < targetLine.length && /\s/.test(targetLine[index])) {
    index++;
  }
  if (index >= targetLine.length) return 1;

  if (!isTokenChar(targetLine[index])) {
    if (targetLine[index] === "<" || targetLine[index] === "/") {
      let lookAhead = index + 1;
      while (lookAhead < targetLine.length && isTokenChar(targetLine[lookAhead])) {
        lookAhead++;
      }
      return Math.max(1, lookAhead - index);
    }
    return 1;
  }

  let start = index;
  let end = index;
  while (start > 0 && isTokenChar(targetLine[start - 1])) start--;
  while (end < targetLine.length && isTokenChar(targetLine[end])) end++;
  return Math.max(1, end - start);
}

function renderErrorHighlights(textarea) {
  if (!errorHighlightLayer || !textarea || !activeFile) return;
  errorHighlightLayer.innerHTML = "";

  const activeErrorKey =
    Object.keys(fileErrorLocations).find(
      (name) =>
        String(name || "").trim().toLowerCase() ===
        String(activeFile.name || "").trim().toLowerCase(),
    ) || activeFile.name;
  const locations = (fileErrorLocations[activeErrorKey] || [])
    .filter((item) => item && Number(item.line) > 0)
    .sort((a, b) => a.line - b.line || a.col - b.col);

  if (!locations.length) return;

  const seen = new Set();
  const content = activeFile.content || "";
  const computed = window.getComputedStyle(textarea);
  const lineHeight =
    parseFloat(computed.lineHeight) ||
    parseFloat(computed.fontSize) * 1.5 ||
    20;
  const wrapperWidth =
    (editorWrapperEl && editorWrapperEl.clientWidth) || textarea.clientWidth || 0;
  const contentWidth = Math.max(0, wrapperWidth - 24);
  locations.forEach((location) => {
    const key = `${location.line}:${location.col || 1}`;
    if (seen.has(key)) return;
    seen.add(key);

    const caretIndex = getTextIndexForLineAndColumn(
      content,
      location.line,
      location.col || 1,
    );
    const coords = getCaretCoordinates(textarea, caretIndex);
    const tokenLength = getErrorTokenLength(
      content,
      Number(location.line || 1),
      Number(location.col || 1),
    );
    const endIndex = Math.min(content.length, caretIndex + tokenLength);
    const endCoords = getCaretCoordinates(textarea, endIndex);

    const lineMarker = document.createElement("div");
    lineMarker.className = "error-line-highlight";
    lineMarker.style.top = `${coords.top}px`;
    lineMarker.style.width = `${contentWidth}px`;
    lineMarker.style.height = `${Math.max(18, lineHeight)}px`;
    errorHighlightLayer.appendChild(lineMarker);

    const tokenMarker = document.createElement("div");
    tokenMarker.className = "error-token-highlight";
    tokenMarker.style.top = `${coords.top + Math.max(0, lineHeight - 3)}px`;
    tokenMarker.style.left = `${coords.left}px`;
    tokenMarker.style.width = `${Math.max(8, endCoords.left - coords.left || 10)}px`;
    errorHighlightLayer.appendChild(tokenMarker);
  });
}

function updateFileErrorCountsFromConsole() {
  const next = {};
  const locations = {};
  const errorLines = consoleOutput.querySelectorAll("div.error");
  errorLines.forEach((line) => {
    const location = extractErrorLocationFromConsoleMessage(line.textContent);
    if (!location || !location.fileName) return;
    next[location.fileName] = (next[location.fileName] || 0) + 1;
    if (!locations[location.fileName]) {
      locations[location.fileName] = [];
    }
    locations[location.fileName].push(location);
  });
  fileErrorCounts = next;
  fileErrorLocations = locations;
  renderFileList();
  const editor = document.getElementById("activeEditor");
  if (editor) renderErrorHighlights(editor);
}
let projectFiles = [
  {
    name: "index.html",
    type: "html",
    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get started with CodX Editor</title>
    <link rel="icon" href="cx.png">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="shell">
      <section class="hero">
        <img class="brand-logo" src="cx.png" alt="CodX Editor logo">
        <p class="eyebrow">CodX Editor Starter</p>
        <h1>Build and preview web apps instantly</h1>
        <p class="lead">
          Write HTML, CSS, and JavaScript in separate files and see updates live in the preview panel.
        </p>
      </section>

      <section class="grid">
        <article class="card">
          <h2>What you can do</h2>
          <ul>
            <li>Create and switch between multiple files</li>
            <li>Use Auto-Run for instant preview updates</li>
            <li>Debug quickly with the built-in console</li>
            <li>Import/Export projects as ZIP files</li>
          </ul>
        </article>

        <article class="card">
          <h2>Controls</h2>
          <ul>
            <li><kbd>Ctrl/Cmd</kbd> + <kbd>S</kbd> Export your project as a ZIP</li>
            <li><kbd>Ctrl/Cmd</kbd> + <kbd>Enter</kbd> Run preview manually</li>
            <li><kbd>Ctrl/Cmd</kbd> + <kbd>Q</kbd> Create a new file</li>
            <li><kbd>Ctrl/Cmd</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> Toggle console</li>
            <li><kbd>Esc</kbd> Exit Zen Mode</li>
            <li>Type <strong>cxstart</strong> in an empty HTML file and press <kbd>Enter</kbd></li>
            <li><kbd>Ctrl/Cmd</kbd> + <kbd>C</kbd>, then <kbd>X</kbd> Open developer tools</li>
          </ul>
        </article>
      </section>
    </main>

    <script src="script.js"></script>
</body>
</html>`,
    active: true,
  },
  {
    name: "style.css",
    type: "css",
    content: `:root {
  --bg: #ffffff;
  --panel: #ffffff;
  --panel-2: #f8fafc;
  --text: #111827;
  --muted: #4b5563;
  --accent: #0f766e;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, sans-serif;
  color: var(--text);
  background: var(--bg);
  display: grid;
  place-items: center;
  padding: 24px;
}

.shell {
  width: min(920px, 100%);
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
}

.brand-logo {
  width: 54px;
  height: 54px;
  object-fit: contain;
  margin-bottom: 10px;
}

.eyebrow {
  margin: 0 0 10px;
  color: var(--accent);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.78rem;
}

h1 {
  margin: 0;
  font-size: clamp(1.6rem, 2.6vw, 2.2rem);
}

.lead {
  margin: 12px 0 0;
  color: var(--muted);
  max-width: 65ch;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 22px;
}

.card {
  background: linear-gradient(180deg, var(--panel), var(--panel-2));
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
}

h2 {
  margin: 0 0 10px;
  font-size: 1.05rem;
}

ul {
  margin: 0;
  padding-left: 18px;
}

li {
  margin: 8px 0;
  color: var(--muted);
}

kbd {
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-bottom-width: 2px;
  border-radius: 6px;
  padding: 2px 6px;
  color: var(--text);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.82rem;
}

@media (max-width: 760px) {
  .shell {
    padding: 20px;
  }

  .grid {
    grid-template-columns: 1fr;
  }
}`,
    active: false,
  },
  {
    name: "script.js",
    type: "js",
    content: defaultScriptWelcomeText,
    active: false,
  },
];
let currentPreviewTarget = {
  mode: "html",
  fileName: "index.html",
};
let isPreviewInspecting = false;
let previewZoomPercent = 100;
let previewZoomLastFocusedElement = null;
let zenModeLayoutSnapshot = null;
let backgroundTimersRunning = false;
let cursorPruneInterval = null;
let roomIndicatorInterval = null;
let isPointerInsideEditor = false;
let lastPointerClientX = null;
let lastPointerClientY = null;

function getPreviewTargetForFile(rawHref) {
  const normalizedHref = String(rawHref || "").trim().replace(/^\.\/+/, "");
  if (!normalizedHref || normalizedHref === "#") {
    return {
      exists: false,
      mode: "missing",
      fileName: "#",
      url: `/404-for-preview.html?file=${encodeURIComponent("#")}`,
    };
  }
  const cleanHref = normalizedHref.split("#")[0].split("?")[0];
  const fileName = cleanHref.split("/").pop();
  const linkedFile = projectFiles.find((f) => {
    if (f.type !== "html") return false;
    const candidate = String(f.name || "").trim().replace(/^\.\/+/, "").toLowerCase();
    return (
      candidate === cleanHref.toLowerCase() ||
      candidate.endsWith(`/${cleanHref.toLowerCase()}`) ||
      candidate.split("/").pop() === fileName.toLowerCase()
    );
  });
  if (linkedFile) {
    return {
      exists: true,
      mode: "html",
      fileName: linkedFile.name,
      url: linkedFile.name,
    };
  }
  return {
    exists: false,
    mode: "missing",
    fileName,
    url: `/404-for-preview.html?file=${encodeURIComponent(fileName)}`,
  };
}

function isProjectHtmlNavigationHref(rawHref) {
  const href = String(rawHref || "").trim();
  if (!href || href.startsWith("#")) return false;
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("//")) return false;
  if (/^\/(?:404-for-preview\.html|published\/)/i.test(href)) return false;
  return /\.html(?:[?#].*)?$/i.test(href);
}

function rewritePreviewScriptNavigation(scriptCode) {
  let rewritten = String(scriptCode || "").replace(
    /((?:window\.)?location(?:\.href)?\s*=\s*|(?:window\.)?location\.(?:assign|replace)\(\s*|window\.open\(\s*)(['"])([^'"]+\.html(?:[?#][^'"]*)?)(\2)(\s*\))?/gi,
    (match, prefix, quote, href, _closingQuote, closing = "") => {
      if (!isProjectHtmlNavigationHref(href)) return match;
      const target = getPreviewTargetForFile(href);
      if (!target.exists) {
        if (/\(\s*$/i.test(prefix)) {
          return `${prefix}${quote}${target.url}${quote}${closing || ")"}`;
        }
        return `${prefix}${quote}${target.url}${quote}`;
      }
      return `window.parent.__codxOpenPreviewFile(${JSON.stringify(target.fileName)})`;
    },
  );
  rewritten = rewritten.replace(
    /((?:window\.)?location(?:\.href)?\s*=\s*)([^;\n]+)(;?)/gi,
    (_match, _prefix, targetExpression, semicolon = "") =>
      `window.__codxNavigate(${targetExpression.trim()}, "href")${semicolon}`,
  );
  rewritten = rewritten.replace(
    /(?:window\.)?location\.(assign|replace)\(\s*([^)]+?)\s*\)/gi,
    (_match, mode, targetExpression) =>
      `window.__codxNavigate(${targetExpression.trim()}, ${JSON.stringify(mode.toLowerCase())})`,
  );
  rewritten = rewritten.replace(
    /window\.open\(\s*([^,)]+?)(?:\s*,[^\)]*)?\)/gi,
    (_match, targetExpression) =>
      `window.__codxNavigate(${targetExpression.trim()}, "open")`,
  );
  return rewritten;
}

function getPreviewOpenFileCall(fileName) {
  return `window.parent.__codxOpenPreviewFile(${JSON.stringify(fileName)})`;
}

function setPreviewTarget(rawHref) {
  const nextTarget = getPreviewTargetForFile(rawHref);
  currentPreviewTarget = {
    mode: nextTarget.mode,
    fileName: nextTarget.fileName,
  };
  updatePreview();
  return false;
}

window.__codxOpenPreviewFile = setPreviewTarget;

function bindPreviewNavigationHandlers() {
  const previewDoc = iframe.contentDocument || iframe.contentWindow?.document;
  if (!previewDoc || previewDoc.__codxNavigationBound) return;
  previewDoc.__codxNavigationBound = true;

  previewDoc.addEventListener(
    "click",
    (event) => {
      if (isPreviewInspecting) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }
      const target = event.target;
      const anchor = target && target.closest ? target.closest("a[href]") : null;
      const anchorHref = anchor ? anchor.getAttribute("href") : "";
      if (anchor && isProjectHtmlNavigationHref(anchorHref)) {
        event.preventDefault();
        setPreviewTarget(anchorHref);
        return;
      }

      const button = target && target.closest
        ? target.closest("button[formaction],button[data-href],button[data-url],button[data-link]")
        : null;
      if (!button) return;
      const href =
        button.getAttribute("formaction") ||
        button.getAttribute("data-href") ||
        button.getAttribute("data-url") ||
        button.getAttribute("data-link");
      if (isProjectHtmlNavigationHref(href)) {
        event.preventDefault();
        setPreviewTarget(href);
      }
    },
    true,
  );

  previewDoc.addEventListener(
    "submit",
    (event) => {
      if (isPreviewInspecting) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }
      const form = event.target;
      if (!form || !form.getAttribute) return;
      const action = form.getAttribute("action");
      if (isProjectHtmlNavigationHref(action)) {
        event.preventDefault();
        setPreviewTarget(action);
      }
    },
    true,
  );
}

function getInspectorMarkup(element) {
  if (!element || !element.outerHTML) return "";
  const clone = element.cloneNode(true);
  clone
    .querySelectorAll("#__codx-inspector-overlay, #__codx-inspector-outline, #__codx-inspector-styles, #__codx-preview-zoom-styles")
    .forEach((node) => node.remove());
  clone.querySelectorAll("script, style").forEach((node) => {
    node.textContent = node.tagName === "SCRIPT" ? "/* script content */" : "/* styles */";
  });
  let markup = clone.outerHTML;
  if (markup.length > 1800) markup = `${markup.slice(0, 1800)}\n...`;
  return markup;
}

function removePreviewInspector(previewDoc) {
  if (!previewDoc) return;
  previewDoc.getElementById("__codx-inspector-overlay")?.remove();
  previewDoc.getElementById("__codx-inspector-outline")?.remove();
  previewDoc.documentElement?.classList.remove("__codx-inspecting");
  previewDoc.__codxInspectedElement = null;
}

function positionPreviewInspector(previewDoc, element) {
  const overlay = previewDoc?.getElementById("__codx-inspector-overlay");
  const outline = previewDoc?.getElementById("__codx-inspector-outline");
  if (!overlay || !outline || !element?.isConnected) return;

  const rect = element.getBoundingClientRect();
  const viewportWidth = previewDoc.documentElement.clientWidth;
  const viewportHeight = previewDoc.documentElement.clientHeight;
  outline.style.left = `${Math.max(0, rect.left)}px`;
  outline.style.top = `${Math.max(0, rect.top)}px`;
  outline.style.width = `${Math.max(0, Math.min(rect.right, viewportWidth) - Math.max(0, rect.left))}px`;
  outline.style.height = `${Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(0, rect.top))}px`;

  const overlayWidth = Math.min(Math.max(rect.width, 280), Math.max(0, viewportWidth - 16));
  overlay.style.width = `${overlayWidth}px`;
  const overlayHeight = overlay.offsetHeight;
  const preferredTop = rect.top - overlayHeight - 8;
  const top = preferredTop >= 8
    ? preferredTop
    : Math.min(viewportHeight - overlayHeight - 8, rect.bottom + 8);
  overlay.style.left = `${Math.max(8, Math.min(rect.left, viewportWidth - overlayWidth - 8))}px`;
  overlay.style.top = `${Math.max(8, top)}px`;
}

function showPreviewInspector(previewDoc, element) {
  if (!element || element.id?.startsWith("__codx-inspector")) return;
  let overlay = previewDoc.getElementById("__codx-inspector-overlay");
  let outline = previewDoc.getElementById("__codx-inspector-outline");
  if (!outline) {
    outline = previewDoc.createElement("div");
    outline.id = "__codx-inspector-outline";
    previewDoc.body.appendChild(outline);
  }
  if (!overlay) {
    overlay = previewDoc.createElement("div");
    overlay.id = "__codx-inspector-overlay";
    overlay.innerHTML = '<div class="__codx-inspector-label">HTML</div><pre><code></code></pre>';
    previewDoc.body.appendChild(overlay);
  }
  previewDoc.__codxInspectedElement = element;
  overlay.querySelector("code").innerHTML = highlightHtml(getInspectorMarkup(element));
  positionPreviewInspector(previewDoc, element);
}

function bindPreviewInspector() {
  let previewDoc;
  try {
    previewDoc = iframe.contentDocument || iframe.contentWindow?.document;
  } catch (_err) {
    return;
  }
  if (!previewDoc?.documentElement) return;
  removePreviewInspector(previewDoc);
  if (!isPreviewInspecting) return;

  previewDoc.documentElement.classList.add("__codx-inspecting");
  if (!previewDoc.getElementById("__codx-inspector-styles")) {
    const styles = previewDoc.createElement("style");
    styles.id = "__codx-inspector-styles";
    styles.textContent = `
      html.__codx-inspecting, html.__codx-inspecting * { cursor: crosshair !important; }
      #__codx-inspector-outline { position: fixed; z-index: 2147483645; pointer-events: none; border: 2px solid #58a6ff; background: rgba(88,166,255,.12); box-sizing: border-box; }
      #__codx-inspector-overlay { position: fixed; z-index: 2147483646; pointer-events: none; box-sizing: border-box; max-height: 190px; overflow: hidden; border: 1px solid #30363d; border-radius: 8px; background: #0d1117; color: #c9d1d9; box-shadow: 0 12px 32px rgba(0,0,0,.38); font: 12px/1.5 Consolas, Monaco, monospace; }
      #__codx-inspector-overlay .__codx-inspector-label { padding: 4px 8px; background: #161b22; color: #8b949e; border-bottom: 1px solid #30363d; font: 700 10px/1.3 system-ui, sans-serif; letter-spacing: .08em; }
      #__codx-inspector-overlay pre { margin: 0; padding: 8px 10px; max-height: 155px; overflow: hidden; white-space: pre-wrap; overflow-wrap: anywhere; }
      #__codx-inspector-overlay .token.comment { color: #8b949e; } #__codx-inspector-overlay .token.keyword { color: #ff7b72; }
      #__codx-inspector-overlay .token.string { color: #a5d6ff; } #__codx-inspector-overlay .token.tag, #__codx-inspector-overlay .token.tag-punctuation { color: #7ee787; }
      #__codx-inspector-overlay .token.attr { color: #d2a8ff; } #__codx-inspector-overlay .token.number { color: #79c0ff; }
      #__codx-inspector-overlay .token.property { color: #ffa657; } #__codx-inspector-overlay .token.selector { color: #f2cc60; }
      #__codx-inspector-overlay .token.operator, #__codx-inspector-overlay .token.punctuation { color: #c9d1d9; }
      #__codx-inspector-overlay .token.identifier, #__codx-inspector-overlay .token.variable, #__codx-inspector-overlay .token.declaration { color: #c4a7e7; }
      #__codx-inspector-overlay .token.function, #__codx-inspector-overlay .token.method, #__codx-inspector-overlay .token.property-access { color: #ff9bce; }
      #__codx-inspector-overlay .token.builtin, #__codx-inspector-overlay .token.constant { color: #79c0ff; }
      #__codx-inspector-overlay .token.json-key, #__codx-inspector-overlay .token.env-key { color: #7ee787; }
      #__codx-inspector-overlay .token.html-text { color: #f0f6fc; }
    `;
    (previewDoc.head || previewDoc.documentElement).appendChild(styles);
  }

  if (!previewDoc.__codxInspectorBound) {
    previewDoc.__codxInspectorBound = true;
    previewDoc.addEventListener("pointerover", (event) => {
      if (isPreviewInspecting) showPreviewInspector(previewDoc, event.target);
    }, true);
    previewDoc.addEventListener("click", (event) => {
      if (!isPreviewInspecting) return;
      event.preventDefault();
      event.stopImmediatePropagation();
    }, true);
    previewDoc.addEventListener("scroll", () => {
      if (isPreviewInspecting) positionPreviewInspector(previewDoc, previewDoc.__codxInspectedElement);
    }, true);
  }
}

function setPreviewInspecting(enabled) {
  isPreviewInspecting = Boolean(enabled);
  previewInspectBtn?.setAttribute("aria-pressed", String(isPreviewInspecting));
  if (previewInspectBtn) {
    previewInspectBtn.title = isPreviewInspecting
      ? "Stop inspecting preview elements"
      : "Inspect preview elements";
    previewInspectBtn.setAttribute("aria-label", previewInspectBtn.title);
  }
  bindPreviewInspector();
}

function applyPreviewZoom() {
  let previewDoc;
  try {
    previewDoc = iframe.contentDocument || iframe.contentWindow?.document;
  } catch (_err) {
    return;
  }
  if (!previewDoc?.documentElement) return;

  let zoomStyles = previewDoc.getElementById("__codx-preview-zoom-styles");
  if (previewZoomPercent === 100) {
    zoomStyles?.remove();
    return;
  }
  if (!zoomStyles) {
    zoomStyles = previewDoc.createElement("style");
    zoomStyles.id = "__codx-preview-zoom-styles";
    (previewDoc.head || previewDoc.documentElement).appendChild(zoomStyles);
  }
  zoomStyles.textContent = `html { zoom: ${previewZoomPercent / 100} !important; }`;
}

function updatePreviewZoomUI() {
  if (previewZoomValue) previewZoomValue.textContent = `${previewZoomPercent}%`;
  if (previewZoomOutBtn) previewZoomOutBtn.disabled = previewZoomPercent <= 50;
  if (previewZoomInBtn) previewZoomInBtn.disabled = previewZoomPercent >= 200;
  if (previewZoomResetBtn) previewZoomResetBtn.disabled = previewZoomPercent === 100;
}

function setPreviewZoom(percent) {
  previewZoomPercent = Math.max(50, Math.min(200, Math.round(Number(percent) / 25) * 25));
  updatePreviewZoomUI();
  applyPreviewZoom();
}

function openPreviewZoomModal() {
  if (!previewZoomModal) return;
  previewZoomLastFocusedElement = document.activeElement;
  previewZoomModal.hidden = false;
  previewZoomBtn?.setAttribute("aria-expanded", "true");
  updatePreviewZoomUI();
  closePreviewZoomBtn?.focus();
}

function closePreviewZoomModal() {
  if (!previewZoomModal || previewZoomModal.hidden) return;
  previewZoomModal.hidden = true;
  previewZoomBtn?.setAttribute("aria-expanded", "false");
  if (previewZoomLastFocusedElement?.focus) previewZoomLastFocusedElement.focus();
  previewZoomLastFocusedElement = null;
}

previewInspectBtn?.addEventListener("click", () => setPreviewInspecting(!isPreviewInspecting));
previewZoomBtn?.addEventListener("click", openPreviewZoomModal);
closePreviewZoomBtn?.addEventListener("click", closePreviewZoomModal);
previewZoomOutBtn?.addEventListener("click", () => setPreviewZoom(previewZoomPercent - 25));
previewZoomInBtn?.addEventListener("click", () => setPreviewZoom(previewZoomPercent + 25));
previewZoomResetBtn?.addEventListener("click", () => setPreviewZoom(100));
previewZoomModal?.addEventListener("click", (event) => {
  if (event.target === previewZoomModal) closePreviewZoomModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isPreviewInspecting) setPreviewInspecting(false);
  if (event.key === "Escape" && previewZoomModal && !previewZoomModal.hidden) {
    closePreviewZoomModal();
  }
});

iframe.addEventListener("load", () => {
  bindPreviewNavigationHandlers();
  bindPreviewInspector();
  applyPreviewZoom();
});
let activeFile = projectFiles[0];

function getDefaultHtmlStarter() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New File</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <script src="script.js"></script>
</body>
</html>`;
}

function getHtmlStarterCursorPosition(html) {
  const position = html.indexOf("\n    \n    <script");
  return position >= 0 ? position + 1 + 4 : html.length;
}

function getFreshProjectState() {
  return {
    files: [
      {
        name: "index.html",
        type: "html",
        content: getDefaultHtmlStarter(),
        active: true,
      },
      {
        name: "style.css",
        type: "css",
        content: "",
        active: false,
      },
      {
        name: "script.js",
        type: "js",
        content: defaultScriptWelcomeText,
        active: false,
      },
    ],
    activeFileName: "index.html",
    previewTarget: { mode: "html", fileName: "index.html" },
  };
}

function formatProjectStatusTime(timestamp) {
  if (!timestamp) return "";
  try {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
  } catch (_err) {
    return "";
  }
}

function updateProjectStatusUI() {
  if (!projectStatusBadge || !projectStatusMeta) return;
  projectStatusBadge.classList.remove("saved", "unsaved");
  if (projectStatusSaveBtn) {
    projectStatusSaveBtn.hidden = true;
  }
  if (hasUnsavedChanges) {
    projectStatusBadge.textContent = "Unsaved";
    projectStatusBadge.classList.add("unsaved");
    projectStatusMeta.textContent = lastAutosaveAt
      ? `Autosaved ${formatProjectStatusTime(lastAutosaveAt)}`
      : "Save to keep this version";
    if (projectStatusSaveBtn && activeSavedProjectName) {
      projectStatusSaveBtn.hidden = false;
    }
    return;
  }
  projectStatusBadge.textContent = "Saved";
  projectStatusBadge.classList.add("saved");
  projectStatusMeta.textContent = lastAutosaveAt
    ? `Autosaved ${formatProjectStatusTime(lastAutosaveAt)}`
    : "Ready";
}

function updatePreviewTitle(text) {
  if (!previewTitleEl) return;
  const next = String(text || "").trim();
  previewTitleEl.textContent = next || "Preview";
}

function updatePreviewLink(linkText) {
  if (!previewLinkEl) return;
  const next = String(linkText || "").trim();
  previewLinkEl.textContent = next || "";
  previewLinkEl.style.display = next ? "block" : "none";
}

function updatePreviewFavicon(src) {
  if (!previewFaviconEl) return;
  const next = String(src || "").trim();
  if (!next) {
    previewFaviconEl.hidden = true;
    previewFaviconEl.removeAttribute("src");
    return;
  }
  previewFaviconEl.hidden = false;
  previewFaviconEl.src = next;
}

function extractHtmlTitle(htmlText) {
  const match = String(htmlText || "").match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  if (!match) return "";
  const temp = document.createElement("textarea");
  temp.innerHTML = match[1]
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return temp.value.trim();
}

function extractHtmlFavicon(htmlText) {
  const html = String(htmlText || "");
  const faviconMatch = html.match(
    /<link\b[^>]*rel=["'][^"']*(?:icon|shortcut icon|apple-touch-icon)[^"']*["'][^>]*href=["']([^"']+)["'][^>]*>/i,
  );
  return faviconMatch ? String(faviconMatch[1] || "").trim() : "";
}

function resolveBuiltInAssetPath(assetPath) {
  const normalizedPath = String(assetPath || "").trim();
  if (!normalizedPath) return "";
  const cleanPath = normalizedPath.replace(/^\.\/+/, "").replace(/^\/+/, "").toLowerCase();
  if (cleanPath === "cx.png") return "/cx.png";
  return "";
}

function resolvePreviewAssetPath(assetPath) {
  const normalizedPath = String(assetPath || "").trim();
  if (!normalizedPath) return "";
  if (
    normalizedPath.startsWith("data:") ||
    normalizedPath.startsWith("blob:") ||
    /^(https?:)?\/\//i.test(normalizedPath)
  ) {
    return normalizedPath;
  }
  const builtInAssetPath = resolveBuiltInAssetPath(normalizedPath);
  if (builtInAssetPath) return builtInAssetPath;
  const cleanPath = normalizedPath.replace(/^\.\/+/, "").toLowerCase();
  const fileName = cleanPath.split("/").pop();
  const mediaFile = projectFiles.find((file) => {
    if (file.type !== "media") return false;
    const candidate = String(file.name || "").trim().replace(/^\.\/+/, "").toLowerCase();
    return (
      candidate === cleanPath ||
      candidate.endsWith(`/${cleanPath}`) ||
      candidate.split("/").pop() === fileName
    );
  });
  if (mediaFile && mediaFile.content) {
    return mediaFile.content;
  }
  return normalizedPath.startsWith("/") ? normalizedPath : `/${normalizedPath}`;
}

const defaultSettings = {
  bgColor: "#1E1E1E",
  textSize: "14",
  fontFamily: "'JetBrains Mono', 'Consolas', monospace",
  fontEmbed: "",
  themeColor: "#238636",
  zenShowFiles: true,
  fullscreenPreviewPanel: true,
};

// PART 2 - UTILITY FUNCTIONS
function safeLocalStorage(method, key, value = null) {
  try {
    if (method === "get") return localStorage.getItem(key);
    else if (method === "set") {
      localStorage.setItem(key, value);
      return true;
    } else if (method === "remove") {
      localStorage.removeItem(key);
      return true;
    }
  } catch (e) {
    console.warn("localStorage not available:", e);
    return null;
  }
}

function getOrCreateDeviceId() {
  const existing = safeLocalStorage("get", DEVICE_ID_KEY);
  if (existing) return String(existing);
  const next = `device-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  safeLocalStorage("set", DEVICE_ID_KEY, next);
  return next;
}

function serializeProjectState() {
  return {
    version: 1,
    files: projectFiles.map((file) => ({
      name: file.name,
      type: file.type,
      content: file.content,
      active: file.active,
    })),
    activeFileName: activeFile ? activeFile.name : "",
    previewTarget: currentPreviewTarget,
    savedAt: Date.now(),
  };
}

function upgradeStarterScriptIfNeeded(files) {
  if (!Array.isArray(files) || !files.length) return files;
  const htmlFile = files.find((file) => String(file.type || "").toLowerCase() === "html");
  const cssFile = files.find((file) => String(file.name || "").toLowerCase() === "style.css");
  const jsFile = files.find((file) => String(file.name || "").toLowerCase() === "script.js");
  if (!htmlFile || !jsFile) return files;

  const htmlMatchesStarter = String(htmlFile.content || "").trim() === getDefaultHtmlStarter().trim();
  const cssLooksUntouched = !cssFile || !String(cssFile.content || "").trim();
  const jsContent = String(jsFile.content || "").trim();
  const jsNeedsUpgrade =
    !jsContent || jsContent === `console.log('Hello World from CodX Editor!');`;

  if (htmlMatchesStarter && cssLooksUntouched && jsNeedsUpgrade) {
    jsFile.content = defaultScriptWelcomeText;
  }
  return files;
}

function applyProjectState(snapshot, sourceLabel = "project") {
  const files = Array.isArray(snapshot?.files) ? snapshot.files : [];
  if (!files.length) {
    showNotification(`No files found in ${sourceLabel}.`, "error");
    return false;
  }

  projectFiles = upgradeStarterScriptIfNeeded(files).map((file, index) => ({
    name: normalizeProjectFileName(file.name, `file-${index + 1}.html`),
    type: String(file.type || "html"),
    content: String(file.content || ""),
    active: false,
  }));

  normalizeProjectFileNamesInPlace(projectFiles);
  const requestedActiveName = normalizeProjectFileName(snapshot?.activeFileName || "");
  activeFile =
    projectFiles.find((file) => file.name === requestedActiveName) ||
    projectFiles.find((file) => file.active) ||
    projectFiles[0];
  projectFiles.forEach((file) => {
    file.active = activeFile && file.name === activeFile.name;
  });

  if (snapshot?.previewTarget?.mode === "html") {
    currentPreviewTarget = {
      mode: "html",
      fileName: String(snapshot.previewTarget.fileName || activeFile?.name || ""),
    };
  } else if (activeFile?.type === "html") {
    currentPreviewTarget = { mode: "html", fileName: activeFile.name };
  }

  const editor = document.getElementById("activeEditor");
  if (editor && activeFile) {
    editor.value = activeFile.content;
    updateLineNumbers(editor);
    syncScroll(editor);
    resetAllEditorHistory(editor);
  }
  renderFileList();
  enforceCollabPermissionsUI();
  hasUnsavedChanges = false;
  lastAutosaveAt = Date.now();
  updateProjectStatusUI();
  scheduleProjectAutosave();
  if (autoRunCheckbox.checked) updatePreview();
  syncProjectWithSession();
  return true;
}

function scheduleProjectAutosave() {
  clearTimeout(autosaveTimer);
  autosaveTimer = setTimeout(() => {
    const snapshot = serializeProjectState();
    safeLocalStorage("set", AUTOSAVE_PROJECT_KEY, JSON.stringify(snapshot));
    safeLocalStorage(
      "set",
      AUTOSAVE_META_KEY,
      JSON.stringify({
        activeFileName: snapshot.activeFileName,
        savedAt: snapshot.savedAt,
        savedProjectName: activeSavedProjectName || "",
      }),
    );
    lastAutosaveAt = Date.now();
    updateProjectStatusUI();
  }, 350);
}

function getSavedProjects() {
  try {
    const projects = JSON.parse(safeLocalStorage("get", SAVED_PROJECTS_KEY) || "[]");
    let migrated = false;
    if (Array.isArray(projects)) {
      projects.forEach((project) => {
        const snapshot = project?.snapshot;
        if (!Array.isArray(snapshot?.files)) return;
        const requestedActiveName = normalizeProjectFileName(snapshot.activeFileName || "");
        if (normalizeProjectFileNamesInPlace(snapshot.files, snapshot.previewTarget)) migrated = true;
        if (snapshot.activeFileName !== requestedActiveName) {
          snapshot.activeFileName = requestedActiveName;
          migrated = true;
        }
      });
      if (migrated) safeLocalStorage("set", SAVED_PROJECTS_KEY, JSON.stringify(projects));
    }
    return Array.isArray(projects) ? projects : [];
  } catch (_err) {
    return [];
  }
}

function findSavedProjectNameForSnapshot(snapshot) {
  if (!snapshot || !Array.isArray(snapshot.files)) return null;

  const normalizedSnapshotFiles = snapshot.files
    .map((file) => `${String(file.name || "")}|${String(file.type || "")}`)
    .sort()
    .join("||");
  const activeFileName = String(snapshot.activeFileName || "").trim();

  const savedProjects = getSavedProjects();
  let exactMatch = null;
  let fileMatch = null;

  for (const project of savedProjects) {
    if (!project?.snapshot || !Array.isArray(project.snapshot.files)) continue;
    const normalizedSavedFiles = project.snapshot.files
      .map((file) => `${String(file.name || "")}|${String(file.type || "")}`)
      .sort()
      .join("||");

    if (normalizedSavedFiles !== normalizedSnapshotFiles) continue;

    if (
      String(project.snapshot.activeFileName || "").trim() === activeFileName ||
      String(project.name || "").trim() === activeFileName
    ) {
      return String(project.name || "").trim() || null;
    }

    if (!fileMatch) {
      fileMatch = String(project.name || "").trim() || null;
    } else {
      fileMatch = null;
    }
  }

  return fileMatch;
}

function setSavedProjects(projects) {
  safeLocalStorage("set", SAVED_PROJECTS_KEY, JSON.stringify(projects));
}

function saveCurrentProjectToLibrary(projectName) {
  if (
    activeSessionId && !isHost() && collabPermissions.disableSaveProject
  ) {
    showNotification("The host disabled saving projects for participants.", "error");
    return false;
  }
  const trimmedName = String(projectName || "").trim();
  if (!trimmedName) {
    showNotification("Project name cannot be empty.", "error");
    return false;
  }
  const projects = getSavedProjects();
  const snapshot = serializeProjectState();
  const existingIndex = projects.findIndex(
    (project) => String(project.name || "").trim().toLowerCase() === trimmedName.toLowerCase(),
  );
  const nextRecord = {
    id:
      existingIndex >= 0
        ? projects[existingIndex].id
        : `project-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: trimmedName,
    updatedAt: Date.now(),
    snapshot,
  };
  if (existingIndex >= 0) {
    projects[existingIndex] = nextRecord;
  } else {
    projects.unshift(nextRecord);
  }
  setSavedProjects(projects.slice(0, 24));
  activeSavedProjectName = trimmedName;
  hasUnsavedChanges = false;
  lastAutosaveAt = Date.now();
  updateProjectStatusUI();
  scheduleProjectAutosave();
  showNotification(`Saved project "${trimmedName}".`, "success");
  return true;
}

function getSuggestedProjectName() {
  const htmlFile = projectFiles.find((file) => file.type === "html");
  const baseName = (htmlFile ? htmlFile.name : activeFile?.name || "codx-project").replace(/\.[^.]+$/, "");
  return baseName || "codx-project";
}

async function startFreshProject() {
  applyProjectState(getFreshProjectState(), "new project");
  document.title = "CodX Editor";
  clearConsole();
  showNotification("Started a fresh HTML starter project.", "success");
}

async function handleNewProject() {
  if (activeSessionId && isReadOnlyParticipant() && collabPermissions.disableNewFile) {
    showNotification("The host disabled creating new files for participants.", "error");
    return;
  }
  if (!hasUnsavedChanges) {
    await startFreshProject();
    return;
  }
  const confirmSave = await showAppConfirm(
    "SAVE CURRENT PROJECT",
    "You have unsaved changes. Save this project before starting a new one?",
    "SAVE PROJECT",
    "CANCEL",
  );
  if (!confirmSave?.ok) return;
  const saveDialog = await showAppPrompt(
    "SAVE PROJECT",
    "Choose a name for this saved project:",
    getSuggestedProjectName(),
    "codx-project",
  );
  if (!saveDialog?.ok) return;
  const saved = saveCurrentProjectToLibrary(saveDialog.value);
  if (!saved) return;
  await startFreshProject();
}

async function deleteSavedProject(projectId) {
  const project = getSavedProjects().find((entry) => entry.id === projectId);
  if (!project) return;
  const dialog = await showAppConfirm(
    "DELETE SAVED PROJECT",
    `Delete "${project.name}" from your saved projects?`,
    "DELETE",
    "CANCEL",
    "background:#d32f2f;",
  );
  if (!dialog?.ok) return;
  const projects = getSavedProjects().filter((entry) => entry.id !== projectId);
  setSavedProjects(projects);
  renderProjectLibrary("saved");
  showNotification("Saved project removed.", "success");
}

async function publishCurrentProject() {
  if (
    activeSessionId && !isHost() && collabPermissions.disablePublishShare
  ) {
    showNotification("The host disabled publish/share for participants.", "error");
    return;
  }
  const actionDialog = await showPublishActionPrompt();
  if (!actionDialog?.ok) return;
  const mode = actionDialog.action === "update" ? "update" : "create";
  const dialog = await showPublishUrlPrompt(mode);
  if (!dialog?.ok) return;
  const publishId = String(dialog.value || "").trim();
  if (!publishId) {
    showNotification("Enter a link name to publish your project.", "error");
    return;
  }
  let verificationKey = "";
  if (mode === "update") {
    const keyDialog = await showAppPrompt(
      "VERIFICATION KEY",
      "Enter the verification key that was shown when this link was first published:",
      "",
      "ABC123-DEF456",
    );
    if (!keyDialog?.ok) return;
    verificationKey = String(keyDialog.value || "").trim();
    if (!verificationKey) {
      showNotification("Enter the verification key to update this link.", "error");
      return;
    }
    const confirmUpdate = await showAppConfirmHtml(
      "UPDATE PUBLISHED LINK",
      `Are you sure you want to replace the project currently published at:<br><code style="display:block;margin-top:8px;padding:9px 10px;border-radius:7px;background:var(--bg-primary);color:var(--text-primary);word-break:break-all">${escapeHtml(`${window.location.origin}/published/${publishId}`)}</code>`,
      "YES, UPDATE IT",
      "CANCEL",
      "background:#d97706",
    );
    if (!confirmUpdate?.ok) return;
  }
  try {
    const response = await fetch("/api/publish", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode,
        publishId,
        verificationKey,
        files: projectFiles,
        activeFileName: activeFile ? activeFile.name : "",
      }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) {
      throw new Error(payload.error || "Failed to publish project.");
    }
    if (payload.shareLink) {
      try {
        await navigator.clipboard.writeText(payload.shareLink);
      } catch (_err) {}
    }
    await showPublishedProjectDialog(payload.shareLink || "", payload.verificationKey || "", mode);
    showNotification(mode === "update" ? "Published link updated successfully." : "Link published successfully.", "success");
  } catch (error) {
    showNotification(error.message || (mode === "update" ? "Failed to update link." : "Failed to publish project."), "error");
  }
}

function renderProjectLibrary(mode = "saved") {
  if (!projectLibraryModal || !projectLibraryBody) return;
  if (activeSessionId && isReadOnlyParticipant()) {
    if (
      mode === "saved" &&
      collabPermissions.disableOpenSavedProjects
    ) {
      showNotification("The host disabled opening saved projects for participants.", "error");
      return;
    }
    if (
      mode === "templates" &&
      collabPermissions.disableTemplates
    ) {
      showNotification("The host disabled starter templates for participants.", "error");
      return;
    }
  }
  const savedProjects = getSavedProjects();
  const tabs = `
    <div class="collab-pill-row" style="margin-bottom:16px;">
      <button id="savedProjectsTabBtn" class="run-button"${mode === "saved" ? ' style="background:var(--accent-color);color:#fff;"' : ""}><strong>SAVED PROJECTS</strong></button>
      <button id="templateProjectsTabBtn" class="run-button"${mode === "templates" ? ' style="background:var(--accent-color);color:#fff;"' : ""}><strong>STARTER TEMPLATES</strong></button>
    </div>
  `;

  if (mode === "templates") {
    projectLibraryBody.innerHTML =
      tabs +
      `<div class="template-library-grid">${starterTemplates
        .map(
          (template) => `
            <article class="template-card" style="--template-accent:${escapeHtml(template.accent || "#4CAF50")};">
              <div class="template-card-top">
                <span class="template-icon"><i class="fa-solid ${escapeHtml(template.icon || "fa-layer-group")}"></i></span>
                <span class="template-tone">${escapeHtml(template.tone || "Starter")}</span>
              </div>
              <div class="template-preview" aria-hidden="true">
                <span class="template-preview-dot"></span>
                <span class="template-preview-dot"></span>
                <span class="template-preview-dot"></span>
                <div class="template-preview-hero"></div>
                <div class="template-preview-line wide"></div>
                <div class="template-preview-line"></div>
                <div class="template-preview-cards">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <h4 class="template-title">${escapeHtml(template.name)}</h4>
              <div class="template-description">${escapeHtml(template.description)}</div>
              <div class="template-meta-row">
                <span class="template-meta-pill"><i class="fa-solid fa-folder-tree"></i> ${template.files.length} files</span>
                <span class="template-meta-pill"><i class="fa-solid fa-code"></i> ${escapeHtml(template.files.map((file) => file.type.toUpperCase()).join(" • "))}</span>
              </div>
              <div class="template-highlights">
                ${(Array.isArray(template.highlights) ? template.highlights : [])
                  .map((item) => `<span class="template-highlight-pill">${escapeHtml(item)}</span>`)
                  .join("")}
              </div>
              <button class="run-button apply-template-btn" data-template="${escapeHtml(template.id)}"><strong>USE TEMPLATE</strong></button>
            </article>`,
        )
        .join("")}</div>`;
  } else {
    projectLibraryBody.innerHTML =
      tabs +
      (savedProjects.length
        ? `<div class="collab-participant-list">${savedProjects
            .map(
              (project) => `
                <div class="collab-pending-row">
                  <div class="collab-participant-main">
                    <div class="collab-participant-text">
                      <div class="collab-participant-name">${escapeHtml(project.name)}</div>
                      <div class="collab-participant-meta">Updated ${new Date(project.updatedAt).toLocaleString()}</div>
                    </div>
                  </div>
                  <div class="collab-pending-actions">
                    <button class="run-button open-saved-project-btn" data-project-id="${escapeHtml(project.id)}"><strong>OPEN</strong></button>
                    <button class="run-button delete-saved-project-btn" data-project-id="${escapeHtml(project.id)}" style="background:#d32f2f;"><strong>DELETE</strong></button>
                  </div>
                </div>`,
            )
            .join("")}</div>`
        : `<div class="collab-section-card"><div class="collab-section-note">No saved projects yet. Use SAVE PROJECT to store your current work.</div></div>`);
  }

  projectLibraryModal.style.display = "flex";

  const savedTabBtn = document.getElementById("savedProjectsTabBtn");
  const templateTabBtn = document.getElementById("templateProjectsTabBtn");
  if (savedTabBtn) savedTabBtn.onclick = () => renderProjectLibrary("saved");
  if (templateTabBtn) templateTabBtn.onclick = () => renderProjectLibrary("templates");

  document.querySelectorAll(".open-saved-project-btn").forEach((btn) => {
    btn.onclick = () => {
      const project = savedProjects.find((entry) => entry.id === btn.dataset.projectId);
      if (!project?.snapshot) return;
      applyProjectState(project.snapshot, "saved project");
      activeSavedProjectName = project.name;
      closeProjectLibrary();
      updateProjectStatusUI();
    };
  });

  document.querySelectorAll(".delete-saved-project-btn").forEach((btn) => {
    btn.onclick = () => deleteSavedProject(btn.dataset.projectId);
  });

  document.querySelectorAll(".apply-template-btn").forEach((btn) => {
    btn.onclick = () => {
      const template = starterTemplates.find((entry) => entry.id === btn.dataset.template);
      if (!template) return;
      applyProjectState(
        {
          files: template.files,
          activeFileName: template.files[0]?.name || "",
          previewTarget: { mode: "html", fileName: template.files[0]?.name || "" },
        },
        "template",
      );
      closeProjectLibrary();
      showNotification(`Template "${template.name}" loaded.`, "success");
    };
  });
}

function closeProjectLibrary() {
  if (projectLibraryModal) {
    projectLibraryModal.style.display = "none";
  }
}

function initializeEditorPresence() {
  if (typeof io !== "function" || editorPresenceSocket) return;
  editorPresenceSocket = io();
  const announcePresence = () => {
    if (editorPresenceSocket && editorPresenceSocket.connected) {
      editorPresenceSocket.emit("editor:presence");
    }
  };
  editorPresenceSocket.on("connect", announcePresence);
  if (editorPresenceSocket.connected) announcePresence();
}

async function tryRestoreAutosaveDraft() {
  if (extractSessionIdFromUrl()) return false;
  const raw = safeLocalStorage("get", AUTOSAVE_PROJECT_KEY);
  if (!raw) return false;
  try {
    const snapshot = JSON.parse(raw);
    const savedAt = Number(snapshot?.savedAt || 0);
    if (!Array.isArray(snapshot?.files) || !snapshot.files.length) return false;
    if (savedAt && Date.now() - savedAt > AUTOSAVE_RESTORE_MAX_AGE_MS) {
      safeLocalStorage("remove", AUTOSAVE_PROJECT_KEY);
      safeLocalStorage("remove", AUTOSAVE_META_KEY);
      return false;
    }

    const rawMeta = safeLocalStorage("get", AUTOSAVE_META_KEY);
    let autosaveMeta = {};
    try {
      autosaveMeta = JSON.parse(rawMeta || "{}");
    } catch (_err) {
      autosaveMeta = {};
    }

    const currentSnapshot = serializeProjectState();
    const sameAsCurrent = JSON.stringify(snapshot?.files || []) === JSON.stringify(currentSnapshot.files || []);
    if (sameAsCurrent) return false;

    const savedLabel = savedAt
      ? new Date(savedAt).toLocaleString([], {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        })
      : "a recent session";

    const dialog = await showAppConfirm(
      "RESTORE AUTOSAVED DRAFT",
      `Restore the autosaved draft from ${savedLabel}?`,
      "RESTORE",
      "SKIP",
    );
    if (!dialog?.ok) return false;

    applyProjectState(snapshot, "autosave");
    activeSavedProjectName = String(autosaveMeta.savedProjectName || "").trim() || null;
    if (!activeSavedProjectName) {
      activeSavedProjectName = findSavedProjectNameForSnapshot(snapshot);
    }
    updateProjectStatusUI();
    showNotification("Restored autosaved project draft.", "info");
    return true;
  } catch (_err) {
    return false;
  }
}

function showNotification(message, type = "info") {
  return showNotificationMarkup(
    `<div class="codx-notification-message">${escapeHtml(String(message || ""))}</div>`,
    type,
  );
}

function showNotificationHtml(messageHtml, type = "info") {
  return showNotificationMarkup(
    `<div class="codx-notification-message">${messageHtml || ""}</div>`,
    type,
  );
}

function showNotificationMarkup(messageMarkup, type = "info") {
  if (
    activeSessionId &&
    collabPermissions.quietMode &&
    type !== "error" &&
    type !== "warn" &&
    !String(messageMarkup || "").toLowerCase().includes("session")
  ) {
    return;
  }
  const existing = document.querySelectorAll(".codx-notification");
  existing.forEach((item, index) => {
    item.style.top = `${86 + index * 78}px`;
  });

  const notification = document.createElement("div");
  notification.className = `codx-notification codx-notification-${type}`;
  const offsetTop = 86 + existing.length * 78;
  notification.style.top = `${offsetTop}px`;

  const icon =
    type === "error"
      ? "fa-circle-exclamation"
      : type === "success"
      ? "fa-circle-check"
      : type === "warn"
      ? "fa-triangle-exclamation"
      : "fa-circle-info";

  const label =
    type === "error"
      ? "Error"
      : type === "success"
      ? "Success"
      : type === "warn"
      ? "Warning"
      : "Info";

  notification.innerHTML = `
    <div class="codx-notification-icon" aria-hidden="true">
      <i class="fa-solid ${icon}"></i>
    </div>
    <div class="codx-notification-body">
      <div class="codx-notification-label">${label}</div>
      ${messageMarkup}
    </div>
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.classList.add("is-leaving");
    setTimeout(() => {
      notification.remove();
      document.querySelectorAll(".codx-notification").forEach((item, index) => {
        item.style.top = `${86 + index * 78}px`;
      });
    }, 300);
  }, 3000);
}

const consoleErrorObserver = new MutationObserver(() => {
  updateFileErrorCountsFromConsole();
});
if (consoleOutput) {
  consoleErrorObserver.observe(consoleOutput, {
    childList: true,
    subtree: false,
  });
}

function clearConsole() {
  consoleOutput.innerHTML = "";
  resetFileErrorCounts();
  renderFileList();
  showNotification("Console cleared", "info");
}

function debouncedUpdatePreview() {
  clearTimeout(autoRunTimeout);
  autoRunTimeout = setTimeout(updatePreview, 24);
}

function scheduleSessionUpdate() {
  clearTimeout(sessionSyncTimeout);
  sessionSyncTimeout = setTimeout(() => {
    emitSessionUpdate();
  }, 120);
}

function renderFileList() {
  const normalizedLegacyNames = normalizeProjectFileNamesInPlace(projectFiles);
  if (normalizedLegacyNames) {
    scheduleProjectAutosave();
    if (!fileNameMigrationNoticeShown) {
      fileNameMigrationNoticeShown = true;
      showNotification("Spaces in file names were replaced with dashes.", "info");
    }
  }
  __codxRescanProjectSuggestionCacheSoon();
  fileList.innerHTML = "";
  projectFiles.forEach((file) => {
    const fileItem = document.createElement("div");
    fileItem.className = `file-item ${file.active ? "active" : ""}`;

    const nameSpan = document.createElement("span");
    nameSpan.className = "file-name";
    nameSpan.appendChild(createFileExtensionIcon(file.name));

    const fileNameText = document.createElement("span");
    fileNameText.className = "file-name-text";
    fileNameText.textContent = file.name;
    nameSpan.appendChild(fileNameText);
    if (
      currentTypingIndicator &&
      currentTypingIndicator.name !== myInfo.name &&
      !collabPermissions.quietMode &&
      currentTypingIndicator.fileName === file.name
    ) {
      const typingSpan = document.createElement("span");
      typingSpan.className = "file-typing-indicator";
      typingSpan.textContent = ` - ${currentTypingIndicator.name} is typing...`;
      typingSpan.style.color = currentTypingIndicator.theme || "var(--accent-color)";
      nameSpan.appendChild(typingSpan);
    }

    if (collabPermissions.pinnedFile === file.name) {
      const pinnedSpan = document.createElement("span");
      pinnedSpan.className = "file-typing-indicator";
      pinnedSpan.textContent = " - PINNED";
      pinnedSpan.style.color = "var(--warning-color)";
      nameSpan.appendChild(pinnedSpan);
    }

    if (collabPermissions.groupHighlightFile === file.name) {
      const focusSpan = document.createElement("span");
      focusSpan.className = "file-typing-indicator";
      focusSpan.textContent = " - TEAM FOCUS";
      focusSpan.style.color = "var(--accent-color)";
      nameSpan.appendChild(focusSpan);
    }

    const errorCount = fileErrorCounts[file.name] || 0;
    if (errorCount > 0) {
      const errorBadge = document.createElement("span");
      errorBadge.className = "file-error-badge";
      errorBadge.textContent = errorCount > 99 ? "99+" : String(errorCount);
      errorBadge.title = `${errorCount} error${errorCount === 1 ? "" : "s"} - jump to ${errorCount === 1 ? "error" : "first error"}`;
      errorBadge.style.cssText = `
        display:inline-flex;
        align-items:center;
        justify-content:center;
        min-width:${errorCount > 99 ? "28px" : "18px"};
        height:18px;
        margin-left:8px;
        padding:0 5px;
        border-radius:999px;
        background:#e53935;
        color:#fff;
        font-size:11px;
        font-weight:700;
        line-height:1;
        cursor:pointer;
      `;
      errorBadge.setAttribute("role", "button");
      errorBadge.setAttribute("tabindex", "0");
      errorBadge.setAttribute(
        "aria-label",
        `Jump to ${errorCount} error${errorCount === 1 ? "" : "s"} in ${file.name}`,
      );
      const jumpToError = (e) => {
        e.preventDefault();
        e.stopPropagation();
        jumpToFirstErrorInFile(file.name);
      };
      errorBadge.addEventListener("click", jumpToError);
      errorBadge.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          jumpToError(e);
        }
      });
      nameSpan.appendChild(errorBadge);
    }

    const renameBtn = document.createElement("button");
    renameBtn.className = "rename-file";
    renameBtn.dataset.file = file.name;
    renameBtn.setAttribute("aria-label", `Rename ${file.name}`);

    const pencilIcon = document.createElement("i");
    pencilIcon.className = "fa-solid fa-pen";
    renameBtn.appendChild(pencilIcon);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-file";
    deleteBtn.dataset.file = file.name;
    deleteBtn.setAttribute("aria-label", `Delete ${file.name}`);

    const trashIcon = document.createElement("i");
    trashIcon.className = "fa-solid fa-trash";
    deleteBtn.appendChild(trashIcon);

    fileItem.appendChild(nameSpan);
    fileItem.appendChild(renameBtn);
    fileItem.appendChild(deleteBtn);

    fileItem.addEventListener("click", (e) => {
      if (e.target.closest(".delete-file") || e.target.closest(".rename-file"))
        return;
      switchFile(file.name);
    });
    renameBtn.addEventListener("click", () => renameFile(file.name));
    deleteBtn.addEventListener("click", () => deleteFile(file.name));
    fileList.appendChild(fileItem);
  });
  enforceCollabPermissionsUI();
}

function switchFile(fileName) {
  const previousPreviewTarget = { ...currentPreviewTarget };
  const normalizedFileName = String(fileName || "").trim().toLowerCase();
  projectFiles.forEach((file) => {
    file.active = String(file.name || "").trim().toLowerCase() === normalizedFileName;
    if (file.active) {
      activeFile = file;
      const editor = document.getElementById("activeEditor");
      editor.value = file.content;
      updateLineNumbers(editor);
      syncScroll(editor);
      syncInlineHtmlCorrectionDisplay(editor);
      syncEditorHistoryState(editor);
      // Hide suggestions when switching files
      hideSuggestions();
    }
  });
  if (activeFile && activeFile.type === "html") {
    currentPreviewTarget = { mode: "html", fileName: activeFile.name };
  } else {
    currentPreviewTarget = previousPreviewTarget;
  }
  renderFileList();
  enforceCollabPermissionsUI();
  refreshDiagnosticsState();
  if (autoRunCheckbox.checked) updatePreview();
  syncProjectWithSession();
}

async function createNewFile() {
  if (activeSessionId && isReadOnlyParticipant() && collabPermissions.disableNewFile) {
    showNotification("The host disabled creating new files for participants.", "error");
    return;
  }
  const dialog = await showAppPrompt(
    "NEW FILE",
    "Enter a file name. Spaces become dashes; underscores and dashes are allowed.",
    "",
    "newfile.html",
  );
  if (!dialog?.ok) return;
  const name = dialog.value;
  if (!name) return;
  const rawName = String(name).trim();
  if (!rawName) return;
  const trimmedName = normalizeProjectFileName(rawName);
  if (!trimmedName) return;
  const ext = trimmedName.split(".").pop().toLowerCase();

  if (!editableTextExtensions.includes(ext)) {
    showNotification(`Unsupported file type .${ext}`, "error");
    return;
  }
  if (projectFiles.some((file) => file.name.toLowerCase() === trimmedName.toLowerCase())) {
    showNotification("File name already exists", "error");
    return;
  }

  // Define the default HTML template
  const newFile = {
    name: trimmedName,
    type: ext,
    // Use template for HTML files, otherwise empty string
    content: ext === "html" ? getDefaultHtmlStarter() : "",
    active: true,
  };

  projectFiles.forEach((file) => (file.active = false));
  projectFiles.push(newFile);
  activeFile = newFile;
  if (newFile.type === "html") {
    currentPreviewTarget = { mode: "html", fileName: newFile.name };
  }

  const editor = document.getElementById("activeEditor");
  editor.value = newFile.content; // Set editor value to the template
  updateLineNumbers(editor);
  const cursorPos = getHtmlStarterCursorPosition(newFile.content);
  editor.focus();
  editor.setSelectionRange(cursorPos, cursorPos);
  renderFileList();
  scheduleProjectAutosave();
  if (autoRunCheckbox.checked) updatePreview();
  syncProjectWithSession();
  document.title = "CodX Editor";
  showNotification(`File ${trimmedName} created`, "success");
}

async function renameFile(oldName) {
  const normalizedOldName = String(oldName || "").trim().toLowerCase();
  const file = projectFiles.find(
    (f) => String(f.name || "").trim().toLowerCase() === normalizedOldName,
  );
  if (!file) return;

  const dialog = await showAppPrompt(
    "RENAME FILE",
    "Enter the new file name. Spaces become dashes:",
    oldName,
    oldName,
  );
  if (!dialog?.ok) return;
  const nextName = dialog.value;
  if (!nextName) return;
  const rawName = String(nextName).trim();
  if (!rawName) return;
  const name = normalizeProjectFileName(rawName);
  if (!name || name === oldName) return;

  const ext = name.split(".").pop().toLowerCase();
  if (!editableTextExtensions.includes(ext)) {
    showNotification(`Unsupported file type .${ext}`, "error");
    return;
  }
  if (
    projectFiles.some(
      (f) =>
        String(f.name || "").trim().toLowerCase() === name.toLowerCase() &&
        String(f.name || "").trim().toLowerCase() !== normalizedOldName,
    )
  ) {
    showNotification("File name already exists", "error");
    return;
  }

  const previousType = file.type;
  file.name = name;
  file.type = ext;
  if (
    currentPreviewTarget.mode === "html" &&
    currentPreviewTarget.fileName &&
    currentPreviewTarget.fileName.toLowerCase() === oldName.toLowerCase()
  ) {
    currentPreviewTarget = { mode: "html", fileName: name };
  }

  if (activeFile && activeFile === file) {
    hideSuggestions();
    const editor = document.getElementById("activeEditor");
    if (editor) {
      updateLineNumbers(editor);
    }
  }

  renderFileList();
  scheduleProjectAutosave();
  syncProjectWithSession();
  showNotification(`File renamed to ${name}`, "success");
  if (autoRunCheckbox.checked || previousType !== ext) {
    updatePreview();
  }
}

async function deleteFile(fileName) {
  if (projectFiles.length <= 1) {
    showNotification("Cannot delete the last file", "error");
    return;
  }
  const dialog = await showAppConfirm(
    "DELETE FILE",
    `Delete ${fileName}?`,
    "DELETE",
    "CANCEL",
    "background:#d32f2f;",
  );
  if (dialog?.ok) {
    const normalizedFileName = String(fileName || "").trim().toLowerCase();
    projectFiles = projectFiles.filter(
      (file) => String(file.name || "").trim().toLowerCase() !== normalizedFileName,
    );
    if (
      activeFile &&
      String(activeFile.name || "").trim().toLowerCase() === normalizedFileName
    ) {
      activeFile = projectFiles[0];
      activeFile.active = true;
      const editor = document.getElementById("activeEditor");
      editor.value = activeFile.content;
      updateLineNumbers(editor);
      syncScroll(editor);
    }
    if (
      currentPreviewTarget.fileName &&
      currentPreviewTarget.fileName.toLowerCase() === fileName.toLowerCase()
    ) {
      const nextHtmlFile = projectFiles.find((file) => file.type === "html");
      currentPreviewTarget = nextHtmlFile
        ? { mode: "html", fileName: nextHtmlFile.name }
        : { mode: "html", fileName: "" };
    }
    renderFileList();
    scheduleProjectAutosave();
    syncProjectWithSession();
    updatePreview();
    showNotification(`File ${fileName} deleted`, "success");
  }
}

// PART 3 - SETTINGS MANAGEMENT
function loadSettings() {
  const savedSettings = safeLocalStorage("get", "editorSettings");
  if (savedSettings) {
    try {
      const settings = JSON.parse(savedSettings);
      editorBgColorInput.value = settings.bgColor || defaultSettings.bgColor;
      editorBgColorText.value = settings.bgColor || defaultSettings.bgColor;
      themeColorInput.value = settings.themeColor || defaultSettings.themeColor;
      themeColorText.value = settings.themeColor || defaultSettings.themeColor;
      editorTextSizeInput.value = settings.textSize || defaultSettings.textSize;
      textSizeValue.textContent = (settings.textSize || defaultSettings.textSize) + "px";
      editorFontFamilySelect.value = settings.fontFamily || defaultSettings.fontFamily;
      if (!editorFontFamilySelect.value) {
        editorFontFamilySelect.value = defaultSettings.fontFamily;
      }
      editorFontEmbedInput.value = settings.fontEmbed || "";
      if (zenShowFilesCheckbox) {
        zenShowFilesCheckbox.checked =
          settings.zenShowFiles !== undefined
            ? Boolean(settings.zenShowFiles)
            : defaultSettings.zenShowFiles;
      }
      if (fullscreenPreviewPanelCheckbox) {
        fullscreenPreviewPanelCheckbox.checked =
          settings.fullscreenPreviewPanel !== undefined
            ? Boolean(settings.fullscreenPreviewPanel)
            : defaultSettings.fullscreenPreviewPanel;
      }
    } catch (e) {
      console.error("Error loading settings:", e);
      resetToDefaultSettings();
    }
  } else {
    resetToDefaultSettings();
  }
  applyGoogleFontImport(extractGoogleFontsCssUrl(editorFontEmbedInput.value));
  updateFontControlsState();
  updateThemeColor(themeColorInput.value);
  updatePreviewBox();
  applyZenFileVisibilitySetting();
  applySettingsToEditors();
}

function resetToDefaultSettings() {
  editorBgColorInput.value = defaultSettings.bgColor;
  editorBgColorText.value = defaultSettings.bgColor;
  themeColorInput.value = defaultSettings.themeColor;
  themeColorText.value = defaultSettings.themeColor;
  editorTextSizeInput.value = defaultSettings.textSize;
  textSizeValue.textContent = defaultSettings.textSize + "px";
  editorFontFamilySelect.value = defaultSettings.fontFamily;
  editorFontEmbedInput.value = defaultSettings.fontEmbed;
  if (zenShowFilesCheckbox) zenShowFilesCheckbox.checked = defaultSettings.zenShowFiles;
  if (fullscreenPreviewPanelCheckbox) {
    fullscreenPreviewPanelCheckbox.checked = defaultSettings.fullscreenPreviewPanel;
  }
  applyGoogleFontImport("");
  updateFontControlsState();
  updateThemeColor(defaultSettings.themeColor);
  applyZenFileVisibilitySetting(defaultSettings.zenShowFiles);
}

function applyZenFileVisibilitySetting(showFiles = null) {
  const shouldShow =
    typeof showFiles === "boolean"
      ? showFiles
      : zenShowFilesCheckbox
        ? zenShowFilesCheckbox.checked
        : defaultSettings.zenShowFiles;
  document.body.classList.toggle("zen-show-files", Boolean(shouldShow));
}

function extractGoogleFontsCssUrl(rawInput) {
  const raw = String(rawInput || "").trim();
  if (!raw) return "";

  const hrefMatch = raw.match(/href=["'](https:\/\/fonts\.googleapis\.com\/css2?[^"']+)["']/i);
  if (hrefMatch) return hrefMatch[1];

  const importMatch = raw.match(/@import\s+url\((['"]?)(https:\/\/fonts\.googleapis\.com\/css2?[^'")\s]+)\1\)/i);
  if (importMatch) return importMatch[2];

  const directMatch = raw.match(/https:\/\/fonts\.googleapis\.com\/css2?[^\s"'<>)]*/i);
  if (directMatch) return directMatch[0];

  return "";
}

function getGoogleFontFamilyName(cssUrl) {
  try {
    const url = new URL(cssUrl);
    const families = url.searchParams.getAll("family");
    if (!families.length) return "";
    const first = decodeURIComponent(families[0]).replace(/\+/g, " ");
    return first.split(":")[0].trim();
  } catch {
    return "";
  }
}

function applyGoogleFontImport(cssUrl) {
  let linkEl = document.getElementById("editorGoogleFontImport");
  if (!cssUrl) {
    if (linkEl) linkEl.remove();
    return;
  }

  if (linkEl) {
    const existingHref = String(linkEl.getAttribute("href") || "").trim();
    if (existingHref === cssUrl) return;
    linkEl.remove();
  }

  linkEl = document.createElement("link");
  linkEl.id = "editorGoogleFontImport";
  linkEl.rel = "stylesheet";
  linkEl.href = cssUrl;
  linkEl.onload = () => {
    updatePreviewBox();
    applySettingsToEditors();
  };
  document.head.appendChild(linkEl);
}

function getEffectiveEditorFontFamily() {
  const cssUrl = extractGoogleFontsCssUrl(editorFontEmbedInput.value);
  if (cssUrl) {
    const familyName = getGoogleFontFamilyName(cssUrl);
    if (familyName) {
      return `'${familyName.replace(/'/g, "\\'")}', 'JetBrains Mono', 'Consolas', monospace`;
    }
  }
  return editorFontFamilySelect.value || defaultSettings.fontFamily;
}

function updateFontControlsState() {
  const hasGoogleEmbed = Boolean(extractGoogleFontsCssUrl(editorFontEmbedInput.value));
  editorFontFamilySelect.disabled = hasGoogleEmbed;
  editorFontFamilySelect.title = hasGoogleEmbed
    ? "Disabled because a Google Fonts embed link is active."
    : "";
}

function updatePreviewBox() {
  settingsPreview.style.backgroundColor = editorBgColorInput.value;
  settingsPreview.style.borderColor = themeColorInput.value;
  settingsPreview.style.fontSize = editorTextSizeInput.value + "px";
  settingsPreview.style.fontFamily = getEffectiveEditorFontFamily();
  settingsPreview.style.lineHeight = "1.5";
  settingsPreviewCode.style.fontSize = editorTextSizeInput.value + "px";
  settingsPreviewCode.style.fontFamily = getEffectiveEditorFontFamily();
  settingsPreviewCode.style.lineHeight = "1.5";
  settingsPreviewCode.style.letterSpacing = "normal";
  settingsPreviewCode.style.tabSize = "4";
  settingsPreviewCode.innerHTML = highlightJs(settingsPreviewSampleCode);
}

function applySettingsToEditors() {
  const editor = document.getElementById("activeEditor");
  if (!editor) return;
  const editorWrapper = editor.closest(".editor-wrapper");
  const selectedBg = editorBgColorInput.value || defaultSettings.bgColor;

  editor.style.fontSize = editorTextSizeInput.value + "px";
  editor.style.fontFamily = getEffectiveEditorFontFamily();
  editor.style.backgroundColor = "transparent";
  if (editorWrapper) {
    editorWrapper.style.backgroundColor = selectedBg;
  }
  if (highlightLayer) {
    highlightLayer.style.backgroundColor = selectedBg;
  }
  lineNumbers.style.fontSize = editorTextSizeInput.value + "px";
  syncSyntaxLayerStyle(editor);
  renderSyntaxHighlight(editor);
  updateThemeColor(themeColorInput.value);
}

function updateThemeColor(rawColor) {
  const color = normalizeHexColor(rawColor) || defaultSettings.themeColor;
  document.documentElement.style.setProperty("--accent-color", color);
  document.documentElement.style.setProperty("--accent-hover", getHoverColor(color));
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) {
    themeMeta.setAttribute("content", color);
  }
}

function normalizeHexColor(rawColor) {
  const value = String(rawColor || "").trim();
  const match = value.match(/^#?([0-9A-Fa-f]{6})$/);
  return match ? `#${match[1].toUpperCase()}` : "";
}

function getHoverColor(hex) {
  const normalized = normalizeHexColor(hex);
  if (!normalized) return defaultSettings.themeColor;
  const r = parseInt(normalized.slice(1, 3), 16);
  const g = parseInt(normalized.slice(3, 5), 16);
  const b = parseInt(normalized.slice(5, 7), 16);
  const factor = 0.18;
  const lighten = (value) => Math.min(255, Math.max(0, Math.round(value + (255 - value) * factor)));
  const hoverColor = `#${((1 << 24) + (lighten(r) << 16) + (lighten(g) << 8) + lighten(b)).toString(16).slice(1)}`;
  return hoverColor;
}

editorBgColorInput.addEventListener("input", (e) => {
  editorBgColorText.value = e.target.value;
  updatePreviewBox();
});

// Allow manual hex code input for background color
editorBgColorText.addEventListener("input", (e) => {
  const hexValue = e.target.value;
  // Validate hex color format
  if (/^#[0-9A-Fa-f]{6}$/.test(hexValue)) {
    editorBgColorInput.value = hexValue;
    updatePreviewBox();
  }
});

themeColorInput.addEventListener("input", (e) => {
  themeColorText.value = e.target.value;
  updatePreviewBox();
});

themeColorText.addEventListener("input", (e) => {
  const hexValue = e.target.value;
  if (/^#[0-9A-Fa-f]{6}$/.test(hexValue)) {
    themeColorInput.value = hexValue;
    updatePreviewBox();
  }
});

function bindSettingsColorPicker(colorInput, title) {
  if (!colorInput) return;
  colorInput.title = title;
  const openPicker = () => {
    openCssColorPicker(
      colorInput,
      colorInput.value,
      (color) => {
        colorInput.value = color;
        colorInput.dispatchEvent(new Event("input", { bubbles: true }));
      },
      title,
    );
  };
  colorInput.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openPicker();
  });
}

bindSettingsColorPicker(editorBgColorInput, "Choose editor background color");
bindSettingsColorPicker(themeColorInput, "Choose theme color");

if (resetThemeColorBtn) {
  resetThemeColorBtn.addEventListener("click", () => {
    const defaultTheme = defaultSettings.themeColor;
    themeColorInput.value = defaultTheme;
    themeColorText.value = defaultTheme;
    updateThemeColor(defaultTheme);
    updatePreviewBox();
  });
}

editorTextSizeInput.addEventListener("input", (e) => {
  textSizeValue.textContent = e.target.value + "px";
  updatePreviewBox();
});

editorFontFamilySelect.addEventListener("change", updatePreviewBox);
editorFontEmbedInput.addEventListener("input", () => {
  const cssUrl = extractGoogleFontsCssUrl(editorFontEmbedInput.value);
  applyGoogleFontImport(cssUrl);
  updateFontControlsState();
  updatePreviewBox();
});

settingsBtn.addEventListener("click", () => {
  loadSettings();
  settingsModal.style.display = "flex";
});

closeSettingsBtn.addEventListener("click", () => {
  settingsModal.style.display = "none";
});

settingsModal.addEventListener("click", (e) => {
  if (e.target === settingsModal) settingsModal.style.display = "none";
});

applySettingsBtn.addEventListener("click", () => {
  const cssUrl = extractGoogleFontsCssUrl(editorFontEmbedInput.value);
  if (editorFontEmbedInput.value.trim() && !cssUrl) {
    showNotification("Invalid Google Fonts embed link. Paste a valid fonts.googleapis.com URL.", "error");
    return;
  }

  applyGoogleFontImport(cssUrl);
  editorFontEmbedInput.value = cssUrl || "";
  updateFontControlsState();

  const settings = {
    bgColor: editorBgColorInput.value,
    themeColor: themeColorInput.value,
    textSize: editorTextSizeInput.value,
    fontFamily: editorFontFamilySelect.value,
    fontEmbed: cssUrl || "",
    zenShowFiles: zenShowFilesCheckbox ? zenShowFilesCheckbox.checked : defaultSettings.zenShowFiles,
    fullscreenPreviewPanel: fullscreenPreviewPanelCheckbox
      ? fullscreenPreviewPanelCheckbox.checked
      : defaultSettings.fullscreenPreviewPanel,
  };
  if (safeLocalStorage("set", "editorSettings", JSON.stringify(settings))) {
    applyZenFileVisibilitySetting(settings.zenShowFiles);
    applySettingsToEditors();
    showNotification("Settings applied successfully!", "success");
    settingsModal.style.display = "none";
  } else {
    showNotification("Error saving settings", "error");
  }
});

resetSettingsBtn.addEventListener("click", () => {
  showAppConfirm(
    "RESET SETTINGS",
    "Are you sure you want to reset all settings to default?",
    "RESET",
    "CANCEL",
    "background:#d32f2f;",
  ).then((dialog) => {
    if (!dialog?.ok) return;
    safeLocalStorage("remove", "editorSettings");
    resetToDefaultSettings();
    updatePreviewBox();
    applySettingsToEditors();
    showNotification("Settings reset to default!", "success");
  });
});

if (zenShowFilesCheckbox) {
  zenShowFilesCheckbox.addEventListener("change", () => {
    applyZenFileVisibilitySetting(zenShowFilesCheckbox.checked);
  });
}

// PART 4 - UI CONTROLS
showConsoleCheckbox.addEventListener("change", () => {
  if (showConsoleCheckbox.disabled) {
    showConsoleCheckbox.checked = false;
    return;
  }
  consoleContainer.classList.toggle("show", showConsoleCheckbox.checked);
  if (showConsoleCheckbox.checked) {
    const diagnostics = [];
    runPreflightDiagnostics(diagnostics);
    renderDiagnosticConsoleEntries(diagnostics);
  }
});

// PART 5 - PREVIEW & LINE NUMBERS
const commonJsGlobalSuggestions = [
  "console",
  "document",
  "window",
  "localStorage",
  "sessionStorage",
  "navigator",
  "location",
  "history",
  "fetch",
  "setTimeout",
  "setInterval",
  "clearTimeout",
  "clearInterval",
  "requestAnimationFrame",
  "cancelAnimationFrame",
  "querySelector",
  "querySelectorAll",
  "getElementById",
  "createElement",
  "appendChild",
  "classList",
  "JSON",
  "Math",
  "Array",
  "Object",
  "String",
  "Number",
  "Boolean",
  "Date",
  "Promise",
];

function getLevenshteinDistance(a, b) {
  const left = String(a || "").toLowerCase();
  const right = String(b || "").toLowerCase();
  if (!left) return right.length;
  if (!right) return left.length;
  const dp = Array.from({ length: left.length + 1 }, () =>
    Array(right.length + 1).fill(0),
  );
  for (let i = 0; i <= left.length; i++) dp[i][0] = i;
  for (let j = 0; j <= right.length; j++) dp[0][j] = j;
  for (let i = 1; i <= left.length; i++) {
    for (let j = 1; j <= right.length; j++) {
      const cost = left[i - 1] === right[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost,
      );
    }
  }
  return dp[left.length][right.length];
}

function findClosestSuggestion(value, list, maxDistance = 3) {
  const target = String(value || "").trim().toLowerCase();
  if (!target) return "";
  let best = "";
  let bestDistance = Infinity;
  list.forEach((candidate) => {
    const safeCandidate = String(candidate || "").trim();
    if (!safeCandidate) return;
    const distance = getLevenshteinDistance(target, safeCandidate);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = safeCandidate;
    }
  });
  return bestDistance <= maxDistance ? best : "";
}

function getErrorHint(message, context = {}) {
  const msg = String(message || "").toLowerCase();
  const tagName = String(context.tagName || "").toLowerCase();
  const propertyName = String(context.propertyName || "").toLowerCase();
  const expectedTag = String(context.expectedTag || "").toLowerCase();
  const identifier = String(context.identifier || "").trim();

  if (context.kind === "html-tag" && tagName) {
    const closestTag = findClosestSuggestion(tagName, Array.from(knownHtmlTags), 3);
    if (closestTag) {
      return `Did you mean <${closestTag}>?`;
    }
    return "Check for a misspelled HTML tag.";
  }
  if (context.kind === "html-mismatch" && tagName) {
    if (expectedTag) {
      return `Close this section with </${expectedTag}> instead of </${tagName}>.`;
    }
    return "Check that the closing tag matches the last opened tag.";
  }
  if (context.kind === "html-unclosed" && tagName) {
    return `Add a closing </${tagName}> tag.`;
  }
  if (context.kind === "css-property" && propertyName) {
    const closestProperty = findClosestSuggestion(propertyName, cssPropertySuggestions, 4);
    if (closestProperty) {
      return `Did you mean "${closestProperty}"?`;
    }
    return "Check that the CSS property name is spelled correctly.";
  }
  if (msg.includes("is not defined")) {
    const match = String(message || "").match(/^([A-Za-z_$][\w$]*) is not defined/i);
    const unresolved = identifier || (match ? match[1] : "");
    const closestName = findClosestSuggestion(unresolved, commonJsGlobalSuggestions, 4);
    if (closestName) {
      return `Did you mean "${closestName}"?`;
    }
    return "Declare the variable or function before using it.";
  }
  if (msg.includes("is not a function")) {
    const match = String(message || "").match(/([A-Za-z_$][\w$]*) is not a function/i);
    const target = identifier || (match ? match[1] : "");
    const closestName = findClosestSuggestion(target, commonJsGlobalSuggestions, 4);
    if (closestName) {
      return `Check whether you meant "${closestName}".`;
    }
    return "Check the method name and make sure the target value supports that function.";
  }
  if (msg.includes("unexpected token")) {
    return "Check for missing commas, brackets, or quotes near this line.";
  }
  if (msg.includes("unexpected end")) {
    return "Look for an unclosed bracket, string, or block.";
  }
  if (msg.includes("missing )")) {
    return "A closing parenthesis ')' is likely missing.";
  }
  if (msg.includes("missing ]")) {
    return "A closing bracket ']' is likely missing.";
  }
  if (msg.includes("missing }")) {
    return "A closing brace '}' is likely missing.";
  }
  if (msg.includes("cannot read properties of")) {
    return "Check that the value exists before reading its properties.";
  }
  if (msg.includes("unterminated string")) {
    return "Close the string with matching quotes.";
  }
  return "Review syntax near the reported line.";
}

function getFunctionSyntaxErrorLocation(error) {
  const stack = String(error && error.stack ? error.stack : "");
  const match =
    stack.match(/<anonymous>:(\d+):(\d+)/) ||
    stack.match(/\b[A-Za-z0-9_.-]+\.(?:js|mjs|html):(\d+):(\d+)/);
  if (!match) return null;
  return {
    line: Math.max(1, Number(match[1] || 1) - 2),
    col: Math.max(1, Number(match[2] || 1)),
  };
}

function applyDiagnosticEntriesToFileErrors(entries) {
  const next = {};
  const locations = {};
  (entries || []).forEach((entry) => {
    if (!entry || entry.type !== "error") return;
    const location = extractErrorLocationFromConsoleMessage(entry.message);
    if (!location || !location.fileName) return;
    next[location.fileName] = (next[location.fileName] || 0) + 1;
    if (!locations[location.fileName]) {
      locations[location.fileName] = [];
    }
    locations[location.fileName].push(location);
  });
  fileErrorCounts = next;
  fileErrorLocations = locations;
  renderFileList();
  const editor = document.getElementById("activeEditor");
  if (editor) renderErrorHighlights(editor);
}

function runPreflightDiagnostics(targetEntries = null) {
  const emitDiagnostic = (type, message) => {
    if (Array.isArray(targetEntries)) {
      targetEntries.push({ type, message });
      return;
    }
    appendConsoleMessage(type, message);
  };
  // JS syntax checks per JS file
  projectFiles
    .filter((f) => f.type === "js")
    .forEach((file) => {
      try {
        // Parse-only check
        new Function(`${file.content}\n//# sourceURL=${file.name}`);
      } catch (err) {
        const location = getFunctionSyntaxErrorLocation(err);
        const lineInfo = location
          ? `line ${location.line}, col ${location.col}`
          : "line unknown";
        emitDiagnostic(
          "error",
          `[${file.name}] SyntaxError (${lineInfo}): ${err.message}. Fix: ${getErrorHint(err.message)}`,
        );
      }
    });

  // Basic CSS braces check
  projectFiles
    .filter((f) => f.type === "css")
    .forEach((file) => {
      const text = file.content || "";
      const propertyRegex = /(^|[;{]\s*)([a-zA-Z-]+)\s*:/gm;
      let propertyMatch;
      while ((propertyMatch = propertyRegex.exec(text)) !== null) {
        const propertyName = String(propertyMatch[2] || "").trim().toLowerCase();
        if (!propertyName || propertyName.startsWith("--")) continue;
        if (!cssPropertySuggestions.includes(propertyName)) {
          const propertyLine = text.slice(0, propertyMatch.index + propertyMatch[1].length).split("\n").length;
          emitDiagnostic(
            "error",
            `[${file.name}] CSS issue at line ${propertyLine}: unknown property "${propertyName}". Fix: ${getErrorHint(propertyName, { kind: "css-property", propertyName })}`,
          );
        }
      }
      const normalizedText = text.replace(
        /\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g,
        (match) => " ".repeat(match.length),
      );
      let depth = 0;
      const openBraceLines = [];
      for (let i = 0; i < normalizedText.length; i++) {
        if (normalizedText[i] === "{") {
          depth++;
          openBraceLines.push(text.slice(0, i).split("\n").length);
        }
        if (normalizedText[i] === "}") {
          depth--;
          if (openBraceLines.length) {
            openBraceLines.pop();
          }
        }
        if (depth < 0) {
          const line = text.slice(0, i).split("\n").length;
          emitDiagnostic(
            "error",
            `[${file.name}] CSS issue at line ${line}: extra '}' found.`,
          );
          return;
        }
      }
      if (depth > 0) {
        const line = openBraceLines[openBraceLines.length - 1] || 1;
        emitDiagnostic(
          "error",
          `[${file.name}] CSS issue at line ${line}: missing closing '}' brace.`,
        );
      }
    });

  // Basic HTML checks for every HTML file in the project.
  const selfClosing = new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
  ]);

  projectFiles
    .filter((f) => f.type === "html")
    .forEach((htmlFile) => {
      const htmlText = htmlFile.content || "";

      const inlineScriptRegex = /<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
      let scriptMatch;
      while ((scriptMatch = inlineScriptRegex.exec(htmlText)) !== null) {
        const scriptCode = scriptMatch[1];
        const scriptContentStartIndex =
          scriptMatch.index + scriptMatch[0].indexOf(scriptCode);
        const scriptContentStart = getLineAndColumnFromIndex(
          htmlText,
          scriptContentStartIndex,
        );
        try {
          new Function(`${scriptCode}\n//# sourceURL=${htmlFile.name}`);
        } catch (err) {
          const location = getFunctionSyntaxErrorLocation(err);
          if (location) {
            const absLine = scriptContentStart.line + Math.max(0, location.line - 1);
            const absCol =
              location.line === 1
                ? scriptContentStart.col + Math.max(0, location.col - 1)
                : location.col;
            emitDiagnostic(
              "error",
              `[${htmlFile.name}] Inline JS SyntaxError (line ${absLine}, col ${absCol}): ${err.message}. Fix: ${getErrorHint(err.message)}`,
            );
          } else {
            emitDiagnostic(
              "error",
              `[${htmlFile.name}] Inline JS SyntaxError: ${err.message}. Fix: ${getErrorHint(err.message)}`,
            );
          }
        }
      }

      const stack = [];
      const re = /<\/?([a-zA-Z][a-zA-Z0-9-]*)\b[^>]*>/g;
      let match;
      while ((match = re.exec(htmlText)) !== null) {
        const full = match[0];
        const tag = match[1].toLowerCase();
        if (selfClosing.has(tag) || full.endsWith("/>")) continue;
        const location = getLineAndColumnFromIndex(htmlText, match.index);
        const line = location.line;
        const col = location.col;
        const isCustomElement = tag.includes("-");

        if (!isCustomElement && !knownHtmlTags.has(tag)) {
          emitDiagnostic(
            "error",
            `[${htmlFile.name}] HTML issue at line ${line}:${col}: unknown tag <${tag}>. Fix: ${getErrorHint(tag, { kind: "html-tag", tagName: tag })}`,
          );
          continue;
        }

        if (full.startsWith("</")) {
          const last = stack.pop();
          if (!last || last.tag !== tag) {
            emitDiagnostic(
              "error",
              `[${htmlFile.name}] HTML issue at line ${line}:${col}: mismatched closing tag </${tag}>. Fix: ${getErrorHint(tag, { kind: "html-mismatch", tagName: tag, expectedTag: last?.tag || "" })}`,
            );
            break;
          }
        } else {
          stack.push({ tag, line, col });
        }
      }

      if (stack.length) {
        const unclosed = stack[stack.length - 1];
        emitDiagnostic(
          "error",
          `[${htmlFile.name}] HTML issue at line ${unclosed.line}:${unclosed.col}: unclosed <${unclosed.tag}> tag. Fix: ${getErrorHint(unclosed.tag, { kind: "html-unclosed", tagName: unclosed.tag })}`,
        );
      }
    });
}

function refreshDiagnosticsState() {
  const diagnostics = [];
  runPreflightDiagnostics(diagnostics);
  latestDiagnostics = diagnostics;
  applyDiagnosticEntriesToFileErrors(diagnostics);
  renderDiagnosticConsoleEntries(diagnostics);
}

function updatePreview() {
  if (
    activeSessionId && !isHost() && collabPermissions.disableRunCode
  ) {
    showNotification("The host disabled running code for participants.", "error");
    return;
  }
  consoleOutput.innerHTML = "";
  resetFileErrorCounts();
  const diagnostics = [];
  runPreflightDiagnostics(diagnostics);
  latestDiagnostics = diagnostics;
  applyDiagnosticEntriesToFileErrors(diagnostics);
  renderDiagnosticConsoleEntries(diagnostics);

  if (currentPreviewTarget.mode === "empty") {
    updatePreviewTitle("Preview");
    updatePreviewLink("");
    updatePreviewFavicon("");
    iframe.removeAttribute("src");
    iframe.srcdoc =
      '<h3 style="text-align:center;color:#aaa;">No HTML file found</h3>';
    appendConsoleMessage("warn", "WARNING: No HTML target was provided for preview navigation.");
    return;
  }

  if (currentPreviewTarget.mode === "missing" && currentPreviewTarget.fileName) {
    const recoveredTarget = getPreviewTargetForFile(currentPreviewTarget.fileName);
    if (recoveredTarget.exists) {
      currentPreviewTarget = {
        mode: "html",
        fileName: recoveredTarget.fileName,
      };
    } else {
      updatePreviewTitle(currentPreviewTarget.fileName || "Preview");
      updatePreviewLink(currentPreviewTarget.fileName || "");
      updatePreviewFavicon("");
      iframe.src = `/404-for-preview.html?file=${encodeURIComponent(currentPreviewTarget.fileName)}`;
      appendConsoleMessage(
        "warn",
        `WARNING: Preview page not found: ${currentPreviewTarget.fileName}`,
      );
      return;
    }
  }

  let htmlFile = null;
  if (currentPreviewTarget.mode === "html" && currentPreviewTarget.fileName) {
    htmlFile =
      projectFiles.find(
        (f) =>
          f.type === "html" &&
          f.name.toLowerCase() === currentPreviewTarget.fileName.toLowerCase(),
      ) || null;
  }
  if (!htmlFile) {
    htmlFile = projectFiles.find((f) => f.type === "html");
    if (htmlFile) {
      currentPreviewTarget = { mode: "html", fileName: htmlFile.name };
    }
  }
  if (!htmlFile) {
    updatePreviewTitle("Preview");
    updatePreviewLink("");
    updatePreviewFavicon("");
    iframe.removeAttribute("src");
    iframe.srcdoc =
      '<h3 style="text-align:center;color:#aaa;">No HTML file found</h3>';
    return;
  }

  let html = htmlFile.content;
  updatePreviewTitle(extractHtmlTitle(html) || htmlFile.name);
  updatePreviewLink(htmlFile.name);
  updatePreviewFavicon(resolvePreviewAssetPath(extractHtmlFavicon(html)));
  const externalHeadResources = [];

  // Normalize external font/resource links into <head> so they reliably load in srcdoc.
  html = html.replace(/<link\b[^>]*>/gi, (match) => {
    const hrefMatch =
      match.match(/\bhref=["']([^"']+)["']/i) ||
      match.match(/\bhref=([^\s>]+)/i);
    const relMatch =
      match.match(/\brel=["']([^"']+)["']/i) ||
      match.match(/\brel=([^\s>]+)/i);

    if (!hrefMatch) return match;

    const href = (hrefMatch[1] || "").trim();
    const rel = (relMatch ? relMatch[1] : "").trim().toLowerCase();
    const isExternal = /^(https?:)?\/\//i.test(href);
    const isGoogleFonts = /^https:\/\/fonts\.googleapis\.com\//i.test(href);
    const isFontHint =
      /^https:\/\/fonts\.gstatic\.com\//i.test(href) ||
      /^https:\/\/fonts\.googleapis\.com\//i.test(href);

    if (!isExternal) return match;

    if (rel === "stylesheet" && isGoogleFonts) {
      externalHeadResources.push(`<style>@import url("${href}");</style>`);
      return "";
    }

    if (rel === "preconnect" || rel === "dns-prefetch" || isFontHint) {
      externalHeadResources.push(match);
      return "";
    }

    return match;
  });

  // === 1. Replace <link rel="stylesheet" href="style.css"> (handles both attribute orders)
  html = html.replace(
    /<link[^>]*(?:rel=["']stylesheet["'][^>]*href=["']([^"']+)["']|href=["']([^"']+)["'][^>]*rel=["']stylesheet["'])[^>]*\/?>/gi,
    (match, href1, href2) => {
      const href = (href1 || href2 || "").trim();
      if (/^(https?:)?\/\//i.test(href)) {
        return match;
      }
      const normalizedHref = href.replace(/^\.\/+/, "").toLowerCase();
      const hrefFileName = normalizedHref.split("/").pop();
      const cssFile = projectFiles.find(
        (f) => {
          if (f.type !== "css") return false;
          const candidate = String(f.name || "").trim().replace(/^\.\/+/, "").toLowerCase();
          return (
            candidate === normalizedHref ||
            candidate.endsWith(`/${normalizedHref}`) ||
            candidate.split("/").pop() === hrefFileName
          );
        },
      );
      if (cssFile) {
        return `<style>${cssFile.content}</style>`;
      } else {
        const fileName = href.split("/").pop();
        appendConsoleMessage(
          "warn",
          `WARNING: CSS file not found: ${fileName}`,
        );
        return match; // Keep original link tag
      }
    },
  );

  // === 2. Replace <script src="script.js"></script> WITH FILE NAME MARKERS
  html = html.replace(
    /<script[^>]*src=["']([^"']+)["'][^>]*><\/script>/gi,
    (match, src) => {
      const normalizedSrc = String(src || "").trim();
      // Preserve external scripts exactly, including their query params.
      if (
        /^(https?:)?\/\//i.test(normalizedSrc) ||
        normalizedSrc.startsWith("data:") ||
        normalizedSrc.startsWith("blob:")
      ) {
        return match;
      }

      const resolvedSrc = normalizedSrc.replace(/^\.\/+/, "").toLowerCase();
      const srcFileName = resolvedSrc.split("/").pop();
      const jsFile = projectFiles.find(
        (f) => {
          if (f.type !== "js") return false;
          const candidate = String(f.name || "").trim().replace(/^\.\/+/, "").toLowerCase();
          return (
            candidate === resolvedSrc ||
            candidate.endsWith(`/${resolvedSrc}`) ||
            candidate.split("/").pop() === srcFileName
          );
        },
      );
      if (jsFile) {
        const rewrittenScript = rewritePreviewScriptNavigation(jsFile.content);
        // Keep original file line numbers by not wrapping code in extra lines.
        return `<script data-filename="${jsFile.name}">${rewrittenScript}
//# sourceURL=${jsFile.name}
</script>`;
      } else {
        const fileName = src.split("/").pop();
        appendConsoleMessage("warn", `WARNING: JS file not found: ${fileName}`);
        return match;
      }
    },
  );

  // === 3. Keep project links intact; the injected preview bridge handles clicks at runtime.
  html = html.replace(
    /<a([^>]*)href=["']([^"']+)["']([^>]*)>/gi,
    (match, before, href, after) => {
      const normalizedHref = String(href || "").trim();
      if (normalizedHref === "#") {
        return match;
      }
      if (!isProjectHtmlNavigationHref(normalizedHref)) {
        return match;
      }
      const target = getPreviewTargetForFile(href);
      if (!target.exists) {
        return `<a${before}href="${target.url}"${after}>`;
      }
      return match;
    },
  );

  // === 3a. Handle <form action> navigation to project HTML files
  html = html.replace(
    /<form([^>]*)action=["']([^"']+\.html(?:[?#][^"']*)?)["']([^>]*)>/gi,
    (match, before, action, after) => {
      if (!isProjectHtmlNavigationHref(action)) return match;
      const target = getPreviewTargetForFile(action);
      if (!target.exists) {
        return `<form${before}action="${target.url}"${after}>`;
      }
      const combinedAttrs = `${before}${after}`;
      const onsubmitMatch = combinedAttrs.match(/\bonsubmit=(["'])([\s\S]*?)\1/i);
      const existingOnsubmit = onsubmitMatch ? onsubmitMatch[2].trim() : "";
      const cleanedAttrs = combinedAttrs.replace(/\s*\bonsubmit=(["'])[\s\S]*?\1/i, "");
      const handlerParts = [];
      if (existingOnsubmit) {
        handlerParts.push(existingOnsubmit.replace(/;?\s*$/, ""));
      }
      handlerParts.push("event.preventDefault()");
      handlerParts.push(`return ${getPreviewOpenFileCall(target.fileName)}`);
      return `<form${cleanedAttrs} action="javascript:void(0)" onsubmit="${escapeHtmlAttributeValue(handlerParts.join("; "))}">`;
    },
  );

  // === 3b. Handle inline onclick/location assignments to project HTML files
  html = html.replace(
    /\bonclick=(["'])([\s\S]*?)\1/gi,
    (match, quote, handlerCode) => {
      const rewritten = rewritePreviewScriptNavigation(handlerCode);
      return `onclick="${escapeHtmlAttributeValue(rewritten)}"`;
    },
  );

  // === 3c. Handle inline script navigation to project HTML files
  html = html.replace(
    /<script\b((?:(?!\bsrc=)[^>])*)>([\s\S]*?)<\/script>/gi,
    (match, attrs, scriptCode) => {
      if (!scriptCode || !/\.html(?:[?#][^'"\s)]*)?/i.test(scriptCode)) return match;
      return `<script${attrs}>${rewritePreviewScriptNavigation(scriptCode)}</script>`;
    },
  );

  // === 3. Handle media: <img>, <video>, <audio>, <source> src attributes
  const resolveMediaFile = (srcValue) => {
    const normalizedSrc = (srcValue || "").trim().toLowerCase();
    const srcFileName = normalizedSrc.split("/").pop();
    return projectFiles.find((f) => {
      if (f.type !== "media") return false;
      const fileName = (f.name || "").toLowerCase();
      return fileName === normalizedSrc || fileName === srcFileName;
    });
  };

  html = html.replace(
    /<(img|video|audio|source)([^>]*)src=["']([^"']+)["']([^>]*)>/gi,
    (match, tag, before, src, after) => {
      // Check if it's a data URL, external URL (http/https), or local file
      if (
        src.startsWith("data:") ||
        src.startsWith("http://") ||
        src.startsWith("https://") ||
        src.startsWith("blob:")
      ) {
        // Keep external URLs and data URLs as-is
        return match;
      }

      const builtInAssetPath = resolveBuiltInAssetPath(src);
      if (builtInAssetPath) {
        return `<${tag}${before} src="${builtInAssetPath}"${after}>`;
      }

      // Try to find the media file in projectFiles
      const mediaFile = resolveMediaFile(src);
      if (mediaFile && mediaFile.content) {
        return `<${tag}${before} src="${mediaFile.content}"${after}>`;
      } else {
        // File not found in project - it might be in the same directory or external
        // Just keep the original src
        return match;
      }
    },
  );

  // === 4. Inject console override BEFORE any scripts
  const consoleScript = `
    <script>
      (function() {
        try {
          const CODEX_HTML_FILE = ${JSON.stringify(htmlFile.name)};
          const CODEX_INJECTED_OFFSET = __CODEX_INJECTED_OFFSET__;
          const parentConsole = window.parent.document.getElementById('consoleOutput');
          function isCodxPreviewHtmlHref(rawHref) {
            const href = String(rawHref || '').trim();
            if (!href || href.startsWith('#')) return false;
            if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//')) return false;
            if (/^\\/(?:404-for-preview\\.html|published\\/)/i.test(href)) return false;
            return /\\.html(?:[?#].*)?$/i.test(href);
          }

          function openCodxPreviewHref(rawHref) {
            if (
              window.parent &&
              typeof window.parent.__codxOpenPreviewFile === 'function' &&
              isCodxPreviewHtmlHref(rawHref)
            ) {
              window.parent.__codxOpenPreviewFile(String(rawHref || '').trim());
              return true;
            }
            return false;
          }

          window.__codxNavigate = function(rawHref, mode) {
            const href = String(rawHref || '').trim();
            if (openCodxPreviewHref(href)) return true;
            if (!mode) return false;
            if (mode === 'open') {
              window.open(href);
            } else if (mode === 'replace') {
              window.location.replace(href);
            } else {
              window.location.href = href;
            }
            return true;
          };

          document.addEventListener('click', function(event) {
            const target = event.target;
            const anchor = target && target.closest ? target.closest('a[href]') : null;
            const anchorHref = anchor ? anchor.getAttribute('href') : '';
            if (anchor && isCodxPreviewHtmlHref(anchorHref)) {
              event.preventDefault();
              window.__codxNavigate(anchorHref);
              return;
            }
            const button = target && target.closest
              ? target.closest('button[formaction],button[data-href],button[data-url],button[data-link]')
              : null;
            if (!button) return;
            const href =
              button.getAttribute('formaction') ||
              button.getAttribute('data-href') ||
              button.getAttribute('data-url') ||
              button.getAttribute('data-link');
            if (isCodxPreviewHtmlHref(href)) {
              event.preventDefault();
              window.__codxNavigate(href);
            }
          }, true);

          document.addEventListener('submit', function(event) {
            const form = event.target;
            if (!form || !form.getAttribute) return;
            const action = form.getAttribute('action');
            if (isCodxPreviewHtmlHref(action)) {
              event.preventDefault();
              window.__codxNavigate(action);
            }
          }, true);

          if (!parentConsole) return;

          function appendMessage(type, prefix, args) {
            try {
              const line = document.createElement('div');
              line.className = type;
              line.textContent = prefix + args.map(arg => {
                if (typeof arg === 'object' && arg !== null) {
                  try {
                    return JSON.stringify(arg, null, 2);
                  } catch (e) {
                    return String(arg);
                  }
                }
                return String(arg);
              }).join(' ');
              parentConsole.appendChild(line);
              parentConsole.scrollTop = parentConsole.scrollHeight;
            } catch (e) {
              // Silently fail if parent access is blocked
            }
          }

          function levenshtein(a, b) {
            a = String(a || '').toLowerCase();
            b = String(b || '').toLowerCase();
            const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
            for (let i = 0; i <= a.length; i++) dp[i][0] = i;
            for (let j = 0; j <= b.length; j++) dp[0][j] = j;
            for (let i = 1; i <= a.length; i++) {
              for (let j = 1; j <= b.length; j++) {
                const cost = a[i - 1] === b[j - 1] ? 0 : 1;
                dp[i][j] = Math.min(
                  dp[i - 1][j] + 1,
                  dp[i][j - 1] + 1,
                  dp[i - 1][j - 1] + cost
                );
              }
            }
            return dp[a.length][b.length];
          }

          function closestName(value, list, maxDistance) {
            const target = String(value || '').trim().toLowerCase();
            if (!target) return '';
            let best = '';
            let bestDistance = Infinity;
            list.forEach((candidate) => {
              const safe = String(candidate || '').trim();
              if (!safe) return;
              const distance = levenshtein(target, safe);
              if (distance < bestDistance) {
                bestDistance = distance;
                best = safe;
              }
            });
            return bestDistance <= maxDistance ? best : '';
          }

          function suggestFix(message) {
            const msg = String(message || '').toLowerCase();
            const known = [
              'console',
              'document',
              'window',
              'localStorage',
              'sessionStorage',
              'navigator',
              'location',
              'history',
              'fetch',
              'setTimeout',
              'setInterval',
              'clearTimeout',
              'clearInterval',
              'requestAnimationFrame',
              'querySelector',
              'querySelectorAll',
              'getElementById',
              'createElement',
              'appendChild',
              'classList',
              'JSON',
              'Math',
              'Promise'
            ];
            if (msg.includes('is not defined')) {
              const match = String(message || '').match(/^([A-Za-z_$][\\w$]*) is not defined/i);
              const unresolved = match ? match[1] : '';
              const nearest = closestName(unresolved, known, 4);
              if (nearest) return 'Did you mean "' + nearest + '"?';
              return 'Declare the variable or function before use.';
            }
            if (msg.includes('is not a function')) {
              const match = String(message || '').match(/([A-Za-z_$][\\w$]*) is not a function/i);
              const unresolved = match ? match[1] : '';
              const nearest = closestName(unresolved, known, 4);
              if (nearest) return 'Check whether you meant "' + nearest + '".';
              return 'Check the method name and the value you are calling it on.';
            }
            if (msg.includes('unexpected token')) return 'Check missing commas, quotes, or brackets.';
            if (msg.includes('unexpected end')) return 'Look for an unclosed bracket, string, or block.';
            if (msg.includes('cannot read properties of')) return 'Guard against null or undefined values.';
            if (msg.includes('missing')) return 'A closing bracket, brace, or parenthesis may be missing.';
            return 'Review code around this line.';
          }

          function parseStackLocation(error) {
            if (!error || !error.stack) return null;
            const stack = String(error.stack);
            // Prefer explicit source files (e.g. script.js:8:1)
            let m = stack.match(/\\b([A-Za-z0-9_.-]+\\.(?:js|mjs|html)):(\\d+):(\\d+)\\b/);
            if (m) {
              return { file: m[1], line: Number(m[2]), col: Number(m[3]) };
            }
            // Fallback to srcdoc/anonymous frames
            m = stack.match(/\\b(?:about:srcdoc|<anonymous>|eval):?(\\d+):(\\d+)\\b/);
            if (m) {
              return { file: null, line: Number(m[1]), col: Number(m[2]) };
            }
            return null;
          }

          function normalizeFilename(source, error) {
            const loc = parseStackLocation(error);
            if (loc && loc.file) return loc.file;
            if (source && !source.startsWith('about:srcdoc') && !source.startsWith('data:text/html')) {
              return source.split('/').pop();
            }
            return CODEX_HTML_FILE;
          }

          function normalizeLine(source, line, error) {
            const loc = parseStackLocation(error);
            if (loc && loc.file) return loc.line;
            // If error came from srcdoc/html, subtract injected lines
            if (source && (source.startsWith('about:srcdoc') || source.startsWith('data:text/html'))) {
              return Math.max(1, Number(line || 1) - Number(CODEX_INJECTED_OFFSET || 0));
            }
            if (loc && !loc.file) {
              return Math.max(1, Number(loc.line || 1) - Number(CODEX_INJECTED_OFFSET || 0));
            }
            return Number(line || 1);
          }

          function normalizeCol(source, col, error) {
            const loc = parseStackLocation(error);
            if (loc) return Number(loc.col || col || 1);
            return Number(col || 1);
          }

          // Override console methods IMMEDIATELY
          console.log = function(...args) { appendMessage('log', '> ', args); };
          console.warn = function(...args) { appendMessage('warn', 'WARNING: ', args); };
          console.error = function(...args) { appendMessage('error', 'ERROR: ', args); };
          console.info = function(...args) { appendMessage('info', 'INFO: ', args); };

          // Capture runtime errors
          window.onerror = function(msg, source, line, col, error) {
            const filename = normalizeFilename(source || '', error);
            const mappedLine = normalizeLine(source || '', line, error);
            const mappedCol = normalizeCol(source || '', col, error);
            const fix = suggestFix(msg);
            appendMessage('error', 'Error: ', ['[' + filename + '] line ' + mappedLine + ':' + mappedCol + ' - ' + msg + ' | Fix: ' + fix]);
            return false;
          };

          // Capture unhandled promise rejections
          window.addEventListener('unhandledrejection', function(e) {
            const reason = e && e.reason;
            const message =
              reason && typeof reason === 'object' && 'message' in reason
                ? reason.message
                : String(reason || 'Unknown promise rejection');
            const filename = normalizeFilename('', reason);
            const mappedLine = normalizeLine('', 1, reason);
            const mappedCol = normalizeCol('', 1, reason);
            const fix = suggestFix(message);
            appendMessage(
              'error',
              'Promise rejected: ',
              ['[' + filename + '] line ' + mappedLine + ':' + mappedCol + ' - ' + message + ' | Fix: ' + fix],
            );
          });

          // Capture resource load errors
          document.addEventListener('error', function(e) {
            const target = e.target;
            if (['IMG', 'LINK', 'SCRIPT', 'VIDEO', 'AUDIO'].includes(target.tagName)) {
              const src = target.src || target.href;
              if (src) {
                try {
                  const url = new URL(src, location.href);
                  const file = url.searchParams.get('file');
                  if (file) {
                    appendMessage('error', 'File not found: ', [decodeURIComponent(file)]);
                  }
                } catch (err) {
                  // Invalid URL
                }
              }
            }
          }, true);
        } catch (e) {
          // Cross-origin or parent access denied
        }
      })();
    </script>`;

  // === 5. Inject image sizing CSS to ensure proper display
  const imageSizingCSS = `
    <style>
      /* Prevent images from overflowing their containers */
      img {
        max-width: 100%;
        height: auto;
        display: block;
      }
      
      /* If images have explicit width/height attributes, respect them but constrain to container */
      img[width]:not([width=""]):not([width="auto"]),
      img[height]:not([height=""]):not([height="auto"]) {
        max-width: 100%;
        height: auto;
      }
      
      /* Ensure video and audio don't overflow */
      video, audio {
        max-width: 100%;
      }
    </style>
  `;

  // Insert console script and image CSS at the very beginning
  const externalHeadMarkup = Array.from(new Set(externalHeadResources)).join("");
  const countInsertedLines = (text) => (String(text || "").match(/\n/g) || []).length;
  const injectedOffset = countInsertedLines(
    externalHeadMarkup + imageSizingCSS + consoleScript,
  );
  const consoleScriptResolved = consoleScript.replace(
    "__CODEX_INJECTED_OFFSET__",
    String(injectedOffset),
  );
  const injectionResolved =
    externalHeadMarkup + imageSizingCSS + consoleScriptResolved;

  if (/<head[^>]*>/i.test(html)) {
    html = html.replace(/(<head[^>]*>)/i, `$1${injectionResolved}`);
  } else if (/<html[^>]*>/i.test(html)) {
    html = html.replace(/(<html[^>]*>)/i, `$1${injectionResolved}`);
  } else if (/<body[^>]*>/i.test(html)) {
    html = html.replace(/(<body[^>]*>)/i, `${injectionResolved}$1`);
  } else {
    // No proper HTML structure, prepend it
    html = injectionResolved + html;
  }

  iframe.removeAttribute("src");
  iframe.srcdoc = html;
  setTimeout(bindPreviewNavigationHandlers, 0);
}

// Helper: Append message to console (for editor-side warnings)
function appendConsoleMessage(type, message) {
  const line = document.createElement("div");
  line.className = type;
  if (type === "error" && String(message || "").includes("Fix:")) {
    const parts = String(message).split("Fix:");
    line.innerHTML = `${escapeHtml(parts[0].trim())} <span class="error-fix">Fix: ${escapeHtml(parts.slice(1).join("Fix:").trim())}</span>`;
  } else {
    line.textContent = message;
  }
  consoleOutput.appendChild(line);
  consoleOutput.scrollTop = consoleOutput.scrollHeight;
  if (type === "error") {
    updateFileErrorCountsFromConsole();
  }
}

function renderDiagnosticConsoleEntries(entries) {
  if (!consoleOutput) return;
  consoleOutput.querySelectorAll(".codx-diagnostic-line").forEach((node) => node.remove());
  (entries || []).forEach((entry) => {
    if (!entry) return;
    const line = document.createElement("div");
    line.className = `${entry.type || "info"} codx-diagnostic-line`;
    if (entry.type === "error" && String(entry.message || "").includes("Fix:")) {
      const parts = String(entry.message).split("Fix:");
      line.innerHTML = `${escapeHtml(parts[0].trim())} <span class="error-fix">Fix: ${escapeHtml(parts.slice(1).join("Fix:").trim())}</span>`;
    } else {
      line.textContent = entry.message || "";
    }
    consoleOutput.appendChild(line);
  });
  if (entries && entries.length) {
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
  }
}

// Line numbers
function updateLineNumbers(textarea) {
  if (!textarea) textarea = document.getElementById("activeEditor");
  if (!textarea) return;
  const lines = textarea.value.split("\n").length;
  lineNumbers.textContent = Array.from({ length: lines }, (_, i) => i + 1).join(
    "\n",
  );
  renderSyntaxHighlight(textarea);
  renderErrorHighlights(textarea);
  renderEditorWatermark(textarea);
}

function renderEditorWatermark(textarea) {
  if (!editorWatermark || !textarea || !activeFile) return;
  const shouldShow =
    activeFile.type === "html" && String(textarea.value || "").trim() === "";
  editorWatermark.style.display = shouldShow ? "block" : "none";
}

function commitEditorMutation(editor) {
  if (!editor || !activeFile) return;
  hasUnsavedChanges = true;
  activeFile.content = editor.value;
  updateProjectStatusUI();
  updateLineNumbers(editor);
  scheduleProjectAutosave();
  if (autoRunCheckbox.checked) {
    debouncedUpdatePreview();
  } else {
    refreshDiagnosticsState();
  }
  handleCodeChange({
    target: { id: activeFile.type + "Code", value: editor.value },
  });
}

function cloneEditorSnapshot(snapshot) {
  return snapshot
    ? {
        content: String(snapshot.content || ""),
        selectionStart: Number(snapshot.selectionStart || 0),
        selectionEnd: Number(snapshot.selectionEnd || 0),
      }
    : null;
}

function createEditorSnapshot(editor) {
  return {
    content: String(editor?.value || ""),
    selectionStart: Number(editor?.selectionStart || 0),
    selectionEnd: Number(editor?.selectionEnd || 0),
  };
}

function editorSnapshotsMatch(a, b) {
  return (
    !!a &&
    !!b &&
    a.content === b.content &&
    Number(a.selectionStart || 0) === Number(b.selectionStart || 0) &&
    Number(a.selectionEnd || 0) === Number(b.selectionEnd || 0)
  );
}

function getFileHistoryRecord(fileName, fallbackSnapshot = null) {
  const key = String(fileName || "").trim();
  if (!key) return null;
  if (!fileEditHistory.has(key)) {
    fileEditHistory.set(key, {
      undoStack: [],
      redoStack: [],
      current: cloneEditorSnapshot(fallbackSnapshot) || {
        content: "",
        selectionStart: 0,
        selectionEnd: 0,
      },
    });
  }
  return fileEditHistory.get(key);
}

function trimHistoryStack(stack) {
  while (stack.length > MAX_EDITOR_HISTORY_ENTRIES) {
    stack.shift();
  }
}

function updateEditorHistoryButtons() {
  const history = activeFile ? getFileHistoryRecord(activeFile.name) : null;
  if (undoEditorBtn) undoEditorBtn.disabled = !history || history.undoStack.length === 0;
  if (redoEditorBtn) redoEditorBtn.disabled = !history || history.redoStack.length === 0;
}

function syncEditorHistoryState(editor, options = {}) {
  if (!editor || !activeFile) {
    updateEditorHistoryButtons();
    return;
  }
  const { clearStacks = false } = options;
  const snapshot = createEditorSnapshot(editor);
  const history = getFileHistoryRecord(activeFile.name, snapshot);
  history.current = cloneEditorSnapshot(snapshot);
  if (clearStacks) {
    history.undoStack = [];
    history.redoStack = [];
  }
  updateEditorHistoryButtons();
}

function resetAllEditorHistory(editor = document.getElementById("activeEditor")) {
  fileEditHistory.clear();
  pendingHistorySnapshot = null;
  syncEditorHistoryState(editor, { clearStacks: true });
}

function beginEditorHistoryCapture(editor) {
  if (isRestoringEditorHistory || !editor || !activeFile) return;
  pendingHistorySnapshot = createEditorSnapshot(editor);
}

function finalizeEditorHistoryCapture(editor) {
  if (isRestoringEditorHistory || !editor || !activeFile) {
    pendingHistorySnapshot = null;
    updateEditorHistoryButtons();
    return;
  }
  const after = createEditorSnapshot(editor);
  const history = getFileHistoryRecord(activeFile.name, after);
  const before =
    cloneEditorSnapshot(pendingHistorySnapshot) || cloneEditorSnapshot(history.current);
  pendingHistorySnapshot = null;
  if (!before || editorSnapshotsMatch(before, after)) {
    history.current = cloneEditorSnapshot(after);
    updateEditorHistoryButtons();
    return;
  }
  const baseline = editorSnapshotsMatch(history.current, before) ? history.current : before;
  if (
    !history.undoStack.length ||
    !editorSnapshotsMatch(history.undoStack[history.undoStack.length - 1], baseline)
  ) {
    history.undoStack.push(cloneEditorSnapshot(baseline));
    trimHistoryStack(history.undoStack);
  }
  history.redoStack = [];
  history.current = cloneEditorSnapshot(after);
  updateEditorHistoryButtons();
}

function restoreEditorHistorySnapshot(editor, snapshot) {
  if (!editor || !snapshot || !activeFile) return;
  isRestoringEditorHistory = true;
  try {
    editor.value = String(snapshot.content || "");
    editor.selectionStart = Math.min(Number(snapshot.selectionStart || 0), editor.value.length);
    editor.selectionEnd = Math.min(
      Number(snapshot.selectionEnd ?? editor.selectionStart),
      editor.value.length,
    );
    hideSuggestions();
    clearInlineHtmlCorrectionDisplay(editor);
    commitEditorMutation(editor);
    syncInlineHtmlCorrectionDisplay(editor);
  } finally {
    isRestoringEditorHistory = false;
  }
}

function undoEditorHistory(editor = document.getElementById("activeEditor")) {
  if (!editor || !activeFile) return false;
  pendingHistorySnapshot = null;
  const currentSnapshot = createEditorSnapshot(editor);
  const history = getFileHistoryRecord(activeFile.name, currentSnapshot);
  history.current = cloneEditorSnapshot(currentSnapshot);
  const previous = history.undoStack.pop();
  if (!previous) {
    updateEditorHistoryButtons();
    return false;
  }
  history.redoStack.push(cloneEditorSnapshot(currentSnapshot));
  trimHistoryStack(history.redoStack);
  history.current = cloneEditorSnapshot(previous);
  restoreEditorHistorySnapshot(editor, previous);
  updateEditorHistoryButtons();
  return true;
}

function redoEditorHistory(editor = document.getElementById("activeEditor")) {
  if (!editor || !activeFile) return false;
  pendingHistorySnapshot = null;
  const currentSnapshot = createEditorSnapshot(editor);
  const history = getFileHistoryRecord(activeFile.name, currentSnapshot);
  history.current = cloneEditorSnapshot(currentSnapshot);
  const next = history.redoStack.pop();
  if (!next) {
    updateEditorHistoryButtons();
    return false;
  }
  history.undoStack.push(cloneEditorSnapshot(currentSnapshot));
  trimHistoryStack(history.undoStack);
  history.current = cloneEditorSnapshot(next);
  restoreEditorHistorySnapshot(editor, next);
  updateEditorHistoryButtons();
  return true;
}

function applyEditorMutation(editor, start, end, replacement, selectionStart, selectionEnd) {
  if (!editor) return;
  beginEditorHistoryCapture(editor);
  const rangeStart = typeof start === "number" ? start : editor.selectionStart;
  const rangeEnd = typeof end === "number" ? end : editor.selectionEnd;
  if (typeof editor.setRangeText === "function") {
    editor.setRangeText(replacement, rangeStart, rangeEnd, "preserve");
  } else {
    editor.value =
      editor.value.substring(0, rangeStart) +
      replacement +
      editor.value.substring(rangeEnd);
  }
  editor.selectionStart =
    typeof selectionStart === "number"
      ? selectionStart
      : rangeStart + replacement.length;
  editor.selectionEnd =
    typeof selectionEnd === "number" ? selectionEnd : editor.selectionStart;
  commitEditorMutation(editor);
  finalizeEditorHistoryCapture(editor);
}

// Sync scroll
function syncScroll(textarea) {
  if (!textarea) return;
  if (textarea.dataset.scrollSyncBound === "true") return;
  textarea.addEventListener("scroll", () => {
    lineNumbers.scrollTop = textarea.scrollTop;
    if (highlightLayer) {
      highlightLayer.scrollTop = textarea.scrollTop;
      highlightLayer.scrollLeft = textarea.scrollLeft;
    }
    renderErrorHighlights(textarea);
    renderRemoteCursors();
    if (suggestionPopup.style.display === "block") {
      positionSuggestionPopup(textarea);
    }
  });
  textarea.dataset.scrollSyncBound = "true";
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeHtmlAttributeValue(text) {
  return escapeHtml(String(text || ""))
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function wrapTokens(text, patterns) {
  const ranges = [];
  patterns.forEach((rule) => {
    const regex = new RegExp(rule.regex.source, rule.regex.flags);
    let match;
    while ((match = regex.exec(text)) !== null) {
      const start = match.index;
      const value = match[0];
      const end = start + value.length;
      if (end <= start) continue;
      if (ranges.some((r) => !(end <= r.start || start >= r.end))) continue;
      ranges.push({ start, end, className: rule.className });
      if (!regex.global) break;
    }
  });

  ranges.sort((a, b) => a.start - b.start);
  let result = "";
  let index = 0;
  ranges.forEach((r) => {
    if (index < r.start) result += escapeHtml(text.slice(index, r.start));
    result += `<span class="token ${r.className}">${escapeHtml(
      text.slice(r.start, r.end),
    )}</span>`;
    index = r.end;
  });
  if (index < text.length) result += escapeHtml(text.slice(index));
  return result || " ";
}

function highlightHtmlSegment(code) {
  let result = "";
  let index = 0;
  const token = (value, className) => `<span class="token ${className}">${escapeHtml(value)}</span>`;
  const tagRegex = /<!--[\s\S]*?-->|<!DOCTYPE[\s\S]*?>|<\/?[A-Za-z][^>]*>/gi;
  let match;

  const highlightText = (text) => {
    if (!text) return "";
    return text.split(/(&[A-Za-z0-9#]+;)/g).map((part) => {
      if (/^&[A-Za-z0-9#]+;$/.test(part)) return token(part, "entity");
      return /\S/.test(part) ? token(part, "html-text") : escapeHtml(part);
    }).join("");
  };

  const highlightTag = (tagSource) => {
    if (tagSource.startsWith("<!--")) return token(tagSource, "comment");
    if (/^<!doctype/i.test(tagSource)) return token(tagSource, "keyword");
    let output = "";
    let cursor = 0;
    const opening = tagSource.match(/^<\/?/)[0];
    output += token(opening, "tag-punctuation");
    cursor = opening.length;
    const tagName = tagSource.slice(cursor).match(/^[A-Za-z][A-Za-z0-9:-]*/)?.[0] || "";
    output += token(tagName, "tag");
    cursor += tagName.length;

    while (cursor < tagSource.length) {
      if (tagSource.startsWith("/>", cursor)) {
        output += token("/>", "tag-punctuation");
        cursor += 2;
        continue;
      }
      if (tagSource[cursor] === ">") {
        output += token(">", "tag-punctuation");
        cursor += 1;
        continue;
      }
      if (/\s/.test(tagSource[cursor])) {
        const whitespace = tagSource.slice(cursor).match(/^\s+/)[0];
        output += escapeHtml(whitespace);
        cursor += whitespace.length;
        continue;
      }
      const attrName = tagSource.slice(cursor).match(/^[A-Za-z_:][A-Za-z0-9:_.-]*/)?.[0];
      if (attrName) {
        output += token(attrName, "attr");
        cursor += attrName.length;
        continue;
      }
      if (tagSource[cursor] === "=") {
        output += token("=", "operator");
        cursor += 1;
        continue;
      }
      if (tagSource[cursor] === '"' || tagSource[cursor] === "'") {
        const quote = tagSource[cursor];
        const start = cursor++;
        while (cursor < tagSource.length) {
          if (tagSource[cursor] === "\\") cursor += 2;
          else if (tagSource[cursor++] === quote) break;
          else cursor += 0;
        }
        output += token(tagSource.slice(start, cursor), "string");
        continue;
      }
      const unquoted = tagSource.slice(cursor).match(/^[^\s>]+/)?.[0] || tagSource[cursor];
      output += token(unquoted, "string");
      cursor += unquoted.length;
    }
    return output;
  };

  while ((match = tagRegex.exec(code)) !== null) {
    result += highlightText(code.slice(index, match.index));
    result += highlightTag(match[0]);
    index = match.index + match[0].length;
  }
  result += highlightText(code.slice(index));
  return result || " ";
}

function highlightHtml(code) {
  const blockRegex =
    /(<style\b[^>]*>)([\s\S]*?)(<\/style>)|(<script\b(?![^>]*\bsrc=)[^>]*>)([\s\S]*?)(<\/script>)/gi;
  let result = "";
  let lastIndex = 0;
  let match;

  while ((match = blockRegex.exec(code)) !== null) {
    result += highlightHtmlSegment(code.slice(lastIndex, match.index));

    if (match[1]) {
      result += highlightHtmlSegment(match[1]);
      result += highlightCss(match[2] || "", match.index + match[1].length);
      result += highlightHtmlSegment(match[3]);
    } else {
      result += highlightHtmlSegment(match[4]);
      result += highlightJs(match[5] || "");
      result += highlightHtmlSegment(match[6]);
    }

    lastIndex = match.index + match[0].length;
  }

  result += highlightHtmlSegment(code.slice(lastIndex));
  return result;
}

const cssNamedColorValues = new Set(
  "aliceblue antiquewhite aqua aquamarine azure beige bisque black blanchedalmond blue blueviolet brown burlywood cadetblue chartreuse chocolate coral cornflowerblue cornsilk crimson cyan darkblue darkcyan darkgoldenrod darkgray darkgreen darkgrey darkkhaki darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen darkslateblue darkslategray darkslategrey darkturquoise darkviolet deeppink deepskyblue dimgray dimgrey dodgerblue firebrick floralwhite forestgreen fuchsia gainsboro ghostwhite gold goldenrod gray green greenyellow grey honeydew hotpink indianred indigo ivory khaki lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan lightgoldenrodyellow lightgray lightgreen lightgrey lightpink lightsalmon lightseagreen lightskyblue lightslategray lightslategrey lightsteelblue lightyellow lime limegreen linen magenta maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen mediumslateblue mediumspringgreen mediumturquoise mediumvioletred midnightblue mintcream mistyrose moccasin navajowhite navy oldlace olive olivedrab orange orangered orchid palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff peru pink plum powderblue purple rebeccapurple red rosybrown royalblue saddlebrown salmon sandybrown seagreen seashell sienna silver skyblue slateblue slategray slategrey snow springgreen steelblue tan teal thistle tomato transparent turquoise violet wheat white whitesmoke yellow yellowgreen currentcolor".split(
    " ",
  ),
);

function getCssLiteralColorSwatch(value) {
  const raw = String(value || "").trim();
  const lower = raw.toLowerCase();
  if (!raw) return "";
  if (/^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(raw)) return raw;
  if (lower === "transparent") {
    return "linear-gradient(45deg, #d1d5db 25%, transparent 25%, transparent 50%, #d1d5db 50%, #d1d5db 75%, transparent 75%, transparent), #ffffff";
  }
  if (cssNamedColorValues.has(lower) && lower !== "currentcolor") return lower;
  if (/^(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color)\(/i.test(raw)) return raw;
  return "";
}

function highlightCss(code, sourceOffset = 0) {
  let result = "";
  let index = 0;
  let blockDepth = 0;
  let expectingProperty = false;
  let afterPropertyColon = false;

  const append = (text, className = "", options = {}) => {
    if (!text) return;
    if (!className) {
      result += escapeHtml(text);
      return;
    }
    const swatch = options.swatch || "";
    const swatchClass = swatch ? " css-color-value" : "";
    const swatchStyle = swatch
      ? ` style="--css-color-swatch:${escapeHtmlAttributeValue(swatch)}"`
      : "";
    const swatchData = swatch && Number.isFinite(options.start) && Number.isFinite(options.end)
      ? ` data-css-color-start="${sourceOffset + options.start}" data-css-color-end="${sourceOffset + options.end}"`
      : "";
    result += `<span class="token ${className}${swatchClass}"${swatchStyle}${swatchData}>${escapeHtml(text)}</span>`;
  };
  const isIdentifierStart = (char) => /[a-zA-Z_-]/.test(char || "");
  const isIdentifierPart = (char) => /[a-zA-Z0-9_-]/.test(char || "");
  const consumeWhile = (test) => {
    const start = index;
    while (index < code.length && test(code[index])) index += 1;
    return code.slice(start, index);
  };
  const consumeIdentifier = () => consumeWhile(isIdentifierPart);
  const consumeString = (quote) => {
    const start = index;
    index += 1;
    while (index < code.length) {
      if (code[index] === "\\") {
        index += 2;
        continue;
      }
      if (code[index] === quote) {
        index += 1;
        break;
      }
      index += 1;
    }
    return code.slice(start, index);
  };
  const consumeBalancedFunction = () => {
    const start = index;
    let depth = 0;
    while (index < code.length) {
      const char = code[index];
      if (char === "\"" || char === "'") {
        consumeString(char);
        continue;
      }
      if (char === "(") depth += 1;
      if (char === ")") {
        depth -= 1;
        index += 1;
        if (depth <= 0) break;
        continue;
      }
      index += 1;
    }
    return code.slice(start, index);
  };

  while (index < code.length) {
    const char = code[index];
    const next = code[index + 1];

    if (char === "/" && next === "*") {
      const end = code.indexOf("*/", index + 2);
      const commentEnd = end === -1 ? code.length : end + 2;
      append(code.slice(index, commentEnd), "comment");
      index = commentEnd;
      continue;
    }

    if (char === "\"" || char === "'") {
      append(consumeString(char), "string");
      continue;
    }

    if (/\s/.test(char)) {
      append(consumeWhile((value) => /\s/.test(value)));
      continue;
    }

    if (char === "{") {
      append(char, "punctuation");
      index += 1;
      blockDepth += 1;
      expectingProperty = true;
      afterPropertyColon = false;
      continue;
    }

    if (char === "}") {
      append(char, "punctuation");
      index += 1;
      blockDepth = Math.max(0, blockDepth - 1);
      expectingProperty = blockDepth > 0;
      afterPropertyColon = false;
      continue;
    }

    if (char === ";" && blockDepth > 0) {
      append(char, "punctuation");
      index += 1;
      expectingProperty = true;
      afterPropertyColon = false;
      continue;
    }

    if (char === ":" && blockDepth > 0 && expectingProperty) {
      append(char, "punctuation");
      index += 1;
      expectingProperty = false;
      afterPropertyColon = true;
      continue;
    }

    if (char === "@" && /[a-zA-Z-]/.test(next || "")) {
      index += 1;
      append("@" + consumeIdentifier(), "keyword");
      continue;
    }

    if (char === "!" && code.slice(index, index + 10).toLowerCase() === "!important") {
      append(code.slice(index, index + 10), "important");
      index += 10;
      continue;
    }

    if (char === ":" && /:?[a-zA-Z-]/.test(next || "")) {
      const start = index;
      index += next === ":" ? 2 : 1;
      consumeIdentifier();
      append(code.slice(start, index), "pseudo");
      continue;
    }

    if (char === "#" && blockDepth === 0 && /[a-zA-Z0-9_-]/.test(next || "")) {
      index += 1;
      append("#" + consumeIdentifier(), "selector");
      continue;
    }

    if (char === "#" && blockDepth > 0 && /[0-9a-fA-F]/.test(next || "")) {
      const start = index;
      index += 1;
      consumeWhile((value) => /[0-9a-fA-F]/.test(value));
      const hexValue = code.slice(start, index);
      append(hexValue, "hex", {
        swatch: afterPropertyColon ? getCssLiteralColorSwatch(hexValue) : "",
        start,
        end: index,
      });
      continue;
    }

    if (char === "." && blockDepth === 0 && /[a-zA-Z_-]/.test(next || "")) {
      index += 1;
      append("." + consumeIdentifier(), "selector");
      continue;
    }

    if (char === "-" && next === "-" && /[a-zA-Z0-9_-]/.test(code[index + 2] || "")) {
      const start = index;
      index += 2;
      consumeIdentifier();
      append(code.slice(start, index), expectingProperty ? "property" : "variable");
      continue;
    }

    if (/\d/.test(char)) {
      const start = index;
      consumeWhile((value) => /[0-9.]/.test(value));
      consumeWhile((value) => /[a-zA-Z%]/.test(value));
      append(code.slice(start, index), "number");
      continue;
    }

    if (isIdentifierStart(char)) {
      const start = index;
      const word = consumeIdentifier();
      const upcoming = code.slice(index).match(/^\s*\(/);
      if (blockDepth === 0) {
        append(word, "selector");
      } else if (expectingProperty && code.slice(index).match(/^\s*:/)) {
        append(word, "property");
      } else if (upcoming) {
        if (afterPropertyColon && getCssLiteralColorSwatch(word + "(")) {
          consumeWhile((value) => /\s/.test(value));
          const functionText = word + consumeBalancedFunction();
          append(functionText, "value", {
            swatch: getCssLiteralColorSwatch(functionText),
            start,
            end: index,
          });
        } else {
          append(word, "function");
        }
      } else if (afterPropertyColon) {
        append(word, "value", {
          swatch: getCssLiteralColorSwatch(word),
          start,
          end: index,
        });
      } else {
        append(code.slice(start, index), "identifier");
      }
      continue;
    }

    if ("+-/*%=!&|".includes(char)) {
      append(char, "operator");
      index += 1;
      continue;
    }

    if ("[](),>+~=|^$*.".includes(char)) {
      append(char, "punctuation");
      index += 1;
      continue;
    }

    append(char);
    index += 1;
  }

  return result || " ";
}

function highlightJs(code) {
  let result = "";
  let index = 0;
  let previousSignificant = "";

  const keywords = new Set(
    "as async await break case catch class const continue debugger default delete do else enum export extends finally for from function get if implements import in instanceof interface let namespace new of package private protected public readonly return set static super switch this throw try type typeof var void while with yield satisfies declare abstract override keyof infer unknown never any".split(" "),
  );
  const literals = new Set("true false null undefined NaN Infinity".split(" "));
  const builtins = new Set(
    "Array ArrayBuffer Atomics BigInt BigInt64Array BigUint64Array Boolean DataView Date Error EvalError FinalizationRegistry Float32Array Float64Array Function Int8Array Int16Array Int32Array Intl JSON Map Math Number Object Promise Proxy RangeError ReferenceError Reflect RegExp Set SharedArrayBuffer String Symbol SyntaxError TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array URIError WeakMap WeakRef WeakSet WebAssembly console document window globalThis fetch localStorage sessionStorage navigator location history URL URLSearchParams URLPattern Headers Request Response FormData Blob File ReadableStream WritableStream TransformStream TextEncoder TextDecoder AbortController AbortSignal EventTarget Event setTimeout clearTimeout setInterval clearInterval setImmediate clearImmediate queueMicrotask structuredClone requestAnimationFrame cancelAnimationFrame parseInt parseFloat isNaN isFinite encodeURI decodeURI encodeURIComponent decodeURIComponent process Buffer require module exports __dirname __filename global performance crypto".split(" "),
  );

  const append = (text, className = "") => {
    if (!text) return;
    result += className
      ? `<span class="token ${className}">${escapeHtml(text)}</span>`
      : escapeHtml(text);
    if (className && !["comment", "string"].includes(className)) {
      previousSignificant = text;
    } else if (!className && String(text).trim()) {
      previousSignificant = String(text).trim().slice(-1);
    }
  };
  const peek = (offset = 0) => code[index + offset] || "";
  const isIdStart = (char) => /[A-Za-z_$]/.test(char || "");
  const isIdPart = (char) => /[A-Za-z0-9_$]/.test(char || "");
  const consumeWhile = (test) => {
    const start = index;
    while (index < code.length && test(code[index])) index += 1;
    return code.slice(start, index);
  };
  const consumeString = (quote) => {
    const start = index;
    index += 1;
    while (index < code.length) {
      if (code[index] === "\\") {
        index += 2;
        continue;
      }
      if (code[index] === quote) {
        index += 1;
        break;
      }
      index += 1;
    }
    return code.slice(start, index);
  };
  const canStartRegex = () =>
    !previousSignificant ||
    /[({[=,:;!&|?+\-*~^<>]/.test(previousSignificant) ||
    ["return", "throw", "case", "delete", "typeof", "void", "new", "in", "of", "yield", "await"].includes(previousSignificant);
  const consumeRegex = () => {
    const start = index;
    index += 1;
    let inClass = false;
    while (index < code.length) {
      const char = code[index];
      if (char === "\\") {
        index += 2;
        continue;
      }
      if (char === "[") inClass = true;
      if (char === "]") inClass = false;
      if (char === "/" && !inClass) {
        index += 1;
        consumeWhile((value) => /[a-z]/i.test(value));
        break;
      }
      if (char === "\n") break;
      index += 1;
    }
    return code.slice(start, index);
  };

  while (index < code.length) {
    const char = peek();
    const next = peek(1);

    if (/\s/.test(char)) {
      append(consumeWhile((value) => /\s/.test(value)));
      continue;
    }

    if (char === "/" && next === "/") {
      const start = index;
      index = code.indexOf("\n", index + 2);
      if (index === -1) index = code.length;
      append(code.slice(start, index), "comment");
      continue;
    }

    if (char === "/" && next === "*") {
      const end = code.indexOf("*/", index + 2);
      const commentEnd = end === -1 ? code.length : end + 2;
      append(code.slice(index, commentEnd), "comment");
      index = commentEnd;
      continue;
    }

    if (char === "\"" || char === "'" || char === "`") {
      append(consumeString(char), "string");
      continue;
    }

    if (char === "/" && canStartRegex() && next !== "/" && next !== "*") {
      append(consumeRegex(), "regex");
      continue;
    }

    if (/\d/.test(char) || (char === "." && /\d/.test(next))) {
      const start = index;
      if (char === "0" && /[xob]/i.test(next)) {
        index += 2;
        consumeWhile((value) => /[0-9a-fA-F_]/.test(value));
      } else {
        consumeWhile((value) => /[0-9_]/.test(value));
        if (peek() === ".") {
          index += 1;
          consumeWhile((value) => /[0-9_]/.test(value));
        }
        if (/[eE]/.test(peek())) {
          index += 1;
          if (/[+-]/.test(peek())) index += 1;
          consumeWhile((value) => /[0-9_]/.test(value));
        }
        if (peek() === "n") index += 1;
      }
      append(code.slice(start, index), "number");
      continue;
    }

    if (isIdStart(char)) {
      const word = consumeWhile(isIdPart);
      const beforeWord = code.slice(0, index - word.length).match(/[^\s]$/)?.[0] || "";
      const afterWord = code.slice(index);
      if (keywords.has(word)) append(word, "keyword");
      else if (literals.has(word)) append(word, "constant");
      else if (builtins.has(word)) append(word, "builtin");
      else if (beforeWord === "." && /^\s*\(/.test(afterWord)) append(word, "method");
      else if (beforeWord === ".") append(word, "property-access");
      else if (["class", "extends", "implements", "new"].includes(previousSignificant)) append(word, "class-name");
      else if (["const", "let", "var", "import", "catch"].includes(previousSignificant)) append(word, "declaration");
      else if (/^\s*:/.test(afterWord)) append(word, "property");
      else if (/^\s*\(/.test(afterWord)) append(word, "function");
      else if (/^[A-Z][A-Za-z0-9_$]*$/.test(word)) append(word, "class-name");
      else append(word, "identifier");
      previousSignificant = word;
      continue;
    }

    if ("+-*/%=!<>&|^~?:".includes(char)) {
      const op = consumeWhile((value) => "+-*/%=!<>&|^~?:".includes(value));
      append(op, "operator");
      continue;
    }

    if ("()[]{};,.#".includes(char)) {
      append(char, "punctuation");
      index += 1;
      continue;
    }

    append(char);
    index += 1;
  }

  return result || " ";
}

function highlightJson(code) {
  return wrapTokens(code, [
    { className: "json-key", regex: /"(?:\\.|[^"\\])*"(?=\s*:)/g },
    { className: "string", regex: /"(?:\\.|[^"\\])*"/g },
    { className: "number", regex: /-?\b(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?\b/g },
    { className: "constant", regex: /\b(?:true|false|null)\b/g },
    { className: "operator", regex: /:/g },
    { className: "punctuation", regex: /[{}[\],]/g },
  ]);
}

function highlightEnv(code) {
  return String(code || "").split("\n").map((line) => {
    if (/^\s*#/.test(line)) return `<span class="token comment">${escapeHtml(line)}</span>`;
    const match = line.match(/^(\s*)(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)(\s*=\s*)(.*)$/);
    if (!match) return /\S/.test(line) ? `<span class="token identifier">${escapeHtml(line)}</span>` : escapeHtml(line);
    const exportKeyword = /^\s*export\s+/.test(line) ? '<span class="token keyword">export</span> ' : "";
    const value = match[4];
    const valueClass = /^(?:true|false|null)$/i.test(value.trim()) ? "constant" : /^-?\d+(?:\.\d+)?$/.test(value.trim()) ? "number" : "string";
    return `${escapeHtml(match[1])}${exportKeyword}<span class="token env-key">${escapeHtml(match[2])}</span><span class="token operator">${escapeHtml(match[3])}</span><span class="token ${valueClass}">${escapeHtml(value)}</span>`;
  }).join("\n") || " ";
}

function highlightPlainText(code) {
  return escapeHtml(code) || " ";
}

function renderSyntaxHighlight(textarea) {
  if (!highlightLayer || !textarea || !activeFile) return;
  const code = textarea.value || "";
  let highlighted = "";

  const extensionType = getFileType(activeFile.name || "");
  const fileType = String(extensionType || activeFile.type || "").toLowerCase();
  if (["html", "htm", "svg", "xml"].includes(fileType)) highlighted = highlightHtml(code);
  else if (["css", "scss", "sass", "less"].includes(fileType)) highlighted = highlightCss(code);
  else if (["js", "mjs", "cjs", "jsx", "ts", "tsx"].includes(fileType)) highlighted = highlightJs(code);
  else if (["json", "jsonc"].includes(fileType)) highlighted = highlightJson(code);
  else if (fileType === "env" || /^\.env(?:\.|$)/i.test(activeFile.name || "")) highlighted = highlightEnv(code);
  else highlighted = highlightPlainText(code);

  if (code.endsWith("\n")) highlighted += " ";
  highlightLayer.innerHTML = highlighted;
}

function syncSyntaxLayerStyle(textarea) {
  if (!highlightLayer || !textarea) return;
  const computed = window.getComputedStyle(textarea);
  highlightLayer.style.fontFamily = computed.fontFamily;
  highlightLayer.style.fontSize = computed.fontSize;
  highlightLayer.style.lineHeight = computed.lineHeight;
  highlightLayer.style.letterSpacing = computed.letterSpacing;
  highlightLayer.style.tabSize = computed.tabSize;
  highlightLayer.style.whiteSpace = computed.whiteSpace;
  highlightLayer.style.padding = computed.padding;
}

// PART 6 - EDITOR INITIALIZATION
function initializeEditor() {
  const editor = document.getElementById("activeEditor");
  editor.value = activeFile.content;
  updateLineNumbers(editor);
  syncScroll(editor);
  syncSyntaxLayerStyle(editor);
  renderSyntaxHighlight(editor);
  syncInlineHtmlCorrectionDisplay(editor);
  syncEditorHistoryState(editor, { clearStacks: true });

  editor.addEventListener("beforeinput", (e) => {
    lastEditorInputType = String(e.inputType || "");
    if (lastEditorInputType === "historyUndo" || lastEditorInputType === "historyRedo") {
      if (e.cancelable) {
        e.preventDefault();
        if (lastEditorInputType === "historyRedo") {
          redoEditorHistory(editor);
        } else {
          undoEditorHistory(editor);
        }
        lastEditorInputType = "";
      }
      return;
    }
    beginEditorHistoryCapture(editor);
  });

  // MODIFIED: Combined input listener
  editor.addEventListener("input", (e) => {
    if (!canCurrentUserEditFile(activeFile ? activeFile.name : "")) {
      showNotification("You can only edit files selected by the host.", "error");
      editor.value = activeFile.content;
      return;
    }
    const isHistoryRestore =
      lastEditorInputType === "historyUndo" || lastEditorInputType === "historyRedo";
    hasUnsavedChanges = true;
    activeFile.content = editor.value;
    __codxRescanProjectSuggestionCacheSoon();
    updateProjectStatusUI();
    updateLineNumbers(editor);
    if (autoRunCheckbox.checked) debouncedUpdatePreview();
    handleCodeChange({
      target: { id: activeFile.type + "Code", value: editor.value },
    });
    if (isHistoryRestore) {
      hideSuggestions();
    } else {
      announceTyping(activeFile.type + "Code");

      // ADDED: Handle suggestions
      handleSuggestions(e);
    }
    syncInlineHtmlCorrectionDisplay(editor);
    if (isHistoryRestore) {
      pendingHistorySnapshot = null;
      lastEditorInputType = "";
      syncEditorHistoryState(editor);
      return;
    }
    lastEditorInputType = "";
    finalizeEditorHistoryCapture(editor);
  });

  // MODIFIED: Replaced Tab logic with comprehensive keydown handler
  editor.addEventListener("keydown", handleEditorKeyDown);
  editor.addEventListener("pointerdown", handleInlineCssColorSwatchPointerDown);
  editor.addEventListener("click", () => {
    if (
      activeInlineHtmlCorrection &&
      getLineNumberFromIndex(editor.value, editor.selectionStart) === activeInlineHtmlCorrection.previewLine
    ) {
      acceptInlineHtmlCorrection(editor);
      return;
    }
    syncInlineHtmlCorrectionDisplay(editor);
    if (suggestionPopup.style.display === "block") {
      positionSuggestionPopup(editor);
    }
  });
  editor.addEventListener("keyup", () => {
    syncInlineHtmlCorrectionDisplay(editor);
  });
  editor.addEventListener("blur", () => {
    setTimeout(() => {
      const active = document.activeElement;
      if (
        !active ||
        (!suggestionPopup.contains(active) && !activeCssColorPicker?.contains(active))
      ) {
        hideSuggestions();
      }
    }, 0);
  });

  if (undoEditorBtn) {
    undoEditorBtn.addEventListener("click", () => {
      undoEditorHistory(editor);
      editor.focus();
    });
  }
  if (redoEditorBtn) {
    redoEditorBtn.addEventListener("click", () => {
      redoEditorHistory(editor);
      editor.focus();
    });
  }
}

// PART 6.5 - TAG SUGGESTIONS

/**
 * Handles the editor's 'input' event to show/hide suggestions.
 */
function handleSuggestions(e) {
  const editor = e.target;
  const pos = editor.selectionStart;
  const textBefore = editor.value.substring(0, pos);

  const isCssFile = activeFile.type === "css";
  const isHtmlStyleContext =
    activeFile.type === "html" && isInsideStyleTag(textBefore);
  const isJsFile = activeFile.type === "js";
  const isHtmlScriptContext =
    activeFile.type === "html" && isInsideScriptTag(textBefore);
  const isEnvFile = activeFile.type === "env";

  const currentLineText = textBefore.slice(textBefore.lastIndexOf("\n") + 1);
  const lastLt = textBefore.lastIndexOf("<");
  const lastGt = textBefore.lastIndexOf(">");
  const outsideTag = lastGt >= lastLt;
  const emmetOpeningMatch = textBefore.match(/<([a-zA-Z][a-zA-Z0-9:-]*:)$/);
  const emmetPlainMatch = currentLineText.match(/([a-zA-Z][a-zA-Z0-9:-]*:)$/);

  if (isEnvFile) {
    const envContext = getEnvSuggestionContext(textBefore);
    if (!envContext || !envContext.prefix) {
      hideSuggestions();
      return;
    }
    const envSuggestions = getRankedEnvSuggestions(envContext.prefix);
    if (!envSuggestions.length) {
      hideSuggestions();
      return;
    }
    currentSuggestionContext = envContext;
    showJsSuggestions(editor, envSuggestions, "env");
    return;
  }

  const codeFileContext = getCodeFileSuggestionContext(
    textBefore,
    isCssFile || isHtmlStyleContext ? "css" : isJsFile || isHtmlScriptContext ? "js" : "",
  );
  if (codeFileContext) {
    const files = getRankedFileSuggestions(
      codeFileContext.valuePrefix,
      codeFileContext.attr,
      codeFileContext.tag,
    );
    if (files.length) {
      currentSuggestionContext = codeFileContext;
      showFileSuggestions(editor, files, codeFileContext.valuePrefix, codeFileContext);
      return;
    }
  }
  if (
    activeFile.type === "html" &&
    !isHtmlStyleContext &&
    !isHtmlScriptContext &&
    (emmetOpeningMatch || (outsideTag && emmetPlainMatch))
  ) {
    const prefix = emmetOpeningMatch ? emmetOpeningMatch[1] : emmetPlainMatch[1];
    const suggestions = getRankedTagSuggestions(prefix, { includeSnippets: true }).filter(
      (entry) => entry.insertText,
    );
    if (suggestions.length) {
      currentSuggestionContext = null;
      showSuggestions(editor, suggestions, prefix, emmetOpeningMatch ? "tag-opening" : "tag-plain");
      return;
    }
  }

  if (isCssFile || isHtmlStyleContext) {
    const cssContext = getCssSuggestionContext(textBefore);
    if (!cssContext) {
      hideSuggestions();
      return;
    }
    if (
      !String(cssContext.prefix || "").trim() &&
      !(cssContext.mode === "css-value" && isCssColorProperty(cssContext.propertyName))
    ) {
      hideSuggestions();
      return;
    }
    const cssSuggestions = getRankedCssSuggestions(
      cssContext.prefix,
      cssContext.mode,
      cssContext.propertyName,
    );
    if (
      cssContext.prefix &&
      cssSuggestions.some(
        (entry) =>
          entry.value.toLowerCase() === cssContext.prefix.toLowerCase(),
      )
    ) {
      hideSuggestions();
      return;
    }
    if (!cssSuggestions.length) {
      hideSuggestions();
      return;
    }
    currentSuggestionContext = cssContext;
    showCssSuggestions(editor, cssSuggestions, cssContext.mode);
    return;
  }

  if (isJsFile || isHtmlScriptContext) {
    const jsContext = getJsSuggestionContext(textBefore);
    if (!jsContext) {
      hideSuggestions();
      return;
    }
    const jsMatches = getRankedJsSuggestions(jsContext.prefix);
    if (!jsMatches.length) {
      hideSuggestions();
      return;
    }
    if (
      jsContext.prefix &&
      jsMatches.some(
        (entry) => entry.value.toLowerCase() === jsContext.prefix.toLowerCase(),
      )
    ) {
      hideSuggestions();
      return;
    }
    currentSuggestionContext = jsContext;
    showJsSuggestions(editor, jsMatches);
    return;
  }

  if (activeFile.type !== "html") {
    hideSuggestions();
    return;
  }

  const inlineStyleContext = getHtmlInlineStyleSuggestionContext(textBefore);
  if (inlineStyleContext) {
    if (
      !String(inlineStyleContext.prefix || "").trim() &&
      !(inlineStyleContext.mode === "css-inline-value" && isCssColorProperty(inlineStyleContext.propertyName))
    ) {
      hideSuggestions();
      return;
    }
    const cssSuggestions = getRankedCssSuggestions(
      inlineStyleContext.prefix,
      inlineStyleContext.mode,
      inlineStyleContext.propertyName,
    );
    if (!cssSuggestions.length) {
      hideSuggestions();
      return;
    }
    if (
      inlineStyleContext.prefix &&
      cssSuggestions.some(
        (entry) =>
          entry.value.toLowerCase() === inlineStyleContext.prefix.toLowerCase(),
      )
    ) {
      hideSuggestions();
      return;
    }
    currentSuggestionContext = inlineStyleContext;
    showCssSuggestions(editor, cssSuggestions, inlineStyleContext.mode);
    return;
  }

  const fileContext = getFileSuggestionContext(textBefore);

  const htmlValueContext = getHtmlAttributeValueSuggestionContext(textBefore);
  if (htmlValueContext) {
    const valueSuggestions = getRankedHtmlAttributeValueSuggestions(
      htmlValueContext.attr,
      htmlValueContext.prefix,
    );
    if (valueSuggestions.length) {
      currentSuggestionContext = htmlValueContext;
      showJsSuggestions(editor, valueSuggestions, "html-value");
      return;
    }
  }

  if (fileContext) {
    const files = getRankedFileSuggestions(
      fileContext.valuePrefix,
      fileContext.attr,
      fileContext.tag,
    );
    if (!files.length) {
      hideSuggestions();
      return;
    }
    if (
      fileContext.valuePrefix &&
      files.some((name) => name.toLowerCase() === fileContext.valuePrefix.toLowerCase())
    ) {
      hideSuggestions();
      return;
    }
    showFileSuggestions(editor, files, fileContext.valuePrefix, fileContext);
    return;
  }

  const attrContext = getHtmlAttributeSuggestionContext(textBefore);
  if (attrContext) {
    const attrSuggestions = getRankedHtmlAttributeSuggestions(
      attrContext.tag,
      attrContext.prefix,
      attrContext.usedAttributes,
    );
    if (!attrSuggestions.length) {
      hideSuggestions();
      return;
    }
    if (
      attrContext.prefix &&
      attrSuggestions.some(
        (entry) => entry.value.toLowerCase() === attrContext.prefix.toLowerCase(),
      )
    ) {
      hideSuggestions();
      return;
    }
    currentSuggestionContext = attrContext;
    showHtmlAttributeSuggestions(editor, attrSuggestions);
    return;
  }

  const closingMatch = textBefore.match(/<\/([a-zA-Z0-9-]*)$/);
  const openingMatch = textBefore.match(/<([a-zA-Z][a-zA-Z0-9:-]*)$/);
  const plainMatch = currentLineText.match(/([a-zA-Z][a-zA-Z0-9:-]*)$/);
  const isClosing = Boolean(closingMatch);
  const isOpening = Boolean(openingMatch);
  const isPlain = !isClosing && !isOpening && outsideTag && Boolean(plainMatch);
  const prefix = isClosing
    ? closingMatch[1]
    : isOpening
      ? openingMatch[1]
      : isPlain
        ? plainMatch[1]
        : "";

  if (!isClosing && !isOpening && !isPlain) {
    hideSuggestions();
    return;
  }

  const suggestions = getRankedTagSuggestions(prefix, { includeSnippets: !isClosing });
  if (!suggestions.length) {
    hideSuggestions();
    return;
  }
  if (
    prefix &&
    !isPlain &&
    suggestions.some((entry) => entry.tag.toLowerCase() === prefix.toLowerCase())
  ) {
    hideSuggestions();
    return;
  }

  const mode = isClosing
    ? "tag-closing"
    : isOpening
      ? "tag-opening"
      : "tag-plain";
  currentSuggestionContext = null;
  showSuggestions(editor, suggestions, prefix, mode);
}

/**
 * Hides tag suggestion popup and resets active item.
 */
function hideSuggestions() {
  closeCssColorPicker();
  suggestionPopup.style.display = "none";
  suggestionPopup.innerHTML = "";
  suggestionPopup.dataset.mode = "";
  currentSuggestionContext = null;
  activeSuggestion = -1;
}

let __codxProjectSuggestionCache = {
  hash: "",
  html: {
    tagFreq: new Map(),
    attrFreq: new Map(),
    valueFreq: new Map(),
    ids: new Set(),
    classes: new Set(),
  },
  css: {
    selectorFreq: new Map(),
    propertyFreq: new Map(),
    valueFreq: new Map(),
    vars: new Set(),
    colors: new Set(),
  },
  js: {
    identFreq: new Map(),
    memberKeys: new Set(),
    domIds: new Set(),
    domClasses: new Set(),
  },
  env: {
    keys: new Set(),
  },
};

const CODEX_LEARNED_SUGGESTIONS_KEY = "codxLearnedSuggestionsV1";
const CODEX_LEARNED_SUGGESTION_LIMIT = 600;
const __codxLearnedSuggestionDefaults = {
  html: { tags: [], attrs: [], ids: [], classes: [] },
  css: { selectors: [], properties: [], values: [], vars: [], colors: [] },
  js: { identifiers: [], members: [] },
  env: { keys: [] },
  files: { names: [] },
};

function __codxLoadLearnedSuggestions() {
  const saved = safeLocalStorage("get", CODEX_LEARNED_SUGGESTIONS_KEY);
  if (!saved) return structuredClone(__codxLearnedSuggestionDefaults);
  try {
    const parsed = JSON.parse(saved);
    const normalized = structuredClone(__codxLearnedSuggestionDefaults);
    Object.keys(normalized).forEach((language) => {
      Object.keys(normalized[language]).forEach((category) => {
        const values = parsed?.[language]?.[category];
        normalized[language][category] = Array.isArray(values)
          ? values.filter((value) => typeof value === "string" && value.trim()).slice(-CODEX_LEARNED_SUGGESTION_LIMIT)
          : [];
      });
    });
    return normalized;
  } catch (_err) {
    return structuredClone(__codxLearnedSuggestionDefaults);
  }
}

let __codxLearnedSuggestions = __codxLoadLearnedSuggestions();

function __codxRememberLearnedValues(language, category, values) {
  const target = __codxLearnedSuggestions?.[language]?.[category];
  if (!Array.isArray(target)) return;
  const seen = new Set(target.map((value) => value.toLowerCase()));
  for (const rawValue of values || []) {
    const value = String(rawValue || "").trim();
    if (!value || value.length > 160 || seen.has(value.toLowerCase())) continue;
    seen.add(value.toLowerCase());
    target.push(value);
  }
  if (target.length > CODEX_LEARNED_SUGGESTION_LIMIT) {
    target.splice(0, target.length - CODEX_LEARNED_SUGGESTION_LIMIT);
  }
}

function __codxSaveLearnedSuggestions() {
  safeLocalStorage("set", CODEX_LEARNED_SUGGESTIONS_KEY, JSON.stringify(__codxLearnedSuggestions));
}

function __codxHashProjectFiles(files) {
  try {
    const sig = (files || [])
      .map((f) => `${f.name}|${f.type}|${String(f.content || "")}`)
      .join("\n");
    let h = 0;
    for (let i = 0; i < sig.length; i++) {
      h = (h * 31 + sig.charCodeAt(i)) >>> 0;
    }
    return String(h);
  } catch {
    return "0";
  }
}

function __codxIncFreq(map, key, inc = 1) {
  const k = String(key || "").trim();
  if (!k) return;
  map.set(k, (map.get(k) || 0) + inc);
}

function __codxTokenizeHtml(projectFiles) {
  const tagFreq = new Map();
  const attrFreq = new Map();
  const valueFreq = new Map();
  const ids = new Set();
  const classes = new Set();

  for (const file of projectFiles) {
    if (file.type !== "html") continue;
    const text = String(file.content || "");

    // Tag names (opening only). Very lightweight regex.
    const tagRe = /<\/?\s*([a-zA-Z][a-zA-Z0-9-]*)(\s[^>]*?)?>/g;
    let m;
    while ((m = tagRe.exec(text)) !== null) {
      const full = m[0] || "";
      const tag = (m[1] || "").toLowerCase();
      if (!tag) continue;
      if (full.startsWith("</")) continue;
      if (tag.includes("?")) continue;
      __codxIncFreq(tagFreq, tag, 1);
    }

    // Attributes names + quoted values
    // name="value" and name='value'
    const attrValRe = /\b([a-zA-Z_][a-zA-Z0-9_:\-]*)\s*=\s*("([^"]*)"|'([^']*)')/g;
    while ((m = attrValRe.exec(text)) !== null) {
      const attr = (m[1] || "").trim();
      const val = (m[3] || m[4] || "").trim();
      if (attr) __codxIncFreq(attrFreq, attr, 2);
      if (val) __codxIncFreq(valueFreq, val, 1);

      if (attr.toLowerCase() === "id") ids.add(val);
      if (attr.toLowerCase() === "class") {
        val
          .split(/\s+/)
          .map((x) => x.trim())
          .filter(Boolean)
          .forEach((c) => classes.add(c));
      }
    }

    // Boolean attributes (no value)
    const boolAttrRe = /\b([a-zA-Z_][a-zA-Z0-9_:\-]*)\b(?=(\s|>))/g;
    // Avoid counting the same thing too much: only count custom-ish attrs.
    // (Keep this lightweight; we don't want to explode noise.)
    while ((m = boolAttrRe.exec(text)) !== null) {
      const attr = (m[1] || "").trim();
      if (!attr) continue;
      const lower = attr.toLowerCase();
      if (lower === "class" || lower === "id") continue;
      if (lower.startsWith("aria-") || lower.startsWith("data-") || lower === "disabled" || lower === "required" || lower === "checked" || lower === "selected") {
        __codxIncFreq(attrFreq, attr, 1);
      }
    }
  }

  return { tagFreq, attrFreq, valueFreq, ids, classes };
}

function __codxTokenizeCss(projectFiles) {
  const selectorFreq = new Map();
  const propertyFreq = new Map();
  const valueFreq = new Map();
  const vars = new Set();
  const colors = new Set();

  for (const file of projectFiles) {
    if (file.type !== "css" && file.type !== "html") continue;
    let text = String(file.content || "");
    if (file.type === "html") {
      text = Array.from(text.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi))
        .map((match) => match[1] || "")
        .join("\n");
    }

    // Strip comments
    text = text.replace(/\/\*[\s\S]*?\*\//g, " ");

    // Vars
    const varRe = /--[a-zA-Z0-9_-]+/g;
    let m;
    while ((m = varRe.exec(text)) !== null) {
      vars.add(m[0]);
    }

    const colorRe = /#[\da-f]{3,8}\b|\b(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color)\([^;{}]+\)/gi;
    while ((m = colorRe.exec(text)) !== null) colors.add(m[0].trim());
    const colorDeclarationRe = /(?:^|[;{]\s*)(?:color|background(?:-color)?|border(?:-(?:top|right|bottom|left))?-color|outline-color|fill|stroke|caret-color|accent-color)\s*:\s*([^;}{]+)/gim;
    while ((m = colorDeclarationRe.exec(text)) !== null) {
      const value = String(m[1] || "").trim();
      if (value && value.length <= 160) colors.add(value);
    }

    // Properties
    const propRe = /(^|[;{]\s*)([a-zA-Z-]+)\s*:/gm;
    while ((m = propRe.exec(text)) !== null) {
      const prop = String(m[2] || "").trim();
      if (!prop || prop.startsWith("--")) continue;
      __codxIncFreq(propertyFreq, prop, 2);
    }

    // Selector fragments: `.a`, `#b`, `tag`, `[attr="v"]`
    const selRe = /(#[-a-zA-Z0-9_]+)|(\.[-a-zA-Z0-9_]+)|\b([a-zA-Z][a-zA-Z0-9_-]*)\b(?=\s*[{,])|\[([^\]]+)\]/g;
    while ((m = selRe.exec(text)) !== null) {
      const sel = (m[0] || "").trim();
      if (!sel) continue;
      // Reduce noise: ignore plain tags that are too common.
      if (/^[a-zA-Z][a-zA-Z0-9_-]*$/.test(sel) && sel.length <= 2) continue;
      __codxIncFreq(selectorFreq, sel, 1);
    }

    // Values: capture after ':' up to ';' or '}'
    const valRe = /:\s*([^;}{\n]+)(?=[;}\n])/g;
    while ((m = valRe.exec(text)) !== null) {
      const val = String(m[1] || "").trim();
      if (!val) continue;
      // Split by whitespace/functions a bit
      const parts = val
        .split(/\s+/)
        .map((x) => x.trim())
        .filter(Boolean);
      parts.slice(0, 12).forEach((p) => __codxIncFreq(valueFreq, p, 1));
    }
  }

  return { selectorFreq, propertyFreq, valueFreq, vars, colors };
}

function __codxTokenizeJs(projectFiles) {
  const identFreq = new Map();
  const memberKeys = new Set();
  const domIds = new Set();
  const domClasses = new Set();

  const addIdent = (name, inc = 1) => {
    const n = String(name || "").trim();
    if (!n) return;
    if (!/^[$A-Z_][0-9A-Z_$]*$/i.test(n)) return;
    __codxIncFreq(identFreq, n, inc);
  };

  for (const file of projectFiles) {
    if (file.type !== "js" && file.type !== "html") continue;
    let text = String(file.content || "");
    if (file.type === "html") {
      text = Array.from(text.matchAll(/<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi))
        .map((match) => match[1] || "")
        .join("\n");
    }

    // const/let/var X
    let m;
    const declRe = /\b(?:const|let|var)\s+([$A-Z_][0-9A-Z_$]*)\b/gim;
    while ((m = declRe.exec(text)) !== null) addIdent(m[1], 2);

    // function X
    const fnRe = /\bfunction\s+([$A-Z_][0-9A-Z_$]*)\b/gim;
    while ((m = fnRe.exec(text)) !== null) addIdent(m[1], 2);

    // class X
    const clsRe = /\bclass\s+([$A-Z_][0-9A-Z_$]*)\b/gim;
    while ((m = clsRe.exec(text)) !== null) addIdent(m[1], 2);

    // member keys: obj.someKey or obj["someKey"]
    const memberDotRe = /\.([$A-Z_][0-9A-Z_$]*)\b/gim;
    while ((m = memberDotRe.exec(text)) !== null) {
      const key = m[1];
      if (key) memberKeys.add(key);
    }

    // getElementById("id")
    const idCallRe = /getElementById\s*\(\s*("([^"]+)"|'([^']+)')/gim;
    while ((m = idCallRe.exec(text)) !== null) {
      const id = String(m[2] || m[3] || "").trim();
      if (id) domIds.add(id);
    }

    // querySelector(".class" / "#id")
    const qsRe = /querySelector(All)?\s*\(\s*("([^"]+)"|'([^']+)')/gim;
    while ((m = qsRe.exec(text)) !== null) {
      const sel = String(m[3] || m[4] || "").trim();
      if (!sel) continue;
      if (sel.startsWith("#")) domIds.add(sel.slice(1));
      if (sel.startsWith(".")) sel.split(/\s*,\s*/).forEach((s) => { if (s.startsWith('.')) domClasses.add(s.slice(1)); });
    }
  }

  // add member keys into identFreq a bit
  Array.from(memberKeys).forEach((k) => __codxIncFreq(identFreq, k, 1));

  return { identFreq, memberKeys, domIds, domClasses };
}

function __codxTokenizeEnv(projectFiles) {
  const keys = new Set();
  for (const file of projectFiles) {
    const text = String(file.content || "");
    if (file.type === "env") {
      for (const line of text.split(/\r?\n/)) {
        const match = line.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=/);
        if (match) keys.add(match[1]);
      }
    }
    if (file.type === "js" || file.type === "html") {
      const envRe = /\b(?:process\.env|import\.meta\.env)\.([A-Za-z_][A-Za-z0-9_]*)\b/g;
      let match;
      while ((match = envRe.exec(text)) !== null) keys.add(match[1]);
    }
  }
  return { keys };
}

function __codxLearnFromProjectCache() {
  const cache = __codxProjectSuggestionCache;
  __codxRememberLearnedValues("html", "tags", cache.html.tagFreq.keys());
  __codxRememberLearnedValues("html", "attrs", cache.html.attrFreq.keys());
  __codxRememberLearnedValues("html", "ids", cache.html.ids);
  __codxRememberLearnedValues("html", "classes", cache.html.classes);
  __codxRememberLearnedValues("css", "selectors", cache.css.selectorFreq.keys());
  __codxRememberLearnedValues("css", "properties", cache.css.propertyFreq.keys());
  __codxRememberLearnedValues("css", "values", cache.css.valueFreq.keys());
  __codxRememberLearnedValues("css", "vars", cache.css.vars);
  __codxRememberLearnedValues("css", "colors", cache.css.colors);
  __codxRememberLearnedValues("js", "identifiers", cache.js.identFreq.keys());
  __codxRememberLearnedValues("js", "members", cache.js.memberKeys);
  __codxRememberLearnedValues("env", "keys", cache.env.keys);
  __codxRememberLearnedValues(
    "files",
    "names",
    projectFiles.map((file) => file.name),
  );
  __codxSaveLearnedSuggestions();
}

let __codxProjectScannerTimer = null;
function __codxRescanProjectSuggestionCacheSoon() {
  clearTimeout(__codxProjectScannerTimer);
  __codxProjectScannerTimer = setTimeout(() => {
    const nextHash = __codxHashProjectFiles(projectFiles);
    if (nextHash === __codxProjectSuggestionCache.hash) return;
    __codxProjectSuggestionCache.hash = nextHash;

    // Build caches
    try {
      __codxProjectSuggestionCache.html = __codxTokenizeHtml(projectFiles);
      __codxProjectSuggestionCache.css = __codxTokenizeCss(projectFiles);
      __codxProjectSuggestionCache.js = __codxTokenizeJs(projectFiles);
      __codxProjectSuggestionCache.env = __codxTokenizeEnv(projectFiles);
      __codxLearnFromProjectCache();
    } catch (e) {
      // fail safe
    }
  }, 300);
}

function __codxProjectIsReady() {
  const nextHash = __codxHashProjectFiles(projectFiles);
  if (!__codxProjectSuggestionCache || nextHash !== __codxProjectSuggestionCache.hash) {
    __codxRescanProjectSuggestionCacheSoon();
  }
}

function getRankedTagSuggestions(prefix, options = {}) {
  __codxProjectIsReady();

  const q = (prefix || "").toLowerCase();
  const includeSnippets = options.includeSnippets !== false;

  const staticMatches = tagSuggestionPool.filter(
    (entry) => entry.tag.includes(q) && (includeSnippets || !entry.insertText),
  );

  const projectTags = __codxProjectSuggestionCache.html.tagFreq;
  const projectTagEntries = Array.from(
    new Set([...projectTags.keys(), ...__codxLearnedSuggestions.html.tags]),
  )
    .filter((t) => t && t.includes(q))
    .slice(0, 300);

  const merged = [];
  const seen = new Set();

  const toSuggestion = (tag) => {
    // Try to keep metadata if we know the tag.
    if (htmlTagMetaMap.has(tag)) {
      const meta = htmlTagMetaMap.get(tag);
      return {
        ...meta,
        tag,
      };
    }
    return {
      tag,
      icon: "</>",
      desc: "Project-used HTML element",
      attrs: [],
      category: "project",
    };
  };

  // Prefer-project behavior: items starting with prefix come first.
  const scoredProject = projectTagEntries
    .map((t) => {
      const starts = t.toLowerCase().startsWith(q);
      const freq = projectTags.get(t) || 1;
      return { entry: toSuggestion(t), starts: starts ? 1 : 0, freq };
    })
    .sort((a, b) => b.starts - a.starts || b.freq - a.freq || a.entry.tag.length - b.entry.tag.length);

  for (const item of scoredProject) {
    const tag = item.entry.tag;
    if (seen.has(tag)) continue;
    seen.add(tag);
    merged.push({ ...item.entry, _projectScore: item.starts * 1000 + item.freq });
    if (merged.length >= 60) break;
  }

  // Add static suggestions (still present, but de-prioritized)
  for (const s of staticMatches) {
    if (seen.has(s.tag)) continue;
    seen.add(s.tag);
    merged.push({ ...s, _projectScore: -1000 });
  }

  // Final sort
  merged.sort((a, b) => {
    const aTag = String(a.tag || "").toLowerCase();
    const bTag = String(b.tag || "").toLowerCase();
    const aStarts = aTag.startsWith(q) ? 1 : 0;
    const bStarts = bTag.startsWith(q) ? 1 : 0;
    if (aStarts !== bStarts) return bStarts - aStarts;

    const aProject = Number(a._projectScore || 0);
    const bProject = Number(b._projectScore || 0);
    if (aProject !== bProject) return bProject - aProject;

    const aPriority = Number(a.suggestionPriority || 0);
    const bPriority = Number(b.suggestionPriority || 0);
    if (aPriority !== bPriority) return bPriority - aPriority;

    return aTag.localeCompare(bTag);
  });

  return merged.slice(0, 40).map(({ _projectScore, ...rest }) => rest);
}


function isInsideStyleTag(textBefore) {
  const opens = (textBefore.match(/<style\b[^>]*>/gi) || []).length;
  const closes = (textBefore.match(/<\/style>/gi) || []).length;
  return opens > closes;
}

function isInsideScriptTag(textBefore) {
  const opens = (textBefore.match(/<script\b[^>]*>/gi) || []).length;
  const closes = (textBefore.match(/<\/script>/gi) || []).length;
  return opens > closes;
}

function stripQuotedContent(text) {
  return String(text || "").replace(
    /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`/g,
    (match) => " ".repeat(match.length),
  );
}

function getCssSuggestionContext(textBefore) {
  const sanitizedText = stripQuotedContent(textBefore);
  const lineStart = textBefore.lastIndexOf("\n") + 1;
  const lineText = textBefore.substring(lineStart);
  const sanitizedLineText = sanitizedText.substring(lineStart);
  if (/^\s*\/\//.test(lineText) || /\/\*[^*]*$/.test(sanitizedText)) return null;
  const valueMatch = sanitizedLineText.match(/([a-z-]+)\s*:\s*([^;}]*)$/i);
  if (valueMatch) {
    const propertyName = valueMatch[1].toLowerCase();
    const rawValue = lineText.slice(valueMatch.index + valueMatch[0].indexOf(valueMatch[2]));
    const valuePrefixMatch = rawValue.match(/(?:^|[\s,(])([#.\w%-]*)$/);
    const valuePrefix = valuePrefixMatch ? valuePrefixMatch[1] : rawValue.trimStart();
    const replaceEnd = textBefore.length;
    const replaceStart = replaceEnd - valuePrefix.length;
    return {
      mode: "css-value",
      propertyName,
      prefix: valuePrefix,
      fullValue: rawValue,
      replaceStart,
      replaceEnd,
    };
  }

  const cssWithoutStrings = sanitizedText;
  const openBraces = (cssWithoutStrings.match(/\{/g) || []).length;
  const closeBraces = (cssWithoutStrings.match(/\}/g) || []).length;
  const insideDeclaration = openBraces > closeBraces;

  if (insideDeclaration) {
    const propMatch = sanitizedLineText.match(/([a-z-]*)$/i);
    const propertyPrefix = propMatch ? propMatch[1] : "";
    return {
      mode: "css-property",
      propertyName: "",
      prefix: propertyPrefix,
      replaceStart: textBefore.length - propertyPrefix.length,
      replaceEnd: textBefore.length,
    };
  }

  const selectorMatch = sanitizedLineText.match(/([@.#a-z0-9_-]*)$/i);
  const selectorPrefix = selectorMatch ? selectorMatch[1] : "";
  return {
    mode: "css-selector",
    propertyName: "",
    prefix: selectorPrefix,
    replaceStart: textBefore.length - selectorPrefix.length,
    replaceEnd: textBefore.length,
  };
}

function getJsSuggestionContext(textBefore) {
  const sanitizedText = stripQuotedContent(textBefore);
  const lineStart = textBefore.lastIndexOf("\n") + 1;
  const lineText = textBefore.substring(lineStart);
  const sanitizedLineText = sanitizedText.substring(lineStart);

  if (/^\s*\/\//.test(lineText) || /\/\*[^*]*$/.test(sanitizedText)) return null;

  const tokenMatch = sanitizedLineText.match(/([A-Za-z_$][\w$.]*)$/);
  if (!tokenMatch) return null;

  const prefix = tokenMatch[1];
  return {
    mode: "js",
    prefix,
    replaceStart: textBefore.length - prefix.length,
    replaceEnd: textBefore.length,
  };
}

function getEnvSuggestionContext(textBefore) {
  const lineStart = textBefore.lastIndexOf("\n") + 1;
  const lineText = textBefore.slice(lineStart);
  if (lineText.includes("=") || /^\s*#/.test(lineText)) return null;
  const match = lineText.match(/(?:^\s*(?:export\s+)?)?([A-Za-z_][A-Za-z0-9_]*)$/);
  if (!match) return null;
  const prefix = match[1] || "";
  return {
    mode: "env",
    prefix,
    replaceStart: textBefore.length - prefix.length,
    replaceEnd: textBefore.length,
  };
}

function getHtmlAttributeValueSuggestionContext(textBefore) {
  const lastLt = textBefore.lastIndexOf("<");
  const lastGt = textBefore.lastIndexOf(">");
  if (lastLt < 0 || lastGt > lastLt) return null;
  const match = textBefore.slice(lastLt).match(/\b(class|id)\s*=\s*(["'])([^"']*)$/i);
  if (!match) return null;
  const attr = match[1].toLowerCase();
  const fullValue = match[3] || "";
  const prefix = attr === "class" ? fullValue.slice(fullValue.lastIndexOf(" ") + 1) : fullValue;
  return {
    mode: "html-value",
    attr,
    prefix,
    replaceStart: textBefore.length - prefix.length,
    replaceEnd: textBefore.length,
  };
}

function getRankedHtmlAttributeValueSuggestions(attr, prefix) {
  __codxProjectIsReady();
  const q = String(prefix || "").toLowerCase();
  const isClass = attr === "class";
  const projectValues = isClass
    ? __codxProjectSuggestionCache.html.classes
    : __codxProjectSuggestionCache.html.ids;
  const jsValues = isClass
    ? __codxProjectSuggestionCache.js.domClasses
    : __codxProjectSuggestionCache.js.domIds;
  const learnedValues = isClass
    ? __codxLearnedSuggestions.html.classes
    : __codxLearnedSuggestions.html.ids;
  const cssValues = [
    ...__codxProjectSuggestionCache.css.selectorFreq.keys(),
    ...__codxLearnedSuggestions.css.selectors,
  ]
    .filter((value) => String(value).startsWith(isClass ? "." : "#"))
    .map((value) => String(value).slice(1));
  const values = Array.from(new Set([...projectValues, ...jsValues, ...learnedValues, ...cssValues]));
  return values
    .filter((value) => !q || value.toLowerCase().includes(q))
    .sort((a, b) => {
      const aStarts = a.toLowerCase().startsWith(q) ? 1 : 0;
      const bStarts = b.toLowerCase().startsWith(q) ? 1 : 0;
      return bStarts - aStarts || a.length - b.length || a.localeCompare(b);
    })
    .slice(0, 40)
    .map((value) => ({ value, desc: `Learned HTML ${attr}` }));
}

function getRankedEnvSuggestions(prefix) {
  __codxProjectIsReady();
  const q = String(prefix || "").toLowerCase();
  const values = Array.from(
    new Set([...__codxProjectSuggestionCache.env.keys, ...__codxLearnedSuggestions.env.keys]),
  );
  return values
    .filter((value) => value.toLowerCase().includes(q))
    .sort((a, b) => {
      const aStarts = a.toLowerCase().startsWith(q) ? 1 : 0;
      const bStarts = b.toLowerCase().startsWith(q) ? 1 : 0;
      return bStarts - aStarts || a.length - b.length || a.localeCompare(b);
    })
    .slice(0, 40)
    .map((value) => ({ value, desc: "Learned environment variable name" }));
}

function getHtmlInlineStyleSuggestionContext(textBefore) {
  const match = textBefore.match(
    /<([a-zA-Z][a-zA-Z0-9-]*)[^<>]*\bstyle=(["'])([^"']*)$/i,
  );
  if (!match) return null;

  const styleValue = match[3] || "";
  const sanitizedStyleValue = stripQuotedContent(styleValue);
  if (/\/\*[^*]*$/.test(sanitizedStyleValue)) return null;

  const declarationStart = sanitizedStyleValue.lastIndexOf(";") + 1;
  const declarationText = styleValue.slice(declarationStart);
  const sanitizedDeclarationText = sanitizedStyleValue.slice(declarationStart);

  const valueMatch = sanitizedDeclarationText.match(/([a-z-]+)\s*:\s*([^;]*)$/i);
  if (valueMatch) {
    const propertyName = valueMatch[1].toLowerCase();
    const rawValue = declarationText.slice(
      valueMatch.index + valueMatch[0].indexOf(valueMatch[2]),
    );
    const valuePrefixMatch = rawValue.match(/(?:^|[\s,(])([#.\w%-]*)$/);
    const valuePrefix = valuePrefixMatch ? valuePrefixMatch[1] : rawValue.trimStart();
    const replaceEnd = textBefore.length;
    const replaceStart = replaceEnd - valuePrefix.length;
    return {
      mode: "css-inline-value",
      propertyName,
      prefix: valuePrefix,
      fullValue: rawValue,
      replaceStart,
      replaceEnd,
    };
  }

  const propMatch = sanitizedDeclarationText.match(/([a-z-]*)$/i);
  const propertyPrefix = propMatch ? propMatch[1] : "";
  return {
    mode: "css-inline-property",
    propertyName: "",
    prefix: propertyPrefix,
    replaceStart: textBefore.length - propertyPrefix.length,
    replaceEnd: textBefore.length,
  };
}

function isCssColorProperty(propertyName) {
  return [
    "color",
    "background-color",
    "border-color",
    "outline-color",
    "text-decoration-color",
    "caret-color",
    "accent-color",
    "column-rule-color",
    "background",
  ].includes(String(propertyName || "").toLowerCase());
}

function getCssColorSwatch(value, propertyName) {
  const prop = String(propertyName || "").toLowerCase();
  const rawValue = String(value || "").trim();
  if (!rawValue) return "";
  const isColorProperty =
    prop === "color" ||
    prop === "background-color" ||
    prop === "border-color" ||
    prop === "outline-color" ||
    prop === "text-decoration-color" ||
    prop === "caret-color" ||
    prop === "accent-color" ||
    prop === "column-rule-color" ||
    prop === "background";
  if (!isColorProperty) return "";
  if (/^(inherit|initial|unset|currentcolor)$/i.test(rawValue)) return "";
  if (/^url\(/i.test(rawValue)) return "";
  if (
    !/^(#|rgb\(|rgba\(|hsl\(|hsla\(|transparent$|black$|white$|red$|blue$|green$|yellow$|orange$|purple$|pink$|brown$|gray$|grey$|teal$|navy$|lime$|olive$|maroon$|aqua$|fuchsia$|silver$)/i.test(rawValue)
  ) {
    return "";
  }
  if (/^transparent$/i.test(rawValue)) {
    return "linear-gradient(45deg, #d1d5db 25%, transparent 25%, transparent 50%, #d1d5db 50%, #d1d5db 75%, transparent 75%, transparent), #ffffff";
  }
  return rawValue;
}

function getRankedCssSuggestions(prefix, mode, propertyName) {
  const q = (prefix || "").toLowerCase();
  let source = [];
  if (mode === "css-property" || mode === "css-inline-property") {
    const properties = [
      ...cssPropertySuggestions,
      ...__codxProjectSuggestionCache.css.propertyFreq.keys(),
      ...__codxLearnedSuggestions.css.properties,
    ];
    source = properties.map((value) => ({
      value,
      desc: "CSS property",
    }));
  } else if (mode === "css-value" || mode === "css-inline-value") {
    const propertyValues = cssValueSuggestionsByProperty[propertyName] || [];
    const rememberedValues = isCssColorProperty(propertyName)
      ? [...__codxProjectSuggestionCache.css.colors, ...__codxLearnedSuggestions.css.colors]
      : [...__codxProjectSuggestionCache.css.valueFreq.keys(), ...__codxLearnedSuggestions.css.values];
    const learnedValues = [
      ...rememberedValues,
      ...__codxProjectSuggestionCache.css.vars,
      ...__codxLearnedSuggestions.css.vars,
      ...Array.from(__codxProjectSuggestionCache.css.vars).map((value) => `var(${value})`),
      ...__codxLearnedSuggestions.css.vars.map((value) => `var(${value})`),
    ];
    source = [...propertyValues, ...learnedValues, ...cssGenericValueSuggestions].map((value) => ({
      value,
      desc: `Value for ${propertyName || "property"}`,
      swatch: getCssColorSwatch(value, propertyName),
    }));
    const trimmedPrefix = String(prefix || "").trim();
    if (/^-?\d*\.?\d+$/.test(trimmedPrefix)) {
      source.unshift({
        value: `${trimmedPrefix}px`,
        desc: "Pixel value",
        swatch: "",
      });
    }
  } else {
    const learnedSelectors = [
      ...__codxProjectSuggestionCache.css.selectorFreq.keys(),
      ...__codxLearnedSuggestions.css.selectors,
      ...Array.from(__codxProjectSuggestionCache.html.classes).map((value) => `.${value}`),
      ...Array.from(__codxProjectSuggestionCache.html.ids).map((value) => `#${value}`),
      ...__codxLearnedSuggestions.html.classes.map((value) => `.${value}`),
      ...__codxLearnedSuggestions.html.ids.map((value) => `#${value}`),
    ];
    source = [...learnedSelectors, ...cssSelectorSuggestions].map((value) => ({
      value,
      desc: "Selector or at-rule",
    }));
  }

  const deduped = Array.from(
    new Map(source.map((entry) => [entry.value.toLowerCase(), entry])).values(),
  );
  const matches = deduped.filter((entry) =>
    entry.value.toLowerCase().includes(q),
  );
  matches.sort((a, b) => {
    const aValue = a.value.toLowerCase();
    const bValue = b.value.toLowerCase();
    const aStarts = aValue.startsWith(q) ? 1 : 0;
    const bStarts = bValue.startsWith(q) ? 1 : 0;
    if (aStarts !== bStarts) return bStarts - aStarts;
    if (aValue.length !== bValue.length) return aValue.length - bValue.length;
    return aValue.localeCompare(bValue);
  });
  return matches.slice(0, 80);
}

function getRankedJsSuggestions(prefix) {
  const q = (prefix || "").toLowerCase();
  const runtimeMembers = getRuntimeJsMemberSuggestions(prefix);
  const learnedEntries = [
    ...__codxProjectSuggestionCache.js.identFreq.keys(),
    ...__codxProjectSuggestionCache.js.memberKeys,
    ...__codxLearnedSuggestions.js.identifiers,
    ...__codxLearnedSuggestions.js.members,
  ].map((value) => ({ value, desc: "Learned JavaScript identifier" }));
  const envEntries = [
    ...__codxProjectSuggestionCache.env.keys,
    ...__codxLearnedSuggestions.env.keys,
  ].map((key) => ({ value: `process.env.${key}`, desc: "Learned environment variable" }));
  const source = Array.from(
    new Map(
      [...learnedEntries, ...envEntries, ...jsSuggestions, ...runtimeMembers].map((entry) => [entry.value, entry]),
    ).values(),
  );
  const matches = source.filter((entry) =>
    entry.value.toLowerCase().includes(q),
  );
  matches.sort((a, b) => {
    const aValue = a.value.toLowerCase();
    const bValue = b.value.toLowerCase();
    const aStarts = aValue.startsWith(q) ? 1 : 0;
    const bStarts = bValue.startsWith(q) ? 1 : 0;
    if (aStarts !== bStarts) return bStarts - aStarts;
    if (aValue.length !== bValue.length) return aValue.length - bValue.length;
    return aValue.localeCompare(bValue);
  });
  return matches.slice(0, 20);
}

function getRuntimeJsMemberSuggestions(prefix) {
  const rawPrefix = String(prefix || "");
  const lastDot = rawPrefix.lastIndexOf(".");
  if (lastDot < 1) return [];

  const objectPath = rawPrefix.slice(0, lastDot);
  const segments = objectPath.split(".");
  if (
    segments.length > 6 ||
    segments.some((segment) => !/^[A-Za-z_$][\w$]*$/.test(segment) || ["__proto__", "prototype", "constructor"].includes(segment))
  ) {
    return [];
  }

  let target = globalThis;
  try {
    for (const segment of segments) {
      target = target?.[segment];
      if (target == null) return [];
    }
  } catch (_err) {
    return [];
  }

  const memberNames = new Set();
  let current = target;
  for (let depth = 0; current != null && depth < 5; depth += 1) {
    try {
      Object.getOwnPropertyNames(current).forEach((name) => {
        if (/^[A-Za-z_$][\w$]*$/.test(name) && name !== "constructor") memberNames.add(name);
      });
      current = Object.getPrototypeOf(current);
    } catch (_err) {
      break;
    }
  }

  return Array.from(memberNames).map((name) => ({
    value: `${objectPath}.${name}`,
    desc: `JavaScript member of ${objectPath}`,
  }));
}

function getFileSuggestionContext(textBefore) {
  const match = textBefore.match(
    /<([a-zA-Z0-9-]+)[^<>]*\b(href|src)=["']([^"']*)$/i,
  );
  if (!match) return null;
  return {
    mode: "file",
    tag: match[1].toLowerCase(),
    attr: match[2].toLowerCase(),
    valuePrefix: match[3],
    replaceStart: textBefore.length - match[3].length,
    replaceEnd: textBefore.length,
  };
}

function getCodeFileSuggestionContext(textBefore, language) {
  const lineStart = textBefore.lastIndexOf("\n") + 1;
  const lineText = textBefore.slice(lineStart);
  let match = null;
  let tag = "";
  let attr = "";
  if (language === "css") {
    match = lineText.match(/url\(\s*["']?([^"')\s;]*)$|@import\s+["']([^"']*)$/i);
    tag = match?.[2] !== undefined ? "css-import" : "css-url";
    attr = match?.[2] !== undefined ? "import" : "url";
  } else if (language === "js") {
    match = lineText.match(/(?:\bfrom\s+|\bimport\s*\(\s*|\brequire\s*\(\s*|\bfetch\s*\(\s*|\bnew\s+Worker\s*\(\s*)["']([^"']*)$/i);
    tag = "js-file";
    attr = "src";
  }
  if (!match) return null;
  const valuePrefix = String(match[1] ?? match[2] ?? "");
  return {
    mode: "file",
    tag,
    attr,
    valuePrefix,
    replaceStart: textBefore.length - valuePrefix.length,
    replaceEnd: textBefore.length,
  };
}

function getHtmlAttributeSuggestionContext(textBefore) {
  const lastLt = textBefore.lastIndexOf("<");
  const lastGt = textBefore.lastIndexOf(">");
  if (lastLt === -1 || lastGt > lastLt) return null;

  const openTagText = textBefore.slice(lastLt);
  if (/^<\//.test(openTagText) || /\/\s*$/.test(openTagText)) return null;
  if (/=\s*["'][^"']*$/.test(openTagText)) return null;

  const tagMatch = openTagText.match(/^<([a-zA-Z][a-zA-Z0-9-]*)\b/i);
  if (!tagMatch) return null;

  const tag = tagMatch[1].toLowerCase();
  const afterTagName = openTagText.slice(tagMatch[0].length);
  const usedAttributes = Array.from(
    afterTagName.matchAll(/\b([a-zA-Z_:][-a-zA-Z0-9_:.]*)\b(?=\s*(?:=|\s|$))/g),
  ).map((match) => match[1].toLowerCase());

  const attrMatch = openTagText.match(/(?:\s|<)([a-zA-Z_:][-a-zA-Z0-9_:.]*)?$/);
  if (!attrMatch) return null;

  const prefix = attrMatch[1] || "";
  const replaceEnd = textBefore.length;
  const replaceStart = replaceEnd - prefix.length;

  if (!prefix && !/\s$/.test(openTagText)) return null;

  return {
    mode: "html-attr",
    tag,
    prefix,
    replaceStart,
    replaceEnd,
    usedAttributes,
  };
}

function getRankedHtmlAttributeSuggestions(tagName, prefix, usedAttributes) {
  const meta = htmlTagMetaMap.get(tagName) || { attrs: [] };
  const used = new Set((usedAttributes || []).map((value) => value.toLowerCase()));
  const source = [
    ...__codxProjectSuggestionCache.html.attrFreq.keys(),
    ...__codxLearnedSuggestions.html.attrs,
    ...globalHtmlAttributes,
    ...(meta.attrs || []),
  ];
  const unique = Array.from(new Set(source));
  const q = (prefix || "").toLowerCase();
  const matches = unique
    .filter((attr) => {
      const normalized = attr.toLowerCase();
      if (used.has(normalized) && normalized !== "data-*") return false;
      return !q || normalized.includes(q);
    })
    .map((attr) => ({
      value: attr,
      desc: htmlAttributeDescriptions[attr] || `Attribute for <${tagName}>`,
    }));

  matches.sort((a, b) => {
    const aValue = a.value.toLowerCase();
    const bValue = b.value.toLowerCase();
    const aStarts = q && aValue.startsWith(q) ? 1 : 0;
    const bStarts = q && bValue.startsWith(q) ? 1 : 0;
    if (aStarts !== bStarts) return bStarts - aStarts;
    if (aValue.length !== bValue.length) return aValue.length - bValue.length;
    return aValue.localeCompare(bValue);
  });

  return matches.slice(0, 20);
}

function getFileType(name) {
  const parts = name.split(".");
  return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : "";
}

function matchesExtensionByContext(fileName, attr, tag) {
  const ext = getFileType(fileName);
  const imageExt = new Set(["png", "jpg", "jpeg", "gif", "svg", "webp", "ico"]);
  const mediaExt = new Set(["mp3", "wav", "ogg", "mp4", "webm", "m4a"]);

  if (attr === "href" && tag === "link") return ext === "css" || imageExt.has(ext);
  if (attr === "href" && tag === "a") return true;
  if (attr === "src" && tag === "script") return ext === "js" || ext === "mjs";
  if (attr === "src" && tag === "img") return imageExt.has(ext);
  if (tag === "css-import") return ext === "css";
  if (tag === "js-file") return true;
  if (tag === "css-url") return true;
  if (attr === "src" && (tag === "audio" || tag === "video" || tag === "source")) {
    return mediaExt.has(ext);
  }
  return true;
}

function getRankedFileSuggestions(prefix, attr, tag) {
  __codxProjectIsReady();
  const q = (prefix || "").toLowerCase().replace(/^\.?\//, "");
  const candidates = Array.from(
    new Set([
      ...projectFiles.map((file) => file.name),
      ...__codxLearnedSuggestions.files.names,
    ]),
  )
    .filter((name) => matchesExtensionByContext(name, attr, tag));

  const matches = candidates.filter((name) =>
    name.toLowerCase().replace(/^\.?\//, "").includes(q),
  );
  matches.sort((a, b) => {
    const aa = a.toLowerCase().replace(/^\.?\//, "");
    const bb = b.toLowerCase().replace(/^\.?\//, "");
    const aStarts = aa.startsWith(q) ? 1 : 0;
    const bStarts = bb.startsWith(q) ? 1 : 0;
    if (aStarts !== bStarts) return bStarts - aStarts;
    if (a.length !== b.length) return a.length - b.length;
    return a.localeCompare(b);
  });
  return matches.slice(0, 30);
}

function getFileIcon(fileName) {
  const ext = getFileType(fileName);
  if (ext === "html") return "HTML";
  if (ext === "css") return "CSS";
  if (ext === "js" || ext === "mjs") return "JS";
  if (ext === "json") return "JSON";
  if (ext === "env") return "ENV";
  if (["png", "jpg", "jpeg", "gif", "svg", "webp", "ico"].includes(ext)) return "IMG";
  if (["mp3", "wav", "ogg", "mp4", "webm", "m4a"].includes(ext)) return "MED";
  return "FILE";
}

function createFileExtensionIcon(fileName) {
  const ext = getFileType(fileName);
  const iconByExtension = {
    html: "fa-brands fa-html5",
    css: "fa-brands fa-css3-alt",
    js: "fa-brands fa-js",
    mjs: "fa-brands fa-js",
    json: "fa-solid fa-code",
    env: "fa-solid fa-key",
  };
  const safeExt = ["html", "css", "js", "mjs", "json", "env"].includes(ext) ? ext : "file";
  const icon = document.createElement("span");
  icon.className = `file-extension-icon file-extension-icon-${safeExt}`;
  icon.title = `${getFileIcon(fileName)} file`;
  icon.setAttribute("aria-hidden", "true");

  const glyph = document.createElement("i");
  glyph.className = iconByExtension[ext] || "fa-solid fa-file-code";
  icon.appendChild(glyph);
  return icon;
}

function getCaretCoordinates(textarea, pos) {
  const div = document.createElement("div");
  const style = window.getComputedStyle(textarea);
  const copyProps = [
    "boxSizing",
    "width",
    "height",
    "overflowX",
    "overflowY",
    "borderTopWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "borderLeftWidth",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "fontStretch",
    "fontSize",
    "fontFamily",
    "lineHeight",
    "letterSpacing",
    "textAlign",
    "textTransform",
    "textIndent",
    "textDecoration",
    "tabSize",
    "whiteSpace",
    "wordSpacing",
    "direction",
  ];
  copyProps.forEach((prop) => {
    div.style[prop] = style[prop];
  });

  div.style.position = "absolute";
  div.style.visibility = "hidden";
  div.style.pointerEvents = "none";
  div.style.whiteSpace = "pre";
  div.style.overflow = "hidden";

  const value = textarea.value;
  const before = value.substring(0, pos);
  const after = value.substring(pos) || " ";
  div.textContent = before;
  const marker = document.createElement("span");
  marker.textContent = after[0];
  div.appendChild(marker);

  document.body.appendChild(div);
  const coords = {
    top: marker.offsetTop - textarea.scrollTop,
    left: marker.offsetLeft - textarea.scrollLeft,
    lineHeight: parseFloat(style.lineHeight) || 20,
  };
  document.body.removeChild(div);
  return coords;
}

function positionSuggestionPopup(editor) {
  if (suggestionPopup.style.display !== "block") return;
  const coords = getCaretCoordinates(editor, editor.selectionStart);
  const wrapperRect = editor.parentElement.getBoundingClientRect();
  const popupRect = suggestionPopup.getBoundingClientRect();

  const margin = 10;
  let left = coords.left + margin;
  let top = coords.top + coords.lineHeight + 6;

  const maxLeft = wrapperRect.width - popupRect.width - margin;
  const maxTop = wrapperRect.height - popupRect.height - margin;
  left = Math.max(margin, Math.min(left, Math.max(margin, maxLeft)));
  top = Math.max(margin, Math.min(top, Math.max(margin, maxTop)));

  suggestionPopup.style.left = `${left}px`;
  suggestionPopup.style.top = `${top}px`;
}

/**
 * Displays the suggestion popup with filtered tags.
 */
function showSuggestions(editor, suggestions, prefix, mode) {
  suggestionPopup.innerHTML = "";
  suggestionPopup.dataset.mode = mode;
  currentSuggestionContext = null;

  const header = document.createElement("div");
  header.className = "suggestion-header";
  header.innerHTML = `
    <span>HTML tags (${suggestions.length})</span>
    <span class="suggestion-shortcuts">
      <span class="suggestion-shortcut">Enter</span>
      <span class="suggestion-shortcut">Tab</span>
      <span class="suggestion-shortcut">Esc</span>
    </span>
  `;
  suggestionPopup.appendChild(header);

  suggestions.forEach((tagMeta) => {
    const suggestionItem = document.createElement("div");
    suggestionItem.className = "suggestion-item";
    const tagText = tagMeta.tag;
    const lcTag = tagText.toLowerCase();
    const lcPrefix = prefix.toLowerCase();
    const idx = lcPrefix ? lcTag.indexOf(lcPrefix) : -1;
    const highlightedTag =
      idx > -1
        ? `${escapeHtml(tagText.slice(0, idx))}<span class="highlight">${escapeHtml(
            tagText.slice(idx, idx + prefix.length),
          )}</span>${escapeHtml(tagText.slice(idx + prefix.length))}`
        : escapeHtml(tagText);

    const attrs =
      tagMeta.attrs && tagMeta.attrs.length
        ? tagMeta.attrs.slice(0, 3).join(", ")
        : "";
    const badgeLabel = tagMeta.badge || tagMeta.kind || (tagMeta.insertText ? "snippet" : "");
    const badge = badgeLabel
      ? `<span class="suggestion-badge">${escapeHtml(badgeLabel)}</span>`
      : "";
    const safeIcon = mode === "tag-closing" ? "</>" : tagMeta.icon || "<>";
    const displayTag = tagMeta.insertText ? highlightedTag : `&lt;${highlightedTag}&gt;`;
    suggestionItem.innerHTML = `
      <span class="suggestion-icon">${escapeHtml(safeIcon)}</span>
      <span class="suggestion-content">
        <div class="suggestion-tag">${displayTag}${badge}</div>
        <div class="suggestion-desc">${escapeHtml(tagMeta.desc || "HTML element")}${attrs ? ` - ${escapeHtml(attrs)}` : ""}</div>
      </span>
    `;
    suggestionItem.dataset.tag = tagText;
    // Use mousedown instead of click to fire before blur
    suggestionItem.addEventListener("mousedown", (e) => {
      e.preventDefault();
      selectSuggestion(tagText);
    });
    suggestionPopup.appendChild(suggestionItem);
  });

  suggestionPopup.style.display = "block";
  activeSuggestion = 0;
  const items = suggestionPopup.querySelectorAll(".suggestion-item");
  updateSuggestionHighlight(items);
  positionSuggestionPopup(editor);
}

function cssRgbToHex(red, green, blue) {
  return `#${[red, green, blue]
    .map((value) => Math.max(0, Math.min(255, Number(value) || 0)).toString(16).padStart(2, "0"))
    .join("")}`;
}

function cssColorToHex(rawColor) {
  const value = String(rawColor || "").trim();
  const hexMatch = value.match(/^#([\da-f]{3,8})$/i);
  if (hexMatch) {
    let hex = hexMatch[1];
    if (hex.length === 3 || hex.length === 4) hex = hex.slice(0, 3).split("").map((char) => char + char).join("");
    return `#${hex.slice(0, 6).padEnd(6, "0")}`.toLowerCase();
  }
  try {
    const context = document.createElement("canvas").getContext("2d");
    context.fillStyle = "#000000";
    context.fillStyle = value;
    const normalized = context.fillStyle;
    if (/^#[\da-f]{6}$/i.test(normalized)) return normalized.toLowerCase();
    const rgbMatch = normalized.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (rgbMatch) return cssRgbToHex(rgbMatch[1], rgbMatch[2], rgbMatch[3]);
  } catch (_err) {
    // Use black when the CSS value cannot be represented by a native color input.
  }
  return "#000000";
}

function cssHexToRgb(hex) {
  const normalized = cssColorToHex(hex).slice(1);
  return {
    red: Number.parseInt(normalized.slice(0, 2), 16),
    green: Number.parseInt(normalized.slice(2, 4), 16),
    blue: Number.parseInt(normalized.slice(4, 6), 16),
  };
}

function closeCssColorPicker() {
  activeCssColorPicker?.remove();
  activeCssColorPicker = null;
}

function getInlineCssColorTokenAtPoint(clientX, clientY) {
  const tokens = highlightLayer?.querySelectorAll(".css-color-value[data-css-color-start]") || [];
  for (const token of tokens) {
    const rect = token.getBoundingClientRect();
    const fontSize = Number.parseFloat(window.getComputedStyle(token).fontSize) || 13;
    const swatchLeft = rect.left - 1;
    const swatchRight = rect.left + fontSize * 0.9 + 2;
    if (
      clientX >= swatchLeft &&
      clientX <= swatchRight &&
      clientY >= rect.top - 2 &&
      clientY <= rect.bottom + 2
    ) {
      return token;
    }
  }
  return null;
}

function handleInlineCssColorSwatchPointerDown(event) {
  if (event.button !== 0 || !["css", "html"].includes(activeFile?.type)) return;
  const token = getInlineCssColorTokenAtPoint(event.clientX, event.clientY);
  if (!token) return;
  const replaceStart = Number(token.dataset.cssColorStart);
  const replaceEnd = Number(token.dataset.cssColorEnd);
  if (!Number.isInteger(replaceStart) || !Number.isInteger(replaceEnd) || replaceEnd <= replaceStart) return;
  event.preventDefault();
  event.stopPropagation();
  currentSuggestionContext = {
    mode: "css-value",
    propertyName: "color",
    prefix: token.textContent || "",
    replaceStart,
    replaceEnd,
  };
  openCssColorPicker(token, token.textContent || "#000000");
}

function openCssColorPicker(anchor, initialValue, onSelect = null, pickerTitle = "Choose color") {
  closeCssColorPicker();
  const initialHex = cssColorToHex(initialValue);
  const presets = [
    "#000000", "#333333", "#64748b", "#ffffff", "#ef4444", "#f97316", "#eab308", "#22c55e",
    "#14b8a6", "#06b6d4", "#0ea5e9", "#3b82f6", "#6366f1", "#8b5cf6", "#a855f7", "#ec4899",
    "#7f1d1d", "#78350f", "#14532d", "#134e4a", "#164e63", "#1e3a8a", "#4c1d95", "#831843",
  ];
  const picker = document.createElement("div");
  picker.className = "css-color-picker-popover";
  picker.setAttribute("role", "dialog");
  picker.setAttribute("aria-label", pickerTitle);
  picker.innerHTML = `
    <div class="css-color-picker-header">
      <strong>${escapeHtml(pickerTitle)}</strong>
      <button class="css-color-picker-close" type="button" aria-label="Close color picker">&times;</button>
    </div>
    <div class="css-color-picker-custom">
      <input class="css-native-color-input" type="color" value="${initialHex}" aria-label="Open visual color picker">
      <input class="css-color-hex-input" type="text" value="${initialHex}" maxlength="7" aria-label="HEX color">
    </div>
    <div class="css-color-presets" aria-label="Preset colors">
      ${presets.map((color) => `<button class="css-color-preset" type="button" data-color="${color}" style="background:${color}" aria-label="Use ${color}"></button>`).join("")}
    </div>
    <div class="css-color-picker-rgb">
      <label><input class="css-color-red" type="number" min="0" max="255">R</label>
      <label><input class="css-color-green" type="number" min="0" max="255">G</label>
      <label><input class="css-color-blue" type="number" min="0" max="255">B</label>
    </div>
    <div class="css-color-picker-actions">
      <button class="css-color-cancel" type="button">Cancel</button>
      <button class="css-color-apply" type="button">Apply</button>
    </div>
  `;
  const pickerHost = anchor.closest?.("[role='dialog']") || document.body;
  pickerHost.appendChild(picker);
  activeCssColorPicker = picker;

  const nativeInput = picker.querySelector(".css-native-color-input");
  const hexInput = picker.querySelector(".css-color-hex-input");
  const redInput = picker.querySelector(".css-color-red");
  const greenInput = picker.querySelector(".css-color-green");
  const blueInput = picker.querySelector(".css-color-blue");
  const setFieldsFromHex = (hex) => {
    const normalized = cssColorToHex(hex);
    const rgb = cssHexToRgb(normalized);
    nativeInput.value = normalized;
    hexInput.value = normalized;
    redInput.value = rgb.red;
    greenInput.value = rgb.green;
    blueInput.value = rgb.blue;
  };
  const setFieldsFromRgb = () => setFieldsFromHex(cssRgbToHex(redInput.value, greenInput.value, blueInput.value));
  const applyColor = (color, closeAfterApply = false) => {
    const normalized = cssColorToHex(color);
    if (typeof onSelect === "function") {
      onSelect(normalized);
      if (closeAfterApply) closeCssColorPicker();
      return;
    }
    selectCssSuggestion(normalized);
  };
  setFieldsFromHex(initialHex);

  nativeInput.addEventListener("input", () => {
    setFieldsFromHex(nativeInput.value);
    if (typeof onSelect === "function") onSelect(nativeInput.value);
  });
  nativeInput.addEventListener("change", () => {
    if (typeof onSelect === "function") {
      setFieldsFromHex(nativeInput.value);
      onSelect(nativeInput.value);
    } else {
      applyColor(nativeInput.value);
    }
  });
  hexInput.addEventListener("input", () => {
    if (/^#[\da-f]{6}$/i.test(hexInput.value.trim())) {
      setFieldsFromHex(hexInput.value.trim());
      if (typeof onSelect === "function") onSelect(hexInput.value.trim());
    }
  });
  hexInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") applyColor(hexInput.value);
  });
  [redInput, greenInput, blueInput].forEach((input) => input.addEventListener("input", () => {
    setFieldsFromRgb();
    if (typeof onSelect === "function") onSelect(hexInput.value);
  }));
  picker.querySelectorAll(".css-color-preset").forEach((button) => {
    button.addEventListener("click", () => {
      if (typeof onSelect === "function") {
        setFieldsFromHex(button.dataset.color);
        onSelect(button.dataset.color);
      } else {
        applyColor(button.dataset.color);
      }
    });
  });
  picker.querySelector(".css-color-picker-close").addEventListener("click", closeCssColorPicker);
  picker.querySelector(".css-color-cancel").addEventListener("click", () => {
    if (typeof onSelect === "function") onSelect(initialHex);
    closeCssColorPicker();
  });
  picker.querySelector(".css-color-apply").addEventListener("click", () => applyColor(hexInput.value, true));
  picker.addEventListener("pointerdown", (event) => event.stopPropagation());

  const anchorRect = anchor.getBoundingClientRect();
  const pickerRect = picker.getBoundingClientRect();
  const left = Math.max(10, Math.min(anchorRect.left, window.innerWidth - pickerRect.width - 10));
  const belowTop = anchorRect.bottom + 8;
  const top = belowTop + pickerRect.height <= window.innerHeight - 10
    ? belowTop
    : Math.max(10, anchorRect.top - pickerRect.height - 8);
  picker.style.left = `${left}px`;
  picker.style.top = `${top}px`;
  hexInput.focus();
  hexInput.select();
}

document.addEventListener("pointerdown", (event) => {
  if (activeCssColorPicker && !activeCssColorPicker.contains(event.target)) closeCssColorPicker();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && activeCssColorPicker) closeCssColorPicker();
});

function showCssSuggestions(editor, suggestions, mode) {
  suggestionPopup.innerHTML = "";
  suggestionPopup.dataset.mode = mode;

  const header = document.createElement("div");
  header.className = "suggestion-header";
  const title =
    mode === "css-property"
      ? "CSS properties"
      : mode === "css-value"
        ? "CSS values"
        : "CSS selectors";
  header.innerHTML = `
    <span>${title} (${suggestions.length})</span>
    <span class="suggestion-shortcuts">
      <span class="suggestion-shortcut">Enter</span>
      <span class="suggestion-shortcut">Tab</span>
      <span class="suggestion-shortcut">Esc</span>
    </span>
  `;
  suggestionPopup.appendChild(header);

  suggestions.forEach((entry) => {
    const suggestionItem = document.createElement("div");
    suggestionItem.className = "suggestion-item";
    const preview = entry.swatch
      ? `<button class="suggestion-color-preview" type="button" style="background:${escapeHtml(entry.swatch)}" aria-label="Choose a color for ${escapeHtml(entry.value)}"></button>`
      : "";
    suggestionItem.innerHTML = `
      ${preview ? "" : '<span class="suggestion-icon">CSS</span>'}
      <span class="suggestion-content">
        <div class="suggestion-tag${preview ? " suggestion-tag-color" : ""}">${preview}<span>${escapeHtml(entry.value)}</span></div>
        <div class="suggestion-desc">${escapeHtml(entry.desc || "CSS suggestion")}</div>
      </span>
    `;
    suggestionItem.dataset.tag = entry.value;
    suggestionItem.addEventListener("mousedown", (e) => {
      e.preventDefault();
      selectSuggestion(entry.value);
    });
    const colorButton = suggestionItem.querySelector(".suggestion-color-preview");
    if (colorButton) {
      colorButton.addEventListener("mousedown", (event) => {
        event.preventDefault();
        event.stopPropagation();
      });
      colorButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        openCssColorPicker(colorButton, entry.value);
      });
    }
    suggestionPopup.appendChild(suggestionItem);
  });

  suggestionPopup.style.display = "block";
  activeSuggestion = 0;
  const items = suggestionPopup.querySelectorAll(".suggestion-item");
  updateSuggestionHighlight(items);
  positionSuggestionPopup(editor);
}

function showHtmlAttributeSuggestions(editor, suggestions) {
  suggestionPopup.innerHTML = "";
  suggestionPopup.dataset.mode = "html-attr";

  const header = document.createElement("div");
  header.className = "suggestion-header";
  header.innerHTML = `
    <span>HTML attributes (${suggestions.length})</span>
    <span class="suggestion-shortcuts">
      <span class="suggestion-shortcut">Enter</span>
      <span class="suggestion-shortcut">Tab</span>
      <span class="suggestion-shortcut">Esc</span>
    </span>
  `;
  suggestionPopup.appendChild(header);

  suggestions.forEach((entry) => {
    const suggestionItem = document.createElement("div");
    suggestionItem.className = "suggestion-item";
    suggestionItem.innerHTML = `
      <span class="suggestion-icon">ATTR</span>
      <span class="suggestion-content">
        <div class="suggestion-tag">${escapeHtml(entry.value)}</div>
        <div class="suggestion-desc">${escapeHtml(entry.desc || "HTML attribute")}</div>
      </span>
    `;
    suggestionItem.dataset.tag = entry.value;
    suggestionItem.addEventListener("mousedown", (e) => {
      e.preventDefault();
      selectSuggestion(entry.value);
    });
    suggestionPopup.appendChild(suggestionItem);
  });

  suggestionPopup.style.display = "block";
  activeSuggestion = 0;
  const items = suggestionPopup.querySelectorAll(".suggestion-item");
  updateSuggestionHighlight(items);
  positionSuggestionPopup(editor);
}

function showJsSuggestions(editor, suggestions, mode = "js") {
  suggestionPopup.innerHTML = "";
  suggestionPopup.dataset.mode = mode;
  const title = mode === "env" ? "Environment variables" : mode === "html-value" ? "HTML values" : "JavaScript";
  const icon = mode === "env" ? "ENV" : mode === "html-value" ? "HTML" : "JS";

  const header = document.createElement("div");
  header.className = "suggestion-header";
  header.innerHTML = `
    <span>${title} (${suggestions.length})</span>
    <span class="suggestion-shortcuts">
      <span class="suggestion-shortcut">Enter</span>
      <span class="suggestion-shortcut">Tab</span>
      <span class="suggestion-shortcut">Esc</span>
    </span>
  `;
  suggestionPopup.appendChild(header);

  suggestions.forEach((entry) => {
    const suggestionItem = document.createElement("div");
    suggestionItem.className = "suggestion-item";
    suggestionItem.innerHTML = `
      <span class="suggestion-icon">${icon}</span>
      <span class="suggestion-content">
        <div class="suggestion-tag">${escapeHtml(entry.value)}</div>
        <div class="suggestion-desc">${escapeHtml(entry.desc || "JavaScript suggestion")}</div>
      </span>
    `;
    suggestionItem.dataset.tag = entry.value;
    suggestionItem.addEventListener("mousedown", (e) => {
      e.preventDefault();
      selectSuggestion(entry.value);
    });
    suggestionPopup.appendChild(suggestionItem);
  });

  suggestionPopup.style.display = "block";
  activeSuggestion = 0;
  const items = suggestionPopup.querySelectorAll(".suggestion-item");
  updateSuggestionHighlight(items);
  positionSuggestionPopup(editor);
}

function showFileSuggestions(editor, fileSuggestions, prefix, context = null) {
  suggestionPopup.innerHTML = "";
  suggestionPopup.dataset.mode = "file";
  currentSuggestionContext = context;

  const header = document.createElement("div");
  header.className = "suggestion-header";
  header.innerHTML = `
    <span>Project files (${fileSuggestions.length})</span>
    <span class="suggestion-shortcuts">
      <span class="suggestion-shortcut">Enter</span>
      <span class="suggestion-shortcut">Tab</span>
      <span class="suggestion-shortcut">Esc</span>
    </span>
  `;
  suggestionPopup.appendChild(header);

  const q = (prefix || "").toLowerCase().replace(/^\.?\//, "");
  fileSuggestions.forEach((fileName) => {
    const suggestionItem = document.createElement("div");
    suggestionItem.className = "suggestion-item";

    const normalized = fileName.toLowerCase().replace(/^\.?\//, "");
    const idx = q ? normalized.indexOf(q) : -1;
    const highlightedName =
      idx > -1
        ? `${escapeHtml(fileName.slice(0, idx))}<span class="highlight">${escapeHtml(
            fileName.slice(idx, idx + q.length),
          )}</span>${escapeHtml(fileName.slice(idx + q.length))}`
        : escapeHtml(fileName);

    suggestionItem.innerHTML = `
      <span class="suggestion-icon">${escapeHtml(getFileIcon(fileName))}</span>
      <span class="suggestion-content">
        <div class="suggestion-tag">${highlightedName}</div>
        <div class="suggestion-desc">Use file path in current attribute</div>
      </span>
    `;
    suggestionItem.dataset.tag = fileName;
    suggestionItem.addEventListener("mousedown", (ev) => {
      ev.preventDefault();
      selectSuggestion(fileName);
    });
    suggestionPopup.appendChild(suggestionItem);
  });

  suggestionPopup.style.display = "block";
  activeSuggestion = 0;
  const items = suggestionPopup.querySelectorAll(".suggestion-item");
  updateSuggestionHighlight(items);
  positionSuggestionPopup(editor);
}

function getSmartHtmlTagCapture(editor, tagName, prefixStart) {
  const lineStart = editor.value.lastIndexOf("\n", Math.max(0, prefixStart - 1)) + 1;
  const beforePrefix = editor.value.slice(lineStart, prefixStart);
  if (!/\s$/.test(beforePrefix)) return null;

  const leadingIndent = beforePrefix.match(/^\s*/)?.[0] || "";
  const rawValue = beforePrefix.slice(leadingIndent.length).trim();
  if (!rawValue || rawValue === "<" || rawValue === "</") return null;

  const unquotedValue = rawValue.replace(/^(['"])([\s\S]*)\1$/, "$2").trim();
  if (!unquotedValue) return null;

  const tag = String(tagName || "").toLowerCase();
  const attrValue = escapeHtmlAttributeValue(unquotedValue);
  const textValue = escapeHtml(unquotedValue);
  const fileExt = getFileType(unquotedValue);
  const looksLikeUrl = /^(https?:\/\/|mailto:|tel:|#|\/|\.\/|\.\.\/)/i.test(unquotedValue);
  const imageExts = new Set(["png", "jpg", "jpeg", "gif", "svg", "webp", "ico", "avif"]);
  const audioExts = new Set(["mp3", "wav", "ogg", "m4a"]);
  const videoExts = new Set(["mp4", "webm", "mov", "ogg"]);

  let insertedText = "";
  let cursorOffset = 0;

  if (tag === "a") {
    insertedText = `<a href="${attrValue}"></a>`;
    cursorOffset = insertedText.indexOf("></") + 1;
  } else if (tag === "img") {
    insertedText = `<img src="${attrValue}" alt="">`;
    cursorOffset = insertedText.indexOf('alt=""') + 5;
  } else if (tag === "link") {
    const rel = fileExt === "css" ? ' rel="stylesheet"' : "";
    insertedText = `<link${rel} href="${attrValue}">`;
    cursorOffset = insertedText.length;
  } else if (tag === "script") {
    insertedText = `<script src="${attrValue}"></script>`;
    cursorOffset = insertedText.length;
  } else if (tag === "iframe") {
    insertedText = `<iframe src="${attrValue}"></iframe>`;
    cursorOffset = insertedText.indexOf("></") + 1;
  } else if (tag === "source") {
    insertedText = `<source src="${attrValue}">`;
    cursorOffset = insertedText.length;
  } else if (tag === "video" || (tag === "audio" && (audioExts.has(fileExt) || looksLikeUrl))) {
    insertedText = `<${tag} controls src="${attrValue}"></${tag}>`;
    cursorOffset = insertedText.length;
  } else if (tag === "form") {
    insertedText = `<form action="${attrValue}"></form>`;
    cursorOffset = insertedText.indexOf("></") + 1;
  } else if (tag === "input") {
    insertedText = `<input type="text" value="${attrValue}">`;
    cursorOffset = insertedText.length;
  } else if (tag === "option") {
    insertedText = `<option value="${attrValue}">${textValue}</option>`;
    cursorOffset = insertedText.length;
  } else if (
    looksLikeUrl ||
    imageExts.has(fileExt) ||
    audioExts.has(fileExt) ||
    videoExts.has(fileExt) ||
    fileExt === "css" ||
    fileExt === "js" ||
    fileExt === "mjs"
  ) {
    return null;
  } else if (!selfClosingTags.includes(tag)) {
    insertedText = `<${tag}>${textValue}</${tag}>`;
    cursorOffset = insertedText.length;
  } else {
    return null;
  }

  return {
    replaceStart: lineStart + leadingIndent.length,
    insertedText,
    caretPos: lineStart + leadingIndent.length + cursorOffset,
  };
}

/**
 * Inserts the selected suggestion into the editor.
 */
function selectSuggestion(tag) {
  const mode = suggestionPopup.dataset.mode;
  if (mode === "file") {
    selectFileSuggestion(tag);
    return;
  }
  if (
    mode === "css-property" ||
    mode === "css-value" ||
    mode === "css-selector" ||
    mode === "css-inline-property" ||
    mode === "css-inline-value"
  ) {
    selectCssSuggestion(tag);
    return;
  }
  if (mode === "js" || mode === "env" || mode === "html-value") {
    selectJsSuggestion(tag);
    return;
  }
  if (mode === "html-attr") {
    selectHtmlAttributeSuggestion(tag);
    return;
  }

  const editor = document.getElementById("activeEditor");
  const pos = editor.selectionStart;
  const textBefore = editor.value.substring(0, pos);
  const isClosing = mode === "tag-closing";
  const isPlain = mode === "tag-plain";
  const triggerMatch = isClosing
    ? textBefore.match(/<\/([a-zA-Z0-9-]*)$/)
    : isPlain
      ? textBefore.match(/(?:^|[\s>])([a-zA-Z][a-zA-Z0-9:-]*)$/)
      : textBefore.match(/<([a-zA-Z][a-zA-Z0-9:-]*)$/);

  if (!triggerMatch) return;

  const prefix = triggerMatch[1];
  const textBeforeTrigger = textBefore.substring(
    0,
    textBefore.length - prefix.length,
  );
  const textAfter = editor.value.substring(editor.selectionEnd);
  const suggestionMeta = htmlTagMetaMap.get(tag);

  if (suggestionMeta && suggestionMeta.insertText) {
    const replaceStart = isPlain
      ? textBefore.length - prefix.length
      : textBefore.length - prefix.length - 1;
    const insertedText = suggestionMeta.insertText;
    const emptyQuoteIndex = insertedText.indexOf('""');
    const emptyTagIndex = insertedText.indexOf("></");
    const caretPos =
      emptyQuoteIndex > -1
        ? replaceStart + emptyQuoteIndex + 1
        : emptyTagIndex > -1
          ? replaceStart + emptyTagIndex + 1
          : replaceStart + insertedText.length;
    applyEditorMutation(
      editor,
      replaceStart,
      editor.selectionEnd,
      insertedText,
      caretPos,
      caretPos,
    );
    hideSuggestions();
    editor.focus();
    return;
  }

  const plainPrefixStart = textBefore.length - prefix.length;
  if (!isClosing && isPlain) {
    const smartCapture = getSmartHtmlTagCapture(editor, tag, plainPrefixStart);
    if (smartCapture) {
      applyEditorMutation(
        editor,
        smartCapture.replaceStart,
        editor.selectionEnd,
        smartCapture.insertedText,
        smartCapture.caretPos,
        smartCapture.caretPos,
      );
      hideSuggestions();
      editor.focus();
      return;
    }
  }

  let insertedTag = isPlain ? `<${tag}>` : `${tag}>`;
  if (!isClosing && tag === "a") {
    insertedTag = `<a href="">`;
  }
  const shouldAutoClose = !isClosing && !selfClosingTags.includes(tag);
  const closingTag = shouldAutoClose ? `</${tag}>` : "";
  const replaceStart = textBefore.length - prefix.length;
  const insertedText = insertedTag + closingTag;
  let caretPos = textBeforeTrigger.length + insertedTag.length;
  if (tag === "a" && !isClosing) {
    const hrefPos = insertedTag.indexOf("href=\"");
    if (hrefPos !== -1) {
      caretPos = textBeforeTrigger.length + hrefPos + 6;
    }
  }
  applyEditorMutation(
    editor,
    replaceStart,
    editor.selectionEnd,
    insertedText,
    caretPos,
    caretPos,
  );

  hideSuggestions();
  editor.focus();
}

function selectJsSuggestion(value) {
  const editor = document.getElementById("activeEditor");
  if (!currentSuggestionContext) return;

  const { replaceStart, replaceEnd } = currentSuggestionContext;
  const entry = jsSuggestions.find((item) => item.value === value);
  const insertText = entry ? entry.insertText || entry.value : value;
  let cursorOffset = insertText.length;
  const quotePos = insertText.indexOf("\"\"");
  if (quotePos > -1) {
    cursorOffset = quotePos + 1;
  } else {
    const parenPos = insertText.indexOf("()");
    if (parenPos > -1) {
      cursorOffset = parenPos + 1;
    } else {
      const braceLine = insertText.indexOf("\n" + INDENT_UNIT);
      if (braceLine > -1) {
        cursorOffset = braceLine + 1 + INDENT_UNIT.length;
      }
    }
  }

  const caretPos = replaceStart + cursorOffset;
  applyEditorMutation(
    editor,
    replaceStart,
    replaceEnd,
    insertText,
    caretPos,
    caretPos,
  );
  hideSuggestions();
  editor.focus();
}

function indentMultilineSuggestionText(insertText, cursorOffset, baseIndent) {
  const text = String(insertText || "");
  const indent = String(baseIndent || "");
  if (!indent || !text.includes("\n")) {
    return { text, cursorOffset };
  }
  let nextCursorOffset = Number(cursorOffset || 0);
  let consumed = 0;
  const lines = text.split("\n");
  const nextText = lines
    .map((line, index) => {
      const shouldIndent = index > 0 && line;
      const nextLine = shouldIndent ? indent + line : line;
      if (shouldIndent && consumed < nextCursorOffset) {
        nextCursorOffset += indent.length;
      }
      consumed += line.length + (index < lines.length - 1 ? 1 : 0);
      return nextLine;
    })
    .join("\n");
  return { text: nextText, cursorOffset: nextCursorOffset };
}

function selectHtmlAttributeSuggestion(attrName) {
  const editor = document.getElementById("activeEditor");
  if (!currentSuggestionContext) return;

  const { replaceStart, replaceEnd } = currentSuggestionContext;
  const lowerAttr = attrName.toLowerCase();
  const booleanAttrs = new Set([
    "controls",
    "autoplay",
    "loop",
    "muted",
    "required",
    "disabled",
    "checked",
    "selected",
    "hidden",
    "readonly",
    "multiple",
  ]);

  const needsQuotedValue =
    !booleanAttrs.has(lowerAttr) && lowerAttr !== "data-*";
  const insertedText = needsQuotedValue
    ? `${attrName}=""`
    : attrName === "data-*"
      ? 'data-=""'
      : attrName;

  const cursorOffset =
    attrName === "data-*"
      ? 5
      : lowerAttr === "style"
        ? insertedText.indexOf('""') + 1
        : needsQuotedValue
          ? insertedText.length - 1
          : insertedText.length;
  const caretPos = replaceStart + cursorOffset;
  applyEditorMutation(
    editor,
    replaceStart,
    replaceEnd,
    insertedText,
    caretPos,
    caretPos,
  );
  hideSuggestions();
  editor.focus();
}

function selectCssSuggestion(value) {
  const editor = document.getElementById("activeEditor");
  if (!currentSuggestionContext) return;

  const { mode, replaceStart, replaceEnd } = currentSuggestionContext;
  const lineStart = editor.value.lastIndexOf("\n", Math.max(0, replaceStart - 1)) + 1;
  const currentIndent = (editor.value.slice(lineStart, replaceStart).match(/^[\t ]*/) || [""])[0];
  let finalReplaceEnd = replaceEnd;
  let insertedText = value;
  let cursorOffset = value.length;

  if (mode === "css-property") {
    const afterSlice = editor.value.substring(replaceEnd);
    const suffixMatch = afterSlice.match(/^\s*:\s*;?/);
    if (suffixMatch) {
      finalReplaceEnd += suffixMatch[0].length;
    }
    insertedText = `${value}: ;`;
    cursorOffset = value.length + 2;
  } else if (mode === "css-inline-property") {
    const afterSlice = editor.value.substring(replaceEnd);
    const suffixMatch = afterSlice.match(/^\s*:\s*;?/);
    if (suffixMatch) {
      finalReplaceEnd += suffixMatch[0].length;
    }
    insertedText = `${value}: ;`;
    cursorOffset = value.length + 2;
  } else if (mode === "css-inline-value") {
    const afterSlice = editor.value.substring(replaceEnd);
    if (/^\s*;/.test(afterSlice)) {
      insertedText = value;
      cursorOffset = insertedText.length;
    } else {
      insertedText = `${value}; `;
      cursorOffset = insertedText.length;
    }
  } else if (mode === "css-value") {
    const afterSlice = editor.value.substring(replaceEnd);
    if (/^\s*[;},)]/.test(afterSlice) || afterSlice === "") {
      insertedText = value;
      cursorOffset = insertedText.length;
    } else {
      insertedText = `${value} `;
      cursorOffset = insertedText.length;
    }
  } else if (mode === "css-selector") {
    const afterSlice = editor.value.substring(replaceEnd);
    if (!/^\s*\{/.test(afterSlice)) {
      insertedText = `${value} {\n${INDENT_UNIT}\n}`;
      cursorOffset = value.length + 3 + INDENT_UNIT.length;
    }
  }

  if (insertedText.includes("\n")) {
    const formatted = indentMultilineSuggestionText(insertedText, cursorOffset, currentIndent);
    insertedText = formatted.text;
    cursorOffset = formatted.cursorOffset;
  }

  const caretPos = replaceStart + cursorOffset;
  applyEditorMutation(
    editor,
    replaceStart,
    finalReplaceEnd,
    insertedText,
    caretPos,
    caretPos,
  );
  hideSuggestions();
  editor.focus();
}

function selectFileSuggestion(filePath) {
  const editor = document.getElementById("activeEditor");
  const pos = editor.selectionStart;
  const textBefore = editor.value.substring(0, pos);
  const fallbackMatch = textBefore.match(
    /(<[a-zA-Z0-9-]+[^<>]*\b(?:href|src)=["'])([^"']*)$/i,
  );
  const context = currentSuggestionContext?.mode === "file" ? currentSuggestionContext : null;
  const typedPrefix = context?.valuePrefix ?? fallbackMatch?.[2] ?? "";
  const replaceStart = context?.replaceStart ?? (fallbackMatch ? pos - typedPrefix.length : -1);
  const replaceEnd = context?.replaceEnd ?? editor.selectionEnd;
  if (replaceStart < 0) return;
  let finalPath = filePath;
  if (/^\.\//.test(typedPrefix) && !finalPath.startsWith("./")) {
    finalPath = `./${finalPath}`;
  }

  const caretPos = replaceStart + finalPath.length;
  applyEditorMutation(
    editor,
    replaceStart,
    replaceEnd,
    finalPath,
    caretPos,
    caretPos,
  );
  hideSuggestions();
  editor.focus();
}

/**
 * Highlights the active suggestion item during keyboard navigation.
 */
function updateSuggestionHighlight(items) {
  items.forEach((item, index) => {
    if (index === activeSuggestion) {
      item.classList.add("active");
      // Ensure the active item is visible
      item.scrollIntoView({ block: "nearest" });
    } else {
      item.classList.remove("active");
    }
  });
}

// PART 6.7 - AUTO-CLOSING & INDENTATION LOGIC

/**
 * Handles auto-closing of brackets/parentheses and indentation on 'Enter'.
 * This is specific for CSS and JS files.
 */
function handleAutoCloseAndIndent(e, editor) {
  const fileType = activeFile.type;
  const pos = editor.selectionStart;
  const textBefore = editor.value.substring(0, pos);
  const textAfter = editor.value.substring(pos);
  const isCssContext = fileType === "css" || (fileType === "html" && isInsideStyleTag(textBefore));
  const isJsContext = fileType === "js" || (fileType === "html" && isInsideScriptTag(textBefore));

  // 1. Indent level calculation (Find the indentation of the current line)
  const lineStart = textBefore.lastIndexOf("\n") + 1;
  const currentLine = textBefore.substring(lineStart);
  const currentIndentMatch = currentLine.match(/^(\s*)/);
  const currentIndent = currentIndentMatch ? currentIndentMatch[1] : "";

  // 2. Check for an immediate auto-close/indent trigger
  let autoClosePair = null; // Stores { or (
  let isTriggered = false;
  let closingChar = "";
  let insertNewlines = 1;

  if (isCssContext || isJsContext) {
    // Check for { (CSS blocks or JS objects/functions)
    if (e.key === "{") {
      autoClosePair = "{";
      closingChar = "}";
    }
    // Check for ( (JS function calls or definitions)
    else if (isJsContext && e.key === "(") {
      autoClosePair = "(";
      closingChar = ")";
    }
    // Check for Enter key press on an opening brace/parenthesis
    else if (
      (e.key === "Enter" &&
        (textBefore.endsWith("{") || textBefore.endsWith("(")) &&
        (textAfter.startsWith("}") || textAfter.startsWith(")")))
    ) {
      // User is inside a pair like {} or () and hits Enter
      isTriggered = true;
      insertNewlines = 2; // Insert two newlines to create space for content
      // Find the appropriate closing character based on what's before/after
      if (textBefore.endsWith("{") && textAfter.startsWith("}"))
        closingChar = "}";
      if (textBefore.endsWith("(") && textAfter.startsWith(")"))
        closingChar = ")";
    }
  }

  // --- A. Handle typing an opening bracket/parenthesis ({ or () ---
  if (autoClosePair) {
    e.preventDefault(); // Stop default { or ( insertion

    const newIndent = currentIndent;
    applyEditorMutation(editor, pos, editor.selectionEnd, autoClosePair + closingChar, pos + 1, pos + 1);

    return true; // Handled
  }

  // --- B. Handle Enter key press for indentation ---
  if (e.key === "Enter") {
    e.preventDefault(); // Stop default new line insertion

    let newContent;
    let newCursorPos;
    let indentation = currentIndent;

    if (textBefore.endsWith("{") || textBefore.endsWith("(") || isTriggered) {
      // We need to increase indentation for the next line
      const nextIndent = currentIndent + INDENT_UNIT;

      if (textBefore.endsWith("{") || textBefore.endsWith("(")) {
        // Case 1: Cursor immediately after { or (

        // --- 💡 MODIFICATION START ---
        const autoClosingBracket = textBefore.endsWith("{") ? "}" : ")";

        // Check if the corresponding closing bracket already exists right after the cursor
        const closingExists = textAfter.startsWith(autoClosingBracket);

        if (closingExists) {
          // Scenario: { | } -> Newline + Indent + Newline + CurrentIndent + }
          // This is essentially the same logic as 'isTriggered' but applied to the {|} case
          newContent =
            textBefore + "\n" + nextIndent + "\n" + currentIndent + textAfter;
          newCursorPos = pos + 1 + nextIndent.length; // Pos + \n + newIndent
        } else {
          // Scenario: { | -> Newline + Indent + Newline + CurrentIndent + autoClosingBracket
          // Insert: newline + indent + newline + closing bracket
          newContent =
            textBefore +
            "\n" +
            nextIndent +
            "\n" +
            currentIndent +
            autoClosingBracket +
            textAfter;
          newCursorPos = pos + 1 + nextIndent.length; // Pos + \n + newIndent
        }
        // --- 💡 MODIFICATION END ---
      } else if (isTriggered) {
        // Case 2: Cursor inside {} or () where Enter was pressed (e.g., body{ | } )
        // Insert: newline + indent + newline
        newContent =
          textBefore + "\n" + nextIndent + "\n" + currentIndent + textAfter;
        newCursorPos = pos + 1 + nextIndent.length; // Pos + \n + newIndent
      }
    } else {
      // Case 3: Simple Enter press - just maintain current indentation
      newContent = textBefore + "\n" + currentIndent + textAfter;
      newCursorPos = pos + 1 + currentIndent.length;
    }

    // ... (rest of the Enter handler code) ...
    applyEditorMutation(
      editor,
      0,
      editor.value.length,
      newContent,
      newCursorPos,
      newCursorPos,
    );

    return true; // Handled
  }

  return false; // Not handled
}

function handleHtmlEnterIndentation(e, editor) {
  if (e.key !== "Enter" || activeFile.type !== "html") return false;
  const pos = editor.selectionStart;
  const textBefore = editor.value.substring(0, pos);
  const textAfter = editor.value.substring(editor.selectionEnd);
  const lineStart = textBefore.lastIndexOf("\n") + 1;
  const currentLine = textBefore.substring(lineStart);
  const currentIndentMatch = currentLine.match(/^(\s*)/);
  const currentIndent = currentIndentMatch ? currentIndentMatch[1] : "";
  const openTagMatch = textBefore.match(/<([a-zA-Z][\w-]*)(?:\s[^<>]*)?>$/);

  if (openTagMatch) {
    const tagName = openTagMatch[1].toLowerCase();
    const closingTagPattern = new RegExp(`^</${tagName}\\s*>`, "i");
    if (!selfClosingTags.includes(tagName)) {
      const nextIndent = currentIndent + INDENT_UNIT;
      e.preventDefault();
      const replacement = closingTagPattern.test(textAfter)
        ? "\n" + nextIndent + "\n" + currentIndent
        : "\n" + nextIndent;
      const caretPos = pos + 1 + nextIndent.length;
      applyEditorMutation(editor, pos, editor.selectionEnd, replacement, caretPos, caretPos);
      return true;
    }
  }

  e.preventDefault();
  applyEditorMutation(
    editor,
    pos,
    editor.selectionEnd,
    "\n" + currentIndent,
    pos + 1 + currentIndent.length,
    pos + 1 + currentIndent.length,
  );
  return true;
}

function getOpenHtmlTagBeforeCaret(textBefore) {
  const lastLt = textBefore.lastIndexOf("<");
  const lastGt = textBefore.lastIndexOf(">");
  if (lastLt === -1 || lastGt > lastLt) return null;
  const openTagText = textBefore.slice(lastLt);
  if (/^<\//.test(openTagText) || /\/\s*$/.test(openTagText)) return null;
  const tagMatch = openTagText.match(/^<([a-zA-Z][a-zA-Z0-9-]*)\b/i);
  if (!tagMatch) return null;
  return {
    tagName: tagMatch[1].toLowerCase(),
    openTagText,
  };
}

function handleHtmlAttributeValueCompletion(e, editor) {
  if (!activeFile || activeFile.type !== "html") return false;
  if (e.key !== "=" && e.key !== " ") return false;

  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const textBefore = editor.value.substring(0, start);
  if (isInsideStyleTag(textBefore) || isInsideScriptTag(textBefore)) return false;

  const tagContext = getOpenHtmlTagBeforeCaret(textBefore);
  if (!tagContext) return false;

  if (e.key === " " && tagContext.tagName === "a") {
    const hasHref = /\bhref\s*=/.test(tagContext.openTagText);
    const endsAtTagName = /^<a$/i.test(tagContext.openTagText);
    if (!hasHref && endsAtTagName) {
      e.preventDefault();
      const insertedText = ' href=""';
      const caretPos = start + insertedText.length - 1;
      applyEditorMutation(editor, start, end, insertedText, caretPos, caretPos);
      return true;
    }
  }

  const attrMatch = tagContext.openTagText.match(/\s([a-zA-Z_:][-a-zA-Z0-9_:.]*)$/);
  if (!attrMatch) return false;

  const attrName = attrMatch[1].toLowerCase();
  const booleanAttrs = new Set([
    "controls",
    "autoplay",
    "loop",
    "muted",
    "required",
    "disabled",
    "checked",
    "selected",
    "hidden",
    "readonly",
    "multiple",
  ]);
  if (booleanAttrs.has(attrName)) return false;

  e.preventDefault();
  const insertedText = e.key === "=" ? '=""' : '="" ';
  const caretPos = start + 2;
  applyEditorMutation(editor, start, end, insertedText, caretPos, caretPos);
  return true;
}

// PART 6.6 - TAG AUTO-CLOSING & EDITOR KEYDOWN

/**
 * Handles auto-closing of HTML tags when '>' is typed. (Original logic remains)
 */
function handleTagClosing(e) {
  // ... (Keep the original logic here) ...
  if (e.key !== ">") return;
  if (activeFile.type !== "html") return;

  const editor = e.target;
  const pos = editor.selectionStart;
  const textBefore = editor.value.substring(0, pos);

  const tagMatch = textBefore.match(/<([a-zA-Z0-9]+)(?![^>]*\/?>)\s*$/);

  if (tagMatch) {
    const tagName = tagMatch[1];
    if (selfClosingTags.includes(tagName.toLowerCase())) {
      return;
    }

    e.preventDefault();
    const closingTag = `</${tagName}>`;

    const tagNameEnd = tagMatch.index + 1 + tagName.length;
    const trailingSpace = pos - tagNameEnd;
    const insertStart = trailingSpace > 0 ? tagNameEnd : pos;

    applyEditorMutation(
      editor,
      insertStart,
      editor.selectionEnd,
      ">" + closingTag,
      insertStart + 1,
      insertStart + 1,
    );

    const loweredTag = tagName.toLowerCase();
    if (loweredTag === "style" || loweredTag === "script") {
      const after = editor.value.substring(insertStart + 1);
      const wsMatch = after.match(/^\s+(<\/(?:style|script)>)/i);
      if (wsMatch) {
        const wsLen = wsMatch[0].length - wsMatch[1].length;
        if (wsLen > 0) {
          applyEditorMutation(editor, insertStart + 1, insertStart + 1 + wsLen, "", insertStart + 1, insertStart + 1);
        }
      }
    }
  }
}

function expandCxStartShortcut(editor) {
  if (!activeFile || activeFile.type !== "html") return false;

  const pos = editor.selectionStart;
  const textBefore = editor.value.substring(0, pos);
  const lineStart = textBefore.lastIndexOf("\n") + 1;
  const currentLine = textBefore.substring(lineStart);

  if (currentLine.trim() !== "cxstart") return false;

  const linePrefix = currentLine.match(/^\s*/)?.[0] || "";
  const replacement = getDefaultHtmlStarter()
    .split("\n")
    .map((line) => (line ? linePrefix + line : line))
    .join("\n");

  const caretPos = getHtmlStarterCursorPosition(replacement);
  applyEditorMutation(
    editor,
    lineStart,
    editor.selectionEnd,
    replacement,
    caretPos,
    caretPos,
  );
  document.title = "CodX Editor";
  return true;
}

function getEmmetAbbreviationAtCaret(editor) {
  if (!activeFile || activeFile.type !== "html") return null;
  if (editor.selectionStart !== editor.selectionEnd) return null;

  const pos = editor.selectionStart;
  const textBefore = editor.value.substring(0, pos);
  if (isInsideStyleTag(textBefore) || isInsideScriptTag(textBefore)) return null;

  const lineStart = textBefore.lastIndexOf("\n") + 1;
  const lineBeforeCaret = textBefore.substring(lineStart);
  const match = lineBeforeCaret.match(/([!a-zA-Z0-9._#>[\]=:'"{}()+*$-]+)$/);
  if (!match) return null;

  const abbreviation = match[1];
  if (!abbreviation || abbreviation.includes("<")) return null;
  if (!/[.#>[{(+*:]|^!$|^[a-zA-Z][a-zA-Z0-9-]*$/.test(abbreviation)) return null;

  return {
    abbreviation,
    replaceStart: pos - abbreviation.length,
    replaceEnd: pos,
    lineIndent: lineBeforeCaret.match(/^\s*/)?.[0] || "",
  };
}

function parseEmmetAttributes(source) {
  const attrs = {};
  source
    .trim()
    .match(/(?:[^\s"'=]+(?:=(?:"[^"]*"|'[^']*'|[^\s"']+))?)/g)
    ?.forEach((part) => {
      const eqIndex = part.indexOf("=");
      if (eqIndex === -1) {
        attrs[part] = "";
        return;
      }
      const name = part.slice(0, eqIndex);
      const rawValue = part.slice(eqIndex + 1).replace(/^["']|["']$/g, "");
      attrs[name] = rawValue;
    });
  return attrs;
}

function cloneEmmetNode(node) {
  return {
    tag: node.tag,
    id: node.id,
    classes: [...node.classes],
    attrs: { ...node.attrs },
    text: node.text,
    children: node.children.map(cloneEmmetNode),
  };
}

function expandEmmetNumber(value, index) {
  return String(value || "").replace(/\$+/g, (token) =>
    String(index).padStart(token.length, "0"),
  );
}

function parseEmmetAbbreviation(abbreviation) {
  let index = 0;

  const peek = () => abbreviation[index] || "";
  const readWhile = (regex) => {
    let value = "";
    while (index < abbreviation.length && regex.test(abbreviation[index])) {
      value += abbreviation[index];
      index += 1;
    }
    return value;
  };
  const readBalanced = (open, close) => {
    if (peek() !== open) return "";
    index += 1;
    let value = "";
    let quote = "";
    while (index < abbreviation.length) {
      const char = abbreviation[index];
      index += 1;
      if (quote) {
        if (char === quote) quote = "";
        value += char;
        continue;
      }
      if (char === '"' || char === "'") {
        quote = char;
        value += char;
        continue;
      }
      if (char === close) return value;
      value += char;
    }
    return null;
  };
  const readMultiplier = () => {
    if (peek() !== "*") return 1;
    index += 1;
    const count = Number(readWhile(/[0-9]/));
    return Number.isInteger(count) && count > 0 && count <= 100 ? count : 1;
  };

  const parseExpression = (stopOnParen = false) => {
    const siblings = [];
    while (index < abbreviation.length) {
      if (stopOnParen && peek() === ")") break;
      siblings.push(...parseTerm(stopOnParen));
      if (peek() !== "+") break;
      index += 1;
    }
    return siblings;
  };

  const parseTerm = (stopOnParen = false) => {
    const roots = parseAtom(stopOnParen);
    if (!roots.length) return roots;
    if (peek() === ">") {
      index += 1;
      const children = parseExpression(stopOnParen);
      roots.forEach((root) => {
        root.children.push(...children.map(cloneEmmetNode));
      });
    }
    return roots;
  };

  const parseAtom = (stopOnParen = false) => {
    let nodes = [];
    if (peek() === "(") {
      index += 1;
      nodes = parseExpression(true);
      if (peek() !== ")") throw new Error("Unclosed Emmet group");
      index += 1;
    } else {
      nodes = [parseElement()];
    }

    const multiplier = readMultiplier();
    if (multiplier === 1) return nodes;
    const repeated = [];
    for (let itemIndex = 1; itemIndex <= multiplier; itemIndex += 1) {
      nodes.forEach((node) => {
        const clone = cloneEmmetNode(node);
        applyEmmetNumbering(clone, itemIndex);
        repeated.push(clone);
      });
    }
    return repeated;
  };

  const parseElement = () => {
    const node = {
      tag: "",
      id: "",
      classes: [],
      attrs: {},
      text: "",
      children: [],
    };

    if (/[a-zA-Z]/.test(peek())) {
      node.tag = readWhile(/[a-zA-Z0-9-]/);
    }

    while (index < abbreviation.length) {
      const char = peek();
      if (char === "." || char === "#") {
        index += 1;
        const value = readWhile(/[a-zA-Z0-9_$-]/);
        if (!value) throw new Error("Invalid Emmet identifier");
        if (char === ".") node.classes.push(value);
        else node.id = value;
      } else if (char === "[") {
        const rawAttrs = readBalanced("[", "]");
        if (rawAttrs === null) throw new Error("Unclosed Emmet attribute");
        Object.assign(node.attrs, parseEmmetAttributes(rawAttrs));
      } else if (char === "{") {
        const text = readBalanced("{", "}");
        if (text === null) throw new Error("Unclosed Emmet text");
        node.text = text;
      } else {
        break;
      }
    }

    if (!node.tag) node.tag = "div";
    return node;
  };

  const applyEmmetNumbering = (node, number) => {
    node.tag = expandEmmetNumber(node.tag, number);
    node.id = expandEmmetNumber(node.id, number);
    node.classes = node.classes.map((value) => expandEmmetNumber(value, number));
    node.text = expandEmmetNumber(node.text, number);
    Object.keys(node.attrs).forEach((name) => {
      const nextName = expandEmmetNumber(name, number);
      const nextValue = expandEmmetNumber(node.attrs[name], number);
      if (nextName !== name) delete node.attrs[name];
      node.attrs[nextName] = nextValue;
    });
    node.children.forEach((child) => applyEmmetNumbering(child, number));
  };

  const parsed = parseExpression(false);
  if (!parsed.length || index < abbreviation.length) return null;
  return parsed;
}

function renderEmmetNodes(nodes, baseIndent = "") {
  const renderNode = (node, depth) => {
    const indent = baseIndent + INDENT_UNIT.repeat(depth);
    const attrs = [];
    if (node.id) attrs.push(`id="${node.id}"`);
    if (node.classes.length) attrs.push(`class="${node.classes.join(" ")}"`);
    Object.entries(node.attrs).forEach(([name, value]) => {
      attrs.push(value === "" ? name : `${name}="${value}"`);
    });
    const openTag = `<${node.tag}${attrs.length ? " " + attrs.join(" ") : ""}>`;

    if (selfClosingTags.includes(node.tag.toLowerCase()) && !node.text && !node.children.length) {
      return `${indent}${openTag.replace(/>$/, " />")}`;
    }

    if (!node.children.length) {
      return `${indent}${openTag}${node.text || ""}</${node.tag}>`;
    }

    const childMarkup = node.children.map((child) => renderNode(child, depth + 1)).join("\n");
    const textLine = node.text ? `\n${baseIndent}${INDENT_UNIT.repeat(depth + 1)}${node.text}` : "";
    return `${indent}${openTag}${textLine}\n${childMarkup}\n${indent}</${node.tag}>`;
  };

  return nodes.map((node) => renderNode(node, 0)).join("\n");
}

function isExplicitEmmetAbbreviation(abbreviation) {
  const value = String(abbreviation || "");
  return value === "!" || value.toLowerCase() === "html:5" || /[.#>[{(+*:]/.test(value);
}

function expandEmmetAbbreviation(editor, options = {}) {
  const context = getEmmetAbbreviationAtCaret(editor);
  if (!context) return false;
  if (options.requireExplicit && !isExplicitEmmetAbbreviation(context.abbreviation)) {
    return false;
  }

  try {
    if (context.abbreviation === "!" || context.abbreviation.toLowerCase() === "html:5") {
      const replacement = getDefaultHtmlStarter()
        .split("\n")
        .map((line) => (line ? context.lineIndent + line : line))
        .join("\n");
      const bodyMatch = replacement.match(/<body>\n([\s\S]*?)\n<\/body>/i);
      const bodyContentOffset =
        bodyMatch && bodyMatch[1] ? replacement.indexOf(bodyMatch[1]) : replacement.length;
      const caretPos = context.replaceStart + bodyContentOffset;
      applyEditorMutation(
        editor,
        context.replaceStart,
        context.replaceEnd,
        replacement,
        caretPos,
        caretPos,
      );
      hideSuggestions();
      return true;
    }

    const nodes = parseEmmetAbbreviation(context.abbreviation);
    if (!nodes) return false;

    const textBeforeAbbreviation = editor.value.substring(
      editor.value.lastIndexOf("\n", context.replaceStart - 1) + 1,
      context.replaceStart,
    );
    const shouldPreserveIndent = /^[\t ]*$/.test(textBeforeAbbreviation);
    const replacement = renderEmmetNodes(
      nodes,
      shouldPreserveIndent ? context.lineIndent : "",
    );
    const insertStart = shouldPreserveIndent
      ? editor.value.lastIndexOf("\n", context.replaceStart - 1) + 1
      : context.replaceStart;
    const caretPos = insertStart + replacement.length;

    applyEditorMutation(
      editor,
      insertStart,
      context.replaceEnd,
      replacement,
      caretPos,
      caretPos,
    );
    hideSuggestions();
    return true;
  } catch (_err) {
    return false;
  }
}

/**
 * Handles all keydown events in the editor for suggestions, tab, and auto-closing. (REVISED)
 */
function shouldCaptureEditorKeyMutation(e) {
  if (!e || e.defaultPrevented || e.isComposing) return false;
  if (e.ctrlKey || e.metaKey || e.altKey) return false;
  const key = String(e.key || "");
  if (!key) return false;
  if (key.length === 1) return true;
  return [
    "Backspace",
    "Delete",
    "Enter",
    "Tab",
  ].includes(key);
}

function handleEditorTabIndentation(editor, options = {}) {
  if (!editor) return false;
  const { unindent = false } = options;
  const start = Number(editor.selectionStart || 0);
  const end = Number(editor.selectionEnd || start);
  const hasSelection = end > start;

  if (!hasSelection) {
    const lineStart = editor.value.lastIndexOf("\n", start - 1) + 1;
    const currentLinePrefix = editor.value.slice(lineStart, start);

    if (unindent) {
      const removable = currentLinePrefix.match(/(?: {1,4}|\t)$/)?.[0] || "";
      if (!removable) return true;
      const removeStart = start - removable.length;
      applyEditorMutation(editor, removeStart, start, "", removeStart, removeStart);
      return true;
    }

    applyEditorMutation(
      editor,
      start,
      end,
      INDENT_UNIT,
      start + INDENT_UNIT.length,
      start + INDENT_UNIT.length,
    );
    return true;
  }

  const blockStart = editor.value.lastIndexOf("\n", start - 1) + 1;
  const blockEnd =
    end > start && editor.value[end - 1] === "\n"
      ? end - 1
      : end;
  const selectedBlock = editor.value.slice(blockStart, blockEnd);
  const lines = selectedBlock.split("\n");
  let firstLineDelta = 0;
  let totalDelta = 0;

  const nextLines = lines.map((line, index) => {
    if (unindent) {
      const removable = line.match(/^(?: {1,4}|\t)/)?.[0] || "";
      if (!removable) return line;
      const delta = -removable.length;
      if (index === 0) firstLineDelta = delta;
      totalDelta += delta;
      return line.slice(removable.length);
    }
    if (index === 0) firstLineDelta = INDENT_UNIT.length;
    totalDelta += INDENT_UNIT.length;
    return INDENT_UNIT + line;
  });

  if (totalDelta === 0) return true;
  applyEditorMutation(
    editor,
    blockStart,
    blockEnd,
    nextLines.join("\n"),
    Math.max(blockStart, start + firstLineDelta),
    Math.max(blockStart, end + totalDelta),
  );
  return true;
}

function handleEditorKeyDown(e) {
  const editor = e.target;
  const mod = e.ctrlKey || e.metaKey;
  const normalizedKey = String(e.key || "").toLowerCase();

  if (mod && !e.altKey) {
    if (normalizedKey === "z") {
      e.preventDefault();
      if (e.shiftKey) {
        redoEditorHistory(editor);
      } else {
        undoEditorHistory(editor);
      }
      return;
    }
    if (normalizedKey === "y") {
      e.preventDefault();
      redoEditorHistory(editor);
      return;
    }
  }

  if (shouldCaptureEditorKeyMutation(e) && !pendingHistorySnapshot) {
    beginEditorHistoryCapture(editor);
  }

  if (
    e.key === "Tab" &&
    activeInlineHtmlCorrection &&
    activeFile &&
    editor.selectionStart === editor.selectionEnd
  ) {
    const currentLine = getLineNumberFromIndex(editor.value, editor.selectionStart);
    if (currentLine === activeInlineHtmlCorrection.line) {
      e.preventDefault();
      acceptInlineHtmlCorrection(editor);
      return;
    }
  }

  if (
    activeInlineHtmlCorrection &&
    activeFile &&
    !e.ctrlKey &&
    !e.metaKey &&
    !e.altKey &&
    !["Shift", "Control", "Meta", "Alt", "Tab"].includes(e.key)
  ) {
    clearInlineHtmlCorrectionDisplay(editor);
    updateLineNumbers(editor);
  }

  const caretContextBefore = editor.value.substring(0, editor.selectionStart);
  const isHtmlStyleContext =
    activeFile.type === "html" && isInsideStyleTag(caretContextBefore);
  const isHtmlScriptContext =
    activeFile.type === "html" && isInsideScriptTag(caretContextBefore);
  const isCssEditorContext = activeFile.type === "css" || isHtmlStyleContext;
  const isCodeEditorContext =
    isCssEditorContext || activeFile.type === "js" || isHtmlScriptContext;

  if (
    activeFile.type === "html" &&
    e.key === "Enter" &&
    !isHtmlStyleContext &&
    !isHtmlScriptContext &&
    suggestionPopup.style.display !== "block"
  ) {
    hideSuggestions();
    if (expandCxStartShortcut(editor)) {
      e.preventDefault();
      return;
    }
    if (handleHtmlEnterIndentation(e, editor)) {
      return;
    }
  }

  // --- 1. Suggestion Popup Navigation (HTML only) ---
  if (suggestionPopup.style.display === "block") {
    const items = suggestionPopup.querySelectorAll(".suggestion-item");
    if (!items.length) {
      // If popup is open but empty, still allow Enter/Tab for default action
      if (e.key === "Enter" || e.key === "Tab") {
        hideSuggestions();
        if (e.key === "Tab") {
          e.preventDefault();
          if (isCodeEditorContext) {
            handleEditorTabIndentation(editor, { unindent: e.shiftKey });
          }
        }
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeSuggestion = (activeSuggestion + 1) % items.length;
      updateSuggestionHighlight(items);
      return;
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeSuggestion = (activeSuggestion - 1 + items.length) % items.length;
      updateSuggestionHighlight(items);
      return;
    } else if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      if (
        e.key === "Tab" &&
        activeFile.type === "html" &&
        !isHtmlStyleContext &&
        !isHtmlScriptContext &&
        expandEmmetAbbreviation(editor)
      ) {
        return;
      }

      const selectedIndex = activeSuggestion > -1 ? activeSuggestion : 0;
      const selected = items[selectedIndex];
      if (selected) {
        selectSuggestion(selected.dataset.tag);
      } else {
        hideSuggestions();
      }
      return;
    } else if (e.key === "Escape") {
      e.preventDefault();
      hideSuggestions();
      return;
    } else if (e.key === ">") {
      // Handle tag closing, then hide popup
      handleTagClosing(e);
      hideSuggestions();
      return;
    }
  }

  // --- 2. Auto-Closing & Indentation (CSS and JS) ---
  if (activeFile.type === "html" && handleHtmlAttributeValueCompletion(e, editor)) {
    return;
  }

  if (activeFile.type === "html" && e.key === "=") {
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const textBefore = editor.value.substring(0, start);
    const textAfter = editor.value.substring(end);

    // Auto-complete HTML attributes: href= -> href=""
    // Trigger only when caret is right after a likely attribute name.
    if (/[\w:-]\s*$/.test(textBefore)) {
      e.preventDefault();
      applyEditorMutation(editor, start, end, '=""', start + 2, start + 2);
      return;
    }
  }

  if (activeFile.type === "html" && e.key === "Tab" && !isHtmlStyleContext && !isHtmlScriptContext) {
    if (expandEmmetAbbreviation(editor)) {
      e.preventDefault();
      return;
    }
  }

  // --- 3. Auto-Closing & Indentation (CSS and JS) ---
  if (
    isCssEditorContext ||
    activeFile.type === "js" ||
    isHtmlStyleContext ||
    isHtmlScriptContext
  ) {
    if (handleAutoCloseAndIndent(e, editor)) {
      return; // If auto-closing/indentation was handled, stop here
    }
  }

  // --- 4. HTML Tag Closing (If popup was not visible) ---
  if (activeFile.type === "html" && e.key === ">") {
    handleTagClosing(e);
    return;
  }

  // --- 5. Tab for Indentation (Fallback for all file types) ---
  if (e.key === "Tab") {
    e.preventDefault();
    handleEditorTabIndentation(editor, { unindent: e.shiftKey });
    return;
  }

  // All other keys fall through to default behavior
}

// PART 7 - KEYBOARD SHORTCUTS
document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  const mod = e.ctrlKey || e.metaKey;
  const target = e.target;
  const isTypingIntoFormControl =
    target &&
    target !== document.getElementById("activeEditor") &&
    ((typeof target.closest === "function" &&
      target.closest("input, textarea, select, button, [contenteditable='true']")) ||
      target.isContentEditable);

  if (e.key === "Escape" && document.body.classList.contains("zen-mode")) {
    e.preventDefault();
    toggleZenMode(false);
    return;
  }

  if (e.key === "Escape") {
    if (headerMorePanel && !headerMorePanel.hidden) {
      e.preventDefault();
      setHeaderMoreMenuOpen(false);
      return;
    }
    if (developerConsoleModal && developerConsoleModal.style.display === "flex") {
      e.preventDefault();
      closeDeveloperConsole();
      return;
    }
    if (fontPickerModal && fontPickerModal.style.display === "flex") {
      e.preventDefault();
      fontPickerModal.style.display = "none";
      return;
    }
    if (settingsModal && settingsModal.style.display === "flex") {
      e.preventDefault();
      settingsModal.style.display = "none";
      return;
    }
    if (collabModal && collabModal.style.display === "flex") {
      e.preventDefault();
      if (closeModalBtn && closeModalBtn.style.display !== "none") {
        closeModal();
      }
      return;
    }
  }

  // Prevent shortcuts from firing while suggestion box is open
  if (suggestionPopup.style.display === "block") {
    if (
      mod &&
      (key === "s" || key === "enter" || key === "q")
    ) {
      e.preventDefault();
    }
    return;
  }

  if (isTypingIntoFormControl) {
    return;
  }

  if (mod && key === "c") {
    setDeveloperChordArmed(true);
  } else if (developerChordArmed && mod && key === "x") {
    e.preventDefault();
    setDeveloperChordArmed(false);
    openDeveloperConsole();
    return;
  }

  if (mod && key === "s") {
    e.preventDefault();
    exportAsZip();
  }
  if (mod && key === "enter") {
    e.preventDefault();
    if (
      activeSessionId && !isHost() && collabPermissions.disableRunCode
    ) {
      showNotification("The host disabled running code for participants.", "error");
      return;
    }
    updatePreview();
  }
  if (mod && key === "q") {
    e.preventDefault();
    createNewFile();
  }
  if (mod && e.shiftKey && key === "c") {
    e.preventDefault();
    showConsoleCheckbox.checked = !showConsoleCheckbox.checked;
    showConsoleCheckbox.dispatchEvent(new Event("change"));
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopBackgroundTimers();
    clearOwnSessionCursorBroadcast();
    return;
  }
  startBackgroundTimers();
  pruneRemoteCursors();
  applyRoomIndicators();
  resumeCollabSession();
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Control" || e.key === "Meta") {
    setDeveloperChordArmed(false);
  }
});

document.addEventListener("mousedown", (e) => {
  const editor = document.getElementById("activeEditor");
  if (!editor) return;
  const clickedInsidePopup = suggestionPopup.contains(e.target);
  if (!clickedInsidePopup) {
    hideSuggestions();
  }
});

window.addEventListener("resize", () => {
  const editor = document.getElementById("activeEditor");
  if (editor && suggestionPopup.style.display === "block") {
    positionSuggestionPopup(editor);
  }
});

// PART 8 - DRAG & DROP
["dragover", "dragleave", "drop"].forEach((eventName) => {
  editorContainer.addEventListener(eventName, (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (eventName === "dragover") editorContainer.classList.add("dragover");
    if (eventName === "dragleave" || eventName === "drop")
      editorContainer.classList.remove("dragover");
  });
});

function canImportProjectArchive() {
  if (activeSessionId && isReadOnlyParticipant() && collabPermissions.disableImportZip) {
    showNotification("The host disabled ZIP import for participants.", "error");
    return false;
  }
  return true;
}

function canCreateFilesFromDrop() {
  if (activeSessionId && isReadOnlyParticipant() && collabPermissions.disableNewFile) {
    showNotification("The host disabled creating new files for participants.", "error");
    return false;
  }
  return true;
}

function loadImportedProjectFiles(importedFiles, successMessage) {
  if (!Array.isArray(importedFiles) || importedFiles.length === 0) {
    showNotification("No valid project files were found.", "error");
    return false;
  }

  projectFiles = importedFiles.map((file, index) => ({
    ...file,
    name: normalizeProjectFileName(file?.name, `file-${index + 1}.txt`),
    active: index === 0,
  }));
  normalizeProjectFileNamesInPlace(projectFiles);
  activeFile = projectFiles[0];
  const editor = document.getElementById("activeEditor");
  if (editor && activeFile) {
    editor.value = activeFile.content;
    updateLineNumbers(editor);
    resetAllEditorHistory(editor);
  }
  renderFileList();
  scheduleProjectAutosave();
  if (autoRunCheckbox.checked) updatePreview();
  syncProjectWithSession();
  if (successMessage) showNotification(successMessage, "success");
  return true;
}

function readDroppedTextFile(file, relativePath = file.name) {
  return new Promise((resolve, reject) => {
    const normalizedPath = String(relativePath || file.name || "")
      .replace(/\\/g, "/")
      .replace(/^\/+/, "");
    const safePath = normalizeProjectFileName(normalizedPath);
    const ext = safePath.split(".").pop().toLowerCase();
    if (!editableTextExtensions.includes(ext)) {
      resolve(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
      resolve({
        name: safePath,
        type: ext,
        content: ev.target.result,
        active: false,
      });
    };
    reader.onerror = () => reject(reader.error || new Error(`Failed to read ${safePath}`));
    reader.readAsText(file);
  });
}

function readDirectoryEntries(reader) {
  return new Promise((resolve, reject) => {
    const entries = [];

    function pump() {
      reader.readEntries(
        (batch) => {
          if (!batch.length) {
            resolve(entries);
            return;
          }
          entries.push(...batch);
          pump();
        },
        reject,
      );
    }

    pump();
  });
}

async function collectDroppedEntryFiles(entry, currentPath = "") {
  if (!entry) return [];

  if (entry.isFile) {
    const file = await new Promise((resolve, reject) => entry.file(resolve, reject));
    const imported = await readDroppedTextFile(file, `${currentPath}${file.name}`);
    return imported ? [imported] : [];
  }

  if (!entry.isDirectory) return [];
  const nextPath = `${currentPath}${entry.name}/`;
  const childEntries = await readDirectoryEntries(entry.createReader());
  const nestedFiles = await Promise.all(
    childEntries.map((child) => collectDroppedEntryFiles(child, nextPath)),
  );
  return nestedFiles.flat();
}

async function importProjectFromDroppedFolder(entries) {
  const importedGroups = await Promise.all(entries.map((entry) => collectDroppedEntryFiles(entry)));
  const importedFiles = importedGroups.flat().sort((a, b) => a.name.localeCompare(b.name));

  if (!importedFiles.length) {
    showNotification("No valid files found in dropped folder.", "error");
    return false;
  }

  return loadImportedProjectFiles(
    importedFiles,
    `Folder imported! Files: ${importedFiles.map((file) => file.name).join(", ")}`,
  );
}

async function addDroppedFilesToProject(files) {
  if (!canCreateFilesFromDrop()) return;

  let importedCount = 0;
  for (const file of files) {
    const imported = await readDroppedTextFile(file);
    if (!imported) continue;
    if (projectFiles.some((f) => String(f.name || "").toLowerCase() === imported.name.toLowerCase())) {
      showNotification(`File ${imported.name} already exists`, "error");
      continue;
    }
    projectFiles.push(imported);
    scheduleProjectAutosave();
    if (projectFiles.length === 1) {
      imported.active = true;
      activeFile = imported;
      document.getElementById("activeEditor").value = imported.content;
      updateLineNumbers();
    }
    importedCount += 1;
    showNotification(`Imported: ${imported.name}`, "success");
  }

  if (importedCount > 0) {
    renderFileList();
    syncProjectWithSession();
  }
}

editorContainer.addEventListener("drop", async (e) => {
  const droppedFiles = Array.from(e.dataTransfer?.files || []);
  const droppedItems = Array.from(e.dataTransfer?.items || []);
  const droppedEntries = droppedItems
    .map((item) => (typeof item.webkitGetAsEntry === "function" ? item.webkitGetAsEntry() : null))
    .filter(Boolean);
  const directoryEntries = droppedEntries.filter((entry) => entry.isDirectory);
  const zipFile = droppedFiles.find((file) => /\.zip$/i.test(file.name || ""));

  if (directoryEntries.length > 0) {
    if (!canImportProjectArchive()) return;
    await importProjectFromDroppedFolder(directoryEntries);
    return;
  }

  if (zipFile) {
    if (!canImportProjectArchive()) return;
    await importProjectFromZipFile(zipFile);
    return;
  }

  await addDroppedFilesToProject(droppedFiles);
});

document.getElementById("activeEditor").addEventListener("pointermove", announceCursorPosition);
document.getElementById("activeEditor").addEventListener("mouseenter", (event) => {
  isPointerInsideEditor = true;
  announceCursorPosition(event);
});
document.getElementById("activeEditor").addEventListener("mouseleave", () => {
  isPointerInsideEditor = false;
  clearOwnSessionCursorBroadcast();
});
window.addEventListener("beforeunload", clearOwnSessionCursorBroadcast);
startBackgroundTimers();

// PART 9 - ZIP EXPORT
async function exportAsZip() {
  if (activeSessionId && isReadOnlyParticipant() && collabPermissions.disableExportZip) {
    showNotification("The host disabled ZIP export for participants.", "error");
    return false;
  }
  const dialog = await showAppPrompt(
    "EXPORT ZIP",
    "Name your ZIP file:",
    "codx-project.zip",
    "codx-project.zip",
  );
  if (!dialog?.ok) return;
  const requestedName = dialog.value;
  if (!requestedName) return false;
  const trimmedName = requestedName.trim();
  if (!trimmedName) {
    showNotification("ZIP file name cannot be empty.", "error");
    return false;
  }
  const zipFileName = /\.zip$/i.test(trimmedName) ? trimmedName : `${trimmedName}.zip`;
  const zip = new JSZip();
  projectFiles.forEach((file) => {
    zip.file(file.name, file.content);
  });
  try {
    const content = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(content);
    const a = document.createElement("a");
    a.href = url;
    a.download = zipFileName;
    a.click();
    URL.revokeObjectURL(url);
    showNotification(`Project exported as ${zipFileName}!`, "success");
    return true;
  } catch (err) {
    console.error("Export error:", err);
    showNotification("Error creating ZIP file", "error");
    return false;
  }
}

// PART 10 - ZIP IMPORT
async function importProjectFromZipFile(file) {
  if (!file || !/\.zip$/i.test(file.name || "")) {
    showNotification("Please select a valid ZIP file", "error");
    return false;
  }

  try {
    const zip = await JSZip.loadAsync(file);
    const importTasks = [];
    const foundFiles = [];

    zip.forEach((path, entry) => {
      const normalizedPath = String(path || "").replace(/\\/g, "/");
      const safePath = normalizeProjectFileName(normalizedPath);
      const ext = safePath.split(".").pop().toLowerCase();
      if (editableTextExtensions.includes(ext) && !entry.dir) {
        foundFiles.push(safePath);
        importTasks.push(
          entry.async("string").then((content) => ({
            name: safePath,
            type: ext,
            content,
            active: false,
          })),
        );
      }
    });

    const importedFiles = await Promise.all(importTasks);
    if (!importedFiles.length) {
      showNotification("No valid files found in ZIP", "error");
      return false;
    }

    return loadImportedProjectFiles(
      importedFiles,
      `Project imported! Files: ${foundFiles.join(", ")}`,
    );
  } catch (err) {
    console.error("Import error:", err);
    showNotification("Error reading ZIP file.", "error");
    return false;
  }
}

function importZip() {
  if (!canImportProjectArchive()) return;
  document.getElementById("zipFileInput").click();
}

async function handleZipImport(event) {
  if (!canImportProjectArchive()) {
    event.target.value = "";
    return;
  }
  const file = event.target.files[0];
  if (!file) return;
  await importProjectFromZipFile(file);
  event.target.value = "";
}

// PART 11 - FULLSCREEN
previewFullscreenBtn.addEventListener("click", togglePreviewFullscreen);
zenModeBtn.addEventListener("click", toggleZenMode);
if (zenExitBtn) zenExitBtn.addEventListener("click", () => toggleZenMode(false));
document.addEventListener("fullscreenchange", updateFullscreenButtonState);

function togglePreviewFullscreen() {
  if (!document.fullscreenElement) {
    const fullscreenTarget = fullscreenPreviewPanelCheckbox?.checked === false
      ? iframe
      : previewPanel;
    if (fullscreenTarget.requestFullscreen) {
      fullscreenTarget.requestFullscreen();
    } else if (fullscreenTarget.webkitRequestFullscreen) {
      fullscreenTarget.webkitRequestFullscreen();
    } else if (fullscreenTarget.msRequestFullscreen) {
      fullscreenTarget.msRequestFullscreen();
    }
  } else {
    document.exitFullscreen();
  }
}

function updateFullscreenButtonState() {
  if (document.fullscreenElement === previewPanel || document.fullscreenElement === iframe) {
    previewFullscreenBtn.innerHTML = `
      <svg class="btn-icon" viewBox="0 0 24 24">
        <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
      </svg>
      <strong>EXIT FULLSCREEN</strong>
    `;
  } else {
    previewFullscreenBtn.innerHTML = `
      <svg class="btn-icon" viewBox="0 0 24 24">
        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
      </svg>
      <strong>FULLSCREEN</strong>
    `;
  }
}

// PART 12 - COLLABORATION FEATURES (SOCKET.IO BACKEND)
closeModalBtn.addEventListener("click", closeModal);
collabBtn.addEventListener("click", startCollaboration);
updateCollabButtonState();

function extractSessionIdFromUrl() {
  const pathMatch = window.location.pathname.match(
    /\/frontend\.html\/([A-Za-z0-9-]+)$/,
  );
  if (pathMatch) return pathMatch[1].toUpperCase();

  const hash = window.location.hash.substring(1).trim().toUpperCase();
  if (hash) return hash;
  return null;
}

function validateUsername(u) {
  if (!u || !u.trim()) return { valid: false, error: "Enter a name." };
  if (u.length < 2) return { valid: false, error: "At least 2 characters." };
  if (u.length > 20) return { valid: false, error: "Max 20 characters." };
  if (!/^[a-zA-Z0-9\s_-]+$/.test(u))
    return { valid: false, error: "Only letters, numbers, space, _ , -." };
  return { valid: true };
}

function normalizeSessionPin(value) {
  return String(value || "").trim().toUpperCase().replace(/\s+/g, "");
}

function validateSessionPin(value) {
  const pin = normalizeSessionPin(value);
  if (!pin) return { valid: false, error: "Enter a session pin." };
  if (!/^[A-Z0-9]{6}$/.test(pin)) {
    return { valid: false, error: "Session pin must be 6 letters or numbers." };
  }
  return { valid: true, pin };
}

function getMyParticipant() {
  const target = String(myInfo.name || "").trim().toLowerCase();
  return (
    collabParticipants.find(
      (p) => String(p.name || "").trim().toLowerCase() === target,
    ) || null
  );
}

function getParticipantByName(name) {
  const safeName = String(name || "").trim().toLowerCase();
  return collabParticipants.find((p) => String(p.name || "").trim().toLowerCase() === safeName) || null;
}

function isGroupFeatureRestrictedUser() {
  return Boolean(activeSessionId) && !isHost();
}

function getCurrentHostName() {
  const hostParticipant = collabParticipants.find((p) => p.role === "host");
  if (hostParticipant?.name) return hostParticipant.name;
  return collabHostName || "";
}

function addTimelineEntry(text, type = "info") {
  const entry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    text: String(text || "").trim(),
    type,
    ts: Date.now(),
  };
  if (!entry.text) return;
  collabTimeline.unshift(entry);
  if (collabTimeline.length > 60) collabTimeline.length = 60;
}

function formatTimelineTime(ts) {
  try {
    return new Date(ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
}

function renderTimelineHtml() {
  if (!collabTimeline.length) {
    return `<div class="collab-timeline-empty">No activity yet.</div>`;
  }
  return `
    <div class="collab-timeline-list">
      ${collabTimeline
        .map(
          (entry) => `
        <div class="collab-timeline-item ${escapeHtml(entry.type)}">
          <span class="collab-timeline-time">${escapeHtml(formatTimelineTime(entry.ts))}</span>
          <span class="collab-timeline-text">${escapeHtml(entry.text)}</span>
        </div>`,
        )
        .join("")}
    </div>
  `;
}

function updateTimelineFromParticipants(participants) {
  const next = new Map();
  participants.forEach((p) => {
    const key = String(p.name || "").trim().toLowerCase();
    if (!key) return;
    next.set(key, p);
  });

  next.forEach((p, key) => {
    if (!lastParticipantsSnapshot.has(key)) {
      addTimelineEntry(`${p.name} joined the session.`);
    } else {
      const prev = lastParticipantsSnapshot.get(key);
      if (prev && prev.role !== p.role) {
        addTimelineEntry(`${p.name} is now ${p.role || "participant"}.`);
      }
    }
  });

  lastParticipantsSnapshot.forEach((prev, key) => {
    if (!next.has(key)) {
      addTimelineEntry(`${prev.name} left the session.`);
    }
  });

  lastParticipantsSnapshot = next;
}

function getMyRole() {
  const me = getMyParticipant();
  if (me?.role) return me.role;

  const hostName = getCurrentHostName();
  if (
    hostName &&
    String(myInfo.name || "").trim().toLowerCase() ===
      String(hostName || "").trim().toLowerCase()
  ) {
    return "host";
  }
  return "participant";
}

function isHost() {
  return getMyRole() === "host";
}

function isCoHost() {
  return getMyRole() === "co-host";
}

function updateCollabButtonState() {
  if (!collabBtn) return;
  const label = !activeSessionId
    ? "COLLAB WITH FRIENDS"
    : canUseCoHostTools()
      ? "MANAGE SESSION"
      : "PARTICIPANTS";
  const strong = collabBtn.querySelector("strong");
  if (strong) {
    strong.textContent = label;
  } else {
    collabBtn.textContent = label;
  }
  const readableLabel =
    label === "MANAGE SESSION"
      ? "Manage collaboration session"
      : label === "PARTICIPANTS"
        ? "View collaboration participants"
        : "Collaborate with friends";
  collabBtn.setAttribute("aria-label", readableLabel);
  collabBtn.title = readableLabel;
}

function canUseCoHostTools() {
  return isHost() || isCoHost();
}

function canModerateParticipant(participant) {
  if (!participant) return false;
  const role = String(participant.role || "participant");
  if (isHost()) return role !== "host";
  if (isCoHost()) return role === "participant";
  return false;
}

function normalizeCollabPermissions(raw) {
  const next = {
    ...defaultCollabPermissions,
    ...(raw || {}),
  };
  const allNames = new Set(projectFiles.map((f) => f.name));
  next.selectedFiles = Array.isArray(next.selectedFiles)
    ? Array.from(
        new Set(
          next.selectedFiles
            .map((name) => String(name || "").trim())
            .filter((name) => name && allNames.has(name)),
        ),
      )
    : [];
  return next;
}

function isReadOnlyParticipant() {
  return activeSessionId && !isHost() && !isCoHost();
}

function canCurrentUserEditFile(fileName) {
  if (!activeSessionId || isHost() || isCoHost()) return true;
  const me = getMyParticipant();
  if (me?.frozenEditing) return false;
  const normalizedFileName = String(fileName || "").trim().toLowerCase();
  const hasPersonalFileAccess = Array.isArray(me?.allowedFiles);
  if (!hasPersonalFileAccess && !collabPermissions.manageSelectedFiles) return true;
  const allowedFiles = hasPersonalFileAccess ? me.allowedFiles : collabPermissions.selectedFiles;
  return allowedFiles.some(
    (name) => String(name || "").trim().toLowerCase() === normalizedFileName,
  );
}

function enforceCollabPermissionsUI() {
  updateCollabButtonState();
  if (!activeSessionId) {
    if (newFileBtn) {
      newFileBtn.disabled = false;
      newFileBtn.title = "";
    }
    if (exportZipBtn) {
      exportZipBtn.disabled = false;
      exportZipBtn.title = "";
    }
    if (importZipBtn) {
      importZipBtn.disabled = false;
      importZipBtn.title = "";
    }
    if (saveProjectBtn) {
      saveProjectBtn.disabled = false;
      saveProjectBtn.title = "";
    }
    if (openSavedProjectsBtn) {
      openSavedProjectsBtn.disabled = false;
      openSavedProjectsBtn.title = "";
    }
    if (templatesBtn) {
      templatesBtn.disabled = false;
      templatesBtn.title = "";
    }
    if (publishProjectBtn) {
      publishProjectBtn.disabled = false;
      publishProjectBtn.title = "";
    }
    if (runPreviewBtn) {
      runPreviewBtn.disabled = false;
      runPreviewBtn.title = "";
    }
    if (showConsoleCheckbox) {
      showConsoleCheckbox.disabled = false;
      showConsoleCheckbox.title = "";
    }
    if (clearConsoleBtn) {
      clearConsoleBtn.disabled = false;
      clearConsoleBtn.title = "";
    }
    const editor = document.getElementById("activeEditor");
    if (editor) {
      editor.readOnly = false;
      editor.title = "";
    }
    if (consoleContainer && showConsoleCheckbox && !showConsoleCheckbox.checked) {
      consoleContainer.classList.remove("show");
    }
    return;
  }

  const participantRestricted = isGroupFeatureRestrictedUser();
  const me = getMyParticipant();
  const personalDisabledFeatures = new Set(Array.isArray(me?.disabledFeatures) ? me.disabledFeatures : []);
  const lockPersonalChat = participantRestricted && (collabPermissions.disableAllChat || personalDisabledFeatures.has("chat"));
  const lockNewFile = participantRestricted && collabPermissions.disableNewFile;
  const lockExport = participantRestricted && collabPermissions.disableExportZip;
  const lockImport = participantRestricted && collabPermissions.disableImportZip;
  const lockSaveProject = participantRestricted && (collabPermissions.disableSaveProject || personalDisabledFeatures.has("saveProject"));
  const lockOpenSaved = participantRestricted && (collabPermissions.disableOpenSavedProjects || personalDisabledFeatures.has("openSaved"));
  const lockTemplates = participantRestricted && (collabPermissions.disableTemplates || personalDisabledFeatures.has("templates"));
  const lockPublishShare = participantRestricted && (collabPermissions.disablePublishShare || personalDisabledFeatures.has("publishShare"));
  const lockRun = participantRestricted && (collabPermissions.disableRunCode || personalDisabledFeatures.has("runCode"));
  const lockConsole = participantRestricted && (collabPermissions.disableConsoleAccess || personalDisabledFeatures.has("consoleAccess"));
  const globalReadOnly = activeSessionId && (collabPermissions.readOnlyAll || collabPermissions.pauseCollab);
  const lockEditor = globalReadOnly || !canCurrentUserEditFile(activeFile ? activeFile.name : "");
  const frozenEditing = participantRestricted && Boolean(me?.frozenEditing);

  if (newFileBtn) {
    newFileBtn.disabled = lockNewFile;
    newFileBtn.title = lockNewFile ? "The host disabled new file creation." : "";
  }
  if (exportZipBtn) {
    exportZipBtn.disabled = lockExport;
    exportZipBtn.title = lockExport ? "The host disabled ZIP export." : "";
  }
  if (importZipBtn) {
    importZipBtn.disabled = lockImport;
    importZipBtn.title = lockImport ? "The host disabled ZIP import." : "";
  }
  if (saveProjectBtn) {
    saveProjectBtn.disabled = lockSaveProject;
    saveProjectBtn.title = lockSaveProject ? "The host disabled saving projects for participants." : "";
  }
  if (openSavedProjectsBtn) {
    openSavedProjectsBtn.disabled = lockOpenSaved;
    openSavedProjectsBtn.title = lockOpenSaved ? "The host disabled opening saved projects for participants." : "";
  }
  if (templatesBtn) {
    templatesBtn.disabled = lockTemplates;
    templatesBtn.title = lockTemplates ? "The host disabled starter templates for participants." : "";
  }
  if (publishProjectBtn) {
    publishProjectBtn.disabled = lockPublishShare;
    publishProjectBtn.title = lockPublishShare ? "The host disabled publish/share for participants." : "";
  }
  if (runPreviewBtn) {
    runPreviewBtn.disabled = lockRun;
    runPreviewBtn.title = lockRun ? "The host disabled code execution for participants." : "";
  }
  if (showConsoleCheckbox) {
    showConsoleCheckbox.disabled = lockConsole;
    showConsoleCheckbox.title = lockConsole ? "The host disabled console access for participants." : "";
    if (lockConsole) {
      showConsoleCheckbox.checked = false;
    }
  }
  if (clearConsoleBtn) {
    clearConsoleBtn.disabled = lockConsole;
    clearConsoleBtn.title = lockConsole ? "The host disabled console access for participants." : "";
  }
  if (collabModalView === "session-details" || collabModalView === "group-controls") {
    const chatInput = document.getElementById("collabChatInput");
    const chatSendBtn = document.getElementById("collabChatSendBtn");
    if (chatInput) {
      chatInput.disabled = lockPersonalChat || Boolean(collabPermissions.disableAllChat);
      chatInput.placeholder =
        lockPersonalChat
          ? "Chat was disabled for you by the host..."
          : collabPermissions.disableAllChat
          ? "Chat is disabled by the host..."
          : "Type a message...";
    }
    if (chatSendBtn) {
      chatSendBtn.disabled = lockPersonalChat || Boolean(collabPermissions.disableAllChat);
    }
  }
  const editor = document.getElementById("activeEditor");
  if (editor) {
    editor.readOnly = lockEditor;
    editor.title = lockEditor
      ? globalReadOnly
        ? collabPermissions.pauseCollab
          ? "The host paused collaboration for the group."
          : "The host set the room to read-only."
        : frozenEditing
        ? "The host temporarily froze your editing access."
        : "The host allowed editing only on selected files."
      : "";
  }
  if (consoleContainer) {
    consoleContainer.classList.toggle("show", showConsoleCheckbox.checked && !lockConsole);
  }
  applyRoomIndicators();
}

function updateZenModeButtonState() {
  if (!zenModeBtn) return;
  if (isZenMode) {
    zenModeBtn.innerHTML = `
      <i class="fa-solid fa-minimize"></i>
      <strong>EXIT ZEN</strong>
    `;
  } else {
    zenModeBtn.innerHTML = `
      <i class="fa-solid fa-laptop-code"></i>
      <strong>ZEN MODE</strong>
    `;
  }
}

function toggleZenMode(forceState) {
  const nextZenState =
    typeof forceState === "boolean" ? forceState : !document.body.classList.contains("zen-mode");
  if (nextZenState && !isZenMode) {
    zenModeLayoutSnapshot = {
      editorsWidth: editorsPanel ? editorsPanel.style.width : "",
      editorsHeight: editorsPanel ? editorsPanel.style.height : "",
      editorsFlex: editorsPanel ? editorsPanel.style.flex : "",
      previewWidth: previewPanel ? previewPanel.style.width : "",
      previewHeight: previewPanel ? previewPanel.style.height : "",
      previewFlex: previewPanel ? previewPanel.style.flex : "",
    };
    if (editorsPanel) {
      editorsPanel.style.width = "100%";
      editorsPanel.style.height = "100%";
      editorsPanel.style.flex = "1 1 auto";
    }
    if (previewPanel) {
      previewPanel.style.width = "";
      previewPanel.style.height = "";
      previewPanel.style.flex = "";
    }
  } else if (!nextZenState && isZenMode && zenModeLayoutSnapshot) {
    if (editorsPanel) {
      editorsPanel.style.width = zenModeLayoutSnapshot.editorsWidth || "";
      editorsPanel.style.height = zenModeLayoutSnapshot.editorsHeight || "";
      editorsPanel.style.flex = zenModeLayoutSnapshot.editorsFlex || "";
    }
    if (previewPanel) {
      previewPanel.style.width = zenModeLayoutSnapshot.previewWidth || "";
      previewPanel.style.height = zenModeLayoutSnapshot.previewHeight || "";
      previewPanel.style.flex = zenModeLayoutSnapshot.previewFlex || "";
    }
    zenModeLayoutSnapshot = null;
  }
  isZenMode = nextZenState;
  document.body.classList.toggle("zen-mode", isZenMode);
  applyZenFileVisibilitySetting();
  updateZenModeButtonState();
  updateLineNumbers(editorTextarea);
  renderErrorHighlights(editorTextarea);
  setTimeout(() => {
    if (editorTextarea) {
      editorTextarea.focus();
      syncSyntaxLayerStyle(editorTextarea);
      renderSyntaxHighlight(editorTextarea);
      renderErrorHighlights(editorTextarea);
    }
    if (!isZenMode) {
      handleLayoutResize();
    }
  }, 0);
  if (isZenMode) {
    showNotification("Zen Mode enabled. Press Esc to exit.", "success");
  }
}

function pushCollabPermissionsUpdate(partial) {
  if (!collabSocket || !activeSessionId || !isHost()) return;
  const next = normalizeCollabPermissions({
    ...collabPermissions,
    ...(partial || {}),
  });
  collabSocket.emit(
    "collab:set-permissions",
    { sessionId: activeSessionId, permissions: next },
    (res) => {
      if (!res?.ok) {
        showNotification((res && res.error) || "Failed to update permissions", "error");
      }
    },
  );

  html = html.replace(
    /<link\b([^>]*?)href=["']([^"']+)["']([^>]*?)>/gi,
    (match, before, href, after) => {
      const relMatch = match.match(/\brel=["']([^"']+)["']/i);
      const relValue = String(relMatch?.[1] || "").toLowerCase();
      if (!/(^|\s)(icon|shortcut icon|apple-touch-icon)(\s|$)/i.test(relValue)) {
        return match;
      }
      const builtInAssetPath = resolveBuiltInAssetPath(href);
      if (!builtInAssetPath) return match;
      return `<link${before}href="${builtInAssetPath}"${after}>`;
    },
  );
}

function updateGroupPermission(partial, successMessage) {
  if (!collabSocket || !activeSessionId || !isHost()) return;
  const next = normalizeCollabPermissions({
    ...collabPermissions,
    ...(partial || {}),
  });
  collabSocket.emit(
    "collab:set-permissions",
    { sessionId: activeSessionId, permissions: next },
    (res) => {
      if (!res?.ok) {
        showNotification((res && res.error) || "Failed to update room setting", "error");
      } else {
        collabPermissions = normalizeCollabPermissions(res.permissions || next);
        enforceCollabPermissionsUI();
        applyRoomIndicators();
        if (successMessage) {
          addTimelineEntry(successMessage, "session");
        }
        if (collabModal.style.display === "flex") {
          if (collabModalView === "group-controls") {
            showGroupControls(activeSessionId);
          } else if (collabModalView === "session") {
            showSessionDetails(activeSessionId);
          }
        }
        if (successMessage) showNotification(successMessage, "success");
      }
    },
  );
}

async function promptForExistingFile(label, currentValue = "") {
  const existingNames = projectFiles.map((file) => file.name).join(", ");
  const dialog = await showAppPrompt(
    "SELECT FILE",
    `${label}\nAvailable files: ${existingNames}`,
    currentValue || (activeFile ? activeFile.name : ""),
    activeFile ? activeFile.name : "",
  );
  if (!dialog?.ok) {
    return { status: "cancel" };
  }
  const picked = dialog.value;
  const trimmed = String(picked || "").trim();
  if (!trimmed) {
    return { status: "empty" };
  }
  const match = projectFiles.find((file) => file.name.toLowerCase() === trimmed.toLowerCase());
  return match ? { status: "ok", fileName: match.name } : { status: "invalid" };
}

async function bringEveryoneToFile() {
  if (!collabSocket || !activeSessionId || !canUseCoHostTools()) return;
  const result = await promptForExistingFile("Bring everyone to which file?", activeFile ? activeFile.name : "");
  if (result.status === "cancel") return;
  if (result.status !== "ok") {
    showNotification("Choose an existing file name.", "error");
    return;
  }
  const fileName = result.fileName;
  collabSocket.emit("collab:bring-to-file", { sessionId: activeSessionId, fileName }, (res) => {
    if (!res?.ok) {
      showNotification((res && res.error) || "Failed to bring everyone to file", "error");
      return;
    }
    showNotification(`Everyone was brought to ${fileName}.`, "success");
  });
}

function clearGroupChat() {
  if (!collabSocket || !activeSessionId || !canUseCoHostTools()) return;
  collabSocket.emit("collab:clear-group-chat", { sessionId: activeSessionId }, (res) => {
    if (!res?.ok) {
      showNotification((res && res.error) || "Failed to clear group chat", "error");
      return;
    }
    showNotification("Group chat cleared.", "success");
  });
}

function saveSessionSnapshot() {
  if (!collabSocket || !activeSessionId || !isHost()) return;
  collabSocket.emit("collab:save-snapshot", { sessionId: activeSessionId }, (res) => {
    if (!res?.ok || !res.snapshot) {
      showNotification((res && res.error) || "Failed to save session snapshot", "error");
      return;
    }
    const blob = new Blob([JSON.stringify(res.snapshot, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `codx-session-${activeSessionId}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    showNotification("Session snapshot saved.", "success");
  });
}

function regenerateInviteLink() {
  if (!collabSocket || !activeSessionId || !isHost()) return;
  collabSocket.emit("collab:regenerate-link", { sessionId: activeSessionId }, (res) => {
    if (!res?.ok) {
      showNotification((res && res.error) || "Failed to regenerate link", "error");
      return;
    }
    activeSessionId = res.sessionId || activeSessionId;
    collabShareLink = res.shareLink || collabShareLink;
    window.history.replaceState({}, "", `/frontend.html/${activeSessionId}`);
    showNotification("Invite link regenerated.", "success");
    showGroupControls(activeSessionId);
  });
}

async function endSessionForEveryone() {
  if (!collabSocket || !activeSessionId || !isHost()) return;
  const dialog = await showAppConfirm(
    "END SESSION",
    "End the collaboration session for everyone?",
    "END SESSION",
    "CANCEL",
    "background:#d32f2f;",
  );
  if (!dialog?.ok) return;
  collabSocket.emit("collab:end-session", { sessionId: activeSessionId }, (res) => {
    if (!res?.ok) {
      showNotification((res && res.error) || "Failed to end session", "error");
    }
  });
}

function approveJoinRequest(socketId) {
  if (!collabSocket || !activeSessionId || !isHost()) return;
  collabSocket.emit("collab:approve-join", { sessionId: activeSessionId, socketId }, (res) => {
    if (!res?.ok) {
      showNotification((res && res.error) || "Failed to approve join request", "error");
      return;
    }
    showNotification("Join request approved.", "success");
  });
}

function rejectJoinRequest(socketId) {
  if (!collabSocket || !activeSessionId || !isHost()) return;
  collabSocket.emit("collab:reject-join", { sessionId: activeSessionId, socketId }, (res) => {
    if (!res?.ok) {
      showNotification((res && res.error) || "Failed to reject join request", "error");
      return;
    }
    showNotification("Join request rejected.", "success");
  });
}

function showJoinPendingState(sessionId, name) {
  joinRequestContext = { sessionId, name };
  collabModalView = "join-pending";
  setCollabCloseButtonVisible(false);
  modalTitle.innerHTML = "<strong>WAITING FOR APPROVAL</strong>";
  modalBody.innerHTML = `
    <p style="margin:8px 0 16px;color:var(--text-primary);">
      Your request to join <strong>${escapeHtml(sessionId)}</strong> as <strong>${escapeHtml(name)}</strong> is waiting for the host.
    </p>
  `;
  setModalActions("");
  collabModal.style.display = "flex";
}

function renderCollabControlButton({
  id,
  icon = "fa-solid fa-sliders",
  title = "Control",
  desc = "",
  active = false,
  tone = "",
}) {
  return `<button id="${escapeHtml(id)}" class="run-button collab-control-btn${active ? " is-active" : ""}"${tone ? ` data-tone="${escapeHtml(tone)}"` : ""} type="button">
    <i class="${escapeHtml(icon)}" aria-hidden="true"></i>
    <span class="collab-control-text">
      <span class="collab-control-title">${escapeHtml(title)}</span>
      <span class="collab-control-desc">${escapeHtml(desc)}</span>
    </span>
  </button>`;
}

function getManageableParticipants() {
  return collabParticipants.filter((participant) => canModerateParticipant(participant));
}

function countParticipantsWithFlag(flagName) {
  return getManageableParticipants().filter((participant) => Boolean(participant?.[flagName])).length;
}

function participantHasDisabledFeature(participant, featureKey) {
  return Array.isArray(participant?.disabledFeatures) && participant.disabledFeatures.includes(featureKey);
}

function countParticipantsWithDisabledFeature(featureKey) {
  return getManageableParticipants().filter((participant) =>
    participantHasDisabledFeature(participant, featureKey),
  ).length;
}

function getBulkFlagConfig(flagName) {
  const configs = {
    mutedChat: {
      title: "Mute Chat",
      modalTitle: "MUTE CHAT",
      desc: "Checked participants cannot send group or private messages.",
      statusOn: "Muted",
      statusOff: "Can chat",
      success: "Chat mute settings updated.",
      icon: "fa-solid fa-comment-slash",
    },
    frozenEditing: {
      title: "Freeze Editing",
      modalTitle: "FREEZE EDITING",
      desc: "Checked participants cannot push code edits until unfrozen.",
      statusOn: "Frozen",
      statusOff: "Can edit",
      success: "Editing freeze settings updated.",
      icon: "fa-solid fa-snowflake",
    },
    priority: {
      title: "Priority",
      modalTitle: "MARK PRIORITY",
      desc: "Checked participants are marked as priority in the participant list.",
      statusOn: "Priority",
      statusOff: "Normal",
      success: "Priority settings updated.",
      icon: "fa-solid fa-star",
    },
  };
  return configs[flagName] || null;
}

function setParticipantFeatureAccessPromise(targetName, disabledFeatures) {
  return new Promise((resolve) => {
    if (!collabSocket || !activeSessionId) {
      resolve({ ok: false, error: "Collaboration is not connected." });
      return;
    }
    collabSocket.emit(
      "collab:set-participant-feature-access",
      {
        sessionId: activeSessionId,
        targetName,
        disabledFeatures,
      },
      (res) => resolve(res || { ok: false, error: "No response from server." }),
    );
  });
}

function setParticipantFlagPromise(targetName, partial) {
  return new Promise((resolve) => {
    if (!collabSocket || !activeSessionId) {
      resolve({ ok: false, error: "Collaboration is not connected." });
      return;
    }
    collabSocket.emit(
      "collab:set-participant-flags",
      {
        sessionId: activeSessionId,
        targetName,
        ...(partial || {}),
      },
      (res) => resolve(res || { ok: false, error: "No response from server." }),
    );
  });
}

async function applyBulkFeatureAccess(featureKey, selectedNames) {
  const config = groupFeatureControlConfig.find((entry) => entry.key === featureKey);
  if (!config) return;
  const selected = new Set((selectedNames || []).map((name) => String(name || "").trim().toLowerCase()));
  const participants = getManageableParticipants();
  let changed = 0;

  for (const participant of participants) {
    const disabled = new Set(Array.isArray(participant.disabledFeatures) ? participant.disabledFeatures : []);
    const shouldBeDisabled = selected.has(String(participant.name || "").trim().toLowerCase());
    const isDisabled = disabled.has(featureKey);
    if (isDisabled === shouldBeDisabled) continue;
    if (shouldBeDisabled) {
      disabled.add(featureKey);
    } else {
      disabled.delete(featureKey);
    }
    const nextDisabledFeatures = Array.from(disabled);
    const result = await setParticipantFeatureAccessPromise(participant.name, nextDisabledFeatures);
    if (!result?.ok) {
      showNotification(result?.error || `Failed to update ${participant.name}.`, "error");
      return;
    }
    participant.disabledFeatures = nextDisabledFeatures;
    changed += 1;
  }

  showNotification(changed ? `${config.label} access updated.` : "No participant changes needed.", changed ? "success" : "info");
  showGroupControls(activeSessionId);
}

function showGroupFeatureAccessPicker(featureKey) {
  if (!canUseCoHostTools()) return;
  const config = groupFeatureControlConfig.find((entry) => entry.key === featureKey);
  if (!config) return;
  const participants = getManageableParticipants();
  collabModalView = "group-controls";
  setCollabCloseButtonVisible(true);
  modalTitle.innerHTML = `<strong>${escapeHtml(config.label)}</strong>`;
  modalBody.innerHTML = `
    <div class="collab-section-card">
      <h4 class="collab-section-title">${escapeHtml(config.label)}</h4>
      <p class="collab-section-note" style="margin-bottom:12px;">Checked participants will be affected by this feature restriction. Unchecked participants keep access unless a room-wide setting also blocks it.</p>
      <div class="collab-bulk-participant-list" id="bulkFeatureParticipantList">
        ${
          participants.length
            ? participants
                .map((participant) => {
                  const affected = participantHasDisabledFeature(participant, featureKey);
                  return `
                    <label class="collab-bulk-participant-option">
                      <input type="checkbox" value="${escapeHtml(participant.name)}" ${affected ? "checked" : ""}>
                      <span class="collab-participant-main">
                        <span class="collab-participant-color" style="background:${escapeHtml(participant.theme || "#4CAF50")};"></span>
                        <span class="collab-participant-text">
                          <span class="collab-participant-name">${escapeHtml(participant.name)}${participant.role ? ` (${escapeHtml(participant.role)})` : ""}</span>
                          <span class="collab-participant-meta">${escapeHtml(participant.currentFile || "No active file")}</span>
                        </span>
                      </span>
                      <span class="collab-bulk-status">${affected ? "Affected" : "Allowed"}</span>
                    </label>`;
                })
                .join("")
            : `<div class="collab-section-note">No participants can be changed from here.</div>`
        }
      </div>
    </div>
  `;
  setModalActions(`
    <button id="bulkFeatureApplyBtn" class="run-button"><strong>APPLY</strong></button>
    <button id="bulkFeatureBackBtn" class="run-button"><strong>BACK</strong></button>
  `);
  collabModal.style.display = "flex";
  const list = document.getElementById("bulkFeatureParticipantList");
  if (list) {
    list.querySelectorAll("input[type='checkbox']").forEach((input) => {
      input.addEventListener("change", () => {
        const status = input.closest(".collab-bulk-participant-option")?.querySelector(".collab-bulk-status");
        if (status) status.textContent = input.checked ? "Affected" : "Allowed";
      });
    });
  }
  const applyBtn = document.getElementById("bulkFeatureApplyBtn");
  const backBtn = document.getElementById("bulkFeatureBackBtn");
  if (applyBtn) {
    applyBtn.onclick = () => {
      const selectedNames = Array.from(
        document.querySelectorAll("#bulkFeatureParticipantList input[type='checkbox']:checked"),
      ).map((input) => input.value);
      applyBulkFeatureAccess(featureKey, selectedNames);
    };
  }
  if (backBtn) backBtn.onclick = () => showGroupControls(activeSessionId);
}

async function applyBulkParticipantFlag(flagName, selectedNames) {
  const config = getBulkFlagConfig(flagName);
  if (!config) return;
  const selected = new Set((selectedNames || []).map((name) => String(name || "").trim().toLowerCase()));
  const participants = getManageableParticipants();
  if (!participants.length) {
    showNotification("No participants can be changed from here.", "error");
    return;
  }

  let changed = 0;
  for (const participant of participants) {
    const shouldBeAffected = selected.has(String(participant.name || "").trim().toLowerCase());
    if (Boolean(participant[flagName]) === shouldBeAffected) continue;
    const result = await setParticipantFlagPromise(participant.name, { [flagName]: shouldBeAffected });
    if (!result?.ok) {
      showNotification(result?.error || `Failed to update ${participant.name}.`, "error");
      return;
    }
    participant[flagName] = shouldBeAffected;
    changed += 1;
  }

  showNotification(changed ? config.success : "No participant changes needed.", changed ? "success" : "info");
  showGroupControls(activeSessionId);
}

function showGroupParticipantFlagPicker(flagName) {
  if (!canUseCoHostTools()) return;
  const config = getBulkFlagConfig(flagName);
  if (!config) return;
  const participants = getManageableParticipants();
  collabModalView = "group-controls";
  setCollabCloseButtonVisible(true);
  modalTitle.innerHTML = `<strong>${escapeHtml(config.modalTitle)}</strong>`;
  modalBody.innerHTML = `
    <div class="collab-section-card">
      <h4 class="collab-section-title">${escapeHtml(config.title)}</h4>
      <p class="collab-section-note" style="margin-bottom:12px;">${escapeHtml(config.desc)} Check the participants who should be affected.</p>
      <div class="collab-bulk-participant-list" id="bulkParticipantList">
        ${
          participants.length
            ? participants
                .map((participant) => `
                  <label class="collab-bulk-participant-option">
                    <input type="checkbox" value="${escapeHtml(participant.name)}" ${participant[flagName] ? "checked" : ""}>
                    <span class="collab-participant-main">
                      <span class="collab-participant-color" style="background:${escapeHtml(participant.theme || "#4CAF50")};"></span>
                      <span class="collab-participant-text">
                        <span class="collab-participant-name">${escapeHtml(participant.name)}${participant.role ? ` (${escapeHtml(participant.role)})` : ""}</span>
                        <span class="collab-participant-meta">${escapeHtml(participant.currentFile || "No active file")}</span>
                      </span>
                    </span>
                    <span class="collab-bulk-status">${escapeHtml(participant[flagName] ? config.statusOn : config.statusOff)}</span>
                  </label>
                `)
                .join("")
            : `<div class="collab-section-note">No participants can be changed from here.</div>`
        }
      </div>
    </div>
  `;
  setModalActions(`
    <button id="bulkParticipantApplyBtn" class="run-button"><strong>APPLY</strong></button>
    <button id="bulkParticipantBackBtn" class="run-button"><strong>BACK</strong></button>
  `);
  collabModal.style.display = "flex";
  const list = document.getElementById("bulkParticipantList");
  if (list) {
    list.querySelectorAll("input[type='checkbox']").forEach((input) => {
      input.addEventListener("change", () => {
        const status = input.closest(".collab-bulk-participant-option")?.querySelector(".collab-bulk-status");
        if (status) status.textContent = input.checked ? config.statusOn : config.statusOff;
      });
    });
  }
  const applyBtn = document.getElementById("bulkParticipantApplyBtn");
  const backBtn = document.getElementById("bulkParticipantBackBtn");
  if (applyBtn) {
    applyBtn.onclick = () => {
      const selectedNames = Array.from(
        document.querySelectorAll("#bulkParticipantList input[type='checkbox']:checked"),
      ).map((input) => input.value);
      applyBulkParticipantFlag(flagName, selectedNames);
    };
  }
  if (backBtn) backBtn.onclick = () => showGroupControls(activeSessionId);
}

function showGroupControls(sessionId) {
  if (!canUseCoHostTools()) return;
  const hostView = isHost();
  const pendingHtml = collabPendingJoins.length
    ? collabPendingJoins
        .map(
          (entry) => `<div class="collab-pending-row">
            <div class="collab-participant-main">
              <span class="collab-participant-color" style="background:${escapeHtml(entry.theme || "#4CAF50")};"></span>
              <div class="collab-participant-text">
                <div class="collab-participant-name">${escapeHtml(entry.name)}</div>
                <div class="collab-participant-meta">Waiting for host approval</div>
              </div>
            </div>
            <span class="collab-pending-actions">
              <button class="run-button approve-join-btn" data-socket="${escapeHtml(entry.socketId)}" style="padding:4px 10px;"><strong>APPROVE</strong></button>
              <button class="run-button reject-join-btn" data-socket="${escapeHtml(entry.socketId)}" style="padding:4px 10px;background:#d32f2f;"><strong>REJECT</strong></button>
            </span>
          </div>`,
        )
        .join("")
    : `<div class="collab-section-note">No pending join requests.</div>`;
  const banLogHtml = collabBans.length
    ? collabBans
        .map(
          (entry) => `<div class="collab-pending-row">
            <div class="collab-participant-main">
              <div class="collab-participant-text">
                <div class="collab-participant-name">${escapeHtml(entry.name || "Unknown device")}</div>
                <div class="collab-participant-meta">Banned by ${escapeHtml(entry.bannedBy || "Host")} • ${escapeHtml(formatParticipantJoinedAt(entry.bannedAt))}</div>
              </div>
            </div>
            <span class="collab-pending-actions">
              <button class="run-button unban-device-btn" data-device-id="${escapeHtml(entry.deviceId || "")}"><strong>UNBAN</strong></button>
            </span>
          </div>`,
        )
        .join("")
    : `<div class="collab-section-note">No banned devices in this session.</div>`;

  collabModalView = "group-controls";
  setCollabCloseButtonVisible(true);
  modalTitle.innerHTML = "<strong>GROUP CONTROLS</strong>";
  modalBody.innerHTML = `
    <div class="collab-section-card">
      <h4 class="collab-section-title">Session Overview</h4>
      <div class="collab-meta-grid">
        <div class="collab-meta-item">
          <span class="collab-meta-label">Share Link</span>
          <span class="collab-meta-value">${escapeHtml(collabShareLink || `${window.location.origin}/frontend.html/${sessionId}`)}</span>
        </div>
        <div class="collab-meta-item">
          <span class="collab-meta-label">Timer</span>
          <span class="collab-meta-value">${collabPermissions.sessionEndsAt ? formatSessionTimeRemaining(collabPermissions.sessionEndsAt) : "Off"}</span>
        </div>
      </div>
    </div>
    ${hostView ? `<div class="collab-section-card">
      <h4 class="collab-section-title">Room Permissions</h4>
      <div class="collab-control-grid">
        ${renderCollabControlButton({ id: "groupLockRoomBtn", icon: "fa-solid fa-lock", title: collabPermissions.roomLocked ? "Unlock Room" : "Lock Room", desc: collabPermissions.roomLocked ? "New guests can join again." : "Stop new guests from joining.", active: collabPermissions.roomLocked })}
        ${renderCollabControlButton({ id: "groupReadOnlyBtn", icon: "fa-solid fa-eye", title: collabPermissions.readOnlyAll ? "Disable Read-Only" : "Read-Only For All", desc: collabPermissions.readOnlyAll ? "Let everyone edit again." : "Stop editing for the room.", active: collabPermissions.readOnlyAll })}
        ${renderCollabControlButton({ id: "groupDisableChatBtn", icon: "fa-solid fa-comments", title: `Chat (${countParticipantsWithDisabledFeature("chat")} affected)`, desc: "Pick who cannot chat.", active: collabPermissions.disableAllChat || countParticipantsWithDisabledFeature("chat") > 0 })}
        ${renderCollabControlButton({ id: "groupDisableSaveBtn", icon: "fa-solid fa-floppy-disk", title: `Save (${countParticipantsWithDisabledFeature("saveProject")} affected)`, desc: "Pick who cannot save.", active: collabPermissions.disableSaveProject || countParticipantsWithDisabledFeature("saveProject") > 0 })}
        ${renderCollabControlButton({ id: "groupDisableOpenSavedBtn", icon: "fa-solid fa-folder-open", title: `Open Saved (${countParticipantsWithDisabledFeature("openSaved")} affected)`, desc: "Pick who cannot open saved projects.", active: collabPermissions.disableOpenSavedProjects || countParticipantsWithDisabledFeature("openSaved") > 0 })}
        ${renderCollabControlButton({ id: "groupDisableTemplatesBtn", icon: "fa-solid fa-layer-group", title: `Templates (${countParticipantsWithDisabledFeature("templates")} affected)`, desc: "Pick who cannot use templates.", active: collabPermissions.disableTemplates || countParticipantsWithDisabledFeature("templates") > 0 })}
        ${renderCollabControlButton({ id: "groupDisablePublishBtn", icon: "fa-solid fa-share-nodes", title: `Publish (${countParticipantsWithDisabledFeature("publishShare")} affected)`, desc: "Pick who cannot publish.", active: collabPermissions.disablePublishShare || countParticipantsWithDisabledFeature("publishShare") > 0 })}
        ${renderCollabControlButton({ id: "groupDisableRunBtn", icon: "fa-solid fa-play", title: `Run (${countParticipantsWithDisabledFeature("runCode")} affected)`, desc: "Pick who cannot run preview.", active: collabPermissions.disableRunCode || countParticipantsWithDisabledFeature("runCode") > 0 })}
        ${renderCollabControlButton({ id: "groupDisableConsoleBtn", icon: "fa-solid fa-terminal", title: `Console (${countParticipantsWithDisabledFeature("consoleAccess")} affected)`, desc: "Pick who cannot use console.", active: collabPermissions.disableConsoleAccess || countParticipantsWithDisabledFeature("consoleAccess") > 0 })}
      </div>
    </div>` : ""}
    <div class="collab-section-card">
      <h4 class="collab-section-title">Participant Controls</h4>
      <div class="collab-control-grid">
        ${renderCollabControlButton({ id: "groupManageMuteBtn", icon: "fa-solid fa-comment-slash", title: `Mute Chat (${countParticipantsWithFlag("mutedChat")} affected)`, desc: "Pick who cannot chat.", active: countParticipantsWithFlag("mutedChat") > 0, tone: "warning" })}
        ${renderCollabControlButton({ id: "groupManageFreezeBtn", icon: "fa-solid fa-snowflake", title: `Freeze Editing (${countParticipantsWithFlag("frozenEditing")} affected)`, desc: "Pick who cannot edit.", active: countParticipantsWithFlag("frozenEditing") > 0, tone: "blue" })}
        ${renderCollabControlButton({ id: "groupManagePriorityBtn", icon: "fa-solid fa-star", title: `Priority (${countParticipantsWithFlag("priority")} marked)`, desc: "Pick priority people.", active: countParticipantsWithFlag("priority") > 0, tone: "purple" })}
      </div>
    </div>
    <div class="collab-section-card">
      <h4 class="collab-section-title">Team Focus</h4>
      <div class="collab-control-grid">
        ${renderCollabControlButton({ id: "groupBringToFileBtn", icon: "fa-solid fa-arrows-to-eye", title: "Bring To File", desc: "Move everyone to one file." })}
        ${renderCollabControlButton({ id: "groupPinFileBtn", icon: "fa-solid fa-thumbtack", title: collabPermissions.pinnedFile ? "Change Pinned File" : "Pin Team File", desc: collabPermissions.pinnedFile || "Keep a file visible to the team.", active: Boolean(collabPermissions.pinnedFile) })}
        ${hostView ? renderCollabControlButton({ id: "groupHighlightBtn", icon: "fa-solid fa-crosshairs", title: collabPermissions.groupHighlightFile ? "Change Team Focus" : "Group Highlight", desc: collabPermissions.groupHighlightFile || "Highlight a file for everyone.", active: Boolean(collabPermissions.groupHighlightFile) }) : ""}
        ${hostView ? renderCollabControlButton({ id: "groupAnnouncementBtn", icon: "fa-solid fa-bullhorn", title: "Announcement", desc: collabPermissions.announcementBar || "Show a message to the room.", active: Boolean(collabPermissions.announcementBar) }) : ""}
        ${renderCollabControlButton({ id: "groupClearChatBtn", icon: "fa-solid fa-trash", title: "Clear Group Chat", desc: "Remove public chat messages.", tone: "danger" })}
      </div>
    </div>
    ${hostView ? `<div class="collab-section-card">
      <h4 class="collab-section-title">Session Tools</h4>
      <div class="collab-control-grid">
        ${renderCollabControlButton({ id: "groupPauseBtn", icon: "fa-solid fa-pause", title: collabPermissions.pauseCollab ? "Resume Collab" : "Pause Collab", desc: collabPermissions.pauseCollab ? "Let syncing continue." : "Temporarily pause edits.", active: collabPermissions.pauseCollab })}
        ${renderCollabControlButton({ id: "groupTimerBtn", icon: "fa-solid fa-stopwatch", title: "Session Timer", desc: collabPermissions.sessionEndsAt ? formatSessionTimeRemaining(collabPermissions.sessionEndsAt) : "Set or clear a timer.", active: Boolean(collabPermissions.sessionEndsAt) })}
        ${renderCollabControlButton({ id: "groupSnapshotBtn", icon: "fa-solid fa-download", title: "Save Snapshot", desc: "Download session state." })}
        ${renderCollabControlButton({ id: "groupRegenLinkBtn", icon: "fa-solid fa-rotate", title: "Regenerate Invite", desc: "Create a fresh invite link." })}
        ${renderCollabControlButton({ id: "groupApprovalBtn", icon: "fa-solid fa-user-check", title: collabPermissions.requireJoinApproval ? "Disable Approval" : "Approve New Joins", desc: "Review guests before joining.", active: collabPermissions.requireJoinApproval })}
        ${renderCollabControlButton({ id: "groupQuietBtn", icon: "fa-solid fa-volume-xmark", title: collabPermissions.quietMode ? "Disable Quiet Mode" : "Quiet Mode", desc: "Reduce live presence noise.", active: collabPermissions.quietMode })}
        ${renderCollabControlButton({ id: "groupEndSessionBtn", icon: "fa-solid fa-power-off", title: "End Session", desc: "Close the room for everyone.", tone: "danger" })}
      </div>
    </div>` : ""}
    ${hostView ? `<div class="collab-section-card">
    <h4 class="collab-section-title">Pending Join Requests</h4>
    <div class="collab-participant-list">${pendingHtml}</div>
    </div>` : ""}
    ${hostView ? `<div class="collab-section-card">
    <h4 class="collab-section-title">Ban Log</h4>
    <div class="collab-participant-list">${banLogHtml}</div>
    </div>` : ""}
  `;
  setModalActions(`<button id="groupDoneBtn" class="run-button"><strong>BACK TO SESSION</strong></button>`);
  collabModal.style.display = "flex";

  const bind = (id, handler) => {
    const btn = document.getElementById(id);
    if (btn) btn.onclick = handler;
  };
  bind("groupLockRoomBtn", () =>
    updateGroupPermission({ roomLocked: !collabPermissions.roomLocked }, collabPermissions.roomLocked ? "Room unlocked." : "Room locked."),
  );
  bind("groupReadOnlyBtn", () =>
    updateGroupPermission({ readOnlyAll: !collabPermissions.readOnlyAll }, collabPermissions.readOnlyAll ? "Read-only disabled." : "Room set to read-only."),
  );
  bind("groupDisableChatBtn", () => showGroupFeatureAccessPicker("chat"));
  bind("groupDisableSaveBtn", () => showGroupFeatureAccessPicker("saveProject"));
  bind("groupDisableOpenSavedBtn", () => showGroupFeatureAccessPicker("openSaved"));
  bind("groupDisableTemplatesBtn", () => showGroupFeatureAccessPicker("templates"));
  bind("groupDisablePublishBtn", () => showGroupFeatureAccessPicker("publishShare"));
  bind("groupDisableRunBtn", () => showGroupFeatureAccessPicker("runCode"));
  bind("groupDisableConsoleBtn", () => showGroupFeatureAccessPicker("consoleAccess"));
  bind("groupManageMuteBtn", () => showGroupParticipantFlagPicker("mutedChat"));
  bind("groupManageFreezeBtn", () => showGroupParticipantFlagPicker("frozenEditing"));
  bind("groupManagePriorityBtn", () => showGroupParticipantFlagPicker("priority"));
  bind("groupBringToFileBtn", bringEveryoneToFile);
  bind("groupPinFileBtn", async () => {
    const result = await promptForExistingFile("Pin which file for the team? Leave blank to clear.", collabPermissions.pinnedFile || (activeFile ? activeFile.name : ""));
    if (result.status === "cancel") return;
    if (result.status === "empty") {
      updateGroupPermission({ pinnedFile: "" }, "Pinned file cleared.");
      return;
    }
    if (result.status !== "ok") {
      showNotification("Choose an existing file name.", "error");
      return;
    }
    updateGroupPermission({ pinnedFile: result.fileName }, `Pinned ${result.fileName} for the team.`);
  });
  bind("groupClearChatBtn", clearGroupChat);
  bind("groupAnnouncementBtn", async () => {
    const dialog = await showAppPrompt(
      "ANNOUNCEMENT BAR",
      "Enter the announcement text. Leave it empty to clear.",
      collabPermissions.announcementBar || "",
      "Type announcement here",
    );
    if (!dialog?.ok) return;
    const text = String(dialog.value || "");
    updateGroupPermission({ announcementBar: text.trim() }, text.trim() ? "Announcement updated." : "Announcement cleared.");
  });
  bind("groupPauseBtn", () =>
    updateGroupPermission({ pauseCollab: !collabPermissions.pauseCollab }, collabPermissions.pauseCollab ? "Collaboration resumed." : "Collaboration paused."),
  );
  bind("groupTimerBtn", async () => {
    const currentMinutes = collabPermissions.sessionEndsAt ? Math.max(1, Math.ceil((collabPermissions.sessionEndsAt - Date.now()) / 60000)) : 15;
    const dialog = await showAppPrompt(
      "SESSION TIMER",
      "Set session timer in minutes. Enter 0 to clear.",
      String(currentMinutes),
      "15",
    );
    if (!dialog?.ok) return;
    const value = dialog.value;
    const minutes = Math.max(0, Number(value));
    if (!Number.isFinite(minutes)) {
      showNotification("Enter a valid number of minutes.", "error");
      return;
    }
    updateGroupPermission(
      { sessionEndsAt: minutes > 0 ? Date.now() + minutes * 60000 : null },
      minutes > 0 ? `Session timer set for ${minutes} minute(s).` : "Session timer cleared.",
    );
  });
  bind("groupEndSessionBtn", endSessionForEveryone);
  bind("groupSnapshotBtn", saveSessionSnapshot);
  bind("groupRegenLinkBtn", regenerateInviteLink);
  bind("groupApprovalBtn", () =>
    updateGroupPermission(
      { requireJoinApproval: !collabPermissions.requireJoinApproval },
      collabPermissions.requireJoinApproval ? "Join approval disabled." : "Join approval enabled.",
    ),
  );
  bind("groupHighlightBtn", async () => {
    const result = await promptForExistingFile("Highlight which file for the group? Leave blank to clear.", collabPermissions.groupHighlightFile || (activeFile ? activeFile.name : ""));
    if (result.status === "cancel") return;
    if (result.status === "empty") {
      updateGroupPermission({ groupHighlightFile: "" }, "Team focus cleared.");
      return;
    }
    if (result.status !== "ok") {
      showNotification("Choose an existing file name.", "error");
      return;
    }
    updateGroupPermission({ groupHighlightFile: result.fileName }, `Team focus set to ${result.fileName}.`);
  });
  bind("groupQuietBtn", () =>
    updateGroupPermission({ quietMode: !collabPermissions.quietMode }, collabPermissions.quietMode ? "Quiet mode disabled." : "Quiet mode enabled."),
  );
  bind("groupDoneBtn", () => showSessionDetails(sessionId));

  if (hostView) {
    modalBody.querySelectorAll(".approve-join-btn").forEach((btn) => {
      btn.addEventListener("click", () => approveJoinRequest(btn.getAttribute("data-socket") || ""));
    });
    modalBody.querySelectorAll(".reject-join-btn").forEach((btn) => {
      btn.addEventListener("click", () => rejectJoinRequest(btn.getAttribute("data-socket") || ""));
    });
    modalBody.querySelectorAll(".unban-device-btn").forEach((btn) => {
      btn.addEventListener("click", () => requestUnbanDevice(btn.getAttribute("data-device-id") || ""));
    });
  }
}

function setCoHost(targetName, makeCoHost) {
  if (!collabSocket || !activeSessionId || !isHost()) return;
  collabSocket.emit(
    "collab:set-role",
    {
      sessionId: activeSessionId,
      targetName,
      role: makeCoHost ? "co-host" : "participant",
    },
    (res) => {
      if (!res?.ok) {
        showNotification((res && res.error) || "Failed to update participant role", "error");
      } else if (collabModal.style.display === "flex") {
        showSessionDetails(activeSessionId);
      }
    },
  );
}

function updateParticipantFlags(targetName, partial, successMessage) {
  if (!collabSocket || !activeSessionId || !canUseCoHostTools()) return;
  const participant = getParticipantByName(targetName);
  if (!canModerateParticipant(participant)) {
    showNotification("You do not have permission to update this participant.", "error");
    return;
  }
  collabSocket.emit(
    "collab:set-participant-flags",
    {
      sessionId: activeSessionId,
      targetName,
      ...(partial || {}),
    },
    (res) => {
      if (!res?.ok) {
        showNotification((res && res.error) || "Failed to update participant", "error");
      } else {
        if (successMessage) showNotification(successMessage, "success");
        showParticipantActions(targetName);
      }
    },
  );
}

function transferHostToParticipant(targetName) {
  if (!collabSocket || !activeSessionId || !isHost()) return;
  collabSocket.emit(
    "collab:transfer-host",
    { sessionId: activeSessionId, targetName },
    (res) => {
      if (!res?.ok) {
        showNotification((res && res.error) || "Failed to transfer host", "error");
      } else {
        showNotification(`${targetName} is now the host.`, "success");
        showSessionDetails(activeSessionId);
      }
    },
  );
}

function stopFollowingParticipant(showToast = true) {
  if (!followedParticipantName) return;
  const previousName = followedParticipantName;
  followedParticipantName = "";
  if (showToast) {
    showNotification(`Stopped following ${previousName}.`, "info");
  }
}

function showTransferHostConfirmation(targetName) {
  if (!isHost()) return;
  const safeName = String(targetName || "").trim();
  if (!safeName) return;

  collabModalView = "participant-actions";
  setCollabCloseButtonVisible(true);
  modalTitle.innerHTML = "<strong>TRANSFER HOST</strong>";
  modalBody.innerHTML = `
    <p style="margin: 8px 0 16px; color: var(--text-primary);">
      Are you sure you want to transfer host to <strong>${escapeHtml(safeName)}</strong>?
    </p>
  `;
  setModalActions(`
    <button id="transferHostYesBtn" class="run-button" style="background:#d32f2f;"><strong>YES</strong></button>
    <button id="transferHostNoBtn" class="run-button" style="background:#2e7d32;"><strong>NO</strong></button>
  `);
  collabModal.style.display = "flex";

  const yesBtn = document.getElementById("transferHostYesBtn");
  const noBtn = document.getElementById("transferHostNoBtn");
  if (yesBtn) yesBtn.onclick = () => transferHostToParticipant(safeName);
  if (noBtn) noBtn.onclick = () => showParticipantActions(safeName);
}

function updateParticipantAllowedFiles(targetName, allowedFiles, reset = false) {
  if (!collabSocket || !activeSessionId || !canUseCoHostTools()) return;
  const participant = getParticipantByName(targetName);
  if (!canModerateParticipant(participant)) {
    showNotification("You do not have permission to update this file access.", "error");
    return;
  }
  collabSocket.emit(
    "collab:set-participant-files",
    {
      sessionId: activeSessionId,
      targetName,
      allowedFiles,
      reset,
    },
    (res) => {
      if (!res?.ok) {
        showNotification((res && res.error) || "Failed to update file access", "error");
      } else {
        showNotification(
          reset ? `${targetName}'s file access was reset.` : `${targetName}'s file access updated.`,
          "success",
        );
        showParticipantActions(targetName);
      }
    },
  );
}

const groupFeatureControlConfig = [
  { key: "chat", buttonId: "groupDisableChatBtn", label: "DISABLE CHAT" },
  { key: "saveProject", buttonId: "groupDisableSaveBtn", label: "DISABLE SAVE PROJECT" },
  { key: "openSaved", buttonId: "groupDisableOpenSavedBtn", label: "DISABLE OPEN SAVED" },
  { key: "templates", buttonId: "groupDisableTemplatesBtn", label: "DISABLE TEMPLATES" },
  { key: "publishShare", buttonId: "groupDisablePublishBtn", label: "DISABLE PUBLISH / SHARE" },
  { key: "runCode", buttonId: "groupDisableRunBtn", label: "DISABLE RUN" },
  { key: "consoleAccess", buttonId: "groupDisableConsoleBtn", label: "DISABLE CONSOLE" },
];

function getFeatureControlLabel(featureKey) {
  return (
    groupFeatureControlConfig.find((entry) => entry.key === featureKey)?.label ||
    String(featureKey || "").trim()
  );
}

function formatParticipantJoinedAt(ts) {
  if (!ts) return "Unknown";
  try {
    return new Date(ts).toLocaleString();
  } catch {
    return "Unknown";
  }
}

function showParticipantDetails(targetName) {
  if (!canUseCoHostTools()) return;
  const participant = getParticipantByName(targetName);
  if (!canModerateParticipant(participant)) return;
  const allowedText = Array.isArray(participant.allowedFiles)
    ? participant.allowedFiles.length
      ? participant.allowedFiles.join(", ")
      : "No file access"
    : "Using session file access";
  collabModalView = "participant-actions";
  setCollabCloseButtonVisible(true);
  modalTitle.innerHTML = "<strong>PARTICIPANT DETAILS</strong>";
  modalBody.innerHTML = `
    <div style="text-align:left;display:grid;gap:10px;">
      <p><strong>Name:</strong> ${escapeHtml(participant.name)}</p>
      <p><strong>Role:</strong> ${escapeHtml(participant.role || "participant")}</p>
      <p><strong>Current file:</strong> ${escapeHtml(participant.currentFile || "None")}</p>
      <p><strong>Joined:</strong> ${escapeHtml(formatParticipantJoinedAt(participant.joinedAt))}</p>
      <p><strong>Chat:</strong> ${participant.mutedChat ? "Muted" : "Enabled"}</p>
      <p><strong>Editing:</strong> ${participant.frozenEditing ? "Frozen" : "Enabled"}</p>
      <p><strong>Priority:</strong> ${participant.priority ? "Marked" : "Normal"}</p>
      <p><strong>File access:</strong> ${escapeHtml(allowedText)}</p>
    </div>
  `;
  setModalActions(`
    <button id="participantDetailsBackBtn" class="run-button"><strong>BACK</strong></button>
  `);
  const backBtn = document.getElementById("participantDetailsBackBtn");
  if (backBtn) backBtn.onclick = () => showParticipantActions(targetName);
  collabModal.style.display = "flex";
}

function showParticipantFileAccessEditor(targetName) {
  if (!canUseCoHostTools()) return;
  const participant = getParticipantByName(targetName);
  if (!canModerateParticipant(participant)) return;
  const currentSet = new Set(Array.isArray(participant.allowedFiles) ? participant.allowedFiles : []);
  const options = projectFiles
    .map((file) => `
      <label class="file-access-option">
        <span class="file-access-check">
          <input type="checkbox" value="${escapeHtml(file.name)}" ${currentSet.has(file.name) ? "checked" : ""}>
          <span class="file-access-box" aria-hidden="true"></span>
        </span>
        <span class="file-access-name">${escapeHtml(file.name)}</span>
      </label>
    `)
    .join("");
  collabModalView = "participant-actions";
  setCollabCloseButtonVisible(true);
  modalTitle.innerHTML = "<strong>ALLOW FILE ACCESS</strong>";
  modalBody.innerHTML = `
    <p style="margin: 8px 0 12px; color: var(--text-primary);">
      Choose which files <strong>${escapeHtml(participant.name)}</strong> can edit.
    </p>
    <div id="participantFileAccessList" class="participant-file-access-list" style="text-align:left;max-height:220px;overflow:auto;border:1px solid var(--border-color);border-radius:8px;padding:10px;background:var(--bg-primary);">
      ${options || `<div style="color:var(--text-muted);">No files available.</div>`}
    </div>
  `;
  setModalActions(`
    <button id="participantFileAccessSaveBtn" class="run-button"><strong>SAVE</strong></button>
    <button id="participantFileAccessResetBtn" class="run-button"><strong>RESET ACCESS</strong></button>
    <button id="participantFileAccessBackBtn" class="run-button"><strong>BACK</strong></button>
  `);
  const saveBtn = document.getElementById("participantFileAccessSaveBtn");
  const resetBtn = document.getElementById("participantFileAccessResetBtn");
  const backBtn = document.getElementById("participantFileAccessBackBtn");
  if (saveBtn) {
    saveBtn.onclick = () => {
      const inputs = Array.from(
        document.querySelectorAll("#participantFileAccessList input[type='checkbox']:checked"),
      );
      updateParticipantAllowedFiles(
        participant.name,
        inputs.map((input) => input.value),
        false,
      );
    };
  }
  if (resetBtn) {
    resetBtn.onclick = () => updateParticipantAllowedFiles(participant.name, [], true);
  }
  if (backBtn) backBtn.onclick = () => showParticipantActions(targetName);
  collabModal.style.display = "flex";
}

function followParticipant(targetName) {
  const participant = getParticipantByName(targetName);
  if (!participant || !participant.currentFile) {
    showNotification("That participant is not on a specific file yet.", "info");
    return;
  }
  followedParticipantName = participant.name;
  switchFile(participant.currentFile);
  setTimeout(() => syncFollowedParticipantCursor(), 0);
  showNotification(`Following ${participant.name} to ${participant.currentFile}`, "success");
}

function syncFollowedParticipantView() {
  if (!followedParticipantName) return;
  const participant = getParticipantByName(followedParticipantName);
  if (!participant) {
    stopFollowingParticipant(false);
    showNotification("Stopped following because that participant left the session.", "info");
    return;
  }
  if (!participant.currentFile) return;
  if (!activeFile || activeFile.name !== participant.currentFile) {
    switchFile(participant.currentFile);
    setTimeout(() => syncFollowedParticipantCursor(), 0);
    return;
  }
  syncFollowedParticipantCursor();
}

function syncFollowedParticipantCursor(cursorOverride = null) {
  if (!followedParticipantName) return;
  const participant = getParticipantByName(followedParticipantName);
  if (!participant || !participant.currentFile || !activeFile) return;
  if (activeFile.name !== participant.currentFile) return;

  const cursor =
    cursorOverride && cursorOverride.name === followedParticipantName
      ? cursorOverride
      : remoteCursorState[followedParticipantName];
  if (!cursor || cursor.fileName !== activeFile.name) return;

  const editor = document.getElementById("activeEditor");
  if (!editor) return;

  const style = window.getComputedStyle(editor);
  const padLeft = parseFloat(style.paddingLeft) || 0;
  const padRight = parseFloat(style.paddingRight) || 0;
  const padTop = parseFloat(style.paddingTop) || 0;
  const padBottom = parseFloat(style.paddingBottom) || 0;
  const viewportWidth = Math.max(1, editor.clientWidth - padLeft - padRight);
  const viewportHeight = Math.max(1, editor.clientHeight - padTop - padBottom);
  const totalWidth = Math.max(1, (editor.scrollWidth || viewportWidth) - padLeft - padRight);
  const totalHeight = Math.max(1, (editor.scrollHeight || viewportHeight) - padTop - padBottom);

  const cursorX = Math.max(0, Math.min(totalWidth, Number(cursor.x || 0) * totalWidth));
  const cursorY = Math.max(0, Math.min(totalHeight, Number(cursor.y || 0) * totalHeight));
  const maxScrollLeft = Math.max(0, editor.scrollWidth - editor.clientWidth);
  const maxScrollTop = Math.max(0, editor.scrollHeight - editor.clientHeight);
  const targetScrollLeft = Math.max(
    0,
    Math.min(maxScrollLeft, Math.round(cursorX - viewportWidth * 0.5)),
  );
  const targetScrollTop = Math.max(
    0,
    Math.min(maxScrollTop, Math.round(cursorY - viewportHeight * 0.5)),
  );

  if (Math.abs(editor.scrollLeft - targetScrollLeft) > 4) {
    editor.scrollLeft = targetScrollLeft;
  }
  if (Math.abs(editor.scrollTop - targetScrollTop) > 4) {
    editor.scrollTop = targetScrollTop;
  }
}

function getPrivateChatCandidates() {
  return collabParticipants.filter((p) => p.name !== myInfo.name);
}

function getCurrentChatMessages() {
  if (collabChatMode === "private") {
    const target = collabChatTarget;
    if (!target) return [];
    return collabPrivateMessages.filter(
      (m) =>
        (m.from === myInfo.name && m.to === target) ||
        (m.from === target && m.to === myInfo.name),
    );
  }
  return collabGroupMessages;
}

function formatChatTime(ts) {
  try {
    return new Date(ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
}

function getParticipantThemeByName(name) {
  const p = collabParticipants.find((entry) => entry.name === name);
  return (p && p.theme) || "#4CAF50";
}

function renderCollabChatMessages() {
  const listEl = document.getElementById("collabChatMessages");
  if (!listEl) return;

  const messages = getCurrentChatMessages();
  if (!messages.length) {
    listEl.innerHTML = `<div style="color:var(--text-muted);font-size:12px;">No messages yet.</div>`;
    return;
  }

  listEl.innerHTML = messages
    .map((m) => {
      const mine = m.from === myInfo.name;
      const senderTheme = m.fromTheme || getParticipantThemeByName(m.from);
      return `<div style="margin-bottom:8px; padding:8px; border:1px solid var(--border-color); border-radius:8px; background:${mine ? "color-mix(in srgb, var(--accent-color) 15%, var(--bg-tertiary))" : "var(--bg-tertiary)"};">
        <div style="display:flex;justify-content:space-between;gap:10px;font-size:11px;color:var(--text-muted);">
          <span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${escapeHtml(senderTheme)};margin-right:6px;vertical-align:middle;"></span><strong style="color:${escapeHtml(senderTheme)};">${escapeHtml(m.from)}</strong>${m.to ? ` to <strong>${escapeHtml(m.to)}</strong>` : ""}</span>
          <span>${escapeHtml(formatChatTime(m.ts || Date.now()))}</span>
        </div>
        <div style="margin-top:4px;color:var(--text-primary);white-space:pre-wrap;word-break:break-word;">${escapeHtml(m.text || "")}</div>
      </div>`;
    })
    .join("");

  listEl.scrollTop = listEl.scrollHeight;
}


function buildCollabChatPanelHtml() {
  const privateCandidates = getPrivateChatCandidates();
  if (!collabChatTarget && privateCandidates.length) {
    collabChatTarget = privateCandidates[0].name;
  }
  if (collabChatTarget && !privateCandidates.some((p) => p.name === collabChatTarget)) {
    collabChatTarget = privateCandidates[0] ? privateCandidates[0].name : "";
  }
  if (collabChatMode === "private" && !collabChatTarget) {
    collabChatMode = "group";
  }

  const groupDisabled = collabPermissions.disableGroupChat || collabPermissions.disableAllChat;
  const chatLocked = collabPermissions.disableAllChat;
  const groupOption = `<option value="group" ${collabChatMode === "group" ? "selected" : ""} ${groupDisabled ? "disabled" : ""}>Group Chat${groupDisabled ? " (disabled)" : ""}</option>`;
  const privateOption = `<option value="private" ${collabChatMode === "private" ? "selected" : ""}>Private Chat</option>`;
  const privateOptions = privateCandidates
    .map((p) => `<option value="${escapeHtml(p.name)}" ${p.name === collabChatTarget ? "selected" : ""}>${escapeHtml(p.name)}</option>`)
    .join("");

  return `
    <hr style="border-color:var(--border-color);margin:15px 0;">
    <h4 style="text-align:left;margin:0 0 10px;">Chat</h4>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px;">
      <select id="collabChatMode" style="flex:1;min-width:140px;padding:8px;background:var(--bg-tertiary);border:1px solid var(--border-color);color:var(--text-primary);border-radius:6px;">
        ${groupOption}
        ${privateOption}
      </select>
      <select id="collabChatTarget" style="flex:1;min-width:140px;padding:8px;background:var(--bg-tertiary);border:1px solid var(--border-color);color:var(--text-primary);border-radius:6px;${collabChatMode === "private" ? "" : "display:none;"}">
        ${privateOptions}
      </select>
    </div>
    <div id="collabChatMessages" style="height:180px;overflow:auto;border:1px solid var(--border-color);border-radius:8px;padding:10px;background:var(--bg-primary);margin-bottom:8px;"></div>
    <div style="display:flex;gap:8px;">
      <input id="collabChatInput" type="text" maxlength="500" ${chatLocked ? "disabled" : ""} placeholder="${chatLocked ? "Chat is disabled by the host..." : "Type a message..."}" style="flex:1;padding:10px;background:var(--bg-tertiary);border:1px solid var(--border-color);color:var(--text-primary);border-radius:6px;">
      <button id="collabChatSendBtn" class="run-button" style="padding:8px 12px;" ${chatLocked ? "disabled" : ""}><strong>SEND</strong></button>
    </div>
  `;
}

function bindCollabChatControls() {
  const modeEl = document.getElementById("collabChatMode");
  const targetEl = document.getElementById("collabChatTarget");
  const inputEl = document.getElementById("collabChatInput");
  const sendBtn = document.getElementById("collabChatSendBtn");
  if (!modeEl || !inputEl || !sendBtn) return;

  modeEl.onchange = () => {
    collabChatMode = modeEl.value;
    if (targetEl) {
      targetEl.style.display = collabChatMode === "private" ? "" : "none";
      if (collabChatMode === "private" && !targetEl.value && targetEl.options.length) {
        targetEl.value = targetEl.options[0].value;
      }
      collabChatTarget = targetEl.value || collabChatTarget;
    }
    renderCollabChatMessages();
  };

  if (targetEl) {
    targetEl.onchange = () => {
      collabChatTarget = targetEl.value || "";
      renderCollabChatMessages();
    };
  }

  const send = () => {
    const text = (inputEl.value || "").trim();
    if (!text) return;
    if (!collabSocket || !activeSessionId) return;
    if (!isHost() && collabPermissions.disableAllChat) {
      showNotification("The host disabled chat for the group.", "error");
      return;
    }
    const payload = {
      sessionId: activeSessionId,
      mode: collabChatMode,
      text,
    };
    if (collabChatMode === "private") {
      payload.toName = collabChatTarget;
      if (!payload.toName) {
        showNotification("Select a participant for private chat.", "error");
        return;
      }
    }
    collabSocket.emit("collab:chat:send", payload, (res) => {
      if (!res?.ok) {
        showNotification((res && res.error) || "Failed to send message.", "error");
      } else {
        inputEl.value = "";
      }
    });
  };

  sendBtn.onclick = send;
  inputEl.onkeydown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      send();
    }
  };
}

function requestCollabChatHistory() {
  if (!collabSocket || !activeSessionId) return;
  collabSocket.emit("collab:chat:history", { sessionId: activeSessionId }, (res) => {
    if (!res?.ok) return;
    collabGroupMessages = Array.isArray(res.groupMessages) ? res.groupMessages : [];
    collabPrivateMessages = Array.isArray(res.privateMessages) ? res.privateMessages : [];
    renderCollabChatMessages();
  });
}

// background timers now managed in startBackgroundTimers()

function requestKickParticipant(targetName) {
  if (!collabSocket || !activeSessionId || !canUseCoHostTools()) {
    showNotification("Only the host or co-host can kick participants.", "error");
    return;
  }
  const safeName = String(targetName || "").trim();
  if (!safeName) return;
  const participant = getParticipantByName(safeName);
  if (!canModerateParticipant(participant)) {
    showNotification("You do not have permission to kick this participant.", "error");
    return;
  }

  let ackReceived = false;
  const ackTimer = setTimeout(() => {
    if (!ackReceived) {
      showNotification(
        "Kick request timed out. Restart the collaboration server and try again.",
        "error",
      );
    }
  }, 2500);

  collabSocket.emit(
    "collab:kick",
    { sessionId: activeSessionId, targetName: safeName },
    (res) => {
      ackReceived = true;
      clearTimeout(ackTimer);
      if (!res?.ok) {
        showNotification((res && res.error) || "Failed to kick participant", "error");
      } else {
        showNotification(`${safeName} was removed from the session`, "success");
        showSessionDetails(activeSessionId);
      }
    },
  );
}

function requestBanParticipant(targetName) {
  if (!collabSocket || !activeSessionId || !canUseCoHostTools()) {
    showNotification("Only the host or co-host can ban participants.", "error");
    return;
  }
  const safeName = String(targetName || "").trim();
  if (!safeName) return;
  const participant = getParticipantByName(safeName);
  if (!canModerateParticipant(participant)) {
    showNotification("You do not have permission to ban this participant.", "error");
    return;
  }
  let finished = false;
  const finishSuccess = () => {
    if (finished) return;
    finished = true;
    clearTimeout(ackTimer);
    clearInterval(stateCheckTimer);
    showNotification(`${safeName} was banned from the session.`, "success");
    showGroupControls(activeSessionId);
  };
  const finishError = (message) => {
    if (finished) return;
    finished = true;
    clearTimeout(ackTimer);
    clearInterval(stateCheckTimer);
    showNotification(message || "Failed to ban participant", "error");
  };
  const stateCheckTimer = setInterval(() => {
    const stillPresent = Boolean(getParticipantByName(safeName));
    const inBanLog = collabBans.some(
      (entry) => String(entry?.name || "").trim().toLowerCase() === safeName.toLowerCase(),
    );
    if (!stillPresent || inBanLog) {
      finishSuccess();
    }
  }, 200);
  const ackTimer = setTimeout(() => {
    const stillPresent = Boolean(getParticipantByName(safeName));
    const inBanLog = collabBans.some(
      (entry) => String(entry?.name || "").trim().toLowerCase() === safeName.toLowerCase(),
    );
    if (!stillPresent || inBanLog) {
      finishSuccess();
      return;
    }
    finishError("Ban request timed out. Restart the server and try again.");
  }, 6000);
  collabSocket.emit("collab:ban", { sessionId: activeSessionId, targetName: safeName }, (res) => {
    if (!res?.ok) {
      finishError((res && res.error) || "Failed to ban participant");
    } else {
      finishSuccess();
    }
  });
}

function requestUnbanDevice(deviceId) {
  if (!collabSocket || !activeSessionId || !canUseCoHostTools()) return;
  const safeDeviceId = String(deviceId || "").trim();
  if (!safeDeviceId) return;
  collabSocket.emit("collab:unban", { sessionId: activeSessionId, deviceId: safeDeviceId }, (res) => {
    if (!res?.ok) {
      showNotification((res && res.error) || "Failed to unban device", "error");
    } else {
      showNotification("Device ban removed.", "success");
      showGroupControls(activeSessionId);
    }
  });
}

function copyTextValue(text, successMessage) {
  const value = String(text || "");
  if (!value) {
    showNotification("Nothing to copy.", "error");
    return;
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(value)
      .then(() => showNotification(successMessage || "Copied!", "success"))
      .catch(() => fallbackCopy(value, value));
    return;
  }
  fallbackCopy(value, value);
}

function openPrivateChatWithParticipant(targetName) {
  const safeName = String(targetName || "").trim();
  if (!safeName) return;
  collabChatMode = "private";
  collabChatTarget = safeName;
  showSessionDetails(activeSessionId);
  setTimeout(() => {
    const targetSelect = document.getElementById("collabChatTarget");
    const input = document.getElementById("collabChatInput");
    if (targetSelect) targetSelect.value = safeName;
    if (input) input.focus();
  }, 0);
}

function showParticipantActions(targetName) {
  if (!canUseCoHostTools()) return;
  const safeName = String(targetName || "").trim();
  if (!safeName) return;
  const participant = getParticipantByName(safeName);
  if (!participant || !canModerateParticipant(participant)) return;
  const hostView = isHost();
  activeParticipantActionName = safeName;
  const disabledFeatures = groupFeatureControlConfig
    .filter((entry) => {
      if (participantHasDisabledFeature(participant, entry.key)) return true;
      switch (entry.key) {
        case "chat":
          return collabPermissions.disableAllChat;
        case "saveProject":
          return collabPermissions.disableSaveProject;
        case "openSaved":
          return collabPermissions.disableOpenSavedProjects;
        case "templates":
          return collabPermissions.disableTemplates;
        case "publishShare":
          return collabPermissions.disablePublishShare;
        case "runCode":
          return collabPermissions.disableRunCode;
        case "consoleAccess":
          return collabPermissions.disableConsoleAccess;
        default:
          return false;
      }
    })
    .map((entry) => entry.key);
  const disabledFeatureChips = disabledFeatures.length
    ? disabledFeatures
        .map((featureKey) => {
          const source = participantHasDisabledFeature(participant, featureKey) ? "personal" : "room";
          return `<span class="collab-pill">${escapeHtml(getFeatureControlLabel(featureKey))} · ${escapeHtml(source)}</span>`;
        })
        .join("")
    : `<span class="collab-section-note">No group-disabled features right now.</span>`;

  collabModalView = "participant-actions";
  setCollabCloseButtonVisible(true);
  modalTitle.innerHTML = "<strong>PARTICIPANT OPTIONS</strong>";
  modalBody.innerHTML = `
    <div class="collab-section-card">
      <h4 class="collab-section-title">Participant</h4>
      <div class="collab-meta-grid">
        <div class="collab-meta-item">
          <span class="collab-meta-label">Name</span>
          <span class="collab-meta-value">${escapeHtml(safeName)}</span>
        </div>
        <div class="collab-meta-item">
          <span class="collab-meta-label">Role</span>
          <span class="collab-meta-value">${escapeHtml(participant.role || "participant")}</span>
        </div>
        <div class="collab-meta-item">
          <span class="collab-meta-label">Color</span>
          <span class="collab-meta-value"><span class="collab-participant-color" style="display:inline-block;vertical-align:middle;margin-right:8px;background:${escapeHtml(participant.theme || "#4CAF50")};"></span>${escapeHtml(participant.theme || "#4CAF50")}</span>
        </div>
        <div class="collab-meta-item">
          <span class="collab-meta-label">Current File</span>
          <span class="collab-meta-value">${escapeHtml(participant.currentFile || "None")}</span>
        </div>
      </div>
    </div>
    <div class="collab-section-card">
      <h4 class="collab-section-title">Group Disabled Features</h4>
      <div class="collab-pill-row">
        ${disabledFeatureChips}
      </div>
    </div>
    <div class="collab-section-card">
      <h4 class="collab-section-title">${hostView ? "Participant Controls" : "Moderator Controls"}</h4>
      <div class="collab-control-grid">
        ${hostView ? renderCollabControlButton({ id: "participantRoleBtn", icon: "fa-solid fa-user-shield", title: participant.role === "co-host" ? "Remove Co-Host" : "Make Co-Host", desc: "Change helper permissions.", active: participant.role === "co-host", tone: "purple" }) : ""}
        ${hostView ? renderCollabControlButton({ id: "participantTransferHostBtn", icon: "fa-solid fa-crown", title: "Transfer Host", desc: "Give this user room ownership.", tone: "warning" }) : ""}
        ${renderCollabControlButton({ id: "participantMessageBtn", icon: "fa-solid fa-message", title: "Message", desc: "Open private chat." })}
        ${renderCollabControlButton({ id: "participantMuteChatBtn", icon: "fa-solid fa-comment-slash", title: participant.mutedChat ? "Unmute Chat" : "Mute Chat", desc: participant.mutedChat ? "Chat is currently muted." : "Stop this user from chatting.", active: participant.mutedChat, tone: "warning" })}
        ${renderCollabControlButton({ id: "participantFreezeBtn", icon: "fa-solid fa-snowflake", title: participant.frozenEditing ? "Unfreeze Editing" : "Freeze Editing", desc: participant.frozenEditing ? "Editing is currently frozen." : "Stop this user from editing.", active: participant.frozenEditing, tone: "blue" })}
        ${renderCollabControlButton({ id: "participantFileAccessBtn", icon: "fa-solid fa-folder-tree", title: "File Access", desc: Array.isArray(participant.allowedFiles) ? `${participant.allowedFiles.length} allowed file(s).` : "Using room file access.", active: Array.isArray(participant.allowedFiles) })}
        ${renderCollabControlButton({ id: "participantResetAccessBtn", icon: "fa-solid fa-unlock", title: "Reset Access", desc: "Remove private file limits." })}
        ${renderCollabControlButton({ id: "participantFollowBtn", icon: "fa-solid fa-location-arrow", title: participant.name === followedParticipantName ? "Stop Following" : "Follow User", desc: participant.currentFile || "No active file yet.", active: participant.name === followedParticipantName })}
        ${renderCollabControlButton({ id: "participantViewDetailsBtn", icon: "fa-solid fa-circle-info", title: "View Details", desc: "See role, access, and status." })}
        ${renderCollabControlButton({ id: "participantPriorityBtn", icon: "fa-solid fa-star", title: participant.priority ? "Remove Priority" : "Mark Priority", desc: participant.priority ? "Currently marked priority." : "Highlight this participant.", active: participant.priority, tone: "purple" })}
        ${renderCollabControlButton({ id: "participantCopyNameBtn", icon: "fa-regular fa-copy", title: "Copy Name", desc: "Copy participant name." })}
        ${renderCollabControlButton({ id: "participantCopyColorBtn", icon: "fa-solid fa-palette", title: "Copy Color", desc: "Copy chosen color." })}
        ${renderCollabControlButton({ id: "participantCopyRoleBtn", icon: "fa-solid fa-id-badge", title: "Copy Role", desc: "Copy current role." })}
        ${renderCollabControlButton({ id: "participantKickBtn", icon: "fa-solid fa-right-from-bracket", title: "Kick", desc: "Remove from this session.", tone: "danger" })}
        ${renderCollabControlButton({ id: "participantBanBtn", icon: "fa-solid fa-ban", title: "Ban", desc: "Block this device from rejoining.", tone: "danger" })}
        ${renderCollabControlButton({ id: "participantDoneBtn", icon: "fa-solid fa-check", title: "Done", desc: "Back to session." })}
    </div>
    </div>
  `;
  setModalActions("");
  collabModal.style.display = "flex";

  const roleBtn = document.getElementById("participantRoleBtn");
  const transferHostBtn = document.getElementById("participantTransferHostBtn");
  const messageBtn = document.getElementById("participantMessageBtn");
  const muteChatBtn = document.getElementById("participantMuteChatBtn");
  const freezeBtn = document.getElementById("participantFreezeBtn");
  const fileAccessBtn = document.getElementById("participantFileAccessBtn");
  const resetAccessBtn = document.getElementById("participantResetAccessBtn");
  const followBtn = document.getElementById("participantFollowBtn");
  const viewDetailsBtn = document.getElementById("participantViewDetailsBtn");
  const priorityBtn = document.getElementById("participantPriorityBtn");
  const copyNameBtn = document.getElementById("participantCopyNameBtn");
  const copyColorBtn = document.getElementById("participantCopyColorBtn");
  const copyRoleBtn = document.getElementById("participantCopyRoleBtn");
  const kickBtn = document.getElementById("participantKickBtn");
  const banBtn = document.getElementById("participantBanBtn");
  const doneBtn = document.getElementById("participantDoneBtn");

  if (hostView && roleBtn) {
    roleBtn.onclick = () => setCoHost(safeName, participant.role !== "co-host");
  }
  if (hostView && transferHostBtn) {
    transferHostBtn.onclick = () => showTransferHostConfirmation(safeName);
  }
  if (messageBtn) {
    messageBtn.onclick = () => openPrivateChatWithParticipant(safeName);
  }
  if (muteChatBtn) {
    muteChatBtn.onclick = () =>
      updateParticipantFlags(
        safeName,
        { mutedChat: !participant.mutedChat },
        participant.mutedChat ? `${safeName} can chat again.` : `${safeName} was muted.`,
      );
  }
  if (freezeBtn) {
    freezeBtn.onclick = () =>
      updateParticipantFlags(
        safeName,
        { frozenEditing: !participant.frozenEditing },
        participant.frozenEditing ? `${safeName} can edit again.` : `${safeName}'s editing was frozen.`,
      );
  }
  if (fileAccessBtn) {
    fileAccessBtn.onclick = () => showParticipantFileAccessEditor(safeName);
  }
  if (resetAccessBtn) {
    resetAccessBtn.onclick = () => updateParticipantAllowedFiles(safeName, [], true);
  }
  if (followBtn) {
    followBtn.onclick = () => {
      if (participant.name === followedParticipantName) {
        stopFollowingParticipant();
      } else {
        followParticipant(safeName);
      }
      showParticipantActions(safeName);
    };
  }
  if (viewDetailsBtn) {
    viewDetailsBtn.onclick = () => showParticipantDetails(safeName);
  }
  if (priorityBtn) {
    priorityBtn.onclick = () =>
      updateParticipantFlags(
        safeName,
        { priority: !participant.priority },
        participant.priority ? `${safeName} is no longer priority.` : `${safeName} was marked as priority.`,
      );
  }
  if (copyNameBtn) {
    copyNameBtn.onclick = () => copyTextValue(safeName, `${safeName} copied`);
  }
  if (copyColorBtn) {
    copyColorBtn.onclick = () =>
      copyTextValue(participant.theme || "#4CAF50", `${safeName}'s color copied`);
  }
  if (copyRoleBtn) {
    copyRoleBtn.onclick = () =>
      copyTextValue(participant.role || "participant", `${safeName}'s role copied`);
  }
  if (kickBtn) {
    kickBtn.onclick = () => showKickConfirmation(safeName);
  }
  if (banBtn) {
    banBtn.onclick = async () => {
      const dialog = await showAppConfirmHtml(
        "BAN",
        `Ban <strong>${escapeHtml(safeName)}</strong> from this session on this device? They will not be able to join again from the same device until unbanned.`,
        "BAN",
        "CANCEL",
        "background:#a22121;",
      );
      if (!dialog?.ok) return;
      requestBanParticipant(safeName);
    };
  }
  if (doneBtn) {
    doneBtn.onclick = () => showSessionDetails(activeSessionId);
  }
}

function showKickConfirmation(targetName) {
  if (!isHost()) return;
  const safeName = String(targetName || "").trim();
  if (!safeName) return;

  collabModalView = "kick";
  setCollabCloseButtonVisible(true);
  modalTitle.innerHTML = "<strong>KICK PARTICIPANT</strong>";
  modalBody.innerHTML = `
    <p style="margin: 8px 0 16px; color: var(--text-primary);">
      Are you sure you want to kick <strong>${escapeHtml(safeName)}</strong>?
    </p>
  `;
  setModalActions(`
    <button id="kickYesBtn" class="run-button" style="background:#d32f2f;"><strong>YES</strong></button>
    <button id="kickNoBtn" class="run-button" style="background:#2e7d32;"><strong>NO</strong></button>
  `);

  const yesBtn = document.getElementById("kickYesBtn");
  const noBtn = document.getElementById("kickNoBtn");
  if (yesBtn) yesBtn.onclick = () => requestKickParticipant(safeName);
  if (noBtn) noBtn.onclick = () => showSessionDetails(activeSessionId);
}

function showKickedOutModal() {
  resetTransientCollabUiState();
  activeSessionId = null;
  collabParticipants = [];
  collabPendingJoins = [];
  collabShareLink = "";
  collabSessionPin = "";
  collabPermissions = { ...defaultCollabPermissions };
  updateCollabButtonState();
  collabModalView = "kicked";
  setCollabCloseButtonVisible(false);
  modalTitle.innerHTML = "<strong>NOTICE</strong>";
  modalBody.innerHTML = `
    <p style="margin: 8px 0 16px; color: var(--text-primary);">
      You have been kicked out of the group by the host
    </p>
  `;
  setModalActions(`
    <button id="kickedOkBtn" class="run-button"><strong>OK</strong></button>
  `);
  collabModal.style.display = "flex";

  const okBtn = document.getElementById("kickedOkBtn");
  if (okBtn) {
    okBtn.onclick = () => {
      window.location.href = "/frontend.html";
    };
  }
}

function resumeCollabSession(successMessage) {
  if (!collabSocket || !collabSocket.connected || !activeSessionId || !myInfo.name) return;
  collabSocket.emit(
    "collab:resume",
    {
      sessionId: activeSessionId,
      name: myInfo.name,
      theme: myInfo.theme || "#4CAF50",
      deviceId: getOrCreateDeviceId(),
    },
    (res) => {
      if (!res?.ok) {
        showNotification(
          (res && res.error) || "Collaboration reconnected, but session resume failed.",
          "error",
        );
        return;
      }
      updateTimelineFromParticipants(res.participants || []);
      collabParticipants = res.participants || [];
      collabHostName =
        (collabParticipants.find((p) => p.role === "host") || {}).name ||
        res.hostName ||
        collabHostName;
      collabPermissions = normalizeCollabPermissions(res.permissions);
      applyRemoteSessionState(res.files, res.activeFileName, true);
      enforceCollabPermissionsUI();
      if (collabModal.style.display === "flex" && collabModalView === "session") {
        showSessionDetails(activeSessionId);
      }
      requestCollabChatHistory();
      if (successMessage) {
        showNotification(successMessage, "success");
      }
    },
  );
}

function ensureCollabSocket() {
  if (collabSocket && collabSocket.connected) return true;
  if (typeof io !== "function") {
    showNotification("Collab backend unavailable. Start server first.", "error");
    return false;
  }

  collabSocket = io();
  collabSocket.on("connect_error", () => {
    showNotification("Unable to connect to collaboration server", "error");
  });
  collabSocket.on("disconnect", () => {
    clearOwnSessionCursorBroadcast();
    resetTransientCollabUiState();
    if (activeSessionId) {
      showNotification("Collaboration connection lost.", "warn");
    }
  });
  collabSocket.on("reconnect", () => {
    resumeCollabSession("Collaboration reconnected.");
  });

  collabSocket.on("collab:state", (payload) => {
    if (!payload || !payload.files) return;
    applyRemoteSessionState(payload.files, payload.activeFileName, false);
    if (
      followedParticipantName &&
      payload.user &&
      String(payload.user.name || "").trim().toLowerCase() ===
        String(followedParticipantName || "").trim().toLowerCase()
    ) {
      syncFollowedParticipantView();
    }
  });

  collabSocket.on("collab:typing", (indicator) => {
    updateTypingIndicatorUI(indicator);
  });

  collabSocket.on("collab:participants", (participants) => {
    const nextParticipants = Array.isArray(participants) ? participants : [];
    updateTimelineFromParticipants(nextParticipants);

    // Detect new joiners and show notification
    if (nextParticipants.length > previousParticipantCount) {
      const prevNames = new Set(collabParticipants.map(p => String(p.name || "").trim().toLowerCase()));
      const newJoiners = nextParticipants.filter(p => {
        const pKey = String(p.name || "").trim().toLowerCase();
        return !prevNames.has(pKey);
      });
      newJoiners.forEach(joiner => {
        showNotification(`${escapeHtml(joiner.name)} has joined this session`, "info");
      });
    }
    previousParticipantCount = nextParticipants.length;
    collabParticipants = nextParticipants;
    const hostFromParticipants = collabParticipants.find((p) => p.role === "host")?.name;
    if (hostFromParticipants) {
      collabHostName = hostFromParticipants;
    }
    const allowedNames = new Set(collabParticipants.map((p) => p.name));
    Object.keys(remoteCursorState).forEach((key) => {
      if (!allowedNames.has(key)) delete remoteCursorState[key];
    });
    Object.keys(remoteTypingState).forEach((key) => {
      if (!allowedNames.has(key)) delete remoteTypingState[key];
    });
    renderRemoteCursors();
    enforceCollabPermissionsUI();
    syncFollowedParticipantView();
    if (collabModal.style.display === "flex" && activeSessionId) {
      if (collabModalView === "session") {
        showSessionDetails(activeSessionId);
      } else if (collabModalView === "participant-actions" && activeParticipantActionName) {
        showParticipantActions(activeParticipantActionName);
      }
    }
  });

  collabSocket.on("collab:participant-left", (payload) => {
    const name = String(payload?.name || "Someone").trim() || "Someone";
    showNotification(`${escapeHtml(name)} has left this session`, "info");
  });

  collabSocket.on("collab:meta", (meta) => {
    if (!meta) return;
    const previousAnnouncement = String(collabPermissions.announcementBar || "").trim();
    collabHostName = meta.hostName || collabHostName;
    collabPermissions = normalizeCollabPermissions(meta.permissions);
    collabPendingJoins = Array.isArray(meta.pendingJoins) ? meta.pendingJoins : [];
    collabBans = Array.isArray(meta.bans) ? meta.bans : [];
    collabShareLink = meta.shareLink || collabShareLink;
    collabSessionPin = meta.sessionPin || collabSessionPin;
    const nextAnnouncement = String(collabPermissions.announcementBar || "").trim();
    if (nextAnnouncement) {
      if (nextAnnouncement !== previousAnnouncement || nextAnnouncement !== lastAnnouncementText) {
        showAnnouncementPopup(nextAnnouncement);
        lastAnnouncementText = nextAnnouncement;
      }
    } else {
      lastAnnouncementText = "";
      closeAnnouncementPopup();
    }
    enforceCollabPermissionsUI();
    if (collabModal.style.display === "flex" && activeSessionId) {
      if (collabModalView === "session") {
        showSessionDetails(activeSessionId);
      } else if (collabModalView === "group-controls" && isHost()) {
        showGroupControls(activeSessionId);
      } else if (collabModalView === "participant-actions" && activeParticipantActionName) {
        showParticipantActions(activeParticipantActionName);
      }
    }
  });

  collabSocket.on("collab:kicked", () => {
    showKickedOutModal();
  });

  collabSocket.on("collab:banned", () => {
    resetTransientCollabUiState();
    activeSessionId = null;
    collabParticipants = [];
    collabPendingJoins = [];
    collabBans = [];
    collabShareLink = "";
    collabSessionPin = "";
    collabPermissions = { ...defaultCollabPermissions };
    updateCollabButtonState();
    setCollabCloseButtonVisible(false);
    modalTitle.innerHTML = "<strong>BANNED FROM SESSION</strong>";
    modalBody.innerHTML = `<p style="margin:8px 0 16px;color:var(--text-primary);">You have been banned from this collaboration session on this device by the host.</p>`;
    setModalActions(`<button id="sessionBannedOkBtn" class="run-button"><strong>OK</strong></button>`);
    collabModal.style.display = "flex";
    const okBtn = document.getElementById("sessionBannedOkBtn");
    if (okBtn) {
      okBtn.onclick = () => {
        resetCollabUrlToFreshState();
        closeModal();
      };
    }
    showNotification("You were banned from the session.", "error");
  });

  collabSocket.on("collab:role-notice", (payload) => {
    const nextRole = String(payload?.role || "").trim().toLowerCase();
    const actorName = String(payload?.by || "The host").trim() || "The host";
    if (nextRole === "co-host") {
      showNotification(`${actorName} made you a co-host.`, "success");
      addTimelineEntry(`${actorName} made you a co-host.`, "role");
      return;
    }
    if (nextRole === "participant") {
      showNotification(`${actorName} removed your co-host access.`, "info");
      addTimelineEntry(`${actorName} removed your co-host access.`, "role");
    }
  });

  collabSocket.on("collab:cursor", (payload) => {
    const cursor = payload && payload.cursor ? payload.cursor : null;
    if (!cursor || !cursor.name) {
      if (payload && payload.name && remoteCursorState[payload.name]) {
        delete remoteCursorState[payload.name];
        renderRemoteCursors();
      }
      return;
    }
    remoteCursorState[cursor.name] = cursor;
    renderRemoteCursors();
    if (followedParticipantName && cursor.name === followedParticipantName) {
      syncFollowedParticipantView();
      syncFollowedParticipantCursor(cursor);
    }
  });

  collabSocket.on("collab:chat:group", (message) => {
    if (!message) return;
    collabGroupMessages.push(message);
    if (collabGroupMessages.length > 300) collabGroupMessages.shift();
    renderCollabChatMessages();
    const senderName = String(message.from || message.name || "").trim();
    if (senderName) {
      addTimelineEntry(`${senderName} sent a group message.`, "chat");
      if (senderName !== String(myInfo.name)) {
        if (!collabModal || collabModal.style.display !== "flex" || collabModalView !== "session") {
          showNotificationHtml(
            `<strong>${escapeHtml(senderName)}</strong> has sent a message publicly.`,
            "info",
          );
        }
      }
    }
  });

  collabSocket.on("collab:chat:private", (message) => {
    if (!message) return;
    collabPrivateMessages.push(message);
    if (collabPrivateMessages.length > 500) collabPrivateMessages.shift();
    renderCollabChatMessages();
    if (message.name) {
      addTimelineEntry(`${message.name} sent a private message.`, "chat");
    }
    if (
      message.to === myInfo.name &&
      message.from &&
      message.from !== myInfo.name
    ) {
      showNotificationHtml(
        `<strong>${escapeHtml(message.from)}</strong> has sent a message to you privately.`,
        "info",
      );
    }
  });

  collabSocket.on("collab:chat:cleared", (payload) => {
    if (payload?.mode === "group") {
      collabGroupMessages = [];
      renderCollabChatMessages();
      showNotification("Group chat was cleared.", "info");
      addTimelineEntry("Group chat was cleared.", "moderation");
    }
  });

  collabSocket.on("collab:bring-to-file", (payload) => {
    const fileName = String(payload?.fileName || "").trim();
    if (!fileName) return;
    switchFile(fileName);
    showNotification(`The host brought everyone to ${fileName}.`, "info");
    addTimelineEntry(`Everyone was brought to ${fileName}.`, "focus");
  });

  collabSocket.on("collab:link-regenerated", (payload) => {
    if (!payload) return;
    activeSessionId = payload.sessionId || activeSessionId;
    collabShareLink = payload.shareLink || collabShareLink;
    window.history.replaceState({}, "", `/frontend.html/${activeSessionId}`);
    addTimelineEntry("Invite link was regenerated.", "session");
    if (collabModal.style.display === "flex" && collabModalView === "session") {
      showSessionDetails(activeSessionId);
    }
  });

  collabSocket.on("collab:join-approved", (res) => {
    if (!res?.ok) return;
    activeSessionId = res.sessionId || activeSessionId;
    myInfo = { name: joinRequestContext.name || myInfo.name, theme: myInfo.theme };
    collabParticipants = res.participants || [];
    collabHostName =
      (collabParticipants.find((p) => p.role === "host") || {}).name ||
      res.hostName ||
      collabHostName;
    collabPermissions = normalizeCollabPermissions(res.permissions);
    collabShareLink = res.shareLink || collabShareLink;
    collabSessionPin = res.sessionPin || collabSessionPin;
    collabGroupMessages = [];
    collabPrivateMessages = [];
    collabChatMode = "group";
    collabChatTarget = "";
    applyRemoteSessionState(res.files, res.activeFileName, true);
    enforceCollabPermissionsUI();
    window.history.replaceState({}, "", `/frontend.html/${activeSessionId}`);
    showNotification(`Welcome, ${myInfo.name}!`, "success");
    startSyncing();
    closeModal();
  });

  collabSocket.on("collab:join-rejected", (payload) => {
    const reason = String(payload?.reason || "The host rejected your join request.");
    if (collabModalView === "join-pending" && joinRequestContext.sessionId) {
      renderJoinNameStep(joinRequestContext.sessionId, joinRequestContext.name);
      errorMsgEl.textContent = reason;
      errorMsgEl.style.display = "block";
      return;
    }
    showNotification(reason, "error");
  });

  collabSocket.on("collab:session-ended", (payload) => {
    resetTransientCollabUiState();
    activeSessionId = null;
    collabParticipants = [];
    collabPendingJoins = [];
    collabShareLink = "";
    collabSessionPin = "";
    collabPermissions = { ...defaultCollabPermissions };
    updateCollabButtonState();
    setCollabCloseButtonVisible(false);
    const reason = String(payload?.reason || "The collaboration session ended.");
    modalTitle.innerHTML = "<strong>SESSION ENDED</strong>";
    modalBody.innerHTML = `<p style="margin:8px 0 16px;color:var(--text-primary);">${escapeHtml(reason)}</p>`;
    setModalActions(`<button id="sessionEndedOkBtn" class="run-button"><strong>OK</strong></button>`);
    collabModal.style.display = "flex";
    const okBtn = document.getElementById("sessionEndedOkBtn");
    if (okBtn) {
      okBtn.onclick = () => {
        resetCollabUrlToFreshState();
        closeModal();
      };
    }
    showNotification(reason, "warn");
  });

  return true;
}

function applyRemoteSessionState(files, activeFileName, preferRemoteActive = false) {
  if (!Array.isArray(files) || !files.length) return;
  isApplyingRemoteState = true;
  try {
    const requestedActiveName = normalizeProjectFileName(activeFileName || "");
    const currentActiveName = activeFile ? normalizeProjectFileName(activeFile.name) : null;
    projectFiles = files;
    normalizeProjectFileNamesInPlace(projectFiles);
    const nextActive =
      (preferRemoteActive ? projectFiles.find((f) => f.name === requestedActiveName) : null) ||
      projectFiles.find((f) => f.name === currentActiveName) ||
      projectFiles.find((f) => f.name === requestedActiveName) ||
      projectFiles.find((f) => f.active) ||
      projectFiles[0];
    activeFile = nextActive;
    projectFiles.forEach((f) => (f.active = f.name === nextActive.name));
    if (activeFile && activeFile.type === "html") {
      currentPreviewTarget = { mode: "html", fileName: activeFile.name };
    }

    const ed = document.getElementById("activeEditor");
    const currentPos = ed.selectionStart;
    ed.value = activeFile.content;
    ed.selectionStart = ed.selectionEnd = Math.min(currentPos, ed.value.length);
    updateLineNumbers(ed);
    resetAllEditorHistory(ed);
    renderFileList();
    enforceCollabPermissionsUI();
    renderRemoteCursors();
    if (autoRunCheckbox.checked) updatePreview();
  } finally {
    isApplyingRemoteState = false;
  }
}

function emitSessionUpdate() {
  if (!collabSocket || !activeSessionId || !myInfo.name) return;
  collabSocket.emit("collab:update", {
    sessionId: activeSessionId,
    files: projectFiles,
    activeFileName: activeFile ? activeFile.name : null,
    user: myInfo,
  });
}

function announceTyping(activeEditorId) {
  if (!collabSocket || !activeSessionId || !myInfo.name) return;
  clearTimeout(typingTimer);
  const editor = document.getElementById("activeEditor");
  collabSocket.emit("collab:typing", {
    sessionId: activeSessionId,
    indicator: {
      name: myInfo.name,
      theme: myInfo.theme,
      editor: activeEditorId,
      fileName: activeFile ? activeFile.name : null,
      caretPos: editor ? editor.selectionStart : 0,
    },
  });

  typingTimer = setTimeout(() => {
    if (!collabSocket || !activeSessionId) return;
    collabSocket.emit("collab:typing", {
      sessionId: activeSessionId,
      indicator: {
        stopped: true,
        fileName: activeFile ? activeFile.name : null,
      },
    });
  }, 1500);
}

function updateTypingIndicatorUI(ind) {
  if (ind && ind.name && ind.name !== myInfo.name) {
    if (ind.stopped) {
      delete remoteTypingState[ind.name];
    } else {
      remoteTypingState[ind.name] = ind;
    }
  }
  currentTypingIndicator = ind && !ind.stopped ? ind : null;
  const ed = document.getElementById("activeEditor");
  ed.style.boxShadow = "none";
  if (
    ind &&
    !ind.stopped &&
    ind.name !== myInfo.name &&
    !collabPermissions.quietMode &&
    ind.fileName === activeFile.name
  ) {
    ed.style.boxShadow = `0 0 0 3px ${ind.theme} inset`;
    typingIndicatorEl.textContent = `${ind.name} is typing...`;
    typingIndicatorEl.style.backgroundColor = ind.theme;
    typingIndicatorEl.style.display = "block";
  } else {
    typingIndicatorEl.style.display = "none";
  }
  renderRemoteCursors();
  renderFileList();
}

function getVisibleCursorParticipants() {
  return Object.values(remoteCursorState).filter(
    (entry) =>
      entry &&
      entry.name !== myInfo.name &&
      entry.fileName === (activeFile ? activeFile.name : "") &&
      Date.now() - Number(entry.ts || 0) < 4000,
  );
}

function getVisibleTypingParticipants() {
  return Object.values(remoteTypingState).filter(
    (entry) =>
      entry &&
      !entry.stopped &&
      entry.name !== myInfo.name &&
      entry.fileName === (activeFile ? activeFile.name : "") &&
      Date.now() - Number(entry.ts || 0) < 1800,
  );
}

function renderRemoteCursors() {
  if (!remoteCursorLayer) return;
  if (collabPermissions.quietMode) {
    remoteCursorLayer.innerHTML = "";
    return;
  }
  const wrapper = remoteCursorLayer.parentElement;
  if (!wrapper) return;

  const width = wrapper.clientWidth;
  const height = wrapper.clientHeight;
  const editor = document.getElementById("activeEditor");
  const wrapperRect = wrapper.getBoundingClientRect();
  let contentLeft = 0;
  let contentTop = 0;
  let contentWidth = width;
  let contentHeight = height;
  let totalWidth = width;
  let totalHeight = height;
  if (editor) {
    const editorRect = editor.getBoundingClientRect();
    const style = window.getComputedStyle(editor);
    const padLeft = parseFloat(style.paddingLeft) || 0;
    const padRight = parseFloat(style.paddingRight) || 0;
    const padTop = parseFloat(style.paddingTop) || 0;
    const padBottom = parseFloat(style.paddingBottom) || 0;
    contentLeft = editorRect.left - wrapperRect.left + padLeft;
    contentTop = editorRect.top - wrapperRect.top + padTop;
    contentWidth = Math.max(1, editorRect.width - padLeft - padRight);
    contentHeight = Math.max(1, editorRect.height - padTop - padBottom);
    totalWidth = Math.max(1, (editor.scrollWidth || contentWidth) - padLeft - padRight);
    totalHeight = Math.max(1, (editor.scrollHeight || contentHeight) - padTop - padBottom);
    const lineNumbersEl = document.getElementById("lineNumbers");
    if (lineNumbersEl) {
      const lineRect = lineNumbersEl.getBoundingClientRect();
      const contentLeftAbs = wrapperRect.left + contentLeft;
      if (lineRect.right > contentLeftAbs) {
        const delta = lineRect.right - contentLeftAbs;
        contentLeft += delta;
        contentWidth = Math.max(1, contentWidth - delta);
        totalWidth = Math.max(1, totalWidth - delta);
      }
    }
  }
  const typingHtml = editor
    ? getVisibleTypingParticipants()
        .map((entry) => {
          const caretPos = Math.max(0, Math.min(Number(entry.caretPos || 0), editor.value.length));
          const coords = getCaretCoordinates(editor, caretPos);
          const nextPos = Math.min(editor.value.length, caretPos + 1);
          const nextCoords = getCaretCoordinates(editor, nextPos);
          const left = Math.max(0, coords.left);
          const top = Math.max(0, coords.top);
          const charWidth =
            nextCoords && nextCoords.top === coords.top
              ? Math.max(8, Math.min(26, Math.round(nextCoords.left - coords.left)))
              : Math.max(8, Math.round((coords.lineHeight || 20) * 0.6));
          const widthPx = charWidth;
          const heightPx = Math.max(16, Math.round((coords.lineHeight || 20) * 0.9));
          return `<div class="remote-typing-highlight" style="left:${left}px;top:${top}px;width:${widthPx}px;height:${heightPx}px;--typing-color:${escapeHtml(entry.theme || "#4CAF50")};">
            <span class="remote-typing-label">${escapeHtml(entry.name || "User")} typing</span>
          </div>`;
        })
        .join("")
    : "";
  const cursorHtml = getVisibleCursorParticipants()
    .map((entry) => {
      const scrollLeft = editor ? editor.scrollLeft : 0;
      const scrollTop = editor ? editor.scrollTop : 0;
      const left = Math.max(
        0,
        Math.min(
          width - 2,
          Math.round(contentLeft + (entry.x || 0) * totalWidth - scrollLeft),
        ),
      );
      const top = Math.max(
        0,
        Math.min(
          height - 18,
          Math.round(contentTop + (entry.y || 0) * totalHeight - scrollTop),
        ),
      );
      return `<div class="remote-cursor" style="left:${left}px;top:${top}px;--cursor-color:${escapeHtml(entry.theme || "#4CAF50")};">
        <span class="remote-cursor-label">${escapeHtml(entry.name || "User")}</span>
      </div>`;
    })
    .join("");
  remoteCursorLayer.innerHTML = typingHtml + cursorHtml;
}

function pruneRemoteCursors() {
  let changed = false;
  const now = Date.now();
  Object.keys(remoteCursorState).forEach((key) => {
    if (now - Number(remoteCursorState[key]?.ts || 0) > 4000) {
      delete remoteCursorState[key];
      changed = true;
    }
  });
  Object.keys(remoteTypingState).forEach((key) => {
    if (now - Number(remoteTypingState[key]?.ts || 0) > 1800) {
      delete remoteTypingState[key];
      changed = true;
    }
  });
  if (changed) renderRemoteCursors();
}

function startBackgroundTimers() {
  if (backgroundTimersRunning) return;
  cursorPruneInterval = setInterval(pruneRemoteCursors, 1000);
  roomIndicatorInterval = setInterval(() => {
    applyRoomIndicators();
    if (
      activeSessionId &&
      collabModal.style.display === "flex" &&
      collabModalView === "session" &&
      collabPermissions.sessionEndsAt
    ) {
      showSessionDetails(activeSessionId);
    }
  }, 1000);
  backgroundTimersRunning = true;
}

function stopBackgroundTimers() {
  if (cursorPruneInterval) {
    clearInterval(cursorPruneInterval);
    cursorPruneInterval = null;
  }
  if (roomIndicatorInterval) {
    clearInterval(roomIndicatorInterval);
    roomIndicatorInterval = null;
  }
  backgroundTimersRunning = false;
}

function emitCursorFromClientCoords(clientX, clientY) {
  if (!collabSocket || !activeSessionId || !myInfo.name || !activeFile) return;
  if (document.hidden) return;
  const editor = document.getElementById("activeEditor");
  if (!editor) return;
  const rect = editor.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const style = window.getComputedStyle(editor);
  const padLeft = parseFloat(style.paddingLeft) || 0;
  const padRight = parseFloat(style.paddingRight) || 0;
  const padTop = parseFloat(style.paddingTop) || 0;
  const padBottom = parseFloat(style.paddingBottom) || 0;
  let left = rect.left + padLeft;
  let top = rect.top + padTop;
  let width = Math.max(1, rect.width - padLeft - padRight);
  let height = Math.max(1, rect.height - padTop - padBottom);
  const lineNumbersEl = document.getElementById("lineNumbers");
  if (lineNumbersEl) {
    const lineRect = lineNumbersEl.getBoundingClientRect();
    if (lineRect.right > left) {
      const delta = lineRect.right - left;
      left = left + delta;
      width = Math.max(1, width - delta);
    }
  }
  const totalWidth = Math.max(1, (editor.scrollWidth || width) - padLeft - padRight);
  const totalHeight = Math.max(1, (editor.scrollHeight || height) - padTop - padBottom);
  const contentX = (clientX - left) + editor.scrollLeft;
  const contentY = (clientY - top) + editor.scrollTop;
  const x = contentX / totalWidth;
  const y = contentY / totalHeight;
  if (x < 0 || x > 1 || y < 0 || y > 1) return;

  collabSocket.emit("collab:cursor", {
    sessionId: activeSessionId,
    cursor: {
      name: myInfo.name,
      theme: myInfo.theme,
      fileName: activeFile.name,
      x,
      y,
      ts: Date.now(),
    },
  });
}

function announceCursorPosition(event) {
  lastPointerClientX = event.clientX;
  lastPointerClientY = event.clientY;
  emitCursorFromClientCoords(event.clientX, event.clientY);
}

window.addEventListener(
  "scroll",
  () => {
    if (isPointerInsideEditor) {
      if (lastPointerClientX !== null && lastPointerClientY !== null) {
        emitCursorFromClientCoords(lastPointerClientX, lastPointerClientY);
      }
    }
  },
  true,
);

function clearOwnSessionCursorBroadcast() {
  if (!collabSocket || !activeSessionId || !myInfo.name) return;
  collabSocket.emit("collab:cursor", {
    sessionId: activeSessionId,
    cursor: null,
  });
}

function setModalActions(html) {
  const actions = document.getElementById("modalActions");
  if (!actions) return;
  actions.innerHTML = html;
  if (!String(html || "").trim()) {
    actions.style.display = "none";
    return;
  }
  actions.style.display = "flex";
  actions.style.gap = "10px";
  actions.style.alignItems = "center";
  actions.style.justifyContent =
    actions.children.length > 1 ? "space-between" : "center";

  if (actions.children.length > 1) {
    Array.from(actions.children).forEach((btn) => {
      btn.style.flex = "1";
    });
  }
}

function setCollabCloseButtonVisible(visible) {
  if (!closeModalBtn) return;
  closeModalBtn.style.display = visible ? "block" : "none";
}

function renderCollabStartMenu() {
  collabModalView = "start";
  setCollabCloseButtonVisible(true);
  modalTitle.innerHTML = "<strong>COLLAB SESSION</strong>";
  modalBody.innerHTML = `
    <div class="collab-choice-grid">
      <button type="button" id="createSessionChoiceBtn" class="collab-choice-card">
        <i class="fa-solid fa-plus"></i>
        <span>Create a session</span>
      </button>
      <button type="button" id="joinSessionChoiceBtn" class="collab-choice-card">
        <i class="fa-solid fa-right-to-bracket"></i>
        <span>Join a session</span>
      </button>
    </div>
  `;
  errorMsgEl.style.display = "none";
  setModalActions("");
  collabModal.style.display = "flex";

  const createBtn = document.getElementById("createSessionChoiceBtn");
  const joinBtn = document.getElementById("joinSessionChoiceBtn");
  if (createBtn) createBtn.onclick = () => renderHostNameStep(sessionData.host || "");
  if (joinBtn) joinBtn.onclick = () => renderJoinSessionStep();
}

function renderHostNameStep(prefill = "") {
  setCollabCloseButtonVisible(true);
  modalTitle.innerHTML = "<strong>CREATE SESSION</strong>";
  modalBody.innerHTML = `
    <button type="button" id="modalBackBtn" class="collab-back-button" aria-label="Go back">&#8592;</button>
    <div class="collab-form-grid">
      <label class="collab-form-field">
        <span>Name</span>
        <input type="text" id="userNameInput" placeholder="Your name" maxlength="20" value="${escapeHtml(prefill)}">
      </label>
      <div class="collab-form-field">
        <span>Color</span>
        ${buildCollabColorPickerHtml("#4CAF50", [])}
      </div>
    </div>
  `;
  collabModal.style.display = "flex";
  errorMsgEl.style.display = "none";
  setModalActions(
    `<button id="modalDoneBtn" class="run-button"><strong>CREATE SESSION</strong></button>`,
  );
  bindCollabColorPicker("#4CAF50");

  const backBtn = document.getElementById("modalBackBtn");
  if (backBtn) backBtn.onclick = renderCollabStartMenu;

  const doneBtn = getModalDoneBtn();
  if (!doneBtn) return;
  doneBtn.onclick = () => {
    const name = document.getElementById("userNameInput").value.trim();
    const v = validateUsername(name);
    if (!v.valid) {
      errorMsgEl.textContent = v.error;
      errorMsgEl.style.display = "block";
      return;
    }
    errorMsgEl.style.display = "none";
    sessionData.host = name;
    sessionData.theme = document.getElementById("userThemeInput").value;
    createNumericSession();
  };
}

function renderJoinNameStep(sid, prefill = "") {
  collabHostName = "";
  setCollabCloseButtonVisible(false);
  modalTitle.innerHTML = "<strong>JOIN SESSION</strong>";
  loadCollabPaletteParticipants(sid, (paletteParticipants) => {
    modalBody.innerHTML = `
      <div class="collab-form-grid">
        <label class="collab-form-field">
          <span>Name</span>
          <input type="text" id="userNameInput" placeholder="Your name" maxlength="20" value="${escapeHtml(prefill)}">
        </label>
        <div class="collab-form-field">
          <span>Color</span>
          ${buildCollabColorPickerHtml("#2196F3", paletteParticipants)}
        </div>
      </div>
    `;
    collabModal.style.display = "flex";
    errorMsgEl.style.display = "none";
    setModalActions(
      `<button id="modalDoneBtn" class="run-button"><strong>JOIN SESSION</strong></button>`,
    );
    bindCollabColorPicker("#2196F3");

    const doneBtn = getModalDoneBtn();
    if (!doneBtn) return;
    doneBtn.onclick = () => {
      const name = document.getElementById("userNameInput").value.trim();
      const theme = document.getElementById("userThemeInput").value;
      const v = validateUsername(name);
      if (!v.valid) {
        errorMsgEl.textContent = v.error;
        errorMsgEl.style.display = "block";
        return;
      }
      errorMsgEl.style.display = "none";
      joinSessionWithPin(sid, name, theme);
    };
  });
}

function renderJoinSessionStep(prefill = {}) {
  collabHostName = "";
  setCollabCloseButtonVisible(true);
  modalTitle.innerHTML = "<strong>JOIN SESSION</strong>";
  modalBody.innerHTML = `
    <button type="button" id="modalBackBtn" class="collab-back-button" aria-label="Go back">&#8592;</button>
    <div class="collab-form-grid">
      <label class="collab-form-field">
        <span>Name</span>
        <input type="text" id="userNameInput" placeholder="Your name" maxlength="20" value="${escapeHtml(prefill.name || "")}">
      </label>
      <div class="collab-form-field">
        <span>Color</span>
        ${buildCollabColorPickerHtml(prefill.theme || "#2196F3", [])}
      </div>
    </div>
  `;
  collabModal.style.display = "flex";
  errorMsgEl.style.display = "none";
  setModalActions(
    `<button id="modalDoneBtn" class="run-button"><strong>NEXT</strong></button>`,
  );
  bindCollabColorPicker(prefill.theme || "#2196F3");

  const backBtn = document.getElementById("modalBackBtn");
  if (backBtn) backBtn.onclick = renderCollabStartMenu;

  const doneBtn = getModalDoneBtn();
  if (!doneBtn) return;
  doneBtn.onclick = () => {
    const name = document.getElementById("userNameInput").value.trim();
    const theme = document.getElementById("userThemeInput").value;
    const nameResult = validateUsername(name);
    if (!nameResult.valid) {
      errorMsgEl.textContent = nameResult.error;
      errorMsgEl.style.display = "block";
      return;
    }
    errorMsgEl.style.display = "none";
    renderJoinPinStep({ name, theme, pin: prefill.pin || "" });
  };
}

function getJoinPinFromBoxes() {
  return Array.from(document.querySelectorAll(".collab-pin-box"))
    .map((box) => String(box.value || "").trim())
    .join("");
}

function bindJoinPinBoxes(prefill = "") {
  const boxes = Array.from(document.querySelectorAll(".collab-pin-box"));
  const normalized = normalizeSessionPin(prefill).slice(0, 6);
  boxes.forEach((box, index) => {
    box.value = normalized[index] || "";
    box.addEventListener("focus", () => box.select());
    box.addEventListener("input", () => {
      const chars = normalizeSessionPin(box.value).replace(/[^A-Z0-9]/g, "").slice(0, 6).split("");
      if (chars.length > 1) {
        chars.forEach((char, offset) => {
          const target = boxes[index + offset];
          if (target) target.value = char;
        });
        const next = boxes[Math.min(index + chars.length, boxes.length - 1)];
        if (next) next.focus();
        return;
      }
      box.value = chars[0] || "";
      if (box.value && boxes[index + 1]) boxes[index + 1].focus();
    });
    box.addEventListener("keydown", (event) => {
      if (event.key === "Backspace" && !box.value && boxes[index - 1]) {
        boxes[index - 1].focus();
        boxes[index - 1].value = "";
      }
      if (event.key === "ArrowLeft" && boxes[index - 1]) {
        event.preventDefault();
        boxes[index - 1].focus();
      }
      if (event.key === "ArrowRight" && boxes[index + 1]) {
        event.preventDefault();
        boxes[index + 1].focus();
      }
      if (event.key === "Enter") {
        event.preventDefault();
        const doneBtn = getModalDoneBtn();
        if (doneBtn) doneBtn.click();
      }
    });
    box.addEventListener("paste", (event) => {
      event.preventDefault();
      const pasted = normalizeSessionPin(event.clipboardData?.getData("text") || "")
        .replace(/[^A-Z0-9]/g, "")
        .slice(0, 6);
      pasted.split("").forEach((char, offset) => {
        const target = boxes[index + offset];
        if (target) target.value = char;
      });
      const next = boxes[Math.min(index + pasted.length, boxes.length - 1)];
      if (next) next.focus();
    });
  });
  const firstEmpty = boxes.find((box) => !box.value) || boxes[0];
  if (firstEmpty) firstEmpty.focus();
}

function renderJoinPinStep({ name = "", theme = "#2196F3", pin = "" } = {}) {
  collabHostName = "";
  setCollabCloseButtonVisible(true);
  modalTitle.innerHTML = "<strong>ENTER SESSION PIN</strong>";
  modalBody.innerHTML = `
    <button type="button" id="modalBackBtn" class="collab-back-button" aria-label="Go back">&#8592;</button>
    <div class="collab-form-grid">
      <label class="collab-form-field">
        <span>Session pin</span>
        <div class="collab-pin-box-grid" aria-label="Six character session pin">
          ${Array.from({ length: 6 }, (_, index) => `<input type="text" class="collab-pin-box" inputmode="text" maxlength="6" autocomplete="off" aria-label="Session pin character ${index + 1}">`).join("")}
        </div>
      </label>
      <div class="collab-section-note">Type the 6 letters or numbers from the host.</div>
    </div>
  `;
  collabModal.style.display = "flex";
  errorMsgEl.style.display = "none";
  setModalActions(
    `<button id="modalDoneBtn" class="run-button"><strong>JOIN SESSION</strong></button>`,
  );
  bindJoinPinBoxes(pin);

  const backBtn = document.getElementById("modalBackBtn");
  if (backBtn) backBtn.onclick = () => renderJoinSessionStep({ name, theme, pin: getJoinPinFromBoxes() });

  const doneBtn = getModalDoneBtn();
  if (!doneBtn) return;
  doneBtn.onclick = () => {
    const pinResult = validateSessionPin(getJoinPinFromBoxes());
    if (!pinResult.valid) {
      errorMsgEl.textContent = pinResult.error;
      errorMsgEl.style.display = "block";
      return;
    }
    joinSessionWithPin(pinResult.pin, name, theme);
  };
}

function startCollaboration() {
  if (!ensureCollabSocket()) return;
  if (activeSessionId && myInfo.name) {
    showSessionDetails(activeSessionId);
    return;
  }
  renderCollabStartMenu();
}

const collabColorPalette = [
  "#4CAF50",
  "#2196F3",
  "#FF9800",
  "#E91E63",
  "#9C27B0",
  "#00BCD4",
  "#F44336",
  "#8BC34A",
  "#FFC107",
  "#3F51B5",
  "#009688",
  "#795548",
];

function normalizeThemeColor(value) {
  return String(value || "").trim().toLowerCase();
}

function buildCollabColorPickerHtml(selectedTheme, participants = []) {
  const selected = normalizeThemeColor(selectedTheme || collabColorPalette[0]);
  const takenMap = new Map();
  participants.forEach((participant) => {
    const theme = normalizeThemeColor(participant.theme);
    if (!theme) return;
    if (!takenMap.has(theme)) takenMap.set(theme, []);
    takenMap.get(theme).push(String(participant.name || "Participant"));
  });

  const swatches = collabColorPalette
    .map((color) => {
      const normalized = normalizeThemeColor(color);
      const takenNames = takenMap.get(normalized) || [];
      const isTaken = takenNames.length > 0;
      const title = isTaken
        ? `${color} taken by ${takenNames.join(", ")}`
        : `${color} available`;
      return `<button type="button" class="collab-color-swatch${selected === normalized ? " selected" : ""}${isTaken ? " taken" : ""}" data-color="${color}" title="${escapeHtml(title)}" style="background:${escapeHtml(color)};"></button>`;
    })
    .join("");

  const takenItems = Array.from(takenMap.entries())
    .map(
      ([color, names]) =>
        `<div class="collab-color-taken-item"><span class="collab-participant-color" style="width:14px;height:14px;flex-basis:14px;background:${escapeHtml(color)};"></span><span>${escapeHtml(names.join(", "))}</span></div>`,
    )
    .join("");

  return `
    <div class="collab-color-picker-wrap">
      <div>
        <p style="margin:0 0 10px;"><strong>Quick colors:</strong></p>
        <div class="collab-color-swatches">${swatches}</div>
      </div>
      <div>
        <p style="margin:0 0 8px;"><strong>Custom color:</strong></p>
        <input type="color" id="userThemeInput" value="${escapeHtml(selectedTheme || collabColorPalette[0])}">
      </div>
      <div>
        <p style="margin:0 0 8px;"><strong>Taken colors:</strong></p>
        <div class="collab-color-taken-list">${takenItems || "<div>No colors are taken yet.</div>"}</div>
      </div>
    </div>
  `;
}

function bindCollabColorPicker(selectedTheme) {
  const input = document.getElementById("userThemeInput");
  if (!input) return;

  const applySelectedSwatch = (colorValue) => {
    const normalized = normalizeThemeColor(colorValue);
    document.querySelectorAll(".collab-color-swatch").forEach((swatch) => {
      swatch.classList.toggle(
        "selected",
        normalizeThemeColor(swatch.getAttribute("data-color")) === normalized,
      );
    });
  };

  applySelectedSwatch(selectedTheme || input.value);

  input.addEventListener("input", () => {
    applySelectedSwatch(input.value);
  });

  document.querySelectorAll(".collab-color-swatch").forEach((swatch) => {
    swatch.addEventListener("click", () => {
      if (swatch.classList.contains("taken")) return;
      const color = swatch.getAttribute("data-color");
      if (!color) return;
      input.value = color;
      applySelectedSwatch(color);
    });
  });
}

function loadCollabPaletteParticipants(sessionId, callback) {
  if (!sessionId || !ensureCollabSocket()) {
    callback([]);
    return;
  }
  collabSocket.emit("collab:palette", { sessionId }, (res) => {
    if (!res || !res.ok) {
      callback([]);
      return;
    }
    callback(Array.isArray(res.participants) ? res.participants : []);
  });
}

function promptForTheme(hostName) {
  setCollabCloseButtonVisible(true);
  modalTitle.innerHTML = "<strong>PICK COLOR</strong>";
  modalBody.innerHTML = `
    <button
      id="modalBackBtn"
      aria-label="Go back"
      style="
        position: absolute;
        top: 10px;
        left: 12px;
        border: 1px solid var(--border-color);
        background: var(--bg-tertiary);
        color: var(--text-primary);
        border-radius: 8px;
        width: 34px;
        height: 30px;
        cursor: pointer;
        font-size: 18px;
        line-height: 1;
      "
    >&#8592;</button>
    <p style="margin-top: 8px;"><strong>Your color:</strong></p>
    ${buildCollabColorPickerHtml("#4CAF50", [])}
  `;
  errorMsgEl.style.display = "none";
  setModalActions(`<button id="modalDoneBtn" class="run-button"><strong>DONE</strong></button>`);
  bindCollabColorPicker("#4CAF50");

  const backBtn = document.getElementById("modalBackBtn");
  if (backBtn) {
    backBtn.onclick = () => renderHostNameStep(hostName || sessionData.host || "");
  }

  const doneBtn = getModalDoneBtn();
  if (!doneBtn) return;
  doneBtn.onclick = () => {
    sessionData.theme = document.getElementById("userThemeInput").value;
    createNumericSession();
  };
}

function showCreatedSessionPin(pin) {
  collabModalView = "created-pin";
  setCollabCloseButtonVisible(true);
  modalTitle.innerHTML = "<strong>SESSION PIN</strong>";
  const joinInstructions = [
    "How to join my CodX Editor session:",
    "1. Open CodX Editor.",
    "2. Click COLLAB WITH FRIENDS.",
    "3. Choose Join a session.",
    "4. Type your name and pick a color.",
    `5. Enter this session PIN: ${pin}`,
  ].join("\n");
  modalBody.innerHTML = `
    <div class="collab-pin-card">
      <span class="collab-meta-label">Your session pin</span>
      <div class="collab-session-pin">${escapeHtml(pin)}</div>
      <div class="collab-action-grid" style="margin-top:4px;">
        <button id="copySessionPinBtn" class="run-button" style="background:#2563eb;justify-content:center;"><i class="fa-regular fa-copy"></i> <strong>COPY PIN</strong></button>
        <button id="modalDoneBtn" class="run-button" style="justify-content:center;"><strong>DONE</strong></button>
      </div>
    </div>
    <div class="collab-section-card" style="margin-top:14px;text-align:left;">
      <h4 class="collab-section-title">How participants can join</h4>
      <ol style="margin:0;padding-left:20px;color:var(--text-primary);line-height:1.7;">
        <li>Open CodX Editor.</li>
        <li>Click <strong>COLLAB WITH FRIENDS</strong>.</li>
        <li>Choose <strong>Join a session</strong>.</li>
        <li>Type their name and pick a color.</li>
        <li>Enter the session PIN above.</li>
      </ol>
      <button id="copyJoinInstructionsBtn" class="run-button" style="margin-top:12px;width:100%;justify-content:center;background:#7c3aed;"><i class="fa-regular fa-clipboard"></i> <strong>COPY INSTRUCTION</strong></button>
    </div>
    <textarea id="collabJoinInstructionsText" readonly style="position:absolute;left:-9999px;top:auto;">${escapeHtml(joinInstructions)}</textarea>
  `;
  errorMsgEl.style.display = "none";
  setModalActions("");
  collabModal.style.display = "flex";

  const copySessionPinBtn = document.getElementById("copySessionPinBtn");
  if (copySessionPinBtn) {
    copySessionPinBtn.onclick = () => copyTextValue(pin, "Session pin copied.");
  }

  const copyJoinInstructionsBtn = document.getElementById("copyJoinInstructionsBtn");
  if (copyJoinInstructionsBtn) {
    copyJoinInstructionsBtn.onclick = () =>
      copyTextValue(joinInstructions, "Join instructions copied.");
  }

  const doneBtn = getModalDoneBtn();
  if (doneBtn) doneBtn.onclick = closeModal;
}

function createNumericSession() {
  if (!ensureCollabSocket()) return;
  resetTransientCollabUiState();

  collabSocket.emit(
    "collab:create",
    {
      name: sessionData.host,
      theme: sessionData.theme,
      deviceId: getOrCreateDeviceId(),
      files: projectFiles,
      activeFileName: activeFile ? activeFile.name : null,
      permissions: defaultCollabPermissions,
      baseUrl: window.location.origin,
    },
    (res) => {
      if (!res || !res.ok) {
        showNotification((res && res.error) || "Failed to create session", "error");
        return;
      }

      const sid = res.sessionId;
      const pin = res.sessionPin || sid;
      const link = res.shareLink || `${window.location.origin}/frontend.html/${sid}`;
      activeSessionId = sid;
      collabShareLink = link;
      collabSessionPin = pin;
      myInfo = { name: sessionData.host, theme: sessionData.theme };
      collabParticipants = res.participants || [myInfo];
      collabHostName = res.hostName || sessionData.host;
      collabPermissions = normalizeCollabPermissions(res.permissions);
      collabGroupMessages = [];
      collabPrivateMessages = [];
      collabChatMode = "group";
      collabChatTarget = "";
      window.history.replaceState({}, "", `/frontend.html/${sid}`);
      setCollabCloseButtonVisible(true);
      enforceCollabPermissionsUI();
      startSyncing();
      showCreatedSessionPin(pin);
    },
  );
}

function joinSessionWithPin(sid, name, theme) {
  if (!ensureCollabSocket()) return;
  resetTransientCollabUiState();
  errorMsgEl.style.display = "none";

  collabSocket.emit(
    "collab:join",
    { sessionId: sid, name, theme, deviceId: getOrCreateDeviceId() },
    (res) => {
      if (!res || !res.ok) {
        if (res && res.pending) {
          myInfo = { name, theme };
          showJoinPendingState(sid, name);
          return;
        }
        const rawError = String((res && res.error) || "");
        errorMsgEl.textContent = rawError.toLowerCase().includes("session not found")
          ? "Invalid code"
          : rawError || "Cannot join session.";
        errorMsgEl.style.display = "block";
        return;
      }

      const resolvedSessionId = res.sessionId || sid;
      activeSessionId = resolvedSessionId;
      myInfo = { name, theme };
      collabShareLink = res.shareLink || `${window.location.origin}/frontend.html/${resolvedSessionId}`;
      collabSessionPin = res.sessionPin || sid;
      collabParticipants = res.participants || [];
      collabHostName =
        (collabParticipants.find((p) => p.role === "host") || {}).name ||
        res.hostName ||
        "";
      collabPermissions = normalizeCollabPermissions(res.permissions);
      collabGroupMessages = [];
      collabPrivateMessages = [];
      collabChatMode = "group";
      collabChatTarget = "";
      window.history.replaceState({}, "", `/frontend.html/${resolvedSessionId}`);
      applyRemoteSessionState(res.files, res.activeFileName, true);
      enforceCollabPermissionsUI();
      showNotification(`Welcome, ${name}!`, "success");
      startSyncing();
      closeModal();
    },
  );
}

function showSessionDetails(sid) {
  collabModalView = "session";
  setCollabCloseButtonVisible(true);
  const link = collabShareLink || `${window.location.origin}/frontend.html/${sid}`;
  const orderedParticipants = [...collabParticipants].sort((a, b) => {
    if ((a.role || "") === "host") return -1;
    if ((b.role || "") === "host") return 1;
    if (Boolean(a.priority) !== Boolean(b.priority)) return a.priority ? -1 : 1;
    return String(a.name || "").localeCompare(String(b.name || ""));
  });
  const listItems = orderedParticipants
    .map((p) => {
      const roleLabel =
        p.role === "host" ? " (host)" : p.role === "co-host" ? " (co-host)" : "";
      const canManage = canModerateParticipant(p);
      const moreButton = canManage
        ? `<button class="run-button participant-more-btn" data-name="${escapeHtml(p.name)}" style="padding:4px 10px; font-size:11px;"><strong>MORE</strong></button>`
        : "";
      const statusParts = [
        p.currentFile || "No active file",
        p.mutedChat ? "muted" : "",
        p.frozenEditing ? "frozen" : "",
        p.priority ? "priority" : "",
      ].filter(Boolean);
      return `<div class="collab-participant-row">
        <div class="collab-participant-main">
          <span class="collab-participant-color" style="background:${escapeHtml(p.theme)};"></span>
          <div class="collab-participant-text">
            <div class="collab-participant-name">${escapeHtml(p.name)}${roleLabel}</div>
            <div class="collab-participant-meta">${escapeHtml(statusParts.join(" · "))}</div>
          </div>
        </div>
        ${moreButton}
      </div>`;
    })
    .join("");

  modalTitle.innerHTML = "<strong>SESSION INFO</strong>";
  modalBody.innerHTML = `
    <div class="collab-section-card">
      <h4 class="collab-section-title">Session</h4>
      <div class="collab-meta-grid">
        <div class="collab-meta-item">
          <span class="collab-meta-label">Share Link</span>
          <span class="collab-meta-value">
            <input type="text" readonly id="collabLinkInput" value="${link}" style="width:100%;padding:8px;text-align:left;border-radius:8px;border:1px solid var(--border-color);background:var(--bg-primary);color:var(--text-primary);margin-bottom:10px;">
            <button id="sessionCopyLinkBtn" class="run-button" style="width:100%;justify-content:center;"><strong>COPY LINK</strong></button>
          </span>
        </div>
        <div class="collab-meta-item">
          <span class="collab-meta-label">Session Pin</span>
          <span class="collab-meta-value collab-inline-pin">${escapeHtml(collabSessionPin || sid)}</span>
        </div>
        <div class="collab-meta-item">
          <span class="collab-meta-label">Host</span>
          <span class="collab-meta-value">${escapeHtml(getCurrentHostName() || "Unknown")}</span>
        </div>
        <div class="collab-meta-item">
          <span class="collab-meta-label">Announcement</span>
          <span class="collab-meta-value">${escapeHtml(collabPermissions.announcementBar || "None")}</span>
        </div>
        <div class="collab-meta-item">
          <span class="collab-meta-label">Timer</span>
          <span class="collab-meta-value">${collabPermissions.sessionEndsAt ? escapeHtml(formatSessionTimeRemaining(collabPermissions.sessionEndsAt)) : "Off"}</span>
        </div>
      </div>
      <div class="collab-pill-row" style="margin-top:12px;">
        <span class="collab-pill">Pinned: ${escapeHtml(collabPermissions.pinnedFile || "None")}</span>
        <span class="collab-pill">Team focus: ${escapeHtml(collabPermissions.groupHighlightFile || "None")}</span>
      </div>
    </div>
    <div class="collab-section-card">
      <h4 class="collab-section-title">Participants <span style="font-weight:normal;color:var(--text-muted);font-size:13px;">(${orderedParticipants.length})</span></h4>
      <div class="collab-participant-list">${listItems}</div>
    </div>
    <div class="collab-section-card">
      <h4 class="collab-section-title">Live Timeline</h4>
      ${renderTimelineHtml()}
    </div>
    ${buildCollabChatPanelHtml()}
  `;

  setModalActions(`
    ${canUseCoHostTools() ? `<button id="groupControlsBtn" class="run-button"><strong>${isHost() ? "GROUP CONTROLS" : "TEAM TOOLS"}${isHost() && collabPendingJoins.length ? ` (${collabPendingJoins.length})` : ""}</strong></button>` : ""}
    <button class="run-button" onclick="closeModal()"><strong>CLOSE</strong></button>`);
  collabModal.style.display = "flex";

  const groupControlsBtn = document.getElementById("groupControlsBtn");
  if (groupControlsBtn) {
    groupControlsBtn.onclick = () => showGroupControls(sid);
  }
  const sessionCopyLinkBtn = document.getElementById("sessionCopyLinkBtn");
  if (sessionCopyLinkBtn) {
    sessionCopyLinkBtn.onclick = () => copyLink();
  }
  if (canUseCoHostTools()) {
    const moreButtons = modalBody.querySelectorAll(".participant-more-btn");
    moreButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetName = btn.getAttribute("data-name") || "";
        showParticipantActions(targetName);
      });
    });
  }
  bindCollabChatControls();
  requestCollabChatHistory();
}

function copyLink() {
  const el = document.getElementById("collabLinkInput");
  if (!el) {
    showNotification("No collaboration link available to copy.", "error");
    return;
  }
  el.select();
  el.setSelectionRange(0, 99999);
  try {
    const copied = document.execCommand("copy");
    if (copied) {
      showNotification("Copied!", "success");
      return;
    }
    throw new Error("execCommand copy returned false");
  } catch {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(el.value)
        .then(() => showNotification("Copied!", "success"))
        .catch(() => showNotification("Failed to copy link.", "error"));
    } else {
      showNotification("Failed to copy link.", "error");
    }
  }
}

function closeModal() {
  collabModalView = "idle";
  activeParticipantActionName = "";
  collabModal.style.display = "none";
  setCollabCloseButtonVisible(true);
  setModalActions(`<button id="modalDoneBtn" class="run-button"><strong>DONE</strong></button>`);
}

function isReloadNavigation() {
  try {
    const nav = performance.getEntriesByType("navigation");
    return Array.isArray(nav) && nav[0] && nav[0].type === "reload";
  } catch {
    return false;
  }
}

function resetCollabUrlToFreshState() {
  if (window.location.pathname.includes("/frontend.html/") || window.location.hash) {
    window.history.replaceState({}, "", "/frontend.html");
  }
}

function checkForSession() {
  const hash = extractSessionIdFromUrl();
  if (!hash) return false;
  if (!ensureCollabSocket()) return false;
  renderJoinNameStep(hash);
  return true;
}

function promptJoinTheme(name, sid) {
  setCollabCloseButtonVisible(false);
  modalTitle.innerHTML = "<strong>PICK COLOR</strong>";
  loadCollabPaletteParticipants(sid, (paletteParticipants) => {
    modalBody.innerHTML = `
      <button
        id="modalBackBtn"
        aria-label="Go back"
        style="
          position: absolute;
          top: 10px;
          left: 12px;
          border: 1px solid var(--border-color);
          background: var(--bg-tertiary);
          color: var(--text-primary);
          border-radius: 8px;
          width: 34px;
          height: 30px;
          cursor: pointer;
          font-size: 18px;
          line-height: 1;
        "
      >&#8592;</button>
      <p style="margin-top: 8px;"><strong>Your color:</strong></p>
      ${buildCollabColorPickerHtml("#2196F3", paletteParticipants)}
    `;
    errorMsgEl.style.display = "none";
    setModalActions(`<button id="modalDoneBtn" class="run-button"><strong>DONE</strong></button>`);
    bindCollabColorPicker("#2196F3");

    const backBtn = document.getElementById("modalBackBtn");
    if (backBtn) {
      backBtn.onclick = () => renderJoinNameStep(sid, name);
    }

    const doneBtn = getModalDoneBtn();
    if (!doneBtn) return;
    doneBtn.onclick = () => {
      const theme = document.getElementById("userThemeInput").value;
      resetTransientCollabUiState();

      collabSocket.emit(
        "collab:join",
        { sessionId: sid, name, theme, deviceId: getOrCreateDeviceId() },
        (res) => {
          if (!res || !res.ok) {
            if (res && res.pending) {
              myInfo = { name, theme };
              showJoinPendingState(sid, name);
              return;
            }
            if (res && String(res.error || "").toLowerCase().includes("session not found")) {
              window.location.href = "/404.html";
              return;
            }
            errorMsgEl.textContent = (res && res.error) || "Cannot join session.";
            errorMsgEl.style.display = "block";
            return;
          }

          activeSessionId = sid;
          myInfo = { name, theme };
          collabShareLink = res.shareLink || `${window.location.origin}/frontend.html/${sid}`;
          collabSessionPin = res.sessionPin || collabSessionPin;
          collabParticipants = res.participants || [];
          collabHostName =
            (collabParticipants.find((p) => p.role === "host") || {}).name ||
            res.hostName ||
            "";
          collabPermissions = normalizeCollabPermissions(res.permissions);
          collabGroupMessages = [];
          collabPrivateMessages = [];
          collabChatMode = "group";
          collabChatTarget = "";
          applyRemoteSessionState(res.files, res.activeFileName, true);
          enforceCollabPermissionsUI();
          showNotification(`Welcome, ${name}!`, "success");
          startSyncing();
          closeModal();
        },
      );
    };
  });
}

function handleCodeChange() {
  if (isApplyingRemoteState) return;
  scheduleSessionUpdate();
}

function syncProjectWithSession() {
  if (isApplyingRemoteState) return;
  scheduleSessionUpdate();
}

function startSyncing() {
  emitSessionUpdate();
}
// PART 13 - MEDIA FILE HANDLER
const addMediaBtn = document.getElementById("addMediaBtn");
const mediaInput = document.createElement("input");
mediaInput.type = "file";
mediaInput.accept = "image/*,video/*,audio/*";
mediaInput.multiple = true;
mediaInput.style.display = "none";
document.body.appendChild(mediaInput);

addMediaBtn.addEventListener("click", () => {
  if (activeSessionId && isReadOnlyParticipant() && collabPermissions.disableNewFile) {
    showNotification("The host disabled creating new files for participants.", "error");
    return;
  }
  mediaInput.click();
});

mediaInput.addEventListener("change", (e) => {
  if (activeSessionId && isReadOnlyParticipant() && collabPermissions.disableNewFile) {
    showNotification("The host disabled creating new files for participants.", "error");
    mediaInput.value = "";
    return;
  }
  const files = Array.from(e.target.files);
  if (!files.length) return;

  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const base64 = ev.target.result;
      const name = normalizeProjectFileName(file.name);
      const ext = name.split(".").pop().toLowerCase();
      const type = ["jpg", "jpeg", "png", "gif", "webp"].includes(ext)
        ? "img"
        : ext === "mp4"
          ? "video"
          : "audio";

      const newFile = {
        name,
        type: "media",
        mediaType: type,
        content: base64,
        active: false,
      };

      if (!projectFiles.some((f) => String(f.name || "").trim().toLowerCase() === name.toLowerCase())) {
        projectFiles.push(newFile);
        showNotification(`Added: ${name}`, "success");
      } else {
        showNotification(`${name} already exists`, "warn");
      }
      renderFileList();
      syncProjectWithSession();
    };
    reader.readAsDataURL(file);
  });
  mediaInput.value = "";
});

// PART 14 - SEAMLESS & FULL-RANGE DIVIDER DRAG
let isDragging = false;
let dragAxis = "x";
let startPointerPos = 0;
let startEditorSize = 0;
let startPreviewSize = 0;
let containerSize = 0;

divider.addEventListener("mousedown", startDragging);
divider.addEventListener("touchstart", startDragging, { passive: true });
divider.addEventListener("dblclick", resetEditorPreviewSplit);

function isStackedEditorLayout() {
  return window.getComputedStyle(editorContainer).flexDirection === "column";
}

function getAvailableSplitSpace(axis) {
  if (!editorContainer) return 0;
  const styles = window.getComputedStyle(editorContainer);
  const gapValue = axis === "y"
    ? styles.rowGap || styles.gap
    : styles.columnGap || styles.gap;
  const gap = Number.parseFloat(gapValue) || 0;

  if (axis === "y") {
    const paddingTop = Number.parseFloat(styles.paddingTop) || 0;
    const paddingBottom = Number.parseFloat(styles.paddingBottom) || 0;
    return Math.max(0, editorContainer.clientHeight - paddingTop - paddingBottom - gap);
  }

  const paddingLeft = Number.parseFloat(styles.paddingLeft) || 0;
  const paddingRight = Number.parseFloat(styles.paddingRight) || 0;
  return Math.max(0, editorContainer.clientWidth - paddingLeft - paddingRight - gap);
}

function resetEditorPreviewSplit() {
  if (isStackedEditorLayout()) {
    editorsPanel.style.width = "100%";
    editorsPanel.style.height = "52dvh";
    editorsPanel.style.flex = "none";
    if (previewPanel) {
      previewPanel.style.width = "100%";
      previewPanel.style.height = "48dvh";
      previewPanel.style.flex = "none";
    }
    return;
  }

  editorsPanel.style.width = "50%";
  editorsPanel.style.height = "";
  editorsPanel.style.flex = "none";
  if (previewPanel) {
    previewPanel.style.width = "";
    previewPanel.style.height = "";
    previewPanel.style.flex = "1";
  }
}

function startDragging(e) {
  isDragging = true;
  divider.classList.add("dragging");
  dragAxis = isStackedEditorLayout() ? "y" : "x";
  document.body.style.cursor = dragAxis === "y" ? "row-resize" : "col-resize";
  document.body.style.userSelect = "none";
  if (iframe) {
    iframe.style.pointerEvents = "none";
  }

  startPointerPos = e.type.includes("mouse")
    ? dragAxis === "y"
      ? e.pageY
      : e.pageX
    : dragAxis === "y"
      ? e.touches[0].pageY
      : e.touches[0].pageX;
  startEditorSize = dragAxis === "y"
    ? editorsPanel.getBoundingClientRect().height
    : editorsPanel.getBoundingClientRect().width;
  startPreviewSize = dragAxis === "y" && previewPanel
    ? previewPanel.getBoundingClientRect().height
    : 0;
  containerSize = getAvailableSplitSpace(dragAxis);

  e.preventDefault();

  document.addEventListener("mousemove", doDrag);
  document.addEventListener("touchmove", doDrag, { passive: false });
  document.addEventListener("mouseup", stopDragging);
  document.addEventListener("touchend", stopDragging);
}

function doDrag(e) {
  if (!isDragging) return;

  const currentPointerPos = e.type.includes("mouse")
    ? dragAxis === "y"
      ? e.pageY
      : e.pageX
    : dragAxis === "y"
      ? e.touches[0].pageY
      : e.touches[0].pageX;
  const diff = currentPointerPos - startPointerPos;

  if (dragAxis === "y") {
    const minHeight = 260;
    const dividerSize = divider.getBoundingClientRect().height || 6;
    const maxHeight = Math.max(minHeight, containerSize - dividerSize - 220);
    const newEditorHeight = Math.max(minHeight, Math.min(startEditorSize + diff, maxHeight));
    const newPreviewHeight = Math.max(220, containerSize - dividerSize - newEditorHeight);

    editorsPanel.style.height = `${newEditorHeight}px`;
    editorsPanel.style.width = "100%";
    editorsPanel.style.flex = "none";
    if (previewPanel) {
      previewPanel.style.height = `${newPreviewHeight}px`;
      previewPanel.style.flex = "none";
      previewPanel.style.width = "100%";
    }
  } else {
    const minWidth = 200;
    const minPreviewWidth = 100;
    const dividerSize = divider.getBoundingClientRect().width || 8;
    const maxWidth = Math.max(minWidth, containerSize - dividerSize - minPreviewWidth);
    const newWidth = Math.max(minWidth, Math.min(startEditorSize + diff, maxWidth));
    const newPreviewWidth = Math.max(minPreviewWidth, containerSize - dividerSize - newWidth);

    editorsPanel.style.width = `${newWidth}px`;
    editorsPanel.style.height = "";
    editorsPanel.style.flex = "none";
    if (previewPanel) {
      previewPanel.style.height = "";
      previewPanel.style.width = `${newPreviewWidth}px`;
      previewPanel.style.flex = "none";
    }
  }

  if (e.type === "touchmove") e.preventDefault();
}

function stopDragging() {
  if (!isDragging) return;
  isDragging = false;
  divider.classList.remove("dragging");
  document.body.style.cursor = "";
  document.body.style.userSelect = "";
  if (iframe) {
    iframe.style.pointerEvents = "";
  }

  document.removeEventListener("mousemove", doDrag);
  document.removeEventListener("touchmove", doDrag);
  document.removeEventListener("mouseup", stopDragging);
  document.removeEventListener("touchend", stopDragging);
}

// Reset on window resize
window.addEventListener("resize", () => {
  if (!isDragging) {
    if (isStackedEditorLayout()) {
      editorsPanel.style.width = "100%";
      if (!editorsPanel.style.height) {
        editorsPanel.style.height = "52dvh";
      }
      if (previewPanel) {
        previewPanel.style.width = "100%";
        if (!previewPanel.style.height) {
          previewPanel.style.height = "48dvh";
        }
        previewPanel.style.flex = "none";
      }
    } else {
      const current = editorsPanel.getBoundingClientRect().width;
      const max = window.innerWidth * 0.8;
      if (current > max || editorsPanel.style.width === "100%") {
        editorsPanel.style.width = "50%";
      }
      editorsPanel.style.height = "";
      if (previewPanel) {
        previewPanel.style.height = "";
        previewPanel.style.width = "";
        previewPanel.style.flex = "1";
      }
    }
  }
});

// PART 15 - APPLICATION INITIALIZATION
window.addEventListener("load", () => {
  initializeEditorPresence();
  const sessionFlowStarted = checkForSession();
  loadSettings();
  renderFileList();
  initializeEditor();
  Promise.resolve()
    .then(() => (sessionFlowStarted ? false : tryRestoreAutosaveDraft()))
    .then(() => {
      updateProjectStatusUI();
      updatePreview();
    });
});

window.addEventListener("beforeunload", function (e) {
  if (hasUnsavedChanges) {
    e.preventDefault();
    e.returnValue = "";
    return "Are you sure you want to leave? Your changes may not be saved.";
  }
});

newFileBtn.addEventListener("click", createNewFile);
if (newProjectBtn) {
  newProjectBtn.addEventListener("click", handleNewProject);
}
if (saveProjectBtn) {
  saveProjectBtn.addEventListener("click", async () => {
    const dialog = await showAppPrompt(
      "SAVE PROJECT",
      "Choose a name for this saved project:",
      getSuggestedProjectName(),
      "codx-project",
    );
    if (!dialog?.ok) return;
    saveCurrentProjectToLibrary(dialog.value);
  });
}
if (projectStatusSaveBtn) {
  projectStatusSaveBtn.addEventListener("click", async () => {
    if (activeSavedProjectName) {
      saveCurrentProjectToLibrary(activeSavedProjectName);
      return;
    }
    const dialog = await showAppPrompt(
      "SAVE PROJECT",
      "Choose a name for this saved project:",
      getSuggestedProjectName(),
      "codx-project",
    );
    if (!dialog?.ok) return;
    saveCurrentProjectToLibrary(dialog.value);
  });
}
if (openSavedProjectsBtn) {
  openSavedProjectsBtn.addEventListener("click", () => renderProjectLibrary("saved"));
}
if (templatesBtn) {
  templatesBtn.addEventListener("click", () => renderProjectLibrary("templates"));
}
if (publishProjectBtn) {
  publishProjectBtn.addEventListener("click", publishCurrentProject);
}
if (closeProjectLibraryBtn) {
  closeProjectLibraryBtn.addEventListener("click", closeProjectLibrary);
}
if (projectLibraryModal) {
  projectLibraryModal.addEventListener("click", (event) => {
    if (event.target === projectLibraryModal) {
      closeProjectLibrary();
    }
  });
}

// PART 16 - FONT PICKER
const fontPickerBtn = document.getElementById("fontPickerBtn");
const fontPickerModal = document.getElementById("fontPickerModal");
const closeFontPickerBtn = document.getElementById("closeFontPickerBtn");
const fontGrid = document.getElementById("fontGrid");
const fontSearchInput = document.getElementById("fontSearchInput");

const fonts = [
  { name: "Arial", family: "Arial, sans-serif", keywords: "clean ui sans" },
  { name: "Verdana", family: "Verdana, sans-serif", keywords: "wide readable sans" },
  { name: "Trebuchet MS", family: "'Trebuchet MS', sans-serif", keywords: "modern humanist sans" },
  { name: "Tahoma", family: "Tahoma, sans-serif", keywords: "compact ui sans" },
  { name: "Century Gothic", family: "'Century Gothic', sans-serif", keywords: "geometric round sans" },
  { name: "Franklin Gothic", family: "'Franklin Gothic Medium', sans-serif", keywords: "bold editorial sans" },
  { name: "Times New Roman", family: "'Times New Roman', serif", keywords: "classic newspaper serif" },
  { name: "Georgia", family: "Georgia, serif", keywords: "screen serif readable" },
  { name: "Garamond", family: "Garamond, serif", keywords: "elegant book serif" },
  { name: "Palatino", family: "'Palatino Linotype', serif", keywords: "calligraphic old style serif" },
  { name: "Cambria", family: "Cambria, serif", keywords: "modern serif body text" },
  { name: "Courier New", family: "'Courier New', monospace", keywords: "typewriter mono code" },
  { name: "Consolas", family: "Consolas, monospace", keywords: "programming mono clear" },
  { name: "Lucida Console", family: "'Lucida Console', monospace", keywords: "terminal monospace" },
  { name: "Impact", family: "Impact, fantasy", keywords: "heavy headline display" },
  { name: "Copperplate", family: "'Copperplate', fantasy", keywords: "engraved roman display" },
  { name: "Comic Sans MS", family: "'Comic Sans MS', cursive", keywords: "casual playful handwritten" },
  { name: "Brush Script MT", family: "'Brush Script MT', cursive", keywords: "script brush calligraphy" },
  { name: "Papyrus", family: "'Papyrus', fantasy", keywords: "rough textured display" },
  { name: "Candara", family: "Candara, sans-serif", keywords: "soft contemporary sans" },
  { name: "Gill Sans", family: "'Gill Sans', 'Gill Sans MT', sans-serif", keywords: "humanist british sans" },
  { name: "Optima", family: "Optima, 'Segoe UI', sans-serif", keywords: "flared elegant sans" },
  { name: "Futura", family: "Futura, 'Century Gothic', sans-serif", keywords: "geometric bauhaus sans" },
  { name: "Avenir", family: "Avenir, 'Trebuchet MS', sans-serif", keywords: "modern geometric sans" },
  { name: "Rockwell", family: "Rockwell, 'Courier New', serif", keywords: "slab serif sturdy" },
  { name: "Bodoni MT", family: "'Bodoni MT', 'Times New Roman', serif", keywords: "high contrast fashion serif" },
  { name: "Didot", family: "Didot, 'Times New Roman', serif", keywords: "luxury editorial serif" },
  { name: "Perpetua", family: "Perpetua, Georgia, serif", keywords: "book classical serif" },
  { name: "Book Antiqua", family: "'Book Antiqua', Palatino, serif", keywords: "old style serif" },
  { name: "Lucida Bright", family: "'Lucida Bright', Georgia, serif", keywords: "formal serif" },
  { name: "American Typewriter", family: "'American Typewriter', 'Courier New', monospace", keywords: "retro typewriter mono" },
  { name: "OCR A", family: "'OCR A Std', 'Lucida Console', monospace", keywords: "machine readable mono" },
  { name: "Andale Mono", family: "'Andale Mono', Consolas, monospace", keywords: "clean coding mono" },
  { name: "Bradley Hand", family: "'Bradley Hand', 'Comic Sans MS', cursive", keywords: "casual handwriting script" },
  { name: "Snell Roundhand", family: "'Snell Roundhand', 'Brush Script MT', cursive", keywords: "formal script calligraphy" },
  { name: "Chalkduster", family: "Chalkduster, fantasy", keywords: "chalk classroom display" },
  { name: "Stencil", family: "Stencil, Impact, fantasy", keywords: "military cutout display" },
  { name: "Cooper Black", family: "'Cooper Black', Impact, serif", keywords: "rounded heavy retro display" },
  { name: "Segoe Print", family: "'Segoe Print', 'Comic Sans MS', cursive", keywords: "friendly handwritten" },
  { name: "Segoe Script", family: "'Segoe Script', 'Brush Script MT', cursive", keywords: "flowing script handwriting" },
  { name: "Avant Garde", family: "'Avant Garde', Futura, sans-serif", keywords: "futurist geometric display sans" },
  { name: "Baskerville", family: "Baskerville, Georgia, serif", keywords: "literary refined serif" },
  { name: "Big Caslon", family: "'Big Caslon', 'Times New Roman', serif", keywords: "classical dramatic serif" },
  { name: "Monaco", family: "Monaco, 'Lucida Console', monospace", keywords: "compact terminal mono" },
  { name: "Menlo", family: "Menlo, Consolas, monospace", keywords: "developer coding mono" },
  { name: "Geneva", family: "Geneva, Tahoma, sans-serif", keywords: "neat swiss sans" },
  { name: "Hoefler Text", family: "'Hoefler Text', Garamond, serif", keywords: "editorial elegant serif" },
  { name: "Marker Felt", family: "'Marker Felt', 'Comic Sans MS', cursive", keywords: "marker playful handwritten" },
  { name: "Noteworthy", family: "Noteworthy, 'Segoe Print', cursive", keywords: "notebook handdrawn notes" },
  { name: "DIN", family: "DIN, 'Franklin Gothic Medium', sans-serif", keywords: "industrial signage sans" },
  { name: "Eurostile", family: "Eurostile, 'Century Gothic', sans-serif", keywords: "tech square futuristic sans" },
  { name: "Univers", family: "Univers, Arial, sans-serif", keywords: "neutral swiss sans" },
  { name: "Frutiger", family: "Frutiger, Arial, sans-serif", keywords: "wayfinding humanist sans" },
  { name: "Albertus", family: "Albertus, Palatino, serif", keywords: "inscription carved serif" },
  { name: "Trajan", family: "Trajan, 'Times New Roman', serif", keywords: "cinematic roman capitals" },
  { name: "Aptos", family: "Aptos, Calibri, sans-serif", keywords: "modern office sans" },
  { name: "Calisto MT", family: "'Calisto MT', Georgia, serif", keywords: "bookish readable serif" },
  { name: "Bell MT", family: "'Bell MT', Baskerville, serif", keywords: "traditional formal serif" },
  { name: "Kristen ITC", family: "'Kristen ITC', 'Comic Sans MS', cursive", keywords: "quirky playful handwritten" },
  { name: "Rage Italic", family: "'Rage Italic', 'Brush Script MT', cursive", keywords: "dramatic flourish script" },
  { name: "Bookman", family: "Bookman, Georgia, serif", keywords: "friendly oldstyle serif" },
  { name: "Wide Latin", family: "'Wide Latin', Impact, fantasy", keywords: "western poster display" },
  { name: "Berlin Sans FB", family: "'Berlin Sans FB', 'Trebuchet MS', sans-serif", keywords: "rounded art deco sans" },
  { name: "MS Gothic", family: "'MS Gothic', monospace", keywords: "pixel japanese mono" },
];

function normalizeFontName(name) {
  return String(name || "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function quoteFontFamilyName(name) {
  return `'${String(name || "").replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
}

function getGoogleFontImportUrl(fontName) {
  const familyParam = encodeURIComponent(fontName).replace(/%20/g, "+");
  return `https://fonts.googleapis.com/css2?family=${familyParam}:wght@400;500;600;700&display=swap`;
}

function getGoogleFontFamily(fontName) {
  return `${quoteFontFamilyName(fontName)}, sans-serif`;
}

function buildGoogleFontCss(fontName) {
  const importUrl = getGoogleFontImportUrl(fontName);
  return `@import url('${importUrl}');\nfont-family: ${getGoogleFontFamily(fontName)};`;
}

function ensureFontPreviewImport(fontName) {
  const safeName = normalizeFontName(fontName);
  if (!safeName) return;
  const linkId = `fontPreview_${safeName.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`;
  if (document.getElementById(linkId)) return;
  const link = document.createElement("link");
  link.id = linkId;
  link.rel = "stylesheet";
  link.href = getGoogleFontImportUrl(safeName);
  document.head.appendChild(link);
}

function renderFonts(query = "") {
  const customFontName = normalizeFontName(query);
  const term = customFontName.toLowerCase();
  const filteredFonts = fonts.filter((font) => {
    const haystack = `${font.name} ${font.family} ${font.keywords || ""}`.toLowerCase();
    return !term || haystack.includes(term);
  });
  const exactBuiltInMatch = filteredFonts.some(
    (font) => font.name.toLowerCase() === term,
  );

  fontGrid.innerHTML = "";

  if (customFontName && !exactBuiltInMatch) {
    ensureFontPreviewImport(customFontName);
    const customCard = document.createElement("div");
    customCard.className = "font-card font-card-custom";
    const customFamily = getGoogleFontFamily(customFontName);
    customCard.innerHTML = `
      <div class="font-name">Google Font</div>
      <div class="font-preview" style="font-family: ${customFamily};">${escapeHtml(customFontName)}</div>
      <div class="font-code">@import + font-family for ${escapeHtml(customFontName)}</div>
      <div class="font-hint">Click to copy. Works if this family exists on Google Fonts.</div>
    `;
    customCard.addEventListener("click", () =>
      copyFontCode(buildGoogleFontCss(customFontName), customFontName),
    );
    fontGrid.appendChild(customCard);
  }

  filteredFonts.forEach((font) => {
    const card = document.createElement("div");
    card.className = "font-card";
    card.innerHTML = `
      <div class="font-name">${font.name}</div>
      <div class="font-preview" style="font-family: ${font.family};">The quick brown fox</div>
      <div class="font-code">${font.family}</div>
    `;
    card.addEventListener("click", () => copyFontCode(font.family, font.name));
    fontGrid.appendChild(card);
  });

  if (filteredFonts.length === 0 && !customFontName) {
    fontGrid.innerHTML =
      '<div class="font-card" style="grid-column: 1 / -1; cursor: default;"><div class="font-name">Start Typing</div><div class="font-preview" style="font-size:16px;">Search built-in fonts or type any Google Font name.</div></div>';
  }
}

function copyFontCode(fontFamilyOrCss, fontName) {
  const code = String(fontFamilyOrCss || "").includes("font-family:")
    ? fontFamilyOrCss
    : `font-family: ${fontFamilyOrCss};`;

  // Try modern clipboard API first
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        showNotification(`Copied: ${fontName}`, "success");
      })
      .catch(() => {
        fallbackCopy(code, fontName);
      });
  } else {
    fallbackCopy(code, fontName);
  }
}

function fallbackCopy(text, fontName) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    const copied = document.execCommand("copy");
    if (copied) {
      showNotification(`Copied: ${fontName}`, "success");
    } else {
      showNotification("Failed to copy", "error");
    }
  } catch (err) {
    showNotification("Failed to copy", "error");
  }
  document.body.removeChild(textarea);
}

if (fontPickerBtn && fontPickerModal) {
  fontPickerBtn.addEventListener("click", () => {
    renderFonts();
    if (fontSearchInput) {
      fontSearchInput.value = "";
      fontSearchInput.focus();
    }
    fontPickerModal.style.display = "flex";
  });
}

if (closeFontPickerBtn && fontPickerModal) {
  closeFontPickerBtn.addEventListener("click", () => {
    fontPickerModal.style.display = "none";
  });
}

if (fontPickerModal) {
  fontPickerModal.addEventListener("click", (e) => {
    if (e.target === fontPickerModal) {
      fontPickerModal.style.display = "none";
    }
  });
}

if (fontSearchInput) {
  fontSearchInput.addEventListener("input", (e) => {
    renderFonts(e.target.value || "");
  });
}

// PART 17 - TUTORIAL SYSTEM

const tutorialSteps = [
  {
    target: 'label[title="Toggle auto-run feature"]',
    icon: "fa-solid fa-rotate",
    title: "Auto-Run",
    description:
      "When enabled, your code runs automatically as you type. Disable it to run manually with the RUN button.",
    position: "bottom",
  },
  {
    target: 'label[title="Show/hide console output"]',
    icon: "fa-solid fa-terminal",
    title: "Console Toggle",
    description:
      "Show or hide the console output panel. View console.log(), errors, and warnings here.",
    position: "bottom",
  },
  {
    target: "#collabBtn",
    icon: "fa-solid fa-users",
    title: "Collaborate",
    description:
      "Work together with others in real time. Sessions include chat, participant roles, room controls, and live cursors.",
    position: "bottom-left",
  },
  {
    target: "#previewFullscreenBtn",
    icon: "fa-solid fa-expand",
    title: "Fullscreen Preview",
    description:
      "View your website in fullscreen mode. Useful for checking layouts and responsive behavior.",
    position: "bottom-left",
  },
  {
    target: "#settingsBtn",
    icon: "fa-solid fa-gear",
    title: "Editor Settings",
    description:
      "Customize editor colors, text size, and fonts. You can also paste a Google Fonts embed link for the editor text style.",
    position: "bottom-left",
  },
  {
    target: "#addMediaBtn",
    icon: "fa-solid fa-image",
    title: "Add Media",
    description:
      "Upload images, videos, or audio files to use in your project.",
    position: "bottom-left",
  },
  {
    target: "#helpPageBtn",
    icon: "fa-solid fa-circle-question",
    title: "Help Page",
    description:
      "Open the help page for editor guidance, collaboration explanations, and current feature notes.",
    position: "bottom-left",
  },
  {
    target: "#headerMoreBtn",
    icon: "fa-solid fa-ellipsis",
    title: "More Tools",
    description:
      "Open the More menu for project tools like New, Save Project, Open Saved, Templates, Publish / Share, Fonts, and Zen Mode.",
    position: "bottom-left",
  },
  {
    target: "#newFileBtn",
    icon: "fa-solid fa-plus",
    title: "New File",
    description: "Create new HTML, CSS, JS, or .env files for your project.",
    position: "bottom-right",
  },
  {
    target: "#fileList",
    icon: "fa-solid fa-folder-open",
    title: "File Explorer",
    description:
      "Switch between project files here. You can rename files, delete them, and track file-level errors.",
    position: "bottom",
  },
  {
    target: "#activeEditor",
    icon: "fa-solid fa-code",
    title: "Code Editor",
    description:
      "Write your code here. Features include auto-closing tags and brackets, HTML/CSS/JS suggestions, inline style suggestions, syntax highlighting in style/script blocks, 4-space tab indentation, and error highlighting.",
    position: "right",
  },
  {
    target: "#undoEditorBtn",
    icon: "fa-solid fa-rotate-left",
    title: "Undo",
    description:
      "Undo your most recent editor change from the toolbar. This uses CodX Editor's own history tracking instead of relying on fragile browser textarea history.",
    position: "top-left",
  },
  {
    target: "#redoEditorBtn",
    icon: "fa-solid fa-rotate-right",
    title: "Redo",
    description:
      "Redo the last undone editor change from the toolbar.",
    position: "top-left",
  },
  {
    target: "#runPreviewBtn",
    icon: "fa-solid fa-play",
    title: "Run Button",
    description: "Click to manually run your code and update the preview.",
    position: "top-left",
  },
  {
    target: 'button[aria-label="Export project as ZIP"]',
    icon: "fa-solid fa-file-zipper",
    title: "Export ZIP File",
    description:
      "Download your current project as a ZIP file so you can back it up or share it.",
    position: "top-left",
  },
  {
    target: 'button[aria-label="Import ZIP file"]',
    icon: "fa-solid fa-file-import",
    title: "Import ZIP File",
    description:
      "Load an existing ZIP project into the editor. It restores your HTML, CSS, and JS files.",
    position: "top-left",
  },
  {
    target: "#output",
    icon: "fa-solid fa-eye",
    title: "Live Preview",
    description:
      "See your website come to life here. The preview can follow linked project pages and shows the current HTML title in its header.",
    position: "left",
  },
];

let currentStep = 0;
let tutorialActive = false;

// Create tutorial modal HTML
const tutorialModalHTML = `
  <div id="tutorialModal" style="
    display: none;
    position: fixed;
    z-index: 10000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  ">
    <div id="tutorialCard" style="
      position: absolute;
      background: var(--bg-secondary);
      border: 2px solid var(--accent-color);
      border-radius: 12px;
      padding: 20px;
      max-width: 350px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
      animation: tutorialFadeIn 0.3s ease;
      pointer-events: auto;
    ">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
        <div style="display: flex; align-items: center; gap: 10px; flex: 1;">
          <i id="tutorialIcon" style="color: var(--accent-color); font-size: 20px;"></i>
          <h3 id="tutorialTitle" style="margin: 0; color: var(--accent-color); font-size: 18px;"></h3>
        </div>
        <button id="closeTutorialBtn" style="
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 24px;
          cursor: pointer;
          line-height: 1;
          padding: 0;
          width: 30px;
          height: 30px;
          flex-shrink: 0;
        " aria-label="Close tutorial">&times;</button>
      </div>
      <p id="tutorialDescription" style="
        color: var(--text-primary);
        line-height: 1.6;
        margin-bottom: 20px;
        white-space: pre-line;
      "></p>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span id="tutorialProgress" style="color: var(--text-muted); font-size: 13px;"></span>
        <div style="display: flex; gap: 10px;">
          <button id="tutorialPrevBtn" class="run-button" style="padding: 6px 12px; font-size: 12px;">
            <i class="fa-solid fa-arrow-left"></i> <strong>BACK</strong>
          </button>
          <button id="tutorialNextBtn" class="run-button" style="padding: 6px 12px; font-size: 12px;">
            <strong>NEXT</strong> <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
    <div id="tutorialHighlight" style="
      position: absolute;
      border: 3px solid var(--accent-color);
      border-radius: 8px;
      pointer-events: none;
      background: transparent;
      transition: all 0.3s ease;
      z-index: 9999;
    "></div>
  </div>
`;

// Add tutorial styles
const tutorialStyles = `
  @keyframes tutorialFadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  
  #closeTutorialBtn:hover {
    color: #ff1f1f !important;
    background: rgba(255, 31, 31, 0.12) !important;
    text-shadow: 0 0 14px rgba(255, 31, 31, 0.72) !important;
    transform: scale(1.08);
    transition: all 0.3s ease;
  }
`;

const tutorialStyleSheet = document.createElement("style");
tutorialStyleSheet.textContent = tutorialStyles;
document.head.appendChild(tutorialStyleSheet);

// Insert tutorial modal into body only if it does not already exist in HTML
if (!document.getElementById("tutorialModal")) {
  document.body.insertAdjacentHTML("beforeend", tutorialModalHTML);
}

// Get tutorial elements
const tutorialModal = document.getElementById("tutorialModal");
const tutorialCard = document.getElementById("tutorialCard");
const tutorialIcon = document.getElementById("tutorialIcon");
const tutorialTitle = document.getElementById("tutorialTitle");
const tutorialDescription = document.getElementById("tutorialDescription");
const tutorialProgress = document.getElementById("tutorialProgress");
const tutorialHighlight = document.getElementById("tutorialHighlight");
const tutorialNextBtn = document.getElementById("tutorialNextBtn");
const tutorialPrevBtn = document.getElementById("tutorialPrevBtn");
const closeTutorialBtn = document.getElementById("closeTutorialBtn");

// Check if tutorial has been completed
function checkTutorialStatus() {
  if (isReloadNavigation() || extractSessionIdFromUrl()) return;
  const completed = safeLocalStorage("get", "tutorialCompleted");
  if (!completed) {
    // Wait a moment for the page to fully load, then start tutorial
    setTimeout(() => startTutorial(), 500);
  }
}

// Start tutorial
function startTutorial() {
  tutorialActive = true;
  currentStep = 0;
  tutorialModal.style.display = "block";
  if (!showTutorialStep(currentStep)) {
    tutorialActive = false;
    tutorialModal.style.display = "none";
  }
}

// Show specific tutorial step
function showTutorialStep(stepIndex) {
  if (stepIndex < 0 || stepIndex >= tutorialSteps.length) return false;

  const step = tutorialSteps[stepIndex];
  const targetElement = document.querySelector(step.target);

  if (!targetElement) {
    console.warn(`Tutorial target not found: ${step.target}`);
    return false;
  }

  // Update content
  tutorialIcon.className = step.icon;
  tutorialTitle.textContent = step.title;
  tutorialDescription.textContent = step.description;
  tutorialProgress.textContent = `Step ${stepIndex + 1} of ${
    tutorialSteps.length
  }`;

  if (typeof targetElement.scrollIntoView === "function") {
    targetElement.scrollIntoView({
      block: "nearest",
      inline: "nearest",
      behavior: "smooth",
    });
  }

  // Update buttons
  tutorialPrevBtn.disabled = stepIndex === 0;
  tutorialPrevBtn.style.opacity = stepIndex === 0 ? "0.5" : "1";

  if (stepIndex === tutorialSteps.length - 1) {
    tutorialNextBtn.innerHTML =
      '<strong>FINISH</strong> <i class="fa-solid fa-check"></i>';
  } else {
    tutorialNextBtn.innerHTML =
      '<strong>NEXT</strong> <i class="fa-solid fa-arrow-right"></i>';
  }

  // Position highlight and card
  positionTutorialElements(targetElement, step.position);
  return true;
}

function getTutorialCardPlacement(targetRect, cardRect, position) {
  const margin = 15;
  const viewportPadding = 15;
  const placements = {
    bottom: {
      left: targetRect.left + targetRect.width / 2 - cardRect.width / 2,
      top: targetRect.bottom + margin,
    },
    "bottom-left": {
      left: targetRect.left,
      top: targetRect.bottom + margin,
    },
    "bottom-right": {
      left: targetRect.right - cardRect.width,
      top: targetRect.bottom + margin,
    },
    top: {
      left: targetRect.left + targetRect.width / 2 - cardRect.width / 2,
      top: targetRect.top - cardRect.height - margin,
    },
    "top-left": {
      left: targetRect.left,
      top: targetRect.top - cardRect.height - margin,
    },
    "top-right": {
      left: targetRect.right - cardRect.width,
      top: targetRect.top - cardRect.height - margin,
    },
    right: {
      left: targetRect.right + margin,
      top: targetRect.top + targetRect.height / 2 - cardRect.height / 2,
    },
    left: {
      left: targetRect.left - cardRect.width - margin,
      top: targetRect.top + targetRect.height / 2 - cardRect.height / 2,
    },
  };

  const fallbackOrder = {
    bottom: ["bottom", "bottom-left", "bottom-right", "top", "right", "left"],
    "bottom-left": ["bottom-left", "bottom", "bottom-right", "top-left", "right", "left"],
    "bottom-right": ["bottom-right", "bottom", "bottom-left", "top-right", "left", "right"],
    top: ["top", "top-left", "top-right", "bottom", "right", "left"],
    "top-left": ["top-left", "top", "top-right", "bottom-left", "right", "left"],
    "top-right": ["top-right", "top", "top-left", "bottom-right", "left", "right"],
    right: ["right", "bottom-right", "top-right", "left", "bottom", "top"],
    left: ["left", "bottom-left", "top-left", "right", "bottom", "top"],
  };

  const preferred = fallbackOrder[position] || fallbackOrder["bottom-left"];
  const fitsViewport = (placement) => {
    if (!placement) return false;
    return (
      placement.left >= viewportPadding &&
      placement.top >= viewportPadding &&
      placement.left + cardRect.width <= window.innerWidth - viewportPadding &&
      placement.top + cardRect.height <= window.innerHeight - viewportPadding
    );
  };

  for (const candidate of preferred) {
    const placement = placements[candidate];
    if (fitsViewport(placement)) {
      return placement;
    }
  }

  const fallback = placements[preferred[0]] || placements["bottom-left"];
  return {
    left: Math.min(
      Math.max(viewportPadding, fallback.left),
      Math.max(viewportPadding, window.innerWidth - cardRect.width - viewportPadding),
    ),
    top: Math.min(
      Math.max(viewportPadding, fallback.top),
      Math.max(viewportPadding, window.innerHeight - cardRect.height - viewportPadding),
    ),
  };
}

// Position tutorial card and highlight
function positionTutorialElements(target, position) {
  const rect = target.getBoundingClientRect();
  const cardRect = tutorialCard.getBoundingClientRect();

  // Position highlight around the target element
  tutorialHighlight.style.left = rect.left - 5 + "px";
  tutorialHighlight.style.top = rect.top - 5 + "px";
  tutorialHighlight.style.width = rect.width + 10 + "px";
  tutorialHighlight.style.height = rect.height + 10 + "px";

  const placement = getTutorialCardPlacement(rect, cardRect, position);

  // Apply positions
  tutorialCard.style.left = placement.left + "px";
  tutorialCard.style.top = placement.top + "px";
}

// Tutorial navigation
tutorialNextBtn.addEventListener("click", () => {
  if (currentStep < tutorialSteps.length - 1) {
    currentStep++;
    if (!showTutorialStep(currentStep)) {
      completeTutorial();
    }
  } else {
    completeTutorial();
  }
});

tutorialPrevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    if (!showTutorialStep(currentStep)) {
      completeTutorial();
    }
  }
});

closeTutorialBtn.addEventListener("click", async () => {
  const dialog = await showAppConfirm(
    "SKIP TUTORIAL",
    "Are you sure you want to skip the tutorial?",
    "SKIP",
    "CANCEL",
    "background:#d32f2f;",
  );
  if (dialog?.ok) {
    completeTutorial();
  }
});

// Complete tutorial
function completeTutorial() {
  tutorialActive = false;
  tutorialModal.style.display = "none";
  safeLocalStorage("set", "tutorialCompleted", "true");
  showNotification("Tutorial completed! Welcome to CodX Editor", "success");
}

// Handle window resize during tutorial
window.addEventListener("resize", () => {
  if (tutorialActive && currentStep < tutorialSteps.length) {
    if (!showTutorialStep(currentStep)) {
      completeTutorial();
    }
  }
});

// Navigate To Homepage

// 2. Define the navigation function separately
function navigateToHomepage() {
    window.location.href = "/index.html"; 
}

// 3. Attach the function to the click event
homepageButton.addEventListener('click', navigateToHomepage);

// Initialize tutorial check on page load
window.addEventListener("load", () => {
  // Give the page a moment to fully render
  setTimeout(checkTutorialStatus, 800);
});
