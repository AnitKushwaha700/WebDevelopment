let salaryInput = document.getElementById("basicSalary");
let calculateBtn = document.getElementById("calculateBtn");
let resetBtn = document.getElementById("resetBtn");

let errorMessage = document.getElementById("errorMessage");
let successMessage = document.getElementById("successMessage");
let resultCard = document.getElementById("resultCard");

let resultBasic = document.getElementById("resultBasic");
let resultHra = document.getElementById("resultHra");
let resultDa = document.getElementById("resultDa");
let resultGross = document.getElementById("resultGross");

let spinner = document.getElementById("spinner");
let btnText = document.getElementById("btnText");

calculateBtn.addEventListener("click", function () {
  let salary = salaryInput.value.trim();

  // Reset messages
  errorMessage.innerHTML = "";
  successMessage.classList.add("d-none");
  resultCard.classList.add("d-none");

  // Validation
  if (salary === "" || Number(salary) <= 0) {
    errorMessage.innerHTML = "Please enter a valid salary";
    return;
  }

  // Show Spinner
  spinner.classList.remove("d-none");
  btnText.innerHTML = "Calculating...";

  setTimeout(function () {
    salary = Number(salary);

    // Calculations
    let hra = salary * 0.2;
    let da = salary * 0.1;
    let gross = salary + hra + da;

    // Show Results
    resultBasic.innerHTML = "₹ " + salary;
    resultHra.innerHTML = "₹ " + hra;
    resultDa.innerHTML = "₹ " + da;
    resultGross.innerHTML = "₹ " + gross;

    // Hide Spinner
    spinner.classList.add("d-none");
    btnText.innerHTML = "Calculate Gross Salary";

    // Show Cards
    resultCard.classList.remove("d-none");
    successMessage.classList.remove("d-none");
  }, 1000);
});

// Reset Button
resetBtn.addEventListener("click", function () {
  salaryInput.value = "";
  errorMessage.innerHTML = "";
  successMessage.classList.add("d-none");
  resultCard.classList.add("d-none");

  resultBasic.innerHTML = "";
  resultHra.innerHTML = "";
  resultDa.innerHTML = "";
  resultGross.innerHTML = "";
});