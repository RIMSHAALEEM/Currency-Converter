import inquirer from "inquirer";
//dummy data for currency
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter the amount",
        type: "number"
    }
]);
//store values in variables
let fromAmount = currency[user_answer.from];
let toamount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //USD BASE CURRENCY
let convertedAmount = baseAmount * toamount;
console.log(convertedAmount);
