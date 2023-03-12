// CONVERTING
// Convert from string to number
var quantity = "12";
console.log(typeof quantity);

var quatityToNum = Number(quantity); // using Number() function
console.log(Number("eslam")); // error: unexpected string
console.log(Number(true)); // 1
var quatityToNum2 = parseInt(quantity); // using parseInt() function
console.log(parseInt("eslam")); // NaN
console.log(typeof quatityToNum);
console.log(typeof quatityToNum2);

// Convert from number to string
var num = 77;
var numToString = num.toString();
console.log(typeof num);
console.log(typeof numToString);

// CHECKING
// Checking if a variable is a string!?
var z = "Hakuna Matata";
console.log("10" instanceof String);

// Checking if a variable is a number!?
var x = 10;
var y = "Eslam";
console.log(isNaN(x)); // false
console.log(isNaN(y)); // true
