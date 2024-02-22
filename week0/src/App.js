import logo from './logo.svg';
import './App.css';
import React from "react";
import {CurrentTime} from "./components/CurrentTime"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navigation} from "./components/Navigation"
import {PrintArray} from "./components/PrintArray";
import {PrintArray1} from "./components/printArray1";
import {ClosureExample} from "./components/ClosureExample";
import {CountInvocationAndInstances} from "./components/CountInvocationAndInstances";

class App extends React.Component {

  render() {
    return(
        <BrowserRouter>
          <dev>
            <Navigation/>
              <Routes>
            <Route path="/currentTime" Component={CurrentTime}/>
            <Route path="/printArray" Component={PrintArray1}/>
            <Route path="/closureExample" Component={ClosureExample}/>
            <Route path="/countInvocationAndInstances" Component={CountInvocationAndInstances}/>
              </Routes>
              </dev>
        </BrowserRouter>
    )
  }
}

export default App;
