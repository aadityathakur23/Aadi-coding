// Write a program to take a positive number from the user and then display the last digit of that number.
const input = require("readline-sync");
let n = input.questionInt("Enter any number: ")
R = n%10;
console.log(R)