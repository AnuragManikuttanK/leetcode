/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num>=10){
        let re=0;
        for(let i=num;i>0;i=Math.floor(i/10)){
            let ne=i%10;
            re+=ne;
        }
        num=re;
    }
    return num;
};