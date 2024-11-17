const fs = require('fs')
// reading text asynchronously
fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
    if (err) {
        throw Error("error reading text")
    }
    console.log(data);
    // write asynchornously
    fs.writeFile("./texts/read2.txt", data, "UTF-8", (err) => {
        if (err) {
            throw Error("Error writing text")
        }
    })
})
