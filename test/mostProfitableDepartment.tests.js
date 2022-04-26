describe('Test for my mostProfitableDepartment function' , function(){
    it("it should return 'hardware' if the information passed in is 'Monday' ", function(){
        assert.equal('', mostProfitableDepartment('Monday'));
        
    });

    it("it should return 'outdoor' if the information passed in is 'Monday' ", function(){
        assert.equal('', mostProfitableDepartment('Monday'));
        
    });
    it("it should return 'carpentry' if the information passed in is 'Tuesday' ", function(){
        assert.equal('', mostProfitableDepartment('Tuesday'));
        
    });

});


