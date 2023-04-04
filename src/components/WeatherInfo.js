import { useState, useEffect } from 'react';

const WeatherInfo = props => {
	const [image, setImage] = useState('');
	
	// depending on weather id get image from api

	const getIcon = async () => {
		let response = await fetch(`http://openweathermap.org/img/w/${props.weather.icon}.png`);
		setImage(response.url);
		console.log(image);
	} 

	useEffect(() => {
		getIcon();
	}, [getIcon])
		
	return (
		<div>
			<img src={image} width='100px' height='100px' />
			<p>{props.weather.description}</p>
			<p>{props.weather.temp} &#8457;</p>
			<p>humidity: {props.weather.humidity}</p>
			<p>wind speed: {props.weather.wind}</p>
		</div>
	);
};

export default WeatherInfo;