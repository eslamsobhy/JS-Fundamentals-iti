// 1
function currentDate() {
  var date = new Date();
  document.getElementById("date").innerHTML = date;
}

// 2
function calculator(str) {
  document.querySelector(".res").style.color = "green";
  var input = prompt("Please enter any math expression: (e.g. 3+4*5/10*8)");
  try {
    document.querySelector(".res").innerHTML = eval(input);
  } catch (e) {
    document.querySelector(".res").style.color = "red";
    document.querySelector(".res").innerHTML =
      "Please enter valid expression to calculate!";
  }
}
