describe('Test for my greet function' , function(){
    it("it should return 'Hello, Ntsika' when called with 'Ntsika'  " , function(){
        assert.equal("Hello, Ntsika",greet("Ntsika"));

    });
    it("it should return 'Hello, Brian' when called with 'Brian'  " , function(){
        assert.equal("Hello, Brian",greet("Brian"));

    });
    it("it should return 'Hello, Sphokazi' when called with 'Sphokazi' " , function(){
        assert.equal("Hello, Sphokazi",greet("Sphokazi"));

    });
    
});

