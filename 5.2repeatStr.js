/*
Write a function called repeat_str which repeats the given string src exactly count times.
*/

function repeat_Str (num , string) {
    let str = num > 0 ? string.repeat(num) : " "
    return str;
    
}
console.log(repeat_Str(2 , 'fulltack')); // return fulltackfulltack
console.log(repeat_Str(5, "Hello")); //return HelloHelloHelloHelloHello
console.log(repeat_Str(6, "I")); //return IIIIII