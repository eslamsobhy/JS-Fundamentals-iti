var images = document.getElementsByTagName("img");

var timer;
var isImgHovered = false;
var imgContainer = document.querySelector(".img-container");

// when hovering the image container
imgContainer.addEventListener("mouseenter", function () {
  isImgHovered = true;
  clearTimeout(timer);
});

// when the mouse leaves the image container
imgContainer.addEventListener("mouseleave", function () {
  isImgHovered = false;
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("src", "./images/marble1.jpg");
  }
  animation();
});

function animation() {
  timer = setTimeout(function () {
    images[0].setAttribute("src", "./images/marble2.jpg");
  }, 500);
  timer = setTimeout(function () {
    images[0].setAttribute("src", "./images/marble1.jpg");
    images[1].setAttribute("src", "./images/marble2.jpg");
  }, 1000);
  timer = setTimeout(function () {
    images[1].setAttribute("src", "./images/marble1.jpg");
    images[2].setAttribute("src", "./images/marble2.jpg");
  }, 1500);
  timer = setTimeout(function () {
    images[2].setAttribute("src", "./images/marble1.jpg");
    images[3].setAttribute("src", "./images/marble2.jpg");
  }, 2000);
  timer = setTimeout(function () {
    images[3].setAttribute("src", "./images/marble1.jpg");
    images[4].setAttribute("src", "./images/marble2.jpg");
  }, 2500);
}
