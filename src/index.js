import "./globalStyle.css";
import getLocation from "./locationForm";

getLocation();

function processWeatherData(weatherData) {
  if (!weatherData) {
    console.error("No weather data available");
    return;
  }

  //   // For example, display the address and list the days in designated DOM elements:
  //   const addressEl = document.getElementById("address");
  //   const daysContainer = document.getElementById("daysContainer");

  //   // Update the address
  //   addressEl.textContent = weatherData.address;

  const contentContainer = document.querySelector(".content");

  // Clear previous data
  contentContainer.innerHTML = "";

  // Assume weatherData.days is an array; display each day's info.
  weatherData.days.forEach((day) => {
    const dayEl = document.createElement("div");
    // Customize this as needed based on your day object structure
    dayEl.textContent = `Day: ${day.datetime} - Temp: ${day.temp}° - Condition: ${day.conditions}`;
    daysContainer.appendChild(dayEl);
  });
}

//load DOM elements to display data
