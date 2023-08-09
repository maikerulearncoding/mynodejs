const container = require("./container");

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with Node.js?"
];

const answerEvents = container(questions, (answers) => {
    console.log("Thank you for your answers");
    console.log(answers);
    process.exit();
})

answerEvents.on("answer", (answer) => console.log(`The answer is ${answer}`) )