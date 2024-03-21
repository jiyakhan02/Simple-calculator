#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first Number", type: "number", name: "firstNumber" },
    { message: "Enter second Number", type: "number", name: "secondNumber" },
    {
        message: "select one of the opretors to perform opration",
        type: "list",
        name: "opretors",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (answer.opretors === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.opretors === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.opretors === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.opretors === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select a valid oprators");
}
