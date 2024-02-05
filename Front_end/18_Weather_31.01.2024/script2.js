const API_KEY = "8639453c103bbbb37002a50744b5703d";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const input = document.getElementById("locationInput");
const button = document.getElementById("getWeatherBtn");
const info = document.getElementById("weatherContainer");

button.onclick = async () => {
    const cityName = input.value.trim();
    if (cityName) {
        try {
            const response = await fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
            const weatherInfo = await response.json();
            displayWeather(weatherInfo);
        } catch (error) {
            console.log(error.message);
        }finally {
            console.log('Hello from block finally');
        }

    };
    input.value = "";
};

function displayWeather({
    main: { temp },
    weather: [{ description }],
    wind: { speed },
    name: cityName, // alias
}) {
    info.innerHTML = `
  <h2 class="mb-3">${cityName}</h2>
  <p>Temperature: ${temp} °C</p>
  <p>Description: ${description}</p>
  <p>Wind speed: ${speed} m/s</p>
`;
}

