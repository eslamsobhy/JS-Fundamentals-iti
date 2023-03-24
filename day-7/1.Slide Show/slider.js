// btns
var next = document.querySelector(".next-btn");
var slideShow = document.querySelector(".show-btn");
var stopShow = document.querySelector(".stop-btn");
var prev = document.querySelector(".prev-btn");

// Current Image
var img = document.querySelector("img");
var imgNum = img.getAttribute("src").slice(-5).charAt(0);

// event listeners
// next btn
next.addEventListener("click", function () {
  if (parseInt(imgNum) < 6) {
    img.setAttribute("src", "images/" + (parseInt(imgNum) + 1) + ".jpg");
    imgNum++;
  }
});

// Slide Show
var timer;
slideShow.addEventListener("click", function () {
  timer = setInterval(function () {
    img.setAttribute(
      "src",
      "images/" + (((parseInt(imgNum) + 1) % 6) + 1) + ".jpg"
    );

    /*if (parseInt(imgNum === 6)) {
      imgNum = 0;
    }
    img.setAttribute("src", "images/" + (parseInt(imgNum) + 1) + ".jpg");*/
    imgNum++;
  }, 2000);
});

// stop slide show
stopShow.addEventListener("click", function () {
  clearInterval(timer);
});

// prev btn
prev.addEventListener("click", function () {
  if (parseInt(imgNum) > 1) {
    img.setAttribute("src", "images/" + (parseInt(imgNum) - 1) + ".jpg");
    imgNum--;
  }
});
