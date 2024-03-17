import {useState} from "react";
import CustomTableComponent from "./CustomTableComponent";
import {ProductListColumns} from "../table-columns/ProductList.columns";


export const CartComponent=(props)=>{

    console.log(props.products.length);
    props.products.forEach(product =>console.log(product.title));

    const [cartProducts,setCartProducts] = useState(props.products);

    return(
        <div>
            Cart Items
            <CustomTableComponent data={cartProducts} columns={ProductListColumns} />
        </div>
    )
}