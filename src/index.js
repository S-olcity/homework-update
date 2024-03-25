function forecastWeather(response){
    let temperatureElement = document.querySelector("#weather-temperature-js");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#search-city-js");
    let description = document.querySelector("#description-js");
    let humidity = document.querySelector("#humidity-js");
    let windspeed = document.querySelector("#wind-js");
    let timeElement = document.querySelector("#time-js");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#weather-icon-js");

    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = formatDate(date);
    temperatureElement.innerHTML = Math.round(temperature);
    description.innerHTML =response.data.condition.description;
    humidity.innerHTML = response.data.temperature.humidity;
    windspeed.innerHTML = response.data.wind.speed;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon" />`
}
function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[date.getDay()];
  
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return `${day} ${hours}:${minutes}`;
}


function cityResult(city){
    let apiKey="6fcaa6357tb392o7aa1994c5db0f0404";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    
    axios.get(apiUrl).then(forecastWeather);
}

function searchResult(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-input-js");
    cityResult(searchInput.value);
}


    let formElement=document.querySelector("#input-form-js");
    formElement.addEventListener("submit" , searchResult);
    
    cityResult("paris");
