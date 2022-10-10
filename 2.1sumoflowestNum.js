/*
Create a function that returns the sum of the two lowest positive numbers given an array of 
minimum 4 positive integers. No floats or non-positive integers will be passed.
*/

function sumofLowest(numbers) {
    let result = numbers.sort((a, b) => a - b)
        .slice(0, 2);
    var sum = 0;
    for (i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log(sumofLowest([19, 5, 42, 2, 77])); // return 7
console.log(sumofLowest([10, 343445353, 3453445, 3453545353453])); // return 3453455
