import React from "react";
import {Link, NavLink} from "react-router-dom"
import {ClosureExample} from "./ClosureExample";
import {CountInvocationAndInstances} from "./CountInvocationAndInstances";

export class Navigation extends React.Component{
    render() {
        return(
                <ul>
                    <li> <Link to="/currentTime">Current Time</Link></li>
                    <li> <Link to="/printArray">Print array after 3 seconds</Link></li>
                    <li> <Link to="/closureExample">Counter using closure</Link></li>
                    <li> <Link to="/countInvocationAndInstances">Number Of Invocation</Link></li>
                    <li> <Link to="/tribute">Tribute Page</Link></li>

                </ul>
        )
    }
}