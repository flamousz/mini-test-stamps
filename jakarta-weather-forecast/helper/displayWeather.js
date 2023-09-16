const dateFormatter = require("./dateFormatter");
const getWeatherData = require("./getWeather");
const apiKey = process.env.WEATHER_MAP_API_KEY_ENV
let city = "jakarta";


async function displayWeather() {
    try {
        const weatherData = await getWeatherData(apiKey, city);
        let comparedDate = ''
        let dateChangeCounter = 0

        console.log('Weather Forecast:');

        for (const iterator of weatherData) {
            const currentDate = iterator.dt_txt.split(' ')[0]
            
            if (dateChangeCounter === 0) {
                dateChangeCounter+=1
                comparedDate = currentDate
            }
            
            if (comparedDate < currentDate) {
                comparedDate = currentDate
                console.log(`${dateFormatter(iterator.dt_txt)}: ${iterator.main.temp}°C`);
            }
        }


      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
}

module.exports = displayWeather