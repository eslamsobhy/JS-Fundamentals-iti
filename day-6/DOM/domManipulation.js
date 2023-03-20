do {
  var inputNumber = prompt("Enter the number of users pls:");
} while (!/^[0-9]*$/.test(inputNumber));

var names = [];
var ages = [];

function getData() {
  for (var i = 0; i < inputNumber; i++) {
    // getting the name
    do {
      var name = prompt("Enter the name pls: ");
    } while (isFinite(name) || name.length <= 3 || name.length >= 10);
    // getting the age
    do {
      var age = parseInt(prompt("Enter the age pls: "));
    } while (!/^[0-9]*$/.test(age) || age <= 10 || age >= 60);
    // pushing values
    names.push(name);
    ages.push(age);
  }
}

function fillData() {
  for (var i = 0; i < inputNumber; i++) {
    document.querySelector("tbody").innerHTML +=
      "<tr><td>" + names[i] + "</td><td>" + ages[i] + "</td></tr>";
  }
  document.querySelector("table").style.display = "table";
}

getData();
fillData();
console.log(names);
console.log(ages);
