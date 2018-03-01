var simple = require('../lib/script');

describe("another test", function(){
  it("should return null", function(){
    expect(simple.math(2)).toBe(null);
  });
  it("should be equal" , function(){
  	expect([1,2]).toEqual([1,3]);
  });
});
