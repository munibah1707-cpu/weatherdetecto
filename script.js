const apiKey = config.WEATHER_API_KEY;

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityNameDisplay = document.getElementById("cityName");
const temperatureDisplay = document.getElementById("temp");
const descriptionDisplay = document.getElementById("description");

searchBtn.addEventListener("click", function() {
    const city = cityInput.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log("The user wants to search for:", city);
    console.log("Constructed API URL:", apiUrl);

   fetch(apiUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
   cityNameDisplay.textContent = data.name;
   temperatureDisplay.textContent = `${data.main.temp}°C`;
   descriptionDisplay.textContent = data.weather[0].description;
  })
  .catch(function(error) {
    console.log("Error:", error);
  });

});
