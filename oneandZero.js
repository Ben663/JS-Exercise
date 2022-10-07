/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/

const arr = [1, 0, 1, 1];
let parsaArr = arr =>{
    const binarystr=arr.join("");
    return parseInt(binarystr, 2);
}
console.log(parsaArr(arr));

// return 11