import React from "react"
import { Link } from "react-router-dom"
import Logo from "../logo.svg"
import "../App.css"
import Webcam from 'react-webcam'


const CheckFrame = () => {
    return (
        <div className="check-frame">
            <Link className ="App-link" to= "/">Link to Home</Link>
            <Webcam/>
        </div>
    )
}

export default CheckFrame