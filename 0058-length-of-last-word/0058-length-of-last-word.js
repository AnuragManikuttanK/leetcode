/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let ne=s.trim();
    let a=ne.split(" ");
    let re="";
    for(let i of a){
        re=i;
    }
    return re.length;

};