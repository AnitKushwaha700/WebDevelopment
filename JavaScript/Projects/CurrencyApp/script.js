const API_key = "bd5524fc589d4dd8928550a003646770";

async function getWeather() {
  const cityName = document.getElementById("cityName").value.trim();

  if (!cityName) {
    alert("Enter city name");
    return;
  }

  try {
    const { latitude, longitude } = await getGeoLocation(cityName);

    const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}`;

    const response = await fetch(WEATHER_API);
    const data = await response.json();

    const temperature = (data.main.temp - 273.15).toFixed(1);
    const feelsLike = (data.main.feels_like - 273.15).toFixed(1);
    const humidity = data.main.humidity;

    document.getElementById("Tempearture").innerText = temperature;
    document.getElementById("feelsLike").innerText = feelsLike;
    document.getElementById("humidity").innerText = humidity;
    document.getElementById("cityText").innerText = data.name;

  } catch (error) {
    alert("City not found");
    console.log(error);
  }
}

async function getGeoLocation(city) {
  const GEO_LOC_API = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}`;

  const response = await fetch(GEO_LOC_API);
  const data = await response.json();

  if (!data.length) {
    throw new Error("Location not found");
  }

  return {
    latitude: data[0].lat,
    longitude: data[0].lon,
  };
}