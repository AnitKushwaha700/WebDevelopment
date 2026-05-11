const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {

  const units = Number(document.getElementById("units").value);

  let slab1 = 0;
  let slab2 = 0;
  let slab3 = 0;
  let slab4 = 0;

  // First 50 Units
  if (units <= 50) {

    slab1 = units * 0.5;

  }

  // 51 - 200 Units
  else if (units <= 200) {

    slab1 = 50 * 0.5;

    slab2 = (units - 50) * 0.75;

  }

  // 201 - 450 Units
  else if (units <= 450) {

    slab1 = 50 * 0.5;

    slab2 = 150 * 0.75;

    slab3 = (units - 200) * 1.2;

  }

  // Above 450 Units
  else {

    slab1 = 50 * 0.5;

    slab2 = 150 * 0.75;

    slab3 = 250 * 1.2;

    slab4 = (units - 450) * 1.5;

  }

  // Subtotal
  const subtotal = slab1 + slab2 + slab3 + slab4;

  // 20% Surcharge
  const surcharge = subtotal * 0.2;

  // Grand Total
  const grandTotal = subtotal + surcharge;

  // Show Result
  document.getElementById("slab1").innerText =
    `₹${slab1.toFixed(2)}`;

  document.getElementById("slab2").innerText =
    `₹${slab2.toFixed(2)}`;

  document.getElementById("slab3").innerText =
    `₹${slab3.toFixed(2)}`;

  document.getElementById("slab4").innerText =
    `₹${slab4.toFixed(2)}`;

  document.getElementById("subtotal").innerText =
    `₹${subtotal.toFixed(2)}`;

  document.getElementById("surcharge").innerText =
    `₹${surcharge.toFixed(2)}`;

  document.getElementById("grandTotal").innerText =
    `₹${grandTotal.toFixed(2)}`;

});


// Reset Button
const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {

  document.getElementById("units").value = "";

  document.getElementById("slab1").innerText = "₹0.00";

  document.getElementById("slab2").innerText = "₹0.00";

  document.getElementById("slab3").innerText = "₹0.00";

  document.getElementById("slab4").innerText = "₹0.00";

  document.getElementById("subtotal").innerText = "₹0.00";

  document.getElementById("surcharge").innerText = "₹0.00";

  document.getElementById("grandTotal").innerText = "₹0.00";

});