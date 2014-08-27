function TriangleClassifier(side1, side2, side3){
  var sorted_sides = [side1, side2, side3].sort(function(a, b){
    return a - b;
  });

  var short_leg = sorted_sides[0];
  var long_leg = sorted_sides[1];
  var hypotenuse = sorted_sides[2];

  if (short_leg + long_leg < hypotenuse) {
    return("impossible");
  }
  else if (short_leg == long_leg && short_leg == hypotenuse) {
    return("equilateral");
  }
  else if (short_leg == long_leg || long_leg == hypotenuse) {
    return("isosceles");
  }
  else {
    return("scalene");
  }
};

$(document).ready(function(){
  $("form.user_input").submit(function(event){
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    var output = TriangleClassifier(side1, side2, side3);

    $("#classification").text(output);
  });
});