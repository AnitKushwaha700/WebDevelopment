document.getElementById("Redbox").addEventListener("mouseover", fillRedColor);
document.getElementById("Redbox").addEventListener("mouseout", fillBaseColor);

document
  .getElementById("Greenbox")
  .addEventListener("mouseover", fillGreenColor);
document.getElementById("Greenbox").addEventListener("mouseout", fillBaseColor);

document.getElementById("Bluebox").addEventListener("mouseover", fillBlueColor);
document.getElementById("Bluebox").addEventListener("mouseout", fillBaseColor);

function fillRedColor() {
  document.getElementById("bulb1").style.backgroundColor = "red";
  document.getElementById("bulb1").style.height = "300px";
  document.getElementById("bulb1").style.width = "300px";
}

function fillGreenColor() {
  document.getElementById("bulb1").style.backgroundColor = "green";
}

function fillBlueColor() {
  document.getElementById("bulb1").style.backgroundColor = "blue";
}

function fillBaseColor() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}


