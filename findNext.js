function findnextSquare (Number) {
    return Math.sqrt(Number) % 1 === 0 ? Math.pow((Math.sqrt(Number) + 1), 2) : -1;
}
console.log(findnextSquare(121)); // return 144
console.log(findnextSquare(625)); // return 676
console.log(findnextSquare(114)); // return -1