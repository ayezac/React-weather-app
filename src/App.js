import React, { Component } from 'react';
import './App.css';
import Weather from './Components/Weather';
import Navbar from './Components/Navbar';


const ApiKey = "040d742b4d477bb2a9bac9151e48fa50"

class App extends Component {
  constructor() {
    super()
    this.state = {
      city: "",
      weather: "",
      temp: "",
      error: ""
    }
  }


  fetchWeather = (city) => {
    if (city) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${ApiKey}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            city: data.name,
            weather: data.weather[0].main,
            temp: data.main.temp + "°C",
            error: undefined
          })
        })
        // checking if city entered is valid and returning error if not
        .catch(error => this.setState({
          error: "Check that you entered a valid city",
          city: "",
          temp: "",
          weather: ""
         
        }))
    }
    //  setting error message if input is empty
    else {
      this.setState({
        city: "",
        weather: "",
        temp: "",
        error: "Please enter a city"
      })
    }
  }

  updateCity = (city) => this.setState({ city })

  render() {

    return (
      <div>
        <h1 className="title">Today's Weather Forecast </h1>
        <div className="App">

          <Navbar
            handleFormSubmit={this.fetchWeather}
          />

          <Weather
            city={this.state.city}
            temp={this.state.temp}
            weather={this.state.weather}
            error={this.state.error}
          />

        </div>


      </div>
    );
  }
}

export default App;
