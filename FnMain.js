/**
 * Created by Jolene on 2017/5/19.
 */
var format=function(word,count){
    return word+' '+count;
}
function main(words) {
    if(words !==''){
        if (words.indexOf(' '>-1)){
            let wordArray=words.split(' ');
            return format(wordArray[0],1)+'\r\n'+format(wordArray[1],1);
        }
        return format(words,1);
    }
    return ''
}

module.exports=main;