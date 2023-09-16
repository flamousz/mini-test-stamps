const dateFormatter = (date) => {
	const event = new Date(date);
	const options = {
		weekday: "short",
		day: "2-digit",
		month: "short",
		year: "numeric",
	};

	return event.toLocaleDateString("en-AU", options);
};


module.exports = dateFormatter