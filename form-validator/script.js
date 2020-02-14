const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
//show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success"; // css class eka add karanawa
}

//check email valid (google eke search karanna puluwan  'js email regex' kiyala)
function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// add event listner method eken karanne vishesha element ekakata event handler ekak attach karana ekai.
// mekata puluwan existing event handler ekak overide karnne nathuwa event handler ekak add karanna
// You can add many event handlers to one element.
// You can add many event handlers of the same type to one element, i.e two "click" events.
// You can add event listeners to any DOM object
//         not only HTML elements. i.e the window object.
// You can easily remove an event listener by using the removeEventListener() method.

// Syntax - element.addEventListener(event, function, useCapture);
// 1. The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
// 2. The second parameter is the function we want to call when the event occurs.
// 3. The third parameter is a boolean value specifying whether to use event bubbling or event capturing.
//      This parameter is optional.

////event listner for basic method
// form.addEventListener("submit", function(e) {
//   e.preventDefault();
//   // console.log(username);  -  using this we get actual element if we need value it has value property
//   console.log(username.value);

//   if (username.value === "") {
//     showError(username, "Username is required");
//   } else {
//     showSuccess(username);
//   }
//   if (email.value === "") {
//     showError(email, "Email is required");
//   } else if (!isValidEmail(email.value)) {
//     showError(email, "Password is not in valid format");
//   } else {
//     showSuccess(email);
//   }
//   if (password.value === "") {
//     showError(password, "Password is required");
//   } else {
//     showSuccess(password);
//   }
//   if (password2.value === "") {
//     showError(password2, "Password2 is required");
//   } else {
//     showSuccess(password2);
//   }
// });

// *********--------- ihatha wage basic kramayakata if else dagena eka eka field check kala hakiy
// more optimize and dry code ekak liyanna one *********---------

//check required fields
function checkRequired(inputArray) {
  // array eka aragena higher order array method ekak wena forEach eka ganna wa loop karanna witharai one nisa
  inputArray.forEach(function(input) {
    // every higher order array method takes function in and pass item which we loop through in to it
    console.log(input);
    input.value
  });

  console.log();
}
form.addEventListener("submit", function(e) {
  e.preventDefault();

  // we create check required function and call it here
  //checkRequired(username); // mehema liwwot apita eka eka field waalata wenama check karanna wenawa
  // e nisa eka in put ekak wenuwata input array ekak use karanawa
  checkRequired([username, email, password, password2]);
});
