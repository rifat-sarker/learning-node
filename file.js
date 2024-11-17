const fs = require ("fs")

// reading a file text
const readText = fs.readFileSync("./texts/read.txt", "UTF-8")

// write a file text

const writeTexts = fs.writeFileSync("./texts/write.txt", readText + "This is my written text")

console.log(writeTexts);