const bioData = {
  name: "Nihal",
  age: "17.5",
  favLang: "Javascript",
};

// * Object to JSON

const jsonData = JSON.stringify(bioData);

console.log(jsonData);

// * JSON to Object

const objData = JSON.parse(jsonData);
console.log(objData);
