const EventEmitter = require("events")
const myEmitter = new EventEmitter();

// first listener

myEmitter.on("birthday", ()=> {
    console.log(`Happly Birthday to you`);
})
// second listener

myEmitter.on("birthday", (gift)=> {
    console.log(`I will give you a ${gift} `);
})
// third listener

// myEmitter.on("birthday", (a,money)=> {
//     console.log(`I will give you ${money}`);
// })

myEmitter.emit("birthday", "watch", 100)