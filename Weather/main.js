let notificationElement = document.querySelector(".notification");
let iconElement = document.querySelector(".weather-icon");
let tempElement = document.querySelector(".temperature-value p");
let descElement = document.querySelector(".temperature-description p");
let locationElement = document.querySelector(".location p");

const weather = {};

weather.temperature = {
    unit: "celcius"
}

const KELVIN = 273;
const key = "eb65b34b0c257d6b95182aa493e0af1d";

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Geolocation not supported by the browser.</p>"
}

function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

function showError(error) {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} <p>`;
}

function getWeather(latitude, longitude) {
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    console.log(api);

    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function () {
            displayWeather();
        });
}

function getChosenWeather() {

    let askedCity = document.getElementById("choosecity").value;
    let CityApi = `http://api.openweathermap.org/data/2.5/weather?q=${askedCity}&appid=${key}`;

    fetch(CityApi)
        .then(function (response) {
            let dataCity = response.json();
            return dataCity;
        })
        .then(function (dataCity) {
            weather.temperature.value = Math.floor(dataCity.main.temp - KELVIN);
            weather.description = dataCity.weather[0].description;
            weather.iconId = dataCity.weather[0].icon;
            weather.city = dataCity.name;
            weather.country = dataCity.sys.country;
        })
        .then(function () {
            displayWeather();
        });
}

function displayWeather() {

    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;

    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;

    descElement.innerHTML = weather.description;

    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

document.querySelector("button").addEventListener("click", function (event) {
    event.preventDefault();
    getChosenWeather();
    document.getElementById("choosecity").value = ""
});
