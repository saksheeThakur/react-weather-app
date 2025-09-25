import React from "react";
export default function CurrentWeather({ data }) {
  const { main, weather, name, sys } = data;
  const capitalizedDescription =
    weather[0].description.charAt(0).toUpperCase() +
    weather[0].description.slice(1);

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl p-6 shadow-2xl transition-all duration-300 transform hover:scale-105 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-3xl font-extrabold">
            {name}, {sys.country}
          </h2>
          <p className="text-lg font-light">{capitalizedDescription}</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
          className="w-20 h-20"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-6xl font-bold">{Math.round(main.temp)}°C</p>
        </div>
        <div className="text-right text-sm">
          <p>
            Feels like:{" "}
            <span className="font-semibold">
              {Math.round(main.feels_like)}°C
            </span>
          </p>
          <p>
            Humidity: <span className="font-semibold">{main.humidity}%</span>
          </p>
          <p>
            Wind:{" "}
            <span className="font-semibold">
              {Math.round(data.wind.speed)} km/h
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
