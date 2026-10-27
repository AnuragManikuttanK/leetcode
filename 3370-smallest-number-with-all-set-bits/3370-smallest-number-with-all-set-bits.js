/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let a=1;
    while(a<n){
        a=a*2+1;
    }
    return a;
};