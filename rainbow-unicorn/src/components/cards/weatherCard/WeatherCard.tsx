import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherCard.css';

const WeatherCard: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    getWeatherData();
  }, []);

  const getWeatherData = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchWeather);
    } else {
      alert('Geolocalización no soportada en este navegador.');
    }
  };

  const fetchWeather = async (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    const apiKey = 'tu_api_key_de_openweathermap'; // Reemplaza con tu API Key

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error al obtener el clima:', error);
    }
  };

  return (
    <div className="weather-container">
      {weatherData ? (
        <>
          <h3>Clima en {weatherData.name}</h3>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Humedad: {weatherData.main.humidity}%</p>
          <p>Viento: {weatherData.wind.speed} m/s</p>
        </>
      ) : (
        <p>Cargando información del clima...</p>
      )}
    </div>
  );
};

export default WeatherCard;
