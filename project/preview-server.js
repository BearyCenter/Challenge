const http = require("http");
const fs = require("fs");
const path = require("path");

const rootDir = __dirname;
const host = "127.0.0.1";
const port = Number(process.env.PORT || 4173);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".htm": "text/html; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function safePathFromUrl(urlPath) {
  const pathname = decodeURIComponent((urlPath || "/").split("?")[0]);
  const normalizedPath = pathname === "/" ? "/ui_kits/website/design-system.html" : pathname;
  const absolutePath = path.resolve(rootDir, `.${normalizedPath}`);

  if (!absolutePath.startsWith(rootDir)) {
    return null;
  }

  return absolutePath;
}

function sendFile(filePath, res) {
  fs.stat(filePath, (statError, stats) => {
    if (statError) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    if (stats.isDirectory()) {
      sendFile(path.join(filePath, "index.html"), res);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = contentTypes[ext] || "application/octet-stream";

    res.writeHead(200, { "Content-Type": contentType, "Cache-Control": "no-store" });
    fs.createReadStream(filePath).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  const filePath = safePathFromUrl(req.url);

  if (!filePath) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  sendFile(filePath, res);
});

server.listen(port, host, () => {
  console.log(`Preview server running at http://${host}:${port}`);
});
