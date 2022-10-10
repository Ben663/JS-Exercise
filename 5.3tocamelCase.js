/*
Complete the method/function so that it converts dash/underscore delimited words into camel 
casing. The first word within the output should be capitalized only if the original word was 
capitalized (known as Upper Camel Case, also often referred to as Pascal case).
*/

function toCamelCase(string) {
    result = "";
    for (i = 0; i < string.length; i++) {
        if (string[i] == "-" || string[i] == "_") {
            result += string[i + 1].toUpperCase();
            i++;
        } else {
            result += string[i];
        }
    }
    return result;
}
console.log(toCamelCase("the-stealth-warrior")); // return theStealthWarrior
console.log(toCamelCase("The_Stealth_Warrior")); // returns TheStealthWarrior