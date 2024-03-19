
export const fetchProductStart=()=>({
    type : 'FETCH_PRODUCT_STARTED'
});

export const fetchProductSuccess=(productListData)=>({
    type : 'FETCH_PRODUCT_SUCCESS',
    productListData: productListData
});

export const addProductToCart=(product)=>({
    type : 'ADD_PRODUCT_TO_CART',
    addedCartProduct : product
});

export const fetchCartProducts=()=>({
    type : 'FETCH_CART_PRODUCTS',
});
export const doFetchProducts = () =>(dispatch)=>{
        dispatch(fetchProductStart());
    fetch('https://fakestoreapi.com/products')
        .then(results => results.json())
        .then(data => {
            dispatch(fetchProductSuccess(data));
        });
}

export const doAddProductToCart=(product)=>(dispatch)=>{
    dispatch(addProductToCart(product));
}


export const doFetchCartProducts=()=>(dispatch)=>{
    dispatch(fetchCartProducts());
}