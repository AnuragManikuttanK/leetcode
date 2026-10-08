/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let re=new Set();
    let du=[];
    for(let i of nums){
        if(re.has(i)){
            du.push(i)
        }else{
            re.add(i)
        }
    }
    nums=nums.filter(num=>!du.includes(num));
    return nums[0];
};