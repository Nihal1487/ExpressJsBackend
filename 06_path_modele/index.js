const path = require("path");

console.log(
  path.dirname("E:/Vs code/Backebd-JS/ExpressJsBackend/06_path_modele/index.js")
);
console.log(
  path.extname("E:/Vs code/Backebd-JS/ExpressJsBackend/06_path_modele/index.js")
);
console.log(
  path.basename(
    "E:/Vs code/Backebd-JS/ExpressJsBackend/06_path_modele/index.js"
  )
);

//   console.log(path.parse("E:/Vs code/Backebd-JS/ExpressJsBackend/06_path_modele/index.js"));

const myPath = path.parse(
  "E:/Vs code/Backebd-JS/ExpressJsBackend/06_path_modele/index.js"
);

console.log(myPath.name);
console.log(myPath.root);
