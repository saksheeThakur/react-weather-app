import React from "react";
export default function Forecast({ data }) {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const dailyForecast = {};
  data.list.forEach((entry) => {
    const date = entry.dt_txt.split(" ")[0];
    if (!dailyForecast[date] && entry.dt_txt.includes("12:00:00")) {
      dailyForecast[date] = entry;
    }
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {Object.values(dailyForecast)
        .slice(0, 5)
        .map((day) => (
          <div
            key={day.dt}
            className="bg-gradient-to-br from-blue-50 to-blue-200 rounded-2xl p-4 text-center shadow-lg hover:scale-105 transition-transform"
          >
            <p className="font-bold text-gray-800 mb-2">
              {new Date(day.dt * 1000).toLocaleDateString(undefined, {
                weekday: "short",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="mx-auto w-16 h-16"
            />
            <p className="text-2xl font-bold text-blue-600">
              {Math.round(day.main.temp)}°C
            </p>
            <p className="text-xs text-gray-600 capitalize">
              {capitalize(day.weather[0].description)}
            </p>
          </div>
        ))}
    </div>
  );
}
