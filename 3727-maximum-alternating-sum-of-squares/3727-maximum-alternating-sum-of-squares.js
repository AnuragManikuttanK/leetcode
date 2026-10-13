/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    let score=0;
    let n=nums.map(n=>n*n);
    n.sort((a,b)=>a-b);
    for(let i=0;i<n.length;i++){
        if(i<Math.floor(n.length/2)){
            score-=n[i];
        }else{
            score+=n[i];
        }
    }
    return score;
};