// Select elements from the DOM
const locationInput = document.getElementById("location-input");
const findBtn = document.getElementById("find-btn");
const day1Temp = document.getElementById("day1-temp");
const day1Desc = document.getElementById("day1-desc");
const day2Temp = document.getElementById("day2-temp");
const day2Desc = document.getElementById("day2-desc");
const day3Temp = document.getElementById("day3-temp");
const day3Desc = document.getElementById("day3-desc");

// API details
const API_KEY = 'API_WEATHER_API'; 
const apiUrl = 'https://api.weatherapi.com/v1/forecast.json';


async function fetchWeather(city) {
    try {
        const response = await fetch(`${apiUrl}?key=${API_KEY}&q=${city}&days=3`);
        if (!response.ok) throw new Error('Failed to fetch weather data');
        
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}


function displayWeather(data) {
    console.log(data);

}

document.querySelector('button').addEventListener('click', () => {
    const city = document.querySelector('input').value;
    if (city) fetchWeather(city);
});

fetch('https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=aswan&days=3', {
    method: 'GET',
    mode: 'cors',
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

const proxy = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=aswan&days=3';
fetch(proxy + url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


// Function to update weather cards
function updateWeatherCards(data) {
    const forecastDays = data.forecast.forecastday;

    day1Temp.textContent = `${forecastDays[0].day.avgtemp_c}°C`;
    day1Desc.textContent = forecastDays[0].day.condition.text;

    day2Temp.textContent = `${forecastDays[1].day.avgtemp_c}°C`;
    day2Desc.textContent = forecastDays[1].day.condition.text;

    day3Temp.textContent = `${forecastDays[2].day.avgtemp_c}°C`;
    day3Desc.textContent = forecastDays[2].day.condition.text;
}

// Event listener for search button
findBtn.addEventListener("click", () => {
    const location = locationInput.value.trim();
    if (location) {
        fetchWeather(location);
    } else {
        alert("Please enter a location.");
    }
});
