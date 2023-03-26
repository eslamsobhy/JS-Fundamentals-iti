// input fields
var nameInput = document.getElementsByTagName("input")[0];
var emailInput = document.getElementsByTagName("input")[1];
var ageInput = document.getElementsByTagName("input")[2];

// error spans
var nameError = document.getElementById("name");
var emailError = document.getElementById("email");
var ageError = document.getElementById("age");

// table

function add() {
  var nameClear = false;
  var emailClear = false;
  var ageClear = false;
  //   checking the validation for the name
  if (nameInput.value == "") {
    nameError.innerText = "This field is required!";
  } else if (!/^[A-Za-z]+$/.test(nameInput.value)) {
    nameError.innerText = "Just alphabetic characters are allowed!";
  } else {
    nameError.innerText = "";
    nameClear = true;
  }

  //   checking the validation for the email
  if (emailInput.value == "") {
    emailError.innerText = "This field is required!";
  } else if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailInput.value)) {
    emailError.innerText = "Not valid email!";
  } else {
    emailError.innerText = "";
    emailClear = true;
  }

  //   checking the validation for the age
  if (ageInput.value == "") {
    ageError.innerText = "This field is required!";
  } else if (!/^[0-9]*$/.test(ageInput.value)) {
    ageError.innerText = "Just numbers are allowed!";
  } else if (parseInt(ageInput.value) > 60 || parseInt(ageInput.value) < 15) {
    ageError.innerText = "The age is not allowed!";
  } else {
    ageError.innerText = "";
    ageClear = true;
  }

  if (nameClear && emailClear && ageClear) {
    document.querySelector("tbody").innerHTML +=
      "<tr><td>" +
      nameInput.value +
      "</td><td>" +
      emailInput.value +
      "</td><td>" +
      ageInput.value +
      "</td></tr>";
    document.querySelector("table").style.display = "table";
    nameInput.value = "";
    emailInput.value = "";
    ageInput.value = "";
  }
}

function reset() {
  nameInput.value = "";
  emailInput.value = "";
  ageInput.value = "";
  document.querySelector("tbody").innerHTML = "";
  document.querySelector("table").style.display = "none";
}

function resetTable() {
  document.querySelector("tbody").innerHTML = "";
}

function resetInputs() {
  nameInput.value = "";
  emailInput.value = "";
  ageInput.value = "";
}
