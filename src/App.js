import React from 'react';
import { Link } from "react-router-dom"
import './App.css';
import Webcam from "react-webcam";

// import logo from './logo.svg';

export default class App extends React.Component{



    render(){
        return (
            <React.Fragment>
               <h1> Hello World </h1>
               <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
               > Learn React </a>
                <br />
                <Link className="App-link" to="/about">Link to the About Page</Link>
                <br />
                <Link className="App-link" to="/check-frame">Check if you're in the webcame frame</Link>

            </React.Fragment>
        );
    }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>React Electron Boilerplate</p>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Link className="App-link" to="/about">Link to the About Page</Link>
//       </header>
//
//     </div>
//   );
// }
//
// export default App;
