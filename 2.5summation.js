/*
Write a program that finds the summation of every number from 1 to num. The number will 
always be a positive integer greater than 0. 
*/

function summation(number) {
    let sum = 0, x = 1;
    for(; x<= number; x++){
        sum += x;
    }
    return sum;
}
console.log(summation(8)); // return 36
console.log(summation(2)); // return 3