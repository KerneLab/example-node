var simple = require('../lib/script');
var expect = require("expect.js");

describe("another test", function(){
  it("should return null", function(){
    expect(simple.math(2)).to.be(null);
  });
  it("should be equal" , function(){
  	expect([1,2]).to.eql([1,2]);
  });
});
