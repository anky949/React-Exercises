import {useEffect} from "react";
import CustomTableComponent from "./CustomTableComponent";
import {ProductListColumns} from "../table-columns/ProductList.columns";
import {useDispatch, useSelector} from "react-redux";
import {fetchCartProducts} from "./products/ProductListSlice";


const CartComponent=()=>{
    const  dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.productListReducer.cartProducts)
    const isLoading = useSelector((state) => state.productListReducer.isLoading)
    const error = useSelector((state) => state.productListReducer.error)

    useEffect(() => {
        dispatch(fetchCartProducts());
    },[]);

    if (isLoading) {
        return 'loading...'
    }

    if (error) {
        return error
    }
    cartProducts.map(obj=>console.log("cart component id=====>"+obj.id));

    return(
        <div>
            Cart Items
            <CustomTableComponent data={cartProducts} columns={ProductListColumns} />
        </div>
    )
}

export default CartComponent;