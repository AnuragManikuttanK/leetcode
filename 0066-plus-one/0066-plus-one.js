/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let re=digits.join("");
    let ne=BigInt(re)+1n;
    let a=String(ne).split("").map(Number)
    return a;
};