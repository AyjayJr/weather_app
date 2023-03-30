import { useState } from 'react';

import Search from './components/Search';
import './App.css';

function App() {
  const [weather, setWeather] = useState({});
  const [validResponse, setValidResopnse] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const sendRequest = async (location) => {

    // get lat and longitude of location
    // TODO: refactor to accept country and state codes
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${API_KEY}`);

    const data = await response.json();
    console.log(data);

    const coordinates = data.map((data) => {
      return {
        lat: data.lat,
        lon: data.lon
      }
    })
    
    // get weather data for lat and lon
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0].lat}&lon=${coordinates[0].lon}&appid=${API_KEY}&units=imperial`
    ) 

    const weatherData = await weatherResponse.json();

    const weather = {
      temp: weatherData.main.temp,
      wind: weatherData.wind.speed,
      humidity: weatherData.main.humidity,
    } 

    setWeather(weather);
    setValidResopnse(true);
  };

  // TODO: make container animate from smaller to larger card
  // TODO: decorate weather data
  return (
    <div className='content'>
      <div className='card'>
        <Search onSubmit={sendRequest} />
        {validResponse && <p>temp: {weather.temp} humidity: {weather.humidity} wind: {weather.wind}</p>}
      </div>
    </div>
  );
}

export default App;
