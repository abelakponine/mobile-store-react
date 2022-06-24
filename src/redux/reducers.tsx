import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import { combineReducers } from "@reduxjs/toolkit";
import viewProduct from "./slice/productSlice";

const reducers = combineReducers({
    cart: cartSlice.reducer,
    viewProduct: viewProduct.reducer
});

const store = configureStore({
    reducer: reducers
});

export default store;