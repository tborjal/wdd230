async function getWeatherData() {
    const apiKey = 'cfbc350a48add4351adda1aa5356d418'; 
    const city = 'City of Marikina'; 
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        const temperature = data.main.temp;
        const windSpeed = data.wind.speed;
        const humidity = data.main.humidity;
        const iconCode = data.weather[0].icon; // Weather icon code

        const windChillIndex = 5.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

        document.getElementById('city').textContent = city;
        document.getElementById('temperature').textContent = `${temperature}°C`;
        document.getElementById('windChill').textContent = `Wind Chill: ${windChillIndex.toFixed(2)} °C`;
        document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;

        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
        document.getElementById('weather-icon').src = iconUrl;
    } catch (error) {
        console.error('Error fetching weather data: ', error);
        document.getElementById('city').textContent = 'City: N/A';
        document.getElementById('temperature').textContent = 'Temperature: N/A';
        document.getElementById('windChill').textContent = 'Wind Chill: N/A';
        document.getElementById('humidity').textContent = 'Humidity: N/A';
        document.getElementById('weather-icon').src = ''; // Clear the icon
    }
}

// Call the function to fetch weather data when the page loads
getWeatherData();
