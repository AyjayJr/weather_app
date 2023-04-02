const WeatherInfo = props => {
	return (
		<div>
			<p>description: {props.weather.description}</p>
			<p>temp: {props.weather.temp}</p>
			<p>humidity: {props.weather.humidity}</p>
			<p>wind speed: {props.weather.wind}</p>
		</div>
	);
};

export default WeatherInfo;