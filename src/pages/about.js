import React from "react"
import { Link } from "react-router-dom"
import Logo from "../logo.svg"
import "../App.css"


export default class About extends React.Component {

    render() {
        return (
            <div className="about">
                <p>Welcome to the About Page</p>
                <Link className="App-link" to="/">Link to Home</Link>
                <img className="about-img" width="275" src={Logo} alt=""/>
            </div>
        )
    }


}





// const About = () => {
//     return (
//         <div className="about">
//             <p>Welcome to the About Page</p>
//             <Link className ="App-link" to= "/">Link to Home</Link>
//             <img className="about-img" width="275" src={Logo} alt=""/>
//         </div>
//     )
// };
//
// export default About;