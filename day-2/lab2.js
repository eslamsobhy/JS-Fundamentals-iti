// 1

for (var i = 10; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 2
for (var i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 3
alert("Welcome to my site!");
var userName = prompt("Enter your name pls:");
alert("Welcome " + userName);

// 4
var sum = 0; // initial value
do {
  var value = prompt("Enter a number pls:");
  if (!isNaN(value)) {
    sum += parseInt(value);
  }
} while (value != 0 && !(sum > 100));

console.log("The sum of the values you entered: " + sum);

// 5
var message = prompt("Enter your message pls: ");
for (var i = 1; i < 7; i++) {
  document.write("<h" + i + ">" + message + "</h" + i + ">");
}

// 6
do {
  var userName = prompt("Enter your name pls: ");
} while (!isNaN(userName));

do {
  var birthYear = prompt("Enter your year of birth pls: ");
} while (isNaN(birthYear) || !(parseInt(birthYear) <= 2010));

var age = 2023 - parseInt(birthYear);

document.write(
  "<span style='font-weight:bold; text-decoration:underline'>Name</span>: " +
    userName +
    "<br />"
);
document.write(
  "<span style='font-weight:bold; text-decoration:underline'>Birth Year</span>: " +
    birthYear +
    "<br />"
);
document.write(
  "<span style='font-weight:bold; text-decoration:underline'>Age</span>: " + age
);
