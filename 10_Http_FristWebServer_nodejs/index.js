const http = require("http");

const server = http.createServer((req, res) => {
    res.end('Hello World')
});

server.listen(8000,"127.0.0.1", () => {
    console.log("App is listening on port 8000");
})