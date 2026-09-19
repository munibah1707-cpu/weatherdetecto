const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityNameDisplay = document.getElementById("cityName");
const temperatureDisplay = document.getElementById("temp");
const descriptionDisplay = document.getElementById("description");

searchBtn.addEventListener("click", function () {
  const city = cityInput.value.trim();
  if (!city) return;

  fetch(`/.netlify/functions/weather?city=${encodeURIComponent(city)}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.cod !== 200) {
        cityNameDisplay.textContent = "City not found";
        temperatureDisplay.textContent = "";
        descriptionDisplay.textContent = "";
        return;
      }
      cityNameDisplay.textContent = data.name;
      temperatureDisplay.textContent = `${data.main.temp}°C`;
      descriptionDisplay.textContent = data.weather[0].description;
    })
    .catch(function (error) {
      console.log("Error:", error);
      cityNameDisplay.textContent = "Something went wrong";
    });
});
