const fs = require("fs");
const path = require("path");

const rootDirectory = path.resolve(__dirname, "..");
const publicDirectory = process.env.VERCEL_PUBLIC_DIR
  ? path.resolve(rootDirectory, process.env.VERCEL_PUBLIC_DIR)
  : path.join(rootDirectory, "public");

const publicFiles = [
  "404-for-preview.html",
  "404.html",
  "about.html",
  "adminprivate.html",
  "contact.html",
  "cx.png",
  "frontend.css",
  "frontend.html",
  "frontend.js",
  "help.html",
  "index.html",
  "node-preview.html",
  "node-runtime.js",
  "privacy.html",
  "robots.txt",
  "site-enhancements.css",
  "sitemap.xml",
  "terms.html",
  "theme.css",
  "welcome.html",
];

function copyFile(source, destination) {
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

fs.rmSync(publicDirectory, { recursive: true, force: true });
fs.mkdirSync(publicDirectory, { recursive: true });

for (const fileName of publicFiles) {
  const source = path.join(rootDirectory, fileName);
  if (!fs.existsSync(source)) {
    throw new Error(`Missing public file: ${fileName}`);
  }
  copyFile(source, path.join(publicDirectory, fileName));
}

const webcontainerSource = path.join(
  rootDirectory,
  "node_modules",
  "@webcontainer",
  "api",
  "dist",
);
if (fs.existsSync(webcontainerSource)) {
  fs.cpSync(webcontainerSource, path.join(publicDirectory, "vendor", "webcontainer"), {
    recursive: true,
  });
}

const socketClientSource = path.join(
  rootDirectory,
  "node_modules",
  "socket.io",
  "client-dist",
  "socket.io.js",
);
if (fs.existsSync(socketClientSource)) {
  copyFile(
    socketClientSource,
    path.join(publicDirectory, "socket.io", "socket.io.js"),
  );
}

console.log(`Prepared Vercel public assets in ${publicDirectory}`);
