function TriangleClassifier(side1, side2, side3){
  var sorted_sides = [side1, side2, side3].sort(function(a, b){
    return a - b;
  });

  var short_leg = sorted_sides[0];
  var long_leg = sorted_sides[1];
  var hypotenuse = sorted_sides[2];

  if (short_leg + long_leg < hypotenuse)
    return("impossible");
};