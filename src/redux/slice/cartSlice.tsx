import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../interfaces";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: new Array<Product>()
    },
    reducers: {
        addToCart: (state, action)=>{
            let check = false;

            state.items.map(item=>{
                if (item.id === action.payload.id){
                    item.itemCount!++;
                    check = true;
                }
            });
            if (!check) {
                state.items.push(action.payload);
            }

        },
        removeFromCart: (state, action)=>{
            state.items.splice(action.payload, 1);
        },
        increaseItemCount: (state, action)=>{
            state.items.map(item=>{
                if (item.id === action.payload.id){
                    item.itemCount!++;
                }
            });
        },
        decreaseItemCount: (state, action)=>{
            state.items.map(item=>{
                if (item.id === action.payload.id && item.itemCount! > 1){
                    item.itemCount!--;
                }
                else if (item.id === action.payload.id && item.itemCount! <= 1){
                    state.items.splice(action.payload, 1);
                }
            });
        }
    }
})

export const {addToCart, removeFromCart, increaseItemCount, decreaseItemCount} = cartSlice.actions;
export default cartSlice;