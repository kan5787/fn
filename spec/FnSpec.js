/**
 * Created by Jolene on 2017/5/19.
 */
var main=require('../FnMain.js');

describe("Word Frequency",function(){
    it("returns empty string given string",function () {
        var result=main('');
        expect(result).toEqual('');
    });
});