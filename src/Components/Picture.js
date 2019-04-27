
import React from 'react'
import '../App.css'



function Picture (props) {
    return(
        <div>
             <img id = "weather-icon" src = {props.image} alt="sunny"/>    
        </div>
    )
}

export default Picture