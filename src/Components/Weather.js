import React from "react";
import "../App.css";
import sunny from "./images/sunny.svg";
import rainy from "./images/rainy.svg";
import cloudy from "./images/cloudy.png";

const images = {
  Rain: rainy,
  Clear: sunny,
  Clouds: cloudy,
};

const Weather = ({ weather, error, temp, city }) => (
  <div className="weather">
    <h3> {error} </h3>
    {weather && (
      <img src={images[weather]} alt="weather" className="weather-icon" />
    )}
    <h1 id="cityName"> {city} </h1>
    <p id="temp">{temp} </p>
    <strong>
      <p id="description"> {weather} </p>
    </strong>
  </div>
);

export default Weather;
