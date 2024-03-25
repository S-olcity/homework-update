function forcastWeather(response){
    let temperatureElement=document.querySelector("#weather-temperature-js");
    let temperature=response.data.temperature.current;
    let cityElement=document.querySelector("#search-city-js");

    cityElement.innerHTML=response.data.city;
    temperatureElement.innerHTML=Math.round(temperature);
}

function cityResult(city){
    let apiKey="6fcaa6357tb392o7aa1994c5db0f0404";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(forcastWeather);
}

function searchResult(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-input-js");
    cityResult(searchInput.value);
}


    let formElement=document.querySelector("#input-form-js");
    formElement.addEventListener("submit" , searchResult);
    
    cityResult("paris");
