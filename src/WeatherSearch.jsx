import { useState, useEffect } from "react";
import React from "react";

export default function WeatherSearch({ city, setCity }) {
  const [input, setInput] = useState(city);
  let debounceTimeout;

  useEffect(() => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      if (input.trim()) setCity(input);
    }, 1000);

    return () => clearTimeout(debounceTimeout);
  }, [input]);

  return (
    <div className="mb-5">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city"
        className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
    </div>
  );
}
