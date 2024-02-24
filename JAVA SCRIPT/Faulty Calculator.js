/* 
     date: 23\02\2024                             Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

let num = Math.random()
function calc(num1,num2,operation)
{
    if(num< 0.1)
    {
        if(operation=="+") return num1-num2;
        if(operation=="-") return num1/num2;
        if(operation=="*") return num1+num2;
        if(operation=="/") return num1**num2;
    }
    else
    {
        if(operation=="+") return num1+num2;
        if(operation=="-") return num1-num2;
        if(operation=="*") return num1*num2;
        if(operation=="/") return num1/num2;
    }
}

console.log(calc(1,1,"+"));
