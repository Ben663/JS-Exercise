/*
Complete the findNextSquare method that finds the next integral perfect square after the one 
passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is 
also an integer.
If the parameter is itself not a perfect square then -1 should be returned. You may assume the 
parameter is positive. 
*/
function findnextSquare (Number) {
    return Math.sqrt(Number) % 1 === 0 ? Math.pow((Math.sqrt(Number) + 1), 2) : -1;
}
console.log(findnextSquare(121)); // return 144
console.log(findnextSquare(625)); // return 676
console.log(findnextSquare(114)); // return -1