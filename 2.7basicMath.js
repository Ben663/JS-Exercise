/*
Your task is to create a function that does four basic . 
The function should take three arguments - operation(string/char), value1(number), 
value2(number). 
The function should return result of numbers after applying the chosen operation.
*/

function basicOp (ope, value, value1) {
    switch (ope) {
        case "+":
            return value + value1;
        case "-":
            return value - value1;
        case "*":
            return value * value1;
        case "/":
            return value / value1;
    }
}
console.log(basicOp('+', 4, 7)); // return 11
console.log(basicOp('-', 15, 18)); // return -3
console.log(basicOp('*', 5, 5)); // return 25
console.log(basicOp('/', 49, 7)); // return 7