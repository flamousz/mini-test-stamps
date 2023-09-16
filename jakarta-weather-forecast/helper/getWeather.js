const axios = require("axios");

async function getWeatherData(apiKey, city) {
	try {
		const response = await axios.get(
			`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
		);
		return response.data.list;
	} catch (error) {
		throw error;
	}
}

module.exports = getWeatherData;
