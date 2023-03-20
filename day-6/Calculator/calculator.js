function EnterEqual() {
  var res = document.getElementById("Answer");
  var expression = res.value;
  res.value = eval(expression);
}

function EnterNumber(input) {
  var res = document.getElementById("Answer");
  res.value += input;
}

function EnterOperator(input) {
  var res = document.getElementById("Answer");
  res.value += input;
}

function EnterClear() {
  var res = document.getElementById("Answer");
  res.value = "";
}
