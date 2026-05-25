const country1 = document.getElementById("country1");
const country2 = document.getElementById("country2");
const flag1 = document.getElementById("flag1");
const flag2 = document.getElementById("flag2");
const convertBtn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swapBtn");
const orgAmount = document.getElementById("orgAmount");
const newAmount = document.getElementById("newAmount");
const exchangeRate = document.getElementById("exchangeRate");
const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");

// Load countries
async function loadCountries() {
  const response = await fetch("codes.json");
  const data = await response.json();

  data.forEach((country) => {
    const option1 = document.createElement("option");
    option1.innerText = country.Country;
    option1.value =
      `${country.Currency_Code},${country.Country_Code}`;

    const option2 = document.createElement("option");
    option2.innerText = country.Country;
    option2.value =
      `${country.Currency_Code},${country.Country_Code}`;

    country1.appendChild(option1);
    country2.appendChild(option2);
  });

  // Default countries
  country1.value = "usd,US";
  country2.value = "inr,IN";

  updateFlag(country1, flag1);
  updateFlag(country2, flag2);
}

// Update flag
function updateFlag(dropdown, flagImage) {
  const selectedValue = dropdown.value;
  const countryCode =
    selectedValue.split(",")[1];

  flagImage.src =
    `https://flagsapi.com/${countryCode}/flat/64.png`;
}

// Convert currency
async function convertCurrency() {
  errorMessage.innerText = "";
  loading.innerText = "Loading...";
  convertBtn.disabled = true;

  const amount = orgAmount.value;
  const fromValue = country1.value;
  const toValue = country2.value;

  if (!amount) {
    errorMessage.innerText =
      "Please enter amount";
    loading.innerText = "";
    convertBtn.disabled = false;
    return;
  }

  if (amount <= 0) {
    errorMessage.innerText =
      "Amount must be greater than zero";
    loading.innerText = "";
    convertBtn.disabled = false;
    return;
  }

  const fromCurrency =
    fromValue.split(",")[0];

  const toCurrency =
    toValue.split(",")[0];

  const API =
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`;

  const response = await fetch(API);
  const data = await response.json();

  const rate =
    data[fromCurrency][toCurrency];

  const convertedValue =
    amount * rate;

  newAmount.innerText =
    `${convertedValue.toFixed(2)} ${toCurrency.toUpperCase()}`;

  exchangeRate.innerText =
    `1 ${fromCurrency.toUpperCase()} = ${rate} ${toCurrency.toUpperCase()}`;

  loading.innerText = "";
  convertBtn.disabled = false;
}

// Events
country1.addEventListener("change", () => {
  updateFlag(country1, flag1);
});

country2.addEventListener("change", () => {
  updateFlag(country2, flag2);
});

convertBtn.addEventListener(
  "click",
  convertCurrency
);

swapBtn.addEventListener("click", () => {
  const tempValue = country1.value;

  country1.value = country2.value;
  country2.value = tempValue;

  updateFlag(country1, flag1);
  updateFlag(country2, flag2);

  convertCurrency();
});

// Start app
loadCountries();