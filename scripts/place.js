const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;
document.getElementById("last-modified").textContent = document.lastModified;

// Static values for Reykjavík, matching the text displayed in the Weather section.
// A future course covers pulling these from a live weather API.
const temperature = 8; // degrees Celsius
const windSpeed = 18; // km/h

function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

const windChillEl = document.getElementById("wind-chill");
if (temperature <= 10 && windSpeed > 4.8) {
  windChillEl.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)}°C`;
} else {
  windChillEl.textContent = "N/A";
}
