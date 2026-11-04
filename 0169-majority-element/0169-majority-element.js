/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   let count=0;
   let re=0;
   for(let i of nums){
    if(count===0){
        re=i;
    }

    if(re===i){
        count++;
    }else{
        count--;
    }
   }
   return re;
};