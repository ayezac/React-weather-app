import React from 'react';
import '../App.css';



class Navbar extends React.Component {
    constructor() {
        super ()
        this.state = {
            cityQuery : ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            cityQuery: event.target.value
        })
    }

    handleSubmit(event) {
            event.preventDefault();
            this.props.handleFormSubmit(this.state.cityQuery)
        
           }
    
    render() {
       
        return (
            <div className="navbar">
 
                <form className="navbar"> 
                    
                    <label id = "inputLabel">  
                    <input 
                        className="inputField"
                        type ="text" 
                        name = "city"  
                        value= {this.state.cityQuery}
                        onChange = {this.handleChange}
                        placeholder = "Name of city"/>
                    </label>
            
                    <button 
                    id="button"
                    onClick ={this.handleSubmit}>
                    Get Weather
                    </button>

                </form>

             </div>
        )
        }
}

export default Navbar;