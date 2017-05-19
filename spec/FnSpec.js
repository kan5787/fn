/**
 * Created by Jolene on 2017/5/19.
 */
var main=require('../FnMain.js');

describe("Word Frequency",function(){
    it("returns empty string given string",function () {
        var result=main('');
        expect(result).toEqual('');
    });

    it("returns string given one word",function () {
        var result=main('he');
        expect(result).toEqual('he 1');
    });

    it("returns string given two different words",function () {
        var result=main('he is');
        expect(result).toEqual('he 1\r\nis 1');
    })

    it("returns string given duplicated words",function () {
        var result=main('he he is');
        expect(result).toEqual('he 2\r\nis 1');
    });
});