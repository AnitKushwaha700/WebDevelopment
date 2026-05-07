document.getElementById("input1").addEventListener("change", changeColor1);

function changeColor1() {
  const color = document.getElementById("input1").value;
  document.getElementById("left").style.backgroundColor = color;
}

document.getElementById("input2").addEventListener("change", changeColor2);

function changeColor2() {
  const color = document.getElementById("input2").value;
  document.getElementById("h1").style.color = color;
}

document.getElementById("input3").addEventListener("change", changeColor3);

function changeColor3() {
  const color = document.getElementById("input3").value;
  document.getElementById("p1").style.color = color;
}


function reset() {
  window.location.reload();
}
