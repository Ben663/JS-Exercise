/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement 
a function that determines whether a string that contains only letters is an isogram. Assume the 
empty string is an isogram. Ignore letter case.
*/

function isIsogram (string) {
    str = string.toLowerCase();

    for (let i = 0; i < string.length - 1; i++) {
        for (let j = i +1; j < string.length; j++) {
            if (string[i] === string[j]) {
                return false;
            }
        }
    }
    return true;
}
console.log(isIsogram("moOse"));
console.log(isIsogram("aba")); // return false
console.log(isIsogram("Dermatoglyphics")); // return true