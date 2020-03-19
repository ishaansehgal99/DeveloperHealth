import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Home from "./App"
import About from "./pages/about"
import CheckFrame from "./pages/check-frame"


ReactDOM.render(
    <Router>
        <div>
            <main>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/check-frame" component={CheckFrame} />
            </main>
        </div>
    </Router>,
    document.getElementById("root")
);
