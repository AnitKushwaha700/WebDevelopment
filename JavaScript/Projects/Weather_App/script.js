const API_key = "bd5524fc589d4dd8928550a003646770";

async function getWeather() {
  const cityName = document.getElementById("cityName").value.trim();

  if (!cityName) {
    alert("Enter city name");
    return;
  }

  try {
    const locationData = await getGeoLocation(cityName);

    const WEATHER_API =
      `https://api.openweathermap.org/data/2.5/weather?lat=${locationData.latitude}&lon=${locationData.longitude}&appid=${API_key}`;

    const response = await fetch(WEATHER_API);
    const data = await response.json();

    // Temperature
    const temperature = (data.main.temp - 273.15).toFixed(1);
    const feelsLike = (data.main.feels_like - 273.15).toFixed(1);

    // Other details
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const pressure = data.main.pressure;
    const weatherType = data.weather[0].main;

    // Show data
    document.getElementById("Tempearture").innerText =
      temperature;

    document.getElementById("feelsLike").innerText =
      `${feelsLike}°C`;

    document.getElementById("humidity").innerText =
      `${humidity}%`;

    document.getElementById("windSpeed").innerText =
      `${windSpeed} m/s`;

    document.getElementById("pressure").innerText =
      `${pressure} hPa`;

    document.getElementById("weatherType").innerText =
      weatherType;

    document.getElementById("cityText").innerText =
      `${locationData.city}, ${locationData.state}, ${locationData.country}`;

  } catch (error) {
    alert("City not found");
    console.log(error);
  }
}

async function getGeoLocation(city) {
  const GEO_LOC_API =
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}`;

  const response = await fetch(GEO_LOC_API);
  const data = await response.json();

  if (!data.length) {
    throw new Error("Location not found");
  }

  return {
    latitude: data[0].lat,
    longitude: data[0].lon,
    city: data[0].name,
    state: data[0].state || "N/A",
    country: data[0].country
  };
}