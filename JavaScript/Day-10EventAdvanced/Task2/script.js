document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fn = document.getElementById("fullname").value;
  const em = document.getElementById("email").value;
  const ps = document.getElementById("password").value;

  const dataPacket = {
    FullName: fn,
    Email: em,
    Password: ps,
  };

  console.log(dataPacket);

  document.getElementById("fullname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  
});

document.querySelector("form").addEventListener("reset", (event) => {
  event.preventDefault();
  confirm("Are you Sure") && window.location.reload();
});


//-------------------------------------------------------------------//

document.addEventListener("keydown" , (event) =>{
  let keyPress = event.key;
  keyPress === "Escape" && window.location.reload();
  // console.log(keyPress);
  
})


document.querySelector("form").addEventListener("mouseover" , (event) => {
  

})
