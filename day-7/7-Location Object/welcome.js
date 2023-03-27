var data = window.location.search.slice(1);
var dataArr = data.split("&");

var revisedDataArray = [];
for (var i = 0; i < dataArr.length; i++) {
  revisedDataArray.push(dataArr[i].split("=")[1]);
}

document.getElementById("greeting").innerText += " " + revisedDataArray[0];
document.getElementsByClassName("email")[0].innerText =
  " " + revisedDataArray[1];
document.getElementsByClassName("addr")[0].innerText =
  " " + revisedDataArray[4];
document.getElementsByClassName("mob")[0].innerText = " " + revisedDataArray[2];
document.getElementsByClassName("gen")[0].innerText = " " + revisedDataArray[3];
