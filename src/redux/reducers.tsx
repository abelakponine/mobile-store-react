import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";

const store = configureStore({
    reducer: cartSlice.reducer
});

export default store;