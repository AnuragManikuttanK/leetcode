/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let re=n.toString(2).padStart(32,"0");
    let ne="";
    for(let i=re.length-1;i>=0;i--){
        ne=ne+re[i];
    }
    let ar=parseInt(ne,2);
    return ar;
};