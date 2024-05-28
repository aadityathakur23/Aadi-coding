// Write a program to take two numbers from the user and determine the greater of those two given numbers.
const input = require("readline-sync");
let a = input.questionInt("Enter first number: ");
let b = input.questionInt("Enter second number: ");
if (a > b)
{
    max = a;
}
else
{
    max = b;
}
console.log(max)