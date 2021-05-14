import React, { useState } from "react";
import "../App.css";
import Weather from "./Weather";
import Navbar from "./Navbar";

const ApiKey = process.env.REACT_APP_APIKEY;

const Container = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [error, setError] = useState("");

  const fetchWeather = (city) => {
    if (city) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${ApiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setCity(data.name);
          setWeather(data.weather[0].main);
          setTemp(data.main.temp + "°C");
          setError("");
        })
        // checking if city entered is valid and returning error if not
        .catch((error) => {
          setCity("");
          setTemp("");
          setWeather("");
          setError("Check that you entered a valid city");
        });
    }
    //  setting error message if input is empty
    else {
      setCity("");
      setTemp("");
      setWeather("");
      setError("Please enter the name of a city");
    }
  };

  return (
    <div>
      <h1 className="title">Today's Weather Forecast </h1>
      <div className="App">
        <Navbar handleFormSubmit={fetchWeather} />

        <Weather city={city} temp={temp} weather={weather} error={error} />
      </div>
    </div>
  );
};

export default Container;
