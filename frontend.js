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
const lineNumbersContent = document.getElementById("lineNumbersContent") || lineNumbers;
const highlightLayer = document.getElementById("highlightLayer");
const pairSelectionHighlight = document.getElementById("pairSelectionHighlight");
const remoteCursorLayer = document.getElementById("remoteCursorLayer");
const localCollabCursor = document.getElementById("localCollabCursor");
const localCollabCursorIcon = document.getElementById("localCollabCursorIcon");
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
const googleFontCustomization = document.getElementById("googleFontCustomization");
const googleFontDetectedName = document.getElementById("googleFontDetectedName");
const editorFontWeightInput = document.getElementById("editorFontWeight");
const editorFontWeightValue = document.getElementById("editorFontWeightValue");
const editorFontItalicInput = document.getElementById("editorFontItalic");
const editorFontLetterSpacingInput = document.getElementById("editorFontLetterSpacing");
const editorFontLetterSpacingValue = document.getElementById("editorFontLetterSpacingValue");
const editorFontLineHeightInput = document.getElementById("editorFontLineHeight");
const editorFontLineHeightValue = document.getElementById("editorFontLineHeightValue");
const settingsPreview = document.getElementById("settingsPreview");
const settingsPreviewCode = document.getElementById("settingsPreviewCode");
const newFileBtn = document.getElementById("newFileBtn");
const collabFileVisibilityBtn = document.getElementById("collabFileVisibilityBtn");
const fileList = document.getElementById("fileList");
const collabBtn = document.getElementById("collabBtn");
const collabMessageBadge = document.getElementById("collabMessageBadge");
const collabModal = document.getElementById("collabModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeModalBtn = document.getElementById("closeModalBtn");
const typingIndicatorEl = document.getElementById("typingIndicator");
const editorWatermark = document.getElementById("editorWatermark");
const editorMediaViewer = document.getElementById("editorMediaViewer");
const editorMediaViewerIcon = document.getElementById("editorMediaViewerIcon");
const editorMediaViewerName = document.getElementById("editorMediaViewerName");
const editorMediaViewerKind = document.getElementById("editorMediaViewerKind");
const editorMediaViewerContent = document.getElementById("editorMediaViewerContent");
const exportZipBtn = document.getElementById("exportZipBtn");
const importZipBtn = document.getElementById("importZipBtn");
const previewFullscreenBtn = document.getElementById("previewFullscreenBtn");
const previewTitleEl = document.getElementById("previewTitle");
const previewLinkEl = document.getElementById("previewLink");
const previewFaviconEl = document.getElementById("previewFavicon");
const previewRefreshBtn = document.getElementById("previewRefreshBtn");
const previewInspectBtn = document.getElementById("previewInspectBtn");
const previewZoomBtn = document.getElementById("previewZoomBtn");
const previewZoomModal = document.getElementById("previewZoomModal");
const closePreviewZoomBtn = document.getElementById("closePreviewZoomBtn");
const previewZoomValue = document.getElementById("previewZoomValue");
const previewZoomOutBtn = document.getElementById("previewZoomOutBtn");
const previewZoomInBtn = document.getElementById("previewZoomInBtn");
const previewZoomResetBtn = document.getElementById("previewZoomResetBtn");
const previewViewportStage = document.getElementById("previewViewportStage");
const previewDeviceShell = document.getElementById("previewDeviceShell");
const previewDeviceFrame = document.getElementById("previewDeviceFrame");
const previewDeviceBadge = document.getElementById("previewDeviceBadge");
const previewBreakpointIndicator = document.getElementById("previewBreakpointIndicator");
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
const developerConsoleShortcutButtons = document.querySelectorAll("[data-developer-command]");
const pairDock = document.getElementById("pairDock");
const pairDockContent = document.getElementById("pairDockContent");
const pairVoiceAudio = document.getElementById("pairVoiceAudio");
const saveProjectBtn = document.getElementById("saveProjectBtn");
const projectStatusSaveBtn = document.getElementById("projectStatusSaveBtn");
const newProjectBtn = document.getElementById("newProjectBtn");
const openSavedProjectsBtn = document.getElementById("openSavedProjectsBtn");
const deviceTransferBtn = document.getElementById("deviceTransferBtn");
const templatesBtn = document.getElementById("templatesBtn");
const publishProjectBtn = document.getElementById("publishProjectBtn");
const connectGitHubBtn = document.getElementById("connectGitHubBtn");
const connectGitHubBtnLabel = document.getElementById("connectGitHubBtnLabel");
const enableNodeRuntimeBtn = document.getElementById("enableNodeRuntimeBtn");
const enableNodeRuntimeBtnLabel = document.getElementById("enableNodeRuntimeBtnLabel");
const getIconsBtn = document.getElementById("getIconsBtn");
const helpPageBtn = document.getElementById("helpPageBtn");
const fontAwesomeIconModal = document.getElementById("fontAwesomeIconModal");
const closeFontAwesomeIconBtn = document.getElementById("closeFontAwesomeIconBtn");
const fontAwesomeIconSearch = document.getElementById("fontAwesomeIconSearch");
const fontAwesomeStyleFilter = document.getElementById("fontAwesomeStyleFilter");
const fontAwesomeIconGrid = document.getElementById("fontAwesomeIconGrid");
const fontAwesomeIconStatus = document.getElementById("fontAwesomeIconStatus");
const fontAwesomeIconCount = document.getElementById("fontAwesomeIconCount");
const fontAwesomeCdnCode = document.getElementById("fontAwesomeCdnCode");
const copyFontAwesomeCdnBtn = document.getElementById("copyFontAwesomeCdnBtn");
const githubRepoModal = document.getElementById("githubRepoModal");
const githubRepoModalTitle = document.getElementById("githubRepoModalTitle");
const githubRepoModalBody = document.getElementById("githubRepoModalBody");
const closeGitHubRepoModalBtn = document.getElementById("closeGitHubRepoModalBtn");
const projectLibraryModal = document.getElementById("projectLibraryModal");
const closeProjectLibraryBtn = document.getElementById("closeProjectLibraryBtn");
const projectLibraryTitle = document.getElementById("projectLibraryTitle");
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
const commandPaletteBtn = document.getElementById("commandPaletteBtn");
const commandPaletteModal = document.getElementById("commandPaletteModal");
const commandPaletteInput = document.getElementById("commandPaletteInput");
const commandPaletteResults = document.getElementById("commandPaletteResults");
const commandPaletteStatus = document.getElementById("commandPaletteStatus");
const mobileWorkspaceTabs = document.querySelector(".mobile-workspace-tabs");
const mobileWorkspaceButtons = [...document.querySelectorAll("[data-mobile-pane]")];

const COMPACT_WORKSPACE_QUERY =
  "(max-width: 699px), (max-width: 1100px) and (orientation: portrait), (max-width: 950px) and (max-height: 500px)";

function isCompactWorkspaceLayout() {
  return window.matchMedia(COMPACT_WORKSPACE_QUERY).matches;
}

function setMobileWorkspacePane(pane, { focus = false } = {}) {
  const nextPane = ["files", "editor", "preview", "console"].includes(pane) ? pane : "editor";
  document.body.classList.remove("mobile-pane-files", "mobile-pane-editor", "mobile-pane-preview", "mobile-pane-console");
  document.body.classList.add(`mobile-pane-${nextPane}`);
  mobileWorkspaceButtons.forEach((button) => {
    const selected = button.dataset.mobilePane === nextPane;
    button.setAttribute("aria-selected", selected ? "true" : "false");
    button.tabIndex = selected ? 0 : -1;
  });
  if (isCompactWorkspaceLayout() && nextPane === "console" && !showConsoleCheckbox.disabled) {
    showConsoleCheckbox.checked = true;
    showConsoleCheckbox.dispatchEvent(new Event("change"));
    requestAnimationFrame(() => {
      consoleOutput.scrollTop = consoleOutput.scrollHeight;
    });
  } else if (
    isCompactWorkspaceLayout() &&
    nextPane === "preview" &&
    !previewPanel.classList.contains("node-runtime-active")
  ) {
    showConsoleCheckbox.checked = false;
    showConsoleCheckbox.dispatchEvent(new Event("change"));
  }
  if (nextPane === "preview") {
    requestAnimationFrame(() => updatePreviewDeviceScale());
  } else if (focus && nextPane === "editor") {
    requestAnimationFrame(() => document.getElementById("activeEditor")?.focus({ preventScroll: true }));
  }
}

mobileWorkspaceTabs?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mobile-pane]");
  if (!button) return;
  setMobileWorkspacePane(button.dataset.mobilePane, { focus: button.dataset.mobilePane === "editor" });
});

mobileWorkspaceTabs?.addEventListener("keydown", (event) => {
  if (!isCompactWorkspaceLayout() || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
  event.preventDefault();
  const currentIndex = mobileWorkspaceButtons.findIndex((button) => button.getAttribute("aria-selected") === "true");
  const direction = event.key === "ArrowRight" ? 1 : -1;
  const nextButton = mobileWorkspaceButtons[(currentIndex + direction + mobileWorkspaceButtons.length) % mobileWorkspaceButtons.length];
  setMobileWorkspacePane(nextButton.dataset.mobilePane);
  nextButton.focus();
});

window.codxSetMobileWorkspacePane = setMobileWorkspacePane;

function isConsoleWorkspaceOpen() {
  return isCompactWorkspaceLayout()
    ? document.body.classList.contains("mobile-pane-console")
    : Boolean(showConsoleCheckbox?.checked);
}

function setConsoleWorkspaceOpen(open, { focus = false } = {}) {
  if (!showConsoleCheckbox || (open && showConsoleCheckbox.disabled)) return;
  if (isCompactWorkspaceLayout()) {
    setMobileWorkspacePane(open ? "console" : "preview", { focus });
    return;
  }
  showConsoleCheckbox.checked = Boolean(open);
  showConsoleCheckbox.dispatchEvent(new Event("change"));
}

function toggleConsoleWorkspace() {
  setConsoleWorkspaceOpen(!isConsoleWorkspaceOpen(), { focus: true });
}


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

let commandPaletteMatches = [];
let commandPaletteActiveIndex = 0;
let commandPalettePreviousFocus = null;

function getCommandButton(id) {
  return document.getElementById(id);
}

function createButtonCommand(id, label, description, icon, buttonId, keywords = "") {
  const button = getCommandButton(buttonId);
  return {
    id,
    label,
    description,
    icon,
    keywords,
    disabled: Boolean(!button || button.disabled),
    run: () => getCommandButton(buttonId)?.click(),
  };
}

function getCommandPaletteCommands() {
  const commands = [
    createButtonCommand("file.new", "New file", "Create a file in this project", "fa-solid fa-file-circle-plus", "newFileBtn", "add create document"),
    createButtonCommand("project.new", "New project", "Start with a fresh project", "fa-solid fa-folder-plus", "newProjectBtn", "clear reset"),
    createButtonCommand("project.save", "Save project", "Save to your local project library", "fa-solid fa-floppy-disk", "saveProjectBtn", "store library"),
    createButtonCommand("project.open", "Open saved projects", "Browse your local project library", "fa-solid fa-folder-open", "openSavedProjectsBtn", "load library"),
    createButtonCommand("project.transfer", "Device Transfer", "Move projects and settings to another device", "fa-solid fa-mobile-screen-button", "deviceTransferBtn", "phone laptop import sync code"),
    createButtonCommand("project.templates", "Open starter templates", "Start from a ready-made project", "fa-solid fa-layer-group", "templatesBtn", "gallery examples"),
    createButtonCommand("project.publish", "Publish / share project", "Create or update a public link", "fa-solid fa-share-nodes", "publishProjectBtn", "deploy link"),
    createButtonCommand("project.export", "Export project as ZIP", "Download every project file", "fa-solid fa-file-zipper", "exportZipBtn", "download backup"),
    createButtonCommand("project.import", "Import project ZIP", "Open files from a ZIP archive", "fa-solid fa-file-import", "importZipBtn", "upload restore"),
    createButtonCommand("editor.focus", "Focus code editor", "Return the cursor to the active file", "fa-solid fa-i-cursor", "activeEditor", "code type",),
    createButtonCommand("editor.undo", "Undo edit", "Undo the last editor change", "fa-solid fa-rotate-left", "undoEditorBtn", "history"),
    createButtonCommand("editor.redo", "Redo edit", "Restore the last undone change", "fa-solid fa-rotate-right", "redoEditorBtn", "history"),
    createButtonCommand("editor.settings", "Open editor settings", "Theme, font and layout preferences", "fa-solid fa-gear", "settingsBtn", "appearance customize"),
    ...(isCompactWorkspaceLayout() ? [] : [createButtonCommand("editor.zen", isZenMode ? "Exit Zen Mode" : "Enter Zen Mode", "Toggle the focused editing layout", "fa-solid fa-laptop-code", "zenModeBtn", "focus fullscreen")]),
    createButtonCommand("preview.run", "Run preview", "Build the current project preview", "fa-solid fa-play", "runPreviewBtn", "refresh execute"),
    createButtonCommand("preview.refresh", "Refresh preview", "Reload the preview pane", "fa-solid fa-rotate", "previewRefreshBtn", "reload"),
    createButtonCommand("preview.fullscreen", "Toggle preview fullscreen", "Expand or restore the preview", "fa-solid fa-expand", "previewFullscreenBtn", "screen"),
    createButtonCommand("collaboration.open", "Collaboration", "Create, join or manage a live session", "fa-solid fa-user-group", "collabBtn", "share room friends"),
    createButtonCommand("tools.media", "Add media", "Import an image, video or audio file", "fa-solid fa-photo-film", "addMediaBtn", "upload asset"),
    createButtonCommand("tools.fonts", "Browse fonts", "Find and copy font styles", "fa-solid fa-font", "fontPickerBtn", "typography google fontsource"),
    createButtonCommand("tools.icons", "Browse icons", "Search the Font Awesome catalog", "fa-solid fa-icons", "getIconsBtn", "font awesome"),
    createButtonCommand("tools.node", window.codxNodeRuntime?.enabled ? "Disable Node.js runtime" : "Enable Node.js runtime", "Use Node.js and npm inside the browser", "fa-brands fa-node-js", "enableNodeRuntimeBtn", "terminal npm server"),
    createButtonCommand("help.open", "Help and tutorial", "Open learning options", "fa-solid fa-circle-question", "helpPageBtn", "guide tour docs"),
  ];

  commands.push({
    id: "view.console",
    label: isConsoleWorkspaceOpen() ? "Hide console" : "Show console",
    description: "Toggle preview logs and errors",
    icon: "fa-solid fa-rectangle-list",
    keywords: "output debug log",
    disabled: Boolean(!showConsoleCheckbox || showConsoleCheckbox.disabled),
    run: toggleConsoleWorkspace,
  });

  commands.push({
    id: "view.autorun",
    label: autoRunCheckbox?.checked ? "Disable Auto-Run" : "Enable Auto-Run",
    description: "Toggle automatic preview updates",
    icon: "fa-solid fa-bolt",
    keywords: "preview live update",
    disabled: Boolean(!autoRunCheckbox || autoRunCheckbox.disabled),
    run: () => {
      autoRunCheckbox.checked = !autoRunCheckbox.checked;
      autoRunCheckbox.dispatchEvent(new Event("change"));
    },
  });

  (Array.isArray(projectFiles) ? projectFiles : []).forEach((file) => {
    const fileName = String(file?.name || "").trim();
    if (!fileName) return;
    const icon = file.type === "html"
      ? "fa-brands fa-html5"
      : file.type === "css"
        ? "fa-brands fa-css3-alt"
        : file.type === "js"
          ? "fa-brands fa-js"
          : "fa-regular fa-file-code";
    commands.push({
      id: `file.open.${fileName.toLowerCase()}`,
      label: `Open ${fileName}`,
      description: file.active ? "Currently active file" : "Switch to this project file",
      icon,
      keywords: `file switch ${file.type || ""}`,
      disabled: Boolean(file.active),
      run: () => switchFile(fileName),
    });
  });

  return commands;
}

function getCommandPaletteScore(command, rawQuery) {
  const query = String(rawQuery || "").trim().toLowerCase();
  if (!query) return command.id.startsWith("file.open.") ? 18 : 10;
  const label = command.label.toLowerCase();
  const haystack = `${label} ${command.description} ${command.keywords || ""}`.toLowerCase();
  if (label === query) return 1000;
  if (label.startsWith(query)) return 800 - label.length;
  if (label.includes(query)) return 600 - label.indexOf(query);
  if (haystack.includes(query)) return 400 - haystack.indexOf(query);

  let queryIndex = 0;
  let score = 0;
  for (let index = 0; index < haystack.length && queryIndex < query.length; index += 1) {
    if (haystack[index] === query[queryIndex]) {
      score += index === 0 || /[\s./_-]/.test(haystack[index - 1]) ? 8 : 2;
      queryIndex += 1;
    }
  }
  return queryIndex === query.length ? score : -1;
}

function renderCommandPalette() {
  if (!commandPaletteResults || !commandPaletteInput) return;
  const query = commandPaletteInput.value;
  commandPaletteMatches = getCommandPaletteCommands()
    .map((command) => ({ command, score: getCommandPaletteScore(command, query) }))
    .filter((entry) => entry.score >= 0)
    .sort((left, right) => right.score - left.score || left.command.label.localeCompare(right.command.label))
    .slice(0, 12)
    .map((entry) => entry.command);

  if (commandPaletteActiveIndex >= commandPaletteMatches.length) commandPaletteActiveIndex = 0;
  if (commandPaletteMatches[commandPaletteActiveIndex]?.disabled) {
    const firstEnabledIndex = commandPaletteMatches.findIndex((command) => !command.disabled);
    commandPaletteActiveIndex = firstEnabledIndex >= 0 ? firstEnabledIndex : 0;
  }
  commandPaletteResults.replaceChildren();

  if (!commandPaletteMatches.length) {
    const empty = document.createElement("div");
    empty.className = "command-palette-empty";
    empty.innerHTML = '<i class="fa-regular fa-face-frown-open"></i><strong>No matching commands</strong><span>Try a file name or a word like “preview”.</span>';
    commandPaletteResults.appendChild(empty);
  } else {
    commandPaletteMatches.forEach((command, index) => {
      const option = document.createElement("button");
      option.type = "button";
      option.id = `commandPaletteOption${index}`;
      option.className = "command-palette-option";
      option.setAttribute("role", "option");
      option.setAttribute("aria-selected", index === commandPaletteActiveIndex ? "true" : "false");
      option.disabled = command.disabled;
      option.innerHTML = `<span class="command-palette-icon"><i class="${command.icon}"></i></span><span class="command-palette-copy"><strong>${escapeHtml(command.label)}</strong><small>${escapeHtml(command.description)}</small></span>${command.disabled ? '<span class="command-palette-state">Unavailable</span>' : '<i class="fa-solid fa-arrow-turn-down command-palette-enter"></i>'}`;
      option.addEventListener("mousemove", () => {
        if (command.disabled || commandPaletteActiveIndex === index) return;
        commandPaletteActiveIndex = index;
        updateCommandPaletteSelection();
      });
      option.addEventListener("click", () => executeCommandPaletteCommand(index));
      commandPaletteResults.appendChild(option);
    });
  }

  const enabledCount = commandPaletteMatches.filter((command) => !command.disabled).length;
  commandPaletteStatus.textContent = query.trim()
    ? `${enabledCount} matching command${enabledCount === 1 ? "" : "s"}`
    : "Recently useful commands and project files";
  updateCommandPaletteSelection();
}

function updateCommandPaletteSelection() {
  const options = [...commandPaletteResults.querySelectorAll(".command-palette-option")];
  options.forEach((option, index) => option.setAttribute("aria-selected", index === commandPaletteActiveIndex ? "true" : "false"));
  const selected = options[commandPaletteActiveIndex];
  commandPaletteInput.setAttribute("aria-activedescendant", selected?.id || "");
  selected?.scrollIntoView({ block: "nearest" });
}

function moveCommandPaletteSelection(direction) {
  if (!commandPaletteMatches.length) return;
  let next = commandPaletteActiveIndex;
  for (let step = 0; step < commandPaletteMatches.length; step += 1) {
    next = (next + direction + commandPaletteMatches.length) % commandPaletteMatches.length;
    if (!commandPaletteMatches[next].disabled) break;
  }
  commandPaletteActiveIndex = next;
  updateCommandPaletteSelection();
}

function executeCommandPaletteCommand(index = commandPaletteActiveIndex) {
  const command = commandPaletteMatches[index];
  if (!command || command.disabled) return;
  closeCommandPalette(false);
  requestAnimationFrame(() => command.run());
}

function openCommandPalette(initialQuery = "") {
  if (!commandPaletteModal) return;
  commandPalettePreviousFocus = document.activeElement;
  commandPaletteModal.hidden = false;
  document.body.classList.add("command-palette-open");
  commandPaletteInput.value = initialQuery;
  commandPaletteActiveIndex = 0;
  renderCommandPalette();
  requestAnimationFrame(() => commandPaletteInput.focus());
}

function closeCommandPalette(restoreFocus = true) {
  if (!commandPaletteModal || commandPaletteModal.hidden) return;
  commandPaletteModal.hidden = true;
  document.body.classList.remove("command-palette-open");
  commandPaletteInput.value = "";
  if (restoreFocus && commandPalettePreviousFocus instanceof HTMLElement) commandPalettePreviousFocus.focus();
}

commandPaletteBtn?.addEventListener("click", () => openCommandPalette());
commandPaletteModal?.addEventListener("click", (event) => {
  if (event.target === commandPaletteModal) closeCommandPalette();
});
commandPaletteInput?.addEventListener("input", () => {
  commandPaletteActiveIndex = 0;
  renderCommandPalette();
});
commandPaletteInput?.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    moveCommandPaletteSelection(event.key === "ArrowDown" ? 1 : -1);
  } else if (event.key === "Enter") {
    event.preventDefault();
    executeCommandPaletteCommand();
  } else if (event.key === "Escape") {
    event.preventDefault();
    closeCommandPalette();
  }
});

document.addEventListener("keydown", (event) => {
  const isPaletteShortcut = (event.ctrlKey || event.metaKey) && (
    (!event.shiftKey && event.key.toLowerCase() === "k") ||
    (event.shiftKey && event.key.toLowerCase() === "p")
  );
  if (!isPaletteShortcut) return;
  event.preventDefault();
  if (commandPaletteModal?.hidden) openCommandPalette();
  else closeCommandPalette();
});

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
    showNotification(
      window.codxNodeRuntime.enabled
        ? "Node.js is ON. Use the red Disable Node.js action to turn it off."
        : "Node.js is disabled and the normal preview is restored.",
      window.codxNodeRuntime.enabled ? "success" : "info",
    );
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
const developerCommandHistory = [];
let developerCommandHistoryIndex = 0;
let developerMediaSourceVisible = false;
const developerCommandSuggestions = [
  "help", "state", "diagnostics", "files", "file list", "file open ",
  "participants", "permissions", "errors", "device list", "device responsive",
  "device phone", "device tablet", "device laptop", "device desktop", "viewport ",
  "rotate", "zoom reset", "zoom in", "zoom out", "preview status",
  "preview refresh", "preview fullscreen", "preview inspect", "preview screenshot",
  "grid toggle", "grid on", "grid off", "scheme toggle", "scheme system",
  "scheme light", "scheme dark", "breakpoints toggle", "breakpoints on",
  "breakpoints off", "editor goto ", "editor format",
  "editor wrap on", "editor wrap off", "editor font ", "editor tabsize ",
  "media source on", "media source off", "media source toggle",
  "media code on", "media code off", "media code toggle",
  "tools reset", "clear", "close",
];
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
developerConsoleShortcutButtons.forEach((button) => {
  button.addEventListener("click", () => {
    runDeveloperCommand(button.dataset.developerCommand || "");
    developerConsoleInput?.focus();
  });
});
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
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      const direction = e.key === "ArrowUp" ? -1 : 1;
      developerCommandHistoryIndex = Math.max(
        0,
        Math.min(developerCommandHistory.length, developerCommandHistoryIndex + direction),
      );
      developerConsoleInput.value = developerCommandHistory[developerCommandHistoryIndex] || "";
      developerConsoleInput.setSelectionRange(
        developerConsoleInput.value.length,
        developerConsoleInput.value.length,
      );
    }
    if (e.key === "Tab") {
      e.preventDefault();
      const typed = developerConsoleInput.value.trimStart().toLowerCase();
      const matches = developerCommandSuggestions.filter((item) => item.startsWith(typed));
      if (matches.length === 1) {
        developerConsoleInput.value = matches[0];
        developerConsoleInput.setSelectionRange(matches[0].length, matches[0].length);
      } else if (matches.length > 1) {
        appendDeveloperConsoleLine(`Suggestions: ${matches.join(", ")}`);
      }
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
const LARGE_EDITOR_CHARACTER_THRESHOLD = 80 * 1024;
const LARGE_EDITOR_LINE_THRESHOLD = 2500;
const VIRTUAL_LINE_NUMBER_THRESHOLD = 2000;
const LARGE_EDITOR_CONTEXT_WINDOW = 24 * 1024;
const fileEditHistory = new Map();
let pendingHistorySnapshot = null;
let isRestoringEditorHistory = false;
let editorDecorationTimer = null;
let editorScrollFrame = null;

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
  desc: "Insert a full lorem ipsum placeholder paragraph",
  attrs: [],
  badge: "snippet",
  category: "snippet",
  insertText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
});
[
  {
    tag: "a:blank",
    desc: "Anchor link that opens in a new tab",
    insertText: '<a href="" target="_blank" rel="noopener noreferrer"></a>',
  },
  {
    tag: "a:href",
    desc: "Anchor link with a placeholder href",
    insertText: '<a href="#"></a>',
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
let collabParticipantSortMode = "joined";
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
let collabUnreadGroupMessages = 0;
let collabUnreadPrivateMessages = {};
let remoteCursorState = {};
let remoteTypingState = {};
let lastCursorEmitAt = 0;
let lastSessionSyncAt = 0;
let collabRevisionCacheContent = null;
let collabRevisionCacheValue = "";
let fileErrorCounts = {};
let fileErrorLocations = {};
let collabOfflineNoticeLastAt = 0;
let collabOfflineNoticeActive = false;
let collabResumeInFlight = false;
let collabResumeRetryTimer = null;
let collabResumeFailureCount = 0;
let collabHostRecoveryInFlight = false;
let collabHeartbeatInterval = null;
let collabHeartbeatAckTimer = null;
let collabHasConnectedOnce = false;
let collabPendingLocalSync = false;
let collabLocalSyncRevision = 0;
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
  disablePairing: false,
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
let activePairState = null;
let pairOverview = [];
let pairFollowEnabled = false;
let pairFollowSuspended = false;
let pairPanelOpen = false;
let pairPanelTab = "chat";
let pairToolActivity = { chat: false, suggestions: false, tasks: false };
let pairLastPresenceEmitAt = 0;
let pairPresenceTimeout = null;
let pairVoiceConnection = null;
let pairVoiceStream = null;
let pairVoiceStatus = "idle";
let pairVoicePendingCandidates = [];
let pairVoiceInitiator = false;
let pairIgnoreLocalScrollUntil = 0;
let pairFollowScrollTarget = null;
let pairFollowAnimationFrame = 0;
let pairPartnerPresence = null;
let joinRequestContext = { sessionId: "", name: "" };
let lastAnnouncementText = "";
let activeDialogResolver = null;
let deviceTransferScannerStream = null;
let deviceTransferScannerFrame = 0;
let deviceTransferCountdownTimer = null;
let developerChordArmed = false;
let developerChordTimer = null;
let editorPresenceSocket = null;
const editableTextExtensions = ["html", "htm", "css", "scss", "less", "js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "jsonc", "env", "md", "txt"];
const ZIP_IMPORT_BATCH_SIZE = 12;
const LARGE_PROJECT_FILE_THRESHOLD = 160;
const LARGE_PROJECT_DIAGNOSTIC_LIMIT = 32;
const MAX_SAVED_PROJECTS = 24;
const PROJECT_LIBRARY_ARCHIVE_FORMAT = "codx-project-library";
const SAVED_PROJECTS_KEY = "codxSavedProjects";
const AUTOSAVE_PROJECT_KEY = "codxAutosaveProject";
const AUTOSAVE_META_KEY = "codxAutosaveMeta";
const WORKSPACE_SETTINGS_KEY = "codxWorkspaceSettings";
const AUTOSAVE_RESTORE_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 7;
const DEVICE_ID_KEY = "codxDeviceId";
const COLLAB_MANAGE_TUTORIAL_KEY = "codxCollabManageTutorialSeen";
const MEDIA_DATABASE_NAME = "codxEditorMedia";
const MEDIA_DATABASE_STORE = "assets";
const MEDIA_DATABASE_VERSION = 1;
const MAX_DEVELOPER_MEDIA_SOURCE_CHARS = 1024 * 1024;
const MAX_INLINE_MEDIA_SOURCE_CHARS = 8 * 1024 * 1024;
const MAX_LIVE_MEDIA_TRANSFER_BYTES = 4 * 1024 * 1024;
const MAX_PUBLISH_MEDIA_BYTES = 12 * 1024 * 1024;
const MAX_DEVICE_TRANSFER_MEDIA_BYTES = 12 * 1024 * 1024;
let autosaveTimer = null;
let autosaveIdleCallback = null;
let lastAutosaveAt = null;
let sessionSyncTimeout = null;
let lastEditorInputType = "";
let fileNameMigrationNoticeShown = false;
let mediaDatabasePromise = null;
let collabManageTutorialEl = null;
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
    const mediaKind = getProjectMediaKind(file);
    const oldName = String(file.name || `file-${index + 1}.txt`);
    const nextName = makeUniqueProjectFileName(normalizeProjectFileName(oldName, `file-${index + 1}.txt`), usedNames);
    usedNames.add(nextName.toLowerCase());
    if (oldName !== nextName) {
      file.name = nextName;
      file.type = mediaKind ? "media" : getFileType(nextName) || file.type;
      if (mediaKind) file.mediaType = mediaKind;
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

const fallbackStarterTemplates = [
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

const starterTemplates = Array.isArray(window.CODX_STARTER_TEMPLATES)
  && window.CODX_STARTER_TEMPLATES.length
  ? window.CODX_STARTER_TEMPLATES
  : fallbackStarterTemplates;

function renderStarterTemplatePreview(template) {
  const preview = String(template?.preview || "signal").toLowerCase();
  const safePreview = ["signal", "ledger", "concierge", "dashboard", "event", "shop", "workspace", "loop"].includes(preview)
    ? preview
    : "signal";
  const previewScenes = {
    signal: `
      <span class="preview-orb"></span>
      <span class="preview-kicker"></span>
      <span class="preview-display"></span>
      <span class="preview-display short"></span>
      <span class="preview-terminal"><i></i><i></i><i></i></span>`,
    ledger: `
      <span class="preview-ledger-index">04</span>
      <span class="preview-ledger-rule"></span>
      <span class="preview-ledger-title"></span>
      <span class="preview-ledger-image"></span>
      <span class="preview-ledger-copy"></span>`,
    concierge: `
      <span class="preview-form-progress"><i></i></span>
      <span class="preview-form-number">02</span>
      <span class="preview-form-title"></span>
      <span class="preview-form-choice"></span>
      <span class="preview-form-choice second"></span>`,
    dashboard: `
      <span class="preview-dash-rail"><i></i><i></i><i></i></span>
      <span class="preview-dash-stat"></span>
      <span class="preview-dash-stat second"></span>
      <span class="preview-dash-chart"><i></i></span>`,
    event: `
      <span class="preview-event-moon"></span>
      <span class="preview-event-date">09—12</span>
      <span class="preview-event-title"></span>
      <span class="preview-event-ticket"></span>`,
    shop: `
      <span class="preview-shop-nav"></span>
      <span class="preview-shop-type">ATELIER</span>
      <span class="preview-shop-product one"></span>
      <span class="preview-shop-product two"></span>
      <span class="preview-shop-product three"></span>`,
    workspace: `
      <span class="preview-workspace-dock"><i></i><i></i><i></i><i></i></span>
      <span class="preview-workspace-window large"><b></b><i></i><i></i></span>
      <span class="preview-workspace-window note">MOVE<br>IDEAS</span>
      <span class="preview-workspace-cursor">↖</span>`,
    loop: `
      <span class="preview-loop-title">LOOP / 08</span>
      <span class="preview-loop-controls"><i></i><i></i><b></b></span>
      <span class="preview-loop-grid">${"<i></i>".repeat(24)}</span>`,
  };
  return `
    <div class="template-preview template-preview-${safePreview}" aria-hidden="true">
      <div class="template-preview-bar">
        <span></span><span></span><span></span>
        <small>${escapeHtml(template?.category || "Website")}</small>
      </div>
      <div class="template-preview-scene">${previewScenes[safePreview]}</div>
    </div>`;
}

function getStarterTemplateGroup(template) {
  const explicitGroup = String(template?.group || "").trim().toLowerCase();
  if (explicitGroup) return explicitGroup;
  const preview = String(template?.preview || "").toLowerCase();
  if (["dashboard", "concierge", "board", "workspace", "loop"].includes(preview)) return "apps";
  if (preview === "ledger") return "portfolios";
  if (preview === "shop") return "commerce";
  return "websites";
}

function buildStarterTemplatePreviewDocument(template) {
  const files = Array.isArray(template?.files) ? template.files : [];
  const htmlFile = files.find((file) => String(file.type || "").toLowerCase() === "html");
  const cssFile = files.find((file) => String(file.type || "").toLowerCase() === "css");
  const jsFile = files.find((file) => String(file.type || "").toLowerCase() === "js");
  if (!htmlFile) return "<!doctype html><html><body>No preview is available.</body></html>";

  const safeCss = String(cssFile?.content || "").replace(/<\/style/gi, "<\\/style");
  const safeJs = String(jsFile?.content || "").replace(/<\/script/gi, "<\\/script");
  let html = String(htmlFile.content || "");
  const styleTag = `<style data-codx-template-preview>${safeCss}</style>`;
  const scriptTag = `<script data-codx-template-preview>${safeJs}<\/script>`;

  html = html.replace(
    /<link\b[^>]*href=["'](?:\.\/)?style\.css["'][^>]*>/i,
    () => styleTag,
  );
  if (!html.includes(styleTag)) {
    html = /<\/head>/i.test(html) ? html.replace(/<\/head>/i, () => `${styleTag}</head>`) : `${styleTag}${html}`;
  }
  html = html.replace(
    /<script\b[^>]*src=["'](?:\.\/)?script\.js["'][^>]*>\s*<\/script>/i,
    () => scriptTag,
  );
  if (!html.includes(scriptTag)) {
    html = /<\/body>/i.test(html) ? html.replace(/<\/body>/i, () => `${scriptTag}</body>`) : `${html}${scriptTag}`;
  }
  const baseTag = '<base target="_blank">';
  return /<head[^>]*>/i.test(html)
    ? html.replace(/<head([^>]*)>/i, (_match, attributes) => `<head${attributes}>${baseTag}`)
    : `${baseTag}${html}`;
}

function closeStarterTemplatePreview() {
  const modal = document.getElementById("starterTemplatePreviewModal");
  if (!modal) return;
  if (modal._escapeHandler) document.removeEventListener("keydown", modal._escapeHandler);
  modal.remove();
  document.body.classList.remove("template-preview-modal-open");
}

async function applyStarterTemplate(template) {
  if (!template) return false;
  if (hasUnsavedChanges) {
    const decision = await showUnsavedProjectOpenDialog(template.name);
    if (!decision?.ok) return false;
    if (decision.action === "save") {
      const saved = await saveCurrentProjectBeforeOpeningAnother();
      if (!saved) return false;
    } else if (decision.action !== "discard") {
      return false;
    }
  }

  const applied = applyProjectState(
    {
      files: template.files,
      activeFileName: template.files[0]?.name || "",
      previewTarget: { mode: "html", fileName: template.files[0]?.name || "" },
    },
    "template",
  );
  if (!applied) return false;
  activeSavedProjectName = null;
  closeStarterTemplatePreview();
  closeProjectLibrary();
  showNotification(`Opened ${template.name}.`, "success");
  return true;
}

function showStarterTemplatePreview(template) {
  if (!template) return;
  closeStarterTemplatePreview();
  const modal = document.createElement("div");
  modal.id = "starterTemplatePreviewModal";
  modal.className = "starter-template-preview-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "starterTemplatePreviewTitle");
  modal.innerHTML = `
    <div class="starter-template-preview-dialog">
      <header class="starter-template-preview-head">
        <div class="starter-template-preview-identity">
          <span class="template-icon" style="--template-accent:${escapeHtml(template.accent || "#4CAF50")}"><i class="fa-solid ${escapeHtml(template.icon || "fa-layer-group")}"></i></span>
          <div><small>${escapeHtml(template.category || "Starter concept")}</small><h2 id="starterTemplatePreviewTitle">${escapeHtml(template.name)}</h2></div>
        </div>
        <div class="starter-template-device-switch" aria-label="Preview size">
          <button class="active" type="button" data-preview-device="desktop" title="Desktop preview"><i class="fa-solid fa-desktop"></i><span>Desktop</span></button>
          <button type="button" data-preview-device="tablet" title="Tablet preview"><i class="fa-solid fa-tablet-screen-button"></i><span>Tablet</span></button>
          <button type="button" data-preview-device="phone" title="Phone preview"><i class="fa-solid fa-mobile-screen-button"></i><span>Phone</span></button>
        </div>
        <button class="starter-template-preview-close" type="button" aria-label="Close live preview">&times;</button>
      </header>
      <div class="starter-template-preview-stage" data-device="desktop">
        <div class="starter-template-browser-frame">
          <div class="starter-template-browser-bar"><span></span><span></span><span></span><p>${escapeHtml(template.name.toLowerCase().replace(/\s+/g, "-"))}.preview</p></div>
          <iframe title="Live preview of ${escapeHtml(template.name)}" sandbox="allow-scripts allow-forms allow-modals allow-popups"></iframe>
        </div>
      </div>
      <footer class="starter-template-preview-footer">
        <div><span>${escapeHtml(template.tone || "Art-directed starter")}</span><p>${escapeHtml(template.description || "")}</p></div>
        <button class="run-button starter-template-use-preview" type="button"><strong>USE THIS CONCEPT</strong><i class="fa-solid fa-arrow-right"></i></button>
      </footer>
    </div>`;
  document.body.appendChild(modal);
  document.body.classList.add("template-preview-modal-open");

  const iframe = modal.querySelector("iframe");
  iframe.srcdoc = buildStarterTemplatePreviewDocument(template);
  modal.querySelector(".starter-template-preview-close")?.addEventListener("click", closeStarterTemplatePreview);
  modal.querySelector(".starter-template-use-preview")?.addEventListener("click", () => applyStarterTemplate(template));
  modal.querySelectorAll("[data-preview-device]").forEach((button) => {
    button.addEventListener("click", () => {
      modal.querySelectorAll("[data-preview-device]").forEach((entry) => entry.classList.remove("active"));
      button.classList.add("active");
      modal.querySelector(".starter-template-preview-stage").dataset.device = button.dataset.previewDevice;
    });
  });
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeStarterTemplatePreview();
  });
  modal._escapeHandler = (event) => {
    if (event.key === "Escape") closeStarterTemplatePreview();
  };
  document.addEventListener("keydown", modal._escapeHandler);
  modal.querySelector(".starter-template-preview-close")?.focus({ preventScroll: true });
}

function resetTransientCollabUiState() {
  dismissCollabManageTutorial();
  clearTimeout(sessionSyncTimeout);
  sessionSyncTimeout = null;
  lastSessionSyncAt = 0;
  currentTypingIndicator = null;
  remoteCursorState = {};
  remoteTypingState = {};
  const editor = document.getElementById("activeEditor");
  editor?.classList.remove("collab-live-typing-caret");
  editor?.style.removeProperty("--local-collab-caret-color");
  resetCollabUnreadMessages();
  collabParticipantSortMode = "joined";
  hideLocalCollabCursor();
  followedParticipantName = "";
  stopCollabHeartbeat();
  activePairState = null;
  pairOverview = [];
  pairPanelOpen = false;
  pairToolActivity = { chat: false, suggestions: false, tasks: false };
  pairFollowEnabled = false;
  pairFollowSuspended = false;
  pairPartnerPresence = null;
  clearTimeout(pairPresenceTimeout);
  pairPresenceTimeout = null;
  stopPairFollowAnimation();
  if (pairSelectionHighlight) pairSelectionHighlight.hidden = true;
  stopPairVoice(false);
  renderPairDock();
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
    }, 3000);
  }
}

function getDeveloperStateSummary() {
  return {
    activeFile: activeFile ? activeFile.name : null,
    projectFileCount: projectFiles.length,
    previewTarget: currentPreviewTarget,
    previewDevice: getPreviewDeviceSummary(),
    previewZoom: previewZoomPercent,
    previewGrid: previewGridEnabled,
    previewBreakpoints: previewBreakpointIndicatorEnabled,
    previewColorScheme: previewColorSchemeMode,
    autoRun: Boolean(autoRunCheckbox?.checked),
    consoleVisible: Boolean(showConsoleCheckbox?.checked),
    zenMode: Boolean(isZenMode),
    mediaSourceView: Boolean(developerMediaSourceVisible),
    activeSessionId: activeSessionId || null,
    role: getMyRole(),
    participantCount: collabParticipants.length,
    errorFileCount: Object.keys(fileErrorCounts || {}).length,
  };
}

function runDeveloperCommand(rawCommand, echoCommand = true) {
  const raw = String(rawCommand || "").trim();
  const command = raw.toLowerCase();
  if (!command) return;
  if (echoCommand) {
    appendDeveloperConsoleLine(`> ${raw}`);
    if (developerCommandHistory.at(-1) !== raw) developerCommandHistory.push(raw);
    if (developerCommandHistory.length > 50) developerCommandHistory.shift();
    developerCommandHistoryIndex = developerCommandHistory.length;
  }

  const printJson = (value) => appendDeveloperConsoleLine(JSON.stringify(value, null, 2));
  const printFiles = () => printJson(
    projectFiles.map((file) => ({
      name: file.name,
      type: file.type,
      active: Boolean(file.active),
      length: String(file.content || "").length,
    })),
  );

  if (command.startsWith("device ")) {
    const requestedDevice = command.slice(7).trim();
    if (requestedDevice === "list") {
      printJson({
        responsive: "Fluid preview pane",
        ...Object.fromEntries(
          Object.entries(PREVIEW_DEVICE_PRESETS).map(([key, value]) => [
            key,
            `${value.width}×${value.height}`,
          ]),
        ),
      });
    } else if (setPreviewDevicePreset(requestedDevice)) {
      appendDeveloperConsoleLine(`Viewport set to ${previewDeviceBadge?.textContent || requestedDevice}.`);
    } else {
      appendDeveloperConsoleLine(`Unknown device: ${requestedDevice}`);
      appendDeveloperConsoleLine("Use: device list");
    }
    appendDeveloperConsoleLine("");
    return;
  }

  if (command.startsWith("viewport ")) {
    if (command === "viewport prompt") {
      promptForCustomPreviewViewport();
      return;
    }
    const match = command.match(/^viewport\s+(\d+)\s*(?:x|×|\s)\s*(\d+)$/);
    if (match && setCustomPreviewViewport(match[1], match[2])) {
      appendDeveloperConsoleLine(`Custom viewport set to ${match[1]}×${match[2]}.`);
    } else {
      appendDeveloperConsoleLine("Usage: viewport <width> <height>");
      appendDeveloperConsoleLine("Allowed range: 240–3840 by 240–2160 pixels.");
    }
    appendDeveloperConsoleLine("");
    return;
  }

  if (command === "rotate") {
    appendDeveloperConsoleLine(
      rotatePreviewDevice()
        ? `Viewport rotated to ${previewDeviceState.width}×${previewDeviceState.height}.`
        : "Choose a device or custom viewport before rotating.",
    );
    appendDeveloperConsoleLine("");
    return;
  }

  if (command.startsWith("zoom ")) {
    const value = command.slice(5).trim();
    if (value === "in") setPreviewZoom(previewZoomPercent + 25);
    else if (value === "out") setPreviewZoom(previewZoomPercent - 25);
    else if (value === "reset") setPreviewZoom(100);
    else if (/^\d+%?$/.test(value)) setPreviewZoom(Number.parseInt(value, 10));
    else {
      appendDeveloperConsoleLine("Usage: zoom <50-200>, zoom in, zoom out, or zoom reset");
      appendDeveloperConsoleLine("");
      return;
    }
    appendDeveloperConsoleLine(`Preview zoom: ${previewZoomPercent}%`);
    appendDeveloperConsoleLine("");
    return;
  }

  if (command === "preview refresh") {
    refreshPreviewPane();
    appendDeveloperConsoleLine("Preview refreshed.");
    appendDeveloperConsoleLine("");
    return;
  }
  if (command === "preview screenshot") {
    appendDeveloperConsoleLine("Capturing the current preview...");
    capturePreviewScreenshot()
      .then((message) => {
        appendDeveloperConsoleLine(`${message}\n`);
        showNotification(message, "success");
      })
      .catch((error) => {
        const message = String(error?.message || "The preview screenshot failed.");
        appendDeveloperConsoleLine(`${message}\n`);
        showNotification(message, "error");
      });
    return;
  }
  if (command === "preview fullscreen") {
    togglePreviewFullscreen();
    appendDeveloperConsoleLine("Fullscreen preview toggled.");
    appendDeveloperConsoleLine("");
    return;
  }
  if (command.startsWith("preview inspect")) {
    const mode = command.slice("preview inspect".length).trim();
    const enabled = mode === "on" ? true : mode === "off" ? false : !isPreviewInspecting;
    setPreviewInspecting(enabled);
    appendDeveloperConsoleLine(`Preview inspector ${enabled ? "enabled" : "disabled"}.`);
    appendDeveloperConsoleLine("");
    return;
  }

  if (command === "grid toggle" || command === "grid on" || command === "grid off") {
    const enabled = command === "grid on" ? true : command === "grid off" ? false : !previewGridEnabled;
    setPreviewGridEnabled(enabled);
    appendDeveloperConsoleLine(`Layout grid ${enabled ? "enabled" : "disabled"}.\n`);
    return;
  }

  if (command === "breakpoints toggle" || command === "breakpoints on" || command === "breakpoints off") {
    const enabled = command === "breakpoints on"
      ? true
      : command === "breakpoints off"
        ? false
        : !previewBreakpointIndicatorEnabled;
    setPreviewBreakpointIndicatorEnabled(enabled);
    appendDeveloperConsoleLine(`Breakpoint indicator ${enabled ? "enabled" : "disabled"}.\n`);
    return;
  }

  if (command === "scheme toggle") {
    appendDeveloperConsoleLine(`Preview color scheme: ${cyclePreviewColorScheme()}.\n`);
    return;
  }
  if (command.startsWith("scheme ")) {
    const mode = command.slice(7).trim();
    if (setPreviewColorScheme(mode)) appendDeveloperConsoleLine(`Preview color scheme: ${mode}.`);
    else appendDeveloperConsoleLine("Usage: scheme <system|light|dark>");
    appendDeveloperConsoleLine("");
    return;
  }

  if (command.startsWith("file open ")) {
    const requestedName = raw.slice("file open ".length).trim();
    const file = projectFiles.find(
      (item) => String(item.name || "").toLowerCase() === requestedName.toLowerCase(),
    );
    if (!file) appendDeveloperConsoleLine(`File not found: ${requestedName}`);
    else {
      switchFile(file.name);
      appendDeveloperConsoleLine(`Opened ${file.name}.`);
    }
    appendDeveloperConsoleLine("");
    return;
  }

  if (/^media (?:source|code) (?:on|off|toggle)$/.test(command)) {
    const requestedMode = command.split(" ").at(-1);
    const enabled = requestedMode === "on"
      ? true
      : requestedMode === "off"
        ? false
        : !developerMediaSourceVisible;
    setDeveloperMediaSourceVisible(enabled);
    const activeMediaKind = getProjectMediaKind(activeFile);
    appendDeveloperConsoleLine(
      enabled
        ? activeMediaKind
          ? `Media Source View enabled for ${activeFile.name}. Close Developer Tools to inspect the safe, read-only source details.`
          : "Media Source View enabled. Select an image, video, or audio file to inspect its safe, read-only source details."
        : "Media Source View disabled. Media files now open as visual previews.",
    );
    appendDeveloperConsoleLine("");
    showNotification(
      enabled ? "Developer Media Source View enabled." : "Visual media previews restored.",
      enabled ? "warn" : "success",
    );
    return;
  }

  if (command.startsWith("editor goto ")) {
    const match = command.match(/^editor goto\s+(\d+)(?:\s+(\d+))?$/);
    if (!match || !activeFile) appendDeveloperConsoleLine("Usage: editor goto <line> [column]");
    else {
      jumpToEditorLocation(activeFile.name, Number(match[1]), Number(match[2] || 1));
      appendDeveloperConsoleLine(`Moved to line ${match[1]}, column ${match[2] || 1}.`);
    }
    appendDeveloperConsoleLine("");
    return;
  }

  if (command === "editor wrap on" || command === "editor wrap off") {
    const enabled = command.endsWith("on");
    editorTextarea.wrap = enabled ? "soft" : "off";
    editorTextarea.style.whiteSpace = enabled ? "pre-wrap" : "pre";
    syncSyntaxLayerStyle(editorTextarea);
    renderSyntaxHighlight(editorTextarea);
    appendDeveloperConsoleLine(`Editor line wrapping ${enabled ? "enabled" : "disabled"}.`);
    appendDeveloperConsoleLine("");
    return;
  }

  if (command.startsWith("editor font ")) {
    const size = Number(command.slice("editor font ".length).trim());
    if (!Number.isFinite(size) || size < 10 || size > 32) {
      appendDeveloperConsoleLine("Usage: editor font <10-32>");
    } else {
      editorTextSizeInput.value = String(size);
      textSizeValue.textContent = `${size}px`;
      applySettingsToEditors();
      appendDeveloperConsoleLine(`Editor font size set to ${size}px.`);
    }
    appendDeveloperConsoleLine("");
    return;
  }

  if (command.startsWith("editor tabsize ")) {
    const size = Number(command.slice("editor tabsize ".length).trim());
    if (![2, 4, 8].includes(size)) appendDeveloperConsoleLine("Usage: editor tabsize <2|4|8>");
    else {
      editorTextarea.style.tabSize = String(size);
      syncSyntaxLayerStyle(editorTextarea);
      appendDeveloperConsoleLine(`Editor tab display size set to ${size}.`);
    }
    appendDeveloperConsoleLine("");
    return;
  }

  if (command === "editor format") {
    const result = formatActiveEditorCode();
    appendDeveloperConsoleLine(`${result.message}\n`);
    showNotification(result.message, result.ok ? "success" : "error");
    return;
  }

  if (command === "tools reset") {
    resetDeveloperToolControls();
    appendDeveloperConsoleLine("Developer Tool controls reset to their normal editor defaults.\n");
    showNotification("Developer Tool controls reset.", "success");
    return;
  }

  switch (command) {
    case "help":
      appendDeveloperConsoleLine("Preview controls:");
      appendDeveloperConsoleLine("  device list | responsive | phone | tablet | laptop | desktop");
      appendDeveloperConsoleLine("  viewport <width> <height>   rotate   zoom <50-200|in|out|reset>");
      appendDeveloperConsoleLine("  preview status | refresh | fullscreen | inspect [on|off] | screenshot");
      appendDeveloperConsoleLine("  grid <on|off|toggle>   breakpoints <on|off|toggle>");
      appendDeveloperConsoleLine("  scheme <system|light|dark|toggle>");
      appendDeveloperConsoleLine("Editor controls:");
      appendDeveloperConsoleLine("  file list   file open <name>   editor goto <line> [column]");
      appendDeveloperConsoleLine("  editor format   editor wrap <on|off>   editor font <10-32>");
      appendDeveloperConsoleLine("  editor tabsize <2|4|8>   media source <on|off|toggle>");
      appendDeveloperConsoleLine("  tools reset");
      appendDeveloperConsoleLine("Diagnostics:");
      appendDeveloperConsoleLine("  state   diagnostics   participants   permissions   errors");
      appendDeveloperConsoleLine("Console: clear   close");
      break;
    case "state":
      printJson(getDeveloperStateSummary());
      break;
    case "diagnostics": {
      const content = String(activeFile?.content || "");
      printJson({
        ...getDeveloperStateSummary(),
        activeFileLines: content ? content.split("\n").length : 0,
        activeFileCharacters: content.length,
        editorSelection: {
          start: editorTextarea.selectionStart,
          end: editorTextarea.selectionEnd,
        },
        previewInspecting: isPreviewInspecting,
        browserOnline: navigator.onLine,
      });
      break;
    }
    case "files":
    case "file list":
      printFiles();
      break;
    case "participants":
      printJson(
        collabParticipants.map((participant) => ({
            name: participant.name,
            role: participant.role || "participant",
            currentFile: participant.currentFile || null,
            mutedChat: Boolean(participant.mutedChat),
            frozenEditing: Boolean(participant.frozenEditing),
            priority: Boolean(participant.priority),
          })),
      );
      break;
    case "permissions":
      printJson(collabPermissions);
      break;
    case "errors":
      printJson({
            counts: fileErrorCounts,
            locations: fileErrorLocations,
          });
      break;
    case "preview":
    case "preview status":
      printJson({
            target: currentPreviewTarget,
            title: previewTitleEl ? previewTitleEl.textContent : "",
            device: getPreviewDeviceSummary(),
            zoom: previewZoomPercent,
            inspecting: isPreviewInspecting,
          });
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
  stopDeviceTransferScanner();
  stopDeviceTransferCountdown();
  resetAppDialogScroll();
  if (appDialog) appDialog.style.display = "none";
  if (appDialog) delete appDialog.dataset.dialogKind;
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

function resetAppDialogScroll() {
  const dialogSurface = appDialog?.firstElementChild;
  if (!(dialogSurface instanceof HTMLElement)) return;
  dialogSurface.scrollTop = 0;
  dialogSurface.scrollLeft = 0;
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

function showUnsavedProjectOpenDialog(projectName) {
  return new Promise((resolve) => {
    activeDialogResolver = resolve;
    if (appDialog) appDialog.dataset.dialogKind = "unsaved-project-open";
    if (appDialogTitle) appDialogTitle.textContent = "UNSAVED PROJECT";
    if (appDialogMessage) {
      appDialogMessage.innerHTML = `
        <span class="unsaved-project-warning">
          <span class="unsaved-project-warning-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <span>
            <strong>Save your current project before opening another one?</strong>
            <small>Opening <b>${escapeHtml(projectName || "this saved project")}</b> will replace the project currently in the editor.</small>
          </span>
        </span>
      `;
    }
    if (appDialogInput) {
      appDialogInput.style.display = "none";
      appDialogInput.value = "";
      appDialogInput.onkeydown = null;
    }
    if (appDialogActions) {
      appDialogActions.innerHTML = `
        <button type="button" id="unsavedProjectSaveBtn" class="run-button unsaved-project-save"><i class="fa-solid fa-floppy-disk"></i><strong>SAVE &amp; OPEN</strong></button>
        <button type="button" id="unsavedProjectDiscardBtn" class="run-button unsaved-project-discard"><i class="fa-solid fa-trash-can"></i><strong>DISCARD &amp; OPEN</strong></button>
        <button type="button" id="unsavedProjectCancelBtn" class="run-button unsaved-project-cancel"><strong>CANCEL</strong></button>
      `;
    }
    if (appDialog) appDialog.style.display = "flex";
    document.getElementById("unsavedProjectSaveBtn")?.addEventListener("click", () => {
      closeAppDialog({ ok: true, action: "save" });
    });
    document.getElementById("unsavedProjectDiscardBtn")?.addEventListener("click", () => {
      closeAppDialog({ ok: true, action: "discard" });
    });
    document.getElementById("unsavedProjectCancelBtn")?.addEventListener("click", () => {
      closeAppDialog({ ok: false, action: "cancel" });
    });
    setTimeout(() => document.getElementById("unsavedProjectSaveBtn")?.focus(), 0);
  });
}

function showUnsavedNewFileDialog() {
  return new Promise((resolve) => {
    activeDialogResolver = resolve;
    if (appDialog) appDialog.dataset.dialogKind = "unsaved-project-open";
    if (appDialogTitle) appDialogTitle.textContent = "UNSAVED CHANGES";
    if (appDialogMessage) {
      appDialogMessage.innerHTML = `
        <span class="unsaved-project-warning">
          <span class="unsaved-project-warning-icon"><i class="fa-solid fa-file-circle-plus"></i></span>
          <span>
            <strong>Save the current project before creating a new file?</strong>
            <small>You can save first, continue without saving, or cancel and return to the editor.</small>
          </span>
        </span>
      `;
    }
    if (appDialogInput) {
      appDialogInput.style.display = "none";
      appDialogInput.value = "";
      appDialogInput.onkeydown = null;
    }
    if (appDialogActions) {
      appDialogActions.innerHTML = `
        <button type="button" id="unsavedFileSaveBtn" class="run-button unsaved-project-save"><i class="fa-solid fa-floppy-disk"></i><strong>SAVE &amp; CREATE</strong></button>
        <button type="button" id="unsavedFileContinueBtn" class="run-button unsaved-project-discard"><i class="fa-solid fa-file-circle-plus"></i><strong>CREATE WITHOUT SAVING</strong></button>
        <button type="button" id="unsavedFileCancelBtn" class="run-button unsaved-project-cancel"><strong>CANCEL</strong></button>
      `;
    }
    if (appDialog) appDialog.style.display = "flex";
    document.getElementById("unsavedFileSaveBtn")?.addEventListener("click", () => {
      closeAppDialog({ ok: true, action: "save" });
    });
    document.getElementById("unsavedFileContinueBtn")?.addEventListener("click", () => {
      closeAppDialog({ ok: true, action: "continue" });
    });
    document.getElementById("unsavedFileCancelBtn")?.addEventListener("click", () => {
      closeAppDialog({ ok: false, action: "cancel" });
    });
    setTimeout(() => document.getElementById("unsavedFileSaveBtn")?.focus(), 0);
  });
}

function showUnsavedNewProjectDialog() {
  return new Promise((resolve) => {
    activeDialogResolver = resolve;
    if (appDialog) appDialog.dataset.dialogKind = "unsaved-project-open";
    if (appDialogTitle) appDialogTitle.textContent = "UNSAVED PROJECT";
    if (appDialogMessage) {
      appDialogMessage.innerHTML = `
        <span class="unsaved-project-warning">
          <span class="unsaved-project-warning-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <span>
            <strong>Save the current project before starting a new one?</strong>
            <small>Starting a new project will replace all current files in the editor.</small>
          </span>
        </span>
      `;
    }
    if (appDialogInput) {
      appDialogInput.style.display = "none";
      appDialogInput.value = "";
      appDialogInput.onkeydown = null;
    }
    if (appDialogActions) {
      appDialogActions.innerHTML = `
        <button type="button" id="unsavedProjectNewSaveBtn" class="run-button unsaved-project-save"><i class="fa-solid fa-floppy-disk"></i><strong>SAVE &amp; START NEW</strong></button>
        <button type="button" id="unsavedProjectNewDiscardBtn" class="run-button unsaved-project-discard"><i class="fa-solid fa-trash-can"></i><strong>DISCARD &amp; START NEW</strong></button>
        <button type="button" id="unsavedProjectNewCancelBtn" class="run-button unsaved-project-cancel"><strong>CANCEL</strong></button>
      `;
    }
    if (appDialog) appDialog.style.display = "flex";
    document.getElementById("unsavedProjectNewSaveBtn")?.addEventListener("click", () => {
      closeAppDialog({ ok: true, action: "save" });
    });
    document.getElementById("unsavedProjectNewDiscardBtn")?.addEventListener("click", () => {
      closeAppDialog({ ok: true, action: "discard" });
    });
    document.getElementById("unsavedProjectNewCancelBtn")?.addEventListener("click", () => {
      closeAppDialog({ ok: false, action: "cancel" });
    });
    setTimeout(() => document.getElementById("unsavedProjectNewSaveBtn")?.focus(), 0);
  });
}

function showPublishActionPrompt() {
  return new Promise((resolve) => {
    activeDialogResolver = resolve;
    if (appDialog) appDialog.dataset.dialogKind = "publish-choice";
    if (appDialogTitle) appDialogTitle.textContent = "PUBLISH PROJECT";
    if (appDialogMessage) {
      appDialogMessage.innerHTML =
        'What do you want to do with your published link?<br><span style="display:block;margin-top:10px;color:var(--text-muted);font-size:12px">Create a new custom link, or update an existing link using its verification key.</span>';
    }
    if (appDialogInput) appDialogInput.style.display = "none";
    if (appDialogActions) {
      appDialogActions.innerHTML = `
        <button type="button" id="publishCreateLinkBtn" class="collab-choice-card publish-choice-card">
          <i class="fa-solid fa-plus"></i>
          <span>Create a link</span>
        </button>
        <button type="button" id="publishUpdateLinkBtn" class="collab-choice-card publish-choice-card">
          <i class="fa-solid fa-pen-to-square"></i>
          <span>Update a link</span>
        </button>
        <button type="button" id="publishCancelBtn" class="run-button publish-choice-cancel" style="background:#6b7280;"><strong>CANCEL</strong></button>
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
  const exampleSlug = "my-custom-link";
  const isUpdate = action === "update";
  const dialog = showAppDialog({
    title: isUpdate ? "UPDATE A LINK" : "CREATE A LINK",
    messageHtml: `${isUpdate ? "Type the custom link you want to update." : "Choose the end of your published link."}<br><span style="display:block;margin-top:10px;font-size:12px;color:var(--text-muted)">Your link</span><code id="publishUrlPreview" style="display:block;margin-top:4px;padding:9px 10px;border-radius:7px;background:var(--bg-primary);color:var(--text-primary);word-break:break-all">${escapeHtml(publishBase + exampleSlug)}</code>`,
    input: true,
    inputValue: "",
    inputPlaceholder: "Type your custom link",
    okText: isUpdate ? "NEXT" : "CREATE LINK",
    cancelText: "CANCEL",
  });
  const updatePreview = () => {
    const preview = document.getElementById("publishUrlPreview");
    if (!preview || !appDialogInput) return;
    const typedSlug = appDialogInput.value.trim();
    preview.textContent = publishBase + encodeURIComponent(typedSlug || exampleSlug);
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

function showHelpChoiceDialog() {
  return new Promise((resolve) => {
    activeDialogResolver = resolve;
    if (appDialog) appDialog.dataset.dialogKind = "help-choice";
    if (appDialogTitle) appDialogTitle.textContent = "HELP & LEARNING";
    if (appDialogMessage) {
      appDialogMessage.innerHTML = `
        <span class="help-choice-heading"><i class="fa-solid fa-compass"></i> How would you like to continue?</span>
        <span class="help-choice-copy">Follow the guided editor tour, or open the complete CodX Editor handbook.</span>
      `;
    }
    if (appDialogInput) {
      appDialogInput.style.display = "none";
      appDialogInput.value = "";
      appDialogInput.onkeydown = null;
    }
    if (appDialogActions) {
      appDialogActions.innerHTML = `
        <button type="button" id="helpTakeTourBtn" class="help-choice-button help-tour-choice">
          <span class="help-choice-icon"><i class="fa-solid fa-route"></i></span>
          <span><strong>TAKE A TOUR</strong><small>See each editor tool with live animations.</small></span>
          <i class="fa-solid fa-arrow-right help-choice-arrow"></i>
        </button>
        <button type="button" id="helpOpenHandbookBtn" class="help-choice-button help-handbook-choice">
          <span class="help-choice-icon"><i class="fa-solid fa-book-open"></i></span>
          <span><strong>OPEN HANDBOOK</strong><small>Read the full guide in help.html.</small></span>
          <i class="fa-solid fa-arrow-up-right-from-square help-choice-arrow"></i>
        </button>
      `;
    }
    if (appDialog) appDialog.style.display = "flex";
    document.getElementById("helpTakeTourBtn")?.addEventListener("click", () => {
      closeAppDialog({ ok: true, action: "tour" });
    });
    document.getElementById("helpOpenHandbookBtn")?.addEventListener("click", () => {
      closeAppDialog({ ok: true, action: "handbook" });
    });
    setTimeout(() => document.getElementById("helpTakeTourBtn")?.focus(), 0);
  });
}

helpPageBtn?.addEventListener("click", async () => {
  const result = await showHelpChoiceDialog();
  if (!result?.ok) return;
  if (result.action === "tour") {
    startTutorial();
    return;
  }
  if (result.action === "handbook") window.location.assign("/help.html");
});

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

function countTextLines(text) {
  const value = String(text || "");
  let lines = 1;
  let cursor = -1;
  while ((cursor = value.indexOf("\n", cursor + 1)) !== -1) lines += 1;
  return lines;
}

function isLargeEditorContent(text, knownLineCount = 0) {
  const value = String(text || "");
  if (value.length >= LARGE_EDITOR_CHARACTER_THRESHOLD) return true;
  const lineCount = knownLineCount || countTextLines(value);
  return lineCount >= LARGE_EDITOR_LINE_THRESHOLD;
}

function getBoundedEditorContextBefore(text, index, limit = LARGE_EDITOR_CONTEXT_WINDOW) {
  const value = String(text || "");
  const safeIndex = Math.max(0, Math.min(Number(index || 0), value.length));
  return value.slice(Math.max(0, safeIndex - limit), safeIndex);
}

function getTextIndexForLineAndColumn(text, line, col) {
  const value = String(text || "");
  const safeLine = Math.max(1, Number(line || 1));
  const safeCol = Math.max(1, Number(col || 1));
  let lineStart = 0;
  let currentLine = 1;
  while (currentLine < safeLine) {
    const nextBreak = value.indexOf("\n", lineStart);
    if (nextBreak === -1) return value.length;
    lineStart = nextBreak + 1;
    currentLine += 1;
  }
  const lineEnd = value.indexOf("\n", lineStart);
  const safeLineEnd = lineEnd === -1 ? value.length : lineEnd;
  return lineStart + Math.min(safeCol - 1, safeLineEnd - lineStart);
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
  const value = String(text || "");
  const safeIndex = Math.max(0, Math.min(Number(index || 0), value.length));
  let lines = 1;
  let cursor = -1;
  while ((cursor = value.indexOf("\n", cursor + 1)) !== -1 && cursor < safeIndex) lines += 1;
  return lines;
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
  const lineStart = safeText.lastIndexOf("\n", Math.max(0, safeIndex - 1)) + 1;
  return {
    line: getLineNumberFromIndex(safeText, safeIndex),
    col: safeIndex - lineStart + 1,
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
  const value = String(text || "");
  const lineStart = getTextIndexForLineAndColumn(value, Math.max(1, line), 1);
  const nextBreak = value.indexOf("\n", lineStart);
  const targetLine = value.slice(lineStart, nextBreak === -1 ? value.length : nextBreak);
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
  let locations = (fileErrorLocations[activeErrorKey] || [])
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
  if (isLargeEditorContent(content)) {
    const firstVisibleLine = Math.max(1, Math.floor(textarea.scrollTop / lineHeight) + 1);
    const lastVisibleLine = firstVisibleLine + Math.ceil(textarea.clientHeight / lineHeight) + 4;
    locations = locations.filter(
      (location) => location.line >= firstVisibleLine - 3 && location.line <= lastVisibleLine,
    );
    if (!locations.length) return;
  }
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
    const tokenLength = Number(location.length) > 0
      ? Number(location.length)
      : getErrorTokenLength(
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
          <h2>Build in the editor</h2>
          <ul>
            <li>Create HTML, CSS, JavaScript, JSON, environment, and Node backend files</li>
            <li>Press <kbd>Ctrl/Cmd</kbd> + <kbd>K</kbd> to search files and commands from the Command Palette</li>
            <li>Use Auto-Run or the Run button to update the preview</li>
            <li>Inspect preview HTML and adjust preview zoom from its header</li>
            <li>The workspace adapts by orientation: landscape tablets use the laptop-style split layout, while portrait tablets use the mobile workspace</li>
            <li>On phones and portrait tablets, use Files, Editor, Preview, and Console tabs; on laptops and landscape tablets, use the full split view and header controls</li>
            <li>The More button uses a roomier 372px two-column menu on mouse or trackpad laptops, while tablets and phones keep the compact 320px version</li>
            <li>Zen Mode stays on laptops and desktops, while Get Icons scales into a full-height two-column catalog on phones</li>
            <li>Zen Mode keeps the cursor and editor scroll position fixed when entering or leaving the focused layout</li>
            <li>Settings uses your browser or device's normal color picker for editor background and theme colors</li>
            <li>Google Font customization keeps the original link, embed snippet, or <code>@import</code> text exactly as you pasted it</li>
            <li>Use syntax colors, suggestions, CSS color pickers, errors, undo, and redo</li>
            <li>Current-file variables, functions, classes, CSS selectors, IDs, and HTML class names appear above generic suggestions as soon as their exact, prefix, or close match is typed</li>
            <li>Partial HTML tag names stay in tag mode, so typing <code>&lt;if</code> immediately suggests <code>&lt;iframe&gt;</code> instead of being mistaken for an attribute</li>
            <li>Syntax-aware diagnostics understand self-closing HTML/SVG, quoted special characters, same-line elements, CSS decimals, and SVG path values, so valid code is not marked red</li>
            <li>Runtime errors include source-aware root-cause explanations, contextual fixes, the original stack trace, and access to the preserved Error object</li>
            <li>Code errors stay in the Console with their file badges and editor highlights instead of creating a separate popup notification</li>
            <li>File-name spaces become dashes; dashes and underscores are allowed</li>
          </ul>
        </article>

        <article class="card">
          <h2>Projects & sharing</h2>
          <ul>
            <li>Open More for New, Save, Saved Projects, Templates, and Publish / Share</li>
            <li>The first Save asks for a project name; later saves update that same browser project immediately without asking again</li>
            <li>Use Device Transfer to send or receive projects and settings; the Send screen shows the countdown first, then the transfer code, QR code, details, and actions</li>
            <li>Visit the homepage FAQ for quick answers about projects, Device Transfer, collaboration, GitHub, publishing, and mobile support</li>
            <li>The expanded homepage gives feature, workflow, comparison, and FAQ sections more room instead of placing everything inside one narrow card</li>
            <li>The homepage editor preview now matches the real CodX Editor workspace on desktop and mobile</li>
            <li>Line numbers stay aligned with their code rows at every supported screen size, including while the editor is scrolling</li>
            <li>Large File Performance Mode keeps huge files responsive with native text rendering, virtualized line numbers, paused Auto-Run and suggestions, and memory-safe undo</li>
            <li>When importing from another device, use the Replace current editor toggle to either open the incoming workspace or keep your current code open while saving the incoming workspace to Saved Projects</li>
            <li>Import or export complete projects as ZIP archives</li>
            <li>Add images, audio, and video with Add Media</li>
            <li>Connect GitHub to browse repositories and create, edit, upload, or commit files</li>
            <li>Start a collaboration session for shared files, chat, cursors, roles, and room controls</li>
            <li>Authorized administrators get a premium Outfit-powered green-and-white control room with eight realtime metrics, complete live-session inspection, published-project search, and protected reopening in CodX Editor</li>
          </ul>
        </article>

        <article class="card">
          <h2>Node.js</h2>
          <ul>
            <li>Open More and choose Enable Node.js</li>
            <li>The normal preview closes and the console becomes a command terminal</li>
            <li>While Node.js is on, the More action turns red, displays an ON badge, and clearly says Disable Node.js</li>
            <li>Install dependencies with <code>npm install package-name</code></li>
            <li>Run the starter server with <code>npm start</code></li>
            <li>Run commands with <strong>RUN</strong> or <kbd>Enter</kbd></li>
            <li>Use Stop before starting another command or disabling Node.js</li>
            <li>Open the clickable <code>http://localhost:8000</code> link in a new preview tab</li>
            <li>If startup fails, CodX Editor restores the normal preview so you can hard-refresh and retry</li>
            <li>Interface messages and learning content use the complete CodX Editor name consistently</li>
          </ul>
        </article>

        <article class="card">
          <h2>Keyboard controls</h2>
          <ul>
            <li><kbd>Ctrl/Cmd</kbd> + <kbd>K</kbd> Open the Command Palette</li>
            <li><kbd>Ctrl/Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> Open the Command Palette</li>
            <li><kbd>Ctrl/Cmd</kbd> + <kbd>S</kbd> Export your project as a ZIP</li>
            <li><kbd>Ctrl/Cmd</kbd> + <kbd>Enter</kbd> Run preview manually</li>
            <li><kbd>Ctrl/Cmd</kbd> + <kbd>Q</kbd> Create a new file</li>
            <li><kbd>Ctrl/Cmd</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> Open or close Console</li>
            <li><kbd>Esc</kbd> Close supported dialogs or exit Zen Mode</li>
            <li>Type <strong>cxstart</strong> in an empty HTML file and press <kbd>Enter</kbd></li>
            <li>Type an Emmet abbreviation and press <kbd>Tab</kbd> to expand it</li>
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

kbd,
code {
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 2px 6px;
  color: var(--text);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.82rem;
}

kbd {
  border-bottom-width: 2px;
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
const PREVIEW_DEVICE_PRESETS = Object.freeze({
  phone: { label: "Phone", width: 390, height: 844 },
  tablet: { label: "Tablet", width: 768, height: 1024 },
  laptop: { label: "Laptop", width: 1440, height: 900 },
  desktop: { label: "Desktop", width: 1920, height: 1080 },
});
let previewDeviceState = {
  key: "responsive",
  label: "Responsive",
  width: null,
  height: null,
};
let previewGridEnabled = false;
let previewBreakpointIndicatorEnabled = false;
let previewColorSchemeMode = "system";
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

function getPreviewDeviceSummary() {
  return {
    mode: previewDeviceState.key,
    label: previewDeviceState.label,
    width: previewDeviceState.width,
    height: previewDeviceState.height,
    orientation:
      previewDeviceState.width && previewDeviceState.height
        ? previewDeviceState.width >= previewDeviceState.height
          ? "landscape"
          : "portrait"
        : "fluid",
  };
}

function getWorkspaceSettingsSnapshot() {
  return {
    autoRun: Boolean(autoRunCheckbox?.checked),
    consoleVisible: Boolean(showConsoleCheckbox?.checked),
    previewZoom: previewZoomPercent,
    previewDevice: {
      mode: previewDeviceState.key,
      width: previewDeviceState.width,
      height: previewDeviceState.height,
    },
    previewGrid: previewGridEnabled,
    previewBreakpoints: previewBreakpointIndicatorEnabled,
    previewColorScheme: previewColorSchemeMode,
  };
}

function persistWorkspaceSettings() {
  safeLocalStorage("set", WORKSPACE_SETTINGS_KEY, JSON.stringify(getWorkspaceSettingsSnapshot()));
}

function applyWorkspaceSettings(settings, { persist = true } = {}) {
  if (!settings || typeof settings !== "object") return false;
  if (typeof settings.autoRun === "boolean" && autoRunCheckbox) {
    autoRunCheckbox.checked = settings.autoRun;
  }
  if (typeof settings.consoleVisible === "boolean" && showConsoleCheckbox) {
    showConsoleCheckbox.checked = settings.consoleVisible;
    showConsoleCheckbox.dispatchEvent(new Event("change"));
    if (isCompactWorkspaceLayout() && settings.consoleVisible) {
      setMobileWorkspacePane("console");
    }
  }

  const device = settings.previewDevice;
  const mode = String(device?.mode || "responsive").toLowerCase();
  const safeWidth = Math.round(Number(device?.width || 0));
  const safeHeight = Math.round(Number(device?.height || 0));
  if (
    mode !== "responsive" &&
    Number.isFinite(safeWidth) &&
    Number.isFinite(safeHeight) &&
    safeWidth >= 240 && safeWidth <= 3840 &&
    safeHeight >= 240 && safeHeight <= 2160
  ) {
    previewDeviceState = {
      key: ["phone", "tablet", "laptop", "desktop", "custom"].includes(mode) ? mode : "custom",
      label: PREVIEW_DEVICE_PRESETS[mode]?.label || "Custom",
      width: safeWidth,
      height: safeHeight,
    };
    applyPreviewDeviceState();
  } else {
    setPreviewDevicePreset("responsive");
  }

  setPreviewZoom(settings.previewZoom ?? 100);
  setPreviewGridEnabled(Boolean(settings.previewGrid));
  setPreviewBreakpointIndicatorEnabled(Boolean(settings.previewBreakpoints));
  setPreviewColorScheme(settings.previewColorScheme || "system");
  if (persist) persistWorkspaceSettings();
  return true;
}

function loadWorkspaceSettings() {
  try {
    const settings = JSON.parse(safeLocalStorage("get", WORKSPACE_SETTINGS_KEY) || "null");
    if (settings) applyWorkspaceSettings(settings, { persist: false });
  } catch (error) {
    console.warn("Unable to load workspace settings.", error);
  }
}

function updatePreviewDeviceScale() {
  if (!previewViewportStage || !previewDeviceShell || !previewDeviceFrame) return;
  const { width, height } = previewDeviceState;
  if (!width || !height) {
    previewViewportStage.classList.add("is-responsive");
    previewDeviceShell.style.removeProperty("width");
    previewDeviceShell.style.removeProperty("height");
    previewDeviceFrame.style.removeProperty("width");
    previewDeviceFrame.style.removeProperty("height");
    previewDeviceFrame.style.removeProperty("transform");
    updatePreviewBreakpointIndicator();
    return;
  }

  previewViewportStage.classList.remove("is-responsive");
  const availableWidth = Math.max(1, previewViewportStage.clientWidth - 36);
  const availableHeight = Math.max(1, previewViewportStage.clientHeight - 36);
  const scale = Math.max(0.08, Math.min(1, availableWidth / width, availableHeight / height));
  previewDeviceShell.style.width = `${Math.round(width * scale)}px`;
  previewDeviceShell.style.height = `${Math.round(height * scale)}px`;
  previewDeviceFrame.style.width = `${width}px`;
  previewDeviceFrame.style.height = `${height}px`;
  previewDeviceFrame.style.transform = `scale(${scale})`;
  updatePreviewBreakpointIndicator();
}

function applyPreviewDeviceState() {
  updatePreviewDeviceScale();
  const { label, width, height } = previewDeviceState;
  const detail = width && height ? `${label} · ${width}×${height}` : label;
  if (previewDeviceBadge) {
    previewDeviceBadge.textContent = detail;
    previewDeviceBadge.title = `Preview viewport: ${detail}`;
  }
  try {
    iframe.contentWindow?.dispatchEvent(new Event("resize"));
  } catch (_err) {
    // The browser will still resize the iframe viewport.
  }
}

function setPreviewDevicePreset(name) {
  const key = String(name || "").toLowerCase();
  if (key === "responsive") {
    previewDeviceState = { key, label: "Responsive", width: null, height: null };
    applyPreviewDeviceState();
    persistWorkspaceSettings();
    return true;
  }
  const preset = PREVIEW_DEVICE_PRESETS[key];
  if (!preset) return false;
  previewDeviceState = { key, ...preset };
  applyPreviewDeviceState();
  persistWorkspaceSettings();
  return true;
}

function setCustomPreviewViewport(width, height) {
  const safeWidth = Math.round(Number(width));
  const safeHeight = Math.round(Number(height));
  if (
    !Number.isFinite(safeWidth) ||
    !Number.isFinite(safeHeight) ||
    safeWidth < 240 ||
    safeWidth > 3840 ||
    safeHeight < 240 ||
    safeHeight > 2160
  ) {
    return false;
  }
  previewDeviceState = {
    key: "custom",
    label: "Custom",
    width: safeWidth,
    height: safeHeight,
  };
  applyPreviewDeviceState();
  persistWorkspaceSettings();
  return true;
}

function rotatePreviewDevice() {
  if (!previewDeviceState.width || !previewDeviceState.height) return false;
  previewDeviceState = {
    ...previewDeviceState,
    width: previewDeviceState.height,
    height: previewDeviceState.width,
  };
  applyPreviewDeviceState();
  persistWorkspaceSettings();
  return true;
}

function setDeveloperShortcutPressed(command, pressed) {
  const button = Array.from(developerConsoleShortcutButtons).find(
    (item) => item.dataset.developerCommand === command,
  );
  button?.setAttribute("aria-pressed", pressed ? "true" : "false");
}

function setDeveloperMediaSourceVisible(enabled) {
  developerMediaSourceVisible = Boolean(enabled);
  setDeveloperShortcutPressed("media source toggle", developerMediaSourceVisible);
  displayActiveFileInEditor({ preserveCaret: true });
  enforceCollabPermissionsUI();
}

function setPreviewGridEnabled(enabled) {
  previewGridEnabled = Boolean(enabled);
  previewDeviceFrame?.classList.toggle("show-layout-grid", previewGridEnabled);
  setDeveloperShortcutPressed("grid toggle", previewGridEnabled);
  persistWorkspaceSettings();
}

function getPreviewBreakpoint(width) {
  if (width < 480) return "Phone";
  if (width < 768) return "Small tablet";
  if (width < 1024) return "Tablet";
  if (width < 1440) return "Laptop";
  return "Wide desktop";
}

function updatePreviewBreakpointIndicator() {
  if (!previewBreakpointIndicator) return;
  const width = Math.round(previewDeviceState.width || iframe.clientWidth || 0);
  previewBreakpointIndicator.hidden = !previewBreakpointIndicatorEnabled;
  if (previewBreakpointIndicatorEnabled) {
    previewBreakpointIndicator.textContent = `${getPreviewBreakpoint(width)} breakpoint · ${width}px`;
  }
}

function setPreviewBreakpointIndicatorEnabled(enabled) {
  previewBreakpointIndicatorEnabled = Boolean(enabled);
  setDeveloperShortcutPressed("breakpoints toggle", previewBreakpointIndicatorEnabled);
  updatePreviewBreakpointIndicator();
  persistWorkspaceSettings();
}

function collectPreferredColorSchemeRules(ruleList, mode, output) {
  Array.from(ruleList || []).forEach((rule) => {
    const condition = String(rule.conditionText || "").toLowerCase();
    if (condition.includes("prefers-color-scheme")) {
      if (condition.includes(`prefers-color-scheme: ${mode}`) || condition.includes(`prefers-color-scheme:${mode}`)) {
        Array.from(rule.cssRules || []).forEach((nestedRule) => output.push(nestedRule.cssText));
      }
      return;
    }
    if (rule.cssRules) collectPreferredColorSchemeRules(rule.cssRules, mode, output);
  });
}

function applyPreviewColorSchemeSimulation() {
  let previewDoc;
  try {
    previewDoc = iframe.contentDocument || iframe.contentWindow?.document;
  } catch (_err) {
    return;
  }
  if (!previewDoc?.documentElement) return;
  previewDoc.getElementById("__codx-color-scheme-simulation")?.remove();
  if (previewColorSchemeMode === "system") return;

  const overrideRules = [];
  Array.from(previewDoc.styleSheets || []).forEach((sheet) => {
    if (sheet.ownerNode?.id === "__codx-color-scheme-simulation") return;
    try {
      collectPreferredColorSchemeRules(sheet.cssRules, previewColorSchemeMode, overrideRules);
    } catch (_err) {
      // Cross-origin stylesheets cannot be inspected, but color-scheme still applies.
    }
  });
  const style = previewDoc.createElement("style");
  style.id = "__codx-color-scheme-simulation";
  style.textContent = `:root { color-scheme: ${previewColorSchemeMode} !important; }\n${overrideRules.join("\n")}`;
  (previewDoc.head || previewDoc.documentElement).appendChild(style);
}

function setPreviewColorScheme(mode) {
  const normalized = String(mode || "").toLowerCase();
  if (!["system", "light", "dark"].includes(normalized)) return false;
  previewColorSchemeMode = normalized;
  applyPreviewColorSchemeSimulation();
  const button = Array.from(developerConsoleShortcutButtons).find(
    (item) => item.dataset.developerCommand === "scheme toggle",
  );
  if (button) {
    button.setAttribute("aria-pressed", normalized === "system" ? "false" : "true");
    button.title = `Preview color scheme: ${normalized}`;
  }
  persistWorkspaceSettings();
  return true;
}

function cyclePreviewColorScheme() {
  const next = previewColorSchemeMode === "system"
    ? "light"
    : previewColorSchemeMode === "light"
      ? "dark"
      : "system";
  setPreviewColorScheme(next);
  return next;
}

async function promptForCustomPreviewViewport() {
  const previousZIndex = appDialog?.style.zIndex || "";
  if (appDialog) appDialog.style.zIndex = "1300";
  try {
    const currentSize = previewDeviceState.width && previewDeviceState.height
      ? `${previewDeviceState.width} x ${previewDeviceState.height}`
      : "390 x 844";
    const result = await showAppPrompt(
      "CUSTOM PREVIEW SIZE",
      "Enter width and height in pixels, for example 390 x 844.",
      currentSize,
      "390 x 844",
    );
    if (!result?.ok) {
      appendDeveloperConsoleLine("Custom viewport cancelled.\n");
      return;
    }
    const match = String(result.value || "").match(/^(\d+)\s*(?:x|×|\s)\s*(\d+)$/i);
    if (!match || !setCustomPreviewViewport(match[1], match[2])) {
      appendDeveloperConsoleLine("Invalid size. Use 240-3840 x 240-2160 pixels.\n");
      showNotification("Enter a valid preview width and height.", "error");
      return;
    }
    appendDeveloperConsoleLine(`Custom viewport set to ${match[1]} x ${match[2]}.\n`);
  } finally {
    if (appDialog) appDialog.style.zIndex = previousZIndex;
    developerConsoleInput?.focus();
  }
}

function downloadDeveloperToolBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

async function capturePreviewScreenshot() {
  let previewDoc;
  try {
    previewDoc = iframe.contentDocument || iframe.contentWindow?.document;
  } catch (_err) {
    throw new Error("The preview cannot be captured because it is cross-origin.");
  }
  if (!previewDoc?.documentElement) throw new Error("The preview is not ready yet.");

  const width = Math.max(1, Math.round(previewDeviceState.width || iframe.clientWidth));
  const height = Math.max(1, Math.round(previewDeviceState.height || iframe.clientHeight));
  const clone = previewDoc.documentElement.cloneNode(true);
  clone.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
  const base = previewDoc.createElement("base");
  base.href = previewDoc.baseURI;
  clone.querySelector("head")?.prepend(base);
  const serialized = new XMLSerializer().serializeToString(clone);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><foreignObject width="100%" height="100%">${serialized}</foreignObject></svg>`;
  const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const svgUrl = URL.createObjectURL(svgBlob);
  const image = new Image();

  try {
    await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = () => reject(new Error("The browser could not render the preview capture."));
      image.src = svgUrl;
    });
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    context.fillStyle = getComputedStyle(iframe).backgroundColor || "#ffffff";
    context.fillRect(0, 0, width, height);
    context.drawImage(image, 0, 0, width, height);
    const pngBlob = await new Promise((resolve, reject) => {
      try {
        canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("PNG creation failed.")), "image/png");
      } catch (error) {
        reject(error);
      }
    });
    downloadDeveloperToolBlob(pngBlob, `codx-preview-${width}x${height}.png`);
    return `Screenshot saved at ${width} x ${height}.`;
  } catch (_error) {
    downloadDeveloperToolBlob(svgBlob, `codx-preview-${width}x${height}.svg`);
    return `SVG screenshot saved at ${width} x ${height}; PNG export was blocked by a preview resource.`;
  } finally {
    URL.revokeObjectURL(svgUrl);
  }
}

function countStructuralBraces(line, state) {
  let delta = 0;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];
    if (state.mode === "block-comment") {
      if (char === "*" && next === "/") {
        state.mode = "normal";
        index += 1;
      }
      continue;
    }
    if (state.mode !== "normal") {
      if (char === "\\") index += 1;
      else if (char === state.mode) state.mode = "normal";
      continue;
    }
    if (char === "/" && next === "*") {
      state.mode = "block-comment";
      index += 1;
    } else if (char === "/" && next === "/") {
      break;
    } else if (char === "'" || char === '"' || char === "`") {
      state.mode = char;
    } else if (char === "{") delta += 1;
    else if (char === "}") delta -= 1;
  }
  return delta;
}

function formatBraceCode(content) {
  const state = { mode: "normal" };
  let depth = 0;
  return content.split("\n").map((line) => {
    const startsInsideString = state.mode !== "normal" && state.mode !== "block-comment";
    if (startsInsideString) {
      depth = Math.max(0, depth + countStructuralBraces(line, state));
      return line;
    }
    const trimmed = line.trim();
    if (!trimmed) return "";
    const leadingClose = trimmed.startsWith("}") ? 1 : 0;
    const formatted = `${INDENT_UNIT.repeat(Math.max(0, depth - leadingClose))}${trimmed}`;
    depth = Math.max(0, depth + countStructuralBraces(trimmed, state));
    return formatted;
  }).join("\n");
}

function formatHtmlCode(content) {
  if (/<(pre|textarea|script|style)\b[^>]*>[\s\S]*\n[\s\S]*<\/\1>/i.test(content)) return null;
  const voidTags = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
  let depth = 0;
  return content.split("\n").map((line) => {
    const trimmed = line.trim();
    if (!trimmed) return "";
    const leadingClose = /^<\//.test(trimmed) ? 1 : 0;
    const formatted = `${INDENT_UNIT.repeat(Math.max(0, depth - leadingClose))}${trimmed}`;
    let delta = 0;
    for (const match of trimmed.matchAll(/<\/?([a-z][\w:-]*)\b[^>]*>/gi)) {
      const tag = match[1].toLowerCase();
      const token = match[0];
      if (token.startsWith("</")) delta -= 1;
      else if (!token.endsWith("/>") && !voidTags.has(tag)) delta += 1;
    }
    depth = Math.max(0, depth + delta);
    return formatted;
  }).join("\n");
}

function formatActiveEditorCode() {
  if (!activeFile || !editorTextarea) return { ok: false, message: "There is no active file to format." };
  if (editorTextarea.readOnly || !canCurrentUserEditFile(activeFile.name)) {
    return { ok: false, message: "You do not currently have permission to edit this file." };
  }
  const original = editorTextarea.value;
  const type = String(activeFile.type || getFileType(activeFile.name) || "").toLowerCase();
  let formatted;
  try {
    if (type === "json") formatted = JSON.stringify(JSON.parse(original), null, 4);
    else if (["jsonc", "js", "mjs", "cjs", "jsx", "ts", "tsx", "css", "scss", "less"].includes(type)) {
      formatted = formatBraceCode(original);
    } else if (["html", "htm", "xml", "svg"].includes(type)) {
      formatted = formatHtmlCode(original);
      if (formatted === null) {
        return { ok: false, message: "Formatting was skipped to protect whitespace inside a multiline script, style, or preformatted block." };
      }
    } else return { ok: false, message: `Formatting is not available for .${type || "text"} files.` };
  } catch (error) {
    return { ok: false, message: `Formatting failed: ${error.message}` };
  }
  if (formatted === original) return { ok: true, message: `${activeFile.name} is already formatted.` };
  const selectionStart = editorTextarea.selectionStart;
  const selectionEnd = editorTextarea.selectionEnd;
  beginEditorHistoryCapture(editorTextarea);
  editorTextarea.value = formatted;
  editorTextarea.dispatchEvent(new InputEvent("input", {
    bubbles: true,
    inputType: "insertReplacementText",
    data: null,
  }));
  editorTextarea.setSelectionRange(
    Math.min(selectionStart, formatted.length),
    Math.min(selectionEnd, formatted.length),
  );
  return { ok: true, message: `${activeFile.name} formatted. Use Undo to restore the previous version.` };
}

function resetDeveloperToolControls() {
  setDeveloperMediaSourceVisible(false);
  setPreviewDevicePreset("responsive");
  setPreviewZoom(100);
  setPreviewInspecting(false);
  setPreviewGridEnabled(false);
  setPreviewBreakpointIndicatorEnabled(false);
  setPreviewColorScheme("system");
  editorTextarea.wrap = "off";
  editorTextarea.style.whiteSpace = "pre";
  editorTextarea.style.removeProperty("tab-size");
  loadSettings();
  syncSyntaxLayerStyle(editorTextarea);
  if (getProjectMediaKind(activeFile)) {
    if (highlightLayer) highlightLayer.innerHTML = "";
  } else {
    renderSyntaxHighlight(editorTextarea);
  }
}

if (previewViewportStage && typeof ResizeObserver !== "undefined") {
  new ResizeObserver(() => updatePreviewDeviceScale()).observe(previewViewportStage);
} else {
  window.addEventListener("resize", updatePreviewDeviceScale);
}
requestAnimationFrame(applyPreviewDeviceState);

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
    .querySelectorAll("#__codx-inspector-root, #__codx-inspector-overlay, #__codx-inspector-outline, #__codx-inspector-styles, #__codx-inspector-cursor-styles, #__codx-preview-zoom-styles")
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
  previewDoc.getElementById("__codx-inspector-root")?.remove();
  previewDoc.getElementById("__codx-inspector-overlay")?.remove();
  previewDoc.getElementById("__codx-inspector-outline")?.remove();
  previewDoc.getElementById("__codx-inspector-styles")?.remove();
  previewDoc.getElementById("__codx-inspector-cursor-styles")?.remove();
  previewDoc.documentElement?.classList.remove("__codx-inspecting");
  previewDoc.__codxInspectedElement = null;
}

function ensurePreviewInspector(previewDoc) {
  let root = previewDoc.getElementById("__codx-inspector-root");
  if (!root) {
    root = previewDoc.createElement("div");
    root.id = "__codx-inspector-root";
    [
      ["all", "initial"],
      ["display", "block"],
      ["position", "fixed"],
      ["inset", "0"],
      ["width", "100vw"],
      ["height", "100vh"],
      ["overflow", "visible"],
      ["pointer-events", "none"],
      ["z-index", "2147483647"],
    ].forEach(([property, value]) => root.style.setProperty(property, value, "important"));

    const shadow = root.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        :host { all: initial; pointer-events: none; }
        *, *::before, *::after { box-sizing: border-box; text-shadow: none; }
        #outline { display: block; position: fixed; z-index: 1; pointer-events: none; border: 2px solid #58a6ff; background: rgba(88,166,255,.12); }
        #overlay { display: block; position: fixed; z-index: 2; pointer-events: none; max-height: 220px; overflow: hidden; border: 1px solid #30363d; border-radius: 8px; background: #0d1117; color: #c9d1d9; box-shadow: 0 12px 32px rgba(0,0,0,.38); font: 12px/1.5 Consolas, Monaco, monospace; text-align: left; }
        .label { display: block; margin: 0; padding: 5px 9px; background: #161b22; color: #8b949e; border-bottom: 1px solid #30363d; font: 700 10px/1.3 system-ui, sans-serif; letter-spacing: .08em; text-transform: uppercase; }
        pre { display: block; margin: 0; padding: 9px 11px; max-height: 184px; overflow: hidden; border: 0; background: #0d1117; white-space: pre-wrap; overflow-wrap: anywhere; font: inherit; }
        code { display: block; margin: 0; padding: 0; border: 0; background: transparent; color: #c9d1d9; font: inherit; white-space: inherit; }
        .token { display: inline; margin: 0; padding: 0; border: 0; background: transparent; font: inherit; }
        .token.comment { color: #8b949e; font-style: italic; }
        .token.keyword { color: #ff7b72; }
        .token.string { color: #a5d6ff; }
        .token.tag, .token.tag-punctuation { color: #7ee787; }
        .token.attr { color: #d2a8ff; }
        .token.number, .token.builtin, .token.constant { color: #79c0ff; }
        .token.property { color: #ffa657; }
        .token.selector { color: #f2cc60; }
        .token.operator, .token.punctuation { color: #c9d1d9; }
        .token.identifier, .token.variable, .token.declaration { color: #c4a7e7; }
        .token.function, .token.method, .token.property-access { color: #ff9bce; }
        .token.json-key, .token.env-key { color: #7ee787; }
        .token.html-text { color: #f0f6fc; }
      </style>
      <div id="outline"></div>
      <div id="overlay"><div class="label">HTML</div><pre><code></code></pre></div>
    `;
    previewDoc.documentElement.appendChild(root);
  }
  return {
    root,
    outline: root.shadowRoot?.getElementById("outline"),
    overlay: root.shadowRoot?.getElementById("overlay"),
  };
}

function positionPreviewInspector(previewDoc, element) {
  const root = previewDoc?.getElementById("__codx-inspector-root");
  const overlay = root?.shadowRoot?.getElementById("overlay");
  const outline = root?.shadowRoot?.getElementById("outline");
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
  if (!element || element.nodeType !== 1 || element.id?.startsWith("__codx-inspector")) return;
  const { overlay, outline } = ensurePreviewInspector(previewDoc);
  if (!overlay || !outline) return;
  previewDoc.__codxInspectedElement = element;
  const markup = getInspectorMarkup(element);
  const codeElement = overlay.querySelector("code");
  codeElement.innerHTML = markup ? highlightHtml(markup) : '<span class="token comment">No HTML available</span>';
  overlay.style.display = "block";
  outline.style.display = "block";
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
  if (!previewDoc.getElementById("__codx-inspector-cursor-styles")) {
    const styles = previewDoc.createElement("style");
    styles.id = "__codx-inspector-cursor-styles";
    styles.textContent = "html.__codx-inspecting, html.__codx-inspecting * { cursor: crosshair !important; }";
    (previewDoc.head || previewDoc.documentElement).appendChild(styles);
  }

  if (!previewDoc.__codxInspectorBound) {
    previewDoc.__codxInspectorBound = true;
    previewDoc.addEventListener("pointerover", (event) => {
      if (isPreviewInspecting) showPreviewInspector(previewDoc, event.target);
    }, true);
    previewDoc.addEventListener("pointermove", (event) => {
      if (isPreviewInspecting && previewDoc.__codxInspectedElement !== event.target) {
        showPreviewInspector(previewDoc, event.target);
      }
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

  const initialElement = previewDoc.body?.firstElementChild || previewDoc.body;
  if (initialElement) showPreviewInspector(previewDoc, initialElement);
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

function refreshPreviewPane() {
  if (!previewRefreshBtn || previewRefreshBtn.disabled) return;
  const originalTitle = "Refresh preview";
  let completed = false;
  const finishRefresh = () => {
    iframe.removeEventListener("load", finishRefresh);
    if (completed) return;
    completed = true;
    previewRefreshBtn.disabled = false;
    previewRefreshBtn.classList.remove("is-refreshing");
    previewRefreshBtn.title = originalTitle;
    previewRefreshBtn.setAttribute("aria-label", originalTitle);
  };

  previewRefreshBtn.disabled = true;
  previewRefreshBtn.classList.add("is-refreshing");
  previewRefreshBtn.title = "Refreshing preview";
  previewRefreshBtn.setAttribute("aria-label", "Refreshing preview");
  iframe.addEventListener("load", finishRefresh, { once: true });

  updatePreview();
  setTimeout(finishRefresh, 1400);
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
  persistWorkspaceSettings();
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

previewRefreshBtn?.addEventListener("click", refreshPreviewPane);
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
  applyPreviewColorSchemeSimulation();
  updatePreviewBreakpointIndicator();
});
let activeFile = projectFiles[0];

function getProjectMediaKind(file) {
  if (!file) return "";
  const declaredType = String(file.mediaType || file.type || "").trim().toLowerCase();
  if (["image", "img"].includes(declaredType)) return "image";
  if (declaredType === "video") return "video";
  if (declaredType === "audio") return "audio";

  const ext = getFileType(String(file.name || ""));
  if (["png", "jpg", "jpeg", "gif", "webp", "svg", "avif", "bmp", "ico"].includes(ext)) {
    return "image";
  }
  if (["mp4", "webm", "ogv", "mov", "m4v"].includes(ext)) return "video";
  if (["mp3", "wav", "ogg", "m4a", "aac", "flac"].includes(ext)) return "audio";
  return "";
}

function normalizeProjectMediaMetadata(files) {
  if (!Array.isArray(files)) return [];
  files.forEach((file) => {
    const mediaKind = getProjectMediaKind(file);
    if (!mediaKind) return;
    file.type = "media";
    file.mediaType = mediaKind;
  });
  return files;
}

function openMediaDatabase() {
  if (mediaDatabasePromise) return mediaDatabasePromise;
  mediaDatabasePromise = new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("IndexedDB is unavailable."));
      return;
    }
    const request = indexedDB.open(MEDIA_DATABASE_NAME, MEDIA_DATABASE_VERSION);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(MEDIA_DATABASE_STORE)) {
        database.createObjectStore(MEDIA_DATABASE_STORE, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Unable to open media storage."));
  });
  return mediaDatabasePromise;
}

function createMediaStorageId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return `media-${crypto.randomUUID()}`;
  }
  return `media-${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
}

function setRuntimeMediaProperty(file, property, value) {
  if (!file) return;
  Object.defineProperty(file, property, {
    value,
    writable: true,
    configurable: true,
    enumerable: false,
  });
}

function attachRuntimeMediaBlob(file, blob) {
  if (!file || !(blob instanceof Blob)) return "";
  if (file.mediaObjectUrl) URL.revokeObjectURL(file.mediaObjectUrl);
  const objectUrl = URL.createObjectURL(blob);
  setRuntimeMediaProperty(file, "mediaBlob", blob);
  setRuntimeMediaProperty(file, "mediaObjectUrl", objectUrl);
  setRuntimeMediaProperty(file, "mediaRestoreFailed", false);
  file.mediaSize = Number(blob.size || 0);
  file.mediaMimeType = String(blob.type || file.mediaMimeType || "application/octet-stream");
  file.content = "";
  return objectUrl;
}

function getProjectMediaSource(file) {
  if (!file) return "";
  if (file.mediaObjectUrl) return String(file.mediaObjectUrl);
  if (file.mediaBlob instanceof Blob) return attachRuntimeMediaBlob(file, file.mediaBlob);
  const source = String(file.content || "");
  if (source.startsWith("data:") && source.length > MAX_INLINE_MEDIA_SOURCE_CHARS) return "";
  return source;
}

function releaseProjectMediaObjectUrls(files = projectFiles) {
  (Array.isArray(files) ? files : []).forEach((file) => {
    if (!file?.mediaObjectUrl) return;
    URL.revokeObjectURL(file.mediaObjectUrl);
    setRuntimeMediaProperty(file, "mediaObjectUrl", "");
  });
}

function persistMediaBlob(file, blob) {
  if (!file || !(blob instanceof Blob)) return Promise.reject(new Error("No media data was provided."));
  file.mediaStorageId = String(file.mediaStorageId || createMediaStorageId());
  return openMediaDatabase().then((database) => new Promise((resolve, reject) => {
    const transaction = database.transaction(MEDIA_DATABASE_STORE, "readwrite");
    transaction.objectStore(MEDIA_DATABASE_STORE).put({
      id: file.mediaStorageId,
      name: String(file.name || "media"),
      mimeType: String(blob.type || file.mediaMimeType || "application/octet-stream"),
      size: Number(blob.size || 0),
      blob,
      savedAt: Date.now(),
    });
    transaction.oncomplete = () => resolve(file.mediaStorageId);
    transaction.onerror = () => reject(transaction.error || new Error("Unable to store media."));
    transaction.onabort = () => reject(transaction.error || new Error("Media storage was cancelled."));
  }));
}

function readMediaBlobAsDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("Unable to encode media."));
    reader.readAsDataURL(blob);
  });
}

async function buildPublishableProjectFiles() {
  const mediaNeedingEncoding = projectFiles.filter(
    (file) => file.mediaBlob instanceof Blob && !String(file.content || ""),
  );
  const totalBytes = mediaNeedingEncoding.reduce(
    (total, file) => total + Number(file.mediaBlob?.size || file.mediaSize || 0),
    0,
  );
  if (totalBytes > MAX_PUBLISH_MEDIA_BYTES) {
    throw new Error(
      `Local media is ${formatMediaByteSize(totalBytes)}. Direct publishing supports up to ${formatMediaByteSize(MAX_PUBLISH_MEDIA_BYTES)} of local media; export the project as ZIP for larger videos.`,
    );
  }

  const encodedContent = new Map();
  for (const file of mediaNeedingEncoding) {
    encodedContent.set(file, await readMediaBlobAsDataUrl(file.mediaBlob));
  }
  return projectFiles.map((file) => ({
    name: file.name,
    type: file.type,
    mediaType: file.mediaType || getProjectMediaKind(file) || undefined,
    content: encodedContent.get(file) || file.content || "",
    active: Boolean(file.active),
  }));
}

function readPersistedMediaBlob(storageId) {
  const id = String(storageId || "").trim();
  if (!id) return Promise.resolve(null);
  return openMediaDatabase().then((database) => new Promise((resolve, reject) => {
    const transaction = database.transaction(MEDIA_DATABASE_STORE, "readonly");
    const request = transaction.objectStore(MEDIA_DATABASE_STORE).get(id);
    request.onsuccess = () => resolve(request.result?.blob instanceof Blob ? request.result.blob : null);
    request.onerror = () => reject(request.error || new Error("Unable to restore media."));
  }));
}

async function hydrateStoredProjectMedia(files) {
  const candidates = (Array.isArray(files) ? files : []).filter(
    (file) => getProjectMediaKind(file) && file.mediaStorageId && !file.mediaBlob && !file.content,
  );
  if (!candidates.length) return;
  const hydratedFiles = (await Promise.all(candidates.map(async (file) => {
    try {
      const blob = await readPersistedMediaBlob(file.mediaStorageId);
      if (!blob || !projectFiles.includes(file)) {
        if (projectFiles.includes(file)) setRuntimeMediaProperty(file, "mediaRestoreFailed", true);
        return null;
      }
      attachRuntimeMediaBlob(file, blob);
      return file;
    } catch (_error) {
      if (projectFiles.includes(file)) setRuntimeMediaProperty(file, "mediaRestoreFailed", true);
      return null;
    }
  }))).filter(Boolean);
  if (activeFile && (hydratedFiles.includes(activeFile) || activeFile.mediaRestoreFailed)) {
    displayActiveFileInEditor({ preserveCaret: true });
    enforceCollabPermissionsUI();
  }
  if (!hydratedFiles.length) return;
  if (autoRunCheckbox?.checked) updatePreview();
}

function formatMediaByteSize(value) {
  const bytes = Math.max(0, Number(value || 0));
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB", "TB"];
  let size = bytes / 1024;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }
  return `${size >= 10 ? size.toFixed(1) : size.toFixed(2)} ${units[unitIndex]}`;
}

function getDeveloperMediaSourceText(file) {
  const source = String(file?.content || "");
  if (!file) return "";
  if (file.mediaBlob instanceof Blob || file.mediaStorageId) {
    return [
      "Binary media source (read-only)",
      `Name: ${file.name || "media"}`,
      `Type: ${file.mediaMimeType || file.mediaBlob?.type || getProjectMediaKind(file) || "unknown"}`,
      `Size: ${formatMediaByteSize(file.mediaSize || file.mediaBlob?.size || 0)}`,
      "The binary bytes are kept out of the code editor to prevent excessive memory use.",
    ].join("\n");
  }
  if (source.length > MAX_DEVELOPER_MEDIA_SOURCE_CHARS) {
    return [
      "Large media source (read-only)",
      `Name: ${file.name || "media"}`,
      `Stored characters: ${source.length.toLocaleString()}`,
      "The encoded payload is hidden to prevent this tab from running out of memory.",
    ].join("\n");
  }
  return source;
}

function getMediaViewerIconClass(kind) {
  if (kind === "image") return "fa-solid fa-image";
  if (kind === "video") return "fa-solid fa-video";
  if (kind === "audio") return "fa-solid fa-volume-high";
  return "fa-solid fa-photo-film";
}

function showMediaViewerFallback(message) {
  if (!editorMediaViewerContent) return;
  const fallback = document.createElement("div");
  fallback.className = "editor-media-empty-state";
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-triangle-exclamation";
  icon.setAttribute("aria-hidden", "true");
  const text = document.createElement("p");
  text.textContent = message;
  fallback.append(icon, text);
  editorMediaViewerContent.replaceChildren(fallback);
}

function renderActiveMediaFile(file, kind) {
  if (!editorMediaViewer || !editorMediaViewerContent) return;
  editorMediaViewer.hidden = false;
  if (editorMediaViewerName) editorMediaViewerName.textContent = file.name || "Media file";
  if (editorMediaViewerKind) editorMediaViewerKind.textContent = kind.toUpperCase();
  if (editorMediaViewerIcon) {
    editorMediaViewerIcon.innerHTML = `<i class="${getMediaViewerIconClass(kind)}"></i>`;
  }
  editorMediaViewerContent.replaceChildren();

  const source = getProjectMediaSource(file);
  if (!source) {
    const encodedSource = String(file.content || "");
    showMediaViewerFallback(
      encodedSource.startsWith("data:") && encodedSource.length > MAX_INLINE_MEDIA_SOURCE_CHARS
        ? "This older encoded media file is too large to open safely. Remove it and add the original file again to use the memory-safe viewer."
        : file.mediaRestoreFailed
          ? "This media file could not be restored from browser storage. Add the original file again to reconnect it."
          : file.mediaStorageId
          ? "Restoring this media file from browser storage..."
          : "This media file has no previewable content.",
    );
    return;
  }

  let mediaElement;
  if (kind === "image") {
    mediaElement = document.createElement("img");
    mediaElement.alt = file.name ? `Preview of ${file.name}` : "Image preview";
  } else if (kind === "video") {
    mediaElement = document.createElement("video");
    mediaElement.controls = true;
    mediaElement.playsInline = true;
    mediaElement.preload = "metadata";
  } else if (kind === "audio") {
    const audioCard = document.createElement("div");
    audioCard.className = "editor-media-audio-card";
    const audioIcon = document.createElement("i");
    audioIcon.className = "fa-solid fa-music";
    audioIcon.setAttribute("aria-hidden", "true");
    mediaElement = document.createElement("audio");
    mediaElement.controls = true;
    mediaElement.preload = "metadata";
    audioCard.append(audioIcon, mediaElement);
    editorMediaViewerContent.appendChild(audioCard);
  }

  if (!mediaElement) {
    showMediaViewerFallback("This file type cannot be previewed in the editor.");
    return;
  }
  mediaElement.addEventListener("error", () => {
    if (activeFile === file) showMediaViewerFallback("The browser could not display this media file.");
  }, { once: true });
  mediaElement.src = source;
  if (kind !== "audio") editorMediaViewerContent.appendChild(mediaElement);
}

function displayActiveFileInEditor(options = {}) {
  const editor = document.getElementById("activeEditor");
  if (!editor) return false;
  const codeContainer = editor.closest(".code-container");
  const mediaKind = getProjectMediaKind(activeFile);
  const isMediaFile = Boolean(mediaKind);
  const showMediaSource = isMediaFile && developerMediaSourceVisible;
  codeContainer?.classList.toggle("media-file-active", isMediaFile && !showMediaSource);
  codeContainer?.classList.toggle("media-source-active", showMediaSource);
  hideSuggestions();

  if (isMediaFile && activeFile && !showMediaSource) {
    editor.value = "";
    editor.setAttribute("aria-hidden", "true");
    editor.tabIndex = -1;
    editor.blur();
    if (lineNumbersContent) lineNumbersContent.textContent = "";
    if (highlightLayer) highlightLayer.innerHTML = "";
    if (undoEditorBtn) undoEditorBtn.disabled = true;
    if (redoEditorBtn) redoEditorBtn.disabled = true;
    renderActiveMediaFile(activeFile, mediaKind);
    return true;
  }

  if (editorMediaViewer) editorMediaViewer.hidden = true;
  if (editorMediaViewerContent) editorMediaViewerContent.replaceChildren();
  editor.removeAttribute("aria-hidden");
  editor.removeAttribute("tabindex");
  const previousCaret = Number(editor.selectionStart || 0);
  editor.value = activeFile
    ? showMediaSource
      ? getDeveloperMediaSourceText(activeFile)
      : String(activeFile.content || "")
    : "";
  const requestedCaret = Number.isFinite(options.cursorPosition)
    ? Number(options.cursorPosition)
    : options.preserveCaret
      ? previousCaret
      : editor.value.length;
  const caret = Math.max(0, Math.min(requestedCaret, editor.value.length));
  editor.selectionStart = editor.selectionEnd = caret;
  updateLineNumbers(editor, { immediate: true, forceLineNumbers: true });
  syncScroll(editor);
  syncSyntaxLayerStyle(editor);
  if (showMediaSource) {
    if (highlightLayer) highlightLayer.innerHTML = "";
    clearInlineHtmlCorrectionDisplay(editor);
    editor.readOnly = true;
    editor.title = "Read-only media source enabled from Developer Tools.";
    if (undoEditorBtn) undoEditorBtn.disabled = true;
    if (redoEditorBtn) redoEditorBtn.disabled = true;
  } else {
    syncInlineHtmlCorrectionDisplay(editor);
  }
  if (options.resetAllHistory) resetAllEditorHistory(editor);
  else if (!showMediaSource) syncEditorHistoryState(editor);
  if (options.focus) editor.focus();
  return showMediaSource;
}

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
${"    "}
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
  const statusSignature = [
    hasUnsavedChanges ? "unsaved" : "saved",
    Number(lastAutosaveAt || 0),
    String(activeSavedProjectName || ""),
  ].join(":");
  if (projectStatusBadge.dataset.statusSignature === statusSignature) return;
  projectStatusBadge.dataset.statusSignature = statusSignature;
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
    if (!getProjectMediaKind(file)) return false;
    const candidate = String(file.name || "").trim().replace(/^\.\/+/, "").toLowerCase();
    return (
      candidate === cleanPath ||
      candidate.endsWith(`/${cleanPath}`) ||
      candidate.split("/").pop() === fileName
    );
  });
  const mediaSource = getProjectMediaSource(mediaFile);
  if (mediaSource) {
    return mediaSource;
  }
  return normalizedPath.startsWith("/") ? normalizedPath : `/${normalizedPath}`;
}

const defaultSettings = {
  bgColor: "#1E1E1E",
  textSize: "14",
  fontFamily: "'JetBrains Mono', 'Consolas', monospace",
  fontEmbed: "",
  fontWeight: "400",
  fontItalic: false,
  fontLetterSpacing: "0",
  fontLineHeight: "1.5",
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
      mediaType: file.mediaType || getProjectMediaKind(file) || undefined,
      mediaStorageId: file.mediaStorageId || undefined,
      mediaSize: Number(file.mediaSize || 0) || undefined,
      mediaMimeType: file.mediaMimeType || undefined,
      content: file.mediaBlob instanceof Blob && file.mediaStorageId ? "" : file.content,
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

  releaseProjectMediaObjectUrls(projectFiles);
  projectFiles = normalizeProjectMediaMetadata(upgradeStarterScriptIfNeeded(files).map((file, index) => ({
    name: normalizeProjectFileName(file.name, `file-${index + 1}.html`),
    type: String(file.type || "html"),
    mediaType: String(file.mediaType || getProjectMediaKind(file) || ""),
    mediaStorageId: String(file.mediaStorageId || ""),
    mediaSize: Number(file.mediaSize || 0),
    mediaMimeType: String(file.mediaMimeType || ""),
    content: String(file.content || ""),
    active: false,
  })));

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
    displayActiveFileInEditor({ resetAllHistory: true });
  }
  renderFileList();
  enforceCollabPermissionsUI();
  hydrateStoredProjectMedia(projectFiles);
  hasUnsavedChanges = false;
  lastAutosaveAt = Date.now();
  updateProjectStatusUI();
  scheduleProjectAutosave();
  if (autoRunCheckbox.checked) updatePreview();
  syncProjectWithSession();
  return true;
}

function cancelScheduledProjectAutosave() {
  clearTimeout(autosaveTimer);
  autosaveTimer = null;
  if (autosaveIdleCallback !== null && typeof window.cancelIdleCallback === "function") {
    window.cancelIdleCallback(autosaveIdleCallback);
  }
  autosaveIdleCallback = null;
}

function scheduleProjectAutosave() {
  cancelScheduledProjectAutosave();
  const persistSnapshot = () => {
    autosaveTimer = null;
    autosaveIdleCallback = null;
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
  };

  const shouldWaitForIdle = projectFiles.length > LARGE_PROJECT_FILE_THRESHOLD;
  if (shouldWaitForIdle && typeof window.requestIdleCallback === "function") {
    autosaveIdleCallback = window.requestIdleCallback(persistSnapshot, { timeout: 1800 });
    return;
  }
  autosaveTimer = setTimeout(persistSnapshot, shouldWaitForIdle ? 900 : 350);
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
  return safeLocalStorage("set", SAVED_PROJECTS_KEY, JSON.stringify(projects)) === true;
}

function normalizeDeviceTransferCode(value) {
  const compact = String(value || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
  return compact.length === 12 ? compact.match(/.{1,4}/g).join("-") : "";
}

async function requestDeviceTransfer(path, body) {
  const response = await fetch(`/api/device-transfer/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data?.ok) {
    throw new Error(data?.error || "Device Transfer is temporarily unavailable.");
  }
  return data;
}

async function cloneSnapshotForDeviceTransfer(snapshot, runtimeFiles, transferState) {
  const sourceFiles = Array.isArray(snapshot?.files) ? snapshot.files : [];
  const files = [];
  for (const sourceFile of sourceFiles) {
    const file = {
      name: String(sourceFile?.name || "file.txt"),
      type: String(sourceFile?.type || "txt"),
      mediaType: String(sourceFile?.mediaType || getProjectMediaKind(sourceFile) || ""),
      mediaSize: Number(sourceFile?.mediaSize || 0) || 0,
      mediaMimeType: String(sourceFile?.mediaMimeType || ""),
      content: String(sourceFile?.content || ""),
      active: Boolean(sourceFile?.active),
    };
    if (file.mediaType) {
      const runtimeFile = (Array.isArray(runtimeFiles) ? runtimeFiles : []).find(
        (candidate) => String(candidate?.name || "") === file.name,
      );
      const storageId = String(sourceFile?.mediaStorageId || runtimeFile?.mediaStorageId || "");
      let encoded = file.content.startsWith("data:") ? file.content : "";
      if (!encoded && storageId && transferState.mediaCache.has(storageId)) {
        encoded = transferState.mediaCache.get(storageId) || "";
      }
      if (!encoded) {
        let blob = runtimeFile?.mediaBlob instanceof Blob ? runtimeFile.mediaBlob : null;
        if (!blob && storageId) {
          try {
            blob = await readPersistedMediaBlob(storageId);
          } catch (_error) {
            blob = null;
          }
        }
        if (blob instanceof Blob) {
          if (transferState.mediaBytes + blob.size <= MAX_DEVICE_TRANSFER_MEDIA_BYTES) {
            encoded = await readMediaBlobAsDataUrl(blob);
            transferState.mediaBytes += blob.size;
          } else {
            transferState.skippedMedia += 1;
          }
        } else if (!file.content) {
          transferState.skippedMedia += 1;
        }
        if (storageId) transferState.mediaCache.set(storageId, encoded);
      } else {
        transferState.mediaBytes += Math.ceil(encoded.length * 0.75);
        if (transferState.mediaBytes > MAX_DEVICE_TRANSFER_MEDIA_BYTES) {
          encoded = "";
          transferState.skippedMedia += 1;
        }
      }
      if (
        !encoded &&
        file.content &&
        !file.content.startsWith("data:") &&
        !file.content.startsWith("blob:")
      ) {
        encoded = file.content;
      }
      file.content = encoded;
      if (!file.content) continue;
    }
    files.push(file);
  }
  return {
    version: 1,
    files,
    activeFileName: String(snapshot?.activeFileName || ""),
    previewTarget: snapshot?.previewTarget || null,
    savedAt: Number(snapshot?.savedAt || Date.now()) || Date.now(),
  };
}

async function createDeviceTransferPayload() {
  const transferState = { mediaBytes: 0, skippedMedia: 0, mediaCache: new Map() };
  const currentProject = await cloneSnapshotForDeviceTransfer(
    serializeProjectState(),
    projectFiles,
    transferState,
  );
  if (!currentProject.files.length) {
    throw new Error("The current workspace only contains media that is too large to transfer. Use ZIP export instead.");
  }
  const savedProjects = [];
  for (const project of getSavedProjects()) {
    if (!project?.snapshot) continue;
    savedProjects.push({
      id: String(project.id || ""),
      name: String(project.name || "Transferred project"),
      updatedAt: Number(project.updatedAt || Date.now()) || Date.now(),
      snapshot: await cloneSnapshotForDeviceTransfer(project.snapshot, [], transferState),
    });
  }
  let editorSettings = {};
  try {
    editorSettings = JSON.parse(safeLocalStorage("get", "editorSettings") || "{}") || {};
  } catch (_error) {
    editorSettings = {};
  }
  return {
    payload: {
      version: 1,
      createdAt: Date.now(),
      currentProject,
      savedProjects,
      editorSettings,
      workspaceSettings: {
        autoRun: Boolean(autoRunCheckbox?.checked),
        consoleVisible: Boolean(showConsoleCheckbox?.checked),
        previewZoom: previewZoomPercent,
        previewDevice: {
          mode: previewDeviceState.key,
          width: previewDeviceState.width,
          height: previewDeviceState.height,
        },
        previewGrid: previewGridEnabled,
        previewBreakpoints: previewBreakpointIndicatorEnabled,
        previewColorScheme: previewColorSchemeMode,
      },
      activeSavedProjectName: activeSavedProjectName || "",
    },
    skippedMedia: transferState.skippedMedia,
  };
}

function getDeviceTransferSummaryHtml(summary, note = "") {
  return `
    <div class="device-transfer-summary">
      <div><strong>${Number(summary?.currentFiles || 0)}</strong><span>workspace files</span></div>
      <div><strong>${Number(summary?.savedProjects || 0)}</strong><span>saved projects</span></div>
      <div><strong>${summary?.settings ? "Yes" : "No"}</strong><span>settings bundle</span></div>
      <div><strong>${Number(summary?.mediaFiles || 0)}</strong><span>media files</span></div>
    </div>
    ${note ? `<p class="device-transfer-note">${escapeHtml(note)}</p>` : ""}
  `;
}

function showDeviceTransferImportConfirm(summary, currentEditorHasUnsavedChanges = false) {
  return new Promise((resolve) => {
    activeDialogResolver = resolve;
    if (appDialog) appDialog.dataset.dialogKind = "device-transfer-import";
    if (appDialogTitle) appDialogTitle.textContent = "IMPORT FROM DEVICE";
    if (appDialogMessage) {
      appDialogMessage.innerHTML = `
        ${getDeviceTransferSummaryHtml(summary)}
        <div id="deviceTransferImportMode" class="device-transfer-import-mode" data-mode="replace">
          <span class="device-transfer-import-mode-icon"><i class="fa-solid fa-code"></i></span>
          <span class="device-transfer-import-mode-copy">
            <strong id="deviceTransferImportModeTitle">Replace current editor</strong>
            <small id="deviceTransferImportModeDescription">Open the transferred workspace in the editor after importing.</small>
          </span>
          <label class="switch" title="Replace or keep the current editor">
            <input id="deviceTransferReplaceEditorToggle" type="checkbox" checked aria-label="Replace current editor" aria-describedby="deviceTransferImportModeDescription">
            <span class="slider"></span>
          </label>
        </div>
        <p id="deviceTransferImportModeNote" class="device-transfer-warning"></p>
      `;
    }
    if (appDialogInput) {
      appDialogInput.style.display = "none";
      appDialogInput.value = "";
      appDialogInput.onkeydown = null;
    }
    if (appDialogActions) {
      appDialogActions.innerHTML = `
        <button type="button" id="deviceTransferImportCancelBtn" class="run-button" style="background:#6b7280"><strong>CANCEL</strong></button>
        <button type="button" id="deviceTransferImportConfirmBtn" class="run-button"><strong id="deviceTransferImportConfirmText">IMPORT &amp; REPLACE</strong></button>
      `;
    }
    if (appDialog) appDialog.style.display = "flex";
    resetAppDialogScroll();

    const mode = document.getElementById("deviceTransferImportMode");
    const toggle = document.getElementById("deviceTransferReplaceEditorToggle");
    const title = document.getElementById("deviceTransferImportModeTitle");
    const description = document.getElementById("deviceTransferImportModeDescription");
    const note = document.getElementById("deviceTransferImportModeNote");
    const confirmText = document.getElementById("deviceTransferImportConfirmText");
    const confirmButton = document.getElementById("deviceTransferImportConfirmBtn");
    const cancelButton = document.getElementById("deviceTransferImportCancelBtn");
    const updateMode = () => {
      const replaceCurrentWorkspace = Boolean(toggle?.checked);
      if (mode) mode.dataset.mode = replaceCurrentWorkspace ? "replace" : "keep";
      if (title) title.textContent = replaceCurrentWorkspace ? "Replace current editor" : "Keep current editor";
      if (description) {
        description.textContent = replaceCurrentWorkspace
          ? "Open the transferred workspace in the editor after importing."
          : "Keep the files and unsaved code currently open on this device.";
      }
      if (note) {
        note.dataset.state = replaceCurrentWorkspace ? "replace" : "keep";
        note.textContent = replaceCurrentWorkspace
          ? currentEditorHasUnsavedChanges
            ? "Your current editor has unsaved changes and will be replaced. Saved projects are still merged, with the newer copy winning when names match."
            : "The current editor workspace will be replaced. Saved projects are still merged, with the newer copy winning when names match."
          : "The current editor stays open. The incoming workspace is saved into Saved Projects, while saved projects and settings continue importing.";
      }
      if (confirmText) confirmText.textContent = replaceCurrentWorkspace ? "IMPORT & REPLACE" : "IMPORT & KEEP EDITOR";
    };

    toggle?.addEventListener("change", updateMode);
    cancelButton?.addEventListener("click", () => closeAppDialog({ ok: false }));
    confirmButton?.addEventListener("click", () => closeAppDialog({
      ok: true,
      replaceCurrentWorkspace: Boolean(toggle?.checked),
    }));
    updateMode();
    setTimeout(() => {
      toggle?.focus({ preventScroll: true });
      resetAppDialogScroll();
    }, 0);
  });
}

function showDeviceTransferCodePrompt(prefilledCode = "") {
  return new Promise((resolve) => {
    activeDialogResolver = resolve;
    if (appDialog) appDialog.dataset.dialogKind = "device-transfer-entry";
    if (appDialogTitle) appDialogTitle.textContent = "RECEIVE DEVICE DATA";
    if (appDialogMessage) {
      appDialogMessage.innerHTML = `
        <p class="device-transfer-instruction">Enter the 12-character code shown on your other device:</p>
        <div class="device-transfer-code-entry" role="group" aria-label="12-character transfer code">
          ${[0, 1, 2].map((index) => `
            ${index ? '<span class="device-transfer-code-dash" aria-hidden="true">–</span>' : ""}
            <input class="device-transfer-code-box" type="text" inputmode="text" maxlength="4" autocomplete="off" autocapitalize="characters" spellcheck="false" aria-label="Transfer code group ${index + 1}">
          `).join("")}
        </div>
        <p id="deviceTransferCodeEntryStatus" class="device-transfer-code-entry-status">Letters are automatically capitalized.</p>
      `;
    }
    if (appDialogInput) {
      appDialogInput.style.display = "none";
      appDialogInput.value = "";
      appDialogInput.onkeydown = null;
    }
    if (appDialogActions) {
      appDialogActions.innerHTML = `
        <button type="button" id="deviceTransferEntryCancelBtn" class="run-button" style="background:#6b7280"><strong>CANCEL</strong></button>
        <button type="button" id="deviceTransferEntrySubmitBtn" class="run-button"><strong>CONTINUE</strong></button>
      `;
    }
    if (appDialog) appDialog.style.display = "flex";

    const inputs = [...document.querySelectorAll(".device-transfer-code-box")];
    const status = document.getElementById("deviceTransferCodeEntryStatus");
    const submitButton = document.getElementById("deviceTransferEntrySubmitBtn");
    const cancelButton = document.getElementById("deviceTransferEntryCancelBtn");
    const cleanCharacters = (value) => String(value || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
    const getCompactCode = () => inputs.map((input) => input.value).join("");
    const updateState = () => {
      const complete = getCompactCode().length === 12;
      if (submitButton) submitButton.disabled = !complete;
      if (status && status.dataset.state === "error" && complete) {
        delete status.dataset.state;
        status.textContent = "Code ready. Press Continue to import.";
      }
      return complete;
    };
    const fillInputs = (startIndex, value) => {
      const characters = cleanCharacters(value);
      if (!characters) return;
      let offset = 0;
      let lastChangedIndex = startIndex;
      for (let index = startIndex; index < inputs.length && offset < characters.length; index += 1) {
        inputs[index].value = characters.slice(offset, offset + 4);
        offset += 4;
        lastChangedIndex = index;
      }
      const nextInput = inputs[lastChangedIndex].value.length === 4
        ? inputs[Math.min(lastChangedIndex + 1, inputs.length - 1)]
        : inputs[lastChangedIndex];
      nextInput?.focus();
      nextInput?.select();
      updateState();
    };
    const submit = () => {
      const code = normalizeDeviceTransferCode(getCompactCode());
      if (!code) {
        if (status) {
          status.dataset.state = "error";
          status.textContent = "Complete all three boxes before continuing.";
        }
        inputs.find((input) => input.value.length < 4)?.focus();
        return;
      }
      closeAppDialog({ ok: true, value: code });
    };

    inputs.forEach((input, index) => {
      input.addEventListener("input", () => {
        const characters = cleanCharacters(input.value);
        if (characters.length > 4) {
          fillInputs(index, characters);
          return;
        }
        input.value = characters.slice(0, 4);
        if (input.value.length === 4 && index < inputs.length - 1) {
          inputs[index + 1].focus();
          inputs[index + 1].select();
        }
        updateState();
      });
      input.addEventListener("paste", (event) => {
        event.preventDefault();
        fillInputs(index, event.clipboardData?.getData("text") || "");
      });
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          submit();
        } else if (event.key === "Escape") {
          event.preventDefault();
          cancelButton?.click();
        } else if (event.key === "Backspace" && !input.value && index > 0) {
          event.preventDefault();
          inputs[index - 1].focus();
          inputs[index - 1].setSelectionRange(inputs[index - 1].value.length, inputs[index - 1].value.length);
        } else if (event.key === "ArrowLeft" && input.selectionStart === 0 && index > 0) {
          inputs[index - 1].focus();
        } else if (event.key === "ArrowRight" && input.selectionStart === input.value.length && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });
    });

    cancelButton?.addEventListener("click", () => closeAppDialog({ ok: false, value: null }));
    submitButton?.addEventListener("click", submit);
    const initialCharacters = cleanCharacters(prefilledCode).slice(0, 12);
    if (initialCharacters) fillInputs(0, initialCharacters);
    updateState();
    setTimeout(() => {
      const firstIncompleteInput = inputs.find((input) => input.value.length < 4);
      (firstIncompleteInput || inputs[0])?.focus();
    }, 0);
  });
}

function showDeviceTransferChoice() {
  return new Promise((resolve) => {
    activeDialogResolver = resolve;
    if (appDialog) appDialog.dataset.dialogKind = "device-transfer-choice";
    if (appDialogTitle) appDialogTitle.textContent = "DEVICE TRANSFER";
    if (appDialogMessage) {
      appDialogMessage.innerHTML = `Move your workspace, saved projects, complete editor settings, and preview preferences between a laptop and phone.<br><span class="device-transfer-privacy"><i class="fa-solid fa-shield-halved"></i> The code works once and expires in 10 minutes. GitHub and collaboration sign-ins are never included.</span>`;
    }
    if (appDialogInput) appDialogInput.style.display = "none";
    if (appDialogActions) {
      appDialogActions.innerHTML = `
        <button type="button" id="deviceTransferSendBtn" class="collab-choice-card device-transfer-choice-card">
          <i class="fa-solid fa-arrow-up-from-bracket"></i><span>Send from this device</span><small>Create a one-time code</small>
        </button>
        <button type="button" id="deviceTransferReceiveBtn" class="collab-choice-card device-transfer-choice-card">
          <i class="fa-solid fa-arrow-down"></i><span>Enter transfer code</span><small>Type the code from another device</small>
        </button>
        <button type="button" id="deviceTransferScanBtn" class="collab-choice-card device-transfer-choice-card device-transfer-scan-card">
          <i class="fa-solid fa-qrcode"></i><span>Scan QR code</span><small>Use the camera or a QR image</small>
        </button>
        <button type="button" id="deviceTransferCancelBtn" class="run-button device-transfer-cancel" style="background:#6b7280"><strong>CANCEL</strong></button>
      `;
    }
    if (appDialog) appDialog.style.display = "flex";
    document.getElementById("deviceTransferSendBtn").onclick = () => closeAppDialog({ ok: true, action: "send" });
    document.getElementById("deviceTransferReceiveBtn").onclick = () => closeAppDialog({ ok: true, action: "receive" });
    document.getElementById("deviceTransferScanBtn").onclick = () => closeAppDialog({ ok: true, action: "scan" });
    document.getElementById("deviceTransferCancelBtn").onclick = () => closeAppDialog({ ok: false });
    setTimeout(() => document.getElementById("deviceTransferSendBtn")?.focus(), 0);
  });
}

function showDeviceTransferCode(data, skippedMedia = 0) {
  const code = normalizeDeviceTransferCode(data?.code);
  const transferUrl = new URL("/frontend.html", window.location.origin);
  transferUrl.searchParams.set("deviceTransfer", code);
  const shareUrl = String(data?.transferUrl || transferUrl.toString());
  const qrImage = String(data?.qrImageUrl || data?.qrDataUrl || "");
  const qrFallbackImage = String(data?.qrDataUrl || "");
  if (appDialog) appDialog.dataset.dialogKind = "device-transfer-code";
  if (appDialogTitle) appDialogTitle.textContent = "TRANSFER READY";
  if (appDialogMessage) {
    appDialogMessage.innerHTML = `
      <p id="deviceTransferExpiry" class="device-transfer-expiry device-transfer-expiry-primary" aria-live="polite">
        <i class="fa-regular fa-clock"></i>
        <span>One use &middot;</span>
        <strong id="deviceTransferCountdown">10:00</strong>
        <span id="deviceTransferCountdownLabel">remaining</span>
      </p>
      <strong class="device-transfer-code-label"><i class="fa-solid fa-key"></i> TRANSFER CODE</strong>
      <button type="button" id="deviceTransferCodeValue" class="device-transfer-code" title="Copy transfer code">${escapeHtml(code)}</button>
      <div id="deviceTransferQr" class="device-transfer-qr" data-state="loading">
        <strong class="device-transfer-qr-title"><i class="fa-solid fa-qrcode"></i> SCAN TO RECEIVE</strong>
        <div class="device-transfer-qr-frame">
          <img id="deviceTransferQrImage" alt="QR code for this one-time device transfer" width="320" height="320" hidden>
          <div id="deviceTransferQrPlaceholder" class="device-transfer-qr-placeholder">
            <i class="fa-solid fa-spinner fa-spin"></i><span>Preparing QR code&hellip;</span>
          </div>
        </div>
        <span id="deviceTransferQrStatus"><i class="fa-solid fa-camera"></i> Scan with the phone camera or CodX Editor QR scanner</span>
      </div>
      <p class="device-transfer-instruction">Scan the QR code with the other device, or open CodX Editor there and enter the one-time transfer code.</p>
      ${getDeviceTransferSummaryHtml(data?.summary, skippedMedia ? `${skippedMedia} large or unavailable media file${skippedMedia === 1 ? " was" : "s were"} skipped. Use ZIP export if you need those files.` : "")}
    `;
  }
  if (appDialogInput) appDialogInput.style.display = "none";
  if (appDialogActions) {
    appDialogActions.innerHTML = `
      <button type="button" id="deviceTransferCopyCodeBtn" class="run-button"><i class="fa-regular fa-copy"></i><strong>COPY CODE</strong></button>
      <button type="button" id="deviceTransferCopyLinkBtn" class="run-button" style="background:#2563eb"><i class="fa-solid fa-link"></i><strong>COPY LINK</strong></button>
      <button type="button" id="deviceTransferDoneBtn" class="run-button" style="background:#6b7280"><strong>DONE</strong></button>
    `;
  }
  if (appDialog) appDialog.style.display = "flex";
  resetAppDialogScroll();
  const qrContainer = document.getElementById("deviceTransferQr");
  const qrImageElement = document.getElementById("deviceTransferQrImage");
  const qrPlaceholder = document.getElementById("deviceTransferQrPlaceholder");
  const qrStatus = document.getElementById("deviceTransferQrStatus");
  if (qrImage && qrContainer && qrImageElement) {
    let triedInlineFallback = false;
    qrImageElement.onload = () => {
      qrImageElement.hidden = false;
      if (qrPlaceholder) qrPlaceholder.hidden = true;
      qrContainer.dataset.state = "ready";
    };
    qrImageElement.onerror = () => {
      if (!triedInlineFallback && qrFallbackImage && qrImageElement.src !== qrFallbackImage) {
        triedInlineFallback = true;
        qrImageElement.src = qrFallbackImage;
        return;
      }
      qrContainer.dataset.state = "error";
      if (qrPlaceholder) qrPlaceholder.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i><span>QR image unavailable</span>';
      if (qrStatus) qrStatus.textContent = "Use the transfer code or Copy Link instead.";
    };
    qrImageElement.src = qrImage;
  } else if (qrContainer) {
    qrContainer.dataset.state = "error";
    if (qrPlaceholder) qrPlaceholder.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i><span>QR image unavailable</span>';
    if (qrStatus) qrStatus.textContent = "Use the transfer code or Copy Link instead.";
  }
  const copyText = async (value, successMessage) => {
    try {
      await navigator.clipboard.writeText(value);
      showNotification(successMessage, "success");
    } catch (_error) {
      showNotification("Copying was blocked. Select the code in this dialog instead.", "error");
    }
  };
  document.getElementById("deviceTransferCodeValue").onclick = () => copyText(code, "Transfer code copied.");
  document.getElementById("deviceTransferCopyCodeBtn").onclick = () => copyText(code, "Transfer code copied.");
  document.getElementById("deviceTransferCopyLinkBtn").onclick = () => copyText(shareUrl, "Transfer link copied.");
  document.getElementById("deviceTransferDoneBtn").onclick = () => closeAppDialog();
  startDeviceTransferCountdown(data?.expiresAt);
  setTimeout(() => {
    document.getElementById("deviceTransferCopyCodeBtn")?.focus({ preventScroll: true });
    resetAppDialogScroll();
  }, 0);
}

function stopDeviceTransferCountdown() {
  if (deviceTransferCountdownTimer) {
    clearInterval(deviceTransferCountdownTimer);
    deviceTransferCountdownTimer = null;
  }
}

function startDeviceTransferCountdown(expiresAt) {
  stopDeviceTransferCountdown();
  const expiryTime = Number(expiresAt || 0);
  const expiry = document.getElementById("deviceTransferExpiry");
  const countdown = document.getElementById("deviceTransferCountdown");
  const label = document.getElementById("deviceTransferCountdownLabel");
  if (!expiry || !countdown || !label || !Number.isFinite(expiryTime) || expiryTime <= 0) return;

  const updateCountdown = () => {
    const remainingSeconds = Math.max(0, Math.ceil((expiryTime - Date.now()) / 1000));
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    countdown.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (remainingSeconds <= 0) {
      expiry.dataset.state = "expired";
      countdown.textContent = "00:00";
      label.textContent = "expired · create a new transfer";
      ["deviceTransferCodeValue", "deviceTransferCopyCodeBtn", "deviceTransferCopyLinkBtn"].forEach((id) => {
        const button = document.getElementById(id);
        if (button) button.disabled = true;
      });
      stopDeviceTransferCountdown();
      return;
    }

    expiry.dataset.state = remainingSeconds <= 60 ? "ending" : "active";
    label.textContent = "remaining";
  };

  updateCountdown();
  deviceTransferCountdownTimer = setInterval(updateCountdown, 1000);
}

async function sendDeviceTransfer() {
  try {
    showNotification("Preparing your projects and settings…", "info");
    const prepared = await createDeviceTransferPayload();
    const data = await requestDeviceTransfer("create", { payload: prepared.payload });
    showDeviceTransferCode(data, prepared.skippedMedia);
  } catch (error) {
    showNotification(error.message || "Unable to prepare the transfer.", "error");
  }
}

function stopDeviceTransferScanner() {
  if (deviceTransferScannerFrame) {
    cancelAnimationFrame(deviceTransferScannerFrame);
    deviceTransferScannerFrame = 0;
  }
  if (deviceTransferScannerStream) {
    deviceTransferScannerStream.getTracks().forEach((track) => track.stop());
    deviceTransferScannerStream = null;
  }
  const video = document.getElementById("deviceTransferScannerVideo");
  if (video) video.srcObject = null;
}

function extractDeviceTransferCodeFromQr(value) {
  const raw = String(value || "").trim();
  const directCode = normalizeDeviceTransferCode(raw);
  if (directCode) return directCode;
  try {
    const scannedUrl = new URL(raw);
    return normalizeDeviceTransferCode(scannedUrl.searchParams.get("deviceTransfer"));
  } catch (_error) {
    return "";
  }
}

function decodeDeviceTransferQrCanvas(canvas) {
  if (typeof window.jsQR !== "function") {
    throw new Error("The QR scanner did not load. Refresh CodX Editor and try again.");
  }
  const context = canvas.getContext("2d", { willReadFrequently: true });
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const result = window.jsQR(imageData.data, imageData.width, imageData.height, {
    inversionAttempts: "attemptBoth",
  });
  return extractDeviceTransferCodeFromQr(result?.data || "");
}

function completeScannedDeviceTransfer(code) {
  const normalizedCode = normalizeDeviceTransferCode(code);
  if (!normalizedCode) return false;
  stopDeviceTransferScanner();
  closeAppDialog();
  setTimeout(() => receiveDeviceTransfer(normalizedCode), 80);
  return true;
}

async function scanDeviceTransferQrImage(file, canvas, status) {
  if (!(file instanceof File) || !String(file.type || "").startsWith("image/")) {
    throw new Error("Choose a PNG, JPG, WEBP, or other image containing the transfer QR code.");
  }
  let imageSource = null;
  let objectUrl = "";
  try {
    if (typeof createImageBitmap === "function") {
      imageSource = await createImageBitmap(file);
    } else {
      objectUrl = URL.createObjectURL(file);
      imageSource = await new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error("That QR image could not be opened."));
        image.src = objectUrl;
      });
    }
    const sourceWidth = Number(imageSource.width || imageSource.naturalWidth || 0);
    const sourceHeight = Number(imageSource.height || imageSource.naturalHeight || 0);
    const scale = Math.min(1, 1400 / Math.max(sourceWidth, sourceHeight));
    canvas.width = Math.max(1, Math.round(sourceWidth * scale));
    canvas.height = Math.max(1, Math.round(sourceHeight * scale));
    canvas.getContext("2d", { willReadFrequently: true }).drawImage(
      imageSource,
      0,
      0,
      canvas.width,
      canvas.height,
    );
    const code = decodeDeviceTransferQrCanvas(canvas);
    if (!completeScannedDeviceTransfer(code)) {
      status.textContent = "No CodX Editor transfer QR code was found in that image. Try a clearer image.";
      status.dataset.state = "error";
    }
  } finally {
    if (typeof imageSource?.close === "function") imageSource.close();
    if (objectUrl) URL.revokeObjectURL(objectUrl);
  }
}

async function startDeviceTransferCamera(video, canvas, status, startButton) {
  if (!navigator.mediaDevices?.getUserMedia) {
    throw new Error("Camera scanning is not supported in this browser. Choose a QR image instead.");
  }
  stopDeviceTransferScanner();
  status.textContent = "Requesting camera access…";
  status.dataset.state = "loading";
  deviceTransferScannerStream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: { ideal: "environment" } },
    audio: false,
  });
  video.srcObject = deviceTransferScannerStream;
  video.hidden = false;
  video.muted = true;
  video.setAttribute("playsinline", "");
  await video.play();
  startButton.innerHTML = '<i class="fa-solid fa-rotate"></i><strong>RESTART CAMERA</strong>';
  status.textContent = "Point the camera at a CodX Editor Device Transfer QR code.";
  status.dataset.state = "scanning";
  let lastScanAt = 0;
  const scanFrame = (timestamp) => {
    if (!deviceTransferScannerStream || !document.body.contains(video)) return;
    if (video.readyState >= 2 && timestamp - lastScanAt >= 140) {
      lastScanAt = timestamp;
      const width = Number(video.videoWidth || 0);
      const height = Number(video.videoHeight || 0);
      if (width && height) {
        const scale = Math.min(1, 900 / Math.max(width, height));
        canvas.width = Math.max(1, Math.round(width * scale));
        canvas.height = Math.max(1, Math.round(height * scale));
        canvas.getContext("2d", { willReadFrequently: true }).drawImage(
          video,
          0,
          0,
          canvas.width,
          canvas.height,
        );
        const code = decodeDeviceTransferQrCanvas(canvas);
        if (completeScannedDeviceTransfer(code)) return;
      }
    }
    deviceTransferScannerFrame = requestAnimationFrame(scanFrame);
  };
  deviceTransferScannerFrame = requestAnimationFrame(scanFrame);
}

function showDeviceTransferScanner() {
  stopDeviceTransferScanner();
  if (appDialog) appDialog.dataset.dialogKind = "device-transfer-scanner";
  if (appDialogTitle) appDialogTitle.textContent = "SCAN TRANSFER QR CODE";
  if (appDialogMessage) {
    appDialogMessage.innerHTML = `
      <div class="device-transfer-scanner">
        <div class="device-transfer-scanner-stage">
          <video id="deviceTransferScannerVideo" aria-label="QR code camera preview" hidden></video>
          <div class="device-transfer-scanner-placeholder"><i class="fa-solid fa-qrcode"></i><strong>READY TO SCAN</strong><span>Use the camera or choose a saved QR image.</span></div>
          <div class="device-transfer-scanner-frame" aria-hidden="true"></div>
        </div>
        <p id="deviceTransferScannerStatus" class="device-transfer-scanner-status">Camera access starts only after you press Start Camera.</p>
        <canvas id="deviceTransferScannerCanvas" hidden></canvas>
        <input id="deviceTransferQrImageInput" type="file" accept="image/*" hidden>
      </div>
    `;
  }
  if (appDialogInput) appDialogInput.style.display = "none";
  if (appDialogActions) {
    appDialogActions.innerHTML = `
      <button type="button" id="deviceTransferStartCameraBtn" class="run-button"><i class="fa-solid fa-camera"></i><strong>START CAMERA</strong></button>
      <button type="button" id="deviceTransferChooseQrBtn" class="run-button" style="background:#2563eb"><i class="fa-solid fa-image"></i><strong>CHOOSE QR IMAGE</strong></button>
      <button type="button" id="deviceTransferTypeCodeBtn" class="run-button" style="background:#7c3aed"><i class="fa-solid fa-keyboard"></i><strong>ENTER CODE</strong></button>
      <button type="button" id="deviceTransferScannerCancelBtn" class="run-button" style="background:#6b7280"><strong>CANCEL</strong></button>
    `;
  }
  if (appDialog) appDialog.style.display = "flex";
  const video = document.getElementById("deviceTransferScannerVideo");
  const canvas = document.getElementById("deviceTransferScannerCanvas");
  const status = document.getElementById("deviceTransferScannerStatus");
  const imageInput = document.getElementById("deviceTransferQrImageInput");
  const startButton = document.getElementById("deviceTransferStartCameraBtn");
  startButton.onclick = async () => {
    try {
      await startDeviceTransferCamera(video, canvas, status, startButton);
    } catch (error) {
      stopDeviceTransferScanner();
      status.textContent = error.message || "The camera could not be started.";
      status.dataset.state = "error";
    }
  };
  document.getElementById("deviceTransferChooseQrBtn").onclick = () => imageInput.click();
  imageInput.onchange = async () => {
    const file = imageInput.files?.[0];
    if (!file) return;
    status.textContent = "Reading QR image…";
    status.dataset.state = "loading";
    try {
      await scanDeviceTransferQrImage(file, canvas, status);
    } catch (error) {
      status.textContent = error.message || "That QR image could not be scanned.";
      status.dataset.state = "error";
    } finally {
      imageInput.value = "";
    }
  };
  document.getElementById("deviceTransferTypeCodeBtn").onclick = () => {
    closeAppDialog();
    setTimeout(() => receiveDeviceTransfer(), 80);
  };
  document.getElementById("deviceTransferScannerCancelBtn").onclick = () => closeAppDialog();
  setTimeout(() => startButton?.focus(), 0);
}

function dataUrlToBlob(dataUrl) {
  return fetch(dataUrl).then((response) => response.blob());
}

async function persistTransferredSnapshotMedia(snapshot, mediaCache) {
  const files = Array.isArray(snapshot?.files) ? snapshot.files : [];
  for (const file of files) {
    const source = String(file?.content || "");
    if (!getProjectMediaKind(file) || !source.startsWith("data:")) continue;
    try {
      let stored = mediaCache.get(source);
      if (!stored) {
        const blob = await dataUrlToBlob(source);
        const mediaFile = {
          ...file,
          mediaStorageId: createMediaStorageId(),
          mediaMimeType: blob.type || file.mediaMimeType,
          mediaSize: blob.size,
        };
        await persistMediaBlob(mediaFile, blob);
        stored = {
          mediaStorageId: mediaFile.mediaStorageId,
          mediaMimeType: mediaFile.mediaMimeType,
          mediaSize: mediaFile.mediaSize,
        };
        mediaCache.set(source, stored);
      }
      file.mediaStorageId = stored.mediaStorageId;
      file.mediaMimeType = stored.mediaMimeType;
      file.mediaSize = stored.mediaSize;
      file.content = "";
    } catch (error) {
      console.warn(`Unable to store transferred media ${file.name}.`, error);
    }
  }
}

async function importDeviceTransferPayload(payload, { replaceCurrentWorkspace = true } = {}) {
  const mediaCache = new Map();
  await persistTransferredSnapshotMedia(payload.currentProject, mediaCache);
  for (const project of payload.savedProjects || []) {
    await persistTransferredSnapshotMedia(project.snapshot, mediaCache);
  }

  const localProjects = getSavedProjects();
  const incomingProjects = [...(payload.savedProjects || [])];
  let importedWorkspaceName = "";
  if (!replaceCurrentWorkspace && payload.currentProject) {
    const requestedName = String(payload.activeSavedProjectName || "").trim();
    const activeFileStem = String(payload.currentProject.activeFileName || "")
      .replace(/\.[^.]+$/, "")
      .trim();
    const baseName = requestedName
      ? `${requestedName} (Transferred)`
      : `Imported ${activeFileStem || "Device Workspace"}`;
    const usedNames = new Set(
      [...localProjects, ...incomingProjects].map((project) => String(project?.name || "").trim().toLowerCase()),
    );
    importedWorkspaceName = baseName;
    let suffix = 2;
    while (usedNames.has(importedWorkspaceName.toLowerCase())) {
      importedWorkspaceName = `${baseName} ${suffix}`;
      suffix += 1;
    }
    incomingProjects.push({
      id: `transferred-workspace-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: importedWorkspaceName,
      updatedAt: Date.now(),
      snapshot: payload.currentProject,
    });
  }
  const projectsByName = new Map(
    localProjects.map((project) => [String(project?.name || "").trim().toLowerCase(), project]),
  );
  const importedNames = new Set();
  let importedCount = 0;
  let newerLocalCount = 0;
  for (const incoming of incomingProjects) {
    const nameKey = String(incoming?.name || "").trim().toLowerCase();
    if (!nameKey || !incoming?.snapshot) continue;
    const local = projectsByName.get(nameKey);
    if (!local || Number(incoming.updatedAt || 0) >= Number(local.updatedAt || 0)) {
      projectsByName.set(nameKey, local ? { ...incoming, id: local.id } : incoming);
      importedNames.add(nameKey);
      importedCount += 1;
    } else {
      newerLocalCount += 1;
    }
  }
  const mergedProjects = [...projectsByName.values()]
    .sort((left, right) => Number(right.updatedAt || 0) - Number(left.updatedAt || 0))
    .slice(0, MAX_SAVED_PROJECTS);
  const usedProjectIds = new Set();
  mergedProjects.forEach((project, index) => {
    let id = String(project?.id || "").trim();
    if (!id || usedProjectIds.has(id)) {
      id = `project-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`;
      project.id = id;
    }
    usedProjectIds.add(id);
  });
  if (!setSavedProjects(mergedProjects)) {
    throw new Error("This device does not have enough browser storage for the imported project library.");
  }

  if (payload.editorSettings && Object.keys(payload.editorSettings).length) {
    safeLocalStorage("set", "editorSettings", JSON.stringify(payload.editorSettings));
    loadSettings();
  }
  if (replaceCurrentWorkspace) {
    const importedName = String(payload.activeSavedProjectName || "").trim();
    activeSavedProjectName = importedNames.has(importedName.toLowerCase()) ? importedName : null;
    if (!applyProjectState(payload.currentProject, "device transfer")) {
      throw new Error("The transferred workspace could not be opened.");
    }
  }
  if (payload.workspaceSettings && Object.keys(payload.workspaceSettings).length) {
    applyWorkspaceSettings(payload.workspaceSettings);
  }
  if (replaceCurrentWorkspace && activeSavedProjectName) {
    hasUnsavedChanges = false;
    updateProjectStatusUI();
  }
  return {
    importedCount,
    newerLocalCount,
    keptCurrentWorkspace: !replaceCurrentWorkspace,
    importedWorkspaceName,
  };
}

async function receiveDeviceTransfer(prefilledCode = "") {
  if (activeSessionId) {
    showNotification("Leave the live collaboration session before importing data from another device.", "error");
    return;
  }
  let code = normalizeDeviceTransferCode(prefilledCode);
  if (!code) {
    const dialog = await showDeviceTransferCodePrompt();
    if (!dialog?.ok) return;
    code = normalizeDeviceTransferCode(dialog.value);
  }
  if (!code) {
    showNotification("Enter a valid transfer code in the format A1B2-C3D4-E5F6.", "error");
    return;
  }
  try {
    const preview = await requestDeviceTransfer("preview", { code });
    const confirm = await showDeviceTransferImportConfirm(preview.summary, hasUnsavedChanges);
    if (!confirm?.ok) return;
    const claimed = await requestDeviceTransfer("claim", { code });
    const result = await importDeviceTransferPayload(claimed.payload, {
      replaceCurrentWorkspace: confirm.replaceCurrentWorkspace,
    });
    const keptNote = result.newerLocalCount
      ? ` ${result.newerLocalCount} newer project${result.newerLocalCount === 1 ? "" : "s"} already on this device ${result.newerLocalCount === 1 ? "was" : "were"} kept.`
      : "";
    const editorNote = result.keptCurrentWorkspace
      ? ` Current editor kept. The incoming workspace was saved as “${result.importedWorkspaceName}”.`
      : " The transferred workspace is now open.";
    showNotification(`Device data imported. ${result.importedCount} saved project${result.importedCount === 1 ? "" : "s"} added or updated.${keptNote}${editorNote}`, "success");
  } catch (error) {
    showNotification(error.message || "Unable to import data from that device.", "error");
  }
}

async function handleDeviceTransfer() {
  const choice = await showDeviceTransferChoice();
  if (!choice?.ok) return;
  if (choice.action === "send") await sendDeviceTransfer();
  if (choice.action === "receive") await receiveDeviceTransfer();
  if (choice.action === "scan") showDeviceTransferScanner();
}

function maybeOpenDeviceTransferFromUrl() {
  const url = new URL(window.location.href);
  const code = normalizeDeviceTransferCode(url.searchParams.get("deviceTransfer"));
  if (!code) return;
  url.searchParams.delete("deviceTransfer");
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  setTimeout(() => receiveDeviceTransfer(code), 250);
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
  setSavedProjects(projects.slice(0, MAX_SAVED_PROJECTS));
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

async function saveCurrentProjectBeforeOpeningAnother() {
  if (activeSessionId && isGroupFeatureRestrictedUser()) {
    const me = getMyParticipant();
    const personalDisabledFeatures = new Set(
      Array.isArray(me?.disabledFeatures) ? me.disabledFeatures : [],
    );
    if (
      collabPermissions.disableSaveProject ||
      personalDisabledFeatures.has("saveProject")
    ) {
      showNotification("The host disabled saving projects for participants.", "error");
      return false;
    }
  }

  if (activeSavedProjectName) {
    return saveCurrentProjectToLibrary(activeSavedProjectName);
  }
  const saveDialog = await showAppPrompt(
    "SAVE PROJECT",
    "Choose a name for this saved project:",
    getSuggestedProjectName(),
    "codx-project",
  );
  if (!saveDialog?.ok) return false;
  return saveCurrentProjectToLibrary(saveDialog.value);
}

async function saveCurrentProjectFromEditor() {
  if (activeSavedProjectName) {
    return saveCurrentProjectToLibrary(activeSavedProjectName);
  }
  const dialog = await showAppPrompt(
    "SAVE PROJECT",
    "Choose a name for this saved project:",
    getSuggestedProjectName(),
    "codx-project",
  );
  if (!dialog?.ok) return false;
  return saveCurrentProjectToLibrary(dialog.value);
}

async function openSavedProjectFromLibrary(projectId) {
  let project = getSavedProjects().find((entry) => entry.id === projectId);
  if (!project?.snapshot) return;

  if (hasUnsavedChanges) {
    const decision = await showUnsavedProjectOpenDialog(project.name);
    if (!decision?.ok) return;
    if (decision.action === "save") {
      const saved = await saveCurrentProjectBeforeOpeningAnother();
      if (!saved) return;
      project = getSavedProjects().find((entry) => entry.id === projectId) || project;
    } else if (decision.action !== "discard") {
      return;
    }
  }

  if (!applyProjectState(project.snapshot, "saved project")) return;
  activeSavedProjectName = project.name;
  closeProjectLibrary();
  updateProjectStatusUI();
}

async function startFreshProject() {
  applyProjectState(getFreshProjectState(), "new project");
  activeSavedProjectName = null;
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
  const decision = await showUnsavedNewProjectDialog();
  if (!decision?.ok) return;
  if (decision.action === "save") {
    const saved = await saveCurrentProjectBeforeOpeningAnother();
    if (!saved) return;
  } else if (decision.action !== "discard") {
    return;
  }
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

function getSafeArchiveFolderName(value, fallback = "project") {
  const safeName = String(value || "")
    .trim()
    .replace(/[\u0000-\u001f<>:"/\\|?*]/g, "-")
    .replace(/\s+/g, " ")
    .replace(/[. ]+$/g, "")
    .slice(0, 120);
  return safeName && safeName !== "." && safeName !== ".." ? safeName : fallback;
}

function getUniqueArchiveFolderName(projectName, usedNames, index) {
  const baseName = getSafeArchiveFolderName(projectName, `project-${index + 1}`);
  let folderName = baseName;
  let suffix = 2;
  while (usedNames.has(folderName.toLowerCase())) {
    folderName = `${baseName} (${suffix++})`;
  }
  usedNames.add(folderName.toLowerCase());
  return folderName;
}

function getSafeArchiveRelativePath(value, fallback = "file.txt") {
  const segments = String(value || "")
    .replace(/\\/g, "/")
    .split("/")
    .map((segment) => segment.trim())
    .filter((segment) => segment && segment !== "." && segment !== "..")
    .map((segment) => segment.replace(/[\u0000-\u001f<>:"|?*]/g, "-").replace(/[. ]+$/g, ""))
    .filter(Boolean);
  return segments.join("/") || fallback;
}

function getMediaMimeTypeForArchiveFile(fileName) {
  const mimeTypes = {
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
    avif: "image/avif",
    bmp: "image/bmp",
    ico: "image/x-icon",
    mp4: "video/mp4",
    webm: "video/webm",
    ogv: "video/ogg",
    mov: "video/quicktime",
    m4v: "video/x-m4v",
    mp3: "audio/mpeg",
    wav: "audio/wav",
    ogg: "audio/ogg",
    m4a: "audio/mp4",
    aac: "audio/aac",
    flac: "audio/flac",
  };
  return mimeTypes[getFileType(fileName)] || "application/octet-stream";
}

async function addSavedProjectFileToArchive(folder, file) {
  const fileName = getSafeArchiveRelativePath(file?.name, "file.txt");
  const mediaKind = getProjectMediaKind(file);
  if (!mediaKind) {
    folder.file(fileName, String(file?.content || ""));
    return true;
  }

  const encodedMedia = String(file?.content || "").match(/^data:[^;,]+;base64,([\s\S]+)$/i);
  if (encodedMedia) {
    folder.file(fileName, encodedMedia[1], { base64: true });
    return true;
  }

  if (file?.mediaStorageId) {
    try {
      const blob = await readPersistedMediaBlob(file.mediaStorageId);
      if (blob instanceof Blob) {
        folder.file(fileName, blob);
        return true;
      }
    } catch (error) {
      console.warn(`Unable to add stored media ${fileName} to the project library ZIP.`, error);
    }
  }
  return false;
}

async function zipAllSavedProjects() {
  if (activeSessionId && isReadOnlyParticipant() && collabPermissions.disableExportZip) {
    showNotification("The host disabled ZIP export for participants.", "error");
    return false;
  }
  const projects = getSavedProjects();
  if (!projects.length) {
    showNotification("There are no saved projects to ZIP.", "info");
    return false;
  }

  const dialog = await showAppPrompt(
    "ZIP ALL PROJECTS",
    "Name the ZIP containing all of your saved project folders:",
    "codx-all-projects.zip",
    "codx-all-projects.zip",
  );
  if (!dialog?.ok) return false;
  const requestedName = String(dialog.value || "").trim();
  if (!requestedName) {
    showNotification("ZIP file name cannot be empty.", "error");
    return false;
  }
  const baseZipName = requestedName.replace(/\.zip$/i, "");
  const zipFileName = `${getSafeArchiveFolderName(baseZipName, "codx-all-projects")}.zip`;

  const button = document.getElementById("zipAllProjectsBtn");
  if (button) {
    button.disabled = true;
    button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i><strong>ZIPPING...</strong>';
  }

  try {
    const zip = new JSZip();
    const usedFolderNames = new Set();
    const manifestProjects = [];
    let missingMediaCount = 0;

    for (let projectIndex = 0; projectIndex < projects.length; projectIndex += 1) {
      const project = projects[projectIndex];
      const folderName = getUniqueArchiveFolderName(project.name, usedFolderNames, projectIndex);
      const folder = zip.folder(folderName);
      const snapshot = project?.snapshot || {};
      const files = Array.isArray(snapshot.files) ? snapshot.files : [];
      for (let fileIndex = 0; fileIndex < files.length; fileIndex += 1) {
        if (!(await addSavedProjectFileToArchive(folder, files[fileIndex]))) missingMediaCount += 1;
        if ((fileIndex + 1) % ZIP_IMPORT_BATCH_SIZE === 0) await yieldToBrowserDuringImport();
      }
      manifestProjects.push({
        name: String(project.name || folderName),
        folder: folderName,
        updatedAt: Number(project.updatedAt || snapshot.savedAt || Date.now()),
        activeFileName: String(snapshot.activeFileName || ""),
        previewTarget: snapshot.previewTarget || null,
      });
      await yieldToBrowserDuringImport();
    }

    zip.comment = JSON.stringify({
      format: PROJECT_LIBRARY_ARCHIVE_FORMAT,
      version: 1,
      exportedAt: Date.now(),
      projects: manifestProjects,
    });
    const content = await zip.generateAsync({ type: "blob" });
    downloadZipBlob(content, zipFileName);
    const mediaNote = missingMediaCount
      ? ` ${missingMediaCount} unavailable media file${missingMediaCount === 1 ? " was" : "s were"} skipped.`
      : "";
    showNotification(`Zipped ${projects.length} saved project${projects.length === 1 ? "" : "s"} as ${zipFileName}.${mediaNote}`, missingMediaCount ? "warn" : "success");
    return true;
  } catch (error) {
    console.error("Saved project library ZIP error:", error);
    showNotification("Could not ZIP the saved project library.", "error");
    return false;
  } finally {
    if (projectLibraryModal?.style.display === "flex") renderProjectLibrary("saved");
  }
}

function getNormalizedArchiveEntryPath(path) {
  const segments = String(path || "")
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .split("/")
    .filter(Boolean);
  if (!segments.length || segments.some((segment) => segment === "." || segment === "..")) return "";
  return segments.join("/");
}

function readProjectLibraryArchiveManifest(zip) {
  try {
    const parsed = JSON.parse(String(zip?.comment || ""));
    if (parsed?.format !== PROJECT_LIBRARY_ARCHIVE_FORMAT || !Array.isArray(parsed.projects)) return null;
    return parsed;
  } catch (_error) {
    return null;
  }
}

function collectProjectGroupsFromArchive(zip) {
  const entries = [];
  zip.forEach((path, entry) => {
    if (entry.dir) return;
    const normalizedPath = getNormalizedArchiveEntryPath(path);
    if (!normalizedPath || normalizedPath.startsWith("__MACOSX/")) return;
    entries.push({ entry, normalizedPath });
  });

  const manifest = readProjectLibraryArchiveManifest(zip);
  if (manifest) {
    const groups = manifest.projects.map((project, index) => {
      const folder = getNormalizedArchiveEntryPath(project?.folder || "");
      if (!folder || folder.includes("/")) return null;
      const prefix = `${folder}/`;
      return {
        name: String(project?.name || folder).trim() || folder,
        folder,
        updatedAt: Number(project?.updatedAt || Date.now()),
        activeFileName: String(project?.activeFileName || ""),
        previewTarget: project?.previewTarget || null,
        files: entries
          .filter(({ normalizedPath }) => normalizedPath.startsWith(prefix))
          .map(({ entry, normalizedPath }) => ({ entry, relativePath: normalizedPath.slice(prefix.length) })),
        order: index,
      };
    }).filter((group) => group?.files.length);
    if (groups.length) return groups;
  }

  const groupsByFolder = new Map();
  entries.forEach(({ entry, normalizedPath }) => {
    const segments = normalizedPath.split("/");
    if (segments.length < 2) return;
    const folder = segments.shift();
    const relativePath = segments.join("/");
    if (!groupsByFolder.has(folder)) {
      groupsByFolder.set(folder, {
        name: folder,
        folder,
        updatedAt: Date.now(),
        activeFileName: "",
        previewTarget: null,
        files: [],
        order: groupsByFolder.size,
      });
    }
    groupsByFolder.get(folder).files.push({ entry, relativePath });
  });
  return [...groupsByFolder.values()];
}

async function createSavedProjectRecordFromArchiveGroup(group, index) {
  const usedNames = new Set();
  const candidates = (Array.isArray(group?.files) ? group.files : []).map(({ entry, relativePath }) => {
    const safeName = makeUniqueProjectFileName(
      getSafeArchiveRelativePath(relativePath, `file-${usedNames.size + 1}.txt`),
      usedNames,
    );
    const extension = getFileType(safeName);
    const mediaKind = getProjectMediaKind({ name: safeName });
    if (!editableTextExtensions.includes(extension) && !mediaKind) return null;
    usedNames.add(safeName.toLowerCase());
    return { entry, safeName, extension, mediaKind };
  }).filter(Boolean);
  if (!candidates.length) return { record: null, missingMediaCount: 0 };

  const importedFiles = [];
  let missingMediaCount = 0;
  for (let batchIndex = 0; batchIndex < candidates.length; batchIndex += ZIP_IMPORT_BATCH_SIZE) {
    const batch = candidates.slice(batchIndex, batchIndex + ZIP_IMPORT_BATCH_SIZE);
    const results = await Promise.all(batch.map(async ({ entry, safeName, extension, mediaKind }) => {
      if (!mediaKind) {
        return {
          name: safeName,
          type: extension,
          content: await entry.async("string"),
          active: false,
        };
      }

      const sourceBlob = await entry.async("blob");
      const mimeType = getMediaMimeTypeForArchiveFile(safeName);
      const blob = sourceBlob.type === mimeType ? sourceBlob : new Blob([sourceBlob], { type: mimeType });
      const mediaFile = {
        name: safeName,
        type: "media",
        mediaType: mediaKind,
        mediaStorageId: createMediaStorageId(),
        mediaSize: Number(blob.size || 0),
        mediaMimeType: mimeType,
        content: "",
        active: false,
      };
      try {
        await persistMediaBlob(mediaFile, blob);
        return mediaFile;
      } catch (error) {
        console.warn(`Unable to store imported media ${safeName}.`, error);
        missingMediaCount += 1;
        return null;
      }
    }));
    importedFiles.push(...results.filter(Boolean));
    if (batchIndex + ZIP_IMPORT_BATCH_SIZE < candidates.length) await yieldToBrowserDuringImport();
  }
  if (!importedFiles.length) return { record: null, missingMediaCount };

  const requestedActiveName = normalizeProjectFileName(
    getSafeArchiveRelativePath(group.activeFileName || "", ""),
    "",
  );
  const activeFile = importedFiles.find((file) => file.name === requestedActiveName)
    || importedFiles.find((file) => file.name.toLowerCase() === "index.html")
    || importedFiles.find((file) => file.type === "html")
    || importedFiles[0];
  importedFiles.forEach((file) => { file.active = file === activeFile; });

  const requestedPreviewName = group.previewTarget?.mode === "html"
    ? normalizeProjectFileName(
        getSafeArchiveRelativePath(group.previewTarget.fileName || "", ""),
        "",
      )
    : "";
  const previewFile = importedFiles.find((file) => file.type === "html" && file.name === requestedPreviewName)
    || importedFiles.find((file) => file.type === "html");
  const projectName = String(group.name || "").trim()
    || String(group.folder || "").trim()
    || `Imported project ${index + 1}`;
  const updatedAt = Number(group.updatedAt || Date.now());
  return {
    missingMediaCount,
    record: {
      id: `project-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
      name: projectName,
      updatedAt,
      snapshot: {
        version: 1,
        files: importedFiles,
        activeFileName: activeFile.name,
        previewTarget: previewFile
          ? { mode: "html", fileName: previewFile.name }
          : { mode: "auto", fileName: "" },
        savedAt: updatedAt,
      },
    },
  };
}

async function importAllSavedProjects() {
  if (activeSessionId && isReadOnlyParticipant() && collabPermissions.disableImportZip) {
    showNotification("The host disabled ZIP import for participants.", "error");
    return false;
  }
  if (activeSessionId && !isHost() && collabPermissions.disableSaveProject) {
    showNotification("The host disabled saving projects for participants.", "error");
    return false;
  }

  const file = await chooseZipFileWithInput();
  if (!file) return false;
  if (!/\.zip$/i.test(file.name || "")) {
    showNotification("Choose a valid ZIP file containing project folders.", "error");
    return false;
  }

  const button = document.getElementById("importAllProjectsBtn");
  if (button) {
    button.disabled = true;
    button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i><strong>IMPORTING...</strong>';
  }

  try {
    const zip = await JSZip.loadAsync(file);
    const allGroups = collectProjectGroupsFromArchive(zip);
    if (!allGroups.length) {
      showNotification("No project folders were found in that ZIP.", "error");
      return false;
    }

    const groups = allGroups.slice(0, MAX_SAVED_PROJECTS);
    const importedRecords = [];
    const importedNames = new Set();
    let missingMediaCount = 0;
    for (let index = 0; index < groups.length; index += 1) {
      const result = await createSavedProjectRecordFromArchiveGroup(groups[index], index);
      missingMediaCount += result.missingMediaCount;
      if (result.record) {
        const nameKey = result.record.name.toLowerCase();
        if (!importedNames.has(nameKey)) {
          importedNames.add(nameKey);
          importedRecords.push(result.record);
        }
      }
      await yieldToBrowserDuringImport();
    }
    if (!importedRecords.length) {
      showNotification("No supported project files were found in those folders.", "error");
      return false;
    }

    const existingProjects = getSavedProjects();
    const replacedCount = existingProjects.filter((project) =>
      importedNames.has(String(project.name || "").trim().toLowerCase()),
    ).length;
    const retainedProjects = existingProjects.filter((project) =>
      !importedNames.has(String(project.name || "").trim().toLowerCase()),
    );
    const nextProjects = [...importedRecords, ...retainedProjects].slice(0, MAX_SAVED_PROJECTS);
    if (!setSavedProjects(nextProjects)) {
      showNotification("Browser storage could not save the imported project library.", "error");
      return false;
    }

    renderProjectLibrary("saved");
    const details = [
      replacedCount ? `${replacedCount} existing name${replacedCount === 1 ? " was" : "s were"} replaced.` : "",
      allGroups.length > groups.length ? `Only the first ${MAX_SAVED_PROJECTS} projects were imported.` : "",
      missingMediaCount ? `${missingMediaCount} media file${missingMediaCount === 1 ? " was" : "s were"} skipped.` : "",
    ].filter(Boolean).join(" ");
    showNotification(`Imported ${importedRecords.length} saved project${importedRecords.length === 1 ? "" : "s"}.${details ? ` ${details}` : ""}`, missingMediaCount ? "warn" : "success");
    return true;
  } catch (error) {
    console.error("Saved project library import error:", error);
    showNotification("That ZIP could not be imported as a project library.", "error");
    return false;
  } finally {
    const currentButton = document.getElementById("importAllProjectsBtn");
    if (currentButton) {
      currentButton.disabled = false;
      currentButton.innerHTML = '<i class="fa-solid fa-file-import"></i><strong>IMPORT ALL PROJECTS</strong>';
    }
  }
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
    const publishFiles = await buildPublishableProjectFiles();
    const response = await fetch("/api/publish", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode,
        publishId,
        verificationKey,
        files: publishFiles,
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
  projectLibraryModal.classList.toggle("template-library-open", mode === "templates");
  if (projectLibraryTitle) {
    projectLibraryTitle.textContent = mode === "templates" ? "Starter Templates" : "Saved Projects";
  }

  if (mode === "templates") {
    projectLibraryBody.innerHTML =
      `<section class="template-library-intro">
        <div>
          <span class="template-library-kicker">CURATED STARTING POINTS</span>
          <h3>Start with a point of view.</h3>
          <p>${starterTemplates.length} responsive concepts with distinct art direction, thoughtful content, and working interactions. Every file is plain HTML, CSS, and JavaScript.</p>
        </div>
        <span class="template-library-count"><strong>${starterTemplates.length}</strong> concepts</span>
      </section>
      <div class="template-library-toolbar">
        <label class="template-library-search">
          <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          <input id="templateLibrarySearch" type="search" placeholder="Search concepts, styles, or features" autocomplete="off" />
        </label>
        <div class="template-library-filters" aria-label="Filter starter concepts">
          <button class="active" type="button" data-template-group="all">All</button>
          <button type="button" data-template-group="websites">Websites</button>
          <button type="button" data-template-group="apps">Apps</button>
          <button type="button" data-template-group="portfolios">Portfolios</button>
          <button type="button" data-template-group="commerce">Commerce</button>
        </div>
      </div>
      <div class="template-library-grid">${starterTemplates
        .map(
          (template) => `
            <article class="template-card template-card-${escapeHtml(template.preview || "signal")}" data-template-card data-template-group="${escapeHtml(getStarterTemplateGroup(template))}" data-template-search="${escapeHtml([template.name, template.category, template.tone, template.description, ...(template.highlights || [])].join(" ").toLowerCase())}" style="--template-accent:${escapeHtml(template.accent || "#4CAF50")};--template-accent-2:${escapeHtml(template.accent2 || template.accent || "#4CAF50")};">
              <div class="template-card-top">
                <span class="template-icon"><i class="fa-solid ${escapeHtml(template.icon || "fa-layer-group")}"></i></span>
                <div class="template-card-labels">
                  <span class="template-category">${escapeHtml(template.category || "Website")}</span>
                  <span class="template-tone">${escapeHtml(template.tone || "Starter")}</span>
                </div>
              </div>
              ${renderStarterTemplatePreview(template)}
              <h4 class="template-title">${escapeHtml(template.name)}</h4>
              <div class="template-description">${escapeHtml(template.description)}</div>
              <div class="template-meta-row">
                <span class="template-meta-pill"><i class="fa-solid fa-folder-tree"></i> ${template.files.length} files</span>
                <span class="template-meta-pill"><i class="fa-solid fa-wand-magic-sparkles"></i> ${escapeHtml(template.level || "Interactive")}</span>
              </div>
              <div class="template-highlights">
                ${(Array.isArray(template.highlights) ? template.highlights : [])
                  .map((item) => `<span class="template-highlight-pill">${escapeHtml(item)}</span>`)
                  .join("")}
              </div>
              <div class="template-card-actions">
                <button class="run-button preview-template-btn" data-template="${escapeHtml(template.id)}" type="button"><i class="fa-solid fa-eye"></i><span>LIVE PREVIEW</span></button>
                <button class="run-button apply-template-btn" data-template="${escapeHtml(template.id)}" type="button"><span>USE CONCEPT</span><i class="fa-solid fa-arrow-right"></i></button>
              </div>
            </article>`,
        )
        .join("")}</div>
      <div id="templateLibraryEmpty" class="template-library-empty" hidden>
        <i class="fa-solid fa-wand-magic-sparkles"></i>
        <strong>No concept matches that search.</strong>
        <span>Try another keyword or choose a different category.</span>
      </div>`;
  } else {
    projectLibraryBody.innerHTML =
      `<div class="project-library-actions">
        <button id="zipAllProjectsBtn" class="run-button" type="button"${savedProjects.length ? "" : " disabled"}>
          <i class="fa-solid fa-file-zipper" aria-hidden="true"></i>
          <span><strong>ZIP ALL PROJECTS</strong><small>Download every saved project in its own folder.</small></span>
        </button>
        <button id="importAllProjectsBtn" class="run-button" type="button">
          <i class="fa-solid fa-file-import" aria-hidden="true"></i>
          <span><strong>IMPORT ALL PROJECTS</strong><small>Add project folders from a library ZIP.</small></span>
        </button>
      </div>` +
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

  const zipAllProjectsBtn = document.getElementById("zipAllProjectsBtn");
  const importAllProjectsBtn = document.getElementById("importAllProjectsBtn");
  if (zipAllProjectsBtn) zipAllProjectsBtn.onclick = zipAllSavedProjects;
  if (importAllProjectsBtn) importAllProjectsBtn.onclick = importAllSavedProjects;

  document.querySelectorAll(".open-saved-project-btn").forEach((btn) => {
    btn.onclick = () => openSavedProjectFromLibrary(btn.dataset.projectId);
  });

  document.querySelectorAll(".delete-saved-project-btn").forEach((btn) => {
    btn.onclick = () => deleteSavedProject(btn.dataset.projectId);
  });

  document.querySelectorAll(".preview-template-btn").forEach((btn) => {
    btn.onclick = () => {
      const template = starterTemplates.find((entry) => entry.id === btn.dataset.template);
      if (template) showStarterTemplatePreview(template);
    };
  });

  document.querySelectorAll(".apply-template-btn").forEach((btn) => {
    btn.onclick = () => {
      const template = starterTemplates.find((entry) => entry.id === btn.dataset.template);
      if (template) applyStarterTemplate(template);
    };
  });

  const templateSearch = document.getElementById("templateLibrarySearch");
  const templateGroupButtons = [...document.querySelectorAll(".template-library-filters [data-template-group]")];
  const templateCards = [...document.querySelectorAll("[data-template-card]")];
  const templateEmpty = document.getElementById("templateLibraryEmpty");
  let activeTemplateGroup = "all";
  const filterTemplates = () => {
    const query = String(templateSearch?.value || "").trim().toLowerCase();
    let visibleCount = 0;
    templateCards.forEach((card) => {
      const groupMatches = activeTemplateGroup === "all" || card.dataset.templateGroup === activeTemplateGroup;
      const searchMatches = !query || String(card.dataset.templateSearch || "").includes(query);
      const visible = groupMatches && searchMatches;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    if (templateEmpty) templateEmpty.hidden = visibleCount > 0;
  };
  templateSearch?.addEventListener("input", filterTemplates);
  templateGroupButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeTemplateGroup = button.dataset.templateGroup || "all";
      templateGroupButtons.forEach((entry) => entry.classList.toggle("active", entry === button));
      filterTemplates();
    });
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
    const matchedProjectName =
      String(autosaveMeta.savedProjectName || "").trim() ||
      findSavedProjectNameForSnapshot(snapshot);
    const restoreProjectName = matchedProjectName || "Unsaved project";
    const restoreFileName =
      String(autosaveMeta.activeFileName || snapshot.activeFileName || "").trim() ||
      String(snapshot.files[0]?.name || "Unknown file");

    const dialog = await showAppConfirm(
      "RESTORE AUTOSAVED DRAFT",
      `Restore the autosaved draft from ${savedLabel}?\n\nProject: ${restoreProjectName}\nFile: ${restoreFileName}`,
      "RESTORE",
      "SKIP",
    );
    if (!dialog?.ok) return false;

    applyProjectState(snapshot, "autosave");
    activeSavedProjectName = matchedProjectName || null;
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

function showActionNotificationHtml(messageHtml, onOpen, type = "info") {
  return showNotificationMarkup(
    `<div class="codx-notification-message">${messageHtml || ""}</div>
     <div class="codx-notification-action"><i class="fa-solid fa-arrow-pointer" aria-hidden="true"></i> Click To Open</div>`,
    type,
    { onOpen, duration: 6000 },
  );
}

function repositionCodxNotifications() {
  let offsetTop = 86;
  document.querySelectorAll(".codx-notification").forEach((item) => {
    item.style.top = `${offsetTop}px`;
    offsetTop += item.offsetHeight + 10;
  });
}

function showNotificationMarkup(messageMarkup, type = "info", options = {}) {
  if (
    activeSessionId &&
    collabPermissions.quietMode &&
    typeof options.onOpen !== "function" &&
    type !== "error" &&
    type !== "warn" &&
    !String(messageMarkup || "").toLowerCase().includes("session")
  ) {
    return;
  }

  const notification = document.createElement("div");
  notification.className = `codx-notification codx-notification-${type}`;
  const duration = Math.max(1000, Number(options.duration) || 3000);
  notification.style.setProperty("--codx-notification-duration", `${duration}ms`);

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
  const hasOpenAction = typeof options.onOpen === "function";
  if (hasOpenAction) {
    notification.classList.add("is-actionable");
    notification.setAttribute("role", "button");
    notification.setAttribute("tabindex", "0");
    const readableMessage = notification.querySelector(".codx-notification-message")?.textContent?.trim() || label;
    notification.setAttribute("aria-label", `${readableMessage}. Click to open`);
  } else {
    notification.setAttribute("role", "status");
  }
  document.body.appendChild(notification);
  repositionCodxNotifications();

  let isDismissed = false;
  let autoDismissTimer = 0;
  const dismiss = () => {
    if (isDismissed) return;
    isDismissed = true;
    notification.classList.add("is-leaving");
    setTimeout(() => {
      notification.remove();
      repositionCodxNotifications();
    }, 300);
  };

  if (hasOpenAction) {
    const open = () => {
      clearTimeout(autoDismissTimer);
      try {
        options.onOpen();
      } finally {
        dismiss();
      }
    };
    notification.addEventListener("click", open);
    notification.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      open();
    });
  }

  autoDismissTimer = setTimeout(dismiss, duration);
  return notification;
}

const runtimeDiagnosticRawErrors = new Map();
const runtimeDiagnosticRecent = new Map();
let runtimeDiagnosticSequence = 0;

const RUNTIME_DIAGNOSTIC_GLOBALS = [
  "console", "document", "window", "localStorage", "sessionStorage", "navigator",
  "location", "history", "fetch", "setTimeout", "setInterval", "clearTimeout",
  "clearInterval", "requestAnimationFrame", "cancelAnimationFrame", "querySelector",
  "querySelectorAll", "getElementById", "createElement", "appendChild", "classList",
  "JSON", "Math", "Array", "Object", "String", "Number", "Boolean", "Date",
  "Promise", "Map", "Set", "URL", "FormData", "Event", "Error",
];

const RUNTIME_DIAGNOSTIC_KEYWORDS = new Set(
  "await break case catch class const continue debugger default delete do else export extends false finally for function if import in instanceof let new null return static super switch this throw true try typeof undefined var void while with yield async of".split(" "),
);

function parseRuntimeStackFrames(stack) {
  const frames = [];
  const text = String(stack || "");
  const frameRegex = /(?:at\s+(.*?)\s+\()?([^\s()]+):(\d+):(\d+)\)?/g;
  let match;
  while ((match = frameRegex.exec(text)) !== null && frames.length < 20) {
    frames.push({
      functionName: String(match[1] || "").trim(),
      source: String(match[2] || "").trim(),
      line: Number(match[3] || 1),
      col: Number(match[4] || 1),
    });
  }
  return frames;
}

function resolveRuntimeDiagnosticFile(rawName) {
  const name = String(rawName || "").split(/[?#]/)[0].split(/[\\/]/).pop();
  if (!name) return null;
  return projectFiles.find(
    (file) => String(file.name || "").toLowerCase() === name.toLowerCase(),
  ) || null;
}

function getRuntimeSourceContext(fileName, line, col) {
  const file = resolveRuntimeDiagnosticFile(fileName);
  if (!file || getProjectMediaKind(file)) return null;
  const lines = String(file.content || "").split(/\r?\n/);
  const safeLine = Math.max(1, Math.min(Number(line || 1), lines.length || 1));
  const safeCol = Math.max(1, Number(col || 1));
  const startLine = Math.max(1, safeLine - 2);
  const endLine = Math.min(lines.length, safeLine + 2);
  const excerpt = [];
  for (let number = startLine; number <= endLine; number += 1) {
    excerpt.push({ number, text: lines[number - 1] || "", active: number === safeLine });
  }
  return {
    file,
    fileName: file.name,
    line: safeLine,
    col: safeCol,
    sourceLine: lines[safeLine - 1] || "",
    nearbySource: lines.slice(Math.max(0, safeLine - 4), Math.min(lines.length, safeLine + 3)).join("\n"),
    excerpt,
  };
}

function findRuntimeSyntaxSourceLocation() {
  const javascriptFiles = projectFiles.filter(
    (file) => file && file.type === "js" && !getProjectMediaKind(file),
  );
  const preferredJavaScriptFiles = activeFile?.type === "js"
    ? [activeFile, ...javascriptFiles.filter((file) => file !== activeFile)]
    : javascriptFiles;
  for (const file of preferredJavaScriptFiles) {
    const parserError = getAcornJavaScriptSyntaxError(file.content);
    if (parserError) {
      return {
        fileName: file.name,
        line: parserError.line,
        col: parserError.col,
      };
    }
  }

  for (const file of projectFiles.filter((candidate) => candidate?.type === "html")) {
    const html = String(file.content || "");
    const scriptRegex = /<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
    let match;
    while ((match = scriptRegex.exec(html)) !== null) {
      const scriptCode = match[1] || "";
      const parserError = getAcornJavaScriptSyntaxError(scriptCode);
      if (!parserError) continue;
      const contentStart = match.index + match[0].indexOf(scriptCode);
      const startLocation = getLineAndColumnFromIndex(html, contentStart);
      return {
        fileName: file.name,
        line: startLocation.line + parserError.line - 1,
        col: parserError.line === 1
          ? startLocation.col + parserError.col - 1
          : parserError.col,
      };
    }
  }
  return null;
}

function collectRuntimeDiagnosticIdentifiers(preferredFile = null) {
  const candidates = new Set(RUNTIME_DIAGNOSTIC_GLOBALS);
  const files = preferredFile
    ? [preferredFile, ...projectFiles.filter((file) => file !== preferredFile)]
    : projectFiles;
  files.forEach((file) => {
    if (!file || getProjectMediaKind(file)) return;
    const source = String(file.content || "").slice(0, 180 * 1024);
    const matches = source.match(/[A-Za-z_$][\w$]*/g) || [];
    matches.forEach((name) => {
      if (!RUNTIME_DIAGNOSTIC_KEYWORDS.has(name)) candidates.add(name);
    });
  });
  return candidates;
}

function findClosestRuntimeIdentifier(name, preferredFile = null) {
  const target = String(name || "").trim();
  if (target.length < 3) return "";
  let best = "";
  let bestDistance = Infinity;
  collectRuntimeDiagnosticIdentifiers(preferredFile).forEach((candidate) => {
    if (!candidate || candidate === target || Math.abs(candidate.length - target.length) > 4) return;
    const distance = getLevenshteinDistance(target, candidate);
    if (distance < bestDistance) {
      best = candidate;
      bestDistance = distance;
    }
  });
  const maxDistance = target.length <= 5 ? 1 : target.length <= 9 ? 2 : 3;
  return bestDistance <= maxDistance ? best : "";
}

function findRuntimeBracketIssue(source) {
  const masked = maskJavaScriptForDiagnostics(String(source || ""));
  const openers = { "(": ")", "[": "]", "{": "}" };
  const closers = new Set(Object.values(openers));
  const stack = [];
  for (let index = 0; index < masked.length; index += 1) {
    const char = masked[index];
    if (openers[char]) {
      stack.push({ char, index });
      continue;
    }
    if (!closers.has(char)) continue;
    const last = stack[stack.length - 1];
    if (!last || openers[last.char] !== char) {
      const location = getLineAndColumnFromIndex(masked, index);
      return {
        explanation: `The parser reached an unexpected "${char}" at line ${location.line}; it does not match the currently open bracket.`,
        fix: last
          ? `Close "${last.char}" with "${openers[last.char]}" before this "${char}".`
          : `Remove this "${char}" or add its matching opening bracket.`,
      };
    }
    stack.pop();
  }
  const last = stack[stack.length - 1];
  if (!last) return null;
  const location = getLineAndColumnFromIndex(masked, last.index);
  return {
    explanation: `The "${last.char}" opened at line ${location.line} is never closed, so JavaScript cannot finish parsing the file.`,
    fix: `Add the matching "${openers[last.char]}" after the intended block or expression.`,
  };
}

function inferRuntimeRootCause(payload, context) {
  const message = String(payload.message || "Unknown runtime error");
  const lower = message.toLowerCase();
  const errorName = String(payload.errorName || "Error");
  const sourceLine = String(context?.sourceLine || "").trim();
  const nearby = String(context?.nearbySource || "");
  const isPromise = payload.kind === "unhandledrejection";

  if (
    errorName === "SyntaxError" ||
    /unexpected token|unexpected end|missing\s+[)\]}]|unterminated|invalid or unexpected token|expected/.test(lower)
  ) {
    const bracketIssue = context ? findRuntimeBracketIssue(context.file.content) : null;
    return {
      category: "Syntax / structure",
      confidence: bracketIssue ? "High confidence" : "Likely",
      explanation: bracketIssue?.explanation ||
        "JavaScript could not build a valid statement near this location, usually because punctuation, quotes, or brackets are incomplete or out of order.",
      fix: bracketIssue?.fix ||
        "Compare the opening and closing quotes, parentheses, square brackets, and braces around the highlighted line.",
    };
  }

  const notDefined = message.match(/\b([A-Za-z_$][\w$]*) is not defined\b/i);
  if (notDefined) {
    const unresolved = notDefined[1];
    const nearest = findClosestRuntimeIdentifier(unresolved, context?.file || null);
    return {
      category: "Undeclared variable",
      confidence: nearest ? "High confidence" : "Likely",
      explanation: nearest
        ? `"${unresolved}" is not available in this scope, and "${nearest}" is the closest name already used by this project.`
        : `"${unresolved}" is used on this line, but no matching variable, function, import, or browser global was found in the project.`,
      fix: nearest
        ? `Replace "${unresolved}" with "${nearest}" if that is the intended name; otherwise declare or import "${unresolved}" before this line.`
        : `Declare, import, or correctly spell "${unresolved}" before it is used.`,
    };
  }

  const beforeInitialization = message.match(/Cannot access ['"]?([^'"]+)['"]? before initialization/i);
  if (beforeInitialization) {
    return {
      category: "Initialization order",
      confidence: "High confidence",
      explanation: `"${beforeInitialization[1]}" exists, but this code runs before its let, const, class, or module initialization has completed.`,
      fix: `Move the declaration above this use, or delay this code until initialization is complete.`,
    };
  }

  const propertyFailure = message.match(/Cannot\s+(read|set)\s+properties?\s+of\s+(null|undefined)(?:\s*\((?:reading|setting)\s+['"]([^'"]+)['"]\))?/i);
  if (propertyFailure) {
    const valueType = propertyFailure[2];
    const property = propertyFailure[3] || "the requested property";
    const propertyAction = propertyFailure[1].toLowerCase() === "set" ? "assign" : "read";
    const domLookup = /querySelector|getElementById|getElementsBy|closest\s*\(/.test(nearby);
    const collectionLookup = /\.find\s*\(|\[[^\]]+\]/.test(sourceLine);
    const timing = isPromise || /setTimeout|setInterval|fetch\s*\(|await\s+|then\s*\(/.test(nearby);
    return {
      category: timing ? "Async timing / missing value" : "Missing value",
      confidence: domLookup || collectionLookup ? "High confidence" : "Likely",
      explanation: domLookup
        ? `A DOM lookup near this line most likely returned ${valueType}, so the code cannot ${propertyAction} "${property}". The selector may not match, or the script may run before the element exists.`
        : collectionLookup
          ? `A lookup near this line most likely returned ${valueType} because no matching item or index exists, then the code tried to ${propertyAction} "${property}".`
          : timing
            ? `The value is still ${valueType} when asynchronous code reaches this line, so the code tries to ${propertyAction} "${property}" before the expected data is ready.`
            : `The value used for ".${property}" is ${valueType}, which means an earlier lookup, assignment, or function result did not produce the expected object.`,
      fix: domLookup
        ? `Verify the selector, run after DOMContentLoaded or use defer, and guard the result before trying to ${propertyAction} ".${property}".`
        : timing
          ? `Await the operation that creates the value, handle its failure path, and check the value before trying to ${propertyAction} ".${property}".`
          : `Trace the value immediately before this line, handle the missing case, and only ${propertyAction} ".${property}" after confirming the object exists.`,
    };
  }

  if (/is not a function/i.test(message)) {
    const calledValue = message.match(/([^\s]+) is not a function/i)?.[1] || "The called value";
    const arrayMethod = /\.(map|filter|reduce|forEach|find|some|every)\s*\(/.test(sourceLine);
    return {
      category: "Wrong value type",
      confidence: "Likely",
      explanation: arrayMethod
        ? `An array method is called here, but the value at runtime is not an array or its method was overwritten.`
        : `${calledValue} is being called with parentheses, but its current runtime value is not callable. It may have been overwritten, misspelled, or read from the wrong object.`,
      fix: arrayMethod
        ? `Confirm the value with Array.isArray(...), normalize non-array input, and only call the array method on an array.`
        : `Inspect typeof ${calledValue}, verify the method name and receiver, and make sure no earlier assignment replaced the function.`,
    };
  }

  if (
    /cannot convert|cannot mix bigint|invalid time value|cannot create property|cannot assign to read only|symbol.*convert|bigint/.test(lower) ||
    (/typeerror/i.test(errorName) && /\+|==|===|number\s*\(|string\s*\(/.test(sourceLine))
  ) {
    return {
      category: "Type coercion",
      confidence: "Likely",
      explanation: "This operation received a different value type than it supports, so JavaScript could not safely convert or combine the operands.",
      fix: "Inspect each operand with typeof, convert deliberately with Number(...), String(...), or BigInt(...), and validate the result before this operation.",
    };
  }

  if (isPromise || /uncaught \(in promise\)|failed to fetch|networkerror|aborterror/.test(lower)) {
    return {
      category: "Asynchronous operation",
      confidence: "Likely",
      explanation: "A promise rejected without a matching error handler. The failure may come from a network request, an awaited operation, or code that ran before its dependency was ready.",
      fix: "Wrap the awaited operation in try/catch or add .catch(...), check response.ok for fetch calls, and handle loading and failure states explicitly.",
    };
  }

  if (errorName === "RangeError" || /maximum call stack|out of range|invalid array length/.test(lower)) {
    return {
      category: "Range / recursion",
      confidence: "Likely",
      explanation: /maximum call stack/.test(lower)
        ? "A function is repeatedly calling itself without reaching a stopping condition."
        : "A number, index, length, or recursive operation exceeded the range JavaScript accepts.",
      fix: /maximum call stack/.test(lower)
        ? "Add or correct the recursion base case and verify that each call moves toward it."
        : "Validate the value before using it as a length, index, or numeric argument.",
    };
  }

  return {
    category: "Runtime state",
    confidence: "Possible cause",
    explanation: sourceLine
      ? "The program reached this source line with runtime state that violates the operation shown. The original stack identifies the call path, but the exact invalid value must be inspected."
      : "The program failed at runtime, but the source file or line could not be mapped confidently enough for a narrower diagnosis.",
    fix: sourceLine
      ? "Inspect the values used on this line and the preceding stack frame, then handle the unexpected state before repeating the operation."
      : "Open the original stack trace below, locate the first project-owned frame, and inspect the values entering that function.",
  };
}

function renderRuntimeDiagnostic(payload, rawError) {
  if (!consoleOutput) return;
  const frames = parseRuntimeStackFrames(payload.stack);
  const frameWithProjectFile = frames.find((frame) => resolveRuntimeDiagnosticFile(frame.source));
  const syntaxLocation = String(payload.errorName || "") === "SyntaxError"
    ? findRuntimeSyntaxSourceLocation()
    : null;
  const fileName = syntaxLocation?.fileName ||
    resolveRuntimeDiagnosticFile(payload.fileName)?.name ||
    resolveRuntimeDiagnosticFile(frameWithProjectFile?.source)?.name ||
    String(payload.fileName || "Preview");
  const line = Math.max(1, Number(syntaxLocation?.line || payload.line || frameWithProjectFile?.line || 1));
  const col = Math.max(1, Number(syntaxLocation?.col || payload.col || frameWithProjectFile?.col || 1));
  const repeatKey = [payload.errorName, payload.message, fileName, line, col].join("|");
  const recent = runtimeDiagnosticRecent.get(repeatKey);
  if (recent && Date.now() - recent.at < 1500 && recent.node?.isConnected) {
    recent.at = Date.now();
    recent.count += 1;
    const repeat = recent.node.querySelector(".codx-runtime-repeat") || document.createElement("span");
    repeat.className = "codx-runtime-repeat";
    repeat.textContent = `Repeated ${recent.count}×`;
    if (!repeat.parentNode) recent.node.querySelector(".codx-runtime-diagnostic-header")?.appendChild(repeat);
    const stored = runtimeDiagnosticRawErrors.get(recent.diagnosticId);
    if (stored) {
      stored.error = rawError || stored.error;
      stored.payload = { ...payload };
    }
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
    return;
  }
  const context = getRuntimeSourceContext(fileName, line, col);
  const diagnosis = inferRuntimeRootCause(payload, context);
  const diagnosticId = `runtime-${Date.now().toString(36)}-${(++runtimeDiagnosticSequence).toString(36)}`;
  runtimeDiagnosticRawErrors.set(diagnosticId, { error: rawError || null, payload: { ...payload }, diagnosis, context });
  while (runtimeDiagnosticRawErrors.size > 100) {
    runtimeDiagnosticRawErrors.delete(runtimeDiagnosticRawErrors.keys().next().value);
  }

  const root = document.createElement("div");
  root.className = `error codx-runtime-diagnostic${context ? " has-location" : ""}`;
  root.dataset.runtimeDiagnosticId = diagnosticId;
  if (context) {
    root.tabIndex = 0;
    root.setAttribute("role", "button");
  }
  root.title = context ? `Open ${context.fileName} at line ${context.line}, column ${context.col}` : "Runtime diagnostic";

  const header = document.createElement("div");
  header.className = "codx-runtime-diagnostic-header";
  const category = document.createElement("span");
  category.className = "codx-runtime-category";
  category.textContent = diagnosis.category;
  const confidence = document.createElement("span");
  confidence.className = "codx-runtime-confidence";
  confidence.textContent = diagnosis.confidence;
  const location = document.createElement("span");
  location.className = "codx-runtime-location";
  location.textContent = `[${fileName}] line ${line}:${col}`;
  header.append(category, confidence, location);

  const title = document.createElement("div");
  title.className = "codx-runtime-error-title";
  title.textContent = `${payload.errorName || "Error"}: ${payload.message || "Unknown runtime error"}`;

  const why = document.createElement("div");
  why.className = "codx-runtime-why";
  const whyLabel = document.createElement("strong");
  whyLabel.textContent = "Likely root cause";
  const whyText = document.createElement("span");
  whyText.textContent = diagnosis.explanation;
  why.append(whyLabel, whyText);

  root.append(header, title, why);

  if (context?.excerpt?.length) {
    const source = document.createElement("pre");
    source.className = "codx-runtime-source";
    context.excerpt.forEach((entry) => {
      const row = document.createElement("span");
      if (entry.active) row.className = "active";
      row.textContent = `${String(entry.number).padStart(4, " ")} | ${entry.text || " "}`;
      source.appendChild(row);
    });
    root.appendChild(source);
  }

  const fix = document.createElement("div");
  fix.className = "codx-runtime-fix";
  const fixLabel = document.createElement("strong");
  fixLabel.textContent = "Suggested remediation";
  const fixText = document.createElement("span");
  fixText.textContent = diagnosis.fix;
  fix.append(fixLabel, fixText);
  root.appendChild(fix);

  const rawDetails = document.createElement("details");
  rawDetails.className = "codx-runtime-raw";
  const rawSummary = document.createElement("summary");
  rawSummary.textContent = "Original error and full stack trace";
  const rawOutput = document.createElement("pre");
  rawOutput.textContent = String(payload.stack || `${payload.errorName || "Error"}: ${payload.message || ""}`);
  const rawAccess = document.createElement("code");
  rawAccess.textContent = `Raw object: window.__codxGetRawRuntimeError("${diagnosticId}")`;
  rawDetails.append(rawSummary, rawOutput, rawAccess);
  rawDetails.addEventListener("click", (event) => event.stopPropagation());
  rawDetails.addEventListener("keydown", (event) => event.stopPropagation());
  root.appendChild(rawDetails);

  if (context) {
    const openLocation = () => jumpToEditorLocation(context.fileName, context.line, context.col);
    root.addEventListener("click", (event) => {
      if (event.target.closest("details")) return;
      openLocation();
    });
    root.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      if (event.target.closest("details")) return;
      event.preventDefault();
      openLocation();
    });
  }

  consoleOutput.appendChild(root);
  runtimeDiagnosticRecent.set(repeatKey, {
    at: Date.now(),
    count: 1,
    diagnosticId,
    node: root,
  });
  while (runtimeDiagnosticRecent.size > 100) {
    runtimeDiagnosticRecent.delete(runtimeDiagnosticRecent.keys().next().value);
  }
  consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

window.__codxReportRuntimeDiagnostic = (payload, rawError = null) => {
  try {
    renderRuntimeDiagnostic(payload || {}, rawError);
  } catch (diagnosticError) {
    appendConsoleMessage(
      "error",
      `Error: [${payload?.fileName || "Preview"}] line ${payload?.line || 1}:${payload?.col || 1} - ${payload?.message || "Unknown runtime error"} | Fix: Review the original stack trace.`,
    );
  }
};

window.__codxGetRawRuntimeError = (diagnosticId) =>
  runtimeDiagnosticRawErrors.get(String(diagnosticId || ""))?.error || null;

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
  runtimeDiagnosticRawErrors.clear();
  runtimeDiagnosticRecent.clear();
  resetFileErrorCounts();
  renderFileList();
  showNotification("Console cleared", "info");
}

function debouncedUpdatePreview() {
  clearTimeout(autoRunTimeout);
  const activeContent = String(activeFile?.content || "");
  if (isLargeEditorContent(activeContent)) return;
  autoRunTimeout = setTimeout(updatePreview, 24);
}

function scheduleSessionUpdate() {
  if (activeSessionId && !isApplyingRemoteState) {
    collabPendingLocalSync = true;
    collabLocalSyncRevision += 1;
  }
  clearTimeout(sessionSyncTimeout);
  const syncInterval = isLargeEditorContent(activeFile?.content || "") ? 700 : 72;
  const now = performance.now();
  const elapsed = now - lastSessionSyncAt;
  if (elapsed >= syncInterval) {
    sessionSyncTimeout = null;
    lastSessionSyncAt = now;
    emitSessionUpdate();
    return;
  }
  sessionSyncTimeout = setTimeout(() => {
    sessionSyncTimeout = null;
    lastSessionSyncAt = performance.now();
    emitSessionUpdate();
  }, syncInterval - elapsed);
}

function renderFileList(options = {}) {
  const normalizedLegacyNames = options.skipNameNormalization
    ? false
    : normalizeProjectFileNamesInPlace(projectFiles);
  if (normalizedLegacyNames) {
    scheduleProjectAutosave();
    if (!fileNameMigrationNoticeShown) {
      fileNameMigrationNoticeShown = true;
      showNotification("Spaces in file names were replaced with dashes.", "info");
    }
  }
  __codxRescanProjectSuggestionCacheSoon();
  const fileListFragment = document.createDocumentFragment();
  const canManageFileVisibility = Boolean(activeSessionId && canUseCoHostTools());
  const visibilityParticipants = canManageFileVisibility
    ? getModeratableCollabParticipants()
    : [];
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

    let visibilityBtn = null;
    if (canManageFileVisibility) {
      const hiddenCount = visibilityParticipants.filter((participant) =>
        participantCannotSeeFile(participant, file.name),
      ).length;
      visibilityBtn = document.createElement("button");
      visibilityBtn.className = `file-visibility-action${hiddenCount ? " has-hidden-users" : ""}`;
      visibilityBtn.dataset.file = file.name;
      visibilityBtn.setAttribute("aria-label", `Manage visibility for ${file.name}`);
      visibilityBtn.title = hiddenCount
        ? `${hiddenCount} participant(s) cannot see this file`
        : "Everyone can see this file";
      const eyeIcon = document.createElement("i");
      eyeIcon.className = hiddenCount ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
      visibilityBtn.appendChild(eyeIcon);
    }

    fileItem.appendChild(nameSpan);
    if (visibilityBtn) fileItem.appendChild(visibilityBtn);
    fileItem.appendChild(renameBtn);
    fileItem.appendChild(deleteBtn);

    fileItem.addEventListener("click", (e) => {
      if (e.target.closest(".delete-file") || e.target.closest(".rename-file") || e.target.closest(".file-visibility-action"))
        return;
      switchFile(file.name);
      if (isCompactWorkspaceLayout()) setMobileWorkspacePane("editor", { focus: true });
    });
    renameBtn.addEventListener("click", () => renameFile(file.name));
    deleteBtn.addEventListener("click", () => deleteFile(file.name));
    if (visibilityBtn) {
      visibilityBtn.addEventListener("click", () => showFileVisibilityEditor(file.name, "quick", true));
    }
    fileListFragment.appendChild(fileItem);
  });
  fileList.replaceChildren(fileListFragment);
  enforceCollabPermissionsUI();
}

function switchFile(fileName) {
  if (pairSelectionHighlight) pairSelectionHighlight.hidden = true;
  const previousPreviewTarget = { ...currentPreviewTarget };
  const normalizedFileName = String(fileName || "").trim().toLowerCase();
  projectFiles.forEach((file) => {
    file.active = String(file.name || "").trim().toLowerCase() === normalizedFileName;
    if (file.active) {
      activeFile = file;
    }
  });
  displayActiveFileInEditor();
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
  emitPairPresenceSoon(true);
}

async function createNewFile() {
  if (activeSessionId && isReadOnlyParticipant() && collabPermissions.disableNewFile) {
    showNotification("The host disabled creating new files for participants.", "error");
    return;
  }
  const dialog = await showAppPrompt(
    "NEW FILE",
    `Enter a file name. Supported extensions: ${editableTextExtensions.map((extension) => `.${extension}`).join(", ")}. Spaces become dashes; underscores and dashes are allowed.`,
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

  const cursorPos = getHtmlStarterCursorPosition(newFile.content);
  displayActiveFileInEditor({ cursorPosition: cursorPos, focus: true });
  hasUnsavedChanges = true;
  updateProjectStatusUI();
  renderFileList();
  scheduleProjectAutosave();
  if (autoRunCheckbox.checked) updatePreview();
  syncProjectWithSession();
  document.title = "CodX Editor";
  showNotification(`File ${trimmedName} created`, "success");
}

async function handleCreateNewFileRequest() {
  if (activeSessionId && isReadOnlyParticipant() && collabPermissions.disableNewFile) {
    showNotification("The host disabled creating new files for participants.", "error");
    return;
  }
  if (!hasUnsavedChanges) {
    await createNewFile();
    return;
  }
  const decision = await showUnsavedNewFileDialog();
  if (!decision?.ok) return;
  if (decision.action === "save") {
    const saved = await saveCurrentProjectBeforeOpeningAnother();
    if (!saved) return;
  } else if (decision.action !== "continue") {
    return;
  }
  await createNewFile();
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
    const deletedFile = projectFiles.find(
      (file) => String(file.name || "").trim().toLowerCase() === normalizedFileName,
    );
    if (deletedFile?.mediaObjectUrl) {
      URL.revokeObjectURL(deletedFile.mediaObjectUrl);
      setRuntimeMediaProperty(deletedFile, "mediaObjectUrl", "");
    }
    projectFiles = projectFiles.filter(
      (file) => String(file.name || "").trim().toLowerCase() !== normalizedFileName,
    );
    if (
      activeFile &&
      String(activeFile.name || "").trim().toLowerCase() === normalizedFileName
    ) {
      activeFile = projectFiles[0];
      activeFile.active = true;
      displayActiveFileInEditor();
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
      if (editorFontWeightInput) {
        editorFontWeightInput.value = normalizeEditorFontWeight(settings.fontWeight || defaultSettings.fontWeight);
      }
      if (editorFontItalicInput) editorFontItalicInput.checked = Boolean(settings.fontItalic);
      if (editorFontLetterSpacingInput) {
        editorFontLetterSpacingInput.value = settings.fontLetterSpacing ?? defaultSettings.fontLetterSpacing;
      }
      if (editorFontLineHeightInput) {
        editorFontLineHeightInput.value = settings.fontLineHeight ?? defaultSettings.fontLineHeight;
      }
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
  if (editorFontWeightInput) editorFontWeightInput.value = defaultSettings.fontWeight;
  if (editorFontItalicInput) editorFontItalicInput.checked = defaultSettings.fontItalic;
  if (editorFontLetterSpacingInput) editorFontLetterSpacingInput.value = defaultSettings.fontLetterSpacing;
  if (editorFontLineHeightInput) editorFontLineHeightInput.value = defaultSettings.fontLineHeight;
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

function normalizeEditorFontWeight(value) {
  const numeric = Math.round(Number(value) / 100) * 100;
  return String(Math.min(900, Math.max(100, Number.isFinite(numeric) ? numeric : 400)));
}

function getEditorFontWeightLabel(weight) {
  return ({
    100: "Thin",
    200: "Extra Light",
    300: "Light",
    400: "Normal",
    500: "Medium",
    600: "Semi Bold",
    700: "Bold",
    800: "Extra Bold",
    900: "Black",
  })[Number(weight)] || "Normal";
}

function updateGoogleFontCustomizationUI(cssUrl = extractGoogleFontsCssUrl(editorFontEmbedInput.value)) {
  const hasGoogleEmbed = Boolean(cssUrl);
  if (googleFontCustomization) googleFontCustomization.hidden = !hasGoogleEmbed;
  if (googleFontDetectedName) {
    googleFontDetectedName.textContent = hasGoogleEmbed
      ? `${getGoogleFontFamilyName(cssUrl) || "Google Font"} detected`
      : "Font detected";
  }
  const weight = normalizeEditorFontWeight(editorFontWeightInput?.value || defaultSettings.fontWeight);
  if (editorFontWeightInput) editorFontWeightInput.value = weight;
  if (editorFontWeightValue) editorFontWeightValue.textContent = `${weight} · ${getEditorFontWeightLabel(weight)}`;
  if (editorFontLetterSpacingValue) {
    editorFontLetterSpacingValue.textContent = `${Number(editorFontLetterSpacingInput?.value || 0).toFixed(1).replace(".0", "")}px`;
  }
  if (editorFontLineHeightValue) {
    editorFontLineHeightValue.textContent = Number(editorFontLineHeightInput?.value || 1.5).toFixed(1);
  }
}

function getCustomizedGoogleFontsCssUrl(cssUrl) {
  if (!cssUrl) return "";
  try {
    const url = new URL(cssUrl);
    const families = url.searchParams.getAll("family");
    if (!families.length) return cssUrl;
    const firstFamilyName = decodeURIComponent(families[0]).replace(/\+/g, " ").split(":")[0].trim();
    if (!firstFamilyName) return cssUrl;
    const weight = normalizeEditorFontWeight(editorFontWeightInput?.value || defaultSettings.fontWeight);
    url.searchParams.delete("family");
    url.searchParams.append("family", `${firstFamilyName}:wght@${weight}`);
    families.slice(1).forEach((family) => url.searchParams.append("family", family));
    if (!url.searchParams.has("display")) url.searchParams.set("display", "swap");
    return url
      .toString()
      .replace(/%3A/gi, ":")
      .replace(/%40/gi, "@")
      .replace(/%2C/gi, ",")
      .replace(/%3B/gi, ";");
  } catch {
    return cssUrl;
  }
}

function applyGoogleFontImport(cssUrl) {
  cssUrl = getCustomizedGoogleFontsCssUrl(cssUrl);
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
  const cssUrl = extractGoogleFontsCssUrl(editorFontEmbedInput.value);
  const hasGoogleEmbed = Boolean(cssUrl);
  editorFontFamilySelect.disabled = hasGoogleEmbed;
  editorFontFamilySelect.title = hasGoogleEmbed
    ? "Disabled because a Google Fonts embed link is active."
    : "";
  updateGoogleFontCustomizationUI(cssUrl);
}

function updatePreviewBox() {
  const useGoogleCustomization = Boolean(extractGoogleFontsCssUrl(editorFontEmbedInput.value));
  const selectedWeight = useGoogleCustomization ? editorFontWeightInput?.value || defaultSettings.fontWeight : defaultSettings.fontWeight;
  const selectedItalic = useGoogleCustomization && Boolean(editorFontItalicInput?.checked);
  const selectedSpacing = useGoogleCustomization ? editorFontLetterSpacingInput?.value || defaultSettings.fontLetterSpacing : defaultSettings.fontLetterSpacing;
  const selectedLineHeight = useGoogleCustomization ? editorFontLineHeightInput?.value || defaultSettings.fontLineHeight : defaultSettings.fontLineHeight;
  settingsPreview.style.backgroundColor = editorBgColorInput.value;
  settingsPreview.style.borderColor = themeColorInput.value;
  settingsPreview.style.fontSize = editorTextSizeInput.value + "px";
  settingsPreview.style.fontFamily = getEffectiveEditorFontFamily();
  settingsPreview.style.fontWeight = selectedWeight;
  settingsPreview.style.fontStyle = selectedItalic ? "italic" : "normal";
  settingsPreview.style.letterSpacing = `${selectedSpacing}px`;
  settingsPreview.style.lineHeight = selectedLineHeight;
  settingsPreviewCode.style.fontSize = editorTextSizeInput.value + "px";
  settingsPreviewCode.style.fontFamily = getEffectiveEditorFontFamily();
  settingsPreviewCode.style.fontWeight = selectedWeight;
  settingsPreviewCode.style.fontStyle = selectedItalic ? "italic" : "normal";
  settingsPreviewCode.style.lineHeight = selectedLineHeight;
  settingsPreviewCode.style.letterSpacing = `${selectedSpacing}px`;
  settingsPreviewCode.style.tabSize = "4";
  settingsPreviewCode.innerHTML = highlightJs(settingsPreviewSampleCode);
}

function applySettingsToEditors() {
  const editor = document.getElementById("activeEditor");
  if (!editor) return;
  const editorWrapper = editor.closest(".editor-wrapper");
  const selectedBg = editorBgColorInput.value || defaultSettings.bgColor;
  const useGoogleCustomization = Boolean(extractGoogleFontsCssUrl(editorFontEmbedInput.value));
  const selectedWeight = useGoogleCustomization ? editorFontWeightInput?.value || defaultSettings.fontWeight : defaultSettings.fontWeight;
  const selectedItalic = useGoogleCustomization && Boolean(editorFontItalicInput?.checked);
  const selectedSpacing = useGoogleCustomization ? editorFontLetterSpacingInput?.value || defaultSettings.fontLetterSpacing : defaultSettings.fontLetterSpacing;
  const selectedLineHeight = useGoogleCustomization ? editorFontLineHeightInput?.value || defaultSettings.fontLineHeight : defaultSettings.fontLineHeight;

  editor.style.fontSize = editorTextSizeInput.value + "px";
  editor.style.fontFamily = getEffectiveEditorFontFamily();
  editor.style.fontWeight = selectedWeight;
  editor.style.fontStyle = selectedItalic ? "italic" : "normal";
  editor.style.letterSpacing = `${selectedSpacing}px`;
  editor.style.lineHeight = selectedLineHeight;
  editor.style.backgroundColor = "transparent";
  if (editorWrapper) {
    editorWrapper.style.backgroundColor = selectedBg;
  }
  if (highlightLayer) {
    highlightLayer.style.backgroundColor = selectedBg;
  }
  syncSyntaxLayerStyle(editor);
  renderLineNumberWindow(editor, countTextLines(editor.value), true);
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

if (editorFontWeightInput) {
  editorFontWeightInput.addEventListener("input", () => {
    updateGoogleFontCustomizationUI();
    updatePreviewBox();
  });
  editorFontWeightInput.addEventListener("change", () => {
    applyGoogleFontImport(extractGoogleFontsCssUrl(editorFontEmbedInput.value));
  });
}

if (editorFontItalicInput) {
  editorFontItalicInput.addEventListener("change", () => {
    updateGoogleFontCustomizationUI();
    updatePreviewBox();
  });
}

if (editorFontLetterSpacingInput) {
  editorFontLetterSpacingInput.addEventListener("input", () => {
    updateGoogleFontCustomizationUI();
    updatePreviewBox();
  });
}

if (editorFontLineHeightInput) {
  editorFontLineHeightInput.addEventListener("input", () => {
    updateGoogleFontCustomizationUI();
    updatePreviewBox();
  });
}

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
  const rawFontEmbed = editorFontEmbedInput.value.trim();
  const cssUrl = extractGoogleFontsCssUrl(rawFontEmbed);
  if (rawFontEmbed && !cssUrl) {
    showNotification("Invalid Google Fonts embed link. Paste a valid fonts.googleapis.com URL.", "error");
    return;
  }

  applyGoogleFontImport(cssUrl);
  updateFontControlsState();

  const settings = {
    bgColor: editorBgColorInput.value,
    themeColor: themeColorInput.value,
    textSize: editorTextSizeInput.value,
    fontFamily: editorFontFamilySelect.value,
    fontEmbed: rawFontEmbed,
    fontWeight: normalizeEditorFontWeight(editorFontWeightInput?.value || defaultSettings.fontWeight),
    fontItalic: Boolean(editorFontItalicInput?.checked),
    fontLetterSpacing: editorFontLetterSpacingInput?.value || defaultSettings.fontLetterSpacing,
    fontLineHeight: editorFontLineHeightInput?.value || defaultSettings.fontLineHeight,
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
autoRunCheckbox?.addEventListener("change", persistWorkspaceSettings);

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
  persistWorkspaceSettings();
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
  const match = stack.match(/<anonymous>:(\d+):(\d+)/);
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
    const location = entry.location?.fileName
      ? { ...entry.location }
      : extractErrorLocationFromConsoleMessage(entry.message);
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

const HTML_VOID_ELEMENTS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta",
  "param", "source", "track", "wbr",
]);
const HTML_OPTIONAL_END_ELEMENTS = new Set([
  "html", "head", "body", "li", "dt", "dd", "p", "rt", "rp", "optgroup",
  "option", "colgroup", "thead", "tbody", "tfoot", "tr", "td", "th",
]);
const HTML_P_IMPLICIT_CLOSE_STARTERS = new Set([
  "address", "article", "aside", "blockquote", "details", "dialog", "div", "dl",
  "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4",
  "h5", "h6", "header", "hgroup", "hr", "main", "menu", "nav", "ol", "p", "pre",
  "search", "section", "table", "ul",
]);

function shouldImplicitlyCloseHtmlTag(openTag, nextTag) {
  if (openTag === "li" && nextTag === "li") return true;
  if ((openTag === "dt" || openTag === "dd") && (nextTag === "dt" || nextTag === "dd")) return true;
  if (openTag === "p" && HTML_P_IMPLICIT_CLOSE_STARTERS.has(nextTag)) return true;
  if (openTag === "option" && (nextTag === "option" || nextTag === "optgroup")) return true;
  if (openTag === "optgroup" && nextTag === "optgroup") return true;
  if ((openTag === "thead" || openTag === "tbody" || openTag === "tfoot") &&
      (nextTag === "tbody" || nextTag === "tfoot")) return true;
  if (openTag === "tr" && nextTag === "tr") return true;
  return (openTag === "td" || openTag === "th") && (nextTag === "td" || nextTag === "th");
}

function createHtmlDiagnosticLocation(fileName, htmlText, index, length = 1) {
  const position = getLineAndColumnFromIndex(htmlText, index);
  return {
    fileName,
    line: position.line,
    col: position.col,
    length: Math.max(1, Number(length) || 1),
  };
}

function scanHtmlTagTokens(htmlText, reportMalformed) {
  const source = String(htmlText || "");
  const lowerSource = source.toLowerCase();
  const tokens = [];
  let cursor = 0;

  while (cursor < source.length) {
    const start = source.indexOf("<", cursor);
    if (start === -1) break;

    const possibleTag = source.slice(start + 1).match(/^\s*([/!?A-Za-z])/);
    if (!possibleTag) {
      cursor = start + 1;
      continue;
    }

    if (source.startsWith("<!--", start)) {
      const commentEnd = source.indexOf("-->", start + 4);
      if (commentEnd === -1) {
        reportMalformed("Unclosed HTML comment.", start, 4, "Close the comment with -->.");
        break;
      }
      cursor = commentEnd + 3;
      continue;
    }

    if (source.startsWith("<!", start) || source.startsWith("<?", start)) {
      const declarationEnd = source.indexOf(">", start + 2);
      if (declarationEnd === -1) {
        reportMalformed("Unclosed HTML declaration.", start, 2, "Add the missing > character.");
        break;
      }
      cursor = declarationEnd + 1;
      continue;
    }

    let quote = "";
    let nestedTagStart = -1;
    let end = -1;
    for (let index = start + 1; index < source.length; index++) {
      const char = source[index];
      if (quote) {
        if (char === quote) quote = "";
        continue;
      }
      if (char === '"' || char === "'") {
        quote = char;
      } else if (char === "<") {
        nestedTagStart = index;
        reportMalformed(
          "A new tag starts before the previous tag was closed.",
          index,
          1,
          "Add > before starting the next tag.",
        );
        break;
      } else if (char === ">") {
        end = index;
        break;
      }
    }

    if (nestedTagStart !== -1) {
      cursor = nestedTagStart;
      continue;
    }

    if (end === -1) {
      const lineEnd = source.indexOf("\n", start);
      reportMalformed(
        quote ? "Unclosed quote inside an HTML tag." : "HTML tag is missing its closing > character.",
        start,
        Math.max(1, (lineEnd === -1 ? source.length : lineEnd) - start),
        quote ? `Add the matching ${quote} quote and close the tag.` : "Add > to finish the tag.",
      );
      break;
    }

    const raw = source.slice(start, end + 1);
    const tagMatch = raw.match(/^<\s*(\/?)\s*([A-Za-z][A-Za-z0-9:-]*)/);
    if (!tagMatch) {
      if (/^<\s*\//.test(raw) || /^<\s*\d+[A-Za-z]/.test(raw)) {
        reportMalformed("Malformed HTML tag.", start, raw.length, "Use a valid tag name after < or </.");
      }
      cursor = start + 1;
      continue;
    }

    const name = tagMatch[2].toLowerCase();
    const nameStartOffset = tagMatch[0].lastIndexOf(tagMatch[2]);
    const nameStart = start + nameStartOffset;
    const nameEnd = nameStart + tagMatch[2].length;
    const isClosing = Boolean(tagMatch[1]);
    const selfClosing = /\/\s*>$/.test(raw);
    const token = {
      raw,
      name,
      start,
      end: end + 1,
      nameStart,
      nameEnd,
      isClosing,
      selfClosing,
      attributes: [],
    };
    if (!isClosing) {
      token.attributes = parseHtmlAttributes(token, source, reportMalformed);
    }
    tokens.push(token);
    cursor = end + 1;

    if (!isClosing && !selfClosing && ["script", "style", "textarea", "title"].includes(name)) {
      const rawClose = lowerSource.indexOf(`</${name}`, cursor);
      cursor = rawClose === -1 ? source.length : rawClose;
    }
  }
  return tokens;
}

function parseHtmlAttributes(token, htmlText, reportMalformed) {
  const source = String(htmlText || "");
  const attributes = [];
  const limit = token.end - 1;
  let cursor = token.nameEnd;

  while (cursor < limit) {
    while (cursor < limit && /\s/.test(source[cursor])) cursor++;
    if (cursor >= limit) break;
    if (source[cursor] === "/") {
      cursor++;
      while (cursor < limit && /\s/.test(source[cursor])) cursor++;
      if (cursor < limit) {
        reportMalformed(
          "Unexpected content after the self-closing slash.",
          cursor,
          Math.max(1, limit - cursor),
          "Move the slash to the end of the opening tag.",
        );
      }
      break;
    }

    const nameStart = cursor;
    while (cursor < limit && !/[\s=/>]/.test(source[cursor])) cursor++;
    if (cursor === nameStart) {
      reportMalformed(
        "Malformed HTML attribute.",
        cursor,
        1,
        "Use an attribute name followed by an optional value.",
      );
      cursor++;
      continue;
    }

    const rawName = source.slice(nameStart, cursor);
    while (cursor < limit && /\s/.test(source[cursor])) cursor++;
    let value = null;
    let valueStart = -1;
    let valueEnd = -1;
    let quote = "";

    if (source[cursor] === "=") {
      cursor++;
      while (cursor < limit && /\s/.test(source[cursor])) cursor++;
      valueStart = cursor;
      if (source[cursor] === '"' || source[cursor] === "'") {
        quote = source[cursor];
        cursor++;
        const contentStart = cursor;
        while (cursor < limit && source[cursor] !== quote) cursor++;
        if (cursor >= limit) {
          reportMalformed(
            `Unclosed ${quote} quote for the "${rawName}" attribute.`,
            valueStart,
            Math.max(1, limit - valueStart),
            `Add the matching ${quote} quote.`,
          );
          value = source.slice(contentStart, limit);
          valueEnd = limit;
        } else {
          value = source.slice(contentStart, cursor);
          cursor++;
          valueEnd = cursor;
        }
      } else {
        const contentStart = cursor;
        while (cursor < limit && !/[\s>]/.test(source[cursor])) cursor++;
        value = source.slice(contentStart, cursor);
        valueEnd = cursor;
        if (!value) {
          reportMalformed(
            `The "${rawName}" attribute is missing a value.`,
            Math.max(nameStart, cursor - 1),
            1,
            "Add a quoted or unquoted value after =.",
          );
        } else {
          const invalidOffset = value.search(/["'<=`]/);
          if (invalidOffset !== -1) {
            reportMalformed(
              `Invalid character in the unquoted "${rawName}" attribute value.`,
              contentStart + invalidOffset,
              1,
              "Wrap the attribute value in matching quotes.",
            );
          }
        }
      }
    }

    attributes.push({
      name: rawName.toLowerCase(),
      rawName,
      nameStart,
      nameEnd: nameStart + rawName.length,
      value,
      valueStart,
      valueEnd,
      quote,
    });
  }

  return attributes;
}

function reportDuplicateHtmlAttributes(token, htmlText, fileName, emitDiagnostic) {
  if (token.isClosing) return;
  const seen = new Set();
  (token.attributes || []).forEach((attribute) => {
    const attributeName = String(attribute.name || "").toLowerCase();
    if (!attributeName) return;
    if (seen.has(attributeName)) {
      const location = createHtmlDiagnosticLocation(
        fileName,
        htmlText,
        attribute.nameStart,
        attribute.rawName.length,
      );
      emitDiagnostic(
        "error",
        `[${fileName}] HTML issue at line ${location.line}:${location.col}: duplicate "${attributeName}" attribute on <${token.name}>. Fix: Remove the repeated attribute.`,
        location,
      );
    }
    seen.add(attributeName);
  });
}

function analyzeHtmlTagStructure(htmlText, fileName, emitDiagnostic) {
  const source = String(htmlText || "");
  const reportMalformed = (problem, index, length, fix) => {
    const location = createHtmlDiagnosticLocation(fileName, source, index, length);
    emitDiagnostic(
      "error",
      `[${fileName}] HTML issue at line ${location.line}:${location.col}: ${problem} Fix: ${fix}`,
      location,
    );
  };
  const tokens = scanHtmlTagTokens(source, reportMalformed);
  const stack = [];

  tokens.forEach((token) => {
    const location = createHtmlDiagnosticLocation(
      fileName,
      source,
      token.nameStart,
      token.nameEnd - token.nameStart,
    );
    if (token.isClosing) {
      if (HTML_VOID_ELEMENTS.has(token.name)) {
        emitDiagnostic(
          "error",
          `[${fileName}] HTML issue at line ${location.line}:${location.col}: void element <${token.name}> must not have a closing tag. Fix: Remove </${token.name}>.`,
          location,
        );
        return;
      }

      const matchingIndex = stack.map((entry) => entry.name).lastIndexOf(token.name);
      if (matchingIndex === -1) {
        const expected = stack[stack.length - 1];
        const likelyTypo = expected && getLevenshteinDistance(token.name, expected.name) <= 2;
        emitDiagnostic(
          "error",
          `[${fileName}] HTML issue at line ${location.line}:${location.col}: ${likelyTypo ? `mismatched closing tag </${token.name}>` : `unexpected closing tag </${token.name}>`}. Fix: ${likelyTypo ? `Use </${expected.name}> to close <${expected.name}>.` : `Remove </${token.name}> or add its opening tag.`}`,
          location,
        );
        if (likelyTypo) stack.pop();
        return;
      }

      const intervening = stack.slice(matchingIndex + 1);
      intervening.forEach((entry) => {
        if (HTML_OPTIONAL_END_ELEMENTS.has(entry.name)) return;
        const openLocation = createHtmlDiagnosticLocation(
          fileName,
          source,
          entry.token.nameStart,
          entry.token.nameEnd - entry.token.nameStart,
        );
        emitDiagnostic(
          "error",
          `[${fileName}] HTML issue at line ${openLocation.line}:${openLocation.col}: <${entry.name}> is not closed before </${token.name}>. Fix: Add </${entry.name}> before </${token.name}>.`,
          openLocation,
        );
      });
      stack.splice(matchingIndex);
      return;
    }

    reportDuplicateHtmlAttributes(token, source, fileName, emitDiagnostic);
    if (HTML_VOID_ELEMENTS.has(token.name) || token.selfClosing) return;
    while (stack.length && shouldImplicitlyCloseHtmlTag(stack[stack.length - 1].name, token.name)) {
      stack.pop();
    }
    stack.push({ name: token.name, token });
  });

  stack.forEach((entry) => {
    if (HTML_OPTIONAL_END_ELEMENTS.has(entry.name)) return;
    const location = createHtmlDiagnosticLocation(
      fileName,
      source,
      entry.token.nameStart,
      entry.token.nameEnd - entry.token.nameStart,
    );
    emitDiagnostic(
      "error",
      `[${fileName}] HTML issue at line ${location.line}:${location.col}: unclosed <${entry.name}> tag. Fix: Add a closing </${entry.name}> tag.`,
      location,
    );
  });
}

function maskJavaScriptForDiagnostics(code) {
  const source = String(code || "");
  const chars = source.split("");
  let state = "code";
  let quote = "";
  let regexCharacterClass = false;
  for (let index = 0; index < chars.length; index++) {
    const char = source[index];
    const next = source[index + 1];
    if (state === "line-comment") {
      if (char === "\n") state = "code";
      else chars[index] = " ";
      continue;
    }
    if (state === "block-comment") {
      chars[index] = char === "\n" ? "\n" : " ";
      if (char === "*" && next === "/") {
        chars[index + 1] = " ";
        index++;
        state = "code";
      }
      continue;
    }
    if (state === "string") {
      chars[index] = char === "\n" ? "\n" : " ";
      if (char === "\\") {
        if (index + 1 < chars.length) {
          chars[index + 1] = source[index + 1] === "\n" ? "\n" : " ";
          index++;
        }
      } else if (char === quote) {
        state = "code";
      }
      continue;
    }
    if (state === "regex") {
      chars[index] = char === "\n" ? "\n" : " ";
      if (char === "\\") {
        if (index + 1 < chars.length) {
          chars[index + 1] = source[index + 1] === "\n" ? "\n" : " ";
          index++;
        }
      } else if (char === "[") {
        regexCharacterClass = true;
      } else if (char === "]") {
        regexCharacterClass = false;
      } else if (char === "/" && !regexCharacterClass) {
        while (/[a-z]/i.test(source[index + 1] || "")) {
          chars[index + 1] = " ";
          index++;
        }
        state = "code";
      }
      continue;
    }
    if (char === "/" && next === "/") {
      chars[index] = chars[index + 1] = " ";
      index++;
      state = "line-comment";
      continue;
    }
    if (char === "/" && next === "*") {
      chars[index] = chars[index + 1] = " ";
      index++;
      state = "block-comment";
      continue;
    }
    if (char === "/") {
      const prefix = source.slice(0, index).trimEnd();
      const previous = prefix.slice(-1);
      const previousWord = prefix.match(/([A-Za-z_$][\w$]*)$/)?.[1] || "";
      const canStartRegex =
        !prefix ||
        /[=(,:;!&|?{}\[]/.test(previous) ||
        ["return", "case", "throw", "delete", "typeof", "void", "yield", "await"].includes(previousWord);
      if (canStartRegex) {
        chars[index] = " ";
        regexCharacterClass = false;
        state = "regex";
        continue;
      }
    }
    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      chars[index] = " ";
      state = "string";
    }
  }
  return chars.join("");
}

function analyzeJavaScriptSource(code, fileName, emitDiagnostic, options = {}) {
  const source = String(code || "");
  const masked = maskJavaScriptForDiagnostics(source);
  const lineOffset = Math.max(0, Number(options.lineOffset || 0));
  const firstLineColumnOffset = Math.max(0, Number(options.firstLineColumnOffset || 0));
  let issueCount = 0;
  const emitted = new Set();

  const report = (index, length, problem, fix) => {
    const local = getLineAndColumnFromIndex(source, index);
    const line = local.line + lineOffset;
    const col = local.col + (local.line === 1 ? firstLineColumnOffset : 0);
    const key = `${index}:${problem}`;
    if (emitted.has(key)) return;
    emitted.add(key);
    issueCount++;
    const location = { fileName, line, col, length: Math.max(1, Number(length) || 1) };
    emitDiagnostic(
      "error",
      `[${fileName}] JavaScript issue at line ${line}:${col}: ${problem} Fix: ${fix}`,
      location,
    );
  };

  const controlRegex = /\b(if|while|for|switch|catch|with)\s*\(/g;
  let controlMatch;
  while ((controlMatch = controlRegex.exec(masked)) !== null) {
    const headerStart = controlMatch.index;
    const blockStart = masked.indexOf("{", controlRegex.lastIndex);
    const semicolon = masked.indexOf(";", controlRegex.lastIndex);
    const searchEnd = blockStart !== -1 && (semicolon === -1 || blockStart < semicolon)
      ? blockStart
      : Math.min(masked.length, controlRegex.lastIndex + 500);
    const header = masked.slice(headerStart, searchEnd);
    const reversedRegex = /\b[A-Za-z_$][\w$]*(=>)(?=(?:\d|true\b|false\b|null\b|["']))/g;
    let reversed;
    while ((reversed = reversedRegex.exec(header)) !== null) {
      const operatorIndex = headerStart + reversed.index + reversed[0].indexOf("=>");
      report(
        operatorIndex,
        2,
        'reversed comparison operator "=>".',
        'Use ">=" for greater-than-or-equal comparisons.',
      );
    }
  }

  const tokenRegex = /===|!==|=>|==|!=|<=|>=|&&|\|\||\+\+|--|\*\*|[A-Za-z_$][\w$]*|(?:\d+\.?\d*|\.\d+)|[^\s]/g;
  const tokens = [];
  let tokenMatch;
  while ((tokenMatch = tokenRegex.exec(masked)) !== null) {
    tokens.push({ value: tokenMatch[0], index: tokenMatch.index });
  }
  const binaryOperators = new Set([
    "+", "-", "*", "/", "%", "**", "<", ">", "<=", ">=", "==", "===", "!=", "!==", "&", "|", "^",
  ]);
  const invalidFollowers = new Set(["&&", "||", ")", "]", "}", ";", ","]);
  tokens.forEach((token, index) => {
    if (!binaryOperators.has(token.value)) return;
    const nextToken = tokens[index + 1];
    if (!nextToken || invalidFollowers.has(nextToken.value)) {
      const previous = tokens[index - 1]?.value || "the previous value";
      const before = nextToken ? ` before "${nextToken.value}"` : " at the end of the file";
      report(
        token.index,
        token.value.length,
        `operator "${token.value}" after "${previous}" has no right-hand value${before}.`,
        `Remove "${token.value}" or add a value after it.`,
      );
    }
  });

  const delimiterStack = [];
  const openerFor = { ")": "(", "]": "[", "}": "{" };
  const closerFor = { "(": ")", "[": "]", "{": "}" };
  for (let index = 0; index < masked.length; index++) {
    const char = masked[index];
    if (char === "(" || char === "[" || char === "{") {
      let control = "";
      if (char === "(") {
        const prefix = masked.slice(0, index).match(/\b(if|while|for|switch|catch|with)\s*$/);
        control = prefix ? prefix[1] : "";
      }
      if (char === "{") {
        const unclosedControlIndex = delimiterStack.map((entry) => Boolean(entry.control)).lastIndexOf(true);
        if (unclosedControlIndex !== -1) {
          const unclosed = delimiterStack[unclosedControlIndex];
          const openedAt = getLineAndColumnFromIndex(source, unclosed.index);
          report(
            index,
            1,
            `missing ")" before "{"; the ${unclosed.control} condition opened at line ${openedAt.line + lineOffset} is not closed.`,
            'Add another closing parenthesis ")" immediately before "{".',
          );
          delimiterStack.splice(unclosedControlIndex, 1);
        }
      }
      delimiterStack.push({ char, index, control });
      continue;
    }
    if (!(char in openerFor)) continue;
    const expectedOpen = openerFor[char];
    const top = delimiterStack[delimiterStack.length - 1];
    if (!top || top.char !== expectedOpen) {
      report(
        index,
        1,
        `unexpected closing "${char}"${top ? `; "${closerFor[top.char]}" is required first` : ""}.`,
        top ? `Add "${closerFor[top.char]}" before "${char}".` : `Remove the extra "${char}".`,
      );
      continue;
    }
    delimiterStack.pop();
  }
  delimiterStack.forEach((entry) => {
    report(
      entry.index,
      1,
      `unclosed "${entry.char}".`,
      `Add the matching "${closerFor[entry.char]}".`,
    );
  });

  return issueCount;
}

function getAcornJavaScriptSyntaxError(code) {
  if (!window.acorn || typeof window.acorn.parse !== "function") {
    return { unavailable: true };
  }
  const source = String(code || "");
  const parseOptions = {
    ecmaVersion: "latest",
    locations: true,
    allowHashBang: true,
    allowAwaitOutsideFunction: true,
    allowReturnOutsideFunction: true,
  };
  try {
    window.acorn.parse(source, { ...parseOptions, sourceType: "script" });
    return null;
  } catch (scriptError) {
    try {
      window.acorn.parse(source, { ...parseOptions, sourceType: "module" });
      return null;
    } catch (moduleError) {
      const selected = Number(moduleError?.pos || 0) >= Number(scriptError?.pos || 0)
        ? moduleError
        : scriptError;
      return {
        message: String(selected?.message || "Invalid JavaScript syntax").replace(/\s*\(\d+:\d+\)\s*$/, ""),
        line: Math.max(1, Number(selected?.loc?.line || 1)),
        col: Math.max(1, Number(selected?.loc?.column || 0) + 1),
        pos: Math.max(0, Number(selected?.pos || 0)),
        length: Math.max(1, Number(selected?.raisedAt || 0) - Number(selected?.pos || 0)),
      };
    }
  }
}

function analyzeCssSource(code, fileName, emitDiagnostic, options = {}) {
  const source = String(code || "");
  const lineOffset = Math.max(0, Number(options.lineOffset || 0));
  const firstLineColumnOffset = Math.max(0, Number(options.firstLineColumnOffset || 0));
  const stack = [];
  const matchingOpen = { "}": "{", ")": "(", "]": "[" };
  const matchingClose = { "{": "}", "(": ")", "[": "]" };
  let state = "code";
  let quote = "";
  let stateStart = 0;
  let escaped = false;

  const report = (index, length, problem, fix) => {
    const local = getLineAndColumnFromIndex(source, Math.max(0, index));
    const line = local.line + lineOffset;
    const col = local.col + (local.line === 1 ? firstLineColumnOffset : 0);
    emitDiagnostic(
      "error",
      `[${fileName}] CSS issue at line ${line}:${col}: ${problem} Fix: ${fix}`,
      { fileName, line, col, length: Math.max(1, Number(length) || 1) },
    );
  };

  for (let index = 0; index < source.length; index++) {
    const char = source[index];
    const next = source[index + 1];
    if (state === "comment") {
      if (char === "*" && next === "/") {
        index++;
        state = "code";
      }
      continue;
    }
    if (state === "string") {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === "\\") {
        escaped = true;
        continue;
      }
      if (char === quote) {
        state = "code";
        quote = "";
        continue;
      }
      if (char === "\n" || char === "\r") {
        report(stateStart, Math.max(1, index - stateStart), "unclosed quoted value.", `Add the matching ${quote} quote before the line ends.`);
        state = "code";
        quote = "";
      }
      continue;
    }
    if (char === "/" && next === "*") {
      state = "comment";
      stateStart = index;
      index++;
      continue;
    }
    if (char === '"' || char === "'") {
      state = "string";
      stateStart = index;
      quote = char;
      escaped = false;
      continue;
    }
    if (char === "{" || char === "(" || char === "[") {
      stack.push({ char, index });
      continue;
    }
    if (!(char in matchingOpen)) continue;
    const top = stack[stack.length - 1];
    if (!top) {
      report(index, 1, `unexpected closing "${char}".`, `Remove the extra "${char}" or add its opening "${matchingOpen[char]}".`);
      continue;
    }
    if (top.char !== matchingOpen[char]) {
      report(index, 1, `mismatched closing "${char}"; "${matchingClose[top.char]}" is required first.`, `Add "${matchingClose[top.char]}" before "${char}".`);
      continue;
    }
    stack.pop();
  }

  if (state === "comment") {
    report(stateStart, 2, "unclosed comment.", "Close the comment with */.");
  } else if (state === "string") {
    report(stateStart, Math.max(1, source.length - stateStart), "unclosed quoted value.", `Add the matching ${quote} quote.`);
  }
  stack.forEach((entry) => {
    report(entry.index, 1, `unclosed "${entry.char}".`, `Add the matching "${matchingClose[entry.char]}".`);
  });
}

function getHtmlRawTextSegments(htmlText, tagName) {
  const source = String(htmlText || "");
  const wantedName = String(tagName || "").toLowerCase();
  const tokens = scanHtmlTagTokens(source, () => {});
  const segments = [];
  for (let index = 0; index < tokens.length; index++) {
    const opening = tokens[index];
    if (opening.name !== wantedName || opening.isClosing || opening.selfClosing) continue;
    const closing = tokens.slice(index + 1).find((token) => token.name === wantedName && token.isClosing);
    if (!closing) continue;
    segments.push({
      code: source.slice(opening.end, closing.start),
      start: opening.end,
      attributes: opening.attributes || [],
    });
  }
  return segments;
}

function getProjectFilesForAutomaticDiagnostics() {
  if (projectFiles.length <= LARGE_PROJECT_FILE_THRESHOLD) return projectFiles;
  const selected = [];
  const selectedNames = new Set();
  const addFile = (file) => {
    if (!file || !["html", "css", "js"].includes(file.type)) return;
    const key = String(file.name || "").toLowerCase();
    if (!key || selectedNames.has(key)) return;
    selectedNames.add(key);
    selected.push(file);
  };
  addFile(activeFile);
  if (currentPreviewTarget?.fileName) {
    addFile(projectFiles.find((file) =>
      String(file.name || "").toLowerCase() === String(currentPreviewTarget.fileName).toLowerCase(),
    ));
  }
  for (const file of projectFiles) {
    if (selected.length >= LARGE_PROJECT_DIAGNOSTIC_LIMIT) break;
    addFile(file);
  }
  return selected;
}

function runPreflightDiagnostics(targetEntries = null) {
  const diagnosticFiles = getProjectFilesForAutomaticDiagnostics();
  const emitDiagnostic = (type, message, location = null) => {
    if (Array.isArray(targetEntries)) {
      targetEntries.push({ type, message, location });
      return;
    }
    appendConsoleMessage(type, message);
  };
  // Acorn is the syntax authority. Valid JavaScript never falls through to
  // heuristic token checks that can confuse regex literals, decimals, or JSX-like strings.
  diagnosticFiles
    .filter((f) => f.type === "js")
    .forEach((file) => {
      const parserError = getAcornJavaScriptSyntaxError(file.content);
      if (parserError && !parserError.unavailable) {
        emitDiagnostic(
          "error",
          `[${file.name}] JavaScript SyntaxError at line ${parserError.line}:${parserError.col}: ${parserError.message}. Fix: ${getErrorHint(parserError.message)}`,
          {
            fileName: file.name,
            line: parserError.line,
            col: parserError.col,
            length: parserError.length,
          },
        );
      }
    });

  // CSS strings, comments, and nested delimiters are scanned as syntax states,
  // so values such as -0.5, .25, data URLs, and SVG path strings stay intact.
  diagnosticFiles
    .filter((f) => f.type === "css")
    .forEach((file) => {
      analyzeCssSource(file.content || "", file.name, emitDiagnostic);
    });

  // Position-aware HTML checks for every HTML file in the project.
  diagnosticFiles
    .filter((f) => f.type === "html")
    .forEach((htmlFile) => {
      const htmlText = htmlFile.content || "";

      const inlineScripts = getHtmlRawTextSegments(htmlText, "script")
        .filter((segment) => !segment.attributes.some((attribute) => attribute.name === "src"));
      inlineScripts.forEach((segment) => {
        const scriptCode = segment.code;
        const scriptContentStartIndex = segment.start;
        const scriptContentStart = getLineAndColumnFromIndex(
          htmlText,
          scriptContentStartIndex,
        );
        const parserError = getAcornJavaScriptSyntaxError(scriptCode);
        if (parserError && !parserError.unavailable) {
          const absLine = scriptContentStart.line + parserError.line - 1;
          const absCol = parserError.line === 1
            ? scriptContentStart.col + parserError.col - 1
            : parserError.col;
          emitDiagnostic(
            "error",
            `[${htmlFile.name}] Inline JavaScript SyntaxError at line ${absLine}:${absCol}: ${parserError.message}. Fix: ${getErrorHint(parserError.message)}`,
            { fileName: htmlFile.name, line: absLine, col: absCol, length: parserError.length },
          );
        }
      });

      getHtmlRawTextSegments(htmlText, "style").forEach((segment) => {
        const start = getLineAndColumnFromIndex(htmlText, segment.start);
        analyzeCssSource(segment.code, htmlFile.name, emitDiagnostic, {
          lineOffset: start.line - 1,
          firstLineColumnOffset: start.col - 1,
        });
      });

      analyzeHtmlTagStructure(htmlText, htmlFile.name, emitDiagnostic);
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
  runtimeDiagnosticRawErrors.clear();
  runtimeDiagnosticRecent.clear();
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
      if (!getProjectMediaKind(f)) return false;
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
      const mediaSource = getProjectMediaSource(mediaFile);
      if (mediaSource) {
        return `<${tag}${before} src="${escapeHtmlAttributeValue(mediaSource)}"${after}>`;
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

          function parseStackLocation(error) {
            if (!error || !error.stack) return null;
            const stack = String(error.stack);
            // Prefer explicit source files (e.g. script.js:8:1)
            let m = stack.match(/\\b([A-Za-z0-9_.-]+\\.(?:js|mjs|cjs|jsx|ts|tsx|html)):(\\d+):(\\d+)\\b/);
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

          function serializeConsoleArgument(value) {
            if (value instanceof Error || (value && typeof value === 'object' && typeof value.stack === 'string')) {
              return {
                name: value.name || 'Error',
                message: value.message || String(value),
                stack: value.stack || '',
              };
            }
            if (typeof value === 'object' && value !== null) {
              try {
                return JSON.parse(JSON.stringify(value));
              } catch (serializationError) {
                return String(value);
              }
            }
            return value;
          }

          function reportRuntimeDiagnostic(kind, message, source, line, col, error, consoleArguments) {
            const safeMessage = String(
              kind === 'console-error'
                ? message || (error && error.message) || 'Unknown runtime error'
                : (error && error.message) || message || 'Unknown runtime error',
            );
            const filename = normalizeFilename(source || '', error);
            const mappedLine = normalizeLine(source || '', line, error);
            const mappedCol = normalizeCol(source || '', col, error);
            const errorName = String((error && error.name) || (kind === 'unhandledrejection' ? 'UnhandledPromiseRejection' : 'Error'));
            const stack = String((error && error.stack) || (errorName + ': ' + safeMessage));
            const payload = {
              kind,
              message: safeMessage,
              errorName,
              stack,
              source: String(source || ''),
              fileName: filename,
              line: mappedLine,
              col: mappedCol,
              consoleArguments: Array.isArray(consoleArguments)
                ? consoleArguments.map(serializeConsoleArgument)
                : [],
              timestamp: Date.now(),
            };
            try {
              if (window.parent && typeof window.parent.__codxReportRuntimeDiagnostic === 'function') {
                window.parent.__codxReportRuntimeDiagnostic(payload, error || null);
                return;
              }
            } catch (parentError) {
              // Fall through to the plain console output when parent access is unavailable.
            }
            appendMessage(
              'error',
              'Error: ',
              ['[' + filename + '] line ' + mappedLine + ':' + mappedCol + ' - ' + errorName + ': ' + safeMessage + '\\n' + stack],
            );
          }

          // Override console methods IMMEDIATELY
          console.log = function(...args) { appendMessage('log', '> ', args); };
          console.warn = function(...args) { appendMessage('warn', 'WARNING: ', args); };
          console.error = function(...args) {
            const error = args.find(arg =>
              arg instanceof Error ||
              (arg && typeof arg === 'object' && typeof arg.stack === 'string'),
            );
            if (!error) {
              appendMessage('error', 'ERROR: ', args);
              return;
            }
            const prefix = args
              .filter(arg => arg !== error)
              .map(arg => typeof arg === 'string' ? arg : String(arg))
              .join(' ')
              .trim();
            const message = prefix
              ? prefix + (error.message ? ': ' + error.message : '')
              : error.message || String(error);
            reportRuntimeDiagnostic('console-error', message, '', 1, 1, error, args);
          };
          console.info = function(...args) { appendMessage('info', 'INFO: ', args); };

          // Capture runtime errors
          window.onerror = function(msg, source, line, col, error) {
            reportRuntimeDiagnostic('runtime', msg, source || '', line, col, error, []);
            return false;
          };

          // Capture unhandled promise rejections
          window.addEventListener('unhandledrejection', function(e) {
            const reason = e && e.reason;
            const message =
              reason && typeof reason === 'object' && 'message' in reason
                ? reason.message
                : String(reason || 'Unknown promise rejection');
            const error = reason && typeof reason === 'object' ? reason : null;
            reportRuntimeDiagnostic('unhandledrejection', message, '', 1, 1, error, [reason]);
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
    if (entry.location?.fileName && Number(entry.location.line) > 0) {
      line.classList.add("has-location");
      line.tabIndex = 0;
      line.setAttribute("role", "button");
      line.title = `Open ${entry.location.fileName} at line ${entry.location.line}, column ${entry.location.col || 1}`;
      const openLocation = () => jumpToEditorLocation(
        entry.location.fileName,
        entry.location.line,
        entry.location.col || 1,
      );
      line.addEventListener("click", openLocation);
      line.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openLocation();
        }
      });
    }
    consoleOutput.appendChild(line);
  });
  if (entries && entries.length) {
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
  }
}

// Line numbers
function setLargeFilePerformanceMode(textarea, lineCount = 0, content = null) {
  if (!textarea) return false;
  const value = content === null ? textarea.value : String(content);
  const enabled = isLargeEditorContent(value, lineCount);
  const nextState = enabled ? "true" : "false";
  if (textarea.dataset.largeFilePerformance !== nextState) {
    const container = textarea.closest(".code-container");
    container?.classList.toggle("large-file-performance", enabled);
    textarea.dataset.largeFilePerformance = nextState;
    if (enabled && highlightLayer && highlightLayer.textContent) {
      highlightLayer.replaceChildren();
    }
    if (
      enabled &&
      textarea.dataset.largeFileNoticeShown !== "true" &&
      autoRunCheckbox?.checked
    ) {
      textarea.dataset.largeFileNoticeShown = "true";
      showNotification(
        "Large File Performance Mode paused Auto-Run. Press Run when you want to refresh the preview.",
        "info",
      );
    }
  }
  return enabled;
}

function syncLineNumberMetrics(textarea) {
  if (!textarea || !lineNumbers) return;
  const editorStyles = window.getComputedStyle(textarea);
  const editorBorderHeight =
    (parseFloat(editorStyles.borderTopWidth) || 0) +
    (parseFloat(editorStyles.borderBottomWidth) || 0);
  const horizontalScrollbarHeight = Math.max(
    0,
    textarea.offsetHeight - textarea.clientHeight - editorBorderHeight,
  );
  const gutterPaddingBottom = (parseFloat(editorStyles.paddingBottom) || 0) + horizontalScrollbarHeight;
  const metricSignature = [
    editorStyles.fontFamily,
    editorStyles.fontSize,
    editorStyles.fontWeight,
    editorStyles.fontStyle,
    editorStyles.lineHeight,
    editorStyles.letterSpacing,
    editorStyles.paddingTop,
    editorStyles.paddingBottom,
    horizontalScrollbarHeight,
  ].join("|");

  if (lineNumbers.dataset.metricSignature !== metricSignature) {
    lineNumbers.style.fontFamily = editorStyles.fontFamily;
    lineNumbers.style.fontSize = editorStyles.fontSize;
    lineNumbers.style.fontWeight = editorStyles.fontWeight;
    lineNumbers.style.fontStyle = editorStyles.fontStyle;
    lineNumbers.style.lineHeight = editorStyles.lineHeight;
    lineNumbers.style.letterSpacing = editorStyles.letterSpacing;
    lineNumbers.dataset.editorPaddingTop = String(parseFloat(editorStyles.paddingTop) || 0);
    lineNumbers.dataset.editorPaddingBottom = String(gutterPaddingBottom);
    lineNumbers.dataset.metricSignature = metricSignature;
  }
}

function buildLineNumberText(startLine, endLine) {
  const count = Math.max(0, endLine - startLine + 1);
  return Array.from({ length: count }, (_, index) => startLine + index).join("\n");
}

function renderLineNumberWindow(textarea, lineCount = 0, force = false) {
  if (!textarea || !lineNumbers || !lineNumbersContent) return;
  const totalLines = Math.max(1, Number(lineCount || lineNumbers.dataset.totalLines || 1));
  lineNumbers.dataset.totalLines = String(totalLines);
  syncLineNumberMetrics(textarea);

  const computed = window.getComputedStyle(textarea);
  const lineHeight = parseFloat(computed.lineHeight) || parseFloat(computed.fontSize) * 1.5 || 20;
  const paddingTop = Number(lineNumbers.dataset.editorPaddingTop || 0);
  const paddingBottom = Number(lineNumbers.dataset.editorPaddingBottom || 0);
  const useVirtualWindow = totalLines >= VIRTUAL_LINE_NUMBER_THRESHOLD;
  let startIndex = 0;
  let endIndex = totalLines;

  if (useVirtualWindow) {
    const firstVisibleIndex = Math.max(0, Math.floor((textarea.scrollTop - paddingTop) / lineHeight));
    const visibleLineCount = Math.max(1, Math.ceil(textarea.clientHeight / lineHeight));
    const overscan = 80;
    const chunkSize = 64;
    startIndex = Math.max(0, Math.floor(Math.max(0, firstVisibleIndex - overscan) / chunkSize) * chunkSize);
    endIndex = Math.min(totalLines, startIndex + visibleLineCount + overscan * 2);
  }

  const rangeKey = `${totalLines}:${startIndex}:${endIndex}:${lineHeight}:${paddingTop}:${paddingBottom}`;
  if (force || lineNumbersContent.dataset.rangeKey !== rangeKey) {
    lineNumbersContent.textContent = buildLineNumberText(startIndex + 1, endIndex);
    lineNumbersContent.style.paddingTop = `${paddingTop + startIndex * lineHeight}px`;
    lineNumbersContent.style.paddingBottom = `${paddingBottom + (totalLines - endIndex) * lineHeight}px`;
    lineNumbersContent.dataset.rangeKey = rangeKey;
    lineNumbers.dataset.virtualized = useVirtualWindow ? "true" : "false";
  }

  lineNumbers.scrollTop = textarea.scrollTop;
}

function scheduleEditorDecorations(textarea, options = {}) {
  if (!textarea) return;
  clearTimeout(editorDecorationTimer);
  const lineCount = Number(lineNumbers?.dataset.totalLines || 0) || countTextLines(textarea.value);
  if (setLargeFilePerformanceMode(textarea, lineCount)) {
    if (errorHighlightLayer?.childElementCount) errorHighlightLayer.replaceChildren();
    return;
  }

  const render = () => {
    editorDecorationTimer = null;
    if (textarea !== document.getElementById("activeEditor")) return;
    renderSyntaxHighlight(textarea);
    renderErrorHighlights(textarea);
  };
  if (options.immediate) {
    render();
    return;
  }
  const delay = textarea.value.length >= 32 * 1024 ? 90 : 24;
  editorDecorationTimer = setTimeout(() => requestAnimationFrame(render), delay);
}

function updateLineNumbers(textarea, options = {}) {
  if (!textarea) textarea = document.getElementById("activeEditor");
  if (!textarea) return;
  const value = options.content === undefined ? textarea.value : String(options.content);
  const cachedLineCount = Number(lineNumbers?.dataset.totalLines || 0);
  const lines = options.preserveLineCount && cachedLineCount
    ? cachedLineCount
    : countTextLines(value);
  const largeFileMode = setLargeFilePerformanceMode(textarea, lines, value);
  if (!options.preserveLineCount || !cachedLineCount) {
    renderLineNumberWindow(textarea, lines, Boolean(options.forceLineNumbers));
  }
  if (largeFileMode && options.preserveLineCount) {
    if (editorDecorationTimer) {
      clearTimeout(editorDecorationTimer);
      editorDecorationTimer = null;
    }
  } else {
    scheduleEditorDecorations(textarea, options);
  }
  renderEditorWatermark(textarea, value);
}

function renderEditorWatermark(textarea, knownValue = null) {
  if (!editorWatermark || !textarea || !activeFile) return;
  const value = knownValue === null ? String(textarea.value || "") : String(knownValue);
  const shouldShow =
    activeFile.type === "html" && value.length < 1024 && value.trim() === "";
  const nextDisplay = shouldShow ? "block" : "none";
  if (editorWatermark.style.display !== nextDisplay) {
    editorWatermark.style.display = nextDisplay;
  }
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
  const editor = document.getElementById("activeEditor");
  if (editor && isLargeEditorContent(editor.value)) {
    if (undoEditorBtn) undoEditorBtn.disabled = false;
    if (redoEditorBtn) redoEditorBtn.disabled = false;
    return;
  }
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
  if (isLargeEditorContent(editor.value)) {
    const history = getFileHistoryRecord(activeFile.name);
    history.current = {
      content: "",
      selectionStart: Number(editor.selectionStart || 0),
      selectionEnd: Number(editor.selectionEnd || 0),
      nativeLargeFile: true,
    };
    history.undoStack = [];
    history.redoStack = [];
    pendingHistorySnapshot = null;
    updateEditorHistoryButtons();
    return;
  }
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
  if (isLargeEditorContent(editor.value)) {
    pendingHistorySnapshot = null;
    return;
  }
  pendingHistorySnapshot = createEditorSnapshot(editor);
}

function finalizeEditorHistoryCapture(editor) {
  if (isRestoringEditorHistory || !editor || !activeFile) {
    pendingHistorySnapshot = null;
    updateEditorHistoryButtons();
    return;
  }
  if (isLargeEditorContent(editor.value)) {
    pendingHistorySnapshot = null;
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
  if (!editor || !activeFile || getProjectMediaKind(activeFile)) return false;
  if (isLargeEditorContent(editor.value)) {
    editor.focus({ preventScroll: true });
    document.execCommand("undo");
    return true;
  }
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
  if (!editor || !activeFile || getProjectMediaKind(activeFile)) return false;
  if (isLargeEditorContent(editor.value)) {
    editor.focus({ preventScroll: true });
    document.execCommand("redo");
    return true;
  }
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
    if (editorScrollFrame) return;
    editorScrollFrame = requestAnimationFrame(() => {
      editorScrollFrame = null;
      renderLineNumberWindow(textarea);
      renderErrorHighlights(textarea);
      if (activeSessionId || activePairState) renderRemoteCursors();
      if (suggestionPopup.style.display === "block") positionSuggestionPopup(textarea);
    });
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
      const styleContent = match[2] || "";
      result += styleContent
        ? highlightCss(styleContent, match.index + match[1].length)
        : "";
      result += highlightHtmlSegment(match[3]);
    } else {
      result += highlightHtmlSegment(match[4]);
      const scriptContent = match[5] || "";
      result += scriptContent ? highlightJs(scriptContent) : "";
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

  const append = (text, className = "", _options = {}) => {
    if (!text) return;
    if (!className) {
      result += escapeHtml(text);
      return;
    }
    result += `<span class="token ${className}">${escapeHtml(text)}</span>`;
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
  const lineCount = Number(lineNumbers?.dataset.totalLines || 0) || countTextLines(code);
  if (setLargeFilePerformanceMode(textarea, lineCount)) {
    if (highlightLayer.textContent) highlightLayer.replaceChildren();
    return;
  }
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
  highlightLayer.style.fontWeight = computed.fontWeight;
  highlightLayer.style.fontStyle = computed.fontStyle;
  highlightLayer.style.lineHeight = computed.lineHeight;
  highlightLayer.style.letterSpacing = computed.letterSpacing;
  highlightLayer.style.tabSize = computed.tabSize;
  highlightLayer.style.whiteSpace = computed.whiteSpace;
  highlightLayer.style.padding = computed.padding;
}

// PART 6 - EDITOR INITIALIZATION
function initializeEditor() {
  const editor = document.getElementById("activeEditor");
  displayActiveFileInEditor({ resetAllHistory: true });

  editor.addEventListener("beforeinput", (e) => {
    lastEditorInputType = String(e.inputType || "");
    if (lastEditorInputType === "historyUndo" || lastEditorInputType === "historyRedo") {
      if (isLargeEditorContent(editor.value)) return;
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
    if (getProjectMediaKind(activeFile)) {
      displayActiveFileInEditor();
      return;
    }
    if (!canCurrentUserEditFile(activeFile ? activeFile.name : "")) {
      showNotification(
        isPairNavigatorEditingLocked()
          ? "You are the Navigator. Suggest a change or switch roles to edit."
          : "You can only edit files selected by the host.",
        "error",
      );
      editor.value = activeFile.content;
      return;
    }
    const currentValue = editor.value;
    const largeFileInput = isLargeEditorContent(currentValue);
    const isHistoryRestore =
      lastEditorInputType === "historyUndo" || lastEditorInputType === "historyRedo";
    hasUnsavedChanges = true;
    activeFile.content = currentValue;
    emitPairPresenceSoon();
    if (!largeFileInput) {
      __codxRescanProjectSuggestionCacheSoon();
    }
    updateProjectStatusUI();
    const preservesLineCount =
      String(e.inputType || "") === "insertText" &&
      !String(e.data || "").includes("\n");
    updateLineNumbers(editor, {
      content: currentValue,
      preserveLineCount: preservesLineCount,
    });
    if (largeFileInput) {
      if (activeSessionId) {
        handleCodeChange();
        announceTyping(activeFile.type + "Code");
      }
      if (suggestionPopup.style.display === "block") hideSuggestions();
      activeInlineHtmlCorrection = null;
      pendingHistorySnapshot = null;
      lastEditorInputType = "";
      return;
    }
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
  editor.addEventListener("click", () => {
    emitPairPresenceSoon();
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
    emitPairPresenceSoon();
  });
  editor.addEventListener("scroll", () => {
    syncScroll(editor);
    if (
      activePairState &&
      pairFollowEnabled &&
      Date.now() > pairIgnoreLocalScrollUntil
    ) {
      pairFollowEnabled = false;
      pairFollowSuspended = true;
      followedParticipantName = "";
      stopPairFollowAnimation();
      renderPairDock();
    }
    emitPairPresenceSoon();
  }, { passive: true });
  const suspendPairFollowForManualNavigation = () => {
    if (!activePairState || !pairFollowEnabled) return;
    pairFollowEnabled = false;
    pairFollowSuspended = true;
    followedParticipantName = "";
    stopPairFollowAnimation();
    renderPairDock();
  };
  editor.addEventListener("wheel", suspendPairFollowForManualNavigation, { passive: true });
  editor.addEventListener("touchstart", suspendPairFollowForManualNavigation, { passive: true });
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
  if (isLargeEditorContent(editor.value)) {
    if (suggestionPopup.style.display === "block") hideSuggestions();
    return;
  }
  const pos = editor.selectionStart;
  const textBefore = getBoundedEditorContextBefore(editor.value, pos);
  const contextOffset = Math.max(0, pos - textBefore.length);
  const makeContextAbsolute = (context) => {
    if (!context || !contextOffset) return context;
    const next = { ...context };
    if (Number.isFinite(next.replaceStart)) next.replaceStart += contextOffset;
    if (Number.isFinite(next.replaceEnd)) next.replaceEnd += contextOffset;
    return next;
  };

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
    currentSuggestionContext = makeContextAbsolute(envContext);
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
      const absoluteCodeFileContext = makeContextAbsolute(codeFileContext);
      currentSuggestionContext = absoluteCodeFileContext;
      showFileSuggestions(editor, files, codeFileContext.valuePrefix, absoluteCodeFileContext);
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
    if (!cssSuggestions.length) {
      hideSuggestions();
      return;
    }
    currentSuggestionContext = makeContextAbsolute(cssContext);
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
    currentSuggestionContext = makeContextAbsolute(jsContext);
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
    currentSuggestionContext = makeContextAbsolute(inlineStyleContext);
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
      currentSuggestionContext = makeContextAbsolute(htmlValueContext);
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
    showFileSuggestions(editor, files, fileContext.valuePrefix, makeContextAbsolute(fileContext));
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
    currentSuggestionContext = makeContextAbsolute(attrContext);
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
      .map((f) => {
        const content = String(f.content || "");
        const sample = content.length > 64 * 1024
          ? content.slice(0, 32 * 1024) + content.slice(-32 * 1024)
          : content;
        return `${f.name}|${f.type}|${content.length}|${sample}`;
      })
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
function __codxGetSuggestionScanFiles(files) {
  return (files || []).map((file) => {
    const content = String(file?.content || "");
    if (content.length <= 160 * 1024) return file;
    return {
      ...file,
      content: content.slice(0, 80 * 1024) + "\n" + content.slice(-80 * 1024),
    };
  });
}

function __codxRescanProjectSuggestionCacheSoon() {
  clearTimeout(__codxProjectScannerTimer);
  const scanDelay = isLargeEditorContent(activeFile?.content || "") ? 1800 : 300;
  __codxProjectScannerTimer = setTimeout(() => {
    const nextHash = __codxHashProjectFiles(projectFiles);
    if (nextHash === __codxProjectSuggestionCache.hash) return;
    __codxProjectSuggestionCache.hash = nextHash;

    // Build caches
    try {
      const scanFiles = __codxGetSuggestionScanFiles(projectFiles);
      __codxProjectSuggestionCache.html = __codxTokenizeHtml(scanFiles);
      __codxProjectSuggestionCache.css = __codxTokenizeCss(scanFiles);
      __codxProjectSuggestionCache.js = __codxTokenizeJs(scanFiles);
      __codxProjectSuggestionCache.env = __codxTokenizeEnv(scanFiles);
      __codxLearnFromProjectCache();
    } catch (e) {
      // fail safe
    }
  }, scanDelay);
}

function __codxProjectIsReady() {
  if (
    projectFiles.some((file) =>
      isLargeEditorContent(String(file?.content || "")),
    )
  ) {
    return;
  }
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
  const currentValues = getCurrentFileHtmlValues(attr);
  const values = Array.from(new Set([...currentValues, ...projectValues, ...jsValues, ...learnedValues, ...cssValues]));
  return values
    .filter((value) => getSuggestionMatchTier(value, q, { allowClose: currentValues.has(value) }) > 0)
    .sort((a, b) => {
      const aCurrent = currentValues.has(a) ? 1 : 0;
      const bCurrent = currentValues.has(b) ? 1 : 0;
      if (aCurrent !== bCurrent) return bCurrent - aCurrent;
      const aTier = getSuggestionMatchTier(a, q, { allowClose: true });
      const bTier = getSuggestionMatchTier(b, q, { allowClose: true });
      if (aTier !== bTier) return bTier - aTier;
      return a.length - b.length || a.localeCompare(b);
    })
    .slice(0, 40)
    .map((value) => ({ value, desc: currentValues.has(value) ? `Declared in current file` : `Learned HTML ${attr}` }));
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

function getSuggestionMatchTier(value, prefix, options = {}) {
  const rawValue = String(value || "").toLowerCase();
  const rawPrefix = String(prefix || "").toLowerCase();
  if (!rawPrefix) return 1;
  if (rawValue === rawPrefix) return 5;
  if (rawValue.startsWith(rawPrefix)) return 4;

  const stripSigil = options.stripSigil === true;
  const valueText = stripSigil ? rawValue.replace(/^[.#]/, "") : rawValue;
  const prefixText = stripSigil ? rawPrefix.replace(/^[.#]/, "") : rawPrefix;
  if (valueText === prefixText) return 5;
  if (valueText.startsWith(prefixText)) return 4;
  if (rawValue.includes(rawPrefix) || valueText.includes(prefixText)) return 3;

  if (options.allowClose && prefixText.length >= 3) {
    const comparable = valueText.slice(0, Math.max(prefixText.length, Math.min(valueText.length, prefixText.length + 2)));
    const maxDistance = prefixText.length <= 5 ? 1 : 2;
    if (getLevenshteinDistance(prefixText, comparable) <= maxDistance) return 2;
  }
  return 0;
}

function collectBindingPatternNames(pattern, names) {
  if (!pattern || typeof pattern !== "object") return;
  if (pattern.type === "Identifier") {
    names.add(pattern.name);
    return;
  }
  if (pattern.type === "RestElement") {
    collectBindingPatternNames(pattern.argument, names);
    return;
  }
  if (pattern.type === "AssignmentPattern") {
    collectBindingPatternNames(pattern.left, names);
    return;
  }
  if (pattern.type === "ArrayPattern") {
    pattern.elements.forEach((entry) => collectBindingPatternNames(entry, names));
    return;
  }
  if (pattern.type === "ObjectPattern") {
    pattern.properties.forEach((property) =>
      collectBindingPatternNames(property.type === "RestElement" ? property.argument : property.value, names),
    );
  }
}

function collectDeclaredJavaScriptIdentifiers(source) {
  const code = String(source || "");
  const names = new Set();
  let ast = null;
  if (window.acorn && typeof window.acorn.parse === "function") {
    const options = {
      ecmaVersion: "latest",
      sourceType: "script",
      allowHashBang: true,
      allowAwaitOutsideFunction: true,
      allowReturnOutsideFunction: true,
    };
    try {
      ast = window.acorn.parse(code, options);
    } catch (_scriptError) {
      try {
        ast = window.acorn.parse(code, { ...options, sourceType: "module" });
      } catch (_moduleError) {
        ast = null;
      }
    }
  }

  if (ast) {
    const visit = (node) => {
      if (!node || typeof node !== "object") return;
      if (node.type === "VariableDeclarator") collectBindingPatternNames(node.id, names);
      if (node.type === "FunctionDeclaration" || node.type === "FunctionExpression" || node.type === "ArrowFunctionExpression") {
        collectBindingPatternNames(node.id, names);
        (node.params || []).forEach((param) => collectBindingPatternNames(param, names));
      }
      if (node.type === "ClassDeclaration" || node.type === "ClassExpression") {
        collectBindingPatternNames(node.id, names);
      }
      if (node.type === "ImportSpecifier" || node.type === "ImportDefaultSpecifier" || node.type === "ImportNamespaceSpecifier") {
        collectBindingPatternNames(node.local, names);
      }
      if (node.type === "CatchClause") collectBindingPatternNames(node.param, names);
      Object.keys(node).forEach((key) => {
        if (["type", "start", "end", "loc", "range"].includes(key)) return;
        const value = node[key];
        if (Array.isArray(value)) value.forEach(visit);
        else if (value && typeof value === "object" && typeof value.type === "string") visit(value);
      });
    };
    visit(ast);
  } else {
    const declarationPatterns = [
      /\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)/g,
      /\b(?:async\s+)?function\s*\*?\s*([A-Za-z_$][\w$]*)/g,
      /\bclass\s+([A-Za-z_$][\w$]*)/g,
      /\bimport\s+(?:\*\s+as\s+)?([A-Za-z_$][\w$]*)/g,
    ];
    declarationPatterns.forEach((pattern) => {
      let match;
      while ((match = pattern.exec(code)) !== null) names.add(match[1]);
    });
  }
  return names;
}

function getCurrentFileJavaScriptIdentifiers() {
  if (!activeFile) return new Set();
  if (activeFile.type === "js") {
    return collectDeclaredJavaScriptIdentifiers(activeFile.content);
  }
  if (activeFile.type === "html") {
    const names = new Set();
    getHtmlRawTextSegments(activeFile.content, "script").forEach((segment) => {
      collectDeclaredJavaScriptIdentifiers(segment.code).forEach((name) => names.add(name));
    });
    return names;
  }
  return new Set();
}

function getCurrentFileCssSelectors() {
  if (!activeFile || !["css", "html"].includes(activeFile.type)) return new Set();
  const cssText = activeFile.type === "css"
    ? String(activeFile.content || "")
    : getHtmlRawTextSegments(activeFile.content, "style").map((segment) => segment.code).join("\n");
  const masked = cssText
    .replace(/\/\*[\s\S]*?\*\//g, (match) => " ".repeat(match.length))
    .replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g, (match) => " ".repeat(match.length));
  const selectors = new Set();
  let boundary = 0;
  for (let index = 0; index < masked.length; index++) {
    const char = masked[index];
    if (char === "{") {
      const prelude = masked.slice(boundary, index);
      const selectorPattern = /[.#][-_A-Za-z][\w-]*/g;
      let match;
      while ((match = selectorPattern.exec(prelude)) !== null) selectors.add(match[0]);
      boundary = index + 1;
    } else if (char === "}" || char === ";") {
      boundary = index + 1;
    }
  }
  return selectors;
}

function getCurrentFileHtmlValues(attr) {
  if (!activeFile || activeFile.type !== "html") return new Set();
  const values = new Set();
  const wanted = String(attr || "").toLowerCase();
  scanHtmlTagTokens(activeFile.content, () => {}).forEach((token) => {
    (token.attributes || []).forEach((attribute) => {
      if (attribute.name !== wanted || !attribute.value) return;
      const parts = wanted === "class" ? attribute.value.split(/\s+/) : [attribute.value];
      parts.filter(Boolean).forEach((value) => values.add(value));
    });
  });
  return values;
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
    const currentSelectors = [...getCurrentFileCssSelectors()].map((value) => ({
      value,
      desc: "Declared in current file",
      sourcePriority: 4,
    }));
    const projectSelectors = [
      ...__codxProjectSuggestionCache.css.selectorFreq.keys(),
      ...Array.from(__codxProjectSuggestionCache.html.classes).map((value) => `.${value}`),
      ...Array.from(__codxProjectSuggestionCache.html.ids).map((value) => `#${value}`),
    ].map((value) => ({ value, desc: "Used in this project", sourcePriority: 3 }));
    const learnedSelectors = [
      ...__codxLearnedSuggestions.css.selectors,
      ...__codxLearnedSuggestions.html.classes.map((value) => `.${value}`),
      ...__codxLearnedSuggestions.html.ids.map((value) => `#${value}`),
    ].map((value) => ({ value, desc: "Learned selector", sourcePriority: 2 }));
    const genericSelectors = cssSelectorSuggestions.map((value) => ({
      value,
      desc: "Selector or at-rule",
      sourcePriority: 1,
    }));
    source = [...currentSelectors, ...projectSelectors, ...learnedSelectors, ...genericSelectors];
  }

  const deduped = new Map();
  source.forEach((entry) => {
    const key = entry.value.toLowerCase();
    const existing = deduped.get(key);
    if (!existing || Number(entry.sourcePriority || 0) > Number(existing.sourcePriority || 0)) {
      deduped.set(key, entry);
    }
  });
  const matches = [...deduped.values()].filter((entry) =>
    getSuggestionMatchTier(entry.value, q, {
      stripSigil: mode === "css-selector",
      allowClose: Number(entry.sourcePriority || 0) >= 4,
    }) > 0,
  );
  matches.sort((a, b) => {
    const aValue = a.value.toLowerCase();
    const bValue = b.value.toLowerCase();
    const aSource = Number(a.sourcePriority || 0);
    const bSource = Number(b.sourcePriority || 0);
    if (aSource !== bSource) return bSource - aSource;
    const aTier = getSuggestionMatchTier(aValue, q, { stripSigil: mode === "css-selector", allowClose: true });
    const bTier = getSuggestionMatchTier(bValue, q, { stripSigil: mode === "css-selector", allowClose: true });
    if (aTier !== bTier) return bTier - aTier;
    if (aValue.length !== bValue.length) return aValue.length - bValue.length;
    return aValue.localeCompare(bValue);
  });
  return matches.slice(0, 80).map(({ sourcePriority, ...entry }) => entry);
}

function getRankedJsSuggestions(prefix) {
  const q = (prefix || "").toLowerCase();
  const runtimeMembers = getRuntimeJsMemberSuggestions(prefix);
  const currentEntries = [...getCurrentFileJavaScriptIdentifiers()].map((value) => ({
    value,
    desc: "Declared in current file",
    sourcePriority: 4,
  }));
  const projectEntries = [
    ...__codxProjectSuggestionCache.js.identFreq.keys(),
    ...__codxProjectSuggestionCache.js.memberKeys,
  ].map((value) => ({ value, desc: "Used in this project", sourcePriority: 3 }));
  const learnedEntries = [
    ...__codxLearnedSuggestions.js.identifiers,
    ...__codxLearnedSuggestions.js.members,
  ].map((value) => ({ value, desc: "Learned JavaScript identifier", sourcePriority: 2 }));
  const envEntries = [
    ...__codxProjectSuggestionCache.env.keys,
    ...__codxLearnedSuggestions.env.keys,
  ].map((key) => ({ value: `process.env.${key}`, desc: "Learned environment variable", sourcePriority: 2 }));
  const genericEntries = jsSuggestions.map((entry) => ({ ...entry, sourcePriority: 1 }));
  const runtimeEntries = runtimeMembers.map((entry) => ({ ...entry, sourcePriority: 1 }));
  const deduped = new Map();
  [...currentEntries, ...projectEntries, ...learnedEntries, ...envEntries, ...genericEntries, ...runtimeEntries]
    .forEach((entry) => {
      const key = entry.value.toLowerCase();
      const existing = deduped.get(key);
      if (!existing || Number(entry.sourcePriority || 0) > Number(existing.sourcePriority || 0)) {
        deduped.set(key, entry);
      }
    });
  const matches = [...deduped.values()].filter((entry) =>
    getSuggestionMatchTier(entry.value, q, { allowClose: Number(entry.sourcePriority || 0) >= 4 }) > 0,
  );
  matches.sort((a, b) => {
    const aValue = a.value.toLowerCase();
    const bValue = b.value.toLowerCase();
    const aSource = Number(a.sourcePriority || 0);
    const bSource = Number(b.sourcePriority || 0);
    if (aSource !== bSource) return bSource - aSource;
    const aTier = getSuggestionMatchTier(aValue, q, { allowClose: true });
    const bTier = getSuggestionMatchTier(bValue, q, { allowClose: true });
    if (aTier !== bTier) return bTier - aTier;
    if (aValue.length !== bValue.length) return aValue.length - bValue.length;
    return aValue.localeCompare(bValue);
  });
  return matches.slice(0, 20).map(({ sourcePriority, ...entry }) => entry);
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
  if (!/^\s/.test(afterTagName)) return null;
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
  const imageExt = new Set(["png", "jpg", "jpeg", "gif", "svg", "webp", "avif", "bmp", "ico"]);
  const mediaExt = new Set(["mp3", "wav", "ogg", "m4a", "aac", "flac", "mp4", "webm", "ogv", "mov", "m4v"]);

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
  if (ext === "txt") return "TXT";
  if (["png", "jpg", "jpeg", "gif", "svg", "webp", "avif", "bmp", "ico"].includes(ext)) return "IMG";
  if (["mp3", "wav", "ogg", "m4a", "aac", "flac", "mp4", "webm", "ogv", "mov", "m4v"].includes(ext)) return "MED";
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
    txt: "fa-solid fa-file-lines",
  };
  const imageExtensions = ["png", "jpg", "jpeg", "gif", "webp", "svg", "avif", "bmp", "ico"];
  const videoExtensions = ["mp4", "webm", "ogv", "mov", "m4v"];
  const audioExtensions = ["mp3", "wav", "ogg", "m4a", "aac", "flac"];
  let safeExt = ["html", "css", "js", "mjs", "json", "env", "txt"].includes(ext) ? ext : "file";
  let glyphClass = iconByExtension[ext] || "fa-solid fa-file-code";
  if (imageExtensions.includes(ext)) {
    safeExt = "image";
    glyphClass = "fa-solid fa-image";
  } else if (videoExtensions.includes(ext)) {
    safeExt = "video";
    glyphClass = "fa-solid fa-video";
  } else if (audioExtensions.includes(ext)) {
    safeExt = "audio";
    glyphClass = "fa-solid fa-volume-high";
  }
  const icon = document.createElement("span");
  icon.className = `file-extension-icon file-extension-icon-${safeExt}`;
  icon.title = `${getFileIcon(fileName)} file`;
  icon.setAttribute("aria-hidden", "true");

  const glyph = document.createElement("i");
  glyph.className = glyphClass;
  icon.appendChild(glyph);
  return icon;
}

const suggestionIconDefinitions = {
  html: { className: "fa-brands fa-html5", label: "HTML" },
  css: { className: "fa-brands fa-css3-alt", label: "CSS" },
  js: { className: "fa-brands fa-js", label: "JavaScript" },
  env: { className: "fa-solid fa-key", label: "ENV" },
  txt: { className: "fa-solid fa-file-lines", label: "TXT" },
  json: { className: "fa-solid fa-code", label: "JSON" },
  image: { className: "fa-solid fa-image", label: "Image" },
  media: { className: "fa-solid fa-photo-film", label: "Media" },
  file: { className: "fa-solid fa-file-code", label: "File" },
};

function getSuggestionIconKind(kind, fileName = "") {
  if (!fileName) return suggestionIconDefinitions[kind] ? kind : "file";
  const ext = getFileType(fileName);
  if (["html", "htm"].includes(ext)) return "html";
  if (["css", "scss", "less"].includes(ext)) return "css";
  if (["js", "mjs", "cjs", "jsx", "ts", "tsx"].includes(ext)) return "js";
  if (ext === "env") return "env";
  if (ext === "txt") return "txt";
  if (["json", "jsonc"].includes(ext)) return "json";
  if (["png", "jpg", "jpeg", "gif", "svg", "webp", "avif", "bmp", "ico"].includes(ext)) return "image";
  if (["mp3", "wav", "ogg", "m4a", "aac", "flac", "mp4", "webm", "ogv", "mov", "m4v"].includes(ext)) return "media";
  return "file";
}

function getSuggestionIconMarkup(kind, fileName = "") {
  const iconKind = getSuggestionIconKind(kind, fileName);
  const definition = suggestionIconDefinitions[iconKind];
  return `<span class="suggestion-icon suggestion-icon-${iconKind}" title="${definition.label}" aria-hidden="true"><i class="${definition.className}"></i></span>`;
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
    const tagIconKind = tagText === "lorem"
      ? "txt"
      : tagText === "style"
        ? "css"
        : tagText === "script"
          ? "js"
          : "html";
    const iconMarkup = getSuggestionIconMarkup(tagIconKind);
    const displayTag = tagMeta.insertText ? highlightedTag : `&lt;${highlightedTag}&gt;`;
    suggestionItem.innerHTML = `
      ${iconMarkup}
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
    suggestionItem.innerHTML = `
      ${getSuggestionIconMarkup("css")}
      <span class="suggestion-content">
        <div class="suggestion-tag">${escapeHtml(entry.value)}</div>
        <div class="suggestion-desc">${escapeHtml(entry.desc || "CSS suggestion")}</div>
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
      ${getSuggestionIconMarkup("html")}
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
  const iconKind = mode === "env" ? "env" : mode === "html-value" ? "html" : "js";

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
      ${getSuggestionIconMarkup(iconKind)}
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
      ${getSuggestionIconMarkup("file", fileName)}
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

  if (!isClosing && String(tag || "").toLowerCase() === "style") {
    const replaceStart = isPlain
      ? textBefore.length - prefix.length
      : textBefore.length - prefix.length - 1;
    const insertedText = "<style></style>";
    const caretPos = replaceStart + "<style>".length;
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

function getInlineStyleSelectorSuggestionLayout(editorValue, replaceStart, replaceEnd) {
  const source = String(editorValue || "");
  const safeStart = Math.max(0, Number(replaceStart || 0));
  const safeEnd = Math.max(safeStart, Number(replaceEnd || safeStart));
  const lineStart = source.lastIndexOf("\n", Math.max(0, safeStart - 1)) + 1;
  const beforeSelector = source.slice(lineStart, safeStart);
  const styleOpenMatch = beforeSelector.match(/^([\t ]*)<style\b[^>]*>[\t ]*$/i);
  if (!styleOpenMatch) return null;
  const afterSelector = source.slice(safeEnd);
  const spaceBeforeClosingStyle = afterSelector.match(/^[\t ]*(?=<\/style\b)/i)?.[0] || "";
  if (!/^<\/style\b/i.test(afterSelector.slice(spaceBeforeClosingStyle.length))) return null;
  const styleIndent = styleOpenMatch[1] || "";
  const selectorIndent = styleIndent + INDENT_UNIT;
  return {
    styleIndent,
    selectorIndent,
    propertyIndent: selectorIndent + INDENT_UNIT,
    replaceEnd: safeEnd + spaceBeforeClosingStyle.length,
  };
}

function buildInlineStyleSelectorSuggestion(value, layout) {
  const selector = String(value || "");
  const insertedText =
    `\n${layout.selectorIndent}${selector} {` +
    `\n${layout.propertyIndent}` +
    `\n${layout.selectorIndent}}` +
    `\n${layout.styleIndent}`;
  const cursorOffset =
    1 + layout.selectorIndent.length + selector.length + 2 + 1 + layout.propertyIndent.length;
  return { insertedText, cursorOffset };
}

function buildIndentedCssSelectorSuggestion(value, baseIndent) {
  const selector = String(value || "");
  const selectorIndent = String(baseIndent || "");
  const propertyIndent = selectorIndent + INDENT_UNIT;
  return {
    insertedText: `${selector} {\n${propertyIndent}\n${selectorIndent}}`,
    cursorOffset: selector.length + 3 + propertyIndent.length,
  };
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
  let applyBaseIndent = true;

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
      const inlineStyleLayout = activeFile.type === "html"
        ? getInlineStyleSelectorSuggestionLayout(editor.value, replaceStart, replaceEnd)
        : null;
      if (inlineStyleLayout) {
        const inlineSuggestion = buildInlineStyleSelectorSuggestion(value, inlineStyleLayout);
        insertedText = inlineSuggestion.insertedText;
        cursorOffset = inlineSuggestion.cursorOffset;
        finalReplaceEnd = inlineStyleLayout.replaceEnd;
        applyBaseIndent = false;
      } else {
        const selectorSuggestion = buildIndentedCssSelectorSuggestion(value, currentIndent);
        insertedText = selectorSuggestion.insertedText;
        cursorOffset = selectorSuggestion.cursorOffset;
        applyBaseIndent = false;
      }
    }
  }

  if (applyBaseIndent && insertedText.includes("\n")) {
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
  const editorValue = editor.value;
  const contextBefore = getBoundedEditorContextBefore(editorValue, pos);
  const isCssContext = fileType === "css" || (fileType === "html" && isInsideStyleTag(contextBefore));
  const isJsContext = fileType === "js" || (fileType === "html" && isInsideScriptTag(contextBefore));

  // 1. Indent level calculation (Find the indentation of the current line)
  const lineStart = editorValue.lastIndexOf("\n", Math.max(0, pos - 1)) + 1;
  const currentLine = editorValue.slice(lineStart, pos);
  const nextCharacter = editorValue.charAt(pos);
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
        (currentLine.endsWith("{") || currentLine.endsWith("(")) &&
        (nextCharacter === "}" || nextCharacter === ")"))
    ) {
      // User is inside a pair like {} or () and hits Enter
      isTriggered = true;
      insertNewlines = 2; // Insert two newlines to create space for content
      // Find the appropriate closing character based on what's before/after
      if (currentLine.endsWith("{") && nextCharacter === "}")
        closingChar = "}";
      if (currentLine.endsWith("(") && nextCharacter === ")")
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

    let replacement = "\n" + currentIndent;
    let newCursorPos;

    if (currentLine.endsWith("{") || currentLine.endsWith("(") || isTriggered) {
      // We need to increase indentation for the next line
      const nextIndent = currentIndent + INDENT_UNIT;

      if (currentLine.endsWith("{") || currentLine.endsWith("(")) {
        // Case 1: Cursor immediately after { or (

        // --- 💡 MODIFICATION START ---
        const autoClosingBracket = currentLine.endsWith("{") ? "}" : ")";

        // Check if the corresponding closing bracket already exists right after the cursor
        const closingExists = nextCharacter === autoClosingBracket;

        if (closingExists) {
          // Scenario: { | } -> Newline + Indent + Newline + CurrentIndent + }
          // This is essentially the same logic as 'isTriggered' but applied to the {|} case
          replacement = "\n" + nextIndent + "\n" + currentIndent;
          newCursorPos = pos + 1 + nextIndent.length; // Pos + \n + newIndent
        } else {
          // Scenario: { | -> Newline + Indent + Newline + CurrentIndent + autoClosingBracket
          // Insert: newline + indent + newline + closing bracket
          replacement = "\n" + nextIndent + "\n" + currentIndent + autoClosingBracket;
          newCursorPos = pos + 1 + nextIndent.length; // Pos + \n + newIndent
        }
        // --- 💡 MODIFICATION END ---
      } else if (isTriggered) {
        // Case 2: Cursor inside {} or () where Enter was pressed (e.g., body{ | } )
        // Insert: newline + indent + newline
        replacement = "\n" + nextIndent + "\n" + currentIndent;
        newCursorPos = pos + 1 + nextIndent.length; // Pos + \n + newIndent
      }
    } else {
      // Case 3: Simple Enter press - just maintain current indentation
      newCursorPos = pos + 1 + currentIndent.length;
    }

    // ... (rest of the Enter handler code) ...
    applyEditorMutation(
      editor,
      pos,
      editor.selectionEnd,
      replacement,
      newCursorPos,
      newCursorPos,
    );

    return true; // Handled
  }

  return false; // Not handled
}

function getMatchingHtmlTagPairAtCaret(editor) {
  if (!editor) return null;
  const selectionStart = Number(editor.selectionStart || 0);
  const selectionEnd = Number(editor.selectionEnd || selectionStart);
  const textBefore = getBoundedEditorContextBefore(editor.value, selectionStart, 4096);
  const textAfter = editor.value.slice(selectionEnd, selectionEnd + 4096);
  const openTagMatch = textBefore.match(/<([a-zA-Z][\w-]*)(?:\s[^<>]*)?>$/);
  if (!openTagMatch) return null;
  const tagName = openTagMatch[1].toLowerCase();
  if (selfClosingTags.includes(tagName)) return null;
  const closingTagMatch = textAfter.match(
    new RegExp(`^([\\t ]*)(</${tagName}\\s*>)`, "i"),
  );
  if (!closingTagMatch) return null;
  return {
    tagName,
    whitespaceLength: closingTagMatch[1].length,
  };
}

function handleHtmlEnterIndentation(e, editor) {
  if (e.key !== "Enter" || activeFile.type !== "html") return false;
  const pos = editor.selectionStart;
  const editorValue = editor.value;
  const lineStart = editorValue.lastIndexOf("\n", Math.max(0, pos - 1)) + 1;
  const currentLine = editorValue.slice(lineStart, pos);
  const currentIndentMatch = currentLine.match(/^(\s*)/);
  const currentIndent = currentIndentMatch ? currentIndentMatch[1] : "";
  const openTagMatch = currentLine.match(/<([a-zA-Z][\w-]*)(?:\s[^<>]*)?>$/);

  if (openTagMatch) {
    const tagName = openTagMatch[1].toLowerCase();
    const matchingPair = getMatchingHtmlTagPairAtCaret(editor);
    if (!selfClosingTags.includes(tagName)) {
      const nextIndent = currentIndent + INDENT_UNIT;
      e.preventDefault();
      const replacement = matchingPair
        ? "\n" + nextIndent + "\n" + currentIndent
        : "\n" + nextIndent;
      const caretPos = pos + 1 + nextIndent.length;
      const replaceEnd = editor.selectionEnd + Number(matchingPair?.whitespaceLength || 0);
      applyEditorMutation(editor, pos, replaceEnd, replacement, caretPos, caretPos);
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
  const textBefore = getBoundedEditorContextBefore(editor.value, start, 4096);
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
  const textBefore = getBoundedEditorContextBefore(editor.value, pos, 4096);

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
  const lineStart = editor.value.lastIndexOf("\n", Math.max(0, pos - 1)) + 1;
  const currentLine = editor.value.slice(lineStart, pos);

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

const EMMET_CARET_MARKER = "\uE000codx-emmet-caret\uE001";

function findFirstEmmetCaretNode(nodes) {
  for (const root of nodes || []) {
    if (selfClosingTags.includes(String(root?.tag || "").toLowerCase())) continue;

    let target = root;
    while (Array.isArray(target.children) && target.children.length) {
      const firstEditableChild = target.children.find(
        (child) => !selfClosingTags.includes(String(child?.tag || "").toLowerCase()),
      );
      if (!firstEditableChild) break;
      target = firstEditableChild;
    }
    return target;
  }
  return null;
}

function renderEmmetNodes(nodes, baseIndent = "", caretTarget = null) {
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

    const caretMarker = node === caretTarget ? EMMET_CARET_MARKER : "";

    if (!node.children.length) {
      return `${indent}${openTag}${caretMarker}${node.text || ""}</${node.tag}>`;
    }

    const childMarkup = node.children.map((child) => renderNode(child, depth + 1)).join("\n");
    const textLine = node.text ? `\n${baseIndent}${INDENT_UNIT.repeat(depth + 1)}${node.text}` : "";
    return `${indent}${openTag}${caretMarker}${textLine}\n${childMarkup}\n${indent}</${node.tag}>`;
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
    const caretTarget = findFirstEmmetCaretNode(nodes);
    const markedReplacement = renderEmmetNodes(
      nodes,
      shouldPreserveIndent ? context.lineIndent : "",
      caretTarget,
    );
    const caretOffset = markedReplacement.indexOf(EMMET_CARET_MARKER);
    const replacement = markedReplacement.replace(EMMET_CARET_MARKER, "");
    const insertStart = shouldPreserveIndent
      ? editor.value.lastIndexOf("\n", context.replaceStart - 1) + 1
      : context.replaceStart;
    const caretPos = insertStart + (caretOffset >= 0 ? caretOffset : replacement.length);

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
    if (
      isLargeEditorContent(editor.value) &&
      (normalizedKey === "z" || normalizedKey === "y")
    ) {
      return;
    }
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

  const contextSensitiveKeys = new Set(["Enter", "Tab", "=", " ", ">", "{", "("]);
  if (
    suggestionPopup.style.display !== "block" &&
    !contextSensitiveKeys.has(e.key)
  ) {
    return;
  }

  const caretContextBefore = getBoundedEditorContextBefore(
    editor.value,
    editor.selectionStart,
  );
  const isHtmlStyleContext =
    activeFile.type === "html" && isInsideStyleTag(caretContextBefore);
  const isHtmlScriptContext =
    activeFile.type === "html" && isInsideScriptTag(caretContextBefore);
  const matchingHtmlTagPair =
    activeFile.type === "html" && e.key === "Enter"
      ? getMatchingHtmlTagPairAtCaret(editor)
      : null;
  const isCssEditorContext = activeFile.type === "css" || isHtmlStyleContext;
  const isCodeEditorContext =
    isCssEditorContext || activeFile.type === "js" || isHtmlScriptContext;

  if (
    activeFile.type === "html" &&
    e.key === "Enter" &&
    ((!isHtmlStyleContext && !isHtmlScriptContext) || matchingHtmlTagPair) &&
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
    const textBefore = getBoundedEditorContextBefore(editor.value, start);

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

  // Keep the hidden developer chord available wherever focus currently sits.
  // The copy action remains untouched; only the second Ctrl/Cmd + X is captured.
  if (mod && key === "c" && !e.shiftKey && !e.altKey) {
    setDeveloperChordArmed(true);
  } else if (developerChordArmed && mod && key === "x" && !e.shiftKey && !e.altKey) {
    e.preventDefault();
    setDeveloperChordArmed(false);
    openDeveloperConsole();
    return;
  } else if (
    developerChordArmed &&
    !["control", "meta", "shift", "alt"].includes(key)
  ) {
    setDeveloperChordArmed(false);
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
    handleCreateNewFileRequest();
  }
  if (mod && e.shiftKey && key === "c") {
    e.preventDefault();
    toggleConsoleWorkspace();
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
  if (activeSessionId && !collabSocket?.connected) {
    ensureCollabSocket();
    return;
  }
  sendCollabHeartbeat();
  resumeCollabSession();
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
  if (editor) renderLineNumberWindow(editor, countTextLines(editor.value), true);
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

function yieldToBrowserDuringImport() {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

function buildImportedFileSummary(label, fileNames) {
  const names = Array.isArray(fileNames) ? fileNames : [];
  if (names.length <= 10) return `${label}! Files: ${names.join(", ")}`;
  return `${label}! ${names.length} files loaded. First files: ${names.slice(0, 5).join(", ")}, and ${names.length - 5} more.`;
}

async function loadImportedProjectFiles(importedFiles, successMessage) {
  if (!Array.isArray(importedFiles) || importedFiles.length === 0) {
    showNotification("No valid project files were found.", "error");
    return false;
  }

  releaseProjectMediaObjectUrls(projectFiles);
  projectFiles = importedFiles.map((file, index) => ({
    ...file,
    name: normalizeProjectFileName(file?.name, `file-${index + 1}.txt`),
    active: index === 0,
  }));
  normalizeProjectFileNamesInPlace(projectFiles);
  activeFile = projectFiles[0];
  const editor = document.getElementById("activeEditor");
  if (editor && activeFile) {
    displayActiveFileInEditor({ resetAllHistory: true });
  }
  renderFileList({ skipNameNormalization: true });
  if (projectFiles.length > ZIP_IMPORT_BATCH_SIZE) await yieldToBrowserDuringImport();
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
    buildImportedFileSummary("Folder imported", importedFiles.map((file) => file.name)),
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
      displayActiveFileInEditor();
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
  hideLocalCollabCursor();
  clearOwnSessionCursorBroadcast();
});
window.addEventListener("blur", hideLocalCollabCursor);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) hideLocalCollabCursor();
});
window.addEventListener("beforeunload", clearOwnSessionCursorBroadcast);
startBackgroundTimers();

// PART 9 - ZIP EXPORT
function showZipExportActionPrompt() {
  return new Promise((resolve) => {
    activeDialogResolver = resolve;
    if (appDialog) appDialog.dataset.dialogKind = "zip-export-choice";
    if (appDialogTitle) appDialogTitle.textContent = "EXPORT ZIP FILE";
    if (appDialogMessage) {
      appDialogMessage.innerHTML = `
        <div class="zip-choice-intro">Create a new ZIP archive or update one already on your device.</div>
        <div class="collab-choice-grid zip-choice-grid">
          <button type="button" id="zipCreateChoiceBtn" class="collab-choice-card zip-choice-card">
            <i class="fa-solid fa-file-circle-plus" aria-hidden="true"></i>
            <span><strong>Export ZIP File</strong><small>Create and download a new project archive.</small></span>
          </button>
          <button type="button" id="zipUpdateChoiceBtn" class="collab-choice-card zip-choice-card">
            <i class="fa-solid fa-file-pen" aria-hidden="true"></i>
            <span><strong>Update ZIP File</strong><small>Choose an existing ZIP and update it with this project.</small></span>
          </button>
        </div>`;
    }
    if (appDialogInput) {
      appDialogInput.style.display = "none";
      appDialogInput.value = "";
      appDialogInput.onkeydown = null;
    }
    if (appDialogActions) {
      appDialogActions.innerHTML = `<button type="button" id="zipChoiceCancelBtn" class="run-button" style="background:#6b7280;"><strong>CANCEL</strong></button>`;
    }
    if (appDialog) appDialog.style.display = "flex";
    document.getElementById("zipCreateChoiceBtn")?.addEventListener("click", () => {
      closeAppDialog({ ok: true, action: "export" });
    });
    document.getElementById("zipUpdateChoiceBtn")?.addEventListener("click", () => {
      closeAppDialog({ ok: true, action: "update" });
    });
    document.getElementById("zipChoiceCancelBtn")?.addEventListener("click", () => {
      closeAppDialog({ ok: false });
    });
    setTimeout(() => document.getElementById("zipCreateChoiceBtn")?.focus(), 0);
  });
}

function downloadZipBlob(content, fileName) {
  const url = URL.createObjectURL(content);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

async function createProjectZipBlob(zip = new JSZip()) {
  projectFiles.forEach((file) => {
    if (file.mediaBlob instanceof Blob) {
      zip.file(file.name, file.mediaBlob);
      return;
    }
    const content = String(file.content || "");
    const encodedMedia = getProjectMediaKind(file)
      ? content.match(/^data:[^;,]+;base64,([\s\S]+)$/i)
      : null;
    if (encodedMedia) {
      zip.file(file.name, encodedMedia[1], { base64: true });
      return;
    }
    zip.file(file.name, content);
  });
  return zip.generateAsync({ type: "blob" });
}

async function exportNewZipFile() {
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
  try {
    const content = await createProjectZipBlob();
    downloadZipBlob(content, zipFileName);
    showNotification(`Project exported as ${zipFileName}!`, "success");
    return true;
  } catch (err) {
    console.error("Export error:", err);
    showNotification("Error creating ZIP file", "error");
    return false;
  }
}

function chooseZipFileWithInput() {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".zip,application/zip,application/x-zip-compressed";
    input.style.display = "none";
    let settled = false;
    const finish = (file = null) => {
      if (settled) return;
      settled = true;
      input.remove();
      resolve(file);
    };
    input.addEventListener("change", () => finish(input.files?.[0] || null), { once: true });
    input.addEventListener("cancel", () => finish(null), { once: true });
    document.body.appendChild(input);
    input.click();
  });
}

async function chooseZipFileForUpdate() {
  if (typeof window.showOpenFilePicker === "function") {
    try {
      const [handle] = await window.showOpenFilePicker({
        multiple: false,
        excludeAcceptAllOption: true,
        types: [{
          description: "ZIP archive",
          accept: { "application/zip": [".zip"] },
        }],
      });
      if (!handle) return null;
      return { file: await handle.getFile(), handle };
    } catch (error) {
      if (error?.name === "AbortError") return null;
    }
  }
  const file = await chooseZipFileWithInput();
  return file ? { file, handle: null } : null;
}

async function updateExistingZipFile() {
  const instruction = await showAppConfirmHtml(
    "UPDATE ZIP FILE",
    "Your file picker will open. Select the existing <strong>.zip</strong> archive you want to update.<br><br>Files with matching paths will be replaced by the current project, new project files will be added, and other archive entries will remain.",
    "CHOOSE ZIP",
    "BACK",
  );
  if (!instruction?.ok) return false;

  const selection = await chooseZipFileForUpdate();
  if (!selection?.file) return false;
  const selectedName = String(selection.file.name || "codx-project.zip");
  if (!/\.zip$/i.test(selectedName)) {
    showNotification("Choose a valid ZIP file to update.", "error");
    return false;
  }

  let existingZip;
  try {
    existingZip = await JSZip.loadAsync(selection.file);
  } catch (error) {
    console.error("ZIP update read error:", error);
    showNotification("That file could not be read as a ZIP archive.", "error");
    return false;
  }

  const confirmation = await showAppConfirmHtml(
    "UPDATE SELECTED ZIP?",
    `Update <strong>${escapeHtml(selectedName)}</strong> with the current project files?`,
    "UPDATE ZIP",
    "CANCEL",
  );
  if (!confirmation?.ok) return false;

  try {
    const content = await createProjectZipBlob(existingZip);
    if (selection.handle && typeof selection.handle.createWritable === "function") {
      try {
        const writable = await selection.handle.createWritable();
        await writable.write(content);
        await writable.close();
        showNotification(`${selectedName} was updated successfully.`, "success");
        return true;
      } catch (error) {
        console.warn("Direct ZIP update unavailable; downloading an updated copy instead.", error);
      }
    }
    downloadZipBlob(content, selectedName);
    showNotification(`Updated ${selectedName} downloaded. Replace the old copy if your browser kept both files.`, "success");
    return true;
  } catch (error) {
    console.error("ZIP update error:", error);
    showNotification("Error updating ZIP file", "error");
    return false;
  }
}

async function exportAsZip() {
  if (activeSessionId && isReadOnlyParticipant() && collabPermissions.disableExportZip) {
    showNotification("The host disabled ZIP export for participants.", "error");
    return false;
  }
  const choice = await showZipExportActionPrompt();
  if (!choice?.ok) return false;
  return choice.action === "update" ? updateExistingZipFile() : exportNewZipFile();
}

// PART 10 - ZIP IMPORT
function getSharedZipRootFolder(paths) {
  const segmentedPaths = (paths || []).map((path) =>
    String(path || "").split("/").filter(Boolean),
  );
  if (
    !segmentedPaths.length ||
    segmentedPaths.some((segments) => segments.length < 2)
  ) {
    return "";
  }
  const candidate = segmentedPaths[0][0];
  return segmentedPaths.every((segments) => segments[0] === candidate) ? candidate : "";
}

async function importProjectFromZipFile(file) {
  if (!file || !/\.zip$/i.test(file.name || "")) {
    showNotification("Please select a valid ZIP file", "error");
    return false;
  }

  try {
    const zip = await JSZip.loadAsync(file);
    const archiveFiles = [];

    zip.forEach((path, entry) => {
      if (entry.dir) return;
      const normalizedPath = String(path || "")
        .replace(/\\/g, "/")
        .replace(/^\/+/, "")
        .replace(/^\.\//, "");
      if (!normalizedPath || normalizedPath.startsWith("__MACOSX/")) return;
      const ext = normalizedPath.split(".").pop().toLowerCase();
      if (editableTextExtensions.includes(ext)) archiveFiles.push({ entry, normalizedPath });
    });

    const sharedRoot = getSharedZipRootFolder(
      archiveFiles.map(({ normalizedPath }) => normalizedPath),
    );
    const foundFiles = [];
    const importedFiles = [];
    for (let index = 0; index < archiveFiles.length; index += ZIP_IMPORT_BATCH_SIZE) {
      const batch = archiveFiles.slice(index, index + ZIP_IMPORT_BATCH_SIZE);
      const batchFiles = await Promise.all(batch.map(async ({ entry, normalizedPath }) => {
        const relativePath = sharedRoot
          ? normalizedPath.split("/").filter(Boolean).slice(1).join("/")
          : normalizedPath;
        const safePath = normalizeProjectFileName(relativePath);
        const ext = safePath.split(".").pop().toLowerCase();
        const content = await entry.async("string");
        return {
          name: safePath,
          type: ext,
          content,
          active: false,
        };
      }));
      importedFiles.push(...batchFiles);
      foundFiles.push(...batchFiles.map((entry) => entry.name));
      if (index + ZIP_IMPORT_BATCH_SIZE < archiveFiles.length) {
        await yieldToBrowserDuringImport();
      }
    }
    if (!importedFiles.length) {
      showNotification("No valid files found in ZIP", "error");
      return false;
    }

    return loadImportedProjectFiles(
      importedFiles,
      buildImportedFileSummary("Project imported", foundFiles),
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

function formatCollabDisplayName(name, fallback = "") {
  const displayName = String(name || fallback || "").trim();
  const myName = String(myInfo.name || "").trim();
  if (!displayName || !myName) return displayName;
  return displayName.toLowerCase() === myName.toLowerCase()
    ? `${displayName} (you)`
    : displayName;
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
  if (!collabBtn) {
    updateFileVisibilityQuickButton();
    return;
  }
  if (!activeSessionId) hideLocalCollabCursor();
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
  updateFileVisibilityQuickButton();
}

function positionCollabManageTutorial() {
  if (!collabManageTutorialEl || !collabBtn || !document.body.contains(collabManageTutorialEl)) return;
  const buttonRect = collabBtn.getBoundingClientRect();
  const popupWidth = Math.min(360, window.innerWidth - 24);
  const left = Math.max(
    12,
    Math.min(window.innerWidth - popupWidth - 12, buttonRect.left + buttonRect.width / 2 - popupWidth / 2),
  );
  const arrowCenter = Math.max(22, Math.min(popupWidth - 22, buttonRect.left + buttonRect.width / 2 - left));
  collabManageTutorialEl.style.width = `${popupWidth}px`;
  collabManageTutorialEl.style.left = `${left}px`;
  collabManageTutorialEl.style.top = `${buttonRect.bottom + 12}px`;
  collabManageTutorialEl.style.setProperty("--collab-tutorial-arrow-left", `${arrowCenter}px`);
}

function dismissCollabManageTutorial() {
  if (!collabManageTutorialEl) return;
  window.removeEventListener("resize", positionCollabManageTutorial);
  window.removeEventListener("scroll", positionCollabManageTutorial, true);
  collabManageTutorialEl.remove();
  collabManageTutorialEl = null;
}

function showCollabManageTutorial() {
  if (!collabBtn || collabManageTutorialEl || safeLocalStorage("get", COLLAB_MANAGE_TUTORIAL_KEY)) return;
  safeLocalStorage("set", COLLAB_MANAGE_TUTORIAL_KEY, "1");
  collabManageTutorialEl = document.createElement("aside");
  collabManageTutorialEl.className = "collab-manage-tutorial";
  collabManageTutorialEl.setAttribute("role", "dialog");
  collabManageTutorialEl.setAttribute("aria-modal", "false");
  collabManageTutorialEl.setAttribute("aria-labelledby", "collabManageTutorialTitle");
  collabManageTutorialEl.innerHTML = `
    <button class="collab-manage-tutorial-close" type="button" aria-label="Close session management tip">&times;</button>
    <span class="collab-manage-tutorial-kicker"><i class="fa-solid fa-circle-check"></i> SESSION CREATED</span>
    <h3 id="collabManageTutorialTitle">This button now manages your session.</h3>
    <p>Click <strong>MANAGE SESSION</strong> whenever you want to view participants, copy the invite, open collaboration tools, or change room controls.</p>
    <button class="run-button collab-manage-tutorial-done" type="button"><strong>GOT IT</strong></button>`;
  document.body.appendChild(collabManageTutorialEl);
  collabManageTutorialEl.querySelector(".collab-manage-tutorial-close")?.addEventListener("click", dismissCollabManageTutorial);
  collabManageTutorialEl.querySelector(".collab-manage-tutorial-done")?.addEventListener("click", dismissCollabManageTutorial);
  window.addEventListener("resize", positionCollabManageTutorial);
  window.addEventListener("scroll", positionCollabManageTutorial, true);
  requestAnimationFrame(() => {
    positionCollabManageTutorial();
    collabManageTutorialEl?.classList.add("visible");
    collabManageTutorialEl?.querySelector(".collab-manage-tutorial-done")?.focus({ preventScroll: true });
  });
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

function isMyCollabParticipant(participant) {
  return Boolean(
    participant &&
      String(participant.name || "").trim().toLowerCase() ===
        String(myInfo.name || "").trim().toLowerCase(),
  );
}

function canRenameParticipant(participant) {
  if (isMyCollabParticipant(participant)) return !participant.renameDisabled;
  return canModerateParticipant(participant);
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
  if (isPairNavigatorEditingLocked()) return false;
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
      const mediaSourceReadOnly = developerMediaSourceVisible && Boolean(getProjectMediaKind(activeFile));
      editor.readOnly = mediaSourceReadOnly;
      editor.title = mediaSourceReadOnly
        ? "Read-only media source enabled from Developer Tools."
        : "";
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
  const personalFileVisibilityLimited = participantRestricted && Array.isArray(me?.allowedFiles);
  const lockNewFile = participantRestricted && (collabPermissions.disableNewFile || personalFileVisibilityLimited);
  const lockExport = participantRestricted && collabPermissions.disableExportZip;
  const lockImport = participantRestricted && collabPermissions.disableImportZip;
  const lockSaveProject = participantRestricted && (collabPermissions.disableSaveProject || personalDisabledFeatures.has("saveProject"));
  const lockOpenSaved = participantRestricted && (collabPermissions.disableOpenSavedProjects || personalDisabledFeatures.has("openSaved"));
  const lockTemplates = participantRestricted && (collabPermissions.disableTemplates || personalDisabledFeatures.has("templates"));
  const lockPublishShare = participantRestricted && (collabPermissions.disablePublishShare || personalDisabledFeatures.has("publishShare"));
  const lockRun = participantRestricted && (collabPermissions.disableRunCode || personalDisabledFeatures.has("runCode"));
  const lockConsole = participantRestricted && (collabPermissions.disableConsoleAccess || personalDisabledFeatures.has("consoleAccess"));
  const globalReadOnly = activeSessionId && (collabPermissions.readOnlyAll || collabPermissions.pauseCollab);
  const pairNavigatorLocked = isPairNavigatorEditingLocked();
  const lockEditor = globalReadOnly || !canCurrentUserEditFile(activeFile ? activeFile.name : "");
  const frozenEditing = participantRestricted && Boolean(me?.frozenEditing);

  if (newFileBtn) {
    newFileBtn.disabled = lockNewFile;
    newFileBtn.title = lockNewFile
      ? personalFileVisibilityLimited
        ? "New files are unavailable while private file visibility limits are active."
        : "The host disabled new file creation."
      : "";
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
    const mediaSourceReadOnly = developerMediaSourceVisible && Boolean(getProjectMediaKind(activeFile));
    editor.readOnly = lockEditor || mediaSourceReadOnly;
    editor.title = mediaSourceReadOnly
      ? "Read-only media source enabled from Developer Tools."
      : lockEditor
      ? globalReadOnly
        ? collabPermissions.pauseCollab
          ? "The host paused collaboration for the group."
          : "The host set the room to read-only."
        : pairNavigatorLocked
        ? "You are the Navigator. Request a role switch or use Live Pair Mode to edit."
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

function captureZenEditorViewState(editor) {
  if (!editor) return null;
  return {
    selectionStart: Number(editor.selectionStart || 0),
    selectionEnd: Number(editor.selectionEnd || 0),
    selectionDirection: editor.selectionDirection || "none",
    scrollTop: Number(editor.scrollTop || 0),
    scrollLeft: Number(editor.scrollLeft || 0),
  };
}

function restoreZenEditorViewState(editor, snapshot) {
  if (!editor || !snapshot) return;
  const selectionStart = Math.min(snapshot.selectionStart, editor.value.length);
  const selectionEnd = Math.min(snapshot.selectionEnd, editor.value.length);
  editor.setSelectionRange(selectionStart, selectionEnd, snapshot.selectionDirection);
  editor.scrollTop = snapshot.scrollTop;
  editor.scrollLeft = snapshot.scrollLeft;
  if (lineNumbers) lineNumbers.scrollTop = editor.scrollTop;
  if (highlightLayer) {
    highlightLayer.scrollTop = editor.scrollTop;
    highlightLayer.scrollLeft = editor.scrollLeft;
  }
}

function toggleZenMode(forceState) {
  const nextZenState =
    typeof forceState === "boolean" ? forceState : !document.body.classList.contains("zen-mode");
  const editorViewSnapshot = captureZenEditorViewState(editorTextarea);
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
  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (editorTextarea) {
      editorTextarea.focus({ preventScroll: true });
      syncSyntaxLayerStyle(editorTextarea);
      renderSyntaxHighlight(editorTextarea);
      restoreZenEditorViewState(editorTextarea, editorViewSnapshot);
      renderErrorHighlights(editorTextarea);
      restoreZenEditorViewState(editorTextarea, editorViewSnapshot);
    }
    if (!isZenMode) {
      updatePreviewDeviceScale();
    }
  }));
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

function approveJoinRequest(socketId, options = {}) {
  if (!collabSocket || !activeSessionId || !isHost()) return Promise.resolve({ ok: false, error: "Host access required." });
  return new Promise((resolve) => {
    collabSocket.emit("collab:approve-join", { sessionId: activeSessionId, socketId }, (res) => {
      if (!res?.ok) {
        if (!options.silent) showNotification((res && res.error) || "Failed to approve join request", "error");
        resolve(res || { ok: false, error: "Failed to approve join request" });
        return;
      }
      if (!options.silent) showNotification("Join request approved.", "success");
      resolve(res);
    });
  });
}

function getModeratableCollabParticipants() {
  return collabParticipants.filter((participant) => canModerateParticipant(participant));
}

function participantCannotSeeFile(participant, fileName) {
  return Boolean(
    participant &&
      Array.isArray(participant.allowedFiles) &&
      !participant.allowedFiles.includes(fileName),
  );
}

function didParticipantFileAccessExpand(previousParticipant, nextParticipant) {
  if (!previousParticipant || !nextParticipant) return false;
  const previousRole = String(previousParticipant.role || "participant");
  const nextRole = String(nextParticipant.role || "participant");
  if (
    !["host", "co-host"].includes(previousRole) &&
    ["host", "co-host"].includes(nextRole)
  ) {
    return true;
  }
  if (!Array.isArray(previousParticipant.allowedFiles)) return false;
  if (!Array.isArray(nextParticipant.allowedFiles)) return true;
  const previousAllowed = new Set(
    previousParticipant.allowedFiles.map((name) => String(name || "").trim().toLowerCase()),
  );
  return nextParticipant.allowedFiles.some(
    (name) => !previousAllowed.has(String(name || "").trim().toLowerCase()),
  );
}

function updateFileVisibilityQuickButton() {
  if (!collabFileVisibilityBtn) return;
  const canManageSession = Boolean(activeSessionId && canUseCoHostTools());
  const canManage = Boolean(canManageSession && activeFile);
  collabFileVisibilityBtn.hidden = !canManage;
  collabFileVisibilityBtn.disabled = !canManage;
  if (!canManageSession) {
    collabFileVisibilityBtn.classList.remove("has-hidden-users");
    document.querySelectorAll(".file-visibility-action").forEach((button) => button.remove());
  }
  if (!canManage) return;
  const hiddenCount = getModeratableCollabParticipants().filter((participant) =>
    participantCannotSeeFile(participant, activeFile.name),
  ).length;
  collabFileVisibilityBtn.classList.toggle("has-hidden-users", hiddenCount > 0);
  collabFileVisibilityBtn.title = hiddenCount
    ? `${hiddenCount} participant(s) cannot see ${activeFile.name}`
    : `Everyone can see ${activeFile.name}`;
  collabFileVisibilityBtn.setAttribute("aria-label", `Manage visibility for ${activeFile.name}`);
}

function rejectJoinRequest(socketId, options = {}) {
  if (!collabSocket || !activeSessionId || !isHost()) return Promise.resolve({ ok: false, error: "Host access required." });
  return new Promise((resolve) => {
    collabSocket.emit("collab:reject-join", { sessionId: activeSessionId, socketId }, (res) => {
      if (!res?.ok) {
        if (!options.silent) showNotification((res && res.error) || "Failed to reject join request", "error");
        resolve(res || { ok: false, error: "Failed to reject join request" });
        return;
      }
      if (!options.silent) showNotification("Join request rejected.", "success");
      resolve(res);
    });
  });
}

function getSafeWaitingRoomColor(value) {
  const color = String(value || "").trim();
  return /^#[0-9a-f]{6}$/i.test(color) ? color : "#4CAF50";
}

let waitingRoomBulkAdmissionInProgress = false;

function removeWaitingRoomPopup() {
  document.getElementById("waitingRoomPopup")?.remove();
}

async function admitAllWaitingRoomUsers() {
  if (!isHost() || !collabPendingJoins.length || waitingRoomBulkAdmissionInProgress) return;
  const requests = collabPendingJoins.map((entry) => ({ ...entry }));
  const dialog = await showAppConfirm(
    "ADMIT EVERYONE?",
    `Are you sure you want to admit all ${requests.length} waiting ${requests.length === 1 ? "person" : "people"}? They will immediately receive access to the collaboration session.`,
    "YES, ADMIT ALL",
    "CANCEL",
  );
  if (!dialog?.ok) return;
  waitingRoomBulkAdmissionInProgress = true;
  renderWaitingRoomPopup();
  try {
    const results = [];
    for (const request of requests) {
      results.push(await approveJoinRequest(request.socketId, { silent: true }));
    }
    const admitted = results.filter((result) => result?.ok).length;
    const failed = results.length - admitted;
    if (admitted) showNotification(`${admitted} ${admitted === 1 ? "person" : "people"} admitted.`, "success");
    if (failed) showNotification(`${failed} join ${failed === 1 ? "request" : "requests"} could not be admitted.`, "error");
  } finally {
    waitingRoomBulkAdmissionInProgress = false;
    renderWaitingRoomPopup();
  }
}

function renderWaitingRoomPopup() {
  removeWaitingRoomPopup();
  if (
    !activeSessionId ||
    !isHost() ||
    !collabPermissions.requireJoinApproval ||
    !Array.isArray(collabPendingJoins) ||
    !collabPendingJoins.length
  ) return;

  const popup = document.createElement("aside");
  popup.id = "waitingRoomPopup";
  popup.className = "waiting-room-popup";
  popup.setAttribute("role", "dialog");
  popup.setAttribute("aria-label", "Waiting room join requests");
  popup.innerHTML = `
    <div class="waiting-room-popup-header">
      <div>
        <span><i class="fa-solid fa-user-clock"></i> WAITING ROOM</span>
        <strong>${collabPendingJoins.length} waiting</strong>
      </div>
      <button id="waitingRoomAdmitAllBtn" type="button" ${waitingRoomBulkAdmissionInProgress ? "disabled" : ""}>${waitingRoomBulkAdmissionInProgress ? '<i class="fa-solid fa-spinner fa-spin"></i> ADMITTING' : '<i class="fa-solid fa-users"></i> ADMIT ALL'}</button>
    </div>
    <div class="waiting-room-request-list">
      ${collabPendingJoins.map((entry) => {
        const color = getSafeWaitingRoomColor(entry.theme);
        return `<article class="waiting-room-request-card" data-waiting-socket="${escapeHtmlAttributeValue(entry.socketId)}">
          <div class="waiting-room-user">
            <span class="waiting-room-color" style="--waiting-user-color:${color}">${escapeHtml(String(entry.name || "?").slice(0, 1).toUpperCase())}</span>
            <div>
              <strong>${escapeHtml(entry.name || "Unknown user")}</strong>
              <small><span style="background:${color}"></span> Chosen color ${escapeHtml(color.toUpperCase())}</small>
            </div>
          </div>
          <div class="waiting-room-actions">
            <button type="button" class="waiting-room-accept" data-waiting-action="accept" ${waitingRoomBulkAdmissionInProgress ? "disabled" : ""}><i class="fa-solid fa-check"></i> ACCEPT</button>
            <button type="button" class="waiting-room-deny" data-waiting-action="deny" ${waitingRoomBulkAdmissionInProgress ? "disabled" : ""}><i class="fa-solid fa-xmark"></i> DENY</button>
          </div>
        </article>`;
      }).join("")}
    </div>`;
  document.body.appendChild(popup);

  document.getElementById("waitingRoomAdmitAllBtn")?.addEventListener("click", admitAllWaitingRoomUsers);
  popup.querySelectorAll("[data-waiting-action]").forEach((button) => {
    button.addEventListener("click", async () => {
      if (waitingRoomBulkAdmissionInProgress) return;
      const card = button.closest("[data-waiting-socket]");
      const socketId = card?.dataset.waitingSocket || "";
      if (!socketId) return;
      card.querySelectorAll("button").forEach((action) => { action.disabled = true; });
      const result = button.dataset.waitingAction === "accept"
        ? await approveJoinRequest(socketId)
        : await rejectJoinRequest(socketId);
      if (!result?.ok) card.querySelectorAll("button").forEach((action) => { action.disabled = false; });
    });
  });
}

function openWaitingRoomRequestFromNotification(socketId) {
  if (!activeSessionId || !isHost()) return;
  renderWaitingRoomPopup();
  requestAnimationFrame(() => {
    const requestCard = Array.from(document.querySelectorAll("[data-waiting-socket]"))
      .find((card) => card.dataset.waitingSocket === String(socketId || ""));
    if (!requestCard) return;
    requestCard.scrollIntoView({ behavior: "smooth", block: "center" });
    requestCard.classList.add("notification-target-flash");
    setTimeout(() => requestCard.classList.remove("notification-target-flash"), 1800);
    requestCard.querySelector("[data-waiting-action='accept']")?.focus();
  });
}

function showJoinPendingState(sessionId, name, hostName = "") {
  const resolvedHostName = String(hostName || collabHostName || "").trim();
  if (resolvedHostName) collabHostName = resolvedHostName;
  joinRequestContext = { sessionId, name, hostName: resolvedHostName };
  const sessionLabel = resolvedHostName
    ? `${resolvedHostName}'s session`
    : "the host's session";
  collabModalView = "join-pending";
  setCollabCloseButtonVisible(false);
  modalTitle.innerHTML = "<strong>WAITING FOR APPROVAL</strong>";
  modalBody.innerHTML = `
    <p style="margin:8px 0 16px;color:var(--text-primary);">
      Your request to join <strong>${escapeHtml(sessionLabel)}</strong> as <strong>${escapeHtml(name)}</strong> is waiting for the host.
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
  const activePairsHtml = pairOverview.length
    ? pairOverview.map((pair) => `
        <div class="collab-pending-row" data-active-pair-id="${escapeHtml(pair.id)}">
          <div class="collab-participant-text">
            <div class="collab-participant-name">${escapeHtml((pair.members || []).map((name) => formatCollabDisplayName(name)).join(" + "))}${pair.helpRequested ? `<span class="pair-participant-badge">Needs help</span>` : ""}</div>
            <div class="collab-participant-meta">${escapeHtml(pair.mode === "live" ? "Live Pair" : `Driver: ${formatCollabDisplayName(pair.driver)}`)} · ${escapeHtml(pair.status || "active")}</div>
          </div>
          <button class="run-button end-pair-btn" data-pair-id="${escapeHtml(pair.id)}" style="background:#b42318;"><strong>END PAIR</strong></button>
        </div>`).join("")
    : `<div class="collab-section-note">No active pairs.</div>`;

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
    <div class="collab-section-card">
      <h4 class="collab-section-title">Active Pairs</h4>
      <div class="collab-participant-list">${activePairsHtml}</div>
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
        ${renderCollabControlButton({ id: "groupPairingBtn", icon: "fa-solid fa-code-compare", title: collabPermissions.disablePairing ? "Enable Pairing" : "Disable Pairing", desc: collabPermissions.disablePairing ? "Allow new participant pairs." : "End active pairs and block new invitations.", active: collabPermissions.disablePairing, tone: "purple" })}
      </div>
    </div>` : ""}
    <div class="collab-section-card">
      <h4 class="collab-section-title">Participant Controls</h4>
      <div class="collab-control-grid">
        ${renderCollabControlButton({ id: "groupManageMuteBtn", icon: "fa-solid fa-comment-slash", title: `Mute Chat (${countParticipantsWithFlag("mutedChat")} affected)`, desc: "Pick who cannot chat.", active: countParticipantsWithFlag("mutedChat") > 0, tone: "warning" })}
        ${renderCollabControlButton({ id: "groupManageFreezeBtn", icon: "fa-solid fa-snowflake", title: `Freeze Editing (${countParticipantsWithFlag("frozenEditing")} affected)`, desc: "Pick who cannot edit.", active: countParticipantsWithFlag("frozenEditing") > 0, tone: "blue" })}
        ${renderCollabControlButton({ id: "groupManagePriorityBtn", icon: "fa-solid fa-star", title: `Priority (${countParticipantsWithFlag("priority")} marked)`, desc: "Pick priority people.", active: countParticipantsWithFlag("priority") > 0, tone: "purple" })}
        ${renderCollabControlButton({ id: "groupDisablePairBtn", icon: "fa-solid fa-code-compare", title: `Pair Access (${countParticipantsWithDisabledFeature("pairing")} blocked)`, desc: "Pick who cannot send or accept pair invitations.", active: countParticipantsWithDisabledFeature("pairing") > 0, tone: "purple" })}
        ${renderCollabControlButton({ id: "groupHideFilesBtn", icon: "fa-solid fa-eye-slash", title: "Hide Files", desc: "Choose who cannot see a file.", active: collabParticipants.some((participant) => Array.isArray(participant.allowedFiles)) })}
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
  bind("groupPairingBtn", () =>
    updateGroupPermission(
      { disablePairing: !collabPermissions.disablePairing },
      collabPermissions.disablePairing ? "Pairing enabled." : "Pairing disabled and active pairs ended.",
    ),
  );
  bind("groupManageMuteBtn", () => showGroupParticipantFlagPicker("mutedChat"));
  bind("groupManageFreezeBtn", () => showGroupParticipantFlagPicker("frozenEditing"));
  bind("groupManagePriorityBtn", () => showGroupParticipantFlagPicker("priority"));
  bind("groupDisablePairBtn", () => showGroupFeatureAccessPicker("pairing"));
  bind("groupHideFilesBtn", () => showFileVisibilityEditor(activeFile ? activeFile.name : "", "group-controls"));
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
  modalBody.querySelectorAll(".end-pair-btn").forEach((button) => {
    button.onclick = async () => {
      const response = await emitPairEvent("collab:pair:end", { pairId: button.dataset.pairId });
      if (!response?.ok) showNotification(response?.error || "Unable to end the pair.", "error");
    };
  });

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

function emitCollabWithAck(eventName, payload, timeoutMs = 5000) {
  return new Promise((resolve, reject) => {
    if (!collabSocket?.connected) {
      reject(new Error("Collaboration is not connected."));
      return;
    }
    let settled = false;
    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      const error = new Error("The collaboration server did not respond.");
      error.code = "ACK_TIMEOUT";
      reject(error);
    }, timeoutMs);
    collabSocket.emit(eventName, payload, (response) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(response || { ok: false, error: "Empty server response." });
    });
  });
}

async function updateParticipantAllowedFiles(targetName, allowedFiles, reset = false) {
  if (!collabSocket || !activeSessionId || !canUseCoHostTools()) return false;
  const participant = getParticipantByName(targetName);
  if (!canModerateParticipant(participant)) {
    showNotification("You do not have permission to update this file access.", "error");
    return false;
  }
  try {
    const res = await emitCollabWithAck("collab:set-participant-files", {
      sessionId: activeSessionId,
      targetName,
      allowedFiles,
      reset,
    });
    if (!res?.ok) {
      showNotification(res?.error || "Failed to update file access", "error");
      return false;
    }
    showNotification(
      reset ? `${targetName}'s hidden files were cleared.` : `${targetName}'s hidden files updated.`,
      "success",
    );
    renderFileList();
    showParticipantActions(targetName);
    return true;
  } catch (error) {
    showNotification(error?.message || "Failed to update file access", "error");
    return false;
  }
}

async function saveFileVisibility(fileName, hiddenFor) {
  const hiddenNames = new Set((hiddenFor || []).map((name) => String(name || "").trim().toLowerCase()));
  try {
    const response = await emitCollabWithAck(
      "collab:set-file-visibility",
      { sessionId: activeSessionId, fileName, hiddenFor },
      2800,
    );
    if (!response?.ok) throw new Error(response?.error || "Failed to update file visibility.");
    return true;
  } catch (error) {
    if (error?.code !== "ACK_TIMEOUT") throw error;
  }

  const allFileNames = projectFiles.map((file) => file.name);
  const updates = getModeratableCollabParticipants().map(async (participant) => {
    const participantKey = String(participant.name || "").trim().toLowerCase();
    const shouldHide = hiddenNames.has(participantKey);
    const currentlyAllowed = Array.isArray(participant.allowedFiles)
      ? [...participant.allowedFiles]
      : [...allFileNames];
    const nextAllowed = shouldHide
      ? currentlyAllowed.filter((name) => name !== fileName)
      : Array.from(new Set([...currentlyAllowed, fileName]));
    const reset = nextAllowed.length === allFileNames.length;
    const response = await emitCollabWithAck("collab:set-participant-files", {
      sessionId: activeSessionId,
      targetName: participant.name,
      allowedFiles: reset ? [] : nextAllowed,
      reset,
    });
    if (!response?.ok) throw new Error(response?.error || `Failed to update ${participant.name}.`);
  });
  await Promise.all(updates);
  return true;
}

const groupFeatureControlConfig = [
  { key: "chat", buttonId: "groupDisableChatBtn", label: "DISABLE CHAT" },
  { key: "saveProject", buttonId: "groupDisableSaveBtn", label: "DISABLE SAVE PROJECT" },
  { key: "openSaved", buttonId: "groupDisableOpenSavedBtn", label: "DISABLE OPEN SAVED" },
  { key: "templates", buttonId: "groupDisableTemplatesBtn", label: "DISABLE TEMPLATES" },
  { key: "publishShare", buttonId: "groupDisablePublishBtn", label: "DISABLE PUBLISH / SHARE" },
  { key: "runCode", buttonId: "groupDisableRunBtn", label: "DISABLE RUN" },
  { key: "consoleAccess", buttonId: "groupDisableConsoleBtn", label: "DISABLE CONSOLE" },
  { key: "pairing", buttonId: "groupDisablePairBtn", label: "DISABLE PAIRING" },
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
  const hiddenFileNames = projectFiles
    .filter((file) => participantCannotSeeFile(participant, file.name))
    .map((file) => file.name);
  const allowedText = hiddenFileNames.length ? hiddenFileNames.join(", ") : "None";
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
      <p><strong>Self-renaming:</strong> ${participant.renameDisabled ? "Disabled" : "Enabled"}</p>
      <p><strong>Priority:</strong> ${participant.priority ? "Marked" : "Normal"}</p>
      <p><strong>Hidden files:</strong> ${escapeHtml(allowedText)}</p>
    </div>
  `;
  setModalActions(`
    <button id="participantDetailsBackBtn" class="run-button"><strong>BACK</strong></button>
  `);
  const backBtn = document.getElementById("participantDetailsBackBtn");
  if (backBtn) backBtn.onclick = () => showParticipantActions(targetName);
  collabModal.style.display = "flex";
}

function showFileVisibilityEditor(fileName = "", returnView = "group-controls", fixedFile = false) {
  if (!canUseCoHostTools()) return;
  const selectedFile = projectFiles.find((file) => file.name === fileName) || activeFile || projectFiles[0];
  if (!selectedFile) {
    showNotification("There are no files to manage.", "info");
    return;
  }
  const participants = getModeratableCollabParticipants();
  const fileOptions = projectFiles
    .map((file) => `<option value="${escapeHtml(file.name)}" ${file.name === selectedFile.name ? "selected" : ""}>${escapeHtml(file.name)}</option>`)
    .join("");
  const participantOptions = participants
    .map((participant) => `
      <label class="file-access-option">
        <span class="file-access-check">
          <input type="checkbox" value="${escapeHtml(participant.name)}" ${participantCannotSeeFile(participant, selectedFile.name) ? "checked" : ""}>
          <span class="file-access-box" aria-hidden="true"></span>
        </span>
        <span class="file-access-name">
          <span class="collab-participant-color" style="display:inline-block;background:${escapeHtml(participant.theme || "#4CAF50")};"></span>
          ${escapeHtml(participant.name)}
        </span>
      </label>`)
    .join("");
  collabModalView = "file-visibility";
  setCollabCloseButtonVisible(true);
  modalTitle.innerHTML = fixedFile ? "<strong>HIDE FILE</strong>" : "<strong>HIDE FILES</strong>";
  modalBody.innerHTML = `
    <div class="collab-section-card file-visibility-card">
      <span class="collab-meta-label">FILE</span>
      ${fixedFile
        ? `<div class="visibility-file-name"><i class="fa-regular fa-file-code" aria-hidden="true"></i><strong>${escapeHtml(selectedFile.name)}</strong></div>`
        : `<select id="visibilityFileSelect" class="collab-select" aria-label="Choose a file">${fileOptions}</select>`}
      <p class="collab-section-note">Checked participants cannot see this file in their Files tab. Hosts and co-hosts keep access.</p>
      <label class="file-access-option file-access-select-all">
        <span class="file-access-check">
          <input id="visibilitySelectAll" type="checkbox">
          <span class="file-access-box" aria-hidden="true"></span>
        </span>
        <span class="file-access-name"><strong>SELECT ALL PARTICIPANTS</strong></span>
      </label>
      <div id="fileVisibilityParticipantList" class="participant-file-access-list">
        ${participantOptions || `<div class="collab-section-note">No participants are available to manage.</div>`}
      </div>
    </div>`;
  setModalActions(`
    <button id="fileVisibilitySaveBtn" class="run-button"><strong>SAVE VISIBILITY</strong></button>
    <button id="fileVisibilityBackBtn" class="run-button"><strong>BACK</strong></button>
  `);
  collabModal.style.display = "flex";

  const select = document.getElementById("visibilityFileSelect");
  const selectAll = document.getElementById("visibilitySelectAll");
  const list = document.getElementById("fileVisibilityParticipantList");
  const boxes = () => Array.from(list?.querySelectorAll("input[type='checkbox']") || []);
  const syncSelectAll = () => {
    if (!selectAll) return;
    const current = boxes();
    selectAll.checked = current.length > 0 && current.every((input) => input.checked);
    selectAll.indeterminate = current.some((input) => input.checked) && !selectAll.checked;
  };
  boxes().forEach((input) => input.addEventListener("change", syncSelectAll));
  syncSelectAll();
  if (selectAll) selectAll.onchange = () => boxes().forEach((input) => { input.checked = selectAll.checked; });
  if (select) select.onchange = () => showFileVisibilityEditor(select.value, returnView, false);
  const saveBtn = document.getElementById("fileVisibilitySaveBtn");
  if (saveBtn) saveBtn.onclick = async () => {
    const hiddenFor = boxes().filter((input) => input.checked).map((input) => input.value);
    const label = saveBtn.querySelector("strong");
    saveBtn.disabled = true;
    if (label) label.textContent = "SAVING...";
    try {
      await saveFileVisibility(selectedFile.name, hiddenFor);
      showNotification(`${selectedFile.name} visibility updated.`, "success");
      renderFileList();
      if (returnView === "group-controls") showGroupControls(activeSessionId);
      else if (returnView === "session") showSessionDetails(activeSessionId);
      else closeModal();
    } catch (error) {
      saveBtn.disabled = false;
      if (label) label.textContent = "SAVE VISIBILITY";
      showNotification(error?.message || "Failed to update file visibility.", "error");
    }
  };
  const backBtn = document.getElementById("fileVisibilityBackBtn");
  if (backBtn) backBtn.onclick = () => {
    if (returnView === "group-controls") showGroupControls(activeSessionId);
    else if (returnView === "session") showSessionDetails(activeSessionId);
    else closeModal();
  };
}

function showParticipantFileAccessEditor(targetName) {
  if (!canUseCoHostTools()) return;
  const participant = getParticipantByName(targetName);
  if (!canModerateParticipant(participant)) return;
  const hiddenSet = new Set(
    projectFiles
      .filter((file) => participantCannotSeeFile(participant, file.name))
      .map((file) => file.name),
  );
  const options = projectFiles
    .map((file) => `
      <label class="file-access-option">
        <span class="file-access-check">
          <input type="checkbox" value="${escapeHtml(file.name)}" ${hiddenSet.has(file.name) ? "checked" : ""}>
          <span class="file-access-box" aria-hidden="true"></span>
        </span>
        <span class="file-access-name">${escapeHtml(file.name)}</span>
      </label>
    `)
    .join("");
  collabModalView = "participant-actions";
  setCollabCloseButtonVisible(true);
  modalTitle.innerHTML = "<strong>HIDE FILE</strong>";
  modalBody.innerHTML = `
    <p style="margin: 8px 0 12px; color: var(--text-primary);">
      Checked files will be hidden from <strong>${escapeHtml(participant.name)}</strong>'s Files tab.
    </p>
    <label class="file-access-option file-access-select-all">
      <span class="file-access-check">
        <input id="participantFilesSelectAll" type="checkbox">
        <span class="file-access-box" aria-hidden="true"></span>
      </span>
      <span class="file-access-name"><strong>SELECT ALL FILES</strong></span>
    </label>
    <div id="participantFileAccessList" class="participant-file-access-list" style="text-align:left;max-height:220px;overflow:auto;border:1px solid var(--border-color);border-radius:8px;padding:10px;background:var(--bg-primary);">
      ${options || `<div style="color:var(--text-muted);">No files available.</div>`}
    </div>
  `;
  setModalActions(`
    <button id="participantFileAccessSaveBtn" class="run-button"><strong>SAVE</strong></button>
    <button id="participantFileAccessResetBtn" class="run-button"><strong>SHOW ALL FILES</strong></button>
    <button id="participantFileAccessBackBtn" class="run-button"><strong>BACK</strong></button>
  `);
  const saveBtn = document.getElementById("participantFileAccessSaveBtn");
  const resetBtn = document.getElementById("participantFileAccessResetBtn");
  const backBtn = document.getElementById("participantFileAccessBackBtn");
  const selectAll = document.getElementById("participantFilesSelectAll");
  const fileInputs = () => Array.from(document.querySelectorAll("#participantFileAccessList input[type='checkbox']"));
  const syncSelectAll = () => {
    if (!selectAll) return;
    const inputs = fileInputs();
    selectAll.checked = inputs.length > 0 && inputs.every((input) => input.checked);
    selectAll.indeterminate = inputs.some((input) => input.checked) && !selectAll.checked;
  };
  fileInputs().forEach((input) => input.addEventListener("change", syncSelectAll));
  syncSelectAll();
  if (selectAll) selectAll.onchange = () => fileInputs().forEach((input) => { input.checked = selectAll.checked; });
  if (saveBtn) {
    saveBtn.onclick = async () => {
      const hiddenFiles = fileInputs().filter((input) => input.checked).map((input) => input.value);
      const allowedFiles = projectFiles.map((file) => file.name).filter((name) => !hiddenFiles.includes(name));
      const label = saveBtn.querySelector("strong");
      saveBtn.disabled = true;
      if (resetBtn) resetBtn.disabled = true;
      if (label) label.textContent = "SAVING...";
      const saved = await updateParticipantAllowedFiles(
        participant.name,
        allowedFiles,
        false,
      );
      if (!saved && document.body.contains(saveBtn)) {
        saveBtn.disabled = false;
        if (resetBtn) resetBtn.disabled = false;
        if (label) label.textContent = "SAVE";
      }
    };
  }
  if (resetBtn) {
    resetBtn.onclick = async () => {
      resetBtn.disabled = true;
      const saved = await updateParticipantAllowedFiles(participant.name, [], true);
      if (!saved && document.body.contains(resetBtn)) resetBtn.disabled = false;
    };
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
  const pairViewSyncActive = isPairViewSyncActive();
  if (!activeFile || activeFile.name !== participant.currentFile) {
    if (pairViewSyncActive) pairIgnoreLocalScrollUntil = Date.now() + 700;
    switchFile(participant.currentFile);
    if (!pairViewSyncActive) setTimeout(() => syncFollowedParticipantCursor(), 0);
    return;
  }
  if (pairViewSyncActive) return;
  syncFollowedParticipantCursor();
}

function syncFollowedParticipantCursor(cursorOverride = null) {
  if (!followedParticipantName) return;
  // Pair Sync View follows the partner's exact presence scroll. The general
  // cursor-centering behavior would otherwise fight that position and flicker.
  if (isPairViewSyncActive()) return;
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

function formatCollabUnreadCount(count) {
  const value = Math.max(0, Number(count) || 0);
  return value > 99 ? "99+" : String(value);
}

function getPrivateUnreadKey(name) {
  return String(name || "").trim().toLowerCase();
}

function getPrivateUnreadCount(name) {
  return Math.max(0, Number(collabUnreadPrivateMessages[getPrivateUnreadKey(name)]) || 0);
}

function getTotalPrivateUnreadCount() {
  return Object.values(collabUnreadPrivateMessages).reduce(
    (total, count) => total + Math.max(0, Number(count) || 0),
    0,
  );
}

function getTotalCollabUnreadCount() {
  return Math.max(0, Number(collabUnreadGroupMessages) || 0) + getTotalPrivateUnreadCount();
}

function isViewingCollabChat(mode, targetName = "") {
  if (
    !collabModal ||
    collabModal.style.display !== "flex" ||
    collabModalView !== "session" ||
    !document.getElementById("collabChatMessages")
  ) {
    return false;
  }
  if (mode === "group") return collabChatMode === "group";
  return (
    collabChatMode === "private" &&
    getPrivateUnreadKey(collabChatTarget) === getPrivateUnreadKey(targetName)
  );
}

function updateCollabUnreadBadges() {
  const totalUnread = getTotalCollabUnreadCount();
  const label = formatCollabUnreadCount(totalUnread);
  if (collabMessageBadge) {
    collabMessageBadge.textContent = label;
    collabMessageBadge.hidden = totalUnread === 0;
    collabMessageBadge.setAttribute(
      "aria-label",
      `${totalUnread} unread collaboration message${totalUnread === 1 ? "" : "s"}`,
    );
  }
  collabBtn?.classList.toggle("has-unread-messages", totalUnread > 0);

  const dropdownBadge = document.getElementById("collabChatDropdownBadge");
  if (dropdownBadge) {
    dropdownBadge.textContent = label;
    dropdownBadge.hidden = totalUnread === 0;
    dropdownBadge.setAttribute("aria-label", `${totalUnread} unread message${totalUnread === 1 ? "" : "s"}`);
  }

  const modeEl = document.getElementById("collabChatMode");
  if (modeEl) {
    const groupOption = modeEl.querySelector('option[value="group"]');
    const privateOption = modeEl.querySelector('option[value="private"]');
    const groupDisabled = collabPermissions.disableGroupChat || collabPermissions.disableAllChat;
    if (groupOption) {
      groupOption.textContent = `Group Chat${collabUnreadGroupMessages ? ` (${formatCollabUnreadCount(collabUnreadGroupMessages)})` : ""}${groupDisabled ? " (disabled)" : ""}`;
    }
    const privateUnread = getTotalPrivateUnreadCount();
    if (privateOption) {
      privateOption.textContent = `Private Chat${privateUnread ? ` (${formatCollabUnreadCount(privateUnread)})` : ""}`;
    }
  }

  const targetEl = document.getElementById("collabChatTarget");
  if (targetEl) {
    Array.from(targetEl.options).forEach((option) => {
      const unread = getPrivateUnreadCount(option.value);
      option.textContent = `${option.value}${unread ? ` (${formatCollabUnreadCount(unread)})` : ""}`;
    });
  }
}

function markCurrentCollabChatRead() {
  if (!isViewingCollabChat(collabChatMode, collabChatTarget)) return;
  if (collabChatMode === "group") {
    collabUnreadGroupMessages = 0;
  } else if (collabChatTarget) {
    delete collabUnreadPrivateMessages[getPrivateUnreadKey(collabChatTarget)];
  }
  updateCollabUnreadBadges();
}

function resetCollabUnreadMessages() {
  collabUnreadGroupMessages = 0;
  collabUnreadPrivateMessages = {};
  updateCollabUnreadBadges();
}

function openCollabChatFromNotification(mode, targetName = "") {
  if (!activeSessionId) return;
  collabChatMode = mode === "private" ? "private" : "group";
  collabChatTarget = collabChatMode === "private" ? String(targetName || "") : "";
  if (collabChatMode === "group") {
    collabUnreadGroupMessages = 0;
  } else if (collabChatTarget) {
    delete collabUnreadPrivateMessages[getPrivateUnreadKey(collabChatTarget)];
  }
  updateCollabUnreadBadges();
  showSessionDetails(activeSessionId);
  requestAnimationFrame(() => {
    document.getElementById("collabChatMessages")?.scrollIntoView({ behavior: "smooth", block: "center" });
    document.getElementById("collabChatInput")?.focus();
  });
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
          <span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${escapeHtml(senderTheme)};margin-right:6px;vertical-align:middle;"></span><strong style="color:${escapeHtml(senderTheme)};">${escapeHtml(formatCollabDisplayName(m.from))}</strong>${m.to ? ` to <strong>${escapeHtml(formatCollabDisplayName(m.to))}</strong>` : ""}</span>
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
      <div class="collab-chat-dropdown-wrap">
        <select id="collabChatMode" style="width:100%;min-width:140px;padding:8px;background:var(--bg-tertiary);border:1px solid var(--border-color);color:var(--text-primary);border-radius:6px;">
          ${groupOption}
          ${privateOption}
        </select>
        <span id="collabChatDropdownBadge" class="collab-chat-dropdown-badge" aria-label="0 unread messages" hidden>0</span>
      </div>
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
  const messagesEl = document.getElementById("collabChatMessages");
  if (!modeEl || !inputEl || !sendBtn) return;

  modeEl.addEventListener("pointerdown", markCurrentCollabChatRead);
  messagesEl?.addEventListener("pointerdown", markCurrentCollabChatRead);

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
    markCurrentCollabChatRead();
  };

  if (targetEl) {
    targetEl.onchange = () => {
      collabChatTarget = targetEl.value || "";
      renderCollabChatMessages();
      markCurrentCollabChatRead();
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

function getPairOverviewForName(name) {
  const key = String(name || "").trim().toLowerCase();
  return pairOverview.find((pair) =>
    Array.isArray(pair?.members) && pair.members.some((memberName) => String(memberName || "").trim().toLowerCase() === key),
  ) || null;
}

function getPairPartnerName(pair = activePairState) {
  const myKey = String(myInfo.name || "").trim().toLowerCase();
  return (pair?.members || []).find((name) => String(name || "").trim().toLowerCase() !== myKey) || "";
}

function openPairToolsFromNotification(tab = "chat") {
  if (!activePairState || !activeSessionId) return;
  const allowedTabs = new Set(["chat", "suggestions", "tasks", "activity"]);
  pairPanelTab = allowedTabs.has(tab) ? tab : "chat";
  pairPanelOpen = true;
  clearPairToolActivity(pairPanelTab);
  renderPairDock();
  requestAnimationFrame(() => {
    const focusTarget = pairPanelTab === "chat"
      ? document.getElementById("pairChatInput")
      : pairPanelTab === "tasks"
        ? document.getElementById("pairTaskInput")
        : document.querySelector(".pair-panel-body");
    focusTarget?.focus?.();
  });
}

function openPairSuggestionFromNotification() {
  const editorState = editorTextarea
    ? {
        selectionStart: editorTextarea.selectionStart,
        selectionEnd: editorTextarea.selectionEnd,
        scrollTop: editorTextarea.scrollTop,
        scrollLeft: editorTextarea.scrollLeft,
      }
    : null;
  openPairToolsFromNotification("suggestions");
  requestAnimationFrame(() => {
    if (!editorTextarea || !editorState) return;
    editorTextarea.setSelectionRange(editorState.selectionStart, editorState.selectionEnd);
    editorTextarea.scrollTop = editorState.scrollTop;
    editorTextarea.scrollLeft = editorState.scrollLeft;
  });
}

function openPairTaskFromNotification(taskId) {
  openPairToolsFromNotification("tasks");
  requestAnimationFrame(() => {
    const taskRow = Array.from(document.querySelectorAll("[data-pair-task-id]"))
      .find((row) => row.dataset.pairTaskId === String(taskId || ""));
    if (!taskRow) return;
    taskRow.scrollIntoView({ behavior: "smooth", block: "center" });
    taskRow.classList.add("notification-target-flash");
    setTimeout(() => taskRow.classList.remove("notification-target-flash"), 1800);
  });
}

function openPairHelpFromNotification(pairId) {
  if (!activeSessionId || !canUseCoHostTools()) return;
  showGroupControls(activeSessionId);
  requestAnimationFrame(() => {
    const pairRow = Array.from(document.querySelectorAll("[data-active-pair-id]"))
      .find((row) => row.dataset.activePairId === String(pairId || ""));
    if (!pairRow) return;
    pairRow.scrollIntoView({ behavior: "smooth", block: "center" });
    pairRow.classList.add("notification-target-flash");
    setTimeout(() => pairRow.classList.remove("notification-target-flash"), 1800);
  });
}

function isCurrentPairDriver() {
  return Boolean(
    activePairState &&
    String(activePairState.driver || "").trim().toLowerCase() === String(myInfo.name || "").trim().toLowerCase()
  );
}

function isPairNavigatorEditingLocked() {
  return Boolean(
    activePairState &&
    activePairState.status === "active" &&
    activePairState.mode === "driver" &&
    !isCurrentPairDriver()
  );
}

function isPairViewSyncActive() {
  return Boolean(
    activePairState &&
      pairFollowEnabled &&
      !pairFollowSuspended &&
      followedParticipantName &&
      followedParticipantName.toLowerCase() === getPairPartnerName().toLowerCase(),
  );
}

function resetPairToolActivity() {
  pairToolActivity = { chat: false, suggestions: false, tasks: false };
}

function hasPairToolActivity() {
  return Object.values(pairToolActivity).some(Boolean);
}

function markPairToolActivity(tab) {
  if (!Object.prototype.hasOwnProperty.call(pairToolActivity, tab)) return;
  if (pairPanelOpen && pairPanelTab === tab) return;
  pairToolActivity[tab] = true;
}

function clearPairToolActivity(tab) {
  if (Object.prototype.hasOwnProperty.call(pairToolActivity, tab)) {
    pairToolActivity[tab] = false;
  }
}

function getChangedPairToolTabs(previousPair, nextPair) {
  const changed = new Set();
  if (!previousPair || !nextPair || previousPair.id !== nextPair.id) return changed;

  const previousSuggestions = new Map(
    (previousPair.suggestions || []).map((suggestion) => [suggestion.id, suggestion]),
  );
  if ((nextPair.suggestions || []).some((suggestion) => {
    const previous = previousSuggestions.get(suggestion.id);
    return !previous || previous.status !== suggestion.status;
  })) {
    changed.add("suggestions");
  }

  const previousTasks = new Map(
    (previousPair.tasks || []).map((task) => [task.id, task]),
  );
  if ((nextPair.tasks || []).some((task) => {
    const previous = previousTasks.get(task.id);
    return !previous || previous.done !== task.done;
  })) {
    changed.add("tasks");
  }
  return changed;
}

function getNewPairActionNotifications(previousPair, nextPair) {
  if (!previousPair || !nextPair || previousPair.id !== nextPair.id) return [];
  const notifications = [];
  const myName = String(myInfo.name || "").trim().toLowerCase();
  const isMine = (name) => String(name || "").trim().toLowerCase() === myName;

  const previousSuggestionIds = new Set(
    (previousPair.suggestions || []).map((suggestion) => suggestion.id),
  );
  (nextPair.suggestions || []).forEach((suggestion) => {
    if (!previousSuggestionIds.has(suggestion.id) && !isMine(suggestion.from)) {
      notifications.push({ kind: "suggestion", item: suggestion });
    }
  });

  const previousTaskIds = new Set((previousPair.tasks || []).map((task) => task.id));
  (nextPair.tasks || []).forEach((task) => {
    if (!previousTaskIds.has(task.id) && !isMine(task.createdBy)) {
      notifications.push({ kind: "task", item: task });
    }
  });
  return notifications;
}

function renderPairPanelHtml() {
  if (!activePairState || !pairPanelOpen) return "";
  const tabs = [
    ["chat", "Chat"],
    ["suggestions", "Suggestions"],
    ["tasks", "Tasks"],
    ["activity", "Activity"],
  ];
  let body = "";
  if (pairPanelTab === "chat") {
    const messages = activePairState.chat || [];
    body = `
      <div class="pair-chat-list">
        ${messages.length ? messages.map((message) => `
          <div class="pair-chat-message ${message.from === myInfo.name ? "mine" : ""}">
            <small>${escapeHtml(formatCollabDisplayName(message.from))} · ${escapeHtml(formatChatTime(message.ts))}</small>
            ${escapeHtml(message.text)}
          </div>`).join("") : `<div class="pair-empty">No pair messages yet.</div>`}
      </div>
      <div class="pair-compose">
        <input id="pairChatInput" maxlength="1000" placeholder="Message your partner...">
        <button id="pairChatSendBtn" type="button">SEND</button>
      </div>`;
  } else if (pairPanelTab === "suggestions") {
    const suggestions = [...(activePairState.suggestions || [])].reverse();
    body = `
      <div class="pair-panel-tools"><button id="pairAddSuggestionBtn" type="button"><i class="fa-solid fa-lightbulb"></i> SUGGEST FROM SELECTION</button></div>
      <div class="pair-list">
        ${suggestions.length ? suggestions.map((suggestion) => `
          <div class="pair-list-card ${suggestion.status !== "open" ? "is-done" : ""}">
            <small>${escapeHtml(formatCollabDisplayName(suggestion.from))} · ${escapeHtml(suggestion.fileName)} · ${escapeHtml(suggestion.status)}</small>
            ${suggestion.comment ? `<p>${escapeHtml(suggestion.comment)}</p>` : ""}
            <p><strong>Replace:</strong> ${escapeHtml(suggestion.original || "(cursor position)")}</p>
            <p><strong>With:</strong> ${escapeHtml(suggestion.replacement || "(remove)")}</p>
            <div class="pair-panel-tools">
              <button type="button" class="pair-view-suggestion" data-id="${escapeHtml(suggestion.id)}">VIEW</button>
              ${suggestion.status === "open" ? `<button type="button" class="pair-apply-suggestion" data-id="${escapeHtml(suggestion.id)}">APPLY</button><button type="button" class="pair-resolve-suggestion" data-id="${escapeHtml(suggestion.id)}">RESOLVE</button><button type="button" class="pair-reject-suggestion" data-id="${escapeHtml(suggestion.id)}">REJECT</button>` : ""}
            </div>
          </div>`).join("") : `<div class="pair-empty">Select code and create a suggestion for your partner.</div>`}
      </div>`;
  } else if (pairPanelTab === "tasks") {
    const tasks = activePairState.tasks || [];
    body = `
      <div class="pair-compose">
        <input id="pairTaskInput" maxlength="300" placeholder="Add a pair task...">
        <button id="pairTaskAddBtn" type="button">ADD</button>
      </div>
      <div class="pair-list" style="margin-top:10px;">
        ${tasks.length ? tasks.map((task) => `
          <label class="pair-list-card pair-task-row ${task.done ? "is-done" : ""}" data-pair-task-id="${escapeHtml(task.id)}">
            <input class="pair-task-toggle" type="checkbox" data-id="${escapeHtml(task.id)}" ${task.done ? "checked" : ""}>
            <span><small>${escapeHtml(formatCollabDisplayName(task.createdBy, "Pair"))}</small>${escapeHtml(task.text)}</span>
          </label>`).join("") : `<div class="pair-empty">No tasks yet.</div>`}
      </div>`;
  } else {
    const activity = [...(activePairState.activity || [])].reverse();
    body = `<div class="pair-list">
      ${activity.length ? activity.map((entry) => `<div class="pair-list-card"><small>${escapeHtml(formatParticipantJoinedAt(entry.ts))}</small>${escapeHtml(entry.text)}</div>`).join("") : `<div class="pair-empty">No pair activity yet.</div>`}
    </div>`;
  }
  return `
    <div class="pair-panel">
      <div class="pair-panel-tabs">
        ${tabs.map(([key, label]) => {
          const hasActivity = Boolean(pairToolActivity[key]);
          return `<button type="button" class="pair-tab-btn pair-activity-target ${hasActivity ? "has-activity" : ""} ${pairPanelTab === key ? "active" : ""}" data-tab="${key}" aria-label="${label}${hasActivity ? ", new activity" : ""}">${label}${hasActivity ? '<span class="pair-activity-dot" aria-hidden="true"></span>' : ""}</button>`;
        }).join("")}
      </div>
      <div class="pair-panel-body">
        <div class="pair-panel-tools">
          <select id="pairModeSelect" aria-label="Pair mode">
            <option value="driver" ${activePairState.mode === "driver" ? "selected" : ""}>Driver Mode</option>
            <option value="live" ${activePairState.mode === "live" ? "selected" : ""}>Live Pair Mode</option>
          </select>
          <button id="pairHelpBtn" type="button" class="${activePairState.helpRequested ? "active" : ""}"><i class="fa-solid fa-hand"></i> ${activePairState.helpRequested ? "HELP REQUESTED" : "ASK HOST"}</button>
          <button id="pairSnapshotBtn" type="button"><i class="fa-solid fa-download"></i> SNAPSHOT</button>
        </div>
        ${body}
      </div>
    </div>`;
}

function renderPairDock() {
  if (!pairDock || !pairDockContent) return;
  if (!activePairState || !activeSessionId) {
    pairDock.hidden = true;
    pairDockContent.innerHTML = "";
    return;
  }
  const partnerName = getPairPartnerName();
  const role = isCurrentPairDriver() ? "Driver" : "Navigator";
  const status = activePairState.status || "active";
  const voiceActive = ["calling", "connecting", "connected"].includes(pairVoiceStatus);
  const hasToolActivity = hasPairToolActivity();
  pairDock.hidden = false;
  pairDockContent.innerHTML = `
    <div class="pair-dock-header">
      <span class="pair-role-badge ${role === "Navigator" ? "navigator" : ""}">${role}</span>
      <div class="pair-dock-identity">
        <strong>Pairing with ${escapeHtml(partnerName)}</strong>
        <span>${activePairState.mode === "live" ? "Live Pair Mode" : "Driver Mode"}</span>
      </div>
      <span class="pair-status-badge ${escapeHtml(status)}">${escapeHtml(status)}</span>
    </div>
    <div class="pair-dock-actions">
      <button id="pairSyncViewBtn" type="button" class="${pairFollowEnabled && !pairFollowSuspended ? "active" : ""}" aria-pressed="${pairFollowEnabled && !pairFollowSuspended ? "true" : "false"}" title="Match your partner's current file and scroll position"><i class="fa-solid fa-arrows-to-eye"></i> SYNC VIEW</button>
      <button id="pairSwitchBtn" type="button" ${status !== "active" ? "disabled" : ""}><i class="fa-solid fa-right-left"></i> SWITCH</button>
      <button id="pairVoiceBtn" type="button" class="${voiceActive ? "active" : ""}"><i class="fa-solid fa-microphone${voiceActive ? "-slash" : ""}"></i> ${voiceActive ? "END VOICE" : "VOICE"}</button>
      <button id="pairPanelBtn" type="button" class="pair-activity-target ${hasToolActivity ? "has-activity" : ""} ${pairPanelOpen ? "active" : ""}" aria-label="Pair tools${hasToolActivity ? ", new activity" : ""}"><i class="fa-solid fa-code-compare"></i> TOOLS${hasToolActivity ? '<span class="pair-activity-dot" aria-hidden="true"></span>' : ""}</button>
      <button id="pairLeaveBtn" type="button" class="danger"><i class="fa-solid fa-xmark"></i> LEAVE</button>
    </div>
    ${renderPairPanelHtml()}
  `;
  bindPairDockControls();
}

async function emitPairEvent(eventName, payload = {}, timeout = 5000) {
  try {
    return await emitCollabWithAck(eventName, { sessionId: activeSessionId, ...payload }, timeout);
  } catch (error) {
    return { ok: false, error: error?.message || "The pair request timed out." };
  }
}

function bindPairDockControls() {
  const bind = (id, handler) => {
    const element = document.getElementById(id);
    if (element) element.onclick = handler;
  };
  bind("pairSyncViewBtn", () => {
    const syncIsActive = pairFollowEnabled && !pairFollowSuspended;
    pairFollowEnabled = !syncIsActive;
    pairFollowSuspended = false;
    followedParticipantName = pairFollowEnabled ? getPairPartnerName() : "";
    if (pairFollowEnabled) {
      syncFollowedParticipantView();
      if (pairPartnerPresence) applyPairPartnerPresence(pairPartnerPresence);
      requestPairPartnerPresence();
      showNotification(`Sync View is on for ${followedParticipantName}.`, "success");
    } else {
      stopPairFollowAnimation();
      showNotification("Sync View is off.", "info");
    }
    renderPairDock();
  });
  bind("pairSwitchBtn", async () => {
    const response = await emitPairEvent("collab:pair:switch-request");
    showNotification(response?.ok ? "Role switch requested." : response?.error || "Unable to request a role switch.", response?.ok ? "success" : "error");
  });
  bind("pairVoiceBtn", () => {
    if (["calling", "connecting", "connected"].includes(pairVoiceStatus)) stopPairVoice(true);
    else requestPairVoiceCall();
  });
  bind("pairPanelBtn", () => {
    pairPanelOpen = !pairPanelOpen;
    if (pairPanelOpen) clearPairToolActivity(pairPanelTab);
    renderPairDock();
  });
  bind("pairLeaveBtn", async () => {
    const confirmed = await showAppConfirm("LEAVE PAIR", "Leave your current pair? Pair chat, tasks, and unresolved suggestion pins will close.", "LEAVE", "STAY");
    if (!confirmed?.ok) return;
    const response = await emitPairEvent("collab:pair:leave");
    if (!response?.ok) showNotification(response?.error || "Unable to leave the pair.", "error");
  });
  document.querySelectorAll(".pair-tab-btn").forEach((button) => {
    button.onclick = () => {
      pairPanelTab = button.dataset.tab || "chat";
      clearPairToolActivity(pairPanelTab);
      renderPairDock();
    };
  });
  const modeSelect = document.getElementById("pairModeSelect");
  if (modeSelect) modeSelect.onchange = async () => {
    const response = await emitPairEvent("collab:pair:set-mode", { mode: modeSelect.value });
    if (!response?.ok) showNotification(response?.error || "Unable to change pair mode.", "error");
  };
  bind("pairHelpBtn", async () => {
    const response = await emitPairEvent("collab:pair:help", { requested: !activePairState?.helpRequested });
    if (!response?.ok) showNotification(response?.error || "Unable to update the help request.", "error");
  });
  bind("pairSnapshotBtn", savePairSnapshot);
  bindPairChatControls();
  bindPairSuggestionControls();
  bindPairTaskControls();
}

function bindPairChatControls() {
  const input = document.getElementById("pairChatInput");
  const button = document.getElementById("pairChatSendBtn");
  if (!input || !button) return;
  const send = async () => {
    const text = input.value.trim();
    if (!text) return;
    const response = await emitPairEvent("collab:pair:chat", { text });
    if (response?.ok) input.value = "";
    else showNotification(response?.error || "Pair message failed.", "error");
  };
  button.onclick = send;
  input.onkeydown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      send();
    }
  };
}

async function addPairSuggestionFromSelection() {
  if (!activeFile || !editorTextarea) return;
  const start = editorTextarea.selectionStart;
  const end = editorTextarea.selectionEnd;
  const original = editorTextarea.value.slice(start, end);
  const replacementResult = await showAppPrompt(
    "PAIR SUGGESTION",
    original ? "Enter the replacement for the selected code." : "Enter code to insert at the cursor.",
    original,
    "Suggested code",
  );
  if (!replacementResult?.ok) return;
  const commentResult = await showAppPrompt(
    "SUGGESTION NOTE",
    "Add a short explanation for your partner (optional).",
    "",
    "Why this change?",
  );
  if (!commentResult?.ok) return;
  const response = await emitPairEvent("collab:pair:suggestion:add", {
    fileName: activeFile.name,
    start,
    end,
    original,
    replacement: String(replacementResult.value || ""),
    comment: String(commentResult.value || ""),
  });
  showNotification(response?.ok ? "Suggestion sent to your partner." : response?.error || "Suggestion failed.", response?.ok ? "success" : "error");
}

function getActivePairSuggestion(id) {
  return (activePairState?.suggestions || []).find((suggestion) => suggestion.id === id) || null;
}

function viewPairSuggestion(suggestion) {
  if (!suggestion) return;
  const file = projectFiles.find((entry) => entry.name === suggestion.fileName);
  if (!file) return showNotification("That suggestion file is unavailable.", "error");
  switchFile(file.name);
  const start = Math.min(Number(suggestion.start || 0), editorTextarea.value.length);
  const end = Math.min(Math.max(start, Number(suggestion.end || start)), editorTextarea.value.length);
  editorTextarea.focus();
  editorTextarea.setSelectionRange(start, end);
}

async function applyPairSuggestion(suggestion) {
  if (!suggestion) return;
  viewPairSuggestion(suggestion);
  if (editorTextarea.readOnly || !canCurrentUserEditFile(suggestion.fileName)) {
    showNotification("You do not currently have permission to apply this suggestion.", "error");
    return;
  }
  const start = Math.min(Number(suggestion.start || 0), editorTextarea.value.length);
  const end = Math.min(Math.max(start, Number(suggestion.end || start)), editorTextarea.value.length);
  const current = editorTextarea.value.slice(start, end);
  if (current !== String(suggestion.original || "")) {
    const confirm = await showAppConfirm(
      "CODE CHANGED",
      "The selected code changed after this suggestion was created. Apply it at the original position anyway?",
      "APPLY",
      "CANCEL",
    );
    if (!confirm?.ok) return;
  }
  beginEditorHistoryCapture(editorTextarea);
  editorTextarea.value = `${editorTextarea.value.slice(0, start)}${suggestion.replacement || ""}${editorTextarea.value.slice(end)}`;
  editorTextarea.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertReplacementText" }));
  const caret = start + String(suggestion.replacement || "").length;
  editorTextarea.setSelectionRange(caret, caret);
  await emitPairEvent("collab:pair:suggestion:update", { suggestionId: suggestion.id, status: "applied" });
}

function bindPairSuggestionControls() {
  const addButton = document.getElementById("pairAddSuggestionBtn");
  if (addButton) addButton.onclick = addPairSuggestionFromSelection;
  document.querySelectorAll(".pair-view-suggestion").forEach((button) => {
    button.onclick = () => viewPairSuggestion(getActivePairSuggestion(button.dataset.id));
  });
  document.querySelectorAll(".pair-apply-suggestion").forEach((button) => {
    button.onclick = () => applyPairSuggestion(getActivePairSuggestion(button.dataset.id));
  });
  document.querySelectorAll(".pair-reject-suggestion").forEach((button) => {
    button.onclick = () => emitPairEvent("collab:pair:suggestion:update", { suggestionId: button.dataset.id, status: "rejected" });
  });
  document.querySelectorAll(".pair-resolve-suggestion").forEach((button) => {
    button.onclick = () => emitPairEvent("collab:pair:suggestion:update", { suggestionId: button.dataset.id, status: "resolved" });
  });
}

function bindPairTaskControls() {
  const input = document.getElementById("pairTaskInput");
  const addButton = document.getElementById("pairTaskAddBtn");
  const add = async () => {
    const text = String(input?.value || "").trim();
    if (!text) return;
    const response = await emitPairEvent("collab:pair:task:add", { text });
    if (response?.ok && input) input.value = "";
    else if (!response?.ok) showNotification(response?.error || "Unable to add the task.", "error");
  };
  if (addButton) addButton.onclick = add;
  if (input) input.onkeydown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      add();
    }
  };
  document.querySelectorAll(".pair-task-toggle").forEach((checkbox) => {
    checkbox.onchange = () => emitPairEvent("collab:pair:task:toggle", { taskId: checkbox.dataset.id, done: checkbox.checked });
  });
}

async function savePairSnapshot() {
  const response = await emitPairEvent("collab:pair:snapshot", {}, 8000);
  if (!response?.ok || !response.snapshot) {
    showNotification(response?.error || "Unable to save the pair snapshot.", "error");
    return;
  }
  const blob = new Blob([JSON.stringify(response.snapshot, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `codx-pair-${activePairState?.id || "snapshot"}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
  showNotification("Pair snapshot saved.", "success");
}

function showPairModeDialog(targetName) {
  return new Promise((resolve) => {
    activeDialogResolver = resolve;
    appDialogTitle.textContent = "START PAIR";
    appDialogMessage.innerHTML = `Choose how you want to pair with <strong>${escapeHtml(targetName)}</strong>. Driver Mode lets one person edit; Live Pair lets both edit.`;
    appDialogInput.style.display = "none";
    appDialogActions.innerHTML = `
      <button id="pairInviteCancelBtn" class="run-button" type="button" style="background:#6b7280;"><strong>CANCEL</strong></button>
      <button id="pairInviteLiveBtn" class="run-button" type="button" style="background:#2563eb;"><strong>LIVE PAIR</strong></button>
      <button id="pairInviteDriverBtn" class="run-button" type="button"><strong>DRIVER MODE</strong></button>`;
    appDialog.style.display = "flex";
    document.getElementById("pairInviteCancelBtn").onclick = () => closeAppDialog({ ok: false });
    document.getElementById("pairInviteLiveBtn").onclick = () => closeAppDialog({ ok: true, value: "live" });
    document.getElementById("pairInviteDriverBtn").onclick = () => closeAppDialog({ ok: true, value: "driver" });
  });
}

async function inviteParticipantToPair(targetName) {
  if (collabPermissions.disablePairing) return showNotification("The host disabled pairing.", "error");
  const modeResult = await showPairModeDialog(targetName);
  if (!modeResult?.ok) return;
  const response = await emitPairEvent("collab:pair:invite", {
    targetName,
    mode: modeResult.value,
  });
  showNotification(
    response?.ok ? `Pair invitation sent to ${targetName}.` : response?.error || "Pair invitation failed.",
    response?.ok ? "success" : "error",
  );
}

async function handlePairInvitation(invite) {
  const modeLabel = invite?.mode === "live" ? "Live Pair Mode (both can edit)" : "Driver Mode (inviter starts as Driver)";
  const result = await showAppConfirmHtml(
    "PAIR INVITATION",
    `<strong>${escapeHtml(invite?.from || "A participant")}</strong> wants to pair with you.<br><br><strong>Mode:</strong> ${escapeHtml(modeLabel)}`,
    "ACCEPT",
    "DECLINE",
  );
  const response = await emitPairEvent("collab:pair:respond", { inviteId: invite?.id, accept: Boolean(result?.ok) });
  if (!response?.ok) showNotification(response?.error || "Unable to answer the pair invitation.", "error");
}

function emitPairPresenceSoon(force = false) {
  if (!activePairState || !activeSessionId || !collabSocket?.connected || !activeFile || document.hidden) return;
  const elapsed = Date.now() - pairLastPresenceEmitAt;
  if (!force && elapsed < 55) {
    clearTimeout(pairPresenceTimeout);
    pairPresenceTimeout = setTimeout(() => emitPairPresenceSoon(true), 55 - elapsed);
    return;
  }
  pairLastPresenceEmitAt = Date.now();
  collabSocket.emit("collab:pair:presence", {
    sessionId: activeSessionId,
    fileName: activeFile.name,
    selectionStart: editorTextarea.selectionStart,
    selectionEnd: editorTextarea.selectionEnd,
    scrollTop: editorTextarea.scrollTop,
    scrollLeft: editorTextarea.scrollLeft,
  });
}

function requestPairPartnerPresence() {
  if (!activePairState || !activeSessionId || !collabSocket?.connected) return;
  // This is an optional optimization. Older or briefly busy servers may not
  // implement it, so it must never be treated as a connection failure.
  collabSocket.emit("collab:pair:presence-request", { sessionId: activeSessionId });
}

function renderPairPartnerSelection(payload) {
  if (!pairSelectionHighlight || !editorTextarea || activeFile?.name !== payload?.fileName) return;
  const start = Math.max(0, Math.min(editorTextarea.value.length, Number(payload.selectionStart || 0)));
  const end = Math.max(start, Math.min(editorTextarea.value.length, Number(payload.selectionEnd || 0)));
  if (end <= start) {
    pairSelectionHighlight.hidden = true;
    return;
  }
  const startCoords = getCaretCoordinates(editorTextarea, start);
  const endCoords = getCaretCoordinates(editorTextarea, end);
  pairSelectionHighlight.style.top = `${Math.max(0, startCoords.top)}px`;
  pairSelectionHighlight.style.height = `${Math.max(startCoords.lineHeight, endCoords.top - startCoords.top + endCoords.lineHeight)}px`;
  pairSelectionHighlight.querySelector("span").textContent = `${payload.from} highlighted`;
  pairSelectionHighlight.hidden = false;
}

function stopPairFollowAnimation() {
  if (pairFollowAnimationFrame) cancelAnimationFrame(pairFollowAnimationFrame);
  pairFollowAnimationFrame = 0;
  pairFollowScrollTarget = null;
}

function runPairFollowAnimation() {
  pairFollowAnimationFrame = 0;
  if (!pairFollowScrollTarget || !editorTextarea || !pairFollowEnabled || pairFollowSuspended) {
    pairFollowScrollTarget = null;
    return;
  }
  const topDelta = pairFollowScrollTarget.top - editorTextarea.scrollTop;
  const leftDelta = pairFollowScrollTarget.left - editorTextarea.scrollLeft;
  pairIgnoreLocalScrollUntil = Date.now() + 180;
  if (Math.abs(topDelta) < 0.75 && Math.abs(leftDelta) < 0.75) {
    editorTextarea.scrollTop = pairFollowScrollTarget.top;
    editorTextarea.scrollLeft = pairFollowScrollTarget.left;
    pairFollowScrollTarget = null;
    return;
  }
  editorTextarea.scrollTop += topDelta * 0.38;
  editorTextarea.scrollLeft += leftDelta * 0.38;
  pairFollowAnimationFrame = requestAnimationFrame(runPairFollowAnimation);
}

function schedulePairFollowScroll(top, left) {
  pairFollowScrollTarget = {
    top: Math.max(0, Number(top || 0)),
    left: Math.max(0, Number(left || 0)),
  };
  if (!pairFollowAnimationFrame) pairFollowAnimationFrame = requestAnimationFrame(runPairFollowAnimation);
}

function applyPairPartnerPresence(payload) {
  if (!activePairState) return;
  if (String(payload?.from || "").trim().toLowerCase() !== getPairPartnerName().toLowerCase()) return;
  pairPartnerPresence = { ...payload };
  const fileName = String(payload?.fileName || "").trim();
  if (activeFile?.name === fileName) renderPairPartnerSelection(payload);
  if (!pairFollowEnabled || pairFollowSuspended) return;
  if (fileName && activeFile?.name !== fileName && projectFiles.some((file) => file.name === fileName)) {
    pairIgnoreLocalScrollUntil = Date.now() + 650;
    switchFile(fileName);
  }
  schedulePairFollowScroll(payload?.scrollTop, payload?.scrollLeft);
  setTimeout(() => renderPairPartnerSelection(payload), 120);
}

function sendPairVoiceSignal(kind, data = null) {
  if (!activeSessionId || !collabSocket) return Promise.resolve({ ok: false });
  return emitPairEvent("collab:pair:voice", { kind, data }, 6000);
}

async function ensurePairVoiceMedia() {
  if (pairVoiceStream) return pairVoiceStream;
  if (!navigator.mediaDevices?.getUserMedia) throw new Error("Microphone access is unavailable in this browser.");
  pairVoiceStream = await navigator.mediaDevices.getUserMedia({
    audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
    video: false,
  });
  return pairVoiceStream;
}

async function ensurePairVoiceConnection(initiator = false) {
  if (pairVoiceConnection) return pairVoiceConnection;
  pairVoiceInitiator = Boolean(initiator);
  const stream = await ensurePairVoiceMedia();
  pairVoiceConnection = new RTCPeerConnection({ iceServers: [] });
  stream.getTracks().forEach((track) => pairVoiceConnection.addTrack(track, stream));
  pairVoiceConnection.onicecandidate = (event) => {
    if (event.candidate) sendPairVoiceSignal("ice", event.candidate.toJSON());
  };
  pairVoiceConnection.ontrack = (event) => {
    if (pairVoiceAudio) pairVoiceAudio.srcObject = event.streams[0];
  };
  pairVoiceConnection.onconnectionstatechange = () => {
    const state = pairVoiceConnection?.connectionState;
    if (state === "connected") pairVoiceStatus = "connected";
    if (["failed", "closed", "disconnected"].includes(state)) stopPairVoice(false);
    renderPairDock();
  };
  return pairVoiceConnection;
}

async function requestPairVoiceCall() {
  pairVoiceStatus = "calling";
  renderPairDock();
  const response = await sendPairVoiceSignal("invite");
  if (!response?.ok) {
    pairVoiceStatus = "idle";
    renderPairDock();
    showNotification(response?.error || "Unable to call your partner.", "error");
  } else showNotification("Voice invitation sent. Microphone access is requested only if they accept.", "info");
}

async function handlePairVoiceSignal(payload) {
  const kind = String(payload?.kind || "");
  if (kind === "invite") {
    if (pairVoiceStatus !== "idle") {
      await sendPairVoiceSignal("response", { accepted: false });
      return;
    }
    const result = await showAppConfirm("PAIR VOICE", `${payload.from} wants to start a private peer-to-peer voice call. Allow microphone access?`, "ACCEPT", "DECLINE");
    pairVoiceStatus = result?.ok ? "connecting" : "idle";
    renderPairDock();
    await sendPairVoiceSignal("response", { accepted: Boolean(result?.ok) });
    return;
  }
  if (kind === "response") {
    if (pairVoiceStatus !== "calling") {
      if (payload.data?.accepted) await sendPairVoiceSignal("hangup");
      return;
    }
    if (!payload.data?.accepted) {
      pairVoiceStatus = "idle";
      renderPairDock();
      showNotification("Your partner declined the voice call.", "info");
      return;
    }
    try {
      pairVoiceStatus = "connecting";
      const connection = await ensurePairVoiceConnection(true);
      const offer = await connection.createOffer();
      await connection.setLocalDescription(offer);
      await sendPairVoiceSignal("offer", connection.localDescription.toJSON());
      renderPairDock();
    } catch (error) {
      stopPairVoice(true);
      showNotification(error.message || "Microphone access failed.", "error");
    }
    return;
  }
  if (kind === "offer") {
    try {
      pairVoiceStatus = "connecting";
      const connection = await ensurePairVoiceConnection(false);
      await connection.setRemoteDescription(payload.data);
      for (const candidate of pairVoicePendingCandidates.splice(0)) await connection.addIceCandidate(candidate);
      const answer = await connection.createAnswer();
      await connection.setLocalDescription(answer);
      await sendPairVoiceSignal("answer", connection.localDescription.toJSON());
      renderPairDock();
    } catch (error) {
      stopPairVoice(true);
      showNotification(error.message || "Voice connection failed.", "error");
    }
    return;
  }
  if (kind === "answer" && pairVoiceConnection) {
    await pairVoiceConnection.setRemoteDescription(payload.data);
    for (const candidate of pairVoicePendingCandidates.splice(0)) await pairVoiceConnection.addIceCandidate(candidate);
    return;
  }
  if (kind === "ice" && payload.data) {
    if (pairVoiceConnection?.remoteDescription) await pairVoiceConnection.addIceCandidate(payload.data);
    else pairVoicePendingCandidates.push(payload.data);
    return;
  }
  if (kind === "hangup") {
    stopPairVoice(false);
    showNotification("Pair voice call ended.", "info");
  }
}

function stopPairVoice(notifyPartner = true) {
  if (notifyPartner && activePairState && collabSocket?.connected) sendPairVoiceSignal("hangup");
  pairVoiceConnection?.close();
  pairVoiceConnection = null;
  pairVoiceStream?.getTracks().forEach((track) => track.stop());
  pairVoiceStream = null;
  pairVoiceStatus = "idle";
  pairVoicePendingCandidates = [];
  pairVoiceInitiator = false;
  if (pairVoiceAudio) pairVoiceAudio.srcObject = null;
  renderPairDock();
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

async function requestParticipantRename(targetName) {
  if (!collabSocket || !activeSessionId) return;
  const participant = getParticipantByName(targetName);
  if (!participant || !canRenameParticipant(participant)) {
    showNotification("You do not have permission to rename this participant.", "error");
    return;
  }

  const currentName = String(participant.name || "").trim();
  const dialog = await showAppPrompt(
    "RENAME USER",
    isMyCollabParticipant(participant)
      ? "Choose the name everyone will see for you in this collaboration session."
      : `Choose a new name for ${currentName}.`,
    currentName,
    "Participant name",
  );
  if (!dialog?.ok) return;

  const nextName = String(dialog.value || "").trim().replace(/\s+/g, " ");
  const validation = validateUsername(nextName);
  if (!validation.valid) {
    showNotification(validation.error, "error");
    return;
  }

  try {
    const res = await emitCollabWithAck(
      "collab:rename-participant",
      { sessionId: activeSessionId, targetName: currentName, newName: nextName },
      6000,
    );
    if (!res?.ok) {
      showNotification(res?.error || "Failed to rename participant.", "error");
      return;
    }
    if (res.unchanged) {
      showNotification("The participant name is already up to date.", "info");
    }
  } catch (error) {
    showNotification(
      error?.code === "ACK_TIMEOUT"
        ? "Rename timed out. Restart the collaboration server and try again."
        : error?.message || "Failed to rename participant.",
      "error",
    );
  }
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
        case "pairing":
          return collabPermissions.disablePairing;
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
        ${renderCollabControlButton({ id: "participantRenameBtn", icon: "fa-solid fa-pen", title: "Rename", desc: "Change this participant's display name." })}
        ${renderCollabControlButton({ id: "participantSelfRenameBtn", icon: "fa-solid fa-user-pen", title: participant.renameDisabled ? "Allow Self-Rename" : "Disable Self-Rename", desc: participant.renameDisabled ? "This user cannot rename themselves." : "Prevent this user from renaming themselves.", active: participant.renameDisabled, tone: "warning" })}
        ${renderCollabControlButton({ id: "participantMessageBtn", icon: "fa-solid fa-message", title: "Message", desc: "Open private chat." })}
        ${renderCollabControlButton({ id: "participantMuteChatBtn", icon: "fa-solid fa-comment-slash", title: participant.mutedChat ? "Unmute Chat" : "Mute Chat", desc: participant.mutedChat ? "Chat is currently muted." : "Stop this user from chatting.", active: participant.mutedChat, tone: "warning" })}
        ${renderCollabControlButton({ id: "participantFreezeBtn", icon: "fa-solid fa-snowflake", title: participant.frozenEditing ? "Unfreeze Editing" : "Freeze Editing", desc: participant.frozenEditing ? "Editing is currently frozen." : "Stop this user from editing.", active: participant.frozenEditing, tone: "blue" })}
        ${renderCollabControlButton({ id: "participantFileAccessBtn", icon: "fa-solid fa-eye-slash", title: "Hide File", desc: Array.isArray(participant.allowedFiles) ? `${projectFiles.filter((file) => participantCannotSeeFile(participant, file.name)).length} hidden file(s).` : "All files are visible.", active: Array.isArray(participant.allowedFiles) })}
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
  const renameBtn = document.getElementById("participantRenameBtn");
  const selfRenameBtn = document.getElementById("participantSelfRenameBtn");
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
  if (renameBtn) {
    renameBtn.onclick = () => requestParticipantRename(safeName);
  }
  if (selfRenameBtn) {
    selfRenameBtn.onclick = () =>
      updateParticipantFlags(
        safeName,
        { renameDisabled: !participant.renameDisabled },
        participant.renameDisabled
          ? `${safeName} can rename themselves again.`
          : `${safeName} can no longer rename themselves.`,
      );
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
  collabPendingLocalSync = false;
  removeWaitingRoomPopup();
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

function clearCollabResumeRetry() {
  clearTimeout(collabResumeRetryTimer);
  collabResumeRetryTimer = null;
}

function scheduleCollabResume(delayMs) {
  if (!activeSessionId || !myInfo.name || collabResumeRetryTimer) return;
  const fallbackDelay = Math.min(15000, 1000 * Math.max(1, 2 ** Math.min(4, collabResumeFailureCount)));
  collabResumeRetryTimer = setTimeout(() => {
    collabResumeRetryTimer = null;
    if (!activeSessionId) return;
    if (!collabSocket?.connected) {
      ensureCollabSocket();
      return;
    }
    resumeCollabSession();
  }, Math.max(250, Number(delayMs) || fallbackDelay));
}

function recoverHostedCollabSession() {
  if (collabHostRecoveryInFlight || !collabSocket?.connected || !activeSessionId || !isHost()) {
    return Promise.resolve(false);
  }
  collabHostRecoveryInFlight = true;
  return new Promise((resolve) => {
    let settled = false;
    const finish = (response) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      collabHostRecoveryInFlight = false;
      if (!response?.ok) {
        resolve(false);
        return;
      }
      collabParticipants = response.participants || [{ ...myInfo, role: "host" }];
      collabHostName = response.hostName || myInfo.name;
      collabPermissions = normalizeCollabPermissions(response.permissions || collabPermissions);
      collabShareLink = response.shareLink || collabShareLink;
      collabSessionPin = response.sessionPin || collabSessionPin;
      collabPendingLocalSync = false;
      enforceCollabPermissionsUI();
      updateCollabButtonState();
      startCollabHeartbeat();
      showNotification("Collaboration session restored after the server restarted.", "success");
      resolve(true);
    };
    const timeout = setTimeout(() => finish(null), 10000);
    collabSocket.emit("collab:create", {
      sessionId: activeSessionId,
      name: myInfo.name,
      theme: myInfo.theme || "#4CAF50",
      cursorStyle: normalizeCollabCursorStyle(myInfo.cursorStyle),
      deviceId: getOrCreateDeviceId(),
      files: projectFiles,
      activeFileName: activeFile ? activeFile.name : null,
      permissions: collabPermissions,
      baseUrl: window.location.origin,
    }, finish);
  });
}

function resumeCollabSession(successMessage) {
  if (!collabSocket?.connected || !activeSessionId || !myInfo.name || collabResumeInFlight) {
    return Promise.resolve(false);
  }
  collabResumeInFlight = true;
  return new Promise((resolve) => {
    let settled = false;
    const finish = async (res) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      if (!res?.ok) {
        collabResumeInFlight = false;
        collabResumeFailureCount += 1;
        const resumeError = String(res?.error || "");
        const normalizedResumeError = resumeError.toLowerCase();
        if (normalizedResumeError.includes("session was ended")) {
          clearCollabResumeRetry();
          collabResumeFailureCount = 0;
          activeSessionId = null;
          collabPendingLocalSync = false;
          resetTransientCollabUiState();
          collabParticipants = [];
          collabPendingJoins = [];
          collabShareLink = "";
          collabSessionPin = "";
          collabPermissions = { ...defaultCollabPermissions };
          updateCollabButtonState();
          resetCollabUrlToFreshState();
          showNotification(resumeError || "This collaboration session was ended.", "warn");
          resolve(false);
          return;
        }
        const missingSession = normalizedResumeError.includes("session not found");
        if (missingSession && await recoverHostedCollabSession()) {
          clearCollabResumeRetry();
          collabResumeFailureCount = 0;
          resolve(true);
          return;
        }
        maybeShowCollabOfflineNotice();
        scheduleCollabResume();
        resolve(false);
        return;
      }
      clearCollabResumeRetry();
      collabResumeFailureCount = 0;
      updateTimelineFromParticipants(res.participants || []);
      collabParticipants = res.participants || [];
      collabHostName =
        (collabParticipants.find((p) => p.role === "host") || {}).name ||
        res.hostName ||
        collabHostName;
      collabPermissions = normalizeCollabPermissions(res.permissions);
      const restoreLocalChanges = collabPendingLocalSync;
      if (!restoreLocalChanges) applyRemoteSessionState(res.files, res.activeFileName, true);
      enforceCollabPermissionsUI();
      updateCollabButtonState();
      if (collabModal.style.display === "flex" && collabModalView === "session") {
        showSessionDetails(activeSessionId);
      }
      requestCollabChatHistory();
      collabResumeInFlight = false;
      if (restoreLocalChanges) {
        collabPendingLocalSync = false;
        emitSessionUpdate();
      }
      if (successMessage) showNotification(successMessage, "success");
      resolve(true);
    };
    const timeout = setTimeout(() => finish({ ok: false, error: "Session resume timed out." }), 10000);
    collabSocket.emit("collab:resume", {
      sessionId: activeSessionId,
      name: myInfo.name,
      theme: myInfo.theme || "#4CAF50",
      cursorStyle: normalizeCollabCursorStyle(myInfo.cursorStyle),
      deviceId: getOrCreateDeviceId(),
    }, finish);
  });
}

function stopCollabHeartbeat() {
  clearInterval(collabHeartbeatInterval);
  clearTimeout(collabHeartbeatAckTimer);
  collabHeartbeatInterval = null;
  collabHeartbeatAckTimer = null;
}

function sendCollabHeartbeat() {
  if (!collabSocket?.connected || !activeSessionId || !myInfo.name || collabHeartbeatAckTimer) return;
  collabHeartbeatAckTimer = setTimeout(() => {
    // A late application acknowledgement is not proof that the transport died.
    // Socket.IO owns transport liveness and reconnection; never force-close it here.
    collabHeartbeatAckTimer = null;
  }, 15000);
  collabSocket.emit("collab:heartbeat", { sessionId: activeSessionId }, (res) => {
    clearTimeout(collabHeartbeatAckTimer);
    collabHeartbeatAckTimer = null;
    if (res?.ok) return;
    resumeCollabSession();
  });
}

function startCollabHeartbeat() {
  stopCollabHeartbeat();
  if (!activeSessionId || !collabSocket?.connected) return;
  collabHeartbeatInterval = setInterval(sendCollabHeartbeat, 30000);
  sendCollabHeartbeat();
}

function resetCollabOfflineNoticeState() {
  collabOfflineNoticeLastAt = 0;
  collabOfflineNoticeActive = false;
}

function maybeShowCollabOfflineNotice() {
  const now = Date.now();
  if (collabOfflineNoticeActive && now - collabOfflineNoticeLastAt < 60000) return;
  collabOfflineNoticeActive = true;
  collabOfflineNoticeLastAt = now;
  showNotification("Collaboration is reconnecting automatically…", "warn");
}

function ensureCollabSocket() {
  if (collabSocket && collabSocket.connected) return true;
  if (typeof io !== "function") {
    showNotification("Collab backend unavailable. Start server first.", "error");
    return false;
  }

  if (collabSocket) {
    collabSocket.connect();
    return true;
  }

  collabSocket = io({
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelay: 500,
    reconnectionDelayMax: 5000,
    randomizationFactor: 0.3,
    timeout: 20000,
    transports: ["polling", "websocket"],
    upgrade: true,
  });
  collabSocket.on("connect", () => {
    const isReconnect = collabHasConnectedOnce;
    collabHasConnectedOnce = true;
    resetCollabOfflineNoticeState();
    if (activeSessionId && myInfo.name) {
      setTimeout(async () => {
        await resumeCollabSession(isReconnect ? "Collaboration reconnected." : "");
        startCollabHeartbeat();
      }, 0);
    } else {
      startCollabHeartbeat();
    }
  });
  collabSocket.on("connect_error", () => {
    maybeShowCollabOfflineNotice();
  });
  collabSocket.on("disconnect", () => {
    clearOwnSessionCursorBroadcast();
    resetTransientCollabUiState();
    if (activeSessionId) {
      maybeShowCollabOfflineNotice();
    }
  });
  collabSocket.io.on("reconnect_attempt", () => {
    if (activeSessionId) maybeShowCollabOfflineNotice();
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

  collabSocket.on("collab:participant-renamed", (payload) => {
    const oldName = String(payload?.oldName || "").trim();
    const newName = String(payload?.newName || "").trim();
    if (!oldName || !newName) return;
    const oldKey = oldName.toLowerCase();
    const matchesOldName = (value) => String(value || "").trim().toLowerCase() === oldKey;
    const renamedMe = matchesOldName(myInfo.name);

    if (renamedMe) myInfo.name = newName;
    if (matchesOldName(collabHostName)) collabHostName = newName;
    if (matchesOldName(collabChatTarget)) collabChatTarget = newName;
    if (matchesOldName(followedParticipantName)) followedParticipantName = newName;
    if (matchesOldName(activeParticipantActionName)) activeParticipantActionName = newName;

    collabParticipants = collabParticipants.map((participant) =>
      matchesOldName(participant?.name) ? { ...participant, name: newName } : participant,
    );
    [...collabGroupMessages, ...collabPrivateMessages].forEach((message) => {
      if (matchesOldName(message?.from)) message.from = newName;
      if (matchesOldName(message?.to)) message.to = newName;
    });

    const migrateLiveState = (state) => {
      const previousKey = Object.keys(state).find((key) => matchesOldName(key));
      if (!previousKey) return;
      const previousValue = state[previousKey];
      delete state[previousKey];
      state[newName] = { ...previousValue, name: newName };
    };
    migrateLiveState(remoteCursorState);
    migrateLiveState(remoteTypingState);
    if (currentTypingIndicator && matchesOldName(currentTypingIndicator.name)) {
      currentTypingIndicator = { ...currentTypingIndicator, name: newName };
    }

    const previousSnapshot = lastParticipantsSnapshot.get(oldKey);
    if (previousSnapshot) {
      lastParticipantsSnapshot.delete(oldKey);
      lastParticipantsSnapshot.set(newName.toLowerCase(), { ...previousSnapshot, name: newName });
    }
    addTimelineEntry(`${oldName} was renamed to ${newName}.`);
    showNotification(
      renamedMe ? `Your collaboration name is now ${newName}.` : `${oldName} is now ${newName}.`,
      "success",
    );
  });

  collabSocket.on("collab:participants", (participants) => {
    const nextParticipants = Array.isArray(participants) ? participants : [];
    const previousMeBeforeAccessUpdate = getMyParticipant();
    const myNameKey = String(myInfo.name || "").trim().toLowerCase();
    const nextMeAfterAccessUpdate = nextParticipants.find(
      (participant) => String(participant?.name || "").trim().toLowerCase() === myNameKey,
    );
    const personalFileAccessExpanded = didParticipantFileAccessExpand(
      previousMeBeforeAccessUpdate,
      nextMeAfterAccessUpdate,
    );
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
    const meAfterParticipantUpdate = getMyParticipant();
    if (
      activeSessionId &&
      meAfterParticipantUpdate &&
      !["host", "co-host"].includes(String(meAfterParticipantUpdate.role || "participant")) &&
      Array.isArray(meAfterParticipantUpdate.allowedFiles)
    ) {
      const allowed = new Set(
        meAfterParticipantUpdate.allowedFiles.map((name) => String(name || "").trim().toLowerCase()),
      );
      const hasNewlyHiddenFile = projectFiles.some(
        (file) => !allowed.has(String(file?.name || "").trim().toLowerCase()),
      );
      if (hasNewlyHiddenFile) {
        applyRemoteSessionState(projectFiles, activeFile?.name || "", false);
      }
    }
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
    if (personalFileAccessExpanded) {
      setTimeout(() => resumeCollabSession(), 0);
    }
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
    const previousPendingJoinIds = new Set(
      collabPendingJoins.map((entry) => String(entry?.socketId || "")),
    );
    const nextPendingJoins = Array.isArray(meta.pendingJoins) ? meta.pendingJoins : [];
    const newPendingJoinRequests = nextPendingJoins.filter(
      (entry) => !previousPendingJoinIds.has(String(entry?.socketId || "")),
    );
    collabHostName = meta.hostName || collabHostName;
    collabPermissions = normalizeCollabPermissions(meta.permissions);
    collabPendingJoins = nextPendingJoins;
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
    renderWaitingRoomPopup();
    if (isHost()) {
      newPendingJoinRequests.forEach((entry) => {
        showActionNotificationHtml(
          `<strong>${escapeHtml(entry?.name || "A participant")}</strong> is waiting to join the session.`,
          () => openWaitingRoomRequestFromNotification(entry?.socketId),
          "warn",
        );
      });
    }
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
    collabPendingLocalSync = false;
    removeWaitingRoomPopup();
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

  collabSocket.on("collab:pair:overview", (overview) => {
    pairOverview = Array.isArray(overview) ? overview : [];
    if (collabModal?.style.display === "flex" && activeSessionId) {
      if (collabModalView === "session") showSessionDetails(activeSessionId);
      else if (collabModalView === "group-controls" && canUseCoHostTools()) showGroupControls(activeSessionId);
    }
  });

  collabSocket.on("collab:pair:state", (pair) => {
    const previousPair = activePairState;
    const previousPairId = activePairState?.id || "";
    const previousPartner = getPairPartnerName(activePairState);
    const wasDriver = isCurrentPairDriver();
    const changedToolTabs = getChangedPairToolTabs(previousPair, pair);
    const actionNotifications = getNewPairActionNotifications(previousPair, pair);
    activePairState = pair || null;
    if (!activePairState) {
      if (followedParticipantName === previousPartner) followedParticipantName = "";
      pairPanelOpen = false;
      resetPairToolActivity();
      pairFollowEnabled = false;
      pairFollowSuspended = false;
      pairPartnerPresence = null;
      stopPairFollowAnimation();
      stopPairVoice(false);
      enforceCollabPermissionsUI();
      renderPairDock();
      return;
    }
    if (activePairState.id !== previousPairId) {
      pairPanelOpen = false;
      pairPanelTab = "chat";
      resetPairToolActivity();
      pairFollowEnabled = !isCurrentPairDriver();
      pairFollowSuspended = false;
      pairPartnerPresence = null;
      followedParticipantName = pairFollowEnabled ? getPairPartnerName() : "";
      showActionNotificationHtml(
        `Pair started with <strong>${escapeHtml(getPairPartnerName())}</strong>.`,
        () => openPairToolsFromNotification("chat"),
        "success",
      );
      setTimeout(() => {
        emitPairPresenceSoon(true);
        if (pairFollowEnabled) {
          syncFollowedParticipantView();
          requestPairPartnerPresence();
        }
      }, 0);
    } else if (wasDriver !== isCurrentPairDriver()) {
      pairFollowEnabled = !isCurrentPairDriver();
      pairFollowSuspended = false;
      followedParticipantName = pairFollowEnabled ? getPairPartnerName() : "";
      stopPairFollowAnimation();
      setTimeout(() => {
        emitPairPresenceSoon(true);
        if (pairFollowEnabled) {
          syncFollowedParticipantView();
          requestPairPartnerPresence();
        }
      }, 0);
    }
    changedToolTabs.forEach(markPairToolActivity);
    if (pairFollowEnabled && !pairFollowSuspended) followedParticipantName = getPairPartnerName();
    enforceCollabPermissionsUI();
    renderPairDock();
    actionNotifications.forEach(({ kind, item }) => {
      if (kind === "suggestion") {
        if (pairPanelOpen && pairPanelTab === "suggestions") return;
        showActionNotificationHtml(
          `<strong>${escapeHtml(item.from || getPairPartnerName())}</strong> sent a code suggestion for ${escapeHtml(item.fileName || "the editor")}.`,
          openPairSuggestionFromNotification,
          "info",
        );
      } else if (kind === "task") {
        if (pairPanelOpen && pairPanelTab === "tasks") return;
        showActionNotificationHtml(
          `<strong>${escapeHtml(item.createdBy || getPairPartnerName())}</strong> added a Pair task: ${escapeHtml(item.text || "Untitled task")}`,
          () => openPairTaskFromNotification(item.id),
          "info",
        );
      }
    });
  });

  collabSocket.on("collab:pair:invitation", handlePairInvitation);
  collabSocket.on("collab:pair:invitation-response", (payload) => {
    showNotification(
      payload?.accepted ? `${payload.by} accepted your pair invitation.` : `${payload?.by || "That participant"} declined your pair invitation.`,
      payload?.accepted ? "success" : "info",
    );
  });
  collabSocket.on("collab:pair:ended", (payload) => {
    const partner = getPairPartnerName();
    activePairState = null;
    pairPanelOpen = false;
    resetPairToolActivity();
    pairFollowEnabled = false;
    pairFollowSuspended = false;
    pairPartnerPresence = null;
    stopPairFollowAnimation();
    if (followedParticipantName === partner) followedParticipantName = "";
    stopPairVoice(false);
    enforceCollabPermissionsUI();
    renderPairDock();
    showNotification(payload?.reason || "Pair ended.", "info");
  });
  collabSocket.on("collab:pair:switch-request", async (payload) => {
    const result = await showAppConfirm(
      "SWITCH PAIR ROLES",
      `${payload?.from || "Your partner"} wants to switch Driver and Navigator roles.`,
      "SWITCH",
      "NOT NOW",
    );
    const response = await emitPairEvent("collab:pair:switch-response", { accept: Boolean(result?.ok) });
    if (!response?.ok) showNotification(response?.error || "Unable to answer the role switch.", "error");
  });
  collabSocket.on("collab:pair:chat", (message) => {
    if (!activePairState || !message) return;
    const messages = activePairState.chat || (activePairState.chat = []);
    if (!messages.some((entry) => entry.id === message.id)) messages.push(message);
    markPairToolActivity("chat");
    renderPairDock();
    if (message.from !== myInfo.name) {
      showActionNotificationHtml(
        `<strong>${escapeHtml(message.from)}</strong> sent a pair message.`,
        () => openPairToolsFromNotification("chat"),
        "info",
      );
    }
  });
  collabSocket.on("collab:pair:presence", applyPairPartnerPresence);
  collabSocket.on("collab:pair:presence-request", () => emitPairPresenceSoon(true));
  collabSocket.on("collab:pair:help-request", (payload) => {
    showActionNotificationHtml(
      `<strong>${escapeHtml(payload?.from || "A pair")}</strong> asked the host for Pair help.`,
      () => openPairHelpFromNotification(payload?.pair?.id),
      "warn",
    );
    addTimelineEntry(`${payload?.from || "A pair"} requested pair help.`, "pair");
  });
  collabSocket.on("collab:pair:voice", (payload) => {
    handlePairVoiceSignal(payload).catch((error) => {
      stopPairVoice(false);
      showNotification(error?.message || "Pair voice connection failed.", "error");
    });
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
        const viewingGroupChat = isViewingCollabChat("group");
        if (!viewingGroupChat) {
          collabUnreadGroupMessages += 1;
        }
        updateCollabUnreadBadges();
        if (!viewingGroupChat) {
          showActionNotificationHtml(
            `<strong>${escapeHtml(senderName)}</strong> has sent a message publicly.`,
            () => openCollabChatFromNotification("group"),
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
      const viewingPrivateChat = isViewingCollabChat("private", message.from);
      if (!viewingPrivateChat) {
        const privateKey = getPrivateUnreadKey(message.from);
        collabUnreadPrivateMessages[privateKey] = getPrivateUnreadCount(message.from) + 1;
      }
      updateCollabUnreadBadges();
      if (!viewingPrivateChat) {
        showActionNotificationHtml(
          `<strong>${escapeHtml(message.from)}</strong> has sent a message to you privately.`,
          () => openCollabChatFromNotification("private", message.from),
          "info",
        );
      }
    }
  });

  collabSocket.on("collab:chat:cleared", (payload) => {
    if (payload?.mode === "group") {
      collabGroupMessages = [];
      collabUnreadGroupMessages = 0;
      renderCollabChatMessages();
      updateCollabUnreadBadges();
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
    myInfo = { name: joinRequestContext.name || myInfo.name, theme: myInfo.theme, cursorStyle: normalizeCollabCursorStyle(myInfo.cursorStyle) };
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
    collabPendingLocalSync = false;
    removeWaitingRoomPopup();
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

window.addEventListener("online", async () => {
  if (!activeSessionId) return;
  ensureCollabSocket();
  if (collabSocket?.connected) {
    await resumeCollabSession("Collaboration reconnected.");
    startCollabHeartbeat();
  }
});

window.addEventListener("offline", () => {
  if (activeSessionId) maybeShowCollabOfflineNotice();
});

function applyRemoteSessionState(files, activeFileName, preferRemoteActive = false) {
  if (!Array.isArray(files)) return;
  isApplyingRemoteState = true;
  try {
    const me = getMyParticipant();
    const shouldFilterPersonalFiles = Boolean(
      activeSessionId &&
        me &&
        !["host", "co-host"].includes(String(me.role || "participant")) &&
        Array.isArray(me.allowedFiles),
    );
    const allowedFileNames = shouldFilterPersonalFiles
      ? new Set(me.allowedFiles.map((name) => String(name || "").trim().toLowerCase()))
      : null;
    const visibleFiles = allowedFileNames
      ? files.filter((file) => allowedFileNames.has(String(file?.name || "").trim().toLowerCase()))
      : files;
    const requestedActiveName = normalizeProjectFileName(activeFileName || "");
    const currentActiveName = activeFile ? normalizeProjectFileName(activeFile.name) : null;
    releaseProjectMediaObjectUrls(projectFiles);
    projectFiles = normalizeProjectMediaMetadata(visibleFiles);
    normalizeProjectFileNamesInPlace(projectFiles);
    if (!projectFiles.length) {
      activeFile = null;
      displayActiveFileInEditor();
      const emptyEditor = document.getElementById("activeEditor");
      if (emptyEditor) {
        emptyEditor.value = "";
        emptyEditor.readOnly = true;
        emptyEditor.title = "No collaboration files are visible to you.";
        updateLineNumbers(emptyEditor);
        resetAllEditorHistory(emptyEditor);
      }
      if (highlightLayer) highlightLayer.innerHTML = " ";
      if (iframe) {
        iframe.removeAttribute("src");
        iframe.srcdoc = `<!doctype html><html><body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#f6f8fa;color:#57606a;font:14px system-ui,sans-serif;"><p>No collaboration files are visible to you.</p></body></html>`;
      }
      renderFileList();
      enforceCollabPermissionsUI();
      renderRemoteCursors();
      return;
    }
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

    displayActiveFileInEditor({ preserveCaret: true, resetAllHistory: true });
    renderFileList();
    enforceCollabPermissionsUI();
    hydrateStoredProjectMedia(projectFiles);
    renderRemoteCursors();
    if (autoRunCheckbox.checked) updatePreview();
  } finally {
    isApplyingRemoteState = false;
  }
}

function emitSessionUpdate() {
  if (!activeSessionId || !myInfo.name) return;
  collabPendingLocalSync = true;
  if (!collabSocket) return;
  if (!collabSocket.connected || collabResumeInFlight) {
    return;
  }
  const syncRevision = collabLocalSyncRevision;
  collabSocket.timeout(8000).emit(
    "collab:update",
    {
      sessionId: activeSessionId,
      files: projectFiles,
      activeFileName: activeFile ? activeFile.name : null,
      user: myInfo,
    },
    (error, response) => {
      if (error) return;
      if (!response?.ok) {
        if (response?.needsResume) resumeCollabSession();
        else if (syncRevision === collabLocalSyncRevision) collabPendingLocalSync = false;
        return;
      }
      if (syncRevision === collabLocalSyncRevision) collabPendingLocalSync = false;
    },
  );
}

function getCollabDocumentRevision(content) {
  const value = String(content || "");
  if (value === collabRevisionCacheContent) return collabRevisionCacheValue;
  let hash = 2166136261;
  const hashRange = (start, end) => {
    for (let index = start; index < end; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
  };
  if (isLargeEditorContent(value)) {
    const sampleSize = 16 * 1024;
    const middleStart = Math.max(sampleSize, Math.floor(value.length / 2) - sampleSize / 2);
    hashRange(0, Math.min(sampleSize, value.length));
    hashRange(middleStart, Math.min(middleStart + sampleSize, value.length));
    hashRange(Math.max(0, value.length - sampleSize * 2), value.length);
  } else {
    hashRange(0, value.length);
  }
  collabRevisionCacheContent = value;
  collabRevisionCacheValue = `${value.length.toString(36)}-${(hash >>> 0).toString(36)}`;
  return collabRevisionCacheValue;
}

function announceTyping(activeEditorId) {
  if (!collabSocket?.connected || !activeSessionId || !myInfo.name) return;
  clearTimeout(typingTimer);
  const editor = document.getElementById("activeEditor");
  const localCaretColor = /^#[0-9a-f]{6}$/i.test(String(myInfo.theme || ""))
    ? myInfo.theme
    : "var(--accent-color)";
  if (editor) {
    editor.style.setProperty("--local-collab-caret-color", localCaretColor);
    editor.classList.add("collab-live-typing-caret");
  }
  collabSocket.emit("collab:typing", {
    sessionId: activeSessionId,
    indicator: {
      name: myInfo.name,
      theme: myInfo.theme,
      editor: activeEditorId,
      fileName: activeFile ? activeFile.name : null,
      caretPos: editor ? editor.selectionStart : 0,
      documentRevision: getCollabDocumentRevision(editor ? editor.value : ""),
    },
  });

  typingTimer = setTimeout(() => {
    editor?.classList.remove("collab-live-typing-caret");
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

function getActiveTypingParticipants() {
  return Object.values(remoteTypingState).filter(
    (entry) =>
      entry &&
      !entry.stopped &&
      entry.name !== myInfo.name &&
      entry.fileName === (activeFile ? activeFile.name : "") &&
      Date.now() - Number(entry.ts || 0) < 1800,
  );
}

function getVisibleTypingParticipants(entries = getActiveTypingParticipants()) {
  const activeRevision = getCollabDocumentRevision(activeFile ? activeFile.content : "");
  return entries.filter(
    (entry) => !entry.documentRevision || entry.documentRevision === activeRevision,
  );
}

function ensureRemotePresenceLayer(className) {
  let layer = Array.from(remoteCursorLayer.children).find(
    (child) => child.classList && child.classList.contains(className),
  );
  if (!layer) {
    layer = document.createElement("div");
    layer.className = className;
    remoteCursorLayer.appendChild(layer);
  }
  return layer;
}

function renderRemoteTypingCarets(layer, editor, entries, retainedNames = new Set()) {
  const existingCarets = new Map(
    Array.from(layer.children).map((caret) => [caret.dataset.participantName || "", caret]),
  );
  const visibleNames = new Set();

  entries.forEach((entry) => {
    const name = String(entry.name || "User");
    visibleNames.add(name);
    let caret = existingCarets.get(name);
    let isNew = false;
    if (!caret) {
      isNew = true;
      caret = document.createElement("div");
      caret.className = "remote-typing-caret";
      caret.dataset.participantName = name;

      const line = document.createElement("span");
      line.className = "remote-typing-caret-line";
      const label = document.createElement("span");
      label.className = "remote-typing-label";
      caret.append(line, label);
      layer.appendChild(caret);
    }

    const caretPos = Math.max(0, Math.min(Number(entry.caretPos || 0), editor.value.length));
    const coords = getCaretCoordinates(editor, caretPos);
    const left = Number.isFinite(coords.left) ? coords.left : 0;
    const top = Number.isFinite(coords.top) ? coords.top : 0;
    const lineHeight = Math.max(16, Number(coords.lineHeight || 20));
    const isOffscreen =
      left < -4 ||
      top < -lineHeight ||
      left > editor.clientWidth ||
      top > editor.clientHeight;

    caret.hidden = isOffscreen;
    caret.style.height = `${lineHeight}px`;
    caret.style.setProperty("--typing-color", String(entry.theme || "#4CAF50"));
    caret.classList.toggle("is-near-top", top < 24);
    caret.classList.toggle("is-near-right", left > editor.clientWidth - 118);
    const label = caret.querySelector(".remote-typing-label");
    if (label) label.textContent = `${name} typing`;

    if (isNew) caret.style.transition = "none";
    caret.style.transform = `translate3d(${left}px, ${top}px, 0)`;
    if (isNew) {
      requestAnimationFrame(() => {
        if (!caret.isConnected) return;
        caret.style.removeProperty("transition");
        caret.classList.add("is-ready");
      });
    } else {
      caret.classList.add("is-ready");
    }
  });

  existingCarets.forEach((caret, name) => {
    if (!visibleNames.has(name) && !retainedNames.has(name)) caret.remove();
  });
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
  const activeTypingEntries = editor ? getActiveTypingParticipants() : [];
  const typingEntries = editor ? getVisibleTypingParticipants(activeTypingEntries) : [];
  const typingNames = new Set(activeTypingEntries.map((entry) => String(entry.name || "")));
  const typingLayer = ensureRemotePresenceLayer("remote-typing-layer");
  const pointerLayer = ensureRemotePresenceLayer("remote-pointer-layer");
  renderRemoteTypingCarets(typingLayer, editor, typingEntries, typingNames);
  const cursorHtml = getVisibleCursorParticipants()
    .filter((entry) => !typingNames.has(String(entry.name || "")))
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
        <i class="remote-cursor-icon ${getCollabCursorIconClass(entry.cursorStyle)}" aria-hidden="true"></i>
        <span class="remote-cursor-label">${escapeHtml(entry.name || "User")}</span>
      </div>`;
    })
    .join("");
  pointerLayer.innerHTML = cursorHtml;
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
    if (activePairState && activeSessionId && collabSocket?.connected && !document.hidden) {
      emitPairPresenceSoon();
    }
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
      cursorStyle: normalizeCollabCursorStyle(myInfo.cursorStyle),
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
  updateLocalCollabCursor(event);
  emitCursorFromClientCoords(event.clientX, event.clientY);
}

function hideLocalCollabCursor() {
  if (localCollabCursor) localCollabCursor.hidden = true;
  document.getElementById("activeEditor")?.classList.remove("collab-custom-cursor-active");
}

function updateLocalCollabCursor(event) {
  const editor = document.getElementById("activeEditor");
  const wrapper = editor?.closest(".editor-wrapper");
  if (
    !localCollabCursor ||
    !localCollabCursorIcon ||
    !editor ||
    !wrapper ||
    !activeSessionId ||
    !myInfo.name ||
    (event.pointerType && !["mouse", "pen"].includes(event.pointerType))
  ) {
    hideLocalCollabCursor();
    return;
  }

  const wrapperRect = wrapper.getBoundingClientRect();
  const left = Math.max(0, Math.min(wrapperRect.width - 24, event.clientX - wrapperRect.left));
  const top = Math.max(0, Math.min(wrapperRect.height - 26, event.clientY - wrapperRect.top));
  const cursorColor = /^#[0-9a-f]{6}$/i.test(String(myInfo.theme || ""))
    ? myInfo.theme
    : "#4CAF50";
  const cursorStyle = normalizeCollabCursorStyle(myInfo.cursorStyle);

  localCollabCursor.style.left = `${left}px`;
  localCollabCursor.style.top = `${top}px`;
  localCollabCursor.style.setProperty("--cursor-color", cursorColor);
  localCollabCursor.dataset.cursorStyle = cursorStyle;
  localCollabCursor.classList.toggle("is-near-top", top < 30);
  localCollabCursor.classList.toggle("is-near-right", left > wrapperRect.width - 92);
  localCollabCursorIcon.className = `local-collab-cursor-icon ${getCollabCursorIconClass(cursorStyle)}`;
  localCollabCursor.hidden = false;
  editor.classList.add("collab-custom-cursor-active");
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
      <div class="collab-waiting-room-row">
        <div>
          <strong>Waiting room</strong>
          <small>Review people before they enter the session.</small>
        </div>
        <label class="switch" title="Activate waiting room">
          <input type="checkbox" id="collabWaitingRoomInput" aria-label="Activate waiting room">
          <span class="slider"></span>
        </label>
      </div>
      <div class="collab-form-field">
        <span>Collaboration cursor</span>
        ${buildCollabCursorPickerHtml("pointer")}
      </div>
    </div>
  `;
  collabModal.style.display = "flex";
  errorMsgEl.style.display = "none";
  setModalActions(
    `<button id="modalDoneBtn" class="run-button"><strong>CREATE SESSION</strong></button>`,
  );
  bindCollabColorPicker("#4CAF50");
  bindCollabCursorPicker("pointer");

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
    sessionData.waitingRoom = Boolean(document.getElementById("collabWaitingRoomInput")?.checked);
    sessionData.cursorStyle = document.getElementById("userCursorInput")?.value || "pointer";
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
        <div class="collab-form-field">
          <span>Collaboration cursor</span>
          ${buildCollabCursorPickerHtml("pointer")}
        </div>
      </div>
    `;
    collabModal.style.display = "flex";
    errorMsgEl.style.display = "none";
    setModalActions(
      `<button id="modalDoneBtn" class="run-button"><strong>JOIN SESSION</strong></button>`,
    );
    bindCollabColorPicker("#2196F3");
    bindCollabCursorPicker("pointer");

    const doneBtn = getModalDoneBtn();
    if (!doneBtn) return;
    doneBtn.onclick = () => {
      const name = document.getElementById("userNameInput").value.trim();
      const theme = document.getElementById("userThemeInput").value;
      const cursorStyle = document.getElementById("userCursorInput")?.value || "pointer";
      const v = validateUsername(name);
      if (!v.valid) {
        errorMsgEl.textContent = v.error;
        errorMsgEl.style.display = "block";
        return;
      }
      errorMsgEl.style.display = "none";
      joinSessionWithPin(sid, name, theme, cursorStyle);
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
        <div class="collab-form-field">
          <span>Collaboration cursor</span>
          ${buildCollabCursorPickerHtml(prefill.cursorStyle || "pointer")}
        </div>
    </div>
  `;
  collabModal.style.display = "flex";
  errorMsgEl.style.display = "none";
  setModalActions(
    `<button id="modalDoneBtn" class="run-button"><strong>NEXT</strong></button>`,
  );
  bindCollabColorPicker(prefill.theme || "#2196F3");
  bindCollabCursorPicker(prefill.cursorStyle || "pointer");

  const backBtn = document.getElementById("modalBackBtn");
  if (backBtn) backBtn.onclick = renderCollabStartMenu;

  const doneBtn = getModalDoneBtn();
  if (!doneBtn) return;
  doneBtn.onclick = () => {
    const name = document.getElementById("userNameInput").value.trim();
    const theme = document.getElementById("userThemeInput").value;
    const cursorStyle = document.getElementById("userCursorInput")?.value || "pointer";
    const nameResult = validateUsername(name);
    if (!nameResult.valid) {
      errorMsgEl.textContent = nameResult.error;
      errorMsgEl.style.display = "block";
      return;
    }
    errorMsgEl.style.display = "none";
    renderJoinPinStep({ name, theme, cursorStyle, pin: prefill.pin || "" });
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

function renderJoinPinStep({ name = "", theme = "#2196F3", cursorStyle = "pointer", pin = "" } = {}) {
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
  if (backBtn) backBtn.onclick = () => renderJoinSessionStep({ name, theme, cursorStyle, pin: getJoinPinFromBoxes() });

  const doneBtn = getModalDoneBtn();
  if (!doneBtn) return;
  doneBtn.onclick = () => {
    const pinResult = validateSessionPin(getJoinPinFromBoxes());
    if (!pinResult.valid) {
      errorMsgEl.textContent = pinResult.error;
      errorMsgEl.style.display = "block";
      return;
    }
    joinSessionWithPin(pinResult.pin, name, theme, cursorStyle);
  };
}

function startCollaboration() {
  dismissCollabManageTutorial();
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

const collabCursorChoices = [
  { id: "pointer", label: "Pointer", icon: "fa-solid fa-arrow-pointer" },
  { id: "hand", label: "Hand", icon: "fa-regular fa-hand-pointer" },
  { id: "mouse", label: "Mouse", icon: "fa-solid fa-computer-mouse" },
  { id: "crosshair", label: "Crosshair", icon: "fa-solid fa-crosshairs" },
  { id: "pen", label: "Pen", icon: "fa-solid fa-pen-nib" },
  { id: "text", label: "Text", icon: "fa-solid fa-i-cursor" },
];

function normalizeCollabCursorStyle(value) {
  const requested = String(value || "").trim().toLowerCase();
  return collabCursorChoices.some((choice) => choice.id === requested) ? requested : "pointer";
}

function getCollabCursorIconClass(value) {
  const style = normalizeCollabCursorStyle(value);
  return collabCursorChoices.find((choice) => choice.id === style)?.icon || collabCursorChoices[0].icon;
}

function buildCollabCursorPickerHtml(selectedStyle = "pointer") {
  const selected = normalizeCollabCursorStyle(selectedStyle);
  return `
    <input type="hidden" id="userCursorInput" value="${selected}">
    <div class="collab-cursor-choice-grid" role="radiogroup" aria-label="Collaboration cursor">
      ${collabCursorChoices.map((choice) => `
        <button type="button" class="collab-cursor-choice${choice.id === selected ? " selected" : ""}" data-cursor-style="${choice.id}" role="radio" aria-checked="${choice.id === selected ? "true" : "false"}" title="${choice.label}">
          <i class="${choice.icon}" aria-hidden="true"></i>
          <span>${choice.label}</span>
        </button>`).join("")}
    </div>`;
}

function bindCollabCursorPicker(selectedStyle = "pointer") {
  const input = document.getElementById("userCursorInput");
  if (!input) return;
  const apply = (value) => {
    const selected = normalizeCollabCursorStyle(value);
    input.value = selected;
    document.querySelectorAll(".collab-cursor-choice").forEach((button) => {
      const active = button.dataset.cursorStyle === selected;
      button.classList.toggle("selected", active);
      button.setAttribute("aria-checked", active ? "true" : "false");
    });
  };
  document.querySelectorAll(".collab-cursor-choice").forEach((button) => {
    button.addEventListener("click", () => apply(button.dataset.cursorStyle));
  });
  apply(selectedStyle);
}

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
      cursorStyle: normalizeCollabCursorStyle(sessionData.cursorStyle),
      deviceId: getOrCreateDeviceId(),
      files: projectFiles,
      activeFileName: activeFile ? activeFile.name : null,
      permissions: { ...defaultCollabPermissions, requireJoinApproval: Boolean(sessionData.waitingRoom) },
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
      myInfo = { name: sessionData.host, theme: sessionData.theme, cursorStyle: normalizeCollabCursorStyle(sessionData.cursorStyle) };
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

function joinSessionWithPin(sid, name, theme, cursorStyle = "pointer") {
  if (!ensureCollabSocket()) return;
  resetTransientCollabUiState();
  errorMsgEl.style.display = "none";

  collabSocket.emit(
    "collab:join",
    { sessionId: sid, name, theme, cursorStyle: normalizeCollabCursorStyle(cursorStyle), deviceId: getOrCreateDeviceId() },
    (res) => {
      if (!res || !res.ok) {
        if (res && res.pending) {
          myInfo = { name, theme, cursorStyle: normalizeCollabCursorStyle(cursorStyle) };
          showJoinPendingState(res.sessionId || sid, name, res.hostName);
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
      myInfo = { name, theme, cursorStyle: normalizeCollabCursorStyle(cursorStyle) };
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

function sortSessionParticipants(participants, mode = collabParticipantSortMode) {
  const entries = (Array.isArray(participants) ? participants : []).map((participant, index) => ({
    participant,
    index,
  }));
  entries.sort((left, right) => {
    if (mode === "alphabetical") {
      const nameOrder = String(left.participant?.name || "").localeCompare(
        String(right.participant?.name || ""),
        undefined,
        { sensitivity: "base", numeric: true },
      );
      return nameOrder || left.index - right.index;
    }
    const leftJoinedAt = Number(left.participant?.joinedAt);
    const rightJoinedAt = Number(right.participant?.joinedAt);
    if (Number.isFinite(leftJoinedAt) && Number.isFinite(rightJoinedAt) && leftJoinedAt !== rightJoinedAt) {
      return leftJoinedAt - rightJoinedAt;
    }
    if (Number.isFinite(leftJoinedAt) !== Number.isFinite(rightJoinedAt)) {
      return Number.isFinite(leftJoinedAt) ? -1 : 1;
    }
    return left.index - right.index;
  });
  return entries.map((entry) => entry.participant);
}

function showSessionDetails(sid) {
  collabModalView = "session";
  setCollabCloseButtonVisible(true);
  const link = collabShareLink || `${window.location.origin}/frontend.html/${sid}`;
  const orderedParticipants = sortSessionParticipants(collabParticipants);
  const listItems = orderedParticipants
    .map((p) => {
      const roleLabel =
        p.role === "host" ? " (host)" : p.role === "co-host" ? " (co-host)" : "";
      const canManage = canModerateParticipant(p);
      const moreButton = canManage
        ? `<button class="run-button participant-more-btn" data-name="${escapeHtml(p.name)}" style="padding:4px 10px; font-size:11px;"><strong>MORE</strong></button>`
        : "";
      const renameButton = canRenameParticipant(p)
        ? `<button class="run-button participant-rename-btn" data-name="${escapeHtml(p.name)}" style="padding:4px 10px; font-size:11px;"><i class="fa-solid fa-pen" aria-hidden="true"></i><strong>RENAME</strong></button>`
        : "";
      const targetPair = getPairOverviewForName(p.name);
      const myPair = getPairOverviewForName(myInfo.name);
      const isMe = String(p.name || "").trim().toLowerCase() === String(myInfo.name || "").trim().toLowerCase();
      const pairingBlocked =
        collabPermissions.disablePairing ||
        participantHasDisabledFeature(p, "pairing") ||
        participantHasDisabledFeature(getMyParticipant(), "pairing") ||
        Boolean(getMyParticipant()?.mutedChat);
      const pairButton = !isMe && !pairingBlocked
        ? `<button class="run-button participant-pair-btn" data-name="${escapeHtml(p.name)}" style="padding:4px 10px;font-size:11px;" ${targetPair || myPair ? "disabled" : ""}><i class="fa-solid fa-code-compare"></i><strong>${targetPair ? "PAIRED" : "PAIR"}</strong></button>`
        : "";
      const rowActions = moreButton || renameButton || pairButton
        ? `<div class="collab-participant-row-actions">${pairButton}${renameButton}${moreButton}</div>`
        : "";
      const statusParts = [
        p.currentFile || "No active file",
        p.mutedChat ? "muted" : "",
        p.frozenEditing ? "frozen" : "",
        p.renameDisabled ? "self-rename disabled" : "",
        p.priority ? "priority" : "",
      ].filter(Boolean);
      return `<div class="collab-participant-row">
        <div class="collab-participant-main">
          <span class="collab-participant-color" style="background:${escapeHtml(p.theme)};"></span>
          <div class="collab-participant-text">
            <div class="collab-participant-name">${escapeHtml(formatCollabDisplayName(p.name))}${roleLabel}${targetPair ? `<span class="pair-participant-badge">${escapeHtml(targetPair.driver === p.name ? "Driver" : "Navigator")}</span>` : ""}</div>
            <div class="collab-participant-meta">${escapeHtml(statusParts.join(" · "))}</div>
          </div>
        </div>
        ${rowActions}
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
          <span class="collab-meta-value">${escapeHtml(formatCollabDisplayName(getCurrentHostName(), "Unknown"))}</span>
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
      <div class="collab-participant-list-heading">
        <h4 class="collab-section-title">Participants <span style="font-weight:normal;color:var(--text-muted);font-size:13px;">(${orderedParticipants.length})</span></h4>
        <label class="collab-participant-sort-label" for="collabParticipantSortSelect">
          <span>Sort by</span>
          <select id="collabParticipantSortSelect" class="collab-participant-sort-select" aria-label="Sort participants">
            <option value="joined" ${collabParticipantSortMode === "joined" ? "selected" : ""}>Joined first</option>
            <option value="alphabetical" ${collabParticipantSortMode === "alphabetical" ? "selected" : ""}>Alphabetical</option>
          </select>
        </label>
      </div>
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
  const participantSortSelect = document.getElementById("collabParticipantSortSelect");
  if (participantSortSelect) {
    participantSortSelect.addEventListener("change", () => {
      collabParticipantSortMode = participantSortSelect.value === "alphabetical"
        ? "alphabetical"
        : "joined";
      const previousScrollTop = modalBody.scrollTop;
      showSessionDetails(sid);
      modalBody.scrollTop = previousScrollTop;
      document.getElementById("collabParticipantSortSelect")?.focus();
    });
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
  modalBody.querySelectorAll(".participant-rename-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetName = btn.getAttribute("data-name") || "";
      requestParticipantRename(targetName);
    });
  });
  modalBody.querySelectorAll(".participant-pair-btn").forEach((btn) => {
    btn.addEventListener("click", () => inviteParticipantToPair(btn.getAttribute("data-name") || ""));
  });
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
  const shouldShowManageTutorial =
    collabModalView === "created-pin" &&
    Boolean(activeSessionId) &&
    isHost() &&
    !safeLocalStorage("get", COLLAB_MANAGE_TUTORIAL_KEY);
  collabModalView = "idle";
  activeParticipantActionName = "";
  collabModal.style.display = "none";
  setCollabCloseButtonVisible(true);
  setModalActions(`<button id="modalDoneBtn" class="run-button"><strong>DONE</strong></button>`);
  if (shouldShowManageTutorial) setTimeout(showCollabManageTutorial, 180);
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
              showJoinPendingState(res.sessionId || sid, name, res.hostName);
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
  if (isApplyingRemoteState || !activeSessionId) return;
  scheduleSessionUpdate();
}

function syncProjectWithSession() {
  if (isApplyingRemoteState) return;
  scheduleSessionUpdate();
}

function startSyncing() {
  startCollabHeartbeat();
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

mediaInput.addEventListener("change", async (e) => {
  if (activeSessionId && isReadOnlyParticipant() && collabPermissions.disableNewFile) {
    showNotification("The host disabled creating new files for participants.", "error");
    mediaInput.value = "";
    return;
  }
  const files = Array.from(e.target.files);
  if (!files.length) return;

  let addedCount = 0;
  let storageWarningShown = false;
  for (const file of files) {
    const name = normalizeProjectFileName(file.name);
    const mimeKind = String(file.type || "").split("/")[0].toLowerCase();
    const mediaType = ["image", "video", "audio"].includes(mimeKind)
      ? mimeKind
      : getProjectMediaKind({ name, type: "media" });

    if (!mediaType) {
      showNotification(`${name} is not a supported media file`, "warn");
      continue;
    }
    if (projectFiles.some((entry) => String(entry.name || "").trim().toLowerCase() === name.toLowerCase())) {
      showNotification(`${name} already exists`, "warn");
      continue;
    }

    const newFile = {
      name,
      type: "media",
      mediaType,
      mediaStorageId: createMediaStorageId(),
      mediaSize: Number(file.size || 0),
      mediaMimeType: String(file.type || "application/octet-stream"),
      content: "",
      active: false,
    };
    attachRuntimeMediaBlob(newFile, file);
    projectFiles.push(newFile);
    addedCount += 1;

    try {
      await persistMediaBlob(newFile, file);
    } catch (error) {
      console.warn("Media persistence unavailable:", error);
      newFile.mediaStorageId = "";
      if (!storageWarningShown) {
        storageWarningShown = true;
        showNotification("Media is available in this tab, but browser storage could not save it for reload.", "warn");
      }
    }
    if (file.size <= MAX_LIVE_MEDIA_TRANSFER_BYTES) {
      try {
        newFile.content = await readMediaBlobAsDataUrl(file);
      } catch (_error) {}
    } else if (activeSessionId) {
      showNotification(`${name} is too large for live collaboration transfer, so it stays local to this browser.`, "warn");
    }
    showNotification(`Added: ${name} (${formatMediaByteSize(file.size)})`, "success");
  }

  mediaInput.value = "";
  if (!addedCount) return;
  hasUnsavedChanges = true;
  updateProjectStatusUI();
  renderFileList();
  scheduleProjectAutosave();
  if (autoRunCheckbox.checked) debouncedUpdatePreview();
  syncProjectWithSession();
});

window.addEventListener("unload", () => releaseProjectMediaObjectUrls(projectFiles));

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
    if (isCompactWorkspaceLayout()) {
      editorsPanel.style.width = "";
      editorsPanel.style.height = "";
      editorsPanel.style.flex = "";
      if (previewPanel) {
        previewPanel.style.width = "";
        previewPanel.style.height = "";
        previewPanel.style.flex = "";
      }
      if (document.body.classList.contains("mobile-pane-preview")) {
        requestAnimationFrame(() => updatePreviewDeviceScale());
      }
      return;
    }
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

const UI_TRANSLATION_EXCLUDED_SELECTOR = [
  "script", "style", "textarea", "input", "select", "option", "pre", "code", "iframe",
  '[contenteditable="true"]', '[translate="no"]', "[data-no-translate]",
  "#activeEditor", "#syntaxHighlightLayer", "#remoteCursorLayer", "#fileList",
  "#suggestionPopup", "#consoleOutput", "#developerConsoleOutput", "#nodeTerminal",
  "#githubRepoModalBody", "#collabChatMessages", ".codx-notification",
].join(",");
let activeUiLanguage = "en";
let activeUiCountryCode = "";
let uiTranslationObserver = null;
let uiTranslationScanTimer = null;
const translatedUiNodes = new WeakMap();

function isSafeUiTranslationText(value) {
  const text = String(value || "").trim();
  if (text.length < 2 || text.length > 240 || !/[A-Za-z]/.test(text)) return false;
  if (/https?:\/\/|[{}<>]|^[./\\]|\b(?:npm|localhost|node_modules)\b/i.test(text)) return false;
  return true;
}

function collectUiTranslationNodes(root = document.body) {
  const nodes = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const parent = node.parentElement;
    if (!parent || parent.closest(UI_TRANSLATION_EXCLUDED_SELECTOR)) continue;
    if (!isSafeUiTranslationText(node.data)) continue;
    if (!parent.getClientRects().length) continue;
    const previous = translatedUiNodes.get(node);
    if (previous && (node.data === previous.translated || node.data === previous.pending)) continue;
    nodes.push(node);
    if (nodes.length >= 40) break;
  }
  return nodes;
}

function getUiTranslationCache(language) {
  try {
    return JSON.parse(localStorage.getItem(`codxUiTranslations:${language}`) || "{}") || {};
  } catch (_error) {
    return {};
  }
}

function saveUiTranslationCache(language, cache) {
  try {
    const entries = Object.entries(cache).slice(-600);
    localStorage.setItem(`codxUiTranslations:${language}`, JSON.stringify(Object.fromEntries(entries)));
  } catch (_error) {}
}

async function translateVisibleInterface() {
  if (activeUiLanguage === "en") return;
  const nodes = collectUiTranslationNodes();
  if (!nodes.length) return;
  const cache = getUiTranslationCache(activeUiLanguage);
  const sourceGroups = new Map();

  nodes.forEach((node) => {
    const raw = node.data;
    const source = raw.trim();
    const leading = raw.slice(0, raw.indexOf(source));
    const trailing = raw.slice(raw.indexOf(source) + source.length);
    if (cache[source]) {
      node.data = `${leading}${cache[source]}${trailing}`;
      translatedUiNodes.set(node, { source, translated: node.data });
      return;
    }
    if (!sourceGroups.has(source)) sourceGroups.set(source, []);
    sourceGroups.get(source).push({ node, leading, trailing });
    translatedUiNodes.set(node, { source, pending: raw });
  });

  const sources = Array.from(sourceGroups.keys());
  if (!sources.length) return;
  try {
    const response = await fetch("/api/localization/translate", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        texts: sources,
        browserLanguage: navigator.language || "en",
        countryCode: activeUiCountryCode,
      }),
    });
    const data = await response.json();
    if (!response.ok || !data?.ok || !Array.isArray(data.translations)) throw new Error("Translation failed");
    sources.forEach((source, index) => {
      const translated = String(data.translations[index] || source).trim() || source;
      cache[source] = translated;
      sourceGroups.get(source).forEach(({ node, leading, trailing }) => {
        const current = translatedUiNodes.get(node);
        if (!current || current.source !== source) return;
        node.data = `${leading}${translated}${trailing}`;
        translatedUiNodes.set(node, { source, translated: node.data });
      });
    });
    saveUiTranslationCache(activeUiLanguage, cache);
  } catch (_error) {
    nodes.forEach((node) => translatedUiNodes.delete(node));
  }
}

function scheduleUiTranslationScan() {
  clearTimeout(uiTranslationScanTimer);
  uiTranslationScanTimer = setTimeout(() => translateVisibleInterface(), 120);
}

async function detectClientCountryCode() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4500);
  try {
    const response = await fetch("https://ipwho.is/?fields=success,country_code", {
      mode: "cors",
      cache: "no-store",
      signal: controller.signal,
    });
    const location = await response.json();
    const countryCode = String(location?.country_code || "").trim().toUpperCase();
    return response.ok && location?.success !== false && /^[A-Z]{2}$/.test(countryCode)
      ? countryCode
      : "";
  } catch (_error) {
    return "";
  } finally {
    clearTimeout(timeout);
  }
}

async function initializeAutomaticLocalization() {
  try {
    activeUiCountryCode = await detectClientCountryCode();
    const response = await fetch(
      `/api/localization/profile?browserLanguage=${encodeURIComponent(navigator.language || "en")}&countryCode=${encodeURIComponent(activeUiCountryCode)}`,
      { credentials: "same-origin", headers: { Accept: "application/json" } },
    );
    const profile = await response.json();
    if (!response.ok || !profile?.ok || !profile.enabled || !profile.language) return;
    activeUiLanguage = String(profile.language);
    document.documentElement.lang = activeUiLanguage;
    document.documentElement.dir = /^(ar|fa|he|ur)(?:-|$)/i.test(activeUiLanguage) ? "rtl" : "ltr";
    await translateVisibleInterface();
    uiTranslationObserver = new MutationObserver(scheduleUiTranslationScan);
    uiTranslationObserver.observe(document.body, { childList: true, subtree: true, characterData: true });
    document.addEventListener("click", scheduleUiTranslationScan, true);
    scheduleUiTranslationScan();
  } catch (_error) {}
}

async function tryOpenAdminPublishedProject() {
  const url = new URL(window.location.href);
  const projectId = String(url.searchParams.get("adminProject") || "").trim();
  if (!projectId) return false;
  try {
    const response = await fetch(`/admin/api/project/${encodeURIComponent(projectId)}`, {
      credentials: "same-origin",
      headers: { Accept: "application/json" },
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data?.ok || !data?.project) {
      throw new Error(data?.error || "Unable to open this published project.");
    }
    const project = data.project;
    const opened = applyProjectState(
      {
        files: project.files,
        activeFileName: project.activeFileName,
        previewTarget: project.previewTarget,
      },
      `published project “${project.projectName || projectId}”`,
    );
    if (!opened) return false;
    activeSavedProjectName = null;
    document.title = `${project.projectName || projectId} | CodX Editor`;
    url.searchParams.delete("adminProject");
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    showNotification(`Opened published project “${project.projectName || projectId}”.`, "success");
    return true;
  } catch (error) {
    showNotification(error.message || "Unable to open this published project.", "error");
    return false;
  }
}

// PART 15 - APPLICATION INITIALIZATION
window.addEventListener("load", () => {
  initializeEditorPresence();
  const sessionFlowStarted = checkForSession();
  loadSettings();
  loadWorkspaceSettings();
  renderFileList();
  initializeEditor();
  initializeAutomaticLocalization();
  Promise.resolve()
    .then(() => (sessionFlowStarted ? false : tryOpenAdminPublishedProject()))
    .then((openedAdminProject) =>
      (openedAdminProject || sessionFlowStarted)
        ? openedAdminProject
        : tryRestoreAutosaveDraft(),
    )
    .then(() => {
      updateProjectStatusUI();
      updatePreview();
      maybeOpenDeviceTransferFromUrl();
    });
});

window.addEventListener("beforeunload", function (e) {
  if (hasUnsavedChanges) {
    e.preventDefault();
    e.returnValue = "";
    return "Are you sure you want to leave? Your changes may not be saved.";
  }
});

newFileBtn.addEventListener("click", handleCreateNewFileRequest);
if (collabFileVisibilityBtn) {
  collabFileVisibilityBtn.addEventListener("click", () => {
    if (!activeSessionId || !canUseCoHostTools() || !activeFile) return;
    showFileVisibilityEditor(activeFile.name, "quick");
  });
}
if (newProjectBtn) {
  newProjectBtn.addEventListener("click", handleNewProject);
}
if (saveProjectBtn) {
  saveProjectBtn.addEventListener("click", saveCurrentProjectFromEditor);
}
if (projectStatusSaveBtn) {
  projectStatusSaveBtn.addEventListener("click", saveCurrentProjectFromEditor);
}
if (openSavedProjectsBtn) {
  openSavedProjectsBtn.addEventListener("click", () => renderProjectLibrary("saved"));
}
if (deviceTransferBtn) {
  deviceTransferBtn.addEventListener("click", handleDeviceTransfer);
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
const fontCatalogStatus = document.getElementById("fontCatalogStatus");

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

const FONT_CATALOG_PAGE_SIZE = 160;
let fontsourceFonts = [];
let fontsourceCatalogState = "idle";
let fontsourceCatalogError = "";
let fontCatalogRenderLimit = FONT_CATALOG_PAGE_SIZE;

function getFontsourceVariant(font) {
  const subsets = Array.isArray(font?.subsets) ? font.subsets : [];
  const weights = Array.isArray(font?.weights) ? font.weights : [];
  const styles = Array.isArray(font?.styles) ? font.styles : [];
  const subset = subsets.includes(font?.defaultSubset)
    ? font.defaultSubset
    : (subsets.includes("latin") ? "latin" : (subsets[0] || "latin"));
  const weight = weights.includes(400) ? 400 : (weights[0] || 400);
  const style = styles.includes("normal") ? "normal" : (styles[0] || "normal");
  return { subset, weight, style };
}

function getFontsourceFileUrl(font) {
  const { subset, weight, style } = getFontsourceVariant(font);
  return `https://cdn.jsdelivr.net/fontsource/fonts/${encodeURIComponent(font.id)}@latest/${encodeURIComponent(subset)}-${weight}-${encodeURIComponent(style)}.woff2`;
}

function getFontsourceFamily(font) {
  const category = ["serif", "sans-serif", "monospace", "cursive", "fantasy"].includes(font?.category)
    ? font.category
    : "sans-serif";
  return `${quoteFontFamilyName(font.family)}, ${category}`;
}

function buildFontsourceCss(font) {
  const { weight, style } = getFontsourceVariant(font);
  const family = quoteFontFamilyName(font.family);
  return `@font-face {\n  font-family: ${family};\n  font-style: ${style};\n  font-display: swap;\n  font-weight: ${weight};\n  src: url('${getFontsourceFileUrl(font)}') format('woff2');\n}\n\nfont-family: ${getFontsourceFamily(font)};`;
}

function ensureFontsourcePreview(font, preview) {
  if (!font?.id || !preview) return;
  const styleId = `fontsourcePreview_${font.id.replace(/[^a-z0-9_-]/gi, "_")}`;
  if (!document.getElementById(styleId)) {
    const { weight, style } = getFontsourceVariant(font);
    const face = document.createElement("style");
    face.id = styleId;
    face.textContent = `@font-face { font-family: ${quoteFontFamilyName(font.family)}; font-style: ${style}; font-display: swap; font-weight: ${weight}; src: url('${getFontsourceFileUrl(font)}') format('woff2'); }`;
    document.head.appendChild(face);
  }
  preview.style.fontFamily = getFontsourceFamily(font);
}

const fontPreviewObserver = typeof IntersectionObserver === "function"
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const font = fontsourceFonts.find((item) => item.id === entry.target.dataset.fontId);
        ensureFontsourcePreview(font, entry.target);
        fontPreviewObserver.unobserve(entry.target);
      });
    }, { rootMargin: "180px 0px" })
  : null;

function setFontCatalogStatus(message, state = "") {
  if (!fontCatalogStatus) return;
  fontCatalogStatus.textContent = message;
  if (state) fontCatalogStatus.dataset.state = state;
  else delete fontCatalogStatus.dataset.state;
}

async function loadFontsourceFonts() {
  if (fontsourceCatalogState === "loading" || fontsourceCatalogState === "ready") return;
  fontsourceCatalogState = "loading";
  setFontCatalogStatus("Loading every free Fontsource family...");
  try {
    const response = await fetch("/api/fonts/fontsource", { headers: { Accept: "application/json" } });
    const data = await response.json();
    if (!response.ok || !data?.ok || !Array.isArray(data.fonts)) {
      throw new Error(data?.error || "The font catalog could not be loaded.");
    }
    fontsourceFonts = data.fonts;
    fontsourceCatalogState = "ready";
    fontsourceCatalogError = "";
    renderFonts(fontSearchInput?.value || "", true);
  } catch (error) {
    fontsourceCatalogState = "error";
    fontsourceCatalogError = error?.message || "The free catalog is unavailable.";
    renderFonts(fontSearchInput?.value || "", true);
  }
}

function renderFonts(query = "", resetLimit = false) {
  if (!fontGrid) return;
  if (resetLimit) fontCatalogRenderLimit = FONT_CATALOG_PAGE_SIZE;
  const customFontName = normalizeFontName(query);
  const term = customFontName.toLowerCase();
  const filteredSystemFonts = fonts.filter((font) => {
    const haystack = `${font.name} ${font.family} ${font.keywords || ""}`.toLowerCase();
    return !term || haystack.includes(term);
  });
  const filteredCatalogFonts = fontsourceFonts.filter((font) => {
    const haystack = `${font.family} ${font.category} ${font.type}`.toLowerCase();
    return !term || haystack.includes(term);
  });
  const visibleCatalogFonts = filteredCatalogFonts.slice(0, fontCatalogRenderLimit);
  const exactFontMatch = [...filteredSystemFonts.map((font) => font.name), ...filteredCatalogFonts.map((font) => font.family)].some(
    (name) => name.toLowerCase() === term,
  );

  if (fontPreviewObserver) fontPreviewObserver.disconnect();
  fontGrid.innerHTML = "";

  if (customFontName && !exactFontMatch && filteredSystemFonts.length === 0 && filteredCatalogFonts.length === 0) {
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

  filteredSystemFonts.forEach((font) => {
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

  visibleCatalogFonts.forEach((font) => {
    const card = document.createElement("div");
    card.className = "font-card";
    card.innerHTML = `
      <div class="font-name">${escapeHtml(font.family)}<span class="font-card-source">Fontsource</span></div>
      <div class="font-preview" data-font-id="${escapeHtml(font.id)}">The quick brown fox</div>
      <div class="font-code">${escapeHtml(font.category)} &middot; ${escapeHtml(getFontsourceVariant(font).weight)}</div>
    `;
    const preview = card.querySelector(".font-preview");
    if (fontPreviewObserver) fontPreviewObserver.observe(preview);
    else ensureFontsourcePreview(font, preview);
    card.addEventListener("click", () => copyFontCode(buildFontsourceCss(font), font.family));
    fontGrid.appendChild(card);
  });

  if (visibleCatalogFonts.length < filteredCatalogFonts.length) {
    const loadMore = document.createElement("button");
    loadMore.type = "button";
    loadMore.className = "font-load-more";
    loadMore.textContent = `Load ${Math.min(FONT_CATALOG_PAGE_SIZE, filteredCatalogFonts.length - visibleCatalogFonts.length)} more fonts`;
    loadMore.addEventListener("click", () => {
      fontCatalogRenderLimit += FONT_CATALOG_PAGE_SIZE;
      renderFonts(query);
    });
    fontGrid.appendChild(loadMore);
  }

  const visibleTotal = filteredSystemFonts.length + visibleCatalogFonts.length;
  const matchingTotal = filteredSystemFonts.length + filteredCatalogFonts.length;
  if (fontsourceCatalogState === "loading" || fontsourceCatalogState === "idle") {
    setFontCatalogStatus(`${filteredSystemFonts.length} system fonts ready. Loading the free catalog...`);
  } else if (fontsourceCatalogState === "error") {
    setFontCatalogStatus(`System fonts are available. ${fontsourceCatalogError}`, "error");
  } else {
    setFontCatalogStatus(`Showing ${visibleTotal.toLocaleString()} of ${matchingTotal.toLocaleString()} matching fonts - ${fontsourceFonts.length.toLocaleString()} free catalog families`, "ready");
  }

  if (matchingTotal === 0 && !customFontName) {
    fontGrid.innerHTML =
      '<div class="font-card" style="grid-column: 1 / -1; cursor: default;"><div class="font-name">No fonts found</div><div class="font-preview" style="font-size:16px;">Try a different family name or category.</div></div>';
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
    fontPickerModal.style.display = "flex";
    renderFonts("", true);
    loadFontsourceFonts();
    if (fontSearchInput) {
      fontSearchInput.value = "";
      fontSearchInput.focus();
    }
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
    renderFonts(e.target.value || "", true);
  });
}

// PART 16.5 - FONT AWESOME ICON CATALOG
const FONT_AWESOME_CDN_TAG = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">';
let fontAwesomeCatalogEntries = [];
let fontAwesomeCatalogLoaded = false;

function flattenFontAwesomeCatalog(icons) {
  return (Array.isArray(icons) ? icons : []).flatMap((icon) =>
    (Array.isArray(icon.styles) ? icon.styles : []).map((style) => ({
      id: String(icon.id || ""),
      label: String(icon.label || icon.id || ""),
      aliases: Array.isArray(icon.aliases) ? icon.aliases.map(String) : [],
      prefix: String(style.prefix || ""),
      style: String(style.style || ""),
    })),
  );
}

function renderFontAwesomeIcons() {
  if (!fontAwesomeIconGrid) return;
  const query = String(fontAwesomeIconSearch?.value || "").trim().toLowerCase();
  const styleFilter = String(fontAwesomeStyleFilter?.value || "all");
  const visible = fontAwesomeCatalogEntries.filter((icon) => {
    if (styleFilter !== "all" && icon.prefix !== styleFilter) return false;
    if (!query) return true;
    return `${icon.id} ${icon.label} ${icon.aliases.join(" ")} ${icon.style}`.toLowerCase().includes(query);
  });

  if (fontAwesomeIconCount) {
    fontAwesomeIconCount.textContent = `${visible.length.toLocaleString()} of ${fontAwesomeCatalogEntries.length.toLocaleString()} icon styles`;
  }
  if (!visible.length) {
    fontAwesomeIconGrid.innerHTML = '<div class="icon-catalog-empty"><i class="fa-solid fa-magnifying-glass"></i><br>No matching icons found.</div>';
    return;
  }

  fontAwesomeIconGrid.innerHTML = visible.map((icon) => {
    const className = `${icon.prefix} fa-${icon.id}`;
    const htmlCode = `<i class="${className}"></i>`;
    return `<button type="button" class="icon-catalog-card" data-icon-code="${escapeHtmlAttributeValue(htmlCode)}" title="Copy ${escapeHtmlAttributeValue(htmlCode)}">
      <i class="${escapeHtmlAttributeValue(className)}" aria-hidden="true"></i>
      <strong>${escapeHtml(icon.label)}</strong>
      <code>${escapeHtml(className)}</code>
    </button>`;
  }).join("");
}

async function loadFontAwesomeIconCatalog() {
  if (fontAwesomeCatalogLoaded) {
    renderFontAwesomeIcons();
    return;
  }
  if (fontAwesomeIconStatus) {
    fontAwesomeIconStatus.hidden = false;
    fontAwesomeIconStatus.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Loading every free Font Awesome icon…';
  }
  try {
    const response = await fetch("/api/icons/fontawesome", {
      credentials: "same-origin",
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    if (!response.ok || !data?.ok || !Array.isArray(data.icons)) {
      throw new Error(data?.error || "The icon library could not be loaded.");
    }
    fontAwesomeCatalogEntries = flattenFontAwesomeCatalog(data.icons);
    fontAwesomeCatalogLoaded = true;
    if (fontAwesomeCdnCode) fontAwesomeCdnCode.textContent = data.cdnTag || FONT_AWESOME_CDN_TAG;
    if (fontAwesomeIconStatus) fontAwesomeIconStatus.hidden = true;
    renderFontAwesomeIcons();
  } catch (error) {
    if (fontAwesomeIconStatus) {
      fontAwesomeIconStatus.hidden = false;
      fontAwesomeIconStatus.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i><span>${escapeHtml(String(error?.message || error))}</span><button type="button" id="retryFontAwesomeIconsBtn" class="run-button">RETRY</button>`;
      document.getElementById("retryFontAwesomeIconsBtn")?.addEventListener("click", loadFontAwesomeIconCatalog, { once: true });
    }
  }
}

function openFontAwesomeIconCatalog() {
  if (!fontAwesomeIconModal) return;
  fontAwesomeIconModal.hidden = false;
  if (fontAwesomeCdnCode) fontAwesomeCdnCode.textContent = FONT_AWESOME_CDN_TAG;
  if (fontAwesomeIconSearch) fontAwesomeIconSearch.value = "";
  if (fontAwesomeStyleFilter) fontAwesomeStyleFilter.value = "all";
  loadFontAwesomeIconCatalog();
  setTimeout(() => fontAwesomeIconSearch?.focus(), 0);
}

function closeFontAwesomeIconCatalog() {
  if (fontAwesomeIconModal) fontAwesomeIconModal.hidden = true;
}

getIconsBtn?.addEventListener("click", openFontAwesomeIconCatalog);
closeFontAwesomeIconBtn?.addEventListener("click", closeFontAwesomeIconCatalog);
fontAwesomeIconModal?.addEventListener("click", (event) => {
  if (event.target === fontAwesomeIconModal) closeFontAwesomeIconCatalog();
});
fontAwesomeIconSearch?.addEventListener("input", renderFontAwesomeIcons);
fontAwesomeStyleFilter?.addEventListener("change", renderFontAwesomeIcons);
fontAwesomeIconGrid?.addEventListener("click", (event) => {
  const card = event.target.closest("[data-icon-code]");
  if (!card) return;
  copyTextValue(card.dataset.iconCode, `Copied ${card.dataset.iconCode}`);
});
copyFontAwesomeCdnBtn?.addEventListener("click", () => {
  copyTextValue(fontAwesomeCdnCode?.textContent || FONT_AWESOME_CDN_TAG, "Font Awesome CDN link copied");
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && fontAwesomeIconModal && !fontAwesomeIconModal.hidden) {
    event.preventDefault();
    closeFontAwesomeIconCatalog();
  }
});

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
  ...(isCompactWorkspaceLayout() ? [] : [{
    target: 'label[title="Show/hide console output"]',
    icon: "fa-solid fa-terminal",
    title: "Console Toggle",
    description:
      "Show or hide console logs, errors, and warnings from the desktop header.",
    position: "bottom",
  }]),
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
      "Open the More menu for project tools like New, Save Project, Open Saved, Templates, Publish / Share, Node.js, Fonts, and Icons.",
    position: "bottom-left",
  },
  {
    target: "#newFileBtn",
    icon: "fa-solid fa-plus",
    title: "New File",
    description: "Create new HTML, CSS, JS, TXT, or .env files for your project.",
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
let tutorialOpenedMoreMenu = false;
let tutorialDemoCompleteTimer = null;
let tutorialDemoReplayTimer = null;

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
      <div id="tutorialLiveDemo" class="tutorial-live-demo" role="group" aria-labelledby="tutorialDemoTitle">
        <div class="tutorial-demo-label">
          <span class="tutorial-live-dot"></span>
          <strong id="tutorialDemoTitle">LIVE PREVIEW</strong>
          <button id="tutorialReplayDemoBtn" class="tutorial-demo-replay" type="button" aria-label="Replay this demonstration" title="Replay animation">
            <i class="fa-solid fa-rotate-right" aria-hidden="true"></i>
          </button>
        </div>
        <div id="tutorialDemoStage" class="tutorial-demo-stage" aria-hidden="true"></div>
        <div class="tutorial-demo-result" aria-hidden="true"><i class="fa-solid fa-circle-check"></i><span>Demonstration complete</span></div>
        <div class="tutorial-demo-timeline"><i></i></div>
      </div>
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
    <div id="tutorialToolPointer" class="tutorial-tool-pointer" aria-hidden="true">
      <i id="tutorialToolPointerIcon" class="fa-solid fa-arrow-pointer"></i>
      <span class="tutorial-pointer-ring"></span>
      <b class="tutorial-pointer-click"></b>
      <small id="tutorialToolPointerAction">Click</small>
    </div>
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
const tutorialLiveDemo = document.getElementById("tutorialLiveDemo");
const tutorialDemoTitle = document.getElementById("tutorialDemoTitle");
const tutorialDemoStage = document.getElementById("tutorialDemoStage");
const tutorialReplayDemoBtn = document.getElementById("tutorialReplayDemoBtn");
const tutorialToolPointer = document.getElementById("tutorialToolPointer");
const tutorialToolPointerIcon = document.getElementById("tutorialToolPointerIcon");
const tutorialToolPointerAction = document.getElementById("tutorialToolPointerAction");
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

function getTutorialDemo(step) {
  const target = String(step?.target || "");
  if (target.includes("Toggle auto-run")) {
    return {
      type: "toggle",
      label: "AUTO-RUN FLOW",
      markup: '<div class="tutorial-demo-toggle"><span>AUTO-RUN</span><i></i><b>ON</b></div>',
    };
  }
  if (target.includes("Show/hide console")) {
    return {
      type: "terminal",
      label: "CONSOLE OUTPUT",
      markup: '<div class="tutorial-demo-terminal"><b>$</b><span>npm run dev</span><b>›</b><em>Ready on :3000</em><i></i></div>',
    };
  }
  if (target === "#collabBtn") {
    return {
      type: "collab",
      label: "LIVE COLLABORATION",
      markup: '<div class="tutorial-demo-collab"><div class="demo-connection-line"></div><span class="demo-avatar one">U1</span><span class="demo-avatar two">U2</span><i class="demo-cursor one"></i><i class="demo-cursor two"></i><b>2 online</b></div>',
    };
  }
  if (target === "#previewFullscreenBtn") {
    return {
      type: "fullscreen",
      label: "FULLSCREEN PREVIEW",
      markup: '<div class="tutorial-demo-frame"><span class="demo-frame-bar"><i></i><i></i><i></i></span><main><b></b><em></em><em></em></main><i class="fa-solid fa-expand"></i></div>',
    };
  }
  if (target === "#settingsBtn") {
    return {
      type: "settings",
      label: "EDITOR SETTINGS",
      markup: '<div class="tutorial-demo-settings"><i class="fa-solid fa-gear"></i><label>FONT SIZE</label><span><b></b></span><label>EDITOR COLOR</label><span><b></b></span></div>',
    };
  }
  if (target === "#addMediaBtn") {
    return {
      type: "media",
      label: "MEDIA UPLOAD",
      markup: '<div class="tutorial-demo-media"><i class="fa-regular fa-image"></i><em class="fa-solid fa-arrow-down"></em><span><b></b><i></i><i></i></span><small>hero-image.png</small></div>',
    };
  }
  if (target === "#helpPageBtn") {
    return {
      type: "help",
      label: "HELP GUIDE",
      markup: '<div class="tutorial-demo-help"><i class="fa-solid fa-circle-question"></i><strong>Quick guide</strong><span></span><span></span><span></span></div>',
    };
  }
  if (target === "#headerMoreBtn") {
    return {
      type: "menu",
      label: "MORE TOOLS",
      markup: '<div class="tutorial-demo-menu"><span><i class="fa-solid fa-layer-group"></i> Templates</span><span><i class="fa-solid fa-cloud-arrow-up"></i> Publish</span><span><i class="fa-solid fa-icons"></i> Get Icons</span></div>',
    };
  }
  if (target === "#newFileBtn") {
    return {
      type: "file",
      label: "CREATE A FILE",
      markup: '<div class="tutorial-demo-file"><i class="fa-brands fa-html5"></i><span>landing-page.html</span><b><i class="fa-solid fa-check"></i></b></div>',
    };
  }
  if (target === "#fileList") {
    return {
      type: "explorer",
      label: "FILE EXPLORER",
      markup: '<div class="tutorial-demo-explorer"><span><i class="fa-brands fa-html5"></i> index.html</span><span><i class="fa-brands fa-css3-alt"></i> style.css</span><span><i class="fa-brands fa-js"></i> script.js</span></div>',
    };
  }
  if (target === "#activeEditor") {
    return {
      type: "code",
      label: "SMART CODE EDITOR",
      markup: '<div class="tutorial-demo-code"><span><b>&lt;main</b> <em>class</em>=<q>"app"</q><b>&gt;</b></span><span>&nbsp;&nbsp;<b>&lt;h1&gt;</b>Hello CodX Editor<b>&lt;/h1&gt;</b></span><span><b>&lt;/main&gt;</b><i></i></span></div>',
    };
  }
  if (target === "#undoEditorBtn" || target === "#redoEditorBtn") {
    const isRedo = target === "#redoEditorBtn";
    return {
      type: isRedo ? "redo" : "undo",
      label: isRedo ? "RESTORE CHANGE" : "UNDO CHANGE",
      markup: `<div class="tutorial-demo-history${isRedo ? " redo" : ""}"><i class="fa-solid fa-rotate-${isRedo ? "right" : "left"}"></i><span class="removed">color: tomato;</span><span class="restored">color: #22c55e;</span></div>`,
    };
  }
  if (target === "#runPreviewBtn") {
    return {
      type: "run",
      label: "BUILD PREVIEW",
      markup: '<div class="tutorial-demo-run"><i class="fa-solid fa-play"></i><div><span></span><b><i class="fa-solid fa-circle-check"></i> Preview ready</b></div></div>',
    };
  }
  if (target.includes("Export project as ZIP") || target.includes("Import ZIP file")) {
    const isImport = target.includes("Import ZIP file");
    return {
      type: isImport ? "import" : "export",
      label: isImport ? "IMPORT PROJECT" : "EXPORT PROJECT",
      markup: `<div class="tutorial-demo-transfer${isImport ? " import" : ""}"><i class="fa-solid fa-file-zipper"></i><span><i class="fa-solid fa-arrow-${isImport ? "up" : "down"}"></i></span><div><b>codx-project.zip</b><small>${isImport ? "Files restored" : "Download ready"}</small></div></div>`,
    };
  }
  if (target === "#output") {
    return {
      type: "preview",
      label: "LIVE WEBSITE PREVIEW",
      markup: '<div class="tutorial-demo-preview"><header><i></i><i></i><i></i><small>localhost</small></header><main><b></b><span></span><span></span><em></em></main></div>',
    };
  }
  return {
    type: "generic",
    label: "LIVE TOOL PREVIEW",
    markup: `<div class="tutorial-demo-generic"><i class="${step?.icon || "fa-solid fa-wand-magic-sparkles"}"></i><strong>${escapeHtml(step?.title || "CodX Editor")}</strong></div>`,
  };
  updateCollabUnreadBadges();
}

function clearTutorialDemoTimers() {
  clearTimeout(tutorialDemoCompleteTimer);
  clearTimeout(tutorialDemoReplayTimer);
  tutorialDemoCompleteTimer = null;
  tutorialDemoReplayTimer = null;
}

function runTutorialDemoCycle() {
  if (!tutorialLiveDemo || !tutorialActive) return;
  clearTutorialDemoTimers();
  tutorialLiveDemo.classList.remove("is-playing", "is-complete");
  void tutorialLiveDemo.offsetWidth;
  tutorialLiveDemo.classList.add("is-playing");

  tutorialDemoCompleteTimer = setTimeout(() => {
    if (tutorialActive) tutorialLiveDemo.classList.add("is-complete");
  }, 2500);
  tutorialDemoReplayTimer = setTimeout(() => {
    if (tutorialActive) runTutorialDemoCycle();
  }, 5200);
}

function playTutorialLiveDemo(step) {
  if (!tutorialLiveDemo || !tutorialDemoStage) return;
  const demo = getTutorialDemo(step);
  tutorialLiveDemo.dataset.demo = demo.type;
  if (tutorialDemoTitle) tutorialDemoTitle.textContent = demo.label;
  tutorialDemoStage.innerHTML = demo.markup;
  runTutorialDemoCycle();
}

tutorialReplayDemoBtn?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  runTutorialDemoCycle();
});

function playTutorialToolPointer(target, step) {
  if (!tutorialToolPointer || !target) return;
  const rect = target.getBoundingClientRect();
  const isEditorTarget = step?.target === "#activeEditor";
  const isPreviewTarget = step?.target === "#output";
  const isClickableTarget = Boolean(target.matches?.("button, [role='button'], input, select, a"));
  const endX = Math.max(10, Math.min(window.innerWidth - 46, rect.left + rect.width * (isEditorTarget ? 0.34 : 0.58)));
  const endY = Math.max(10, Math.min(window.innerHeight - 48, rect.top + rect.height * (isEditorTarget ? 0.38 : 0.52)));
  const startsFromRight = String(step?.position || "").includes("left");
  const startX = Math.max(10, Math.min(window.innerWidth - 46, endX + (startsFromRight ? 112 : -112)));
  const startY = Math.max(10, Math.min(window.innerHeight - 48, endY + 72));
  const midX = Math.max(10, Math.min(window.innerWidth - 46, (startX + endX) / 2 + (startsFromRight ? -18 : 18)));
  const midY = Math.max(10, Math.min(window.innerHeight - 48, Math.min(startY, endY) - 28));
  const pointerKind = isEditorTarget
    ? "text"
    : isPreviewTarget
      ? "inspect"
      : isClickableTarget
        ? "hand"
      : "pointer";

  tutorialToolPointer.dataset.kind = pointerKind;
  if (tutorialToolPointerIcon) {
    tutorialToolPointerIcon.className = pointerKind === "text"
      ? "fa-solid fa-i-cursor"
      : pointerKind === "inspect"
        ? "fa-solid fa-crosshairs"
        : pointerKind === "hand"
          ? "fa-solid fa-hand-pointer"
          : "fa-solid fa-arrow-pointer";
  }
  if (tutorialToolPointerAction) {
    tutorialToolPointerAction.textContent = pointerKind === "text"
      ? "Type here"
      : pointerKind === "inspect"
        ? "Preview"
        : pointerKind === "hand"
          ? "Click"
          : "Explore";
  }
  tutorialToolPointer.style.setProperty("--tutorial-pointer-start-x", `${startX}px`);
  tutorialToolPointer.style.setProperty("--tutorial-pointer-start-y", `${startY}px`);
  tutorialToolPointer.style.setProperty("--tutorial-pointer-mid-x", `${midX}px`);
  tutorialToolPointer.style.setProperty("--tutorial-pointer-mid-y", `${midY}px`);
  tutorialToolPointer.style.setProperty("--tutorial-pointer-end-x", `${endX}px`);
  tutorialToolPointer.style.setProperty("--tutorial-pointer-end-y", `${endY}px`);
  tutorialToolPointer.classList.remove("is-playing");
  tutorialHighlight?.classList.remove("is-pointer-playing");
  void tutorialToolPointer.offsetWidth;
  tutorialToolPointer.classList.add("is-playing");
  tutorialHighlight?.classList.add("is-pointer-playing");
}

function prepareTutorialTarget(step, targetElement) {
  if (!headerMorePanel || !headerMoreBtn) return;
  const needsMoreMenu =
    step?.target === "#headerMoreBtn" || Boolean(targetElement?.closest?.("#headerMorePanel"));

  if (needsMoreMenu && headerMorePanel.hidden) {
    setHeaderMoreMenuOpen(true);
    tutorialOpenedMoreMenu = true;
    return;
  }

  if (!needsMoreMenu && tutorialOpenedMoreMenu) {
    setHeaderMoreMenuOpen(false);
    tutorialOpenedMoreMenu = false;
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

  prepareTutorialTarget(step, targetElement);

  // Update content
  tutorialIcon.className = step.icon;
  tutorialTitle.textContent = step.title;
  tutorialDescription.textContent = step.description;
  playTutorialLiveDemo(step);
  tutorialProgress.textContent = `Step ${stepIndex + 1} of ${
    tutorialSteps.length
  }`;

  if (typeof targetElement.scrollIntoView === "function") {
    targetElement.scrollIntoView({
      block: "nearest",
      inline: "nearest",
      behavior: "auto",
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
  positionTutorialElements(targetElement, step.position, step);
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
function positionTutorialElements(target, position, step = null) {
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
  playTutorialToolPointer(target, step);
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
  clearTutorialDemoTimers();
  tutorialModal.style.display = "none";
  tutorialToolPointer?.classList.remove("is-playing");
  tutorialLiveDemo?.classList.remove("is-playing", "is-complete");
  tutorialHighlight?.classList.remove("is-pointer-playing");
  if (tutorialOpenedMoreMenu) {
    setHeaderMoreMenuOpen(false);
    tutorialOpenedMoreMenu = false;
  }
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
