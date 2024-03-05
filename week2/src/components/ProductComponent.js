import {useEffect, useState} from "react";

export const ProductComponent=()=>{
    const [product,setProduct] = useState({id : null, title : null,description : null,price : null,image : null});
    const [products,addProducts] = useState([]);
    let tempProducts = [];

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(results => results.json())
            .then(data => {
                addProducts(data);

            }, []);

    });

    console.log("product size is : {}",products.length);

    const productUI = products.map(product=><p key={product.id}>{product.id}  {product.title} <img height={100} src={product.image}/></p>);

    return(
        <div>
            {productUI}
        </div>
    )
    }



