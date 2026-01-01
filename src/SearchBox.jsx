import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "7787b9dc9269e5acec1659e1551b77bb";

  const getWeatherInfo = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return null;
    }

    try {
      const response = await fetch(
        `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        setError("City does not exist");
        return null;
      }

      const data = await response.json();

      setError(""); // clear error on success

      return {
        city: city,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description,
      };
    } catch (err) {
      setError("Something went wrong. Try again.");
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newInfo = await getWeatherInfo();
    if (newInfo) {
      updateInfo(newInfo);
      setCity("");
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          label="City Name"
          variant="outlined"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setError(""); // clear error while typing
          }}
          error={Boolean(error)}
        />

        <br /><br />

        <Button type="submit" variant="contained">
          Search
        </Button>

        {error && (
          <Typography color="error" sx={{ marginTop: 2 }}>
            {error}
          </Typography>
        )}
      </form>
    </div>
  );
}
