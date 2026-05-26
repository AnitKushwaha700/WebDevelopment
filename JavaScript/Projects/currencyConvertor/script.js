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


// Load Countries
async function loadCountries() {

  loading.innerText = "Loading Countries...";

  const response = await fetch(
    "https://restcountries.com/v3.1/all"
  );

  const data = await response.json();


  // Sort Countries
  data.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );


  data.forEach((country) => {

    // Skip if currency missing
    if (!country.currencies) return;


    const currencyCode =
      Object.keys(country.currencies)[0];

    const countryCode =
      country.cca2;

    const countryName =
      country.name.common;


    // Option 1
    const option1 =
      document.createElement("option");

    option1.innerText =
      `${countryName} (${currencyCode})`;

    option1.value =
      `${currencyCode},${countryCode}`;


    // Option 2
    const option2 =
      document.createElement("option");

    option2.innerText =
      `${countryName} (${currencyCode})`;

    option2.value =
      `${currencyCode},${countryCode}`;


    country1.appendChild(option1);

    country2.appendChild(option2);

  });


  // Default Countries
  country1.value = "USD,US";

  country2.value = "INR,IN";


  updateFlag(country1, flag1);

  updateFlag(country2, flag2);


  loading.innerText = "";

}


// Update Flag
function updateFlag(dropdown, flagImage) {

  const countryCode =
    dropdown.value.split(",")[1];

  flagImage.src =
    `https://flagsapi.com/${countryCode}/flat/64.png`;

}


// Convert Currency
async function convertCurrency() {

  errorMessage.innerText = "";

  loading.innerText = "Converting...";


  const amount =
    orgAmount.value;


  if (!amount || amount <= 0) {

    errorMessage.innerText =
      "Please enter valid amount";

    loading.innerText = "";

    return;
  }


  const fromCurrency =
    country1.value
      .split(",")[0]
      .toLowerCase();

  const toCurrency =
    country2.value
      .split(",")[0]
      .toLowerCase();


  try {

    const API =
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`;


    const response =
      await fetch(API);

    const data =
      await response.json();


    const rate =
      data[fromCurrency][toCurrency];


    const convertedValue =
      amount * rate;


    newAmount.innerText =
      `${convertedValue.toFixed(2)} ${toCurrency.toUpperCase()}`;


    exchangeRate.innerText =
      `1 ${fromCurrency.toUpperCase()} = ${rate} ${toCurrency.toUpperCase()}`;


  } catch (error) {

    errorMessage.innerText =
      "Something went wrong";

  }


  loading.innerText = "";

}


// Country Change
country1.addEventListener("change", () => {

  updateFlag(country1, flag1);

});


country2.addEventListener("change", () => {

  updateFlag(country2, flag2);

});


// Convert Button
convertBtn.addEventListener(
  "click",
  convertCurrency
);


// Swap Button
swapBtn.addEventListener("click", () => {

  const temp =
    country1.value;

  country1.value =
    country2.value;

  country2.value =
    temp;


  updateFlag(country1, flag1);

  updateFlag(country2, flag2);

});


// Start App
loadCountries();