const fs = require("fs");

// Create file
fs.writeFile("04_async_CRUD_challange_2_fs/bio.txt","Hello Wassup", (e) => {console.log("File Created");})

//update file
fs.appendFile("04_async_CRUD_challange_2_fs/bio.txt","\nMy name is Nihal\nMy fav programing language is JS",(e) => {console.log("Data Added");})

//  rename file
fs.rename(
  "04_async_CRUD_challange_2_fs/bio.txt",
  "04_async_CRUD_challange_2_fs/myBio.txt",
  (e) => {
    console.log("Renamed");
  }
);

// Read file

fs.readFile("04_async_CRUD_challange_2_fs/mybio.txt", "utf-8", (e, data) => {
  console.log(data);
});


// delete file 

fs.unlink("04_async_CRUD_challange_2_fs/bio.txt", (e) => {
    console.log("File Removed");
})