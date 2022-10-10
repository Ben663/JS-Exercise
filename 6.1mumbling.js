/*
This time no story, no theory. The examples below show you how to write function 
accum​: 
Examples: 
accum("abcd") -> "A-Bb-Ccc-Dddd" 
accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy" 
accum("cwAt") -> "C-Ww-Aaa-Tttt" 
The parameter of accum is a string which includes only letters from ​a..z​ and ​A..Z​.
*/

function accum (string) {
    Arr = string.toUpperCase().split(""); 
    for ( let i = 0; i <Arr.length; i++) {
        Arr[i] = Arr[i] + Arr[i].toLowerCase().repeat(i);
    }
    return Arr.join("-")
    
}
console.log(accum("cwAT")); // return C-Ww-Aaa-Tttt
console.log(accum("RqaEzty")); // return R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy