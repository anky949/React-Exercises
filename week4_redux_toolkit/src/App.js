import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MenuComponent} from "./components/MenuComponent";
import {HomeComponent} from "./components/HomeComponent";
import ProductListComponent from "./components/ProductListComponent";
import CartComponent from "./components/CartComponent";

function App() {
  /*
  npm install @reduxjs/toolkit react-redux
  npm install react-router-dom --save
npm install styled-components
npm install react-bootstrap bootstrap
--add below line in index.js to support bootstrap--
import 'bootstrap/dist/css/bootstrap.min.css'
   */

  return (
      <div className="App">
        <BrowserRouter>
          <MenuComponent />
          <Routes>
            <Route index element={<HomeComponent />} />
            <Route path="products" element={<ProductListComponent />}  />
            <Route path="cart" element={<CartComponent />}  />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
