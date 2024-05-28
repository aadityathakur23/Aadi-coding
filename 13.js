const input=require("readline-sync")
let n=input.questionInt("Enter the vlue n:")
let a=input.questionInt("Enter the vaule:")
max=a;
min=a;
let i;
for(i=1;i<n;i++)
{
    let b=input.questionInt("Enter the value:")
    if (b>max)
    {
        max=b;
    }
    else
    {
        if(b<min)
        {
            min=b;
        }
    }
}
console.log("max is:",max);
console.log("min is:",min);