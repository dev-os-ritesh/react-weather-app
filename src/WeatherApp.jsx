import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Pune",
    feelsLike: 21.39,
    humidity: 48,
    temp: 21.89,
    tempMax: 21.89,
    tempMin: 21.89,
    weather: "scattered clouds",
  });

  function updateInfo(result) {
    setWeatherInfo(result); // ✅ FIXED
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App </h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

