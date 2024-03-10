
let arr1=[10,20,30,40,50];
/*arr,slice(jis index ke baad se print krana h, jis index tk print krana h)
 
    IMP POINT: ye array ko modify ni krta h, ye new array mei create krta h
 */

arr1.slice(3)//slice funcn modify ni krta h toh kuch chngs print ni hoga

console.log("After using slice(3)--->",arr1.toString(),"\n");

let newarr = arr1.slice(3)
console.log("creating another array using slice funcn--->",newarr.toString(),"\n");

arr1.push(21,22,23,24,25);
console.log("array after adding new elements--->",arr1.toString(),"\n");

newarr= arr1.slice(4,7)/* there will be no chngns in the arr1 array but the elements of 
newarr array will be replaced by the elements of arr1 from index 5 to 6*/

console.log("Changing the new array again using the slice-->",newarr.toString(),"\n");
console.log("The original array remain unaffected by the slice funcn-->",arr1.toString(),"\n");
