import {useEffect, useState} from "react";
import {ProductListColumns} from "../table-columns/ProductList.columns";
import CustomTableComponent from "./CustomTableComponent";
import {connect} from "react-redux";
import {doAddProductToCart, doFetchProducts} from "./products/ProductListAction";

const ProductListComponent=({productListResponse,getProductList,addProductToCart})=>{
    useEffect(() => {
       getProductList();
    },[]);

    console.log(productListResponse.productList.length);

    return (
        <div>
    <CustomTableComponent data={productListResponse.productList} columns={ProductListColumns} addToCart={addProductToCart}/>
        </div>
    )

}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
    getProductList: doFetchProducts,
    addProductToCart:doAddProductToCart
};
const ProductListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListComponent);
export default ProductListContainer;



