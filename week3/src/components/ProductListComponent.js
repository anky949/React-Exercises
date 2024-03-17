import {useEffect, useState} from "react";
import {ProductListColumns} from "../table-columns/ProductList.columns";
import {useNavigate} from "react-router-dom";
import CustomTableComponent from "./CustomTableComponent";
import {Button} from "react-bootstrap";

export const ProductListComponent=(props)=>{
    const [product,setProduct] = useState({id : null, title : null,description : null,price : null,image : null});
    const [products,addProducts] = useState([]);
    const [count,setCount] = useState(products.length);
    let tempProducts = [];

    const  navigate = useNavigate();


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(results => results.json())
            .then(data => {
                addProducts(data);

            });

    },[]);

    console.log("product size is : {}",products.length);



    return(
        <div>
            <CustomTableComponent data={products} columns={ProductListColumns} addToCart={props.addToCart} />
        </div>
    )

    }



