document.addEventListener('DOMContentLoaded', () => {
    // Get current year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Get date of last modification of document
    const lastModified = new Date(document.lastModified);
    const formattedLastModified = lastModified.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });
    document.getElementById('date-and-time').textContent = formattedLastModified;
});


// Calculate the wind chill factor based on temperature and wind speed
function calculateWindChill(temp, windSpeed, isCelsius = true) {
    if (isCelsius) {
        // Wind chill calculation for Celsius
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    } else {
        // Wind chill calculation for Fahrenheit
        return 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
    }
}

// Function to update the wind chill on the page
function updateWindChill() {
    const tempSpan = document.querySelector('.weather span:nth-of-type(1)');
    const windSpeedSpan = document.querySelector('.weather span:nth-of-type(3)');
    const windChillSpan = document.querySelector('.weather span:nth-of-type(5)');

    // Extract temperature and wind speed values from text content
    const tempText = tempSpan.textContent;
    const windSpeedText = windSpeedSpan.textContent;

    const temperature = parseFloat(tempText.match(/-?\d+(\.\d+)?/)[0]);
    const windSpeed = parseFloat(windSpeedText.match(/-?\d+(\.\d+)?/)[0]);

    // Check if the temperature and wind speed meet the conditions for wind chill calculation
    if ((tempText.includes('°C') && temperature <= 10 && windSpeed > 4.8) || 
        (tempText.includes('°F') && temperature <= 50 && windSpeed > 3)) {

        // Determine if the temperature is in Celsius or Fahrenheit
        const isCelsius = tempText.includes('°C');
        const windChill = calculateWindChill(temperature, windSpeed, isCelsius);
        windChillSpan.textContent = `${windChill.toFixed(1)}${isCelsius ? '°C' : '°F'}`;
    } else {
        windChillSpan.textContent = 'N/A';
    }
}

// Call the updateWindChill function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', updateWindChill);

