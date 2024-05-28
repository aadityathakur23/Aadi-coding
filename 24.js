// Write a program to take two numbers from the user and perform Six basic operations (addition, subtraction, multiplication, division, integer division and modulus) on those two numbers.
const input = require("readline-sync");
let a = input.questionInt("Enter first number: ");
let b = input.questionInt("Enter second number: ");
let T;
let Q1;
let Q;
let R;
let S;
T = a-b;
Q1 = a+b;
Q = a*b;
R = a/b;
S = a%b;

console.log(T,Q1,Q,R,S)
