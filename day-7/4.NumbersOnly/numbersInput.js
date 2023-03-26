var inputField = document.querySelector("input");

inputField.addEventListener("input", function (e) {
  if (e.data.charCodeAt(0) < 48 || e.data.charCodeAt(0) > 57) {
    inputField.value = "";
    inputField.style.borderColor = "red";
  } else {
    inputField.style.borderColor = "green";
  }
});
