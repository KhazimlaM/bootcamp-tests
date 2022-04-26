describe('Test for my isWeekday function' , function(){
    it("it should return 'false' if it starts wiith 'S' " , function(){
        assert.equal(false,isWeekday("S"));

    });
    it("it should return 'true' if it starts with 'M || T  || W || T || F' " , function(){
        assert.equal(true,isWeekday("W"));

    });
    it("it should return 'true' if it starts with 'M || T  || W || T || F' " , function(){
        assert.equal(true,isWeekday("F"));

    });

});

