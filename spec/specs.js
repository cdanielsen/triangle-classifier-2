
describe("TriangleClassifier", function(){
  it("classifies a triangle as impossible if two of its given lengths add to less than the third", function(){
    TriangleClassifier(10,1,4).should.equal("impossible");
  });
  it("classifies a triangle as isosceles if exactly two of its given lengths are equal", function(){
    TriangleClassifier(3,6,6).should.equal("isosceles");
  });
});