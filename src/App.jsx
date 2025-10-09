import { useState, useEffect } from "react";
import WeatherSearch from "./WeatherSearch.jsx";
import CurrentWeather from "./CurrentWeather.jsx";
import React from "react";

const API_KEY = "c6f7dabc83e24eac7242603af976d2f8";

function App() {
  const [city, setCity] = useState("Delhi");
  const [currentData, setCurrentData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const fetchWeather = async (city) => {
    try {
      const currentRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!currentRes.ok || !forecastRes.ok) {
        throw new Error("City not found");
      }

      const currentData = await currentRes.json();
      const forecastData = await forecastRes.json();

      setCurrentData(currentData);
      setForecastData(forecastData);
    } catch (error) {
      alert("City not found");
    }
  };

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <WeatherSearch city={city} setCity={setCity} />
      {currentData && <CurrentWeather data={currentData} />}
      {forecastData && <Forecast data={forecastData} />}
    </div>
  );
}

export default App;
