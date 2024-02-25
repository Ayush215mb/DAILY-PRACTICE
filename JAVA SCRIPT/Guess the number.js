//to take input in js
const ps= require("prompt-sync");

const prompt=ps();

//to create a random number between 0-100
let num= Math.floor(Math.random()*100);

let chances=0;
console.log(num);

let guessnumber;
while(true)
{
    if (chances==0)
    {   guessnumber = prompt("Guess a number between 0 to 100:")
    }
    
    if(guessnumber > 0 && guessnumber <= num-50) console.log("\nYour guessed number is too low\n")
    if(guessnumber > num-50 && guessnumber <= num- 20) console.log("\nYour guessed number is low\n")
    if(guessnumber > num- 20 && guessnumber < num) console.log("\nYour guessed number is close\n")
    
    if(guessnumber > num && guessnumber <=num+20) console.log("\nYour guessed number is close\n")
    if(guessnumber > num+20 && guessnumber <=num+50) console.log("\nYour guessed number is high\n")
    if(guessnumber > num+50 && guessnumber <100) console.log("\nYour guessed number is too high\n")

    if(guessnumber<0 || guessnumber>100) console.log("\nThe number is not between 0-100!\n")
    
    chances++;
    
    if(guessnumber==num) 
    {   console.log("\nYou have guessed it correct!! \nThe number is",num.toString(),"\nYour score is ",(100-chances).toString(),"\n")       
        break
    }

    if(chances==60) 
    {   console.log("\nYOU ARE A FOOL!\n")
        break
    }

    guessnumber=prompt("Guess it again:")
}
