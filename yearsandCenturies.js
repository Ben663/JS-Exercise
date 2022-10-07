/*
The first century spans from the year 1 up to and including the year 100, The second - from the 
year 101 up to and including the year 200, etc. 
Task :Given a year, return the century it is in Input  
*/

function centuryfromYear(year) {
    let count = 0 ; 
    while (year > 0) {
        year= year -100;
        count++;
    }
    return count;
}
console.log(centuryfromYear(1705)); // return 18
console.log(centuryfromYear(1900)); // return 19
console.log(centuryfromYear(1601)); // return 17
console.log(centuryfromYear(2000)); // return 20