
const initialState={productList :[],cartProducts : [],loading : false};

const productListReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'FETCH_PRODUCT_STARTED' :{
            console.log("FETCH_PRODUCT_STARTED reducer called");

            return {...state,loading: true};
        }
        case 'FETCH_PRODUCT_SUCCESS' : {
            console.log("FETCH_PRODUCT_SUCCESS reducer called");
            return {...state,productList: action.productListData,loading: false}
        }

        case 'ADD_PRODUCT_TO_CART' :{
            console.log("ADD_PRODUCT_TO_CART reducer called");
            return {...state,cartProducts : [...state.cartProducts,action.addedCartProduct]}
        }
        case 'FETCH_CART_PRODUCTS':{
            console.log("FETCH_CART_PRODUCTS reducer called");
            return state;

        }
        default :{
            return state;
        }
    }
}



export default productListReducer;