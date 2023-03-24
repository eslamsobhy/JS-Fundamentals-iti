document.body.addEventListener("keypress", function (e) {
  console.log("key: " + e.key + ", ASCII: " + e.charCode);
  if (e.altKey) {
    console.log("alt key is used");
  }
  if (e.shiftKey) {
    console.log("shift key is used");
  }
  if (e.ctrlKey) {
    console.log("ctrl key is used");
  }
});
