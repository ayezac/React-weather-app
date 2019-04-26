import React from 'react'

import '../App.css';


const ApiKey = "040d742b4d477bb2a9bac9151e48fa50"

class Weather extends React.Component {
  constructor(){
    super ()
    this.state ={
       
        city: "",
        weather:"",
        temp: "",
        error: ""
      
    }
  }
     
componentDidMount() {
    
  if (this.props.cityQuery){
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.cityQuery}&units=metric&APPID=${ApiKey}`)
        .then(response => response.json())
        .then(data => { 
          this.setState({
          city: data.name,
          weather: data.weather[0].main,
          temp: data.main.temp + "°C" ,
          error: undefined
          })
        })
        .catch(error => this.setState({ error: "Check that you entered a valid city"}))
       }
    else {
        this.setState({
          city: undefined,
          weather: undefined,
          temp: undefined,
          error: "Please enter a city"
        }) 
      }
  }

 componentDidUpdate(prevProps) {
      if(this.props.cityQuery !== prevProps.cityQuery)
        {
          this.componentDidMount()
    }   }
      


    render(){
        return (
        <div className = "weather">
          <h3> {this.state.error} </h3>
         
          <h1 id="cityName"> {this.state.city} </h1> 
          <strong><p id="description"> {this.state.weather} </p></strong>
          <p id="temp">{ this.state.temp}  </p>
          
        
        </div>
        
        )}
}

export default Weather;