import React from 'react';
import './sidebar.css'

export default class Sidebar extends React.Component{
    render(){
        return (
            <div className="sidebar-main">
                <svg style={{display:"none"}}>
                    <defs>

                        <g id="home">
                            <path fill="#90A4AE"
                                  d="M42,48H6c-3.3,0-6-2.7-6-6V6c0-3.3,2.7-6,6-6h36c3.3,0,6,2.7,6,6v36C48,45.3,45.3,48,42,48z"/>
                            <path fill="#212121" d="M20.8,35.5v-9.6h6.4v9.6h8V22.7H40L24,8.3L8,22.7h4.8v12.8H20.8z"/>
                        </g>

                        <g id="search">
                            <path fill="#90A4AE" d="M22.9,20.1h-1.5l-0.5-0.5c1.8-2.1,2.9-4.8,2.9-7.7C23.8,5.3,18.5,0,11.9,0S0,5.3,0,11.9s5.3,11.9,11.9,11.9
            c3,0,5.7-1.1,7.7-2.9l0.5,0.5v1.4l9.1,9.1l2.7-2.7L22.9,20.1z M11.9,20.1c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2
            S16.4,20.1,11.9,20.1z"/>
                        </g>

                        <g id="map">
                            <path fill="#90A4AE" d="M16,14.2c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8c1,0,1.8-0.8,1.8-1.8S17,14.2,16,14.2z M16,0
            C7.2,0,0,7.2,0,16c0,8.8,7.2,16,16,16s16-7.2,16-16C32,7.2,24.8,0,16,0z M19.5,19.5L6.4,25.6l6.1-13.1l13.1-6.1L19.5,19.5z"/>
                        </g>

                        <g id="planner">
                            <path fill="#90A4AE"
                                  d="M28.4,3.6h-1.8V0h-3.6v3.6H8.9V0H5.3v3.6H3.6C1.6,3.6,0,5.1,0,7.1L0,32c0,2,1.6,3.6,3.6,3.6h24.9c2,0,3.6-1.6,3.6-3.6V7.1C32,5.1,30.4,3.6,28.4,3.6z M28.4,32H3.6V12.4h24.9V32z M7.1,16H16v8.9H7.1V16z"/>
                        </g>

                    </defs>
                </svg>

                <nav className = "nav-cont">
                    <ul className = "nav" >
                        <li className = "nav-items " >
                            <svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 48 48" >
                                <use href = "#home" xlinkHref = "#home"> </use>
                             </svg>
                            <a href="">Home</a>
                        </li>

                        <li className="nav-items ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <use href="#search" xlinkHref="#search"></use>
                            </svg>
                            <a href="">Search</a>
                        </li>

                        <li className="nav-items ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <use href = "#map" xlinkHref = "#map"> </use>
                            </svg>
                            <a href="">Map</a>
                        </li>

                        <li className="nav-items ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 35.6">
                                <use href = "#planner" xlinkHref = "#planner"> </use>
                            </svg>
                            <a href="">Planner</a>
                        </li>
                    </ul>
                </nav>

                <div className="wrapper">
                    <main>
                        <h1 className= "screen-title"> Navigation</h1>
                    </main>
                </div>

            </div>

    );

    }

}



