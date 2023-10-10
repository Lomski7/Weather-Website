import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './24HourWeather.css';

const TfHourWeather = ({ city }) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const apiKey = "f776c42f7792f8834a9f69a61a3a295f";
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=8&appid=${apiKey}`;
        const response = await axios.get(apiUrl);
        setForecastData(response.data);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };

    fetchForecastData();
  }, [city]);

  const groupForecastByDay = () => {
    return forecastData?.list?.reduce((dailyForecast, item) => {
      const date = new Date(item.dt * 1000).toLocaleDateString();
      dailyForecast[date] = [...(dailyForecast[date] || []), item];
      return dailyForecast;
    }, {});
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
    <div className="HoursWeather-Card">
      <h2 style={{textAlign: 'center', width: '100%', fontFamily: "Ariel",fontSize:'30px'}}>24 Hour Forecast for {city.toUpperCase()}</h2>
      {forecastData && (
        <div>
          {forecastData.list.map((item) => (
            <div className='HoursWeather-div' key={item.dt}>
              <h3 style={{fontSize:"30px",fontFamily:"Ariel",}}>{new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</h3>
              <p className="Description24" > {getWeatherDescription(item)}</p>
              <p className="Temperature24">{Math.round(item.main.temp)}°C {getTemperatureEmoji()}</p>
              <p className="FeelsLike24" >Feels Like: {Math.round(item.main.feels_like)}°C {getFeelsLikeEmoji(item.main.feels_like)}</p>
              <p className="WindSpeed24" >Wind Speed: {Math.round(item.wind.speed)}km/h {getWindSpeedEmoji()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default TfHourWeather;
