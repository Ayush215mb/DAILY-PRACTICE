// parseint func takes string as input and return number

function converttointeger(str){
     return parseInt(str);
}

console.log(converttointeger("7363"))
console.log("7363")
console.log("If it's not a number then it prnints NaN(not a no.)",converttointeger("hello"))

function convertBinaryTointeger(str){
    return parseInt(str,2);//writing 2 because binary is base 2
}
console.log(convertBinaryTointeger("0001"))
console.log(convertBinaryTointeger("1100"))
console.log(convertBinaryTointeger("11000111"))
