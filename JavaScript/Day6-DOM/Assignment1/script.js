function submit() {
  console.log("submit button clicked!");

  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;

  console.log(name);
  console.log(city);

  document.getElementById("myName").innerText = name;
  document.getElementById("myCity").innerText = city;

  document.getElementById("name").value = "";
  document.getElementById("city").value = "";

  
  document.getElementById("dataCard").classList.add("divHide")

}
