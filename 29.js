//Write a program to take two numbers, A and B from the user. Your task is to find the largest number that is less than A and can be divided evenly by B. Can you figure out that number?
const input=require("readline-sync");
let a = input.questionInt("Enter first number: ");
let b = input.questionInt("Enter second number: ");
if (a > b)
{
    max = a
    min = b 
}
else
{
    max = b
    min = a 
}
R = Math.floor(max/min)
T = R * min;
console.log(T)
