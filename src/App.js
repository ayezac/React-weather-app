import React, { Component } from 'react';
import './App.css';
import Weather from './Components/Weather';
import Navbar from './Components/Navbar';





class App extends Component {
  constructor() {
    super ()
    this.state = {
      cityQuery: "", 
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit(cityName) {
    this.setState({
      cityQuery:cityName })
  }
  render() {
    
    return (
      <div>
        <h1 className="title">Today's Weather Forecast </h1>
        <div className="App">
     
            <Navbar handleFormSubmit = {this.onFormSubmit} />
          
            <Weather 
            cityQuery = {this.state.cityQuery}
            />
            
        </div>
   

      </div>
    );
  }
}

export default App;
