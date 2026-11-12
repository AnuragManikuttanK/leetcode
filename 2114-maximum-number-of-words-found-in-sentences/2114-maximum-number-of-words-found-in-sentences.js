/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let a=0;
    for(let i=0;i<sentences.length;i++){
        let re=sentences[i].split(" ");

        if(re.length>a){
            a=re.length;
        }
    }
    return a;
};