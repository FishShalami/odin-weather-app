import getWeatherData from "./apiFetch";

function getLocation() {
  document.addEventListener("DOMContentLoaded", () => {
    const locationForm = document.getElementById("locationForm");
    locationForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const locationInput = document
        .getElementById("locationInput")
        .value.trim();

      if (!locationInput) {
        alert("Please enter valid location!");
        return;
      }
      console.log(`User entered ${locationInput}`);
      getWeatherData(locationInput);
    });
  });
}

export default getLocation;
