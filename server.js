const express = require("express");
const http = require("http");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const QRCode = require("qrcode");
const { Server } = require("socket.io");

loadEnvFile();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
  // Keep active collaboration transports visible to short-idle proxies.
  pingInterval: 5000,
  pingTimeout: 120000,
  connectTimeout: 45000,
});

const PORT = process.env.PORT || 3000;
const ENDED_SESSION_TOMBSTONE_MS = 24 * 60 * 60 * 1000;
const sessions = new Map();
const endedSessions = new Map();
const socketMeta = new Map();
const editorPresenceSockets = new Set();
const adminActivity = [];
const adminSessions = new Map();
const publishedProjects = new Map();
const PUBLISHED_PROJECTS_FILE = path.join(__dirname, "published-projects.json");
const ADMIN_USERNAME = String(process.env.ADMIN_USERNAME || "administrator").trim();
const ADMIN_PASSWORD = String(process.env.ADMIN_PASSWORD || "admin1579");
const ADMIN_COOKIE = "codx_admin_session";
const GITHUB_OAUTH_COOKIE = "codx_github_session";
const GITHUB_OAUTH_STATE_COOKIE = "codx_github_oauth_state";
const GITHUB_CLIENT_ID = String(process.env.GITHUB_CLIENT_ID || "").trim();
const GITHUB_CLIENT_SECRET = String(process.env.GITHUB_CLIENT_SECRET || "").trim();
const GITHUB_OAUTH_CALLBACK_URL = String(process.env.GITHUB_OAUTH_CALLBACK_URL || "").trim();
const GITHUB_OAUTH_SCOPE = String(process.env.GITHUB_OAUTH_SCOPE || "repo read:user").trim();
const GITHUB_SESSIONS_FILE = path.join(__dirname, ".codx-github-sessions.enc");
const githubOAuthFlows = new Map();
const githubSessions = new Map();
const deviceTransfers = new Map();
const deviceTransferAttempts = new Map();
const DEVICE_TRANSFER_TTL_MS = 10 * 60 * 1000;
const DEVICE_TRANSFER_MAX_BYTES = 20 * 1024 * 1024;
const DEVICE_TRANSFER_MAX_TOTAL_BYTES = 100 * 1024 * 1024;
const DEVICE_TRANSFER_MAX_ENTRIES = 100;
const DEVICE_TRANSFER_CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const DEVICE_TRANSFER_QR_OPTIONS = {
  errorCorrectionLevel: "M",
  margin: 2,
  width: 320,
  color: { dark: "#073b1d", light: "#ffffff" },
};
loadGitHubSessions();
const MODERN_SESSION_ID_RE = /^[A-Z0-9]{4}(?:-[A-Z0-9]{4}){3}$/;
const PIN_SESSION_ID_RE = /^[A-Z0-9]{6}$/;
const LEGACY_SESSION_ID_RE = /^\d{10,}$/;
const SESSION_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const COLLAB_CURSOR_STYLES = new Set(["pointer", "hand", "mouse", "crosshair", "pen", "text"]);
const COUNTRY_LANGUAGE_MAP = {
  AD: "ca", AE: "ar", AF: "fa", AL: "sq", AM: "hy", AO: "pt", AR: "es", AT: "de", AU: "en", AZ: "az",
  BA: "bs", BD: "bn", BE: "nl", BF: "fr", BG: "bg", BH: "ar", BI: "fr", BJ: "fr", BO: "es", BR: "pt",
  BS: "en", BT: "dz", BW: "en", BY: "be", BZ: "en", CA: "en", CD: "fr", CF: "fr", CG: "fr", CH: "de",
  CI: "fr", CL: "es", CM: "fr", CN: "zh-CN", CO: "es", CR: "es", CU: "es", CV: "pt", CY: "el", CZ: "cs",
  DE: "de", DJ: "fr", DK: "da", DO: "es", DZ: "ar", EC: "es", EE: "et", EG: "ar", ER: "ti", ES: "es",
  ET: "am", FI: "fi", FJ: "en", FR: "fr", GA: "fr", GB: "en", GE: "ka", GH: "en", GM: "en", GN: "fr",
  GQ: "es", GR: "el", GT: "es", GW: "pt", GY: "en", HN: "es", HR: "hr", HT: "fr", HU: "hu", ID: "id",
  IE: "en", IL: "he", IN: "hi", IQ: "ar", IR: "fa", IS: "is", IT: "it", JM: "en", JO: "ar", JP: "ja",
  KE: "sw", KG: "ky", KH: "km", KR: "ko", KW: "ar", KZ: "kk", LA: "lo", LB: "ar", LK: "si", LR: "en",
  LS: "st", LT: "lt", LU: "fr", LV: "lv", LY: "ar", MA: "ar", MD: "ro", ME: "sr", MG: "mg", MK: "mk",
  ML: "fr", MM: "my", MN: "mn", MR: "ar", MT: "mt", MU: "en", MV: "dv", MW: "en", MX: "es", MY: "ms",
  MZ: "pt", NA: "en", NE: "fr", NG: "en", NI: "es", NL: "nl", NO: "no", NP: "ne", NZ: "en", OM: "ar",
  PA: "es", PE: "es", PG: "en", PH: "tl", PK: "ur", PL: "pl", PR: "es", PS: "ar", PT: "pt", PY: "es",
  QA: "ar", RO: "ro", RS: "sr", RU: "ru", RW: "rw", SA: "ar", SD: "ar", SE: "sv", SG: "en", SI: "sl",
  SK: "sk", SL: "en", SN: "fr", SO: "so", SR: "nl", SS: "en", SV: "es", SY: "ar", SZ: "en", TD: "fr",
  TG: "fr", TH: "th", TJ: "tg", TL: "pt", TN: "ar", TR: "tr", TT: "en", TW: "zh-TW", TZ: "sw", UA: "uk",
  UG: "en", US: "en", UY: "es", UZ: "uz", VA: "it", VE: "es", VN: "vi", YE: "ar", ZA: "en", ZM: "en", ZW: "en",
};
const localizationProfileCache = new Map();
const uiTranslationCache = new Map();
const FONT_AWESOME_VERSION = "6.5.2";
const FONT_AWESOME_CDN_HREF = `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${FONT_AWESOME_VERSION}/css/all.min.css`;
let fontAwesomeCatalogCache = null;
const FONTSOURCE_API_URL = "https://api.fontsource.org/v1/fonts";
let fontsourceCatalogCache = null;
const DEFAULT_PERMISSIONS = {
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

function loadEnvFile() {
  const envPath = path.join(__dirname, ".env");
  if (!fs.existsSync(envPath)) return;

  try {
    const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
    lines.forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) return;

      const separatorIndex = trimmed.indexOf("=");
      if (separatorIndex === -1) return;

      const key = trimmed.slice(0, separatorIndex).trim();
      if (!key || process.env[key] !== undefined) return;

      let value = trimmed.slice(separatorIndex + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      process.env[key] = value;
    });
  } catch (error) {
    console.warn("Failed to load .env file:", error);
  }
}

function getClientIp(req) {
  const forwarded = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim();
  return String(forwarded || req.socket?.remoteAddress || "").replace(/^::ffff:/, "").trim();
}

function isPublicClientIp(ip) {
  if (!ip || ip === "::1" || ip === "127.0.0.1" || ip === "0.0.0.0") return false;
  if (/^10\./.test(ip) || /^192\.168\./.test(ip) || /^169\.254\./.test(ip)) return false;
  const private172 = ip.match(/^172\.(\d+)\./);
  return !(private172 && Number(private172[1]) >= 16 && Number(private172[1]) <= 31);
}

function normalizeBrowserLanguage(value) {
  const match = String(value || "").trim().match(/^[a-z]{2,3}/i);
  return match ? match[0].toLowerCase() : "en";
}

function getCountryName(countryCode) {
  try {
    return new Intl.DisplayNames(["en"], { type: "region" }).of(countryCode) || countryCode;
  } catch (_error) {
    return countryCode;
  }
}

async function resolveLocalizationProfile(req, browserLanguage = "", browserCountryCode = "") {
  const clientCountry = String(browserCountryCode || "").trim().toUpperCase();
  const headerCountry = String(
    req.headers["cf-ipcountry"] ||
    req.headers["x-vercel-ip-country"] ||
    req.headers["x-country-code"] ||
    "",
  ).trim().toUpperCase();
  const clientIp = getClientIp(req);
  const cacheKey = (/^[A-Z]{2}$/.test(clientCountry) ? clientCountry : "") || headerCountry || clientIp || `browser:${browserLanguage}`;
  const cached = localizationProfileCache.get(cacheKey);
  if (cached && Date.now() - cached.cachedAt < 6 * 60 * 60 * 1000) return cached.profile;

  let countryCode = /^[A-Z]{2}$/.test(clientCountry)
    ? clientCountry
    : (/^[A-Z]{2}$/.test(headerCountry) ? headerCountry : "");
  let country = countryCode ? getCountryName(countryCode) : "";
  if (!countryCode && isPublicClientIp(clientIp)) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 4500);
      const response = await fetch(
        `https://ipwho.is/${encodeURIComponent(clientIp)}?fields=success,country,country_code`,
        { signal: controller.signal },
      );
      clearTimeout(timeout);
      const location = await response.json();
      if (response.ok && location?.success !== false) {
        countryCode = String(location.country_code || "").toUpperCase();
        country = String(location.country || "");
      }
    } catch (_error) {}
  }

  const browserFallback = normalizeBrowserLanguage(browserLanguage || req.headers["accept-language"]);
  const language = COUNTRY_LANGUAGE_MAP[countryCode] || browserFallback || "en";
  const profile = { countryCode, country, language };
  localizationProfileCache.set(cacheKey, { cachedAt: Date.now(), profile });
  return profile;
}

function decodeTranslationEntities(value) {
  return String(value || "")
    .replace(/&#(\d+);/g, (_match, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_match, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

async function translateUiText(text, targetLanguage, clientIp) {
  const source = String(text || "").trim();
  if (!source || !/[A-Za-z]/.test(source) || Buffer.byteLength(source, "utf8") > 500) return text;
  const cacheKey = `${targetLanguage}\u0000${source}`;
  if (uiTranslationCache.has(cacheKey)) return uiTranslationCache.get(cacheKey);

  const url = new URL("https://api.mymemory.translated.net/get");
  url.searchParams.set("q", source);
  url.searchParams.set("langpair", `en|${targetLanguage}`);
  url.searchParams.set("mt", "1");
  if (isPublicClientIp(clientIp)) url.searchParams.set("ip", clientIp);
  if (process.env.MYMEMORY_API_KEY) url.searchParams.set("key", process.env.MYMEMORY_API_KEY);
  if (process.env.MYMEMORY_EMAIL) url.searchParams.set("de", process.env.MYMEMORY_EMAIL);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 7000);
  try {
    const response = await fetch(url, { signal: controller.signal });
    const data = await response.json();
    const translated = decodeTranslationEntities(data?.responseData?.translatedText).trim();
    if (!response.ok || !translated || /MYMEMORY WARNING/i.test(translated)) return text;
    uiTranslationCache.set(cacheKey, translated);
    if (uiTranslationCache.size > 5000) uiTranslationCache.delete(uiTranslationCache.keys().next().value);
    return translated;
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchFontAwesomeIconPage(page) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const url = new URL(`https://api.fontawesome.com/releases/${FONT_AWESOME_VERSION}/icons`);
    url.searchParams.set("license", "free");
    url.searchParams.set("page", String(page));
    url.searchParams.set("page_size", "500");
    const response = await fetch(url, { signal: controller.signal });
    const data = await response.json();
    if (!response.ok || !Array.isArray(data?.icons)) {
      throw new Error(data?.message || `Font Awesome API returned ${response.status}.`);
    }
    return data;
  } finally {
    clearTimeout(timeout);
  }
}

async function loadFontAwesomeCatalog() {
  if (fontAwesomeCatalogCache) return fontAwesomeCatalogCache;
  const firstPage = await fetchFontAwesomeIconPage(1);
  const pageCount = Math.max(1, Number(firstPage.totalPageCount || 1));
  const remainingPages = await Promise.all(
    Array.from({ length: Math.max(0, pageCount - 1) }, (_value, index) =>
      fetchFontAwesomeIconPage(index + 2),
    ),
  );
  const rawIcons = [firstPage, ...remainingPages].flatMap((page) => page.icons || []);
  const prefixClassMap = { fas: "fa-solid", far: "fa-regular", fab: "fa-brands" };
  const icons = rawIcons
    .map((icon) => {
      const freeStyles = Array.isArray(icon?.familyStylesByLicense?.free)
        ? icon.familyStylesByLicense.free
        : [];
      const styles = freeStyles
        .map((entry) => ({
          prefix: prefixClassMap[entry.prefix] || "",
          style: String(entry.shorthand || entry.style || ""),
        }))
        .filter((entry) => entry.prefix)
        .filter((entry, index, list) => list.findIndex((item) => item.prefix === entry.prefix) === index);
      return {
        id: String(icon.id || ""),
        label: String(icon.label || icon.id || ""),
        aliases: Array.isArray(icon?.aliases?.names) ? icon.aliases.names.map(String) : [],
        styles,
      };
    })
    .filter((icon) => icon.id && icon.styles.length)
    .sort((left, right) => left.id.localeCompare(right.id));

  fontAwesomeCatalogCache = {
    version: FONT_AWESOME_VERSION,
    cdnHref: FONT_AWESOME_CDN_HREF,
    cdnTag: `<link rel="stylesheet" href="${FONT_AWESOME_CDN_HREF}">`,
    totalIcons: icons.length,
    totalVariations: icons.reduce((total, icon) => total + icon.styles.length, 0),
    icons,
  };
  return fontAwesomeCatalogCache;
}

async function loadFontsourceCatalog() {
  if (fontsourceCatalogCache) return fontsourceCatalogCache;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(FONTSOURCE_API_URL, { signal: controller.signal });
    const data = await response.json();
    if (!response.ok || !Array.isArray(data)) {
      throw new Error(data?.message || `Fontsource API returned ${response.status}.`);
    }

    const fonts = data
      .map((font) => ({
        id: String(font?.id || "").trim(),
        family: String(font?.family || "").trim(),
        category: String(font?.category || "sans-serif").trim(),
        defaultSubset: String(font?.defSubset || "latin").trim(),
        subsets: Array.isArray(font?.subsets) ? font.subsets.map(String) : [],
        weights: Array.isArray(font?.weights) ? font.weights.map(Number).filter(Number.isFinite) : [],
        styles: Array.isArray(font?.styles) ? font.styles.map(String) : [],
        variable: Boolean(font?.variable),
        type: String(font?.type || "google").trim(),
      }))
      .filter((font) => font.id && font.family)
      .sort((left, right) => left.family.localeCompare(right.family));

    fontsourceCatalogCache = {
      source: "Fontsource",
      totalFonts: fonts.length,
      fonts,
    };
    return fontsourceCatalogCache;
  } finally {
    clearTimeout(timeout);
  }
}

function normalizeDeviceTransferCode(value) {
  const compact = String(value || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
  return compact.length === 12 ? compact : "";
}

function formatDeviceTransferCode(value) {
  const compact = normalizeDeviceTransferCode(value);
  return compact ? compact.match(/.{1,4}/g).join("-") : "";
}

function createDeviceTransferCode() {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    const bytes = crypto.randomBytes(12);
    let compact = "";
    for (let index = 0; index < 12; index += 1) {
      compact += DEVICE_TRANSFER_CODE_CHARS[bytes[index] % DEVICE_TRANSFER_CODE_CHARS.length];
    }
    if (!deviceTransfers.has(compact)) return compact;
  }
  throw new Error("Unable to create a unique transfer code.");
}

function sanitizeDeviceTransferSnapshot(value) {
  const files = Array.isArray(value?.files) ? value.files.slice(0, 500) : [];
  if (!files.length) return null;
  return {
    version: 1,
    files: files.map((file, index) => ({
      name: String(file?.name || `file-${index + 1}.txt`).slice(0, 260),
      type: String(file?.type || "txt").slice(0, 24),
      mediaType: String(file?.mediaType || "").slice(0, 24),
      mediaSize: Math.max(0, Number(file?.mediaSize || 0) || 0),
      mediaMimeType: String(file?.mediaMimeType || "").slice(0, 120),
      content: String(file?.content || ""),
      active: Boolean(file?.active),
    })),
    activeFileName: String(value?.activeFileName || "").slice(0, 260),
    previewTarget: value?.previewTarget?.mode === "html"
      ? { mode: "html", fileName: String(value.previewTarget.fileName || "").slice(0, 260) }
      : null,
    savedAt: Number(value?.savedAt || Date.now()) || Date.now(),
  };
}

function sanitizeDeviceTransferPayload(value) {
  const currentProject = sanitizeDeviceTransferSnapshot(value?.currentProject);
  if (!currentProject) return null;
  const savedProjects = (Array.isArray(value?.savedProjects) ? value.savedProjects : [])
    .slice(0, 24)
    .map((project, index) => {
      const snapshot = sanitizeDeviceTransferSnapshot(project?.snapshot);
      if (!snapshot) return null;
      return {
        id: String(project?.id || `transferred-${Date.now()}-${index}`).slice(0, 160),
        name: String(project?.name || `Transferred project ${index + 1}`).trim().slice(0, 120),
        updatedAt: Number(project?.updatedAt || Date.now()) || Date.now(),
        snapshot,
      };
    })
    .filter(Boolean);
  const allowedSettings = [
    "bgColor", "textSize", "fontFamily", "fontEmbed", "fontWeight", "fontItalic",
    "fontLetterSpacing", "fontLineHeight", "themeColor", "zenShowFiles", "fullscreenPreviewPanel",
  ];
  const editorSettings = {};
  if (value?.editorSettings && typeof value.editorSettings === "object" && !Array.isArray(value.editorSettings)) {
    allowedSettings.forEach((key) => {
      const setting = value.editorSettings[key];
      if (["string", "number", "boolean"].includes(typeof setting)) {
        editorSettings[key] = typeof setting === "string" ? setting.slice(0, 2048) : setting;
      }
    });
  }
  const hasWorkspaceSettings = Boolean(
    value?.workspaceSettings &&
    typeof value.workspaceSettings === "object" &&
    !Array.isArray(value.workspaceSettings),
  );
  const sourceWorkspaceSettings = hasWorkspaceSettings ? value.workspaceSettings : {};
  const previewDevice = sourceWorkspaceSettings.previewDevice && typeof sourceWorkspaceSettings.previewDevice === "object"
    ? {
        mode: ["responsive", "phone", "tablet", "laptop", "desktop", "custom"].includes(
          String(sourceWorkspaceSettings.previewDevice.mode || "").toLowerCase(),
        )
          ? String(sourceWorkspaceSettings.previewDevice.mode).toLowerCase()
          : "responsive",
        width: Math.max(0, Math.min(3840, Number(sourceWorkspaceSettings.previewDevice.width || 0) || 0)),
        height: Math.max(0, Math.min(2160, Number(sourceWorkspaceSettings.previewDevice.height || 0) || 0)),
      }
    : { mode: "responsive", width: 0, height: 0 };
  const workspaceSettings = hasWorkspaceSettings ? {
    autoRun: Boolean(sourceWorkspaceSettings.autoRun),
    consoleVisible: Boolean(sourceWorkspaceSettings.consoleVisible),
    previewZoom: Math.max(50, Math.min(200, Number(sourceWorkspaceSettings.previewZoom || 100) || 100)),
    previewDevice,
    previewGrid: Boolean(sourceWorkspaceSettings.previewGrid),
    previewBreakpoints: Boolean(sourceWorkspaceSettings.previewBreakpoints),
    previewColorScheme: ["system", "light", "dark"].includes(
      String(sourceWorkspaceSettings.previewColorScheme || "").toLowerCase(),
    )
      ? String(sourceWorkspaceSettings.previewColorScheme).toLowerCase()
      : "system",
  } : {};
  return {
    version: 1,
    createdAt: Number(value?.createdAt || Date.now()) || Date.now(),
    currentProject,
    savedProjects,
    editorSettings,
    workspaceSettings,
    activeSavedProjectName: String(value?.activeSavedProjectName || "").trim().slice(0, 120),
  };
}

function getDeviceTransferSummary(payload) {
  const currentFiles = Array.isArray(payload?.currentProject?.files) ? payload.currentProject.files.length : 0;
  const savedProjects = Array.isArray(payload?.savedProjects) ? payload.savedProjects.length : 0;
  const settingsCount =
    (payload?.editorSettings && typeof payload.editorSettings === "object" ? Object.keys(payload.editorSettings).length : 0) +
    (payload?.workspaceSettings && typeof payload.workspaceSettings === "object" ? Object.keys(payload.workspaceSettings).length : 0);
  const mediaFiles = [payload?.currentProject, ...(payload?.savedProjects || []).map((project) => project.snapshot)]
    .reduce((total, snapshot) => total + (snapshot?.files || []).filter((file) => file.mediaType).length, 0);
  return { currentFiles, savedProjects, settings: settingsCount > 0, mediaFiles };
}

function canAttemptDeviceTransfer(req) {
  const key = getClientIp(req) || "unknown";
  const now = Date.now();
  const recent = (deviceTransferAttempts.get(key) || []).filter((timestamp) => now - timestamp < 60 * 1000);
  if (recent.length >= 30) {
    deviceTransferAttempts.set(key, recent);
    return false;
  }
  recent.push(now);
  deviceTransferAttempts.set(key, recent);
  return true;
}

function findActiveDeviceTransfer(code) {
  const compact = normalizeDeviceTransferCode(code);
  if (!compact) return null;
  const transfer = deviceTransfers.get(compact);
  if (!transfer) return null;
  if (transfer.expiresAt <= Date.now()) {
    deviceTransfers.delete(compact);
    return null;
  }
  return { compact, transfer };
}

app.use(express.json({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "credentialless");
  next();
});
const PRIVATE_STATIC_PATHS = new Set([
  "/package.json",
  "/package-lock.json",
  "/published-projects.json",
  "/README.md",
  "/server.js",
]);
app.use((req, res, next) => {
  let requestPath = "";
  try {
    requestPath = decodeURIComponent(String(req.path || ""));
  } catch {
    return res.status(400).type("text/plain").send("Invalid request path.");
  }
  if (
    PRIVATE_STATIC_PATHS.has(requestPath) ||
    requestPath === "/node_modules" ||
    requestPath.startsWith("/node_modules/")
  ) {
    return res.status(404).type("text/plain").send("Not found.");
  }
  next();
});
app.use(
  "/vendor/webcontainer",
  express.static(path.join(__dirname, "node_modules", "@webcontainer", "api", "dist")),
);
app.get("/vendor/jsqr.js", (_req, res) => {
  res.setHeader("Cache-Control", "public, max-age=86400");
  res.type("application/javascript").sendFile(path.join(__dirname, "node_modules", "jsqr", "dist", "jsQR.js"));
});
app.get("/404.html", (_req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});
app.get("/404-for-preview.html", (_req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404-for-preview.html"));
});
app.use(express.static(path.join(__dirname), { dotfiles: "ignore" }));
loadPublishedProjects();

app.post("/api/device-transfer/create", async (req, res) => {
  try {
    res.setHeader("Cache-Control", "no-store");
    const payload = sanitizeDeviceTransferPayload(req.body?.payload);
    if (!payload) {
      res.status(400).json({ ok: false, error: "The transfer does not contain a valid current project." });
      return;
    }
    const byteSize = Buffer.byteLength(JSON.stringify(payload), "utf8");
    if (byteSize > DEVICE_TRANSFER_MAX_BYTES) {
      res.status(413).json({
        ok: false,
        error: "This transfer is too large. Remove large media files or use ZIP export instead.",
      });
      return;
    }
    const getStoredTransferBytes = () => [...deviceTransfers.values()]
      .reduce((total, transfer) => total + Number(transfer?.byteSize || 0), 0);
    while (
      deviceTransfers.size >= DEVICE_TRANSFER_MAX_ENTRIES ||
      getStoredTransferBytes() + byteSize > DEVICE_TRANSFER_MAX_TOTAL_BYTES
    ) {
      const oldestCode = deviceTransfers.keys().next().value;
      if (!oldestCode) break;
      deviceTransfers.delete(oldestCode);
    }
    const compact = createDeviceTransferCode();
    const expiresAt = Date.now() + DEVICE_TRANSFER_TTL_MS;
    const summary = getDeviceTransferSummary(payload);
    const forwardedProto = String(req.headers["x-forwarded-proto"] || "").split(",")[0].trim();
    const forwardedHost = String(req.headers["x-forwarded-host"] || "").split(",")[0].trim();
    const protocol = forwardedProto || req.protocol || "http";
    const host = forwardedHost || req.get("host") || "localhost:3000";
    const transferUrl = new URL("/frontend.html", `${protocol}://${host}`);
    transferUrl.searchParams.set("deviceTransfer", formatDeviceTransferCode(compact));
    const qrPng = await QRCode.toBuffer(transferUrl.toString(), DEVICE_TRANSFER_QR_OPTIONS);
    const qrDataUrl = `data:image/png;base64,${qrPng.toString("base64")}`;
    const qrImageUrl = new URL(
      `/api/device-transfer/qr/${encodeURIComponent(formatDeviceTransferCode(compact))}`,
      `${protocol}://${host}`,
    ).toString();
    deviceTransfers.set(compact, { payload, expiresAt, summary, byteSize, qrPng });
    res.status(201).json({
      ok: true,
      code: formatDeviceTransferCode(compact),
      expiresAt,
      summary,
      transferUrl: transferUrl.toString(),
      qrImageUrl,
      qrDataUrl,
    });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message || "Unable to prepare the device transfer." });
  }
});

app.get("/api/device-transfer/qr/:code", (req, res) => {
  const match = findActiveDeviceTransfer(req.params?.code);
  if (!match || !Buffer.isBuffer(match.transfer.qrPng)) {
    res.status(404).type("text/plain").send("Transfer QR code not found or expired.");
    return;
  }
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.type("png").send(match.transfer.qrPng);
});

app.post("/api/device-transfer/preview", (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  if (!canAttemptDeviceTransfer(req)) {
    res.status(429).json({ ok: false, error: "Too many transfer attempts. Wait one minute and try again." });
    return;
  }
  const match = findActiveDeviceTransfer(req.body?.code);
  if (!match) {
    res.status(404).json({ ok: false, error: "That transfer code is invalid, expired, or already used." });
    return;
  }
  res.json({
    ok: true,
    code: formatDeviceTransferCode(match.compact),
    expiresAt: match.transfer.expiresAt,
    summary: match.transfer.summary,
  });
});

app.post("/api/device-transfer/claim", (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  if (!canAttemptDeviceTransfer(req)) {
    res.status(429).json({ ok: false, error: "Too many transfer attempts. Wait one minute and try again." });
    return;
  }
  const match = findActiveDeviceTransfer(req.body?.code);
  if (!match) {
    res.status(404).json({ ok: false, error: "That transfer code is invalid, expired, or already used." });
    return;
  }
  deviceTransfers.delete(match.compact);
  res.json({ ok: true, payload: match.transfer.payload, summary: match.transfer.summary });
});

app.get("/api/localization/profile", async (req, res) => {
  try {
    const profile = await resolveLocalizationProfile(
      req,
      req.query?.browserLanguage,
      req.query?.countryCode,
    );
    res.json({ ok: true, ...profile, enabled: profile.language !== "en" });
  } catch (_error) {
    res.json({ ok: true, countryCode: "", country: "", language: "en", enabled: false });
  }
});

app.post("/api/localization/translate", async (req, res) => {
  try {
    const profile = await resolveLocalizationProfile(
      req,
      req.body?.browserLanguage,
      req.body?.countryCode,
    );
    const texts = Array.isArray(req.body?.texts) ? req.body.texts.slice(0, 40) : [];
    if (profile.language === "en" || !texts.length) {
      res.json({ ok: true, language: profile.language, translations: texts.map((text) => String(text || "")) });
      return;
    }
    const translations = [];
    for (let index = 0; index < texts.length; index += 5) {
      const group = texts.slice(index, index + 5);
      translations.push(
        ...(await Promise.all(
          group.map((text) => translateUiText(String(text || ""), profile.language, getClientIp(req))),
        )),
      );
    }
    res.json({ ok: true, language: profile.language, translations });
  } catch (error) {
    res.status(502).json({ ok: false, error: error.message || "Translation service unavailable." });
  }
});

app.get("/api/icons/fontawesome", async (_req, res) => {
  try {
    const catalog = await loadFontAwesomeCatalog();
    res.json({ ok: true, ...catalog });
  } catch (error) {
    res.status(502).json({ ok: false, error: error.message || "Font Awesome icons are unavailable." });
  }
});

app.get("/api/fonts/fontsource", async (_req, res) => {
  try {
    const catalog = await loadFontsourceCatalog();
    res.setHeader("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
    res.json({ ok: true, ...catalog });
  } catch (error) {
    res.status(502).json({ ok: false, error: error.message || "The free font catalog is unavailable." });
  }
});

app.get("/api/github/status", (req, res) => {
  const session = getGitHubSession(req);
  res.json({
    ok: true,
    configured: Boolean(GITHUB_CLIENT_ID && GITHUB_CLIENT_SECRET),
    connected: Boolean(session),
    scope: session?.scope || "",
    user: session
      ? {
          login: session.user.login,
          name: session.user.name,
          avatarUrl: session.user.avatarUrl,
          profileUrl: session.user.profileUrl,
        }
      : null,
  });
});

app.get("/auth/github", (req, res) => {
  const returnTo = normalizeGitHubReturnTo(req.query.returnTo);
  if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
    res.redirect(buildGitHubResultRedirect(returnTo, "not_configured"));
    return;
  }

  pruneGitHubAuthState();
  const state = crypto.randomBytes(32).toString("base64url");
  const codeVerifier = crypto.randomBytes(48).toString("base64url");
  const codeChallenge = crypto.createHash("sha256").update(codeVerifier).digest("base64url");
  const redirectUri = getGitHubCallbackUrl(req);
  githubOAuthFlows.set(state, {
    codeVerifier,
    redirectUri,
    returnTo,
    createdAt: Date.now(),
  });

  res.setHeader(
    "Set-Cookie",
    buildOAuthCookie(GITHUB_OAUTH_STATE_COOKIE, state, req, 600),
  );
  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", GITHUB_CLIENT_ID);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("state", state);
  authorizeUrl.searchParams.set("code_challenge", codeChallenge);
  authorizeUrl.searchParams.set("code_challenge_method", "S256");
  authorizeUrl.searchParams.set("prompt", "select_account");
  if (GITHUB_OAUTH_SCOPE) authorizeUrl.searchParams.set("scope", GITHUB_OAUTH_SCOPE);
  res.redirect(authorizeUrl.toString());
});

app.get("/auth/github/callback", async (req, res) => {
  const state = String(req.query.state || "");
  const stateCookie = String(parseCookies(req)[GITHUB_OAUTH_STATE_COOKIE] || "");
  const flow = githubOAuthFlows.get(state);
  const fallbackReturnTo = normalizeGitHubReturnTo(req.query.returnTo);
  const returnTo = flow?.returnTo || fallbackReturnTo;
  const clearStateCookie = buildOAuthCookie(GITHUB_OAUTH_STATE_COOKIE, "", req, 0);

  if (!flow || !safeStringEqual(state, stateCookie) || Date.now() - flow.createdAt > 10 * 60 * 1000) {
    if (state) githubOAuthFlows.delete(state);
    res.setHeader("Set-Cookie", clearStateCookie);
    res.redirect(buildGitHubResultRedirect(returnTo, "invalid_state"));
    return;
  }
  githubOAuthFlows.delete(state);

  if (req.query.error) {
    res.setHeader("Set-Cookie", clearStateCookie);
    res.redirect(buildGitHubResultRedirect(returnTo, String(req.query.error)));
    return;
  }

  const code = String(req.query.code || "");
  if (!code) {
    res.setHeader("Set-Cookie", clearStateCookie);
    res.redirect(buildGitHubResultRedirect(returnTo, "missing_code"));
    return;
  }

  try {
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "CodX-Editor",
      },
      body: new URLSearchParams({
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code,
        redirect_uri: flow.redirectUri,
        code_verifier: flow.codeVerifier,
      }),
    });
    const tokenData = await tokenResponse.json();
    if (!tokenResponse.ok || !tokenData.access_token) {
      throw new Error(tokenData.error_description || tokenData.error || "GitHub token exchange failed");
    }

    const userResponse = await fetch("https://api.github.com/user", {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${tokenData.access_token}`,
        "User-Agent": "CodX-Editor",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    const userData = await userResponse.json();
    if (!userResponse.ok || !userData.login) {
      throw new Error(userData.message || "Unable to load the GitHub account");
    }

    const sessionId = crypto.randomBytes(32).toString("base64url");
    githubSessions.set(sessionId, {
      accessToken: tokenData.access_token,
      scope: String(tokenData.scope || ""),
      createdAt: Date.now(),
      user: {
        id: userData.id,
        login: String(userData.login),
        name: String(userData.name || ""),
        avatarUrl: String(userData.avatar_url || ""),
        profileUrl: String(userData.html_url || ""),
      },
    });
    saveGitHubSessions();
    res.setHeader("Set-Cookie", [
      clearStateCookie,
      buildOAuthCookie(GITHUB_OAUTH_COOKIE, sessionId, req, 7 * 24 * 60 * 60),
    ]);
    res.redirect(buildGitHubResultRedirect(returnTo, "connected"));
  } catch (error) {
    console.error("GitHub OAuth callback failed:", error.message);
    res.setHeader("Set-Cookie", clearStateCookie);
    res.redirect(buildGitHubResultRedirect(returnTo, "failed"));
  }
});

app.post("/api/github/logout", (req, res) => {
  const sessionId = String(parseCookies(req)[GITHUB_OAUTH_COOKIE] || "");
  if (sessionId && githubSessions.delete(sessionId)) saveGitHubSessions();
  res.setHeader("Set-Cookie", buildOAuthCookie(GITHUB_OAUTH_COOKIE, "", req, 0));
  res.json({ ok: true });
});

app.get("/api/github/repos", async (req, res) => {
  const session = getGitHubSession(req);
  if (!session) {
    res.status(401).json({ ok: false, error: "Connect a GitHub account first." });
    return;
  }
  try {
    const repos = await githubApiRequest(
      session,
      "/user/repos?per_page=100&sort=updated&direction=desc&affiliation=owner,collaborator,organization_member",
    );
    res.json({
      ok: true,
      repos: (Array.isArray(repos) ? repos : []).map((repo) => ({
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        owner: repo.owner?.login || "",
        private: Boolean(repo.private),
        description: repo.description || "",
        defaultBranch: repo.default_branch || "main",
        htmlUrl: repo.html_url || "",
        updatedAt: repo.updated_at || "",
        canPush: Boolean(repo.permissions?.push || repo.permissions?.admin || repo.permissions?.maintain),
      })),
      scope: session.scope,
    });
  } catch (error) {
    res.status(error.status || 502).json({ ok: false, error: error.message });
  }
});

app.get("/api/github/repos/:owner/:repo/files", async (req, res) => {
  const session = getGitHubSession(req);
  if (!session) {
    res.status(401).json({ ok: false, error: "Connect a GitHub account first." });
    return;
  }
  const owner = String(req.params.owner || "").trim();
  const repo = String(req.params.repo || "").trim();
  const branch = String(req.query.branch || "").trim();
  if (!/^[A-Za-z0-9_.-]+$/.test(owner) || !/^[A-Za-z0-9_.-]+$/.test(repo) || !branch) {
    res.status(400).json({ ok: false, error: "Invalid GitHub repository or branch." });
    return;
  }
  try {
    const repoPath = `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`;
    const encodedBranch = branch.split("/").map(encodeURIComponent).join("/");
    const tree = await githubApiRequest(session, `${repoPath}/git/trees/${encodedBranch}?recursive=1`);
    res.json({
      ok: true,
      truncated: Boolean(tree?.truncated),
      files: (Array.isArray(tree?.tree) ? tree.tree : [])
        .filter((item) => item?.type === "blob" && item?.path)
        .map((item) => ({ path: item.path, size: Number(item.size) || 0, sha: item.sha || "" })),
    });
  } catch (error) {
    res.status(error.status || 502).json({ ok: false, error: error.message });
  }
});

app.get("/api/github/repos/:owner/:repo/file", async (req, res) => {
  const session = getGitHubSession(req);
  if (!session) {
    res.status(401).json({ ok: false, error: "Connect a GitHub account first." });
    return;
  }
  const owner = String(req.params.owner || "").trim();
  const repo = String(req.params.repo || "").trim();
  const branch = String(req.query.branch || "").trim();
  const filePath = normalizeGitHubFilePath(req.query.path);
  if (!/^[A-Za-z0-9_.-]+$/.test(owner) || !/^[A-Za-z0-9_.-]+$/.test(repo) || !branch || !filePath) {
    res.status(400).json({ ok: false, error: "Invalid repository file request." });
    return;
  }
  try {
    const encodedPath = filePath.split("/").map(encodeURIComponent).join("/");
    const repoPath = `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`;
    const file = await githubApiRequest(session, `${repoPath}/contents/${encodedPath}?ref=${encodeURIComponent(branch)}`);
    if (Array.isArray(file) || file?.type !== "file" || file?.encoding !== "base64") {
      throw createGitHubApiError(400, "This repository item is not an editable file.");
    }
    if (Number(file.size) > 10 * 1024 * 1024) throw createGitHubApiError(413, "This file is too large to edit here.");
    const buffer = Buffer.from(String(file.content || "").replace(/\s/g, ""), "base64");
    const binary = buffer.includes(0);
    res.json({ ok: true, file: { path: filePath, size: Number(file.size) || buffer.length, binary, content: binary ? "" : buffer.toString("utf8") } });
  } catch (error) {
    res.status(error.status || 502).json({ ok: false, error: error.message });
  }
});

app.post("/api/github/repos/:owner/:repo/commit", async (req, res) => {
  const session = getGitHubSession(req);
  if (!session) {
    res.status(401).json({ ok: false, error: "Connect a GitHub account first." });
    return;
  }
  const owner = String(req.params.owner || "").trim();
  const repo = String(req.params.repo || "").trim();
  const branch = String(req.body?.branch || "").trim();
  const message = String(req.body?.message || "").trim() || "Update files from CodX Editor";
  const description = String(req.body?.description || "").trim();
  const files = Array.isArray(req.body?.files) ? req.body.files : [];
  if (!/^[A-Za-z0-9_.-]+$/.test(owner) || !/^[A-Za-z0-9_.-]+$/.test(repo)) {
    res.status(400).json({ ok: false, error: "Invalid GitHub repository." });
    return;
  }
  if (!branch || branch.length > 255 || /[\s~^:?*\[\\]/.test(branch) || branch.includes("..")) {
    res.status(400).json({ ok: false, error: "Enter a valid branch name." });
    return;
  }
  if (message.length > 250) {
    res.status(400).json({ ok: false, error: "The commit message must be no more than 250 characters." });
    return;
  }
  if (!files.length || files.length > 500) {
    res.status(400).json({ ok: false, error: "Select between 1 and 500 files to commit." });
    return;
  }

  let totalBytes = 0;
  const normalizedFiles = [];
  for (const file of files) {
    const filePath = normalizeGitHubFilePath(file?.path);
    const encoding = file?.encoding === "base64" ? "base64" : "utf-8";
    const content = String(file?.content || "");
    if (!filePath) {
      res.status(400).json({ ok: false, error: "A selected file has an invalid path." });
      return;
    }
    const byteLength = encoding === "base64"
      ? Buffer.byteLength(content, "base64")
      : Buffer.byteLength(content, "utf8");
    totalBytes += byteLength;
    if (byteLength > 10 * 1024 * 1024 || totalBytes > 20 * 1024 * 1024) {
      res.status(413).json({ ok: false, error: "The selected files exceed the 20 MB commit limit." });
      return;
    }
    normalizedFiles.push({ path: filePath, encoding, content });
  }

  try {
    const repoPath = `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`;
    const encodedBranch = branch.split("/").map(encodeURIComponent).join("/");
    const reference = await githubApiRequest(session, `${repoPath}/git/ref/heads/${encodedBranch}`);
    const parentSha = reference?.object?.sha;
    if (!parentSha) throw createGitHubApiError(404, "The selected branch was not found.");
    const parentCommit = await githubApiRequest(session, `${repoPath}/git/commits/${parentSha}`);
    const baseTreeSha = parentCommit?.tree?.sha;
    if (!baseTreeSha) throw createGitHubApiError(502, "GitHub did not return the branch tree.");

    const tree = [];
    for (const file of normalizedFiles) {
      const blob = await githubApiRequest(session, `${repoPath}/git/blobs`, {
        method: "POST",
        body: {
          content: file.content,
          encoding: file.encoding,
        },
      });
      tree.push({ path: file.path, mode: "100644", type: "blob", sha: blob.sha });
    }
    const createdTree = await githubApiRequest(session, `${repoPath}/git/trees`, {
      method: "POST",
      body: { base_tree: baseTreeSha, tree },
    });
    const fullMessage = description ? `${message}\n\n${description}` : message;
    const commit = await githubApiRequest(session, `${repoPath}/git/commits`, {
      method: "POST",
      body: { message: fullMessage, tree: createdTree.sha, parents: [parentSha] },
    });
    await githubApiRequest(session, `${repoPath}/git/refs/heads/${encodedBranch}`, {
      method: "PATCH",
      body: { sha: commit.sha, force: false },
    });
    res.json({
      ok: true,
      commit: {
        sha: commit.sha,
        shortSha: String(commit.sha || "").slice(0, 7),
        htmlUrl: `https://github.com/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/commit/${commit.sha}`,
        files: normalizedFiles.length,
      },
    });
  } catch (error) {
    res.status(error.status || 502).json({ ok: false, error: error.message });
  }
});

app.get(/^\/frontend\.html\/([A-Za-z0-9-]+)$/, (req, res) => {
  const sessionId = normalizeSessionId(req.params[0]);
  if (!isValidSessionId(sessionId)) {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
    return;
  }
  res.sendFile(path.join(__dirname, "frontend.html"));
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, sessions: sessions.size });
});

app.post("/admin/api/auth", (req, res) => {
  const username = String(req.body?.username || "").trim();
  const password = String(req.body?.password || "");
  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    res.status(401).json({ ok: false, error: "Invalid admin username or password." });
    return;
  }
  const token = `${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
  adminSessions.set(token, Date.now());
  res.setHeader(
    "Set-Cookie",
    `${ADMIN_COOKIE}=${token}; HttpOnly; SameSite=Lax; Path=/; Max-Age=43200`,
  );
  res.json({ ok: true });
});

app.post("/admin/api/logout", (req, res) => {
  const token = parseCookies(req)[ADMIN_COOKIE];
  if (token) adminSessions.delete(token);
  res.setHeader(
    "Set-Cookie",
    `${ADMIN_COOKIE}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0`,
  );
  res.json({ ok: true });
});

app.use("/admin/api", (req, res, next) => {
  if (req.path === "/auth") {
    next();
    return;
  }
  const token = parseCookies(req)[ADMIN_COOKIE];
  if (!token || !adminSessions.has(token)) {
    res.status(401).json({ ok: false, error: "Admin authentication required." });
    return;
  }
  next();
});

app.get("/admin/api/overview", (_req, res) => {
  res.json(buildAdminOverview());
});

app.get("/admin/api/sessions", (_req, res) => {
  res.json({
    sessions: Array.from(sessions.entries())
      .map(([sessionId, session]) => summarizeSession(sessionId, session))
      .sort((a, b) => b.participantCount - a.participantCount || b.createdAt - a.createdAt),
  });
});

app.get("/admin/api/projects", (req, res) => {
  const origin = `${req.protocol}://${req.get("host")}`;
  const projects = Array.from(publishedProjects.values())
    .map((project) => {
      const files = Array.isArray(project?.files) ? project.files : [];
      const htmlFile = files.find((file) => String(file?.type || "").toLowerCase() === "html");
      const id = String(project?.id || "").trim();
      return {
        id,
        projectName: String(project?.projectName || "CodX Editor Project"),
        pageTitle: extractHtmlTitle(htmlFile?.content || ""),
        shareLink: `${origin}/published/${encodeURIComponent(id)}`,
        editorLink: `/frontend.html?adminProject=${encodeURIComponent(id)}`,
        fileCount: files.length,
        fileTypes: Array.from(
          new Set(files.map((file) => String(file?.type || "file").toLowerCase())),
        ).slice(0, 8),
        activeFileName: String(project?.activeFileName || htmlFile?.name || ""),
        hasHtml: Boolean(htmlFile),
        totalCharacters: files.reduce(
          (sum, file) => sum + String(file?.content || "").length,
          0,
        ),
        createdAt: Number(project?.createdAt || Date.now()),
        updatedAt: Number(project?.updatedAt || project?.createdAt || Date.now()),
      };
    })
    .sort((a, b) => b.updatedAt - a.updatedAt);
  res.json({ ok: true, projects });
});

app.get("/admin/api/project/:id", (req, res) => {
  const entry = findPublishedProjectEntry(req.params.id);
  if (!entry?.project) {
    res.status(404).json({ ok: false, error: "Published project not found." });
    return;
  }
  const project = entry.project;
  const files = cloneFiles(project.files || []);
  const activeFileName =
    String(project.activeFileName || "") ||
    String(files.find((file) => String(file?.type || "").toLowerCase() === "html")?.name || "") ||
    String(files[0]?.name || "");
  res.json({
    ok: true,
    project: {
      id: String(project.id || entry.key),
      projectName: String(project.projectName || "CodX Editor Project"),
      files,
      activeFileName,
      previewTarget: {
        mode: "html",
        fileName:
          String(files.find((file) => String(file?.type || "").toLowerCase() === "html")?.name || "") ||
          activeFileName,
      },
    },
  });
});

app.get("/admin/api/session/:sessionId", (req, res) => {
  const sessionId = normalizeSessionId(req.params.sessionId);
  const session = sessions.get(sessionId);
  if (!session) {
    res.status(404).json({ ok: false, error: "Session not found." });
    return;
  }
  res.json({
    ok: true,
    session: buildAdminSessionDetail(sessionId, session),
  });
});

app.get("/admin/api/activity", (_req, res) => {
  res.json({
    activity: adminActivity.slice(0, 30),
  });
});

app.post("/admin/api/session/:sessionId/lock-toggle", (req, res) => {
  const sessionId = normalizeSessionId(req.params.sessionId);
  const session = sessions.get(sessionId);
  if (!session) {
    res.status(404).json({ ok: false, error: "Session not found." });
    return;
  }
  const nextLocked = !Boolean(session.permissions?.roomLocked);
  session.permissions = normalizePermissions(
    { ...session.permissions, roomLocked: nextLocked },
    session.files,
  );
  emitSessionMeta(sessionId);
  logAdminEvent(
    nextLocked ? "Room locked" : "Room unlocked",
    `Session ${sessionId} was ${nextLocked ? "locked" : "unlocked"} from the admin panel.`,
    sessionId,
  );
  res.json({ ok: true, session: summarizeSession(sessionId, session) });
});

app.post("/admin/api/session/:sessionId/freeze-toggle", (req, res) => {
  const sessionId = normalizeSessionId(req.params.sessionId);
  const session = sessions.get(sessionId);
  if (!session) {
    res.status(404).json({ ok: false, error: "Session not found." });
    return;
  }
  const nextPaused = !Boolean(session.permissions?.pauseCollab);
  session.permissions = normalizePermissions(
    { ...session.permissions, pauseCollab: nextPaused },
    session.files,
  );
  emitSessionMeta(sessionId);
  logAdminEvent(
    nextPaused ? "Collaboration paused" : "Collaboration resumed",
    `Session ${sessionId} is now ${nextPaused ? "paused" : "active"} from the admin panel.`,
    sessionId,
  );
  res.json({ ok: true, session: summarizeSession(sessionId, session) });
});

app.post("/admin/api/session/:sessionId/regenerate-link", (req, res) => {
  const oldSessionId = normalizeSessionId(req.params.sessionId);
  const session = sessions.get(oldSessionId);
  if (!session) {
    res.status(404).json({ ok: false, error: "Session not found." });
    return;
  }
  const nextSessionId = generateSessionId();
  sessions.delete(oldSessionId);
  sessions.set(nextSessionId, session);
  (session.participants || []).forEach((participant) => {
    const socketRef = io.sockets.sockets.get(participant.socketId);
    if (socketRef) {
      socketRef.leave(oldSessionId);
      socketRef.join(nextSessionId);
    }
    const meta = socketMeta.get(participant.socketId);
    if (meta) meta.sessionId = nextSessionId;
  });
  (session.pendingJoins || []).forEach((entry) => {
    const meta = socketMeta.get(entry.socketId);
    if (meta) meta.sessionId = nextSessionId;
  });
  const shareLink = buildShareLink(session.baseUrl || "", nextSessionId);
  io.to(nextSessionId).emit("collab:link-regenerated", {
    sessionId: nextSessionId,
    shareLink,
  });
  emitSessionMeta(nextSessionId);
  emitPairingState(nextSessionId);
  logAdminEvent(
    "Invite link regenerated",
    `Session ${oldSessionId} was moved to new session id ${nextSessionId}.`,
    nextSessionId,
  );
  res.json({ ok: true, sessionId: nextSessionId, shareLink });
});

app.post("/admin/api/session/:sessionId/end", (req, res) => {
  const sessionId = normalizeSessionId(req.params.sessionId);
  const session = sessions.get(sessionId);
  if (!session) {
    res.status(404).json({ ok: false, error: "Session not found." });
    return;
  }
  logAdminEvent(
    "Session ended",
    `Session ${sessionId} was ended from the admin panel.`,
    sessionId,
  );
  endSession(sessionId, "An admin ended this collaboration session.");
  res.json({ ok: true });
});

app.post("/api/publish", (req, res) => {
  const files = cloneFiles(req.body?.files);
  const activeFileName = String(req.body?.activeFileName || "");
  const projectName = String(req.body?.projectName || "CodX Editor Project").trim().slice(0, 80);
  const id = String(req.body?.publishId || "").trim();
  const mode = String(req.body?.mode || "create").trim().toLowerCase();
  const verificationKey = String(req.body?.verificationKey || "").trim();
  if (!Array.isArray(files) || !files.length) {
    res.status(400).json({ ok: false, error: "No project files to publish." });
    return;
  }
  if (mode !== "create" && mode !== "update") {
    res.status(400).json({ ok: false, error: "Choose create or update for this published link." });
    return;
  }
  if (!/^[A-Za-z0-9][A-Za-z0-9-]{0,79}$/.test(id)) {
    res.status(400).json({
      ok: false,
      error: "Use 1–80 letters, numbers, or hyphens for the link name.",
    });
    return;
  }
  const existingEntry = findPublishedProjectEntry(id);
  if (mode === "create" && existingEntry) {
    res.status(409).json({ ok: false, error: "That published link name is already in use." });
    return;
  }
  if (mode === "update") {
    if (!existingEntry) {
      res.status(404).json({ ok: false, error: "That published link does not exist yet." });
      return;
    }
    if (!verificationKey) {
      res.status(400).json({ ok: false, error: "Enter the verification key for this link." });
      return;
    }
    const existingKey = String(existingEntry.project?.verificationKey || "").trim();
    if (!existingKey) {
      res.status(403).json({
        ok: false,
        error: "This link was created before verification keys were added, so it cannot be updated.",
      });
      return;
    }
    if (verificationKey.toUpperCase() !== existingKey.toUpperCase()) {
      res.status(403).json({ ok: false, error: "Verification key does not match this link." });
      return;
    }
    publishedProjects.set(existingEntry.key, {
      ...existingEntry.project,
      projectName,
      files,
      activeFileName,
      updatedAt: Date.now(),
    });
  } else {
    const newVerificationKey = generatePublishVerificationKey();
    publishedProjects.set(id, {
      id,
      projectName,
      files,
      activeFileName,
      verificationKey: newVerificationKey,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  }
  savePublishedProjects();
  const published = findPublishedProjectEntry(id)?.project || publishedProjects.get(id);
  logAdminEvent(
    mode === "update" ? "Published project updated" : "Project published",
    `${projectName || id} is available at /published/${published?.id || id}.`,
  );
  const responseVerificationKey = String(published?.verificationKey || "").trim();
  res.json({
    ok: true,
    id: published?.id || id,
    mode,
    shareLink: `${req.protocol}://${req.get("host")}/published/${published?.id || id}`,
    verificationKey: mode === "create" ? responseVerificationKey : "",
  });
});

app.get("/published/:id", (req, res) => {
  const id = String(req.params.id || "").trim();
  const project = findPublishedProjectEntry(id)?.project;
  if (!project) {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
    return;
  }
  res.setHeader("Cache-Control", "no-store, max-age=0, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  const sentTitle =
    req.headers["x-codx-publish-title"] ||
    req.headers["x-publish-title"] ||
    "";
  const requestedFile = String(req.query.file || "").trim();
  res.send(buildPublishedHtml(project, requestedFile, sentTitle));
});

// Fallback: unknown GET routes go to custom 404 page.
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

function cloneFiles(files) {
  return JSON.parse(JSON.stringify(files || []));
}

function findPublishedProjectEntry(id) {
  const normalizedId = String(id || "").trim().toLowerCase();
  if (!normalizedId) return null;
  for (const [key, project] of publishedProjects.entries()) {
    if (String(key || "").toLowerCase() === normalizedId) return { key, project };
  }
  return null;
}

function generatePublishVerificationKey() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = crypto.randomBytes(6);
  const suffix = Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join("");
  return `cxprojkey-${suffix}`;
}

function extractHtmlTitle(html) {
  const match = String(html || "").match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!match) return "";
  return String(match[1] || "")
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function normalizePublishedTitle(title) {
  return String(title || "")
    .replace(/\s*\|\s*CodX(?: Editor)? Project\s*$/i, "")
    .trim();
}

function loadPublishedProjects() {
  try {
    if (!fs.existsSync(PUBLISHED_PROJECTS_FILE)) return;
    const raw = fs.readFileSync(PUBLISHED_PROJECTS_FILE, "utf8");
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return;
    parsed.forEach((entry) => {
      if (!entry || !entry.id || !Array.isArray(entry.files)) return;
      publishedProjects.set(String(entry.id), {
        id: String(entry.id),
        projectName: String(entry.projectName || "CodX Editor Project"),
        files: cloneFiles(entry.files),
        activeFileName: String(entry.activeFileName || ""),
        verificationKey: String(entry.verificationKey || ""),
        createdAt: Number(entry.createdAt || Date.now()),
        updatedAt: Number(entry.updatedAt || entry.createdAt || Date.now()),
      });
    });
  } catch (error) {
    console.error("Failed to load published projects:", error);
  }
}

function savePublishedProjects() {
  try {
    const serialized = JSON.stringify(Array.from(publishedProjects.values()), null, 2);
    fs.writeFileSync(PUBLISHED_PROJECTS_FILE, serialized, "utf8");
  } catch (error) {
    console.error("Failed to save published projects:", error);
  }
}

function isSecureRequest(req) {
  const forwardedProtocol = String(req.headers?.["x-forwarded-proto"] || "")
    .split(",")[0]
    .trim()
    .toLowerCase();
  return Boolean(req.secure || forwardedProtocol === "https");
}

function buildOAuthCookie(name, value, req, maxAgeSeconds) {
  const parts = [
    `${name}=${encodeURIComponent(value)}`,
    "HttpOnly",
    "SameSite=Lax",
    "Path=/",
    `Max-Age=${Math.max(0, Number(maxAgeSeconds) || 0)}`,
  ];
  if (isSecureRequest(req)) parts.push("Secure");
  return parts.join("; ");
}

function normalizeGitHubReturnTo(value) {
  const target = String(value || "/frontend.html").trim();
  if (!target.startsWith("/") || target.startsWith("//") || /[\r\n]/.test(target)) {
    return "/frontend.html";
  }
  return target;
}

function buildGitHubResultRedirect(returnTo, result) {
  const url = new URL(normalizeGitHubReturnTo(returnTo), "http://codx.local");
  url.searchParams.set("github", String(result || "failed"));
  return `${url.pathname}${url.search}${url.hash}`;
}

function getGitHubCallbackUrl(req) {
  if (GITHUB_OAUTH_CALLBACK_URL) return GITHUB_OAUTH_CALLBACK_URL;
  const protocol = isSecureRequest(req) ? "https" : "http";
  return `${protocol}://${req.get("host")}/auth/github/callback`;
}

function safeStringEqual(left, right) {
  const leftBuffer = Buffer.from(String(left || ""));
  const rightBuffer = Buffer.from(String(right || ""));
  return (
    leftBuffer.length === rightBuffer.length &&
    leftBuffer.length > 0 &&
    crypto.timingSafeEqual(leftBuffer, rightBuffer)
  );
}

function getGitHubSessionEncryptionKey() {
  if (!GITHUB_CLIENT_SECRET) return null;
  return crypto.createHash("sha256").update(`codx-github-sessions:${GITHUB_CLIENT_SECRET}`).digest();
}

function loadGitHubSessions() {
  const key = getGitHubSessionEncryptionKey();
  if (!key || !fs.existsSync(GITHUB_SESSIONS_FILE)) return;
  try {
    const payload = JSON.parse(fs.readFileSync(GITHUB_SESSIONS_FILE, "utf8"));
    const iv = Buffer.from(String(payload.iv || ""), "base64");
    const authTag = Buffer.from(String(payload.authTag || ""), "base64");
    const encrypted = Buffer.from(String(payload.data || ""), "base64");
    const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
    decipher.setAuthTag(authTag);
    const plainText = Buffer.concat([decipher.update(encrypted), decipher.final()]).toString("utf8");
    const storedSessions = JSON.parse(plainText);
    const expiresAfter = 7 * 24 * 60 * 60 * 1000;
    const now = Date.now();
    for (const [sessionId, session] of Array.isArray(storedSessions) ? storedSessions : []) {
      if (
        typeof sessionId === "string" &&
        session?.accessToken &&
        session?.user?.login &&
        now - Number(session.createdAt || 0) <= expiresAfter
      ) {
        githubSessions.set(sessionId, session);
      }
    }
  } catch (error) {
    console.warn("Unable to restore GitHub sessions; users will need to reconnect:", error.message);
  }
}

function saveGitHubSessions() {
  const key = getGitHubSessionEncryptionKey();
  if (!key) return;
  try {
    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
    const encrypted = Buffer.concat([
      cipher.update(JSON.stringify([...githubSessions.entries()]), "utf8"),
      cipher.final(),
    ]);
    const payload = JSON.stringify({
      version: 1,
      iv: iv.toString("base64"),
      authTag: cipher.getAuthTag().toString("base64"),
      data: encrypted.toString("base64"),
    });
    const temporaryFile = `${GITHUB_SESSIONS_FILE}.tmp`;
    fs.writeFileSync(temporaryFile, payload, { encoding: "utf8", mode: 0o600 });
    fs.renameSync(temporaryFile, GITHUB_SESSIONS_FILE);
  } catch (error) {
    console.warn("Unable to persist GitHub sessions:", error.message);
  }
}

function pruneGitHubAuthState() {
  const now = Date.now();
  for (const [state, flow] of githubOAuthFlows.entries()) {
    if (now - Number(flow?.createdAt || 0) > 10 * 60 * 1000) githubOAuthFlows.delete(state);
  }
  let removedSession = false;
  for (const [sessionId, session] of githubSessions.entries()) {
    if (now - Number(session?.createdAt || 0) > 7 * 24 * 60 * 60 * 1000) {
      githubSessions.delete(sessionId);
      removedSession = true;
    }
  }
  if (removedSession) saveGitHubSessions();
}

function getGitHubSession(req) {
  pruneGitHubAuthState();
  const sessionId = String(parseCookies(req)[GITHUB_OAUTH_COOKIE] || "");
  return sessionId ? githubSessions.get(sessionId) || null : null;
}

function createGitHubApiError(status, message) {
  const error = new Error(String(message || "GitHub request failed."));
  error.status = Number(status) || 502;
  return error;
}

async function githubApiRequest(session, apiPath, options = {}) {
  if (!session?.accessToken) throw createGitHubApiError(401, "Connect a GitHub account first.");
  const response = await fetch(`https://api.github.com${apiPath}`, {
    method: options.method || "GET",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${session.accessToken}`,
      "User-Agent": "CodX-Editor",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.body ? { "Content-Type": "application/json" } : {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
  const responseText = await response.text();
  let data = null;
  try {
    data = responseText ? JSON.parse(responseText) : null;
  } catch (_error) {
    data = responseText;
  }
  if (!response.ok) {
    const message = typeof data === "object" && data?.message
      ? data.message
      : `GitHub request failed (${response.status}).`;
    throw createGitHubApiError(response.status, message);
  }
  return data;
}

function normalizeGitHubFilePath(value) {
  const pathValue = String(value || "").replace(/\\/g, "/").replace(/^\.\//, "").replace(/^\/+/, "");
  if (!pathValue || pathValue.length > 1024 || /[\0-\x1f\x7f]/.test(pathValue)) return "";
  const segments = pathValue.split("/").map((segment) => segment.trim().replace(/\s+/g, "-"));
  if (segments.some((segment) => !segment || segment === "." || segment === ".." || segment === ".git")) return "";
  return segments.join("/");
}

function parseCookies(req) {
  const header = String(req.headers?.cookie || "");
  return header.split(";").reduce((acc, part) => {
    const [rawKey, ...rawValue] = part.split("=");
    const key = String(rawKey || "").trim();
    if (!key) return acc;
    acc[key] = decodeURIComponent(rawValue.join("=").trim());
    return acc;
  }, {});
}

function normalizeSessionId(value) {
  return String(value || "").trim().toUpperCase();
}

function isRecentlyEndedSession(sessionId) {
  const normalized = normalizeSessionId(sessionId);
  const expiresAt = Number(endedSessions.get(normalized) || 0);
  if (!expiresAt) return false;
  if (expiresAt <= Date.now()) {
    endedSessions.delete(normalized);
    return false;
  }
  return true;
}

function isValidSessionId(value) {
  return PIN_SESSION_ID_RE.test(value) || MODERN_SESSION_ID_RE.test(value) || LEGACY_SESSION_ID_RE.test(value);
}

function generateSessionId() {
  const part = () =>
    Array.from(
      { length: 4 },
      () => SESSION_CHARS[Math.floor(Math.random() * SESSION_CHARS.length)],
    ).join("");

  let id = "";
  do {
    id = `${part()}-${part()}-${part()}-${part()}`;
  } while (sessions.has(id));
  return id;
}

function generateSessionPin() {
  let pin = "";
  do {
    pin = Array.from(
      { length: 6 },
      () => SESSION_CHARS[Math.floor(Math.random() * SESSION_CHARS.length)],
    ).join("");
  } while (findSessionIdByPin(pin));
  return pin;
}

function findSessionIdByPin(pin) {
  const normalizedPin = normalizeSessionId(pin);
  if (!PIN_SESSION_ID_RE.test(normalizedPin)) return "";
  for (const [sessionId, session] of sessions.entries()) {
    if (normalizeSessionId(session?.pin) === normalizedPin) return sessionId;
  }
  return "";
}

function buildShareLink(baseUrl, sessionId) {
  const root = String(baseUrl || "").replace(/\/+$/, "");
  if (root) return `${root}/frontend.html/${sessionId}`;
  return `/frontend.html/${sessionId}`;
}

function buildPublishedHtml(project, requestedFileName = "", requestTitle = "") {
  const files = Array.isArray(project?.files) ? project.files : [];
  const activeFileName = String(project?.activeFileName || "");
  const requestedFile = String(requestedFileName || "").trim();
  const requestTitleText = String(requestTitle || "").trim();
  const normalizeFileName = (value) => String(value || "").trim().replace(/^\.\/+/, "").toLowerCase();
  const resolveBuiltInAsset = (rawPath) => {
    const normalized = String(rawPath || "").trim().replace(/^\.\/+/, "").replace(/^\/+/, "").toLowerCase();
    if (normalized === "cx.png") return "/cx.png";
    return "";
  };
  const resolveFile = (rawName, typeHint = "") => {
    const target = normalizeFileName(rawName);
    if (!target) return null;
    return files.find((file) => {
      const candidate = normalizeFileName(file.name);
      const sameName =
        candidate === target ||
        candidate.endsWith(`/${target}`) ||
        candidate.split("/").pop() === target.split("/").pop();
      if (!sameName) return false;
      if (!typeHint) return true;
      return String(file.type || "").toLowerCase() === typeHint.toLowerCase();
    }) || null;
  };

  const htmlFile =
    (requestedFile
      ? resolveFile(requestedFile, "html")
      : resolveFile("index.html", "html") ||
        files.find(
          (file) =>
            String(file?.name || "") === activeFileName &&
            String(file?.type || "").toLowerCase() === "html",
        )) ||
    files.find((file) => String(file?.type || "").toLowerCase() === "html");

  if (!htmlFile) {
    if (requestedFile) {
      return `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Published Page Not Found</title><style>html,body{margin:0;padding:0;font-family:Segoe UI,Tahoma,sans-serif;background:#f6fff7;color:#18211b}body{padding:32px}div{max-width:760px;margin:0 auto;background:#fff;border:1px solid rgba(20,41,27,.12);border-radius:20px;padding:24px;box-shadow:0 18px 40px rgba(24,46,31,.08)}h1{margin:0 0 12px}p{color:#5b675f;line-height:1.7}</style></head><body><div><h1>Page not found</h1><p>The published project does not contain <strong>${escapeHtmlAttribute(requestedFile)}</strong>.</p></div></body></html>`;
    }
    return `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtmlAttribute(project?.projectName || "Published Project")}</title><style>body{font-family:Segoe UI,Tahoma,sans-serif;background:#f6fff7;color:#18211b;padding:32px}.box{max-width:760px;margin:0 auto;background:#fff;border:1px solid rgba(20,41,27,.12);border-radius:20px;padding:24px;box-shadow:0 18px 40px rgba(24,46,31,.08)}h1{margin:0 0 12px}p{color:#5b675f;line-height:1.7}</style></head><body><div class="box"><h1>No HTML file to publish</h1><p>This project does not contain an HTML file, so there is nothing previewable to publish yet.</p></div></body></html>`;
  }

  const publishLinkBase = `/published/${encodeURIComponent(project.id)}`;
  const isProjectHtmlNavigationHref = (rawHref) => {
    const href = String(rawHref || "").trim();
    if (!href || href.startsWith("#")) return false;
    if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("//")) return false;
    if (/^\/(?:404-for-preview\.html|published\/)/i.test(href)) return false;
    return /\.html(?:[?#].*)?$/i.test(href);
  };
  const toPublishedLink = (rawHref) => {
    const raw = String(rawHref || "").trim();
    if (!isProjectHtmlNavigationHref(raw)) return "";
    const [pathPart, hashPart] = raw.split("#");
    const [pathOnly] = pathPart.split("?");
    const baseName = pathOnly.replace(/^\.\/+/, "").replace(/^\/+/, "");
    const linked = resolveFile(baseName, "html");
    const target = linked ? linked.name : baseName || raw;
    const hash = hashPart ? `#${hashPart}` : "";
    return `${publishLinkBase}?file=${encodeURIComponent(target)}${hash}`;
  };
  const rewritePublishedScriptNavigation = (scriptCode) =>
    String(scriptCode || "").replace(
      /((?:window\.)?location(?:\.href)?\s*=\s*|(?:window\.)?location\.(?:assign|replace)\(\s*|window\.open\(\s*)(['"])([^'"]+\.html(?:[?#][^'"]*)?)(\2)(\s*\))?/gi,
      (match, prefix, quote, href, _closingQuote, closing = "") => {
        const url = toPublishedLink(href);
        if (!url) return match;
        if (/\(\s*$/i.test(prefix)) {
          return `${prefix}${quote}${url}${quote}${closing || ")"}`;
        }
        return `${prefix}${quote}${url}${quote}`;
      },
    );

  let html = String(htmlFile.content || "");
  html = html.replace(/<link\b([^>]*?)href=["']([^"']+)["']([^>]*?)>/gi, (full, before, href) => {
    const builtInAsset = resolveBuiltInAsset(href);
    if (builtInAsset) {
      return full.replace(href, builtInAsset);
    }
    const cssFile = resolveFile(href, "css");
    if (!cssFile) return full;
    return `<style data-published-source="${escapeHtmlAttribute(cssFile.name)}">\n${String(cssFile.content || "")}\n</style>`;
  });

  html = html.replace(/<script\b([^>]*?)src=["']([^"']+)["']([^>]*)><\/script>/gi, (full, before, src) => {
    const jsFile = resolveFile(src, "js");
    if (!jsFile) return full;
    const rewrittenScript = rewritePublishedScriptNavigation(jsFile.content);
    return `<script data-published-source="${escapeHtmlAttribute(jsFile.name)}">\n${rewrittenScript}\n<\/script>`;
  });

  html = html.replace(
    /<a([^>]*)href=["']([^"']+\.html(?:[?#][^"']*)?)["']([^>]*)>/gi,
    (full, before, href, after) => {
      const url = toPublishedLink(href);
      return url ? `<a${before}href="${url}"${after}>` : full;
    },
  );

  html = html.replace(
    /<form([^>]*)action=["']([^"']+\.html(?:[?#][^"']*)?)["']([^>]*)>/gi,
    (full, before, action, after) => {
      const url = toPublishedLink(action);
      return url ? `<form${before}action="${url}"${after}>` : full;
    },
  );

  html = html.replace(
    /\bonclick=(["'])([\s\S]*?)\1/gi,
    (match, quote, handlerCode) => {
      const rewritten = handlerCode.replace(
        /((?:window\.)?location(?:\.href)?\s*=\s*|(?:window\.)?location\.(?:assign|replace)\(\s*|window\.open\(\s*)(['"])([^'"]+\.html(?:[?#][^'"]*)?)(\2)(\s*\))?/gi,
        (_m, prefix, q, href, _q2, closing = "") => {
          const url = toPublishedLink(href);
          if (!url) return _m;
          if (/\(\s*$/i.test(prefix)) {
            return `${prefix}${q}${url}${q}${closing || ")"}`;
          }
          return `window.location.href = ${q}${url}${q}`;
        },
      );
      return `onclick=${quote}${rewritten}${quote}`;
    },
  );

  html = html.replace(
    /<script\b((?:(?!\bsrc=)[^>])*)>([\s\S]*?)<\/script>/gi,
    (full, attrs, scriptCode) => {
      if (!scriptCode || !/\.html(?:[?#][^'"\s)]*)?/i.test(scriptCode)) return full;
      return `<script${attrs}>${rewritePublishedScriptNavigation(scriptCode)}</script>`;
    },
  );

  html = html.replace(
    /<(img|video|audio|source)([^>]*)src=["']([^"']+)["']([^>]*)>/gi,
    (full, tag, before, src, after) => {
      if (
        src.startsWith("data:") ||
        src.startsWith("http://") ||
        src.startsWith("https://") ||
        src.startsWith("blob:") ||
        src.startsWith("/")
      ) {
        return full;
      }
      const builtInAsset = resolveBuiltInAsset(src);
      if (!builtInAsset) return full;
      return `<${tag}${before} src="${builtInAsset}"${after}>`;
    },
  );

  const publishTitle = escapeHtmlAttribute(
    normalizePublishedTitle(
      requestTitleText || extractHtmlTitle(html) || project?.projectName || htmlFile.name,
    ),
  );
  if (!/<title\b/i.test(html)) {
    html = html.replace(
      /<head([^>]*)>/i,
      `<head$1><title>${publishTitle}</title>`,
    );
  } else {
    html = html.replace(/<title[^>]*>[\s\S]*?<\/title>/i, `<title>${publishTitle}</title>`);
  }

  const publishBaseReset =
    '<style data-codx-publish-reset>html,body{margin:0;padding:0;min-height:100%;}body{box-sizing:border-box;}*,*::before,*::after{box-sizing:inherit;}</style>';

  if (/<head\b[^>]*>/i.test(html)) {
    html = html.replace(/<head([^>]*)>/i, `<head$1>${publishBaseReset}`);
  } else {
    html = `${publishBaseReset}${html}`;
  }

  return html;
}

function escapeHtmlAttribute(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function emitAdminUpdate(reason = "state") {
  io.emit("admin:update", {
    reason: String(reason || "state"),
    ts: Date.now(),
  });
}

function logAdminEvent(title, detail, sessionId = "") {
  adminActivity.unshift({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title: String(title || "").trim(),
    detail: String(detail || "").trim(),
    sessionId: String(sessionId || "").trim(),
    ts: Date.now(),
  });
  if (adminActivity.length > 120) {
    adminActivity.length = 120;
  }
  emitAdminUpdate("activity");
}

function summarizeSession(sessionId, session) {
  const participants = Array.isArray(session?.participants) ? session.participants : [];
  const permissions = session?.permissions || DEFAULT_PERMISSIONS;
  const chatState = session?.chat || { group: [], private: {} };
  const pendingJoins = Array.isArray(session?.pendingJoins) ? session.pendingJoins : [];
  return {
    sessionId,
    sessionPin: session?.pin || "",
    hostName: session?.hostName || "Unknown",
    shareLink: buildShareLink(session?.baseUrl || "", sessionId),
    participantCount: participants.length,
    pendingJoinCount: pendingJoins.length,
    publishedProjects: publishedProjects.size,
    fileCount: Array.isArray(session?.files) ? session.files.length : 0,
    groupMessageCount: Array.isArray(chatState.group) ? chatState.group.length : 0,
    privateThreadCount: Object.keys(chatState.private || {}).length,
    createdAt: Math.min(
      ...participants.map((participant) => Number(participant.joinedAt) || Date.now()),
      Date.now(),
    ),
    activeFileName: session?.activeFileName || "",
    roomLocked: Boolean(permissions.roomLocked),
    paused: Boolean(permissions.pauseCollab),
    readOnlyAll: Boolean(permissions.readOnlyAll),
    disableSaveProject: Boolean(permissions.disableSaveProject),
    disableOpenSavedProjects: Boolean(permissions.disableOpenSavedProjects),
    disableTemplates: Boolean(permissions.disableTemplates),
    disablePublishShare: Boolean(permissions.disablePublishShare),
    requireJoinApproval: Boolean(permissions.requireJoinApproval),
    disableAllChat: Boolean(permissions.disableAllChat),
    pinnedFile: permissions.pinnedFile || "",
    hostRoleCount: participants.filter((participant) => String(participant.role) === "co-host").length,
    flaggedParticipants: participants.filter(
      (participant) =>
        participant.mutedChat ||
        participant.frozenEditing ||
        participant.priority ||
        Array.isArray(participant.allowedFiles),
    ).length,
    participantPreview: participants.slice(0, 6).map((participant) => ({
      name: String(participant?.name || "Guest"),
      role: String(participant?.role || "participant"),
      theme: String(participant?.theme || "#16a34a"),
      currentFile: String(participant?.currentFile || ""),
    })),
  };
}

function buildAdminOverview() {
  const summaryList = Array.from(sessions.entries()).map(([sessionId, session]) =>
    summarizeSession(sessionId, session),
  );
  const participants = summaryList.reduce((sum, item) => sum + item.participantCount, 0);
  const pending = summaryList.reduce((sum, item) => sum + item.pendingJoinCount, 0);
  const flagged = summaryList.reduce((sum, item) => sum + item.flaggedParticipants, 0);
  const locked = summaryList.filter((item) => item.roomLocked).length;
  return {
    health: {
      ok: true,
      uptimeSeconds: Math.floor(process.uptime()),
      sessions: sessions.size,
      connectedSockets: io.engine.clientsCount,
    },
    stats: {
      activeUsers: editorPresenceSockets.size,
      frontendPageUsers: editorPresenceSockets.size,
      frontendHtmlOnlyUsers: editorPresenceSockets.size,
      collaboratingUsers: participants,
      liveSessions: sessions.size,
      moderationItems: pending + flagged,
      capacityLoad:
        editorPresenceSockets.size === 0
          ? 0
          : Math.min(100, Math.round((editorPresenceSockets.size / 200) * 100)),
      pendingJoins: pending,
      lockedRooms: locked,
      publishedProjects: publishedProjects.size,
    },
    queue: {
      pendingJoinApprovals: pending,
      flaggedParticipants: flagged,
      lockedRooms: locked,
      pausedRooms: summaryList.filter((item) => item.paused).length,
    },
    sessions: summaryList
      .sort((a, b) => b.participantCount - a.participantCount || b.pendingJoinCount - a.pendingJoinCount)
      .slice(0, 6),
  };
}

function buildAdminSessionDetail(sessionId, session) {
  const summary = summarizeSession(sessionId, session);
  return {
    ...summary,
    permissions: { ...(session?.permissions || DEFAULT_PERMISSIONS) },
    participants: (session?.participants || []).map(sanitizeParticipant),
    files: cloneFiles(session?.files || []),
    chat: {
      groupCount: Array.isArray(session?.chat?.group) ? session.chat.group.length : 0,
      privateThreadCount: Object.keys(session?.chat?.private || {}).length,
    },
  };
}

function sanitizeParticipant(p) {
  return {
    name: p.name,
    theme: p.theme,
    cursorStyle: normalizeCollabCursorStyle(p.cursorStyle),
    role: p.role || "participant",
    mutedChat: Boolean(p.mutedChat),
    frozenEditing: Boolean(p.frozenEditing),
    renameDisabled: Boolean(p.renameDisabled),
    priority: Boolean(p.priority),
    currentFile: p.currentFile || null,
    joinedAt: p.joinedAt || Date.now(),
    allowedFiles: Array.isArray(p.allowedFiles) ? [...p.allowedFiles] : null,
    disabledFeatures: Array.isArray(p.disabledFeatures) ? [...p.disabledFeatures] : [],
  };
}

function normalizeCollabCursorStyle(value) {
  const requested = String(value || "").trim().toLowerCase();
  return COLLAB_CURSOR_STYLES.has(requested) ? requested : "pointer";
}

function sanitizeBanEntry(entry) {
  return {
    deviceId: String(entry?.deviceId || ""),
    name: String(entry?.name || "Unknown"),
    bannedAt: Number(entry?.bannedAt || Date.now()),
    bannedBy: String(entry?.bannedBy || "Host"),
  };
}

function normalizeDisabledFeatures(features) {
  const allowed = new Set([
    "chat",
    "saveProject",
    "openSaved",
    "templates",
    "publishShare",
    "runCode",
    "consoleAccess",
    "pairing",
  ]);
  if (!Array.isArray(features)) return [];
  return [...new Set(features
    .map((item) => String(item || "").trim())
    .filter((item) => allowed.has(item)))];
}

function normalizeName(value) {
  return String(value || "").trim().toLowerCase();
}

function ensurePairingState(session) {
  if (!session.pairing) session.pairing = { invites: [], pairs: [], inviteCooldowns: {} };
  if (!Array.isArray(session.pairing.invites)) session.pairing.invites = [];
  if (!Array.isArray(session.pairing.pairs)) session.pairing.pairs = [];
  if (!session.pairing.inviteCooldowns) session.pairing.inviteCooldowns = {};
  session.pairing.invites = session.pairing.invites.filter(
    (invite) => Number(invite?.expiresAt || 0) > Date.now(),
  );
  return session.pairing;
}

function findPairForName(session, name) {
  const key = normalizeName(name);
  return ensurePairingState(session).pairs.find(
    (pair) => Array.isArray(pair.members) && pair.members.some((memberName) => normalizeName(memberName) === key),
  ) || null;
}

function findPairPartnerName(pair, name) {
  const key = normalizeName(name);
  return (pair?.members || []).find((memberName) => normalizeName(memberName) !== key) || "";
}

function getPairAccess(sessionId, socketId, pairId = "") {
  const access = canUseSession(sessionId, socketId);
  if (!access) return null;
  const pair = pairId
    ? ensurePairingState(access.session).pairs.find((entry) => entry.id === String(pairId))
    : findPairForName(access.session, access.member.name);
  if (!pair || !(pair.members || []).some((name) => normalizeName(name) === normalizeName(access.member.name))) {
    return null;
  }
  return { ...access, pair };
}

function recordPairActivity(pair, text, type = "activity") {
  if (!pair) return;
  if (!Array.isArray(pair.activity)) pair.activity = [];
  pair.activity.push({
    id: crypto.randomBytes(6).toString("hex"),
    text: String(text || "").slice(0, 300),
    type: String(type || "activity").slice(0, 40),
    ts: Date.now(),
  });
  if (pair.activity.length > 120) pair.activity.splice(0, pair.activity.length - 120);
}

function sanitizePairOverview(session, pair) {
  const connectedNames = new Set((session.participants || []).map((participant) => normalizeName(participant.name)));
  return {
    id: pair.id,
    members: [...(pair.members || [])],
    driver: pair.driver,
    navigator: pair.navigator,
    mode: pair.mode || "driver",
    status: pair.connectionPaused ? "reconnecting" : pair.status || "active",
    helpRequested: Boolean(pair.helpRequested),
    createdAt: Number(pair.createdAt || Date.now()),
    connected: Object.fromEntries(
      (pair.members || []).map((name) => [name, connectedNames.has(normalizeName(name))]),
    ),
  };
}

function sanitizePairForMembers(session, pair) {
  return {
    ...sanitizePairOverview(session, pair),
    chat: Array.isArray(pair.chat) ? pair.chat.slice(-200) : [],
    suggestions: Array.isArray(pair.suggestions) ? pair.suggestions.slice(-100) : [],
    tasks: Array.isArray(pair.tasks) ? pair.tasks.slice(-100) : [],
    activity: Array.isArray(pair.activity) ? pair.activity.slice(-120) : [],
    pendingSwitch: pair.pendingSwitch
      ? { from: pair.pendingSwitch.from, to: pair.pendingSwitch.to, ts: pair.pendingSwitch.ts }
      : null,
  };
}

function emitPairingState(sessionId) {
  const session = sessions.get(sessionId);
  if (!session) return;
  const pairing = ensurePairingState(session);
  io.to(sessionId).emit(
    "collab:pair:overview",
    pairing.pairs.map((pair) => sanitizePairOverview(session, pair)),
  );
  (session.participants || []).forEach((participant) => {
    const pair = findPairForName(session, participant.name);
    io.to(participant.socketId).emit(
      "collab:pair:state",
      pair ? sanitizePairForMembers(session, pair) : null,
    );
  });
}

function clearPairTimers(pair) {
  Object.values(pair?._disconnectTimers || {}).forEach((timer) => clearTimeout(timer));
  if (pair) pair._disconnectTimers = {};
}

function endPairInternal(sessionId, pair, reason = "Pair ended.", endedBy = "System") {
  const session = sessions.get(sessionId);
  if (!session || !pair) return false;
  clearPairTimers(pair);
  (pair.members || []).forEach((name) => {
    const participant = session.participants.find((entry) => normalizeName(entry.name) === normalizeName(name));
    if (participant) {
      io.to(participant.socketId).emit("collab:pair:ended", { reason, endedBy });
    }
  });
  const pairing = ensurePairingState(session);
  pairing.pairs = pairing.pairs.filter((entry) => entry.id !== pair.id);
  pairing.invites = pairing.invites.filter(
    (invite) => !(pair.members || []).some((name) =>
      [invite.from, invite.to].some((inviteName) => normalizeName(inviteName) === normalizeName(name))),
  );
  emitPairingState(sessionId);
  return true;
}

function endPairsForParticipant(sessionId, participantName, reason, endedBy = "System") {
  const session = sessions.get(sessionId);
  const pair = session ? findPairForName(session, participantName) : null;
  if (pair) endPairInternal(sessionId, pair, reason, endedBy);
}

function normalizeParticipantDisplayName(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function validateParticipantDisplayName(value) {
  const name = normalizeParticipantDisplayName(value);
  if (name.length < 2) return { ok: false, error: "Name must be at least 2 characters." };
  if (name.length > 20) return { ok: false, error: "Name cannot be longer than 20 characters." };
  if (!/^[a-zA-Z0-9\s_-]+$/.test(name)) {
    return { ok: false, error: "Use only letters, numbers, spaces, dashes, or underscores." };
  }
  return { ok: true, name };
}

function migrateParticipantNameState(session, participant, oldName, newName) {
  const oldKey = normalizeName(oldName);
  const newKey = normalizeName(newName);

  participant.name = newName;
  if (participant.socketId === session.hostSocketId) {
    session.hostName = newName;
  }

  if (session.fileAccessByName && Object.prototype.hasOwnProperty.call(session.fileAccessByName, oldKey)) {
    session.fileAccessByName[newKey] = session.fileAccessByName[oldKey];
    if (newKey !== oldKey) delete session.fileAccessByName[oldKey];
  }

  if (session.chat) {
    (session.chat.group || []).forEach((message) => {
      if (normalizeName(message?.from) === oldKey) message.from = newName;
    });

    const nextPrivateThreads = {};
    Object.entries(session.chat.private || {}).forEach(([threadKey, messages]) => {
      const nextMessages = Array.isArray(messages) ? messages : [];
      nextMessages.forEach((message) => {
        if (normalizeName(message?.from) === oldKey) message.from = newName;
        if (normalizeName(message?.to) === oldKey) message.to = newName;
      });
      const nextThreadKey = threadKey
        .split("::")
        .map((key) => (key === oldKey ? newKey : key))
        .sort()
        .join("::");
      if (!nextPrivateThreads[nextThreadKey]) nextPrivateThreads[nextThreadKey] = [];
      nextPrivateThreads[nextThreadKey].push(...nextMessages);
    });
    Object.values(nextPrivateThreads).forEach((messages) => {
      messages.sort((a, b) => Number(a?.ts || 0) - Number(b?.ts || 0));
      if (messages.length > 300) messages.splice(0, messages.length - 300);
    });
    session.chat.private = nextPrivateThreads;
  }

  const pairing = ensurePairingState(session);
  pairing.invites.forEach((invite) => {
    if (normalizeName(invite.from) === oldKey) invite.from = newName;
    if (normalizeName(invite.to) === oldKey) invite.to = newName;
  });
  pairing.pairs.forEach((pair) => {
    pair.members = (pair.members || []).map((name) => normalizeName(name) === oldKey ? newName : name);
    if (normalizeName(pair.driver) === oldKey) pair.driver = newName;
    if (normalizeName(pair.navigator) === oldKey) pair.navigator = newName;
    if (pair.pendingSwitch) {
      if (normalizeName(pair.pendingSwitch.from) === oldKey) pair.pendingSwitch.from = newName;
      if (normalizeName(pair.pendingSwitch.to) === oldKey) pair.pendingSwitch.to = newName;
    }
    (pair.chat || []).forEach((message) => {
      if (normalizeName(message.from) === oldKey) message.from = newName;
    });
    (pair.suggestions || []).forEach((suggestion) => {
      if (normalizeName(suggestion.from) === oldKey) suggestion.from = newName;
    });
    (pair.tasks || []).forEach((task) => {
      if (normalizeName(task.createdBy) === oldKey) task.createdBy = newName;
    });
  });

  const meta = socketMeta.get(participant.socketId);
  if (meta) socketMeta.set(participant.socketId, { ...meta, name: newName });
}

function makePrivateThreadKey(a, b) {
  const left = normalizeName(a);
  const right = normalizeName(b);
  return left < right ? `${left}::${right}` : `${right}::${left}`;
}

function canUseSession(sessionId, socketId) {
  const session = sessions.get(sessionId);
  if (!session) return null;
  const member = session.participants.find((p) => p.socketId === socketId);
  return member ? { session, member } : null;
}

function canUseLimitedRoomTools(session, socketId) {
  const member = session?.participants?.find((p) => p.socketId === socketId);
  if (!member) return null;
  const role = String(member.role || "participant");
  if (role !== "host" && role !== "co-host") return null;
  return member;
}

function canModerateTarget(session, socketId, target) {
  const actor = canUseLimitedRoomTools(session, socketId);
  if (!actor || !target) return null;
  const actorRole = String(actor.role || "participant");
  const targetRole = String(target.role || "participant");
  if (targetRole === "host") return null;
  if (actorRole === "co-host" && targetRole !== "participant") return null;
  return actor;
}

function getChatPayloadForUser(session, userName) {
  const userKey = normalizeName(userName);
  const privateMessages = [];
  const chatState = session.chat || { group: [], private: {} };
  Object.entries(chatState.private || {}).forEach(([threadKey, messages]) => {
    if (threadKey.includes(userKey)) {
      privateMessages.push(...messages);
    }
  });
  privateMessages.sort((a, b) => a.ts - b.ts);
  return {
    groupMessages: chatState.group || [],
    privateMessages,
  };
}

function normalizePermissions(input, files) {
  const allNames = new Set((files || []).map((f) => String(f?.name || "")));
  const raw = input || {};
  const selected = Array.isArray(raw.selectedFiles) ? raw.selectedFiles : [];
  const selectedFiles = Array.from(
    new Set(
      selected
        .map((name) => String(name || "").trim())
        .filter((name) => name && allNames.has(name)),
    ),
  );

  return {
    disableGroupChat: Boolean(raw.disableGroupChat),
    disableAllChat: Boolean(raw.disableAllChat),
    manageSelectedFiles: Boolean(raw.manageSelectedFiles),
    selectedFiles,
    disableSaveProject: Boolean(raw.disableSaveProject),
    disableOpenSavedProjects: Boolean(raw.disableOpenSavedProjects),
    disableTemplates: Boolean(raw.disableTemplates),
    disablePublishShare: Boolean(raw.disablePublishShare),
    disableExportZip: Boolean(raw.disableExportZip),
    disableImportZip: Boolean(raw.disableImportZip),
    disableNewFile: Boolean(raw.disableNewFile),
    disableRunCode: Boolean(raw.disableRunCode),
    disableConsoleAccess: Boolean(raw.disableConsoleAccess),
    disablePairing: Boolean(raw.disablePairing),
    readOnlyAll: Boolean(raw.readOnlyAll),
    roomLocked: Boolean(raw.roomLocked),
    pauseCollab: Boolean(raw.pauseCollab),
    quietMode: Boolean(raw.quietMode),
    requireJoinApproval: Boolean(raw.requireJoinApproval),
    pinnedFile:
      raw.pinnedFile && allNames.has(String(raw.pinnedFile || "").trim())
        ? String(raw.pinnedFile || "").trim()
        : "",
    groupHighlightFile:
      raw.groupHighlightFile && allNames.has(String(raw.groupHighlightFile || "").trim())
        ? String(raw.groupHighlightFile || "").trim()
        : "",
    announcementBar: String(raw.announcementBar || "").trim().slice(0, 220),
    sessionEndsAt:
      Number(raw.sessionEndsAt) > Date.now()
        ? Number(raw.sessionEndsAt)
        : null,
  };
}

function normalizeAllowedFiles(files, input) {
  const allNames = new Set((files || []).map((f) => String(f?.name || "")));
  if (!Array.isArray(input)) return null;
  return Array.from(
    new Set(
      input
        .map((name) => String(name || "").trim())
        .filter((name) => name && allNames.has(name)),
    ),
  );
}

function getStoredParticipantFileAccess(session, name) {
  const stored = session?.fileAccessByName?.[normalizeName(name)];
  return Array.isArray(stored) ? normalizeAllowedFiles(session.files, stored) : null;
}

function storeParticipantFileAccess(session, participant) {
  if (!session || !participant) return;
  if (!session.fileAccessByName) session.fileAccessByName = {};
  const key = normalizeName(participant.name);
  if (!key) return;
  if (Array.isArray(participant.allowedFiles)) {
    session.fileAccessByName[key] = [...participant.allowedFiles];
  } else {
    delete session.fileAccessByName[key];
  }
}

function getFilesForParticipant(session, participant) {
  const files = cloneFiles(session?.files || []);
  if (!participant || !Array.isArray(participant.allowedFiles)) return files;
  const allowed = new Set(participant.allowedFiles);
  return files.filter((file) => allowed.has(String(file?.name || "")));
}

function getActiveFileForParticipant(session, participant) {
  const visibleFiles = getFilesForParticipant(session, participant);
  const requested = String(participant?.currentFile || session?.activeFileName || "");
  return visibleFiles.some((file) => String(file?.name || "") === requested)
    ? requested
    : String(visibleFiles[0]?.name || "") || null;
}

function emitSessionStateToParticipant(session, participant, user = null) {
  if (!session || !participant?.socketId) return;
  io.to(participant.socketId).emit("collab:state", {
    files: getFilesForParticipant(session, participant),
    activeFileName: getActiveFileForParticipant(session, participant),
    user,
  });
}

function emitSessionStateToRoom(session, sourceSocketId = "", user = null) {
  (session?.participants || []).forEach((participant) => {
    if (participant.socketId === sourceSocketId) return;
    emitSessionStateToParticipant(session, participant, user);
  });
}

function mergeFilesFromRestrictedParticipant(sessionFiles, incomingFiles, allowedFiles) {
  const allowed = new Set(allowedFiles || []);
  const incomingMap = new Map(
    (incomingFiles || [])
      .filter((file) => allowed.has(String(file?.name || "")))
      .map((file) => [String(file?.name || ""), file]),
  );
  const previousNames = new Set((sessionFiles || []).map((file) => String(file?.name || "")));
  const merged = (sessionFiles || []).flatMap((file) => {
    const name = String(file?.name || "");
    if (!allowed.has(name)) return [file];
    return incomingMap.has(name) ? [incomingMap.get(name)] : [];
  });
  (incomingFiles || []).forEach((file) => {
    const name = String(file?.name || "");
    if (allowed.has(name) && !previousNames.has(name)) merged.push(file);
  });
  return merged;
}

function rebaseParticipantFileAccess(participant, previousFiles, nextFiles) {
  if (!Array.isArray(participant?.allowedFiles)) return;
  const previousNames = (previousFiles || []).map((file) => String(file?.name || ""));
  const previouslyAllowed = new Set(participant.allowedFiles);
  const hiddenNames = new Set(previousNames.filter((name) => !previouslyAllowed.has(name)));
  const nextNames = (nextFiles || []).map((file) => String(file?.name || ""));
  const nextAllowed = nextNames.filter((name) => !hiddenNames.has(name));
  participant.allowedFiles = nextAllowed.length === nextNames.length ? null : nextAllowed;
}

function getChangedFileNames(previousFiles, nextFiles) {
  const prevMap = new Map((previousFiles || []).map((file) => [String(file?.name || ""), String(file?.content || "")]));
  const nextMap = new Map((nextFiles || []).map((file) => [String(file?.name || ""), String(file?.content || "")]));
  const names = new Set([...prevMap.keys(), ...nextMap.keys()]);
  return Array.from(names).filter((name) => prevMap.get(name) !== nextMap.get(name));
}

function emitParticipants(sessionId) {
  const session = sessions.get(sessionId);
  if (!session) return;
  io.to(sessionId).emit(
    "collab:participants",
    session.participants.map(sanitizeParticipant),
  );
  emitAdminUpdate("participants");
}

function emitSessionMeta(sessionId) {
  const session = sessions.get(sessionId);
  if (!session) return;
  io.to(sessionId).emit("collab:meta", {
    sessionId,
    hostName: session.hostName,
    permissions: session.permissions,
    pendingJoins: (session.pendingJoins || []).map((entry) => ({
      socketId: entry.socketId,
      name: entry.name,
      theme: entry.theme,
      requestedAt: entry.requestedAt,
    })),
    bans: (session.bans || []).map(sanitizeBanEntry),
    sessionPin: session.pin || "",
    shareLink: buildShareLink(session.baseUrl || "", sessionId),
  });
  emitAdminUpdate("meta");
}

function endSession(sessionId, reason = "Session ended.") {
  const session = sessions.get(sessionId);
  if (!session) return;
  ensurePairingState(session).pairs.forEach(clearPairTimers);
  io.to(sessionId).emit("collab:session-ended", { reason });
  (session.participants || []).forEach((participant) => {
    const socketRef = io.sockets.sockets.get(participant.socketId);
    if (socketRef) {
      socketRef.leave(sessionId);
    }
    socketMeta.delete(participant.socketId);
  });
  (session.pendingJoins || []).forEach((entry) => {
    const socketRef = io.sockets.sockets.get(entry.socketId);
    if (socketRef) {
      socketRef.leave(sessionId);
    }
    socketMeta.delete(entry.socketId);
    io.to(entry.socketId).emit("collab:join-rejected", { reason });
  });
  endedSessions.set(sessionId, Date.now() + ENDED_SESSION_TOMBSTONE_MS);
  sessions.delete(sessionId);
  emitAdminUpdate("session-ended");
}

function finalizeApprovedJoin(sessionId, socketId, name, theme) {
  const session = sessions.get(sessionId);
  if (!session) return false;
  const meta = socketMeta.get(socketId) || {};
  const deviceId = String(meta.deviceId || "").trim();
  const cursorStyle = normalizeCollabCursorStyle(meta.cursorStyle);
  if (deviceId && Array.isArray(session.bans) && session.bans.some((entry) => entry.deviceId === deviceId)) {
    io.to(socketId).emit("collab:join-rejected", { reason: "This device is banned from the session." });
    return false;
  }
  if (session.participants.some((p) => p.name.toLowerCase() === String(name || "").trim().toLowerCase())) {
    return false;
  }
  session.participants.push({
    socketId,
    name,
    theme,
    cursorStyle,
    role: "participant",
    mutedChat: false,
    frozenEditing: false,
    renameDisabled: false,
    priority: false,
    currentFile: session.activeFileName || null,
    joinedAt: Date.now(),
    allowedFiles: getStoredParticipantFileAccess(session, name),
    disabledFeatures: [],
    deviceId,
  });
  const socketRef = io.sockets.sockets.get(socketId);
  if (socketRef) socketRef.join(sessionId);
  socketMeta.set(socketId, { sessionId, name, theme, cursorStyle, deviceId });
  io.to(socketId).emit("collab:join-approved", {
    ok: true,
    sessionId,
    sessionPin: session.pin || "",
    files: getFilesForParticipant(session, session.participants.at(-1)),
    activeFileName: getActiveFileForParticipant(session, session.participants.at(-1)),
    hostName: session.hostName,
    permissions: session.permissions,
    participants: session.participants.map(sanitizeParticipant),
    shareLink: buildShareLink(session.baseUrl || "", sessionId),
  });
  logAdminEvent("Join approved", `${name} was approved for session ${sessionId}.`, sessionId);
  emitParticipants(sessionId);
  emitSessionMeta(sessionId);
  emitPairingState(sessionId);
  return true;
}

io.on("connection", (socket) => {
  socket.on("editor:presence", () => {
    if (!editorPresenceSockets.has(socket.id)) {
      editorPresenceSockets.add(socket.id);
      emitAdminUpdate("editor-presence");
    }
  });

  socket.on("collab:heartbeat", (payload, ack) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const access = canUseSession(sessionId, socket.id);
    if (!access) {
      ack?.({ ok: false, needsResume: Boolean(sessions.has(sessionId)), serverTime: Date.now() });
      return;
    }
    access.member.lastSeenAt = Date.now();
    ack?.({ ok: true, serverTime: Date.now() });
  });

  socket.on("collab:create", (payload, ack) => {
    try {
      const requestedId = normalizeSessionId(payload?.sessionId);
      const sessionId = requestedId || generateSessionId();
      const name = String(payload?.name || "").trim();
      const theme = String(payload?.theme || "#4CAF50");
      const cursorStyle = normalizeCollabCursorStyle(payload?.cursorStyle);
      const files = cloneFiles(payload?.files);
      const activeFileName = payload?.activeFileName || null;
      const baseUrl = String(payload?.baseUrl || "");
      const deviceId = String(payload?.deviceId || "").trim();
      const pin = generateSessionPin();

      if (!isValidSessionId(sessionId)) {
        ack?.({ ok: false, error: "Invalid session id." });
        return;
      }
      if (requestedId && isRecentlyEndedSession(sessionId)) {
        ack?.({ ok: false, error: "This collaboration session was ended." });
        return;
      }
      if (!name) {
        ack?.({ ok: false, error: "Name is required." });
        return;
      }
      if (sessions.has(sessionId)) {
        ack?.({ ok: false, error: "Session already exists." });
        return;
      }

      const participants = [{
        socketId: socket.id,
        name,
        theme,
        cursorStyle,
        role: "host",
        mutedChat: false,
        frozenEditing: false,
        renameDisabled: false,
        priority: false,
        currentFile: activeFileName || null,
        joinedAt: Date.now(),
        allowedFiles: null,
        disabledFeatures: [],
        deviceId,
      }];
      sessions.set(sessionId, {
        files,
        activeFileName,
        participants,
        hostSocketId: socket.id,
        hostName: name,
        hostDeviceId: deviceId,
        pin,
        baseUrl,
        permissions: normalizePermissions(payload?.permissions, files),
        chat: { group: [], private: {} },
        pendingJoins: [],
        bans: [],
        fileAccessByName: {},
        pairing: { invites: [], pairs: [], inviteCooldowns: {} },
      });

      socket.join(sessionId);
      socketMeta.set(socket.id, { sessionId, name, theme, cursorStyle, deviceId });
      ack?.({
        ok: true,
        sessionId,
        sessionPin: pin,
        shareLink: buildShareLink(baseUrl, sessionId),
        hostName: name,
        permissions: sessions.get(sessionId).permissions,
        participants: participants.map(sanitizeParticipant),
      });
      logAdminEvent("Session created", `${name} created session ${sessionId}.`, sessionId);
      emitParticipants(sessionId);
      emitSessionMeta(sessionId);
      emitPairingState(sessionId);
    } catch {
      ack?.({ ok: false, error: "Failed to create session." });
    }
  });

  socket.on("collab:join", (payload, ack) => {
    try {
      const requestedSessionId = normalizeSessionId(payload?.sessionId);
      const sessionId = sessions.has(requestedSessionId)
        ? requestedSessionId
        : findSessionIdByPin(requestedSessionId);
      const name = String(payload?.name || "").trim();
      const theme = String(payload?.theme || "#2196F3");
      const cursorStyle = normalizeCollabCursorStyle(payload?.cursorStyle);
      const deviceId = String(payload?.deviceId || "").trim();

      const session = sessions.get(sessionId);
      if (!session) {
        ack?.({ ok: false, error: isRecentlyEndedSession(requestedSessionId) ? "This collaboration session was ended." : "Session not found." });
        return;
      }
      if (!name) {
        ack?.({ ok: false, error: "Name is required." });
        return;
      }
      if (deviceId && Array.isArray(session.bans) && session.bans.some((entry) => entry.deviceId === deviceId)) {
        ack?.({ ok: false, error: "This device is banned from the session." });
        return;
      }
      const roomIsEmpty = session.participants.length === 0;
      const hostDeviceId = String(session.hostDeviceId || "").trim();
      const matchesStoredHostDevice = Boolean(deviceId && hostDeviceId && deviceId === hostDeviceId);
      const matchesLegacyHostName = Boolean(
        !hostDeviceId && session.hostName && normalizeName(session.hostName) === normalizeName(name),
      );
      const reclaimingHost = roomIsEmpty && (matchesStoredHostDevice || matchesLegacyHostName);
      if (roomIsEmpty && hostDeviceId && !reclaimingHost) {
        ack?.({ ok: false, error: "The original host must return before this empty session can continue." });
        return;
      }
      const reconnectingPair = findPairForName(session, name);
      const reconnectKey = normalizeName(name);
      const reconnectDeviceId = String(reconnectingPair?._reconnectDevices?.[reconnectKey] || "").trim();
      if (reconnectDeviceId && reconnectDeviceId !== deviceId) {
        ack?.({ ok: false, error: "Pair reconnection must come from the original device." });
        return;
      }
      if (session.permissions?.roomLocked && !reclaimingHost) {
        ack?.({ ok: false, error: "Room is locked." });
        return;
      }
      const joinedName = reclaimingHost ? String(session.hostName || name).trim() : name;
      const taken = session.participants.some(
        (p) => p.name.toLowerCase() === joinedName.toLowerCase(),
      );
      if (taken) {
        ack?.({ ok: false, error: "Name already taken." });
        return;
      }
      const colorTaken = session.participants.some(
        (p) => String(p.theme || "").trim().toLowerCase() === theme.trim().toLowerCase(),
      );
      if (colorTaken) {
        ack?.({ ok: false, error: "Color already taken." });
        return;
      }
      if (session.permissions?.requireJoinApproval && !reclaimingHost) {
        const alreadyPending = (session.pendingJoins || []).some(
          (entry) => entry.name.toLowerCase() === name.toLowerCase(),
        );
        if (alreadyPending) {
          ack?.({ ok: false, error: "Join request already pending." });
          return;
        }
        session.pendingJoins.push({
          socketId: socket.id,
          name,
          theme,
          cursorStyle,
          requestedAt: Date.now(),
          deviceId,
        });
        socketMeta.set(socket.id, { sessionId, name, theme, cursorStyle, deviceId });
        logAdminEvent("Join approval requested", `${name} requested access to session ${sessionId}.`, sessionId);
        emitSessionMeta(sessionId);
        ack?.({
          ok: false,
          pending: true,
          sessionId,
          hostName: session.hostName || "",
          error: "Waiting for host approval.",
        });
        return;
      }

      const joinedParticipant = {
        socketId: socket.id,
        name: joinedName,
        theme,
        cursorStyle,
        role: reclaimingHost ? "host" : "participant",
        mutedChat: false,
        frozenEditing: false,
        renameDisabled: false,
        priority: false,
        currentFile: session.activeFileName || null,
        joinedAt: Date.now(),
        allowedFiles: getStoredParticipantFileAccess(session, joinedName),
        disabledFeatures: [],
        deviceId,
      };
      session.participants.push(joinedParticipant);
      if (reclaimingHost) {
        session.hostSocketId = socket.id;
        session.hostName = joinedName;
        session.hostDeviceId = deviceId || hostDeviceId;
        session.lastEmptyAt = null;
      }
      socket.join(sessionId);
      socketMeta.set(socket.id, { sessionId, name: joinedName, theme, cursorStyle, deviceId });

      ack?.({
        ok: true,
        sessionId,
        sessionPin: session.pin || "",
        files: getFilesForParticipant(session, joinedParticipant),
        activeFileName: getActiveFileForParticipant(session, joinedParticipant),
        hostName: session.hostName,
        permissions: session.permissions,
        participants: session.participants.map(sanitizeParticipant),
        shareLink: buildShareLink(session.baseUrl || "", sessionId),
        name: joinedName,
        role: joinedParticipant.role,
        reclaimedHost: reclaimingHost,
      });
      logAdminEvent(
        reclaimingHost ? "Host reclaimed" : "Participant joined",
        `${joinedName} ${reclaimingHost ? "reclaimed host access to" : "joined"} session ${sessionId}.`,
        sessionId,
      );
      emitParticipants(sessionId);
      emitSessionMeta(sessionId);
      emitPairingState(sessionId);
    } catch {
      ack?.({ ok: false, error: "Failed to join session." });
    }
  });

  socket.on("collab:palette", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const session = sessions.get(sessionId);
      if (!session) {
        ack?.({ ok: false, error: isRecentlyEndedSession(sessionId) ? "This collaboration session was ended." : "Session not found." });
        return;
      }
      ack?.({
        ok: true,
        participants: session.participants.map(sanitizeParticipant),
      });
    } catch {
      ack?.({ ok: false, error: "Failed to load participant colors." });
    }
  });

  socket.on("collab:resume", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const name = String(payload?.name || "").trim();
      const theme = String(payload?.theme || "#2196F3");
      const cursorStyle = normalizeCollabCursorStyle(payload?.cursorStyle);
      const deviceId = String(payload?.deviceId || "").trim();

      const session = sessions.get(sessionId);
      if (!session) {
        ack?.({ ok: false, error: isRecentlyEndedSession(sessionId) ? "This collaboration session was ended." : "Session not found." });
        return;
      }
      if (!name) {
        ack?.({ ok: false, error: "Name is required." });
        return;
      }
      if (deviceId && Array.isArray(session.bans) && session.bans.some((entry) => entry.deviceId === deviceId)) {
        ack?.({ ok: false, error: "This device is banned from the session." });
        return;
      }
      const resumingStoredHost = Boolean(
        session.hostName && normalizeName(session.hostName) === normalizeName(name),
      );
      const storedHostDeviceId = String(session.hostDeviceId || "").trim();
      if (resumingStoredHost && storedHostDeviceId && storedHostDeviceId !== deviceId) {
        ack?.({ ok: false, error: "Host reconnection must come from the original host device." });
        return;
      }
      const reconnectingPair = findPairForName(session, name);
      const reconnectKey = normalizeName(name);
      const reconnectDeviceId = String(reconnectingPair?._reconnectDevices?.[reconnectKey] || "").trim();
      if (reconnectDeviceId && reconnectDeviceId !== deviceId) {
        ack?.({ ok: false, error: "Pair reconnection must come from the original device." });
        return;
      }

      let participant = session.participants.find(
        (p) => p.name.toLowerCase() === name.toLowerCase(),
      );

      if (participant) {
        participant.socketId = socket.id;
        participant.theme = theme || participant.theme;
        participant.cursorStyle = cursorStyle || participant.cursorStyle;
        participant.deviceId = deviceId || participant.deviceId || "";
      } else {
        participant = {
          socketId: socket.id,
          name,
          theme,
          cursorStyle,
          role: "participant",
          mutedChat: false,
          frozenEditing: false,
          renameDisabled: false,
          priority: false,
          currentFile: session.activeFileName || null,
          joinedAt: Date.now(),
          allowedFiles: getStoredParticipantFileAccess(session, name),
          disabledFeatures: [],
          deviceId,
        };
        session.participants.push(participant);
      }

      if (session.hostName && session.hostName.toLowerCase() === name.toLowerCase()) {
        session.hostSocketId = socket.id;
        session.hostDeviceId = deviceId || session.hostDeviceId || "";
        participant.role = "host";
      }

      const resumedPair = findPairForName(session, participant.name);
      if (resumedPair) {
        const key = normalizeName(participant.name);
        if (resumedPair._reconnectDevices) delete resumedPair._reconnectDevices[key];
        if (resumedPair._disconnectTimers?.[key]) {
          clearTimeout(resumedPair._disconnectTimers[key]);
          delete resumedPair._disconnectTimers[key];
        }
        const connectedNames = new Set(session.participants.map((entry) => normalizeName(entry.name)));
        resumedPair.connectionPaused = !resumedPair.members.every((memberName) => connectedNames.has(normalizeName(memberName)));
        if (!resumedPair.connectionPaused) {
          recordPairActivity(resumedPair, `${participant.name} reconnected to the pair.`, "reconnect");
        }
      }

      socket.join(sessionId);
      socketMeta.set(socket.id, {
        sessionId,
        name: participant.name,
        theme: participant.theme,
        cursorStyle: normalizeCollabCursorStyle(participant.cursorStyle),
        deviceId: participant.deviceId || deviceId,
      });

      ack?.({
        ok: true,
        files: getFilesForParticipant(session, participant),
        activeFileName: getActiveFileForParticipant(session, participant),
        hostName: session.hostName,
        permissions: session.permissions,
        participants: session.participants.map(sanitizeParticipant),
      });
      emitParticipants(sessionId);
      emitSessionMeta(sessionId);
      emitPairingState(sessionId);
    } catch {
      ack?.({ ok: false, error: "Failed to resume session." });
    }
  });

  socket.on("collab:chat:history", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const access = canUseSession(sessionId, socket.id);
      if (!access) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }
      ack?.({
        ok: true,
        ...getChatPayloadForUser(access.session, access.member.name),
      });
    } catch {
      ack?.({ ok: false, error: "Failed to load chat history." });
    }
  });

  socket.on("collab:chat:send", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const access = canUseSession(sessionId, socket.id);
      if (!access) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }
      const { session, member } = access;
      if (!session.chat) session.chat = { group: [], private: {} };
      const mode = String(payload?.mode || "group").trim().toLowerCase();
      const text = String(payload?.text || "").trim();
      if (!text) {
        ack?.({ ok: false, error: "Message cannot be empty." });
        return;
      }
      if (text.length > 500) {
        ack?.({ ok: false, error: "Message too long (max 500 chars)." });
        return;
      }

      const message = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        mode,
        from: member.name,
        fromTheme: member.theme || "#4CAF50",
        text,
        ts: Date.now(),
      };

      if (mode === "group") {
        if (session.permissions?.disableGroupChat) {
          ack?.({ ok: false, error: "Group chat is disabled by host." });
          return;
        }
        if (session.permissions?.disableAllChat) {
          ack?.({ ok: false, error: "Chat is disabled for the group." });
          return;
        }
        if (member.mutedChat) {
          ack?.({ ok: false, error: "The host muted your chat access." });
          return;
        }
        session.chat.group.push(message);
        if (session.chat.group.length > 300) session.chat.group.shift();
        io.to(sessionId).emit("collab:chat:group", message);
        ack?.({ ok: true });
        return;
      }

      if (mode !== "private") {
        ack?.({ ok: false, error: "Invalid chat mode." });
        return;
      }
      if (session.permissions?.disableAllChat) {
        ack?.({ ok: false, error: "Chat is disabled for the group." });
        return;
      }
      if (member.mutedChat) {
        ack?.({ ok: false, error: "The host muted your chat access." });
        return;
      }

      const toName = String(payload?.toName || "").trim();
      const target = session.participants.find(
        (p) => normalizeName(p.name) === normalizeName(toName),
      );
      if (!target) {
        ack?.({ ok: false, error: "Participant not found." });
        return;
      }
      if (target.socketId === socket.id) {
        ack?.({ ok: false, error: "Choose another participant for private chat." });
        return;
      }

      message.to = target.name;
      const threadKey = makePrivateThreadKey(member.name, target.name);
      if (!session.chat.private[threadKey]) session.chat.private[threadKey] = [];
      session.chat.private[threadKey].push(message);
      if (session.chat.private[threadKey].length > 300) {
        session.chat.private[threadKey].shift();
      }

      io.to(target.socketId).emit("collab:chat:private", message);
      io.to(socket.id).emit("collab:chat:private", message);
      ack?.({ ok: true });
    } catch {
      ack?.({ ok: false, error: "Failed to send message." });
    }
  });

  socket.on("collab:pair:get", (payload, ack) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const access = canUseSession(sessionId, socket.id);
    if (!access) return ack?.({ ok: false, error: "Session not found." });
    const pair = findPairForName(access.session, access.member.name);
    ack?.({
      ok: true,
      pair: pair ? sanitizePairForMembers(access.session, pair) : null,
      overview: ensurePairingState(access.session).pairs.map((entry) => sanitizePairOverview(access.session, entry)),
    });
  });

  socket.on("collab:pair:invite", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const access = canUseSession(sessionId, socket.id);
      if (!access) return ack?.({ ok: false, error: "Session not found." });
      const { session, member } = access;
      const pairing = ensurePairingState(session);
      const disabledFeatures = new Set(member.disabledFeatures || []);
      if (session.permissions?.disablePairing || disabledFeatures.has("pairing")) {
        return ack?.({ ok: false, error: "Pairing is disabled for you in this room." });
      }
      if (member.mutedChat) return ack?.({ ok: false, error: "Muted participants cannot send pair invitations." });
      const targetName = normalizeName(payload?.targetName);
      const target = session.participants.find((participant) => normalizeName(participant.name) === targetName);
      if (!target || target.socketId === socket.id) {
        return ack?.({ ok: false, error: "Choose another participant to pair with." });
      }
      if ((target.disabledFeatures || []).includes("pairing")) {
        return ack?.({ ok: false, error: "Pairing is unavailable for that participant." });
      }
      if (findPairForName(session, member.name) || findPairForName(session, target.name)) {
        return ack?.({ ok: false, error: "One of you is already in a pair." });
      }
      const cooldownKey = `${normalizeName(member.name)}::${normalizeName(target.name)}`;
      const lastInviteAt = Number(pairing.inviteCooldowns[cooldownKey] || 0);
      if (Date.now() - lastInviteAt < 5000) {
        return ack?.({ ok: false, error: "Wait a moment before sending another pair invitation." });
      }
      pairing.inviteCooldowns[cooldownKey] = Date.now();
      pairing.invites = pairing.invites.filter(
        (invite) => !(
          normalizeName(invite.from) === normalizeName(member.name) &&
          normalizeName(invite.to) === normalizeName(target.name)
        ),
      );
      const mode = String(payload?.mode || "driver").toLowerCase() === "live" ? "live" : "driver";
      const invite = {
        id: crypto.randomBytes(8).toString("hex"),
        from: member.name,
        to: target.name,
        mode,
        ts: Date.now(),
        expiresAt: Date.now() + 30000,
      };
      pairing.invites.push(invite);
      io.to(target.socketId).emit("collab:pair:invitation", invite);
      ack?.({ ok: true, inviteId: invite.id });
    } catch {
      ack?.({ ok: false, error: "Failed to send pair invitation." });
    }
  });

  socket.on("collab:pair:respond", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const access = canUseSession(sessionId, socket.id);
      if (!access) return ack?.({ ok: false, error: "Session not found." });
      const { session, member } = access;
      const pairing = ensurePairingState(session);
      const invite = pairing.invites.find(
        (entry) => entry.id === String(payload?.inviteId || "") && normalizeName(entry.to) === normalizeName(member.name),
      );
      if (!invite || Number(invite.expiresAt) <= Date.now()) {
        return ack?.({ ok: false, error: "This pair invitation expired." });
      }
      pairing.invites = pairing.invites.filter((entry) => entry.id !== invite.id);
      const sender = session.participants.find((participant) => normalizeName(participant.name) === normalizeName(invite.from));
      if (!payload?.accept) {
        if (sender) io.to(sender.socketId).emit("collab:pair:invitation-response", { accepted: false, by: member.name });
        return ack?.({ ok: true, accepted: false });
      }
      if (
        session.permissions?.disablePairing ||
        !sender ||
        (member.disabledFeatures || []).includes("pairing") ||
        (sender.disabledFeatures || []).includes("pairing")
      ) {
        return ack?.({ ok: false, error: "Pairing is no longer available." });
      }
      if (findPairForName(session, sender.name) || findPairForName(session, member.name)) {
        return ack?.({ ok: false, error: "One of you joined another pair." });
      }
      const pair = {
        id: `pair-${crypto.randomBytes(6).toString("hex")}`,
        members: [sender.name, member.name],
        driver: sender.name,
        navigator: member.name,
        mode: invite.mode,
        status: "active",
        connectionPaused: false,
        createdAt: Date.now(),
        helpRequested: false,
        pendingSwitch: null,
        chat: [],
        suggestions: [],
        tasks: [],
        activity: [],
        _disconnectTimers: {},
        _reconnectDevices: {},
        _presenceByName: {},
      };
      recordPairActivity(pair, `${sender.name} and ${member.name} started pairing.`, "start");
      pairing.pairs.push(pair);
      io.to(sender.socketId).emit("collab:pair:invitation-response", { accepted: true, by: member.name });
      emitPairingState(sessionId);
      ack?.({ ok: true, accepted: true, pair: sanitizePairForMembers(session, pair) });
    } catch {
      ack?.({ ok: false, error: "Failed to answer pair invitation." });
    }
  });

  socket.on("collab:pair:leave", (payload, ack) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const access = getPairAccess(sessionId, socket.id);
    if (!access) return ack?.({ ok: false, error: "You are not in a pair." });
    endPairInternal(sessionId, access.pair, `${access.member.name} left the pair.`, access.member.name);
    ack?.({ ok: true });
  });

  socket.on("collab:pair:end", (payload, ack) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const session = sessions.get(sessionId);
    if (!session) return ack?.({ ok: false, error: "Session not found." });
    const actor = session.participants.find((participant) => participant.socketId === socket.id);
    const pair = ensurePairingState(session).pairs.find((entry) => entry.id === String(payload?.pairId || ""));
    if (!actor || !pair) return ack?.({ ok: false, error: "Pair not found." });
    const isMember = pair.members.some((name) => normalizeName(name) === normalizeName(actor.name));
    if (!isMember && !canUseLimitedRoomTools(session, socket.id)) {
      return ack?.({ ok: false, error: "You cannot end this pair." });
    }
    endPairInternal(sessionId, pair, `${actor.name} ended the pair.`, actor.name);
    ack?.({ ok: true });
  });

  socket.on("collab:pair:set-mode", (payload, ack) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const access = getPairAccess(sessionId, socket.id);
    if (!access) return ack?.({ ok: false, error: "You are not in a pair." });
    const mode = String(payload?.mode || "").toLowerCase();
    if (!["driver", "live"].includes(mode)) return ack?.({ ok: false, error: "Invalid pair mode." });
    access.pair.mode = mode;
    access.pair.pendingSwitch = null;
    recordPairActivity(access.pair, `${access.member.name} changed pair mode to ${mode === "live" ? "Live Pair" : "Driver"}.`, "mode");
    emitPairingState(sessionId);
    ack?.({ ok: true });
  });

  socket.on("collab:pair:switch-request", (payload, ack) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const access = getPairAccess(sessionId, socket.id);
    if (!access) return ack?.({ ok: false, error: "You are not in a pair." });
    const partnerName = findPairPartnerName(access.pair, access.member.name);
    const partner = access.session.participants.find((participant) => normalizeName(participant.name) === normalizeName(partnerName));
    if (!partner) return ack?.({ ok: false, error: "Your partner is disconnected." });
    access.pair.pendingSwitch = { from: access.member.name, to: partner.name, ts: Date.now() };
    io.to(partner.socketId).emit("collab:pair:switch-request", { from: access.member.name });
    emitPairingState(sessionId);
    ack?.({ ok: true });
  });

  socket.on("collab:pair:switch-response", (payload, ack) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const access = getPairAccess(sessionId, socket.id);
    if (!access || normalizeName(access.pair.pendingSwitch?.to) !== normalizeName(access.member.name)) {
      return ack?.({ ok: false, error: "No role switch is waiting for you." });
    }
    const requestedBy = access.pair.pendingSwitch.from;
    access.pair.pendingSwitch = null;
    if (payload?.accept) {
      const previousDriver = access.pair.driver;
      access.pair.driver = access.pair.navigator;
      access.pair.navigator = previousDriver;
      recordPairActivity(access.pair, `${access.member.name} accepted ${requestedBy}'s role switch.`, "role");
    }
    emitPairingState(sessionId);
    ack?.({ ok: true, accepted: Boolean(payload?.accept) });
  });

  socket.on("collab:pair:chat", (payload, ack) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const access = getPairAccess(sessionId, socket.id);
    if (!access) return ack?.({ ok: false, error: "You are not in a pair." });
    if (access.session.permissions?.disableAllChat || access.member.mutedChat || (access.member.disabledFeatures || []).includes("chat")) {
      return ack?.({ ok: false, error: "Chat is disabled for you." });
    }
    const text = String(payload?.text || "").trim().slice(0, 1000);
    if (!text) return ack?.({ ok: false, error: "Message is empty." });
    const message = { id: crypto.randomBytes(7).toString("hex"), from: access.member.name, text, ts: Date.now() };
    access.pair.chat.push(message);
    if (access.pair.chat.length > 200) access.pair.chat.shift();
    (access.pair.members || []).forEach((name) => {
      const participant = access.session.participants.find((entry) => normalizeName(entry.name) === normalizeName(name));
      if (participant) io.to(participant.socketId).emit("collab:pair:chat", message);
    });
    ack?.({ ok: true });
  });

  socket.on("collab:pair:suggestion:add", (payload, ack) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const access = getPairAccess(sessionId, socket.id);
    if (!access) return ack?.({ ok: false, error: "You are not in a pair." });
    const fileName = String(payload?.fileName || access.member.currentFile || "").trim();
    if (!access.session.files.some((file) => file.name === fileName)) {
      return ack?.({ ok: false, error: "File not found." });
    }
    const suggestion = {
      id: crypto.randomBytes(8).toString("hex"),
      from: access.member.name,
      fileName,
      start: Math.max(0, Number(payload?.start || 0)),
      end: Math.max(0, Number(payload?.end || 0)),
      original: String(payload?.original || "").slice(0, 8000),
      replacement: String(payload?.replacement || "").slice(0, 8000),
      comment: String(payload?.comment || "").trim().slice(0, 800),
      status: "open",
      ts: Date.now(),
    };
    access.pair.suggestions.push(suggestion);
    if (access.pair.suggestions.length > 100) access.pair.suggestions.shift();
    recordPairActivity(access.pair, `${access.member.name} added a suggestion in ${fileName}.`, "suggestion");
    emitPairingState(sessionId);
    ack?.({ ok: true, suggestion });
  });

  socket.on("collab:pair:suggestion:update", (payload, ack) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const access = getPairAccess(sessionId, socket.id);
    if (!access) return ack?.({ ok: false, error: "You are not in a pair." });
    const suggestion = access.pair.suggestions.find((entry) => entry.id === String(payload?.suggestionId || ""));
    if (!suggestion) return ack?.({ ok: false, error: "Suggestion not found." });
    const status = String(payload?.status || "resolved").toLowerCase();
    if (!["applied", "resolved", "rejected"].includes(status)) {
      return ack?.({ ok: false, error: "Invalid suggestion status." });
    }
    suggestion.status = status;
    suggestion.resolvedBy = access.member.name;
    suggestion.resolvedAt = Date.now();
    recordPairActivity(access.pair, `${access.member.name} marked a suggestion ${status}.`, "suggestion");
    emitPairingState(sessionId);
    ack?.({ ok: true });
  });

  socket.on("collab:pair:task:add", (payload, ack) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const access = getPairAccess(sessionId, socket.id);
    if (!access) return ack?.({ ok: false, error: "You are not in a pair." });
    const text = String(payload?.text || "").trim().slice(0, 300);
    if (!text) return ack?.({ ok: false, error: "Task is empty." });
    access.pair.tasks.push({
      id: crypto.randomBytes(7).toString("hex"),
      text,
      done: false,
      createdBy: access.member.name,
      ts: Date.now(),
    });
    if (access.pair.tasks.length > 100) access.pair.tasks.shift();
    recordPairActivity(access.pair, `${access.member.name} added a pair task.`, "task");
    emitPairingState(sessionId);
    ack?.({ ok: true });
  });

  socket.on("collab:pair:task:toggle", (payload, ack) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const access = getPairAccess(sessionId, socket.id);
    if (!access) return ack?.({ ok: false, error: "You are not in a pair." });
    const task = access.pair.tasks.find((entry) => entry.id === String(payload?.taskId || ""));
    if (!task) return ack?.({ ok: false, error: "Task not found." });
    task.done = Boolean(payload?.done);
    task.updatedBy = access.member.name;
    task.updatedAt = Date.now();
    recordPairActivity(access.pair, `${access.member.name} ${task.done ? "completed" : "reopened"} a pair task.`, "task");
    emitPairingState(sessionId);
    ack?.({ ok: true });
  });

  socket.on("collab:pair:help", (payload, ack) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const access = getPairAccess(sessionId, socket.id);
    if (!access) return ack?.({ ok: false, error: "You are not in a pair." });
    access.pair.helpRequested = Boolean(payload?.requested);
    recordPairActivity(access.pair, `${access.member.name} ${access.pair.helpRequested ? "asked the host for help" : "cleared the help request"}.`, "help");
    if (access.pair.helpRequested) {
      access.session.participants
        .filter((participant) => ["host", "co-host"].includes(participant.role))
        .forEach((participant) => io.to(participant.socketId).emit("collab:pair:help-request", {
          pair: sanitizePairOverview(access.session, access.pair),
          from: access.member.name,
        }));
    }
    emitPairingState(sessionId);
    ack?.({ ok: true });
  });

  socket.on("collab:pair:snapshot", (payload, ack) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const access = getPairAccess(sessionId, socket.id);
    if (!access) return ack?.({ ok: false, error: "You are not in a pair." });
    recordPairActivity(access.pair, `${access.member.name} saved a pair snapshot.`, "snapshot");
    ack?.({
      ok: true,
      snapshot: {
        sessionId,
        pairId: access.pair.id,
        createdAt: Date.now(),
        createdBy: access.member.name,
        pair: sanitizePairForMembers(access.session, access.pair),
        files: cloneFiles(access.session.files),
      },
    });
    emitPairingState(sessionId);
  });

  socket.on("collab:pair:presence", (payload) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const access = getPairAccess(sessionId, socket.id);
    if (!access || access.pair.status !== "active" || access.pair.connectionPaused) return;
    const partnerName = findPairPartnerName(access.pair, access.member.name);
    const partner = access.session.participants.find((participant) => normalizeName(participant.name) === normalizeName(partnerName));
    if (!partner) return;
    const presence = {
      from: access.member.name,
      fileName: String(payload?.fileName || access.member.currentFile || "").slice(0, 260),
      selectionStart: Math.max(0, Number(payload?.selectionStart || 0)),
      selectionEnd: Math.max(0, Number(payload?.selectionEnd || 0)),
      scrollTop: Math.max(0, Number(payload?.scrollTop || 0)),
      scrollLeft: Math.max(0, Number(payload?.scrollLeft || 0)),
      ts: Date.now(),
    };
    if (!access.pair._presenceByName) access.pair._presenceByName = {};
    access.pair._presenceByName[normalizeName(access.member.name)] = presence;
    io.to(partner.socketId).emit("collab:pair:presence", presence);
  });

  socket.on("collab:pair:presence-request", (payload, ack) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const access = getPairAccess(sessionId, socket.id);
    if (!access || access.pair.status !== "active" || access.pair.connectionPaused) {
      return ack?.({ ok: false, error: "Pair view is unavailable." });
    }
    const partnerName = findPairPartnerName(access.pair, access.member.name);
    const partner = access.session.participants.find((participant) => normalizeName(participant.name) === normalizeName(partnerName));
    if (!partner) return ack?.({ ok: false, error: "Your partner is disconnected." });
    const cachedPresence = access.pair._presenceByName?.[normalizeName(partner.name)];
    if (cachedPresence) io.to(socket.id).emit("collab:pair:presence", cachedPresence);
    io.to(partner.socketId).emit("collab:pair:presence-request", { from: access.member.name });
    ack?.({ ok: true, cached: Boolean(cachedPresence) });
  });

  socket.on("collab:pair:voice", (payload, ack) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const access = getPairAccess(sessionId, socket.id);
    if (!access) return ack?.({ ok: false, error: "You are not in a pair." });
    const kind = String(payload?.kind || "").toLowerCase();
    if (!["invite", "response", "offer", "answer", "ice", "hangup"].includes(kind)) {
      return ack?.({ ok: false, error: "Invalid voice event." });
    }
    let data = payload?.data ?? null;
    try {
      if (JSON.stringify(data).length > 200000) return ack?.({ ok: false, error: "Voice signal is too large." });
    } catch {
      data = null;
    }
    const partnerName = findPairPartnerName(access.pair, access.member.name);
    const partner = access.session.participants.find((participant) => normalizeName(participant.name) === normalizeName(partnerName));
    if (!partner) return ack?.({ ok: false, error: "Your partner is disconnected." });
    io.to(partner.socketId).emit("collab:pair:voice", { kind, data, from: access.member.name });
    ack?.({ ok: true });
  });

  socket.on("collab:update", (payload, ack) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const access = canUseSession(sessionId, socket.id);
    if (!access) {
      ack?.({ ok: false, needsResume: Boolean(sessions.has(sessionId)), error: "Session membership needs to be restored." });
      return;
    }
    const { session, member } = access;
    const activePair = findPairForName(session, member.name);
    const pairNavigatorLocked = Boolean(
      activePair &&
      activePair.status === "active" &&
      !activePair.connectionPaused &&
      activePair.mode === "driver" &&
      normalizeName(activePair.driver) !== normalizeName(member.name)
    );
    if (
      member.frozenEditing ||
      session.permissions?.readOnlyAll ||
      session.permissions?.pauseCollab ||
      pairNavigatorLocked
    ) {
      emitSessionStateToParticipant(session, member, {
        name: member.name,
        theme: member.theme,
        role: member.role || "participant",
      });
      ack?.({ ok: false, error: pairNavigatorLocked ? "Only the Pair Driver can edit right now." : "Editing is currently disabled." });
      return;
    }

    const meta = socketMeta.get(socket.id);
    const safeUser =
      meta && meta.sessionId === sessionId
        ? { name: member.name, theme: member.theme, role: member.role || "participant" }
        : null;

    const incomingFiles = cloneFiles(payload?.files);
    const requestedActiveFileName = payload?.activeFileName || null;
    const allowedFiles = Array.isArray(member.allowedFiles) ? member.allowedFiles : null;
    if (allowedFiles && incomingFiles.some((file) => !allowedFiles.includes(String(file?.name || "")))) {
      emitSessionStateToParticipant(session, member, safeUser);
      ack?.({ ok: false, error: "One or more files are not available to this participant." });
      return;
    }

    const previousFiles = cloneFiles(session.files);
    session.files = allowedFiles
      ? mergeFilesFromRestrictedParticipant(session.files, incomingFiles, allowedFiles)
      : incomingFiles;
    member.currentFile = requestedActiveFileName || null;
    if (!session.activeFileName || member.role === "host" || member.role === "co-host") {
      session.activeFileName = requestedActiveFileName;
    }
    session.permissions = normalizePermissions(session.permissions, session.files);
    session.participants.forEach((participant) =>
      rebaseParticipantFileAccess(participant, previousFiles, session.files),
    );
    session.participants.forEach((participant) => storeParticipantFileAccess(session, participant));

    emitSessionStateToRoom(session, socket.id, safeUser);
    emitParticipants(sessionId);
    emitSessionMeta(sessionId);
    ack?.({ ok: true, serverTime: Date.now() });
  });

  socket.on("collab:rename-participant", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const access = canUseSession(sessionId, socket.id);
      if (!access) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }

      const { session, member: actor } = access;
      const targetName = normalizeName(payload?.targetName);
      const target = session.participants.find((participant) => normalizeName(participant.name) === targetName);
      if (!target) {
        ack?.({ ok: false, error: "Participant not found." });
        return;
      }

      const renamingSelf = target.socketId === socket.id;
      if (renamingSelf && target.renameDisabled) {
        ack?.({ ok: false, error: "A session moderator disabled self-renaming for you." });
        return;
      }
      if (!renamingSelf && !canModerateTarget(session, socket.id, target)) {
        ack?.({ ok: false, error: "You do not have permission to rename this participant." });
        return;
      }

      const validation = validateParticipantDisplayName(payload?.newName);
      if (!validation.ok) {
        ack?.({ ok: false, error: validation.error });
        return;
      }
      const newName = validation.name;
      const oldName = target.name;
      const duplicate = session.participants.some(
        (participant) => participant.socketId !== target.socketId && normalizeName(participant.name) === normalizeName(newName),
      );
      if (duplicate) {
        ack?.({ ok: false, error: "That name is already being used in this session." });
        return;
      }
      if (oldName === newName) {
        ack?.({ ok: true, oldName, newName, unchanged: true });
        return;
      }

      migrateParticipantNameState(session, target, oldName, newName);
      const renamedBy = actor === target ? newName : actor.name;
      io.to(sessionId).emit("collab:participant-renamed", {
        oldName,
        newName,
        renamedBy,
      });
      logAdminEvent(
        "Participant renamed",
        `${oldName} was renamed to ${newName} by ${renamedBy} in session ${sessionId}.`,
        sessionId,
      );
      emitParticipants(sessionId);
      emitSessionMeta(sessionId);
      emitPairingState(sessionId);
      ack?.({ ok: true, oldName, newName });
    } catch {
      ack?.({ ok: false, error: "Failed to rename participant." });
    }
  });

  socket.on("collab:set-role", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const session = sessions.get(sessionId);
      if (!session) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }
      if (session.hostSocketId !== socket.id) {
        ack?.({ ok: false, error: "Only host can change roles." });
        return;
      }

      const role = String(payload?.role || "").trim().toLowerCase();
      const targetName = String(payload?.targetName || "").trim().toLowerCase();
      if (!["co-host", "participant"].includes(role) || !targetName) {
        ack?.({ ok: false, error: "Invalid role update." });
        return;
      }

      const target = session.participants.find(
        (p) => p.name.toLowerCase() === targetName,
      );
      if (!target) {
        ack?.({ ok: false, error: "Participant not found." });
        return;
      }
      if (target.socketId === session.hostSocketId) {
        ack?.({ ok: false, error: "Host role cannot be changed." });
        return;
      }

      target.role = role;
      io.to(target.socketId).emit("collab:role-notice", {
        role,
        by: session.hostName || "Host",
      });
      logAdminEvent("Role updated", `${target.name} is now ${role} in session ${sessionId}.`, sessionId);
      emitParticipants(sessionId);
      ack?.({ ok: true });
    } catch {
      ack?.({ ok: false, error: "Failed to update role." });
    }
  });

  socket.on("collab:transfer-host", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const session = sessions.get(sessionId);
      if (!session) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }
      if (session.hostSocketId !== socket.id) {
        ack?.({ ok: false, error: "Only host can transfer host." });
        return;
      }
      const targetName = normalizeName(payload?.targetName);
      const target = session.participants.find((p) => normalizeName(p.name) === targetName);
      if (!target) {
        ack?.({ ok: false, error: "Participant not found." });
        return;
      }
      if (target.socketId === session.hostSocketId) {
        ack?.({ ok: false, error: "That participant is already the host." });
        return;
      }
      const currentHost = session.participants.find((p) => p.socketId === session.hostSocketId);
      if (currentHost) currentHost.role = "participant";
      target.role = "host";
      session.hostSocketId = target.socketId;
      session.hostName = target.name;
      session.hostDeviceId = String(target.deviceId || socketMeta.get(target.socketId)?.deviceId || "").trim();
      io.to(target.socketId).emit("collab:role-notice", {
        role: "host",
        by: currentHost?.name || "Host",
      });
      logAdminEvent("Host transferred", `${target.name} became host of session ${sessionId}.`, sessionId);
      emitParticipants(sessionId);
      emitSessionMeta(sessionId);
      ack?.({ ok: true });
    } catch {
      ack?.({ ok: false, error: "Failed to transfer host." });
    }
  });

  socket.on("collab:set-participant-flags", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const session = sessions.get(sessionId);
      if (!session) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }
      const targetName = normalizeName(payload?.targetName);
      const target = session.participants.find((p) => normalizeName(p.name) === targetName);
      if (!target) {
        ack?.({ ok: false, error: "Participant not found." });
        return;
      }
      const actor = canModerateTarget(session, socket.id, target);
      if (!actor) {
        ack?.({ ok: false, error: "You do not have permission to update this participant." });
        return;
      }
      if (typeof payload?.mutedChat === "boolean") target.mutedChat = payload.mutedChat;
      if (typeof payload?.frozenEditing === "boolean") target.frozenEditing = payload.frozenEditing;
      if (typeof payload?.renameDisabled === "boolean") target.renameDisabled = payload.renameDisabled;
      if (typeof payload?.priority === "boolean") target.priority = payload.priority;
      logAdminEvent("Participant flags updated", `${target.name} was updated in session ${sessionId}.`, sessionId);
      emitParticipants(sessionId);
      ack?.({ ok: true });
    } catch {
      ack?.({ ok: false, error: "Failed to update participant state." });
    }
  });

  socket.on("collab:set-participant-files", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const session = sessions.get(sessionId);
      if (!session) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }
      const targetName = normalizeName(payload?.targetName);
      const target = session.participants.find((p) => normalizeName(p.name) === targetName);
      if (!target) {
        ack?.({ ok: false, error: "Participant not found." });
        return;
      }
      const actor = canModerateTarget(session, socket.id, target);
      if (!actor) {
        ack?.({ ok: false, error: "You do not have permission to change this file access." });
        return;
      }

      const reset = Boolean(payload?.reset);
      if (reset) {
        target.allowedFiles = null;
      } else {
        target.allowedFiles = normalizeAllowedFiles(session.files, payload?.allowedFiles);
      }
      storeParticipantFileAccess(session, target);
      logAdminEvent("File access updated", `${target.name}'s file access was changed in session ${sessionId}.`, sessionId);
      emitParticipants(sessionId);
      emitSessionStateToParticipant(session, target);
      ack?.({ ok: true });
    } catch {
      ack?.({ ok: false, error: "Failed to update file access." });
    }
  });

  socket.on("collab:set-file-visibility", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const session = sessions.get(sessionId);
      if (!session) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }
      const actor = canUseLimitedRoomTools(session, socket.id);
      if (!actor) {
        ack?.({ ok: false, error: "You do not have permission to hide files." });
        return;
      }
      const fileName = String(payload?.fileName || "").trim();
      const allNames = (session.files || []).map((file) => String(file?.name || ""));
      if (!fileName || !allNames.includes(fileName)) {
        ack?.({ ok: false, error: "File not found." });
        return;
      }
      const requestedHidden = new Set(
        (Array.isArray(payload?.hiddenFor) ? payload.hiddenFor : []).map(normalizeName),
      );
      const changedParticipants = [];
      session.participants.forEach((target) => {
        if (!canModerateTarget(session, socket.id, target)) return;
        const targetKey = normalizeName(target.name);
        const currentAllowed = Array.isArray(target.allowedFiles)
          ? new Set(target.allowedFiles)
          : new Set(allNames);
        if (requestedHidden.has(targetKey)) currentAllowed.delete(fileName);
        else currentAllowed.add(fileName);
        target.allowedFiles = currentAllowed.size === allNames.length
          ? null
          : allNames.filter((name) => currentAllowed.has(name));
        storeParticipantFileAccess(session, target);
        changedParticipants.push(target);
      });
      logAdminEvent(
        "File visibility updated",
        `${fileName} visibility was updated for ${changedParticipants.length} participant(s) in session ${sessionId}.`,
        sessionId,
      );
      emitParticipants(sessionId);
      changedParticipants.forEach((target) => emitSessionStateToParticipant(session, target));
      ack?.({ ok: true });
    } catch {
      ack?.({ ok: false, error: "Failed to update file visibility." });
    }
  });

  socket.on("collab:set-participant-feature-access", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const session = sessions.get(sessionId);
      if (!session) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }
      const targetName = normalizeName(payload?.targetName);
      const target = session.participants.find((p) => normalizeName(p.name) === targetName);
      if (!target) {
        ack?.({ ok: false, error: "Participant not found." });
        return;
      }
      const actor = canModerateTarget(session, socket.id, target);
      if (!actor) {
        ack?.({ ok: false, error: "You do not have permission to change this participant." });
        return;
      }
      target.disabledFeatures = normalizeDisabledFeatures(payload?.disabledFeatures);
      if (target.disabledFeatures.includes("pairing")) {
        endPairsForParticipant(sessionId, target.name, "Pairing was disabled for a participant.", actor.name);
      }
      logAdminEvent("Participant feature access updated", `${target.name}'s feature access changed in session ${sessionId}.`, sessionId);
      emitParticipants(sessionId);
      ack?.({ ok: true });
    } catch {
      ack?.({ ok: false, error: "Failed to update participant feature access." });
    }
  });

  socket.on("collab:set-group-feature-access", (_payload, ack) => {
    ack?.({ ok: false, error: "Feature access is controlled from room-wide group settings only." });
  });

  socket.on("collab:set-permissions", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const session = sessions.get(sessionId);
      if (!session) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }
      const actor = canUseLimitedRoomTools(session, socket.id);
      if (!actor) {
        ack?.({ ok: false, error: "Only host or co-host can update these settings." });
        return;
      }

      const normalizedNext = normalizePermissions(payload?.permissions, session.files);
      if (String(actor.role || "") === "co-host") {
        const cohostOnly = {
          ...session.permissions,
          pinnedFile: normalizedNext.pinnedFile,
        };
        session.permissions = normalizePermissions(cohostOnly, session.files);
      } else {
        session.permissions = normalizedNext;
      }
      if (session.permissions.disablePairing) {
        const pairing = ensurePairingState(session);
        pairing.invites = [];
        [...pairing.pairs].forEach((pair) =>
          endPairInternal(sessionId, pair, "The host disabled pairing for this room.", actor.name),
        );
      }
      logAdminEvent("Room permissions updated", `${actor.name} updated room controls in session ${sessionId}.`, sessionId);
      emitSessionMeta(sessionId);
      ack?.({ ok: true, permissions: session.permissions });
    } catch {
      ack?.({ ok: false, error: "Failed to update permissions." });
    }
  });

  socket.on("collab:clear-group-chat", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const session = sessions.get(sessionId);
      if (!session) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }
      const actor = canUseLimitedRoomTools(session, socket.id);
      if (!actor) {
        ack?.({ ok: false, error: "Only host or co-host can clear group chat." });
        return;
      }
      if (!session.chat) session.chat = { group: [], private: {} };
      session.chat.group = [];
      io.to(sessionId).emit("collab:chat:cleared", { mode: "group" });
      logAdminEvent("Group chat cleared", `Group chat was cleared in session ${sessionId}.`, sessionId);
      ack?.({ ok: true });
    } catch {
      ack?.({ ok: false, error: "Failed to clear group chat." });
    }
  });

  socket.on("collab:bring-to-file", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const session = sessions.get(sessionId);
      if (!session) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }
      const actor = canUseLimitedRoomTools(session, socket.id);
      if (!actor) {
        ack?.({ ok: false, error: "Only host or co-host can bring everyone to a file." });
        return;
      }
      const fileName = String(payload?.fileName || "").trim();
      if (!session.files.some((file) => file.name === fileName)) {
        ack?.({ ok: false, error: "File not found." });
        return;
      }
      session.activeFileName = fileName;
      session.participants.forEach((participant) => {
        participant.currentFile = fileName;
      });
      io.to(sessionId).emit("collab:bring-to-file", { fileName });
      logAdminEvent("Participants brought to file", `Session ${sessionId} was brought to ${fileName}.`, sessionId);
      emitParticipants(sessionId);
      emitSessionMeta(sessionId);
      ack?.({ ok: true });
    } catch {
      ack?.({ ok: false, error: "Failed to bring everyone to file." });
    }
  });

  socket.on("collab:save-snapshot", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const session = sessions.get(sessionId);
      if (!session) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }
      if (session.hostSocketId !== socket.id) {
        ack?.({ ok: false, error: "Only host can save a session snapshot." });
        return;
      }
      ack?.({
        ok: true,
        snapshot: {
          sessionId,
          createdAt: Date.now(),
          hostName: session.hostName,
          permissions: session.permissions,
          participants: session.participants.map(sanitizeParticipant),
          files: cloneFiles(session.files),
          chat: session.chat || { group: [], private: {} },
        },
      });
    } catch {
      ack?.({ ok: false, error: "Failed to save session snapshot." });
    }
  });

  socket.on("collab:regenerate-link", (payload, ack) => {
    try {
      const oldSessionId = normalizeSessionId(payload?.sessionId);
      const session = sessions.get(oldSessionId);
      if (!session) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }
      if (session.hostSocketId !== socket.id) {
        ack?.({ ok: false, error: "Only host can regenerate the invite link." });
        return;
      }
      const nextSessionId = generateSessionId();
      sessions.delete(oldSessionId);
      sessions.set(nextSessionId, session);
      (session.participants || []).forEach((participant) => {
        const socketRef = io.sockets.sockets.get(participant.socketId);
        if (socketRef) {
          socketRef.leave(oldSessionId);
          socketRef.join(nextSessionId);
        }
        const meta = socketMeta.get(participant.socketId);
        if (meta) meta.sessionId = nextSessionId;
      });
      (session.pendingJoins || []).forEach((entry) => {
        const meta = socketMeta.get(entry.socketId);
        if (meta) meta.sessionId = nextSessionId;
      });
      const shareLink = buildShareLink(session.baseUrl || "", nextSessionId);
      io.to(nextSessionId).emit("collab:link-regenerated", {
        sessionId: nextSessionId,
        shareLink,
      });
      logAdminEvent("Invite link regenerated", `Session ${oldSessionId} was regenerated as ${nextSessionId}.`, nextSessionId);
      emitSessionMeta(nextSessionId);
      emitPairingState(nextSessionId);
      ack?.({ ok: true, sessionId: nextSessionId, shareLink });
    } catch {
      ack?.({ ok: false, error: "Failed to regenerate invite link." });
    }
  });

  socket.on("collab:approve-join", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const session = sessions.get(sessionId);
      if (!session) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }
      if (session.hostSocketId !== socket.id) {
        ack?.({ ok: false, error: "Only host can approve joins." });
        return;
      }
      const socketId = String(payload?.socketId || "").trim();
      const request = (session.pendingJoins || []).find((entry) => entry.socketId === socketId);
      if (!request) {
        ack?.({ ok: false, error: "Join request not found." });
        return;
      }
      session.pendingJoins = session.pendingJoins.filter((entry) => entry.socketId !== socketId);
      const joined = finalizeApprovedJoin(sessionId, request.socketId, request.name, request.theme);
      if (!joined) {
        io.to(request.socketId).emit("collab:join-rejected", { reason: "Name already taken." });
        emitSessionMeta(sessionId);
        ack?.({ ok: false, error: "Could not approve this join request." });
        return;
      }
      ack?.({ ok: true });
      emitSessionMeta(sessionId);
    } catch {
      ack?.({ ok: false, error: "Failed to approve join request." });
    }
  });

  socket.on("collab:reject-join", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const session = sessions.get(sessionId);
      if (!session) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }
      if (session.hostSocketId !== socket.id) {
        ack?.({ ok: false, error: "Only host can reject joins." });
        return;
      }
      const socketId = String(payload?.socketId || "").trim();
      const request = (session.pendingJoins || []).find((entry) => entry.socketId === socketId);
      if (!request) {
        ack?.({ ok: false, error: "Join request not found." });
        return;
      }
      session.pendingJoins = session.pendingJoins.filter((entry) => entry.socketId !== socketId);
      socketMeta.delete(socketId);
      io.to(socketId).emit("collab:join-rejected", { reason: "The host rejected your join request." });
      logAdminEvent("Join rejected", `${request.name} was rejected from session ${sessionId}.`, sessionId);
      ack?.({ ok: true });
      emitSessionMeta(sessionId);
    } catch {
      ack?.({ ok: false, error: "Failed to reject join request." });
    }
  });

  socket.on("collab:end-session", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const session = sessions.get(sessionId);
      if (!session) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }
      if (session.hostSocketId !== socket.id) {
        ack?.({ ok: false, error: "Only host can end the session." });
        return;
      }
      logAdminEvent("Session ended", `${sessionId} was ended by the host.`, sessionId);
      ack?.({ ok: true });
      endSession(sessionId, "The host ended the collaboration session.");
    } catch {
      ack?.({ ok: false, error: "Failed to end session." });
    }
  });

  socket.on("collab:kick", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const session = sessions.get(sessionId);
      if (!session) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }
      const targetName = String(payload?.targetName || "").trim().toLowerCase();
      if (!targetName) {
        ack?.({ ok: false, error: "Invalid participant name." });
        return;
      }

      const target = session.participants.find(
        (p) => p.name.toLowerCase() === targetName,
      );
      if (!target) {
        ack?.({ ok: false, error: "Participant not found." });
        return;
      }
      const actor = canModerateTarget(session, socket.id, target);
      if (!actor) {
        ack?.({ ok: false, error: "You do not have permission to kick this participant." });
        return;
      }

      endPairsForParticipant(sessionId, target.name, `${target.name} was removed from the session.`, actor.name);

      session.participants = session.participants.filter(
        (p) => p.socketId !== target.socketId,
      );
      socketMeta.delete(target.socketId);
      io.to(target.socketId).emit("collab:kicked", { sessionId });
      io.sockets.sockets.get(target.socketId)?.leave(sessionId);
      io.to(sessionId).emit("collab:participant-left", {
        name: target.name,
        reason: "kicked",
        actorName: actor.name,
      });

      logAdminEvent("Participant kicked", `${target.name} was removed from session ${sessionId}.`, sessionId);
      emitParticipants(sessionId);
      emitSessionMeta(sessionId);
      ack?.({ ok: true });
    } catch {
      ack?.({ ok: false, error: "Failed to kick participant." });
    }
  });

  socket.on("collab:typing", (payload) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const access = canUseSession(sessionId, socket.id);
    if (!access) return;
    const { member } = access;
    const rawIndicator = payload?.indicator;
    const stopped =
      rawIndicator === null ||
      rawIndicator === undefined ||
      Boolean(rawIndicator?.stopped);
    socket.to(sessionId).emit("collab:typing", {
      name: member.name,
      theme: member.theme,
      editor: rawIndicator?.editor || null,
      fileName: rawIndicator?.fileName || member.currentFile || null,
      caretPos: Number(rawIndicator?.caretPos || 0),
      documentRevision: String(rawIndicator?.documentRevision || "").trim().slice(0, 80),
      stopped,
      ts: Date.now(),
    });
  });

  socket.on("collab:ban", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const session = sessions.get(sessionId);
      if (!session) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }
      const targetName = normalizeName(payload?.targetName);
      const target = session.participants.find((p) => normalizeName(p.name) === targetName);
      if (!target) {
        ack?.({ ok: false, error: "Participant not found." });
        return;
      }
      const actor = canModerateTarget(session, socket.id, target);
      if (!actor) {
        ack?.({ ok: false, error: "You do not have permission to ban this participant." });
        return;
      }
      const targetMeta = socketMeta.get(target.socketId);
      const deviceId = String(target.deviceId || targetMeta?.deviceId || "").trim();
      if (!deviceId) {
        ack?.({ ok: false, error: "This participant device cannot be banned right now." });
        return;
      }
      if (!Array.isArray(session.bans)) session.bans = [];
      if (!session.bans.some((entry) => String(entry.deviceId || "") === deviceId)) {
        session.bans.unshift({
          deviceId,
          name: target.name,
          bannedAt: Date.now(),
          bannedBy: actor.name,
        });
      }
      session.pendingJoins = (session.pendingJoins || []).filter((entry) => String(entry.deviceId || "") !== deviceId);
      endPairsForParticipant(sessionId, target.name, `${target.name} was banned from the session.`, actor.name);
      session.participants = session.participants.filter((p) => p.socketId !== target.socketId);
      io.to(target.socketId).emit("collab:banned", { sessionId });
      const socketRef = io.sockets.sockets.get(target.socketId);
      if (socketRef) socketRef.leave(sessionId);
      socketMeta.delete(target.socketId);
      logAdminEvent("Participant banned", `${target.name} was banned from session ${sessionId}.`, sessionId);
      emitParticipants(sessionId);
      emitSessionMeta(sessionId);
      ack?.({ ok: true });
    } catch {
      ack?.({ ok: false, error: "Failed to ban participant." });
    }
  });

  socket.on("collab:unban", (payload, ack) => {
    try {
      const sessionId = normalizeSessionId(payload?.sessionId);
      const session = sessions.get(sessionId);
      if (!session) {
        ack?.({ ok: false, error: "Session not found." });
        return;
      }
      const actor = canUseLimitedRoomTools(session, socket.id);
      if (!actor) {
        ack?.({ ok: false, error: "Only host or co-host can unban devices." });
        return;
      }
      const deviceId = String(payload?.deviceId || "").trim();
      const before = Array.isArray(session.bans) ? session.bans.length : 0;
      session.bans = (session.bans || []).filter((entry) => String(entry.deviceId || "") !== deviceId);
      if (session.bans.length === before) {
        ack?.({ ok: false, error: "Ban entry not found." });
        return;
      }
      logAdminEvent("Device unbanned", `${actor.name} removed a device ban in session ${sessionId}.`, sessionId);
      emitSessionMeta(sessionId);
      ack?.({ ok: true });
    } catch {
      ack?.({ ok: false, error: "Failed to unban device." });
    }
  });

  socket.on("collab:cursor", (payload) => {
    const sessionId = normalizeSessionId(payload?.sessionId);
    const session = sessions.get(sessionId);
    if (!session) return;
    const meta = socketMeta.get(socket.id);
    if (!meta || meta.sessionId !== sessionId) return;

    const cursor = payload?.cursor
      ? {
          name: meta.name,
          theme: meta.theme,
          cursorStyle: normalizeCollabCursorStyle(meta.cursorStyle),
          fileName: payload.cursor.fileName || null,
          x: Number(payload.cursor.x || 0),
          y: Number(payload.cursor.y || 0),
          ts: Date.now(),
        }
      : null;

    socket.to(sessionId).emit("collab:cursor", {
      name: meta.name,
      cursor,
    });
  });

  socket.on("disconnect", () => {
    const removedEditorPresence = editorPresenceSockets.delete(socket.id);
    const meta = socketMeta.get(socket.id);
    socketMeta.delete(socket.id);
    if (!meta) {
      if (removedEditorPresence) emitAdminUpdate("editor-presence");
      return;
    }

    const session = sessions.get(meta.sessionId);
    if (!session) {
      if (removedEditorPresence) emitAdminUpdate("editor-presence");
      return;
    }
    const disconnectedPair = findPairForName(session, meta.name);
    if (disconnectedPair) {
      disconnectedPair.connectionPaused = true;
      if (!disconnectedPair._disconnectTimers) disconnectedPair._disconnectTimers = {};
      if (!disconnectedPair._reconnectDevices) disconnectedPair._reconnectDevices = {};
      const disconnectedKey = normalizeName(meta.name);
      disconnectedPair._reconnectDevices[disconnectedKey] = String(meta.deviceId || "").trim();
      if (disconnectedPair._disconnectTimers[disconnectedKey]) {
        clearTimeout(disconnectedPair._disconnectTimers[disconnectedKey]);
        delete disconnectedPair._disconnectTimers[disconnectedKey];
      }
      recordPairActivity(disconnectedPair, `${meta.name} disconnected. Pair state will wait for reconnection.`, "reconnect");
    }

    if (Array.isArray(session.pendingJoins) && session.pendingJoins.length) {
      const before = session.pendingJoins.length;
      session.pendingJoins = session.pendingJoins.filter((entry) => entry.socketId !== socket.id);
      if (session.pendingJoins.length !== before) {
        emitSessionMeta(meta.sessionId);
      }
    }

    session.participants = session.participants.filter(
      (p) => p.socketId !== socket.id,
    );

    const removedWasHost = meta.sessionId && session.hostSocketId === socket.id;

    if (session.participants.length === 0 && !disconnectedPair) {
      session.lastEmptyAt = Date.now();
      emitAdminUpdate("disconnect");
      if (removedEditorPresence) emitAdminUpdate("editor-presence");
      return;
    }

    if (session.participants.length === 0 && disconnectedPair) {
      session.lastEmptyAt = Date.now();
      emitPairingState(meta.sessionId);
      emitAdminUpdate("disconnect");
      if (removedEditorPresence) emitAdminUpdate("editor-presence");
      return;
    }

    io.to(meta.sessionId).emit("collab:participant-left", {
      name: meta.name,
      reason: "left",
    });

    if (removedWasHost) {
      const availableCoHost = session.participants.find((p) => p.role === "co-host");
      const nextHost =
        availableCoHost ||
        session.participants[Math.floor(Math.random() * session.participants.length)];
      session.hostSocketId = nextHost.socketId;
      session.hostName = nextHost.name;
      session.hostDeviceId = String(nextHost.deviceId || socketMeta.get(nextHost.socketId)?.deviceId || "").trim();
      nextHost.role = "host";
      logAdminEvent("Host reassigned", `${nextHost.name} became host of session ${meta.sessionId} after a disconnect.`, meta.sessionId);
    }

    emitParticipants(meta.sessionId);
    emitSessionMeta(meta.sessionId);
    emitPairingState(meta.sessionId);
    emitAdminUpdate("disconnect");
    if (removedEditorPresence) emitAdminUpdate("editor-presence");
  });
});

function startServer(preferredPort) {
  const port = Number(preferredPort) || 3000;
  currentPort = port;
  server.listen(port, () => {
    console.log(`CodX Editor server running on http://localhost:${port}`);
  });
}

let currentPort = Number(PORT) || 3000;

server.on("error", (err) => {
  if (err && err.code === "EADDRINUSE") {
    const retryPort = currentPort + 1;
    console.warn(`Port ${currentPort} is in use. Retrying on ${retryPort}...`);
    setTimeout(() => startServer(retryPort), 200);
    return;
  }
  throw err;
});

startServer(PORT);

setInterval(() => {
  const now = Date.now();
  deviceTransfers.forEach((transfer, code) => {
    if (Number(transfer?.expiresAt || 0) <= now) deviceTransfers.delete(code);
  });
  deviceTransferAttempts.forEach((timestamps, clientIp) => {
    const recent = (Array.isArray(timestamps) ? timestamps : []).filter((timestamp) => now - timestamp < 60 * 1000);
    if (recent.length) deviceTransferAttempts.set(clientIp, recent);
    else deviceTransferAttempts.delete(clientIp);
  });
  endedSessions.forEach((expiresAt, sessionId) => {
    if (Number(expiresAt || 0) <= now) endedSessions.delete(sessionId);
  });
  Array.from(sessions.entries()).forEach(([sessionId, session]) => {
    if (Number(session?.permissions?.sessionEndsAt || 0) > 0 && Number(session.permissions.sessionEndsAt) <= now) {
      endSession(sessionId, "The collaboration session timer ended.");
    }
  });
}, 1000);
