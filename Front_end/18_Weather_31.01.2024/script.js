const API_KEY = "8639453c103bbbb37002a50744b5703d";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const input = document.getElementById("locationInput");
const button = document.getElementById("getWeatherBtn");
const info = document.getElementById("weatherContainer");

button.onclick = () => {
  const cityName = input.value.trim();
  if (cityName) {
    fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((weather) => {
        renderWeatherInfo(weather);
      })
      .catch((error) => {
        info.innerHTML = `<p>${error.message}</p>`;
      });
  }
};

function renderWeatherInfo(weather) {
  const {
    name,
    sys,
    main,
    weather: [weatherDetails],
    wind,
    rain,
    snow,
  } = weather;

  info.innerHTML = `
  <h2>${name}, ${sys.country}</h2>
  <p><span style="font-weight: bold;">Temperature:</span> ${main.temp} °C</p>
  <p><span style="font-weight: bold;">Feels Like:</span> ${main.feels_like} °C</p>
  <p><span style="font-weight: bold;">Min Temperature:</span> ${main.temp_min} °C</p>
  <p><span style="font-weight: bold;">Humidity:</span> ${main.humidity} %</p>
  <p><span style="font-weight: bold;">Weather:</span> ${weatherDetails.description}</p>
  <p><span style="font-weight: bold;">Wind Speed:</span> ${wind.speed} m/s</p>
  <p><span style="font-weight: bold;">Wind Direction:</span> ${wind.deg} degrees</p>
  <p><span style="font-weight: bold;">Wind Gust:</span> ${wind.gust || "Not available"} m/s</p>
  <p><span style="font-weight: bold;">Rain (1h):</span> ${rain ? rain["1h"] || 0 : 0} mm</p>
  <p><span style="font-weight: bold;">Rain (3h):</span> ${rain ? rain["3h"] || 0 : 0} mm</p>
  <p><span style="font-weight: bold;">Snow (1h):</span> ${snow ? snow["1h"] || 0 : 0} mm</p>
  <p><span style="font-weight: bold;">Snow (3h):</span> ${snow ? snow["3h"] || 0 : 0} mm</p>
`;
}
