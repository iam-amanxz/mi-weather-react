import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherWidget from "./components/WeatherWidget";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  // State
  const [weatherDetails, setWeatherDetails] = useState({});
  const [city, setCity] = useState("colombo");
  const [cityChanged, setCityChanged] = useState("");
  const [error, setError] = useState("");

  const apiKey = "5787d86c0ce14618bc662f524df07e88";

  // Fetch Data
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchWeatherData = async () => {
      await fetch(
        `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`,
        { signal: signal }
      )
        .then((response) => response.json())
        .then((data) => {
          const weatherInfo = {
            city: data.data[0].city_name,
            countryCode: data.data[0].country_code,
            temperature: data.data[0].temp,
            appTemperature: data.data[0].app_temp,
            description: data.data[0].weather.description,
            relativeHumidity: data.data[0].rh,
            uvIndex: data.data[0].uv,
            precipitation: data.data[0].precip,
            sunrise: data.data[0].sunrise,
            sunset: data.data[0].sunset,
          };
          setWeatherDetails(weatherInfo);
          setCityChanged("");
        })
        .catch((error) => setError(error));
    };

    fetchWeatherData();

    return function cleanup() {
      abortController.abort();
    };
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityChanged !== "") {
      setCity(cityChanged);
    }
  };

  return (
    <div className="app">
      <div className="app__container">
        {/** Logo Goes Here */}
        <p className="app__logo">MiWeather</p>

        {/** Searchbar */}
        <form className="searchForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            className="searchInput"
            value={cityChanged}
            onChange={(e) => setCityChanged(e.target.value)}
          />
        </form>

        {error && <p>{error}</p>}
        <div className="app__elements">
          <div className="app__widget">
            {/** Widget => Cirty, State, Country, Icon, Temperature, FeelsLike Temp, Description*/}
            <WeatherWidget weatherDetails={weatherDetails} />
          </div>

          <div className="app__info">
            <WeatherInfo weatherDetails={weatherDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
