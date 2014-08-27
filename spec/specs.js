
describe("TriangleClassifier", function(){
  it("classifies a triangle as impossible if two of its given lengths add to less than the third", function(){
    TriangleClassifier(10,1,4).should.equal("impossible");
  });
});