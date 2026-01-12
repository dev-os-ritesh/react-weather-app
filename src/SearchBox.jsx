
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "7787b9dc9269e5acec1659e1551b77bb";

  const getWeatherInfo = async () => {
    if (!city.trim()) {
      alert("Enter city name");
      return null;
    }

    const response = await fetch(
      `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      alert("City not found");
      return null;
    }

    const data = await response.json();

    return {
      city: city,
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      feelsLike: data.main.feels_like,
      weather: data.weather[0].description,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newInfo = await getWeatherInfo();
    if (newInfo) {
      updateInfo(newInfo); // ✅ NOW WORKS
    }

    setCity("");
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          label="City Name"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <br /><br />

        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
    </div>
  );
}

