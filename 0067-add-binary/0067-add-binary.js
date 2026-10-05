/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let nu1=BigInt("0b"+a);
    let nu2=BigInt("0b"+b);
    let sum=nu1+nu2;
    return sum.toString(2);
};