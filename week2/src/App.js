import logo from './logo.svg';
import './App.css';
import {ProductComponent} from "./components/ProductComponent";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import React from "react";
import {HomeComponent} from "./components/HomeComponent";
import Layout from "./components/Layout";

function App() {

  return (

    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomeComponent />} />
                    <Route path="products" element={<ProductComponent />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
