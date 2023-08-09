const events = require("events");

// console.log(events);

let emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});


emitter.emit("customEvent", "Hellow World", "Computer");
emitter.emit("customEvent", "That's pretty cool", "Eve");

process.stdin.on("data", (data) => {
    const input = data.toString().trim();
    if (input === "exit") {
        emitter.emit("cutomEvent", "Goodbye!", "process");
        process.exit();
    }
    emitter.emit("customEvent", data.toString().trim(), "Terminal");
});

