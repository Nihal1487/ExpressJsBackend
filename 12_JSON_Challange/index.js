const fs = require("fs")


const bioData = {
    name: "Nihal",
    age: "17.5",
    favLang: "Javascript",
  };

const jsonData = JSON.stringify(bioData)

//   fs.writeFile("read.json",jsonData,(e) => {
//     console.log("file success");
// })


fs.readFile("read.json","utf-8" ,(e,data) => {
    console.log(data);
    const orgData = JSON.parse(data)
    console.log(orgData);
})