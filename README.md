# Weader Application

This simpal weather application allows users to search for current weather conditions in any city using the OpenWeatherMap API. 
It provides real-time data, including temperature, humidity, and wind speed, and dynamically updates the display based on the weather conditions.

## Features
1. Search for weather by entering the city name.
2. Displays current temperature in Celsius.
3. Provides details about humidity and wind speed.
4. Displays appropriate weather icons based on the condition (Clouds, Clear, Mist, Rain, Drizzle, Snow).
5. Error handling for invalid city names.
6. Simple, responsive UI using HTML, CSS, and JavaScript.

## Contributing
Contributions are welcome! If you'd like to modify or enhance this application, feel free to fork the repository, make changes, and submit a pull request. 
You are encouraged to add new features, fix bugs, or improve the design. Please follow standard coding practices.

## Prerequisites
Before using the project, ensure that you have an OpenWeatherMap API key. You can obtain it by signing up at OpenWeatherMap.

## Installation

1. Clone this repository to your local machine:
    Copy code
    ```git clone https://github.com/your-username/weather-app.git```

2. Navigate into the project directory:
    Copy code
    ```cd weather-app```

3. Open the project in your preferred code editor.

4. Open script.js and replace the weaderAPI variable with your OpenWeatherMap API key:
    Copy code
    ```const weaderAPI = "your-api-key-here";```

5. Open index.html in your browser to view the application.

 ## File Structure

  1. index.html: The main HTML file that includes the structure and the input field for searching.
  2. style.css: Contains the CSS for styling the weather app, making it responsive and visually appealing.
  3. script.js: JavaScript file responsible for fetching weather data and updating the DOM.
  4. images/: Contains various icons used in the application (e.g., weather icons for clear, rain, clouds, etc.).

## Future Enhancements
I am hoping to add this features in the near future
  1. Add a feature to toggle between Celsius and Fahrenheit.
  2. Support for automatic geolocation to fetch weather based on the user's current location.
  3. Implement forecast for upcoming days.
  4. Add additional weather details such as sunrise and sunset times.
