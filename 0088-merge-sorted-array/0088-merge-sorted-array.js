/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let ar=[];
    for(let i=0;i<m;i++){
        ar.push(nums1[i]);
    }
    let re=ar.concat(nums2);
    re.sort(function(a,b){
        return a-b;
    })
    for(let i=0;i<m+n;i++){
        nums1[i]=re[i];
    }
};