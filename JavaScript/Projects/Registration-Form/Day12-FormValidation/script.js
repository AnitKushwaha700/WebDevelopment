function submitForm() {
  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (name === "") {
    alert("Enter your name");
    return;
  }

  if (email === "") {
    alert("Enter your email");
    return;
  }

  if (phone === "") {
    alert("Enter your phone number");
    return;
  }

  alert("Form Submitted Successfully");
}