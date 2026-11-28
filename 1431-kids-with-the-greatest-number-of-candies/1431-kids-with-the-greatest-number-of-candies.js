/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let a=[];
    let b=[];
    let re=Math.max(...candies);
    for(let i=0;i<candies.length;i++){
        let total=candies[i]+extraCandies;
        a.push(total);
    }
    for(let i=0;i<a.length;i++){
        if(a[i]>=re){
            b.push(true);
        }else{
            b.push(false);
        }
    }
    return b;
};