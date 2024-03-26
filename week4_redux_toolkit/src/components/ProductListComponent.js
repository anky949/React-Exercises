import {useEffect, useState} from "react";
import {ProductListColumns} from "../table-columns/ProductList.columns";
import CustomTableComponent from "./CustomTableComponent";
import {connect, useDispatch, useSelector} from "react-redux";
import {addProductToCart, fetchProducts} from "./products/ProductListSlice";


//here getProductList and addProductToCart method come from mapDispatchToProps
//when we call these method,it calls the reducers
// and In reducer ,reducer state gets updated
// and we gets the updated reducer state as productListResponse(defined in store.js)
const ProductListComponent=()=>{
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productListReducer.productList);
    const isLoading = useSelector((state) => state.productListReducer.isLoading)
    const error = useSelector((state) => state.productListReducer.error)
    useEffect(() => {
       dispatch(fetchProducts())
    },[]);


    if (isLoading) {
        return 'loading...'
    }

    if (error) {
        return error
    }

    return (
        <div>
    <CustomTableComponent data={productList} columns={ProductListColumns} isAddToCartButtonShow = {true} />
        </div>
    )

}
export default ProductListComponent;



