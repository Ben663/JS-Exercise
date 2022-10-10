/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the 
longest possible, containing distinct letters, 
each taken only once - coming from s1 or s2.
*/


function longest(s1, s2) {
    let Arr = s1.toLowerCase().split("").concat(s2.toLowerCase().split(" "));
    const newarr = [];
    for (let i = 0; i < Arr.length; i++) {
        if (!newarr.includes(Arr[i])) {
            newarr.push(Arr[i])
        }
    }
    return newarr.sort().join("");


}
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq ", "hhhhhhyyyyabklmopq "));
 // return abcdefwxxxxxyyyyabklmopqy