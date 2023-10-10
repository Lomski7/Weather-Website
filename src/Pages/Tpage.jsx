import React from "react";
import { useLocation } from 'react-router-dom';
import TfHourWeather from "../WeatherCard/24HourWeather";


function Tpage() {
  const location = useLocation();
  const city = location.state ? location.state.city : ''; // Retrieve city from the location state

  return (
    <div>
      <div className="Container">
        <TfHourWeather city={city} />
        
      </div>
    </div>
  );
}

export default Tpage;

