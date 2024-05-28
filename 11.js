//X-(X^3)/3+(X^5)/5-(X^7)/7+(X^9)/9-.... Upto N terms
const input = require("readline-sync");
let x = input.questionInt("value of x: ");
let sum=0;
let N = input.questionInt("enter input: ");
let p=1;
for (i=1;i<=N;i++)
{
    if(i%2==0)
    {
      sum = sum -(x**p)/p;
    }
    else
    {
      sum = sum +(x**p)/p;
    }
    p=p+2;
}
console.log(sum)
