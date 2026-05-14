document
  .getElementById("registrationForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    // personal details
    const fn = document.getElementById("fullName").value;
    const em = document.getElementById("email").value;
    const pn = document.getElementById("number").value;
    const gndr = document.querySelector("input[name='gender']:checked")?.value;
    const dob = document.getElementById("DOB").value;

    // Academic details
    const qual = document.getElementById("Qualification").value;
    const grd = document.getElementById("Grade").value;

    // Course information
    const crs = document.getElementById("Course").value;

    const timings = [];
    document
      .querySelectorAll("input[name='timings']:checked")
      .forEach((item) => {
        timings.push(item.value);
      });

    // Address
    const adrs = document.getElementById("Address").value;
    const cty = document.getElementById("City").value;
    const pinc = document.getElementById("pinCode").value;

    // Guardians Details
    const guarName = document.getElementById("guardianName").value;
    const guarNum = document.getElementById("guardianNumber").value;

    // Additional information 
    const ref = document.getElementById("reference").value;
    const spclReq = document.getElementById("specialRequirements").value;

    console.log({
      fn,
      em,
      pn,
      gndr,
      dob,
      qual,
      grd,
      crs,
      timings,
      adrs,
      cty,
      pinc,
      guarName,
      guarNum,
      ref,
      spclReq,
    });

    
  });

document
  .getElementById("registrationForm")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload();
  });