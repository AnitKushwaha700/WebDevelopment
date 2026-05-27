const API_key = "bd5524fc589d4dd8928550a003646770";


// Get Weather
async function getWeather() {

  const cityName =
    document.getElementById("cityName").value.trim();

  if (cityName === "") {
    alert("Enter City Name");
    return;
  }


  // Get Latitude & Longitude
  const { Latitude, Longitude } =
    await getGeoLocation(cityName);


  // Weather API
  const WEATHER_API =
    `https://api.openweathermap.org/data/2.5/weather?lat=${Latitude}&lon=${Longitude}&appid=${API_key}`;


  const response =
    await fetch(WEATHER_API);

  const data =
    await response.json();


  console.log(data);


  // Temperature Convert Kelvin → Celsius
  const temperature =
    data.main.temp - 273.15;

  const feelsLike =
    data.main.feels_like - 273.15;

  const minTemp =
    data.main.temp_min - 273.15;

  const maxTemp =
    data.main.temp_max - 273.15;


  // Update UI
  document.getElementById("Tempearture").innerText =
    temperature.toFixed(1);

  document.getElementById("weatherType").innerText =
    data.weather[0].main;

  document.getElementById("cityText").innerText =
    `${data.name}, ${data.sys.country}`;

  document.getElementById("feelsLike").innerText =
    `${feelsLike.toFixed(1)}°C`;

  document.getElementById("humidity").innerText =
    `${data.main.humidity}%`;

  document.getElementById("windSpeed").innerText =
    `${data.wind.speed} m/s`;

  document.getElementById("pressure").innerText =
    `${data.main.pressure} hPa`;

  document.getElementById("minTemp").innerText =
    `${minTemp.toFixed(1)}°C`;

  document.getElementById("maxTemp").innerText =
    `${maxTemp.toFixed(1)}°C`;


  // Sunrise Time
  const sunriseTime =
    new Date(data.sys.sunrise * 1000);

  document.getElementById("sunrise").innerText =
    sunriseTime.toLocaleTimeString();


  // Sunset Time
  const sunsetTime =
    new Date(data.sys.sunset * 1000);

  document.getElementById("sunset").innerText =
    sunsetTime.toLocaleTimeString();

}



// Get Latitude & Longitude
async function getGeoLocation(city) {

  const GEO_LOC_API =
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}`;


  const response =
    await fetch(GEO_LOC_API);

  const data =
    await response.json();


  const Latitude =
    data[0].lat;

  const Longitude =
    data[0].lon;


  return { Latitude, Longitude };

}