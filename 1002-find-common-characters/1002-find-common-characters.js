/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let re=[];
    let arr=words[0].split("");
    for(let i=0;i<arr.length;i++){
        let ne=arr[i];
        let found=true;
        for(let j=1;j<words.length;j++){
            let ind=words[j].indexOf(ne);
            if(ind===-1){
                found=false;
                break;
            }
            words[j]=words[j].slice(0,ind) + words[j].slice(ind+1);
        }
        if(found){
            re.push(ne)
        }
    }
    return re;
};