import {useState} from "react";


export const CartComponent=(props)=>{

    console.log(props.products.length);
    props.products.forEach(product =>console.log(product.title));

    const [cartProducts,setCartProducts] = useState(props.products);
    const productUI = cartProducts.map(product=><p key={product.id}>{product.id}  {product.title} <img height={100} src={product.image}/> </p>);

    return(
        <div>
            Cart Items
            {productUI}
        </div>
    )
}