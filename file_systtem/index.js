const fs =  require("fs")

// create a new file
// fs.writeFileSync("read.txt", "Hello World")


// fs.writeFileSync("read.txt", "My name is Nihal")

// add new data 
// fs.appendFileSync("read.txt", " How are you")

// read file
const buf_data =  fs.readFileSync("read.txt")

console.log(buf_data);

org_data = buf_data.toString()

console.log(org_data);

// renname file

fs.renameSync("read.txt", "readwrite.txt")