function compare(a,b)
{
    return a-b;
}
let arr1=[1000,20,300,40,500,60,700,80,900,11]

console.log("Array if we only use .sort()",arr1.sort())

//we can define compare to diff thing to get diff results
//we can use any other word instead of compare, we can use any other word depending on the task it is peforming
console.log("Array after we use to sort(compare) and define compare such that it prints the array in a acsendinhg order:",arr1.sort(compare).toString())
function compare2(a,b)
{
    return b-a;
}
console.log("Array after we use to sort(compare) and define compare such that it prints the array in a descending order:",arr1.sort(compare2).toString())
