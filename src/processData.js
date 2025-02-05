// Module-level constant for emoji mapping
const emojiMapping = {
  rain: "🌧️",
  cloudy: "☁️",
  "partly-cloudy-day": "⛅",
  "clear-day": "☀️",
  snow: "❄️",
  // Add more mappings as needed
};

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
    const cardEl = document.createElement("div");
    cardEl.classList.add("weather-card");

    // Create an element for the emoji using the mapping defined above
    const emojiEl = document.createElement("span");
    console.log("Icon received:", day.icon.toLowerCase());
    emojiEl.textContent = emojiMapping[day.icon.toLowerCase()] || "🌈"; // Use default if no mapping exists
    emojiEl.classList.add("weather-emoji");

    // Create and style a header for the date or day
    const headerEl = document.createElement("h3");
    headerEl.textContent = formatDate(day.datetime);
    headerEl.style.marginBottom = "10px";
    headerEl.style.color = "#333";

    // Create a paragraph for temperature details
    const tempEl = document.createElement("p");
    tempEl.innerHTML = `
    <strong>Max Temp:</strong> ${convertToF(day.tempmax).toFixed(1)}°F<br>
    <strong>Min Temp:</strong> ${convertToF(day.tempmin).toFixed(1)}°F
  `;

    // Create a paragraph for weather conditions
    const conditionEl = document.createElement("p");
    conditionEl.textContent = `Condition: ${day.conditions}`;

    // Append the header, temperature, and condition elements to the card
    cardEl.appendChild(emojiEl);
    cardEl.appendChild(headerEl);
    cardEl.appendChild(tempEl);
    cardEl.appendChild(conditionEl);

    // Append the card to the main content container
    contentContainer.appendChild(cardEl);
  });
}

function formatDate(apiDate) {
  const date = new Date(apiDate);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function convertToF(tempC) {
  return tempC * (9 / 5) + 32;
}

export default processWeatherData;
