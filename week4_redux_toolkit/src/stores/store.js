import { configureStore } from '@reduxjs/toolkit'
import productListSlice from "../components/products/ProductListSlice";

export const store = configureStore({
    reducer: {
        productListReducer : productListSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
//export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
//export type AppDispatch = typeof store.dispatch