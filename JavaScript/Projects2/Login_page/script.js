document.getElementById("loginBtn").addEventListener("click", login);

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Empty Validation
  if (username === "" || password === "") {
    message.innerText = "Please fill all fields";
    message.className = "text-center mt-5 font-semibold text-yellow-300";
    return;
  }

  // Login Validation
  if (username === "admin" && password === "1234") {
    message.innerText = "Login Successful";
    message.className = "text-center mt-5 font-semibold text-green-300";
  } else {
    message.innerText = "Invalid Username or Password";
    message.className = "text-center mt-5 font-semibold text-red-300";
  }
}