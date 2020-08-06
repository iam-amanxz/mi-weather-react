import React from "react";
import { RiDropLine, RiContrastDropLine } from "react-icons/ri";
import { BsSun } from "react-icons/bs";
import { WiSunrise, WiSunset } from "react-icons/wi";
import "./WeatherInfo.css";

function WeatherInfo({ weatherDetails }) {
  return (
    <div className="weatherInfo">
      {/** Info-1 => Percipitation , UV Index*/}
      <div className="weatherInfo--card1">
        <div className="card1--left">
          <RiDropLine className="card1--left__icon" />
          <div className="card1--left__text">
            <p>Precipitation</p>
            <p>{weatherDetails.precipitation}</p>
          </div>
        </div>
        <div className="card1--right">
          <BsSun className="card1--right__icon" />
          <div className="card1--right__text">
            <p>UV Index</p>
            <p>{Math.floor(weatherDetails.uvIndex)}</p>
          </div>
        </div>
      </div>
      {/** Info-2 => Relative Humidity, Sunrise, Sunset*/}
      <div className="weatherInfo--card2">
        <div className="card2__humidty card2__el">
          <div className="card2__left">
            <RiContrastDropLine className="card2__left--icon" />
            <p className="card2__left--text">Relative Humidity</p>
          </div>
          <p>{weatherDetails.relativeHumidity}</p>
        </div>
        <div className="card2__sunrise card2__el">
          <div className="card2__left">
            <WiSunrise className="card2__left--icon" />
            <p className="card2__left--text">Sunrise</p>
          </div>
          <p>{weatherDetails.sunrise}</p>
        </div>
        <div className="card2__sunset card2__el">
          <div className="card2__left">
            <WiSunset className="card2__left--icon" />
            <p className="card2__left--text">Sunset</p>
          </div>
          <p>{weatherDetails.sunset}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
