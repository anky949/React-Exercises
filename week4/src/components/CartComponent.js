import {useEffect} from "react";
import CustomTableComponent from "./CustomTableComponent";
import {ProductListColumns} from "../table-columns/ProductList.columns";
import {connect} from "react-redux";
import {doFetchCartProducts} from "./products/ProductListAction";


const CartComponent=({productListResponse,getCartProducts})=>{

    useEffect(() => {
        getCartProducts();
    },[]);

    return(
        <div>
            Cart Items
            <CustomTableComponent data={productListResponse.cartProducts} columns={ProductListColumns} />
        </div>
    )
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
    getCartProducts: doFetchCartProducts,
};
const CartComponentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartComponent);
export default CartComponentContainer;