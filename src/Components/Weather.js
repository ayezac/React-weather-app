import React from 'react'
import '../App.css';
import Picture from './Picture'
import sunny from './images/sunny.svg'
import rainy from './images/rainy.svg'
import cloudy from './images/cloudy.png'




const Weather = (props) => {

  // conditionally rendering display based on weather state
  let images = {
    Rain: rainy,
    Clear: sunny,
    Clouds: cloudy
  }
  return (
    <div className="weather">
      <h3> {props.error} </h3>
      {props.weather && <Picture image={images[props.weather]} />}
      <h1 id="cityName"> {props.city} </h1>
      <p id="temp">{props.temp}  </p>
      <strong><p id="description"> {props.weather} </p></strong>

     
    </div>)

}


export default Weather;