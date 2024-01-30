const c = require('ansi-colors');
const validator = require("validator")

// console.log(c.blueBright.italic("Hello World"));

 const email = validator.isEmail("n1487.com")
 console.log(email ? c.bgGreen.italic(email) : c.bgRed.italic(email));