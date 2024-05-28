// Write a program to take two numbers A and B from the user and calculate the quotient and remainder when number A is divided by number B.
const input = require("readline-sync");
let a = input.questionInt("Enter first number: ");
let b = input.questionInt("Enter second number: ");
T = a%b
M = Math.floor(a/b)
console.log(T,M)