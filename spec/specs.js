
describe("TriangleClassifier", function(){
  it("classifies a triangle as impossible if two of its given lengths add to less than the third", function(){
    TriangleClassifier(10,1,4).should.equal("impossible");
  });
  it("classifies a triangle as isosceles if exactly two of its given lengths are equal", function(){
    TriangleClassifier(3,6,6).should.equal("isosceles");
  });
  it("classifies a triangle as equilateral if all three of its given sides are equal", function(){
    TriangleClassifier(4,4,4).should.equal("equilateral");
  });
  it("classifies a triangle as scalene if it is not impossible, equilateral, or isosceles", function(){
    TriangleClassifier(4,7,9).should.equal("scalene");
  });
});