/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let re=Math.max(...nums);
    let ne=0;
    for(let i=0;i<nums.length;i++){
        while(nums[i]<re){
            nums[i]=nums[i]+1;
            ne++;
        }
    }
    return ne;
};