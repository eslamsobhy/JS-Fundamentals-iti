// 1
var y;
console.log(y); // undefined

// 2
console.log(y); // error: y is not defined

// 3
var x = 10;
var y = 20;
console.log(y - x * 2); // 0

// 4
var y;
console.log(typeof y); // undefined

// 5
var x = "1";
var y = 2;
console.log(x + y); // NOT 3 BUT "12"

// 6
var x = 1;
var y = true;
console.log(x + y); // 2

// 7
var x = 12;
var y = "6";
console.log(x / y); //2

// 8
console.log(15 + 3 + "number"); // NOT "153number" BUT "18number"
console.log("number" + 15 + 3); // NOT "number18" BUT "number153"

// 9
var x = false;
var y = !!x; // => !(!x) => !(!false) => !(true) => false
console.log(y); // false

// 10
var x = "menna";
console.log(typeof x == "string"); // true

// 11
var x = false;
console.log(typeof x == 0); // flase
