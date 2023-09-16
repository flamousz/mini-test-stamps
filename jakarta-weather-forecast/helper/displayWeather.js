const dateFormatter = require("./dateFormatter");
const getWeatherData = require("./getWeather");
const apiKey = "559649590f8a0845ba50d7153b250fcf";
let city = "jakarta";


async function displayWeather() {
    try {
        const weatherData = await getWeatherData(apiKey, city);
        
        console.log('Weather Forecast:');

        for (const iterator of weatherData) {
            console.log(`${dateFormatter(iterator.dt_txt)}: ${iterator.main.temp}°C`);
        }

      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
}

module.exports = displayWeather