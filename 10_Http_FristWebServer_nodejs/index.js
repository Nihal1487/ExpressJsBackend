const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello World");
  } else if (req.url == "/about") {
    res.end("This is About page");
  }
  else if (req.url == "/contact") {
    res.end("This is contact Us page");
  }
  else{
    res.writeHead(404 ,{"Content-type" : "text/html"})
    res.end("<h1> 404 Page is not found </h1>")
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("App is listening on port 8000");
});
