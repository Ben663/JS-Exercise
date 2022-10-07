/*
Ex1.1 - Yes or No 
Complete the method that takes a boolean value and 
return a "Yes" string for true, or a "No" string for false. 
*/
function yesorNo(value) 
{
    return value ? "YES" : "NO" ;
}
console.log(yesorNo(true)); // return yes
console.log(yesorNo(false)); // return no
console.log(yesorNo("Hola")); // return yes
console.log(yesorNo(0)); // return no