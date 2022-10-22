function validate() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  // if (email.type === "email" & password.type === "password") {
  //   window.location.href = "success.html";
  // } else {
  //   alert("Invalid email or passsword")
  // }

  if (email == "example@gmail.com" && password == "password") {
    location.href = "success.html";
  }
  else {
    alert("Invalid email or password")
  }
}
