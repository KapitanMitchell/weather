let button = document.querySelector(".btn");
let buttonInput = document.querySelector(".input__second");
let weatherContainer = document.querySelector(".app-container"); 
let weatherInfoContainer = document.querySelector(".weather-info");

button.addEventListener("click", function() {
    let newInput = buttonInput.value;
    let API_KEY = "421d7ca03f0e68de82c92703af637617";
    

    weatherInfoContainer.innerHTML = '';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newInput}&appid=${API_KEY}`, {
        method: "GET"
    })
    .then(Response => {
        if (!Response.ok) {
            console.log("Ні");
            throw new Error("Не знайдено місто");
        }
        return Response.json();
    })
    .then(data => {
        let weatherInfo = document.createElement("p");

        let temperature = Math.round(data.main.temp - 273.15); 
        let weatherDescription = data.weather[0].description;

        weatherInfo.textContent = `Температура: ${temperature}°C, Погода: ${weatherDescription}`;
        
        weatherInfoContainer.appendChild(weatherInfo); 
    })
    .catch(error => {
        console.error(error);
    });
});