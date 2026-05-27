const country1 = document.getElementById("country1");
const country2 = document.getElementById("country2");

const flag1 = document.getElementById("flag1");
const flag2 = document.getElementById("flag2");

const orgAmount = document.getElementById("orgAmount");

const newAmount = document.getElementById("newAmount");
const exchangeRate = document.getElementById("exchangeRate");

const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");

const convertBtn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swapBtn");


// Load Countries
async function loadCountries() {

  loading.innerText = "Loading...";


  let response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,currencies,cca2"
  );

  let data = await response.json();


  data.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );


  data.forEach((country) => {

    if (!country.currencies) return;

    let currencyCode =
      Object.keys(country.currencies)[0];

    let countryCode =
      country.cca2;

    let countryName =
      country.name.common;


    let option1 =
      document.createElement("option");

    option1.innerText =
      `${countryName} (${currencyCode})`;

    option1.value =
      `${currencyCode},${countryCode}`;


    let option2 =
      document.createElement("option");

    option2.innerText =
      `${countryName} (${currencyCode})`;

    option2.value =
      `${currencyCode},${countryCode}`;


    country1.appendChild(option1);
    country2.appendChild(option2);

  });


  // Default Values
  country1.value = "USD,US";
  country2.value = "INR,IN";


  updateFlag(country1, flag1);
  updateFlag(country2, flag2);

  loading.innerText = "";
}



// Update Flag
function updateFlag(dropdown, flagImage) {

  let countryCode =
    dropdown.value.split(",")[1];

  flagImage.src =
    `https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`;

}



// Convert Currency
async function convertCurrency() {

  errorMessage.innerText = "";
  loading.innerText = "Converting...";


  let amount =
    orgAmount.value;


  if (amount <= 0 || amount === "") {

    errorMessage.innerText =
      "Enter valid amount";

    loading.innerText = "";

    return;
  }


  let fromCurrency =
    country1.value.split(",")[0].toLowerCase();

  let toCurrency =
    country2.value.split(",")[0].toLowerCase();


  let API =
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`;


  let response =
    await fetch(API);

  let data =
    await response.json();


  let rate =
    data[fromCurrency][toCurrency];


  let finalAmount =
    amount * rate;


  newAmount.innerText =
    `${finalAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;


  exchangeRate.innerText =
    `1 ${fromCurrency.toUpperCase()} = ${rate} ${toCurrency.toUpperCase()}`;


  loading.innerText = "";

}



// Change Flag
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

  let temp = country1.value;

  country1.value = country2.value;

  country2.value = temp;


  updateFlag(country1, flag1);
  updateFlag(country2, flag2);

});



// Start App
loadCountries();