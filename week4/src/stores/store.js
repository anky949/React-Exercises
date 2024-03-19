import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import productListReducer from "../components/products/productList.reducer";

export const thunkMiddleware= store=>next=>action=>{
    if(typeof action === "function"){
        action(store.dispatch);
    }
    else {
        next(action);
    }
}

const rootReducer=combineReducers({
productListResponse : productListReducer
});


const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

export default store;