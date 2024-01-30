const c = require('ansi-colors');
const validator = require("validator")

// console.log(c.blueBright.italic("Hello World"));

 const email = validator.isEmail("n@1487.com")
 console.log(email ? c.green.italic(email) : c.red.italic(email));