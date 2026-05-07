function BulbON1() {
  document.getElementById("bulb").style.backgroundColor = "yellow";
}

function BulbOFF1() {
  document.getElementById("bulb").style.backgroundColor = "white";
}
function Red() {
  document.getElementById("bulb").style.backgroundColor = "red";
}
function Green() {
  document.getElementById("bulb").style.backgroundColor = "green";
}
function Blue() {
  document.getElementById("bulb").style.backgroundColor = "blue";
}


document.getElementById("red").addEventListener("click" , Red)
document.getElementById("blue").addEventListener("click" , Blue)
document.getElementById("green").addEventListener("click" , Green)


document.getElementById("BulbColor").addEventListener("change", changeBulbColor);

function changeBulbColor(){
  const color = document.getElementById("BulbColor").value;
  document.getElementById("bulb").style.backgroundColor = color ;
}