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
  // Get a reference to the loading element
  const loadingEl = document.getElementById("loading");

  // Show the loading icon
  loadingEl.style.display = "block";

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
  } finally {
    // Hide the loading icon once the fetch is complete
    loadingEl.style.display = "none";
  }
}

export default getWeatherData;
