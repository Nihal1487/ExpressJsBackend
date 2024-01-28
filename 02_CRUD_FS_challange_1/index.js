const fs = require("fs");

// create file
fs.writeFileSync("02_CRUD_FS_challange_1/bio.txt", "Hello guys in this file all my biodata")

// updateFIle

fs.appendFileSync("02_CRUD_FS_challange_1/bio.txt","\n  my name is Nihal\nfav task is coding")

// read file

const readData = fs.readFileSync("02_CRUD_FS_challange_1/mybio.txt", "utf-8")

console.log(readData);

// remane file

fs.renameSync(
  "02_CRUD_FS_challange_1/bio.txt",
  "02_CRUD_FS_challange_1/mybio.txt"
);

// delete file

fs.unlinkSync("02_CRUD_FS_challange_1/mybio.txt")
