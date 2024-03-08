
let arr1=[10,20,30,40,50];
/*arr,splice(index jaha se elements add krne h , jitne elements delete krne h uss index se wo likho
    , jo elements add krne h wo likho{isme jitne mann utne elements likh skte ho wo uss idex ke baad mei add ho jayenge}                 )
 
    IMP POINT: it return deleted value and modifies the current array
 */
console.log("The length of array is :",arr1.length);
arr1.splice(3,0,31,32,33,34)

console.log("After using splice(3,0,31,32,33,34)--->",arr1.toString());

let deletedElements = arr1.splice(0,3,)
console.log("After using splice(0,3,)--->",arr1);
console.log("deleted elements--->",deletedElements);

