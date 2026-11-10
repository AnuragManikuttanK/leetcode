/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str=String(x);
    let rev="";
    let result;
    for(let i=str.length-1;i>=0;i--){
         rev=rev+str[i];
    }
    if(str==rev){
         result=true;
    }else{
         result=false;
    }
    return result;
};