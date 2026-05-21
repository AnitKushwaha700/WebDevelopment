document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {

    event.preventDefault();

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const number = document.getElementById("number");
    const password = document.getElementById("password");

    // Full Name
    if (fullName.value.trim() === "") {
      fullName.classList.add("is-invalid");
    } else {
      fullName.classList.remove("is-invalid");
      fullName.classList.add("is-valid");
    }

    // Email
    if (!email.value.includes("@")) {
      email.classList.add("is-invalid");
    } else {
      email.classList.remove("is-invalid");
      email.classList.add("is-valid");
    }

    // Number
    if (number.value.length != 10) {
      number.classList.add("is-invalid");
    } else {
      number.classList.remove("is-invalid");
      number.classList.add("is-valid");
    }

    // Password
    if (password.value.length < 6) {
      password.classList.add("is-invalid");
    } else {
      password.classList.remove("is-invalid");
      password.classList.add("is-valid");
    }

  });