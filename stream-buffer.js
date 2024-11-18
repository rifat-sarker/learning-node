const http = require("http")
const fs = require("fs")
//create a local server using nodejs raw code

const server = http.createServer();

// listener
server.on("request", (req, res) => {
    // console.log(req);
    if (req.url === "/read-file" && req.method === "GET");
        // streaming file while reading
        const readableStream = fs.createReadStream(process.cwd() + '/texts/read.txt')
        readableStream.on("data", (buffer) => {
            res.write(buffer)
        })
        readableStream.on("end", () => {
            res.end("Hello from World!")
        })
    

})

server.listen(5000, () => {
    console.log("The server is listening on port 5000");
})


/* Problem
if (req.url === "/read-file" && req.method === "GET");
vs 
if (req.url === "/read-file" && req.method === "GET") 
*/