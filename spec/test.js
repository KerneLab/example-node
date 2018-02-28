var simple = require('../lib/script');

describe("simple", function(){
  it("should return true", function(){
    expect(simple.math(1)).toBe(true);
  });
  it("should return false", function(){
    expect(simple.math(0)).toBe(false);
  });
});
