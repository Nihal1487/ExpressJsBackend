const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  //   fs.readFile("input.txt", (err, data) => {
  //     if (err) return console.log(err);
  //     res.end(data.toString());
  //   });

  const rstream = fs.createReadStream("input.txt");

  rstream.on("data", (chunkData) => {
    res.write(chunkData);
  });
  rstream.on("end", () => {
    res.end();
  });
  rstream.on("error", () => {
    res.end("file nott found");
  });
});

server.listen(8000, "127.0.0.1", () => {
  console.log("App is listening on porttt 8000");
});
