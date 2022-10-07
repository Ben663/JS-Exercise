/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!
*/

function findUniq(numbers) {
    return numbers.find(i => numbers.filter(x => x === i).length === 1)
}
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0,0.55, 0, 0]));


