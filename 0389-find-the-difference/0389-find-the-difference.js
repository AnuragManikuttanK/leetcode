/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let re=s.split("");
    let ne=t.split("");
    let a;
    for(let i=0;i<ne.length;i++){
        let found=false;
        for(let j=0;j<re.length;j++){
            if(ne[i]===re[j]){
                re.splice(j,1);
                found=true;
                break;
            }
        }
        if(!found){
            a=ne[i];
        }
    }
    return a;
};