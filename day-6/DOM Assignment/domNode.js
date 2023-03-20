// change bullets:
document.querySelector("#nav").style.width = "100px";
document.querySelector("#nav").style.margin = "0 auto";
document.querySelector("#nav").style.listStyle = "circle";

// change the position of the image:
document.querySelector("#header").style.textAlign = "right";

// clone
var clonned = document.querySelector("img").cloneNode();
document.querySelector(".center").append(clonned);
clonned.style.float = "left";
