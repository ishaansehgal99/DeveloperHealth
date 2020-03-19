import React from 'react';
import Sidebar from "./sidebar/sidebar";
import { Link } from "react-router-dom"
import './App.css';
import Webcam from "react-webcam";

// import logo from './logo.svg';


export default class App extends React.Component{



    render(){
        return (
            <React.Fragment>
               <Sidebar />
                <Link className="App-link" to="/check-frame">Check if you're in the webcame frame</Link>


            </React.Fragment>
        );
    }
}

