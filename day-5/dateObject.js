// 1
/*
var days = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
};

do {
  var date = prompt("Enter the date pls: format(mm-dd-yyyy)");
} while (
  !/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/.test(date)
);
var dateObj = new Date(date);
console.log(days[dateObj.getDay()]);
*/

// 2
var inputDate = prompt("Enter the date pls: format(dd-mm-yyyy)");

function isNum(str) {
  var flag = true;
  for (var i = 0; i < str.length; i++) {
    if ((i == 2 || i == 5) && str[i] === "-") {
      continue;
    }
    if (isNaN(str[i])) {
      flag = false;
    }
  }
  return flag;
}

function validateDate(str) {
  var flag = true;
  // checking length
  if (str.length !== 10) {
    document.write(
      "<p style='color:red'>ERROR: The date should contain 10 characters!</p>"
    );
    flag = false;
  }

  //   checking the delimitars
  if (str[2] !== "-" || str[5] !== "-") {
    document.write(
      "<p style='color:red'>ERROR: The date should contain '-' characters!</p>"
    );
    flag = false;
  }

  //   checking if the rest of the date is valid
  if (!isNum(str)) {
    document.write(
      "<p style='color:red'>ERROR: The date should contain numbers or '-' characters only!</p>"
    );
    flag = false;
  }

  //   if input date passes the error checks
  if (flag) {
    // 0123456789
    // 05-01-1999
    var date = new Date(
      inputDate.substring(6, 10),
      Number(inputDate.substring(3, 5)) - 1,
      inputDate.substring(0, 2)
    );
    alert(date);
  }
}

// validateDate(inputDate);
// console.log(validateDate(inputDate));
