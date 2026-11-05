/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count=0;
    for(let i of arr1){
        let isValid=true;
        for(let j of arr2){
            if(Math.abs(i-j)<=d){
                isValid=false;
                break;
            }
        }
        if(isValid){
            count++;
        }
    }
    return count;
};