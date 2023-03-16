// 1
function isPalindrome() {
  var isPalindrome = true;

  // taking the input string from the user:
  var inputString = prompt("Enter The Input String Pls:");
  //   checking the case sensitivity validation:
  do {
    var isCaseSensitive = prompt("Case sensitive?! (yes/no)");
  } while (!(isCaseSensitive === "yes") && !(isCaseSensitive === "no"));

  var str1 = inputString;

  //   case sensitivity not important:
  if (isCaseSensitive === "no") {
    str1 = str1.toLowerCase();
  }

  // reversing the original string
  var reversed = "";
  for (var i = str1.length - 1; i >= 0; i--) {
    reversed += str1[i];
  }

  //   palindrome checking
  for (var j = 0; j < inputString.length; j++) {
    if (str1[j] !== reversed[j]) {
      isPalindrome = false;
    } else {
      continue;
    }
  }
  return isPalindrome;
}

// ==========================================================================
// 2
var eCount = function () {
  var inputString = prompt("Enter any string pls: ");
  var lowered = inputString.toLowerCase();
  var ec = 0;
  for (var i = 0; i < lowered.length; i++) {
    if (lowered[i] === "e") {
      ec += 1;
    }
  }
  return ec;
};

// ==========================================================================
// 3
function validateInfo() {
  // determinig the color
  do {
    var color = prompt("Enter Your Prefered Color Pls: (red/green/blue)");
  } while (!(color === "red") && !(color === "green") && !(color === "blue"));
  // Name
  do {
    var name = prompt("Enter Your Name Pls :)");
  } while (!/^[A-Za-z]+$/.test(name) || !name);
  //   Phone Number
  do {
    var phoneNumber = prompt("Enter your phone number pls (Just 8 numbers) :)");
  } while (!/^[0-9]*$/.test(phoneNumber) || phoneNumber.length !== 8);
  // Mobile number
  do {
    var mobileNumber = prompt(
      "Enter your mobile number pls (Just 11 numbers) :)"
    );
  } while (
    !/^(010|011|012|015)+[0-9]*$/.test(mobileNumber) ||
    mobileNumber.length !== 11
  );
  //   email
  do {
    var email = prompt("Enter Your Email pls: ");
  } while (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email));

  //   printing things out
  document.write("<h1 style='color:" + color + "'>Welcome " + name + "</h1>");
  document.write(
    "<p style='color:" +
      color +
      "'>Your phone number is " +
      phoneNumber +
      "</p>"
  );
  document.write(
    "<p style='color:" +
      color +
      "'>Your mobile number is " +
      mobileNumber +
      "</p>"
  );
  document.write(
    "<p style='color:" + color + "'>Your email is " + email + "</p>"
  );
}
// ==========================================================================

// console.log(isPalindrome());
// console.log(eCount());
validateInfo();
