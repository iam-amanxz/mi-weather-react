import React from "react";
import { AiFillCloud } from "react-icons/ai";
import "./WeatherWidget.css";
import moment from "moment";

function WeatherWidget({ weatherDetails }) {
  return (
    <div className="weatherWidget">
      <p className="weatherWidget__cityInfo">
        {`${weatherDetails.city}, ${weatherDetails.countryCode}`}
      </p>
      <p className="weatherWidget__date">
        {moment(Date.now()).format("dddd, MMMM Do YYYY, h:mm a")}
      </p>
      <div className="weatherWidget__temperature">
        <div>
          <AiFillCloud className="weatherWidget__temperature--icon" />
        </div>
        <h1 className="weatherWidget__temperature--text">
          {weatherDetails.temperature}°
        </h1>
      </div>
      <p className="weatherWidget__description">
        Feels like {weatherDetails.appTemperature}° -{" "}
        <span>{weatherDetails.description}</span>
      </p>
    </div>
  );
}

export default WeatherWidget;
