import React from "react";
import {NavLink} from "react-router-dom"

export class Navigation extends React.Component{
    render() {
        return(
            <nav>
                <ul>
                    <li> <NavLink to="/currentTime">Current Time</NavLink></li>
                    <li> <NavLink to="/printArray">Print array after 3 seconds</NavLink></li>
                    <li> <NavLink to="/closure">Counter using closure</NavLink></li>
                    <li> <NavLink to="/invocation">Number Of Invocation</NavLink></li>
                    <li> <NavLink to="/tribute">Tribute Page</NavLink></li>

                </ul>
            </nav>
        )
    }
}