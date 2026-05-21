// Button select
let calculateBtn = document.getElementById("calculateBtn");

// Button click event
calculateBtn.addEventListener("click", function () {
  // Input value
  let km = document.getElementById("kmInput").value;

  // Elements select
  let error = document.getElementById("error");
  let resultSection = document.getElementById("resultSection");
  let totalBill = document.getElementById("totalBill");
  let breakdown = document.getElementById("breakdown");

  // Validation
  if (km === "" || km <= 0) {
    error.innerHTML = "Please enter valid kilometers";
    resultSection.classList.add("d-none");
    return;
  }

  // Remove error
  error.innerHTML = "";

  // Convert string into number
  km = Number(km);

  // Bill calculation
  let bill = 0;

  if (km <= 10) {
    bill = km * 11;
  } else if (km <= 30) {
    bill = 10 * 11 + (km - 10) * 10;
  } else {
    bill = 10 * 11 + 20 * 10 + (km - 30) * 8;
  }

  // Show result
  totalBill.innerHTML = "₹ " + bill;

  // Breakdown show
  breakdown.innerHTML = `
    First 10 KM = ₹11 per KM <br>
    Next 20 KM = ₹10 per KM <br>
    Above 30 KM = ₹8 per KM
  `;

  // Show result section
  resultSection.classList.remove("d-none");
});