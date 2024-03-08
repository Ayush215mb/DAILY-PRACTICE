//length is property of string(not a funcn)
let str1="hello"
console.log(str1.length)

str1="hello\'"//escape sequence counts as one 
console.log(str1.length)

//to uppercase and lowercase funcn
let str2="World"
console.log(str2.toUpperCase())
console.log(str2.toLowerCase())

//slice funcn
console.log(str2.slice(1,9))//will print from index 1 to index 9(orld)
console.log(str2.slice(1,3))
console.log(str2.slice(3))//wil not print the letters on the index 0,1,2

//replace funcn(replace a word from a string)
str2="world is very big"
console.log(str2.replace("world","duniya"))

//concat funcn

let name1="ayush"
let name2="AYU"
console.log(name1.concat(" is a frnd of ", name2 ," okayyy"))


//trim funcn

let name3="         hello world             "
console.log(name3.trim())//dont print the spaces 
