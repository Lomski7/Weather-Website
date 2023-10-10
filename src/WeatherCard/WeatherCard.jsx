
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherCard.css';
import { useNavigate } from 'react-router-dom';
import SearchBox from "../Components/Searchbox"

const WeatherCard = ({ initialCity }) => {
  const [weatherData, setWeatherData] = useState(null);
  const navigate = useNavigate();
  const [city, setCity] = useState(initialCity);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = 'f776c42f7792f8834a9f69a61a3a295f';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [city]);

  const handleSeeNext24Hours = () => {
    navigate('/Tpage', { state: { city } }); 
  };


const getWeatherDescription = (weatherData) => {
  const mainCondition = weatherData.weather[0].main;

  const getEmoji = (emoji) => (
    <span role="img" aria-label={`${mainCondition.toLowerCase()}-emoji`}>
      {emoji}
    </span>
  );

  switch (mainCondition) {
    case 'Clear':
      return (
        <>
          <p>Clear Sky {getEmoji('☀️')}</p>
          
        </>
      );
    case 'Clouds':
      return (
        <>
          <p>Cloudy {getEmoji('☁️')}</p>
          
        </>
      );
    case 'Rain':
      return (
        <>
          <p>Rainy {getEmoji('🌧️')}</p>
          
        </>
      );
    case 'Wind':
      return (
        <>
          <p>Windy {getEmoji('🌬️')}</p>
          
        </>
      );
      
  
    default:
      return 'Unknown';
  }
};

const getTemperatureEmoji = () => (
  <span role="img" aria-label="temperature-emoji">
    🌡️
  </span>
);

const getFeelsLikeEmoji = (temperature) => {
  const emoji = temperature > 18 ? '😊' : '😓';

  return (
    <span role="img" aria-label="feels-like-emoji">
      {emoji}
    </span>
  );
};

const getWindSpeedEmoji = () => (
  <span role="img" aria-label="wind-speed-emoji">
    💨
  </span>
);

  return (
    <div>

      <SearchBox onSearch={setCity} />
    <div className={`weather-card ${weatherData ? 'styled' : ''}`}>

      {weatherData && (
        <>
          <h2 style={{ fontSize: '35px' }}>{weatherData.name.toUpperCase()}</h2>
          <p className="Description" >{getWeatherDescription(weatherData)}</p>
          <p className="Temperature" >Temperature: {Math.round(weatherData.main.temp)}°C {getTemperatureEmoji()}</p>
          <p className="FeelsLike" >Feels Like: {Math.round(weatherData.main.feels_like)}°C {getFeelsLikeEmoji(Math.round(weatherData.main.feels_like))}</p>
          <p className="WindSpeed" >Wind Speed: {Math.round(weatherData.wind.speed)}km/h {getWindSpeedEmoji()}</p>
          <button onClick={handleSeeNext24Hours} className='Btn'>
            See next 24 Hours!
          </button>
        </>
      )}
    </div>
      </div>
  );
};

export default WeatherCard;
