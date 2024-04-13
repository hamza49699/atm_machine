#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 500000;
let myPin = 4969;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: " Enter your Pin"
    }]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("Pin is correct !"));
    let operationAns = await inquirer.prompt([{
            name: "operations",
            type: "list",
            message: "what you want to do now ?",
            choices: ["Withdraw", "check current Balance", "fast cash"]
        }]);
    if (operationAns.operations === "Withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "Enter your amount"
            }]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.red("You don't have enough money sorry:("));
        }
        else {
            myBalance -= amountAns.amount;
            console.log("your remaining balance is : " + chalk.yellow(myBalance));
        }
    }
    else if (operationAns.operations === "fast cash") {
        let secAns = await inquirer.prompt([{
                name: "fastamount",
                type: "list",
                message: "Select your amount",
                choices: [1000, 5000, 10000, 25000, 50000]
            }]);
        myBalance -= secAns.fastamount;
        console.log("your remaining balance is : " + chalk.yellow(myBalance));
    }
    else if (operationAns.operations === "check current Balance") {
        console.log("your current balance is " + chalk.yellow(myBalance));
    }
}
else {
    console.log(chalk.red("incorrect pin"));
}
