// 1
function validate(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw "ERROR: Arguments are not valid!";
  }
  if (arguments.length !== 2) {
    throw "ERROR: Number of arguments is not valid!";
  }
  console.log(num1, num2);
}

// 2
function reverse() {
  var reversed = "";
  for (var i = arguments.length - 1; i >= 0; i--) {
    reversed += " | " + arguments[i] + " | ";
  }
  return reversed;
}

// 3
function add() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      throw "ERROR: Non-Numeric values are not accepted!";
    }
    sum += arguments[i];
  }
  return sum;
}

// 4
function numberInput(message) {
  if (isFinite(message)) {
    throw "ERROR: Invalid message!";
  }
  do {
    var num = prompt(message);
  } while (isNaN(num) || num === null);
  return num;
}

// Calling the functions:
// 1
// validate(1, "eslam");

// 2
// console.log(reverse(1, "menna", "Leo", 2));

// 3
// console.log(add(1, 2, 7));

// 4
// console.log(numberInput("Please Enter Your Age:"));
// console.log(numberInput("Please Enter Your Expected Salary:"));
