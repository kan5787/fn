/**
 * Created by Jolene on 2017/5/19.
 */
var format=function(word,count){
    return word+' '+count;
}
function main(words) {
    if(words !==''){
        let wordArray=words.split(' ');
        return wordArray.map((w)=>format(w,1)).join('\r\n');
    }
    return ''
}

module.exports=main;