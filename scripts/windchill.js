// Function to fetch weather data from the API
async function getWeatherData() {
    const apiKey = 'cfbc350a48add4351adda1aa5356d418';
    const city = 'City of Marikina';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        document.getElementById('city').textContent += city;
        document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
        document.getElementById('description').textContent = `Description: ${description}`;
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();
        const threeDayForecast = forecastData.list.slice(0, 3);

        const forecastContainer = document.getElementById('forecast-container');
        forecastContainer.innerHTML = '';

        threeDayForecast.forEach(entry => {
            const forecastTemperature = entry.main.temp;
            const weatherIcon = entry.weather[0].icon;

            const forecastItem = document.createElement('div');
            forecastItem.classList.add('forecast-item');

            const temperatureText = document.createTextNode(`Temperature: ${forecastTemperature}°C`);
            forecastItem.appendChild(temperatureText);
            forecastItem.style.color = '#ffffff';

            const iconImage = document.createElement('img');
            iconImage.src = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
            // Set the width and height of the image to 15px
            iconImage.style.width = '25px';
            iconImage.style.height = '25px';

            forecastItem.appendChild(iconImage);
            forecastContainer.appendChild(forecastItem);
        });
    } catch (error) {
        console.error('Error fetching weather data', error);
    }
}

// Call the function to fetch weather data and update UI
getWeatherData();