function Submit() {

  const fn = document.getElementById("fullName").value;
  const ph = document.getElementById("phone").value;
  const em = document.getElementById("email").value;

  const ps = document.getElementById("password").value;




  // Name Validation
  if (!/^[A-Za-z ]+$/.test(fn)) {
    document.getElementById("nameError").innerText =
      "Invalid Full Name";
    return;
  }

  // Email Validation
  if (!/^[A-Za-z._\d]+@gmail\.com$/.test(em)) {
    document.getElementById("emailError").innerText =
      "Invalid Email";
    return;
  }

  // Phone Validation
  if (!/^[6-9]\d{9}$/.test(ph)) {
    document.getElementById("phoneError").innerText =
      "Invalid Phone Number";
    return;
  }

  alert("Form Submitted Successfully");
}