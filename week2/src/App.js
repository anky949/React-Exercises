import logo from './logo.svg';
import './App.css';
import {ProductComponent} from "./components/ProductComponent";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import React, {useState} from "react";
import {HomeComponent} from "./components/HomeComponent";
import Layout from "./components/Layout";
import {CartComponent} from "./components/CartComponent";

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
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomeComponent />} />
                    <Route path="products" element={<ProductComponent addToCart={addProductToCart} />}  />
                    <Route path="cart" element={<CartComponent products={cartProducts} />}  />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
