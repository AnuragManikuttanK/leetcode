/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let a=String(n);
    let su=0;
    let pr=1;
    for(let i=0;i<a.length;i++){
        su=su+Number(a[i]);
        pr=pr*Number(a[i]);
    }
    
    return pr-su;
};