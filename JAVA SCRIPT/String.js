var nam="Ayush"
var nxtLine="\n\n"
//STRING ARE IMMUTABLE
    nam[0]="a"// zeroth index chng ni hua(sirf ek index ko chng ni skte)
    console.log(nam)
    console.log(nxtLine)
//Adding two strings
    var greet=" Hi "+ nam +"!!\n "+ " How r u?"
    console.log(greet)
    console.log(nxtLine)

    nam+= greet;
    console.log(nam)
    console.log(nxtLine)
// to store the length of the string
    var namlength= nam.length
    console.log(namlength)
    console.log(nxtLine)

//putting strings in funcn\
    function WordBalnk(myNoun, myAdjective, myVerb, myAdverb)
    {
        var result=""
        result += "The " + myAdjective + myNoun + myVerb + " to the store " + myAdverb
        return result;
    }

    console.log(WordBalnk("dog ","big ", "ran ", "quickly "))
    console.log(nxtLine)


