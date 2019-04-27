import React from 'react'
import '../App.css';
import Picture from './Picture'
import sunny from './images/sunny.svg'
import rainy from './images/rainy.svg'
import cloudy from './images/cloudy.png'



const ApiKey = "040d742b4d477bb2a9bac9151e48fa50"

class Weather extends React.Component {
  constructor() {
    super()
    this.state = {

      city: "",
      weather: "",
      temp: "",
      error: ""
    }
  }
  //  fetching the API
  componentDidMount() {
    //checking if cityQuery is not an empty string 
    if (this.props.cityQuery) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.cityQuery}&units=metric&APPID=${ApiKey}`)
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
          weather: "",
          temp: "",
        }))
    }
    //  setting error message if input is empy
    else {
      this.setState({
        city: "",
        weather: "",
        temp: "",
        error: "Please enter a city"
      })
    }
  }
  // updating api fetch when input changes
  componentDidUpdate(prevProps) {
    if (this.props.cityQuery !== prevProps.cityQuery) {
      this.componentDidMount()
    }
  }



  render() {
    // conditionally rendering display based on weather state
    let images = {
      Rain: rainy,
      Clear: sunny,
      Clouds: cloudy
    }

    
    return (
      <div className="weather">
        <h3> {this.state.error} </h3>
        {this.state.weather && <Picture image={images[this.state.weather]} />}
        <h1 id="cityName"> {this.state.city} </h1>

        <strong><p id="description"> {this.state.weather} </p></strong>

        <p id="temp">{this.state.temp}  </p>
      </div>)
    
  }
}

export default Weather;