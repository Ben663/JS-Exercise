/*
Write a function to convert a name into initials. This kata strictly takes two words with one space 
in between them. 
The output should be two capital letters with a dot separating them.
*/

function abbreviateName (name) {
    const arrName = name.split(" ")
    return (arrName[0][0].toUpperCase() + "." + arrName[1][0].toUpperCase());
}
console.log(abbreviateName("benny grinvald")); // return B.G
console.log(abbreviateName("sam harris")); // return S.H
console.log(abbreviateName("patrick feeney")); // return P.F
