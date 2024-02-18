import logo from './logo.svg';
import './App.css';
import React from "react";
import {CurrentTime} from "./components/CurrentTime"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navigation} from "./components/Navigation"
import {PrintArray} from "./components/PrintArray";

class App extends React.Component {

  render() {
    return(
        <BrowserRouter>
          <dev>
            <Navigation/>
              <Routes>
            <Route path="/currentTime" Component={CurrentTime}/>
            <Route path="/printArray" Component={PrintArray}/>
              </Routes>
              </dev>
        </BrowserRouter>
    )
  }
}

export default App;
