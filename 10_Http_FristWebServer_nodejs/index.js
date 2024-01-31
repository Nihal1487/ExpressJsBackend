const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/UserApi/userdata.json`, "utf-8");
  const objData = JSON.parse(data);

  if (req.url == "/") {
    res.end("Hello World");
  } else if (req.url == "/about") {
    res.end("This is About page");
  } else if (req.url == "/contact") {
    res.end("This is contact Us page");
  } else if (req.url == "/userapi") {
   res.writeHead(200, {"content-type" : "application/json"})
    res.end(objData.uid);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1> 404 Page is not found </h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("App is listening on port 8000");
});
