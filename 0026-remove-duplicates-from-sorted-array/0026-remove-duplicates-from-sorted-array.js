/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let re=[...new Set(nums)];
    for(let i=0;i<re.length;i++){
        nums[i]=re[i];
    }
    return re.length;
};