import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk("",
    async () => {
        console.log("calling API");
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data
    });

export const initialState = {
    productList: [],
    cartProducts: [],
    isLoading: false,
    error: null
}

export const productListSlice = createSlice({
    name: 'productListSliceReducer',
    initialState,
    reducers: {
        // action means object passes while calling this method
        addProductToCart: (state, action) => {
            console.log("ADD_PRODUCT_TO_CART reducer called" + action.payload);
            return {...state, cartProducts: [...state.cartProducts, action.payload]}
        },
        fetchCartProducts: (state) => {
            console.log("FETCH_CART_PRODUCTS reducer called");
            return state;

        }

    },
    extraReducers: (builder) => {
        //these are the cases/stages of Async thunks (created above)

        //1.pending ,before calling API,Thunks send pending status and below code executes
        builder.addCase(fetchProducts.pending, (state) => {
            console.log("first case")
            state.isLoading = true
        })

        /*
        2.fulfilled,If API call is success then thunk send fulfilled status and API response as action -:
        {
          meta: {"requestId": "ItsfKe4rmGgbd3KKcwDOE","requestStatus": "fulfilled"},
          type : "/fulfilled",
          payload : Array(20)
         }
        */
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false
            state.productList = action.payload;
        })

        /*
        3.rejected,If API call gets fail then thunk send rejected status and Error response as action -:
        {
         error: {name: 'SyntaxError', message: `Unexpected token '<', "<!DOCTYPE "... is not valid JSON`, stack: `SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON`},
         meta: {arg: undefined, requestId: 'tkLisrsiTIn7r6zkp5NVN', rejectedWithValue: false, requestStatus: 'rejected', aborted: false, …}
         payload: undefined,
         type: "/rejected"
         }
         */
        builder.addCase(fetchProducts.rejected, (state, action) => {
            console.log(action);
            state.isLoading = false
            state.error = action.error.message;
        })
    },
})

// Action creators are generated for each case reducer function
export const {fetchProductListStart, fetchProductList, addProductToCart, fetchCartProducts} = productListSlice.actions

export default productListSlice.reducer;