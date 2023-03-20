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
  var randomColor = Math.floor(Math.random() * colors.length);
  var bgcolor = colors[randomColor];
  var newNode = document.querySelector(".square").cloneNode();
  newNode.style.backgroundColor = bgcolor;
  document.querySelector(".container").append(newNode);
}
