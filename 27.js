// Write a program to take two inputs from the user and swap them without using a temporary or third variable.
const input = require("readline-sync");
let a = input.questionInt("Enter first numbber: ");
let b = input.questionInt("Enter second numbber: ");
let temp;
temp = a;
a    = b;
b    = temp;
console.log(a,b)
