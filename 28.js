//Write a program to convert a temperature from Celsius to Fahrenheit using the formula  C/5 = (F-32)/9
const input=require("readline-sync");
let c = input.questionInt("Enter any number: ");
F = 9*c + 160;
F1 = F/5
console.log(F1)