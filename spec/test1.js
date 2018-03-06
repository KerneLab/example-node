var simple = require("../lib/script");
var expect = require("expect.js");

describe("simple1", function(){
  it("should return true", function(){
    expect(simple.math(2)).to.be(null);
  });
  it("should return false", function(){
    expect([1,2]).to.eql([1,2]);
  });
  it("should return false", function(){
    expect({"id":1,"name":"mike"}).to.eql({"name":"mike","id":1});
  });
});
