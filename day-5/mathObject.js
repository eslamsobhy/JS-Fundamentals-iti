// 1
do {
  var r = prompt(
    "Please enter the raduis of the circle: (only numbers accepted)"
  );
} while (isNaN(r));

alert("The Area: " + Math.PI * Math.pow(r, 2));

do {
  var num = prompt(
    "Please enter the number you want to clac. its square root: (only numbers accepted)"
  );
} while (isNaN(r));

alert("The sqrt: " + Math.sqrt(num));
