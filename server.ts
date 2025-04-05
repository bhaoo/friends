import http from "http";
import fs from "fs";
import path from "path";

const PORT = 3000;
const DIST_FILE = path.resolve(__dirname, "friends.json");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/friends.json") {
    try {
      const data = fs.readFileSync(DIST_FILE, "utf-8");
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(data);
    } catch (err) {
      res.writeHead(500);
      res.end("Internal Server Error");
    }
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/friends.json`);
});
