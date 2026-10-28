/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let s=0;
    for(let i=1;i<=x;i++){
        if(i*i>x){
            break;
        }
        s=i;
    }
    return s;
};