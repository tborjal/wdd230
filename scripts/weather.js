const url = `https://api.openweathermap.org/data/2.5/weather?q=Marikina&appid=cfbc350a48add4351adda1aa5356d418&units=imperial`;
  
  // Retrieve weather data from OpenWeatherMap API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Extract the temperature and weather description from the data object
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      
      // Create a string with the temperature and weather description
      const weatherString = `${temperature} degrees Fahrenheit and ${description} in Marikina City.`;
      
      // Update the weather container element with the weather string
      document.querySelector("#weather-container").innerHTML = weatherString;
    })
    .catch(err => {
      // Handle errors by displaying a message in the weather container element
      const errorMessage = `There was an error retrieving the weather data. Please try again later. (${err.message})`;
      document.querySelector("#weather-container").innerHTML = errorMessage;
    });

  