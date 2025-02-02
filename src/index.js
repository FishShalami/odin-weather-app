import "./globalStyle.css";

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

getLocation();

// make URL
function getWeatherUrl(location) {
  const encodedLocation = encodeURIComponent(location);
  const apiKey = "CALMX2B2YRJ5G4WJM4ZWL5AWG";
  const baseUrl =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  return `${baseUrl}/${encodedLocation}?unitGroup=metric&key=${apiKey}&contentType=json`;
}

//return weather data using getWeatherData

async function getWeatherData(location) {
  try {
    const response = await fetch(getWeatherUrl(location), { mode: "cors" });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    console.log(responseData);
    console.log({ address: responseData.address, days: responseData.days });
    return {
      address: responseData.address,
      days: responseData.days,
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// function processWeatherData() {

// }

//load DOM elements to display data
