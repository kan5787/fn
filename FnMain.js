/**
 * Created by Jolene on 2017/5/19.
 */
var format=function(word,count){
    return word+' '+count;
}

var group=function (wordArray) {
    return wordArray.reduce((Array,word)=>{
    let entry=Array.find((e)=>e.word===word);
    if(entry){
        entry.count++;
    }
    else{
        Array.push({word:word,count:1});
    }
    return Array;
},[]);
};

function main(words) {
    if(words !==''){
        let wordArray=words.split(/\s+/);
        let groupedWords=group(wordArray);
        groupedWords.sort((x,y)=>y.count-x.count);
        return groupedWords.map((e)=>format(e.word,e.count)).join('\r\n');
    }
    return ''
}

module.exports=main;