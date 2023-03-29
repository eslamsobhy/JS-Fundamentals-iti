var currentMarble = 0;
var images = document.getElementsByTagName("img");

function animation() {
  images[currentMarble].setAttribute("src", "./images/marble1.jpg");
  if (currentMarble < 4) {
    images[currentMarble + 1].setAttribute("src", "./images/marble2.jpg");
  }
  currentMarble++;
  if (currentMarble > 4) {
    currentMarble = 0;
    images[currentMarble].setAttribute("src", "./images/marble2.jpg");
  }
}

var animationInterval = setInterval(animation, 500);

var imgContainer = document.getElementsByClassName("img-container")[0];
imgContainer.addEventListener("mouseover", function () {
  clearInterval(animationInterval);
});

imgContainer.addEventListener("mouseout", function () {
  animationInterval = setInterval(animation, 500);
});
