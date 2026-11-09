/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let a=nums.length;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>=target){
            a=i;
            break;
        }
    }
    return a;
};