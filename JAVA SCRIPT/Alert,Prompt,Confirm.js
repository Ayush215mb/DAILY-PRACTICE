//                              part-01(video-27)
alert("this is a js code to give alert")



alert("Enter a value of A")

let a =prompt("Enter it here:")//prompt funcn ek string leta h toh hume khud se usko number mei lena hoga
document.write(a);//to print the number in the html webpage
alert("you have entered a type of " + (typeof a))

//let's change it to integer by using parseint funcn
a= Number.parseInt(a)

alert("you have entered a type of " + (typeof a))


alert("Enter a value of A")

 a =prompt("Enter it here:","0001")//yha pe dusra ek default value hota h

let write= confirm("you want to write it ?");
while(true){
    if(write)
    {   document.write(a);
        break;
    }
    else
    {   alert("Allow me to write!!")
     write= confirm("you want to write it ?");
    }
    
}
