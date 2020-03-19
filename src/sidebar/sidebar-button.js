import React from 'react';
import './sidebar.css';




export default class SidebarButton extends React.Component {

    render(){
        return(
            <li className = "nav-items ">
            <svg xmlns={this.props.xmlns} viewBox={this.props.viewBox}>
                <use href={'#' + this.props.href} xlinkHref = {'#' + this.props.href}>
                </use>
            </svg>
            <a href="">{this.props.href}</a>
            </li>
        );
    }
}
