//local modules
// const myModule = require("./local-1")

// clean code -- destructuring
const { a, add } = require("./local-1")
const { a: a2, add: add2 } = require("./local-2")

// console.log(a2);





// built-in modules

const path = require("path")

// console.log(path.dirname("C:/Level 2/Learning-Node/local-2.js"));
// console.log(path.parse("C:/Level 2/Learning-Node/local-2.js"));
console.log(path.join("C:/Level 2/Learning-Node/local-2.js", "local-1.js"));