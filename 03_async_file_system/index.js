const { isUtf8 } = require("buffer");
const fs = require("fs");

// Create file

// fs.writeFile("03_async_file_system/read.txt","Hello Async fs",
// (err) => {console.log("File created");})

// Update file

// fs.appendFile("03_async_file_system/read.txt","\nI am Anonymous",(e) => {console.log("Content Added");})

// Read data

fs.readFile("03_async_file_system/read.txt", "utf-8", (e, data) => {
  console.log(data);
});
