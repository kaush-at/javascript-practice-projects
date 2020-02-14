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

//event listner for basic method
form.addEventListener("submit", function(e) {
  e.preventDefault();
  // console.log(username);  -  using this we get actual element if we need value it has value property
  console.log(username.value);

  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }
  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Password is not in valid format");
  } else {
    showSuccess(email);
  }
  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }
  if (password2.value === "") {
    showError(password2, "Password2 is required");
  } else {
    showSuccess(password2);
  }
});
