import { useState } from 'react';

import Search from './components/Search';
import './App.css';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [weather, setWeather] = useState({});
  const [validResponse, setValidResopnse] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const sendRequest = async (location) => {
    let data;
    let weather;
    let response;
    let coordinates;
    
    // get lat and longitude of location
    // TODO: refactor to accept country and state codes
    try {
      response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${API_KEY}`);

      if (!response.ok) {
        throw new Error('ERROR: something went wrong with the geo-coding request.');
      }

      data = await response.json();
      coordinates = data.map((data) => {
      return {
        lat: data.lat,
        lon: data.lon
      }
      })
    }
    catch (error) {
      console.log(error.message);
    }
  
    
    // get weather data for lat and lon
    try {
      response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0].lat}&lon=${coordinates[0].lon}&appid=${API_KEY}&units=imperial`
      ) 

      if (!response.ok) {
        throw new Error('ERROR: something went wrong with the weather request.')
      }

      data = await response.json();

      weather = {
        temp: data.main.temp,
        wind: data.wind.speed,
        humidity: data.main.humidity,
        description: data.weather[0].description
      } 
    }
    catch (error) {
      console.log(error.message);
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
        {validResponse && <WeatherInfo weather={weather}/>}
      </div>
    </div>
  );
}

export default App;
