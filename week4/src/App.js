import logo from './logo.svg';
import './App.css';
import {MenuComponent} from "./components/MenuComponent";
import {HomeComponent} from "./components/HomeComponent";
import ProductListContainer from "./components/ProductListComponent";
import {useState} from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import CartComponentContainer from "./components/CartComponent";

function App() {
  /*
 npm install --save redux
 npm install --save react-redux
npm install --save redux-thunk
 npm install react-router-dom --save
npm install styled-components
npm install react-bootstrap bootstrap



   */


  return (

      <div className="App">
        <BrowserRouter>
          <MenuComponent />
          <Routes>
            <Route index element={<HomeComponent />} />
            <Route path="products" element={<ProductListContainer />}  />
            <Route path="cart" element={<CartComponentContainer />}  />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
