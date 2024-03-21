#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    {
        message: chalk.magentaBright("Enter your first number:"),
        type: "number",
        name: "firstNumber",
    },
    {
        message: chalk.magentaBright("Enter your second number:"),
        type: "number",
        name: "secondNumber",
    },
    {
        message: chalk.magentaBright("Select one operator to perform operation"),
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log("Answer =", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log("Answer =", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log("Answer =", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log("Answer =", answer.firstNumber / answer.secondNumber);
}
else {
    console.log(chalk.red("Please Select Valid Operator"));
}
