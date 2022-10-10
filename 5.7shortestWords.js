/*
Simple, given a string of words, return the length of the shortest word(s). 
String will never be empty and you do not need to account for different data types. 
*/

const shortest = (string => {
    str = string.split(" ");
    str.sort((a, b) => a.length - b.length);
    return str[0]
})
console.log(shortest("the length of the shortest word")); // return 'of
