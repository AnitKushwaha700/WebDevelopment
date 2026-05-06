// -----------------------------1------------------------------------ //

function submit1() {
  console.log("submit button clicked!");

  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;

  console.log(name);
  console.log(city);

  document.getElementById("myName").innerText = "Name : " + name;
  document.getElementById("myCity").innerText = "City : " + city;


  // Show result
  const card = document.getElementById("dataCard1");
  card.classList.remove("divHide1");


  // Clear inputs
  document.getElementById("name").value = "";
  document.getElementById("city").value = "";
}

// -----------------------------2------------------------------------ //

function submit2() {
  console.log("submit button clicked!");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(email);
  console.log(password);

  document.getElementById("myEmail").innerText = "email : " + email;
  document.getElementById("myPassword").innerText = "password : " + password;


  // Show result
  const card = document.getElementById("dataCard2");
  card.classList.remove("divHide2");


  // Clear inputs
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}


// -----------------------------3------------------------------------ //

function submit3() {
  console.log("submit button clicked!");

  const email = document.getElementById("First").value;
  const password = document.getElementById("Last").value;

  console.log(First);
  console.log(Last);

  document.getElementById("firstName").innerText = "First : " + First;
  document.getElementById("lastName").innerText = "Last : " + Last;


  // Show result
  const card = document.getElementById("dataCard3");
  card.classList.remove("divHide3");


  // Clear inputs
  document.getElementById("First").value = "";
  document.getElementById("Last").value = "";
}




