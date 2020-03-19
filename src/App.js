import React from 'react';
import Sidebar from "./sidebar/sidebar";
import { Link } from "react-router-dom"
import './App.css';
// import logo from './logo.svg';


export default class App extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Sidebar />
            </React.Fragment>
        );
    }
}

