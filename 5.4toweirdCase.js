/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same 
string with all even indexed characters in each word upper cased, and all odd indexed 
characters in each word lower cased. The indexing just explained is zero based, so the zero-ith 
index is even, therefore that character should be upper cased. 
The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only 
be present if there are multiple words. Words will be separated by a single space(' ').
*/
function toWiredcase(string) {
    str = string.split(" ");
    return str
        .map((word) => {
            let strWired = "";
            for (let i = 0; i < word.length; i++) {
                if (i == 0 || i % 2 == 0) {
                    strWired += word[i].toUpperCase();
                } else {
                    strWired += word[i];
                }
            }
            return strWired;
        }).join(" ");
}
console.log(toWiredcase("String")); // return StRiNg
console.log(toWiredcase("Weird string case")); // return WeIrD StRiNg CaSe