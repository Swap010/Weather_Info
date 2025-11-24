import React, { useState, useEffect } from 'react';
import { Cloud, CloudRain, Snowflake, Wind, Sun, CloudLightning, Droplets,CloudFog  } from 'lucide-react';
import './App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          <CloudFog  size={32} className="header-icon" />
          Weather Dashboard
        </h1>
       
      </div>
    </header>
  );
};

const App = () => {
  const weatherData = [
    {
      location: "Mumbai",
      temperature: 32,
      condition: "sunny",
      humidity: 65,
      wind: 15,
      feelsLike: 35,
      bgClass: "bg-sunny"
    },

    {
      location: "Kerala",
      temperature: 18,
      condition: "rainy",
      humidity: 24,
      wind: 10,
      feelsLike: 10,
      bgClass: "bg-rainy"
    },

    {
      location: "Jammu",
      temperature: 6,
      condition: "snowy",
      humidity: 8,
      wind: 5,
      feelsLike: 4,
      bgClass: "bg-snowy"
    },

    {
      location: "WestBengal",
      temperature: 21,
      condition: "stormy",
      humidity: 15,
      wind: 33,
      feelsLike: 29,
      bgClass: "bg-stormy"
    }
  ];
  

  const [currentWeather, setCurrentWeather] = useState(weatherData[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);



  const convertTemp = (temp) => {
  
    return Math.round((temp * 9/5) + 32);
  };

  const refreshWeather = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * weatherData.length);
      setCurrentWeather(weatherData[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };



  return (
    <>
      <Header />
      <div className={`container ${currentWeather.bgClass}`}>
        <div className={`weather-card ${isAnimating ? 'animating' : ''}`}>
          
          <div className="icon-container">
            {getWeatherIcon(currentWeather.condition)}
          </div>

          <h2 className="location">{currentWeather.location}</h2>

          <div className="temp-container">
            <div className="temperature">
              {convertTemp(currentWeather.temperature)}°
              <span className="temp-unit">{isCelsius ? 'C' : 'F'}</span>
            </div>
            
          </div>
          <p className="condition">{currentWeather.condition}</p>



          <div className="details-grid">
            <div className="detail-item">
              <Droplets size={20} color="#666" />
              <div className="detail-label">Humidity</div>
              <div className="detail-value">{currentWeather.humidity}%</div>
            </div>
            <div className="detail-item">
              <Wind size={20} color="#666" />
              <div className="detail-label">Wind</div>
              <div className="detail-value">{currentWeather.wind} km/h</div>
            </div>
            <div className="detail-item">
              <Sun size={20} color="#666" />
              <div className="detail-label">Feels Like</div>
              <div className="detail-value">
                {convertTemp(currentWeather.feelsLike)}°
              </div>
            </div>
          </div>


         
          <button 
            className={`refresh-btn ${currentWeather.bgClass} ${isAnimating ? 'loading' : ''}`}
            onClick={refreshWeather}
            disabled={isAnimating}
          >
            <span className={`refresh-icon `}>
            </span>
            {isAnimating ? 'Refreshing...' : 'Refresh Weather'}
          </button>
        </div>
      </div>
    </>
  );
};
export default App;