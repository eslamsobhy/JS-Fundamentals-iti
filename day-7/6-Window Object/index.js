function openChildWindow() {
  var childWindow = window.open("child.html");
  setTimeout(function () {
    childWindow.close();
  }, 5000);
}
