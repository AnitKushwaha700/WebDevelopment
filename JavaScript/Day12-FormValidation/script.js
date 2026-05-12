function Submit() {
  const fn = document.getElementById("fullName").value;
  const ph = document.getElementById("phone").value;
  const em = document.getElementById("email").value;
  const ps = document.getElementById("pass").value;

  if (!/^[A-Za-z]+$/.test(fn)) {
    document.getElementById("nameError").innerText = "Invalid Full Name";
  }

  if (!/^[A-Za-z\.\_\d]+@gmail.com$/.test(fn)) {
    document.getElementById("nameError").innerText = "Invalid Email";
  }

  if (!/^[6-9]\d{9}+$/.test(fn)) {
    document.getElementById("nameError").innerText = "Invalid Phone Number";
  }



}
