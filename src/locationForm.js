import getWeatherData from "./apiFetch";
import processWeatherData from "./processData";

function getLocation() {
  document.addEventListener("DOMContentLoaded", () => {
    const locationForm = document.getElementById("locationForm");
    locationForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const locationInput = document
        .getElementById("locationInput")
        .value.trim();

      if (!locationInput) {
        alert("Please enter valid location!");
        return;
      }
      console.log(`User entered ${locationInput}`);
      const weatherData = await getWeatherData(locationInput);

      processWeatherData(weatherData);
    });
  });
}

export default getLocation;
