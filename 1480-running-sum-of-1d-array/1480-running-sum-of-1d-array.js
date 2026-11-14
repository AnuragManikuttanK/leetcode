/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let re=0;
    let ar=[];
    for(let i=0;i<nums.length;i++){
        re=re+nums[i];
        ar.push(re);
    }
    return ar;
};