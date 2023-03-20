var colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "black",
  "orange",
  "aqua",
  "purple",
  "grey",
  "brown",
];

function handleClick() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var randomColor = "rgb(" + r + "," + g + "," + b + ")";
  // var bgcolor = colors[randomColor];
  var newNode = document.querySelector(".square").cloneNode();
  newNode.style.backgroundColor = randomColor;
  document.querySelector(".container").append(newNode);
}
