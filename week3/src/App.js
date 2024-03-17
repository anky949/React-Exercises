import logo from './logo.svg';
import './App.css';
import {ProductListComponent} from "./components/ProductListComponent";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import React, {useState} from "react";
import {HomeComponent} from "./components/HomeComponent";
import {CartComponent} from "./components/CartComponent";
import {MenuComponent} from "./components/MenuComponent";

function App() {


  const [cartProducts,setCartProducts] = useState([]);

  const addProductToCart=(product)=>{
    console.log(product.title);
    setCartProducts([...cartProducts,product]);
    console.log(cartProducts.length);
  }

  return (

      <div className="App">
        <BrowserRouter>
            <MenuComponent />
            <Routes>
                    <Route index element={<HomeComponent />} />
                    <Route path="products" element={<ProductListComponent addToCart={addProductToCart} />}  />
                    <Route path="cart" element={<CartComponent products={cartProducts} />}  />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
