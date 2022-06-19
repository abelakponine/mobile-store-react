import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../interfaces";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: new Array<Product>()
    },
    reducers: {
        addToCart: (state, action)=>{
            state.items.push(action.payload);
        },
        removeFromCart: (state, action)=>{
            state.items.splice(action.payload, 1);
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice;