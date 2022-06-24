import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../interfaces";

const viewProduct = createSlice({
    name: 'viewproduct',
    initialState: {
        product: null as (Product | null)
    },
    reducers: {
        showProduct(state, action){
            const w:any = window;
            const $ = w.jQuery;
            new Promise((res, rej)=>{
                res(state.product = action.payload)
            }).then(()=>$('#view-product').fadeIn(200))
            // console.log($('#view-product'))
        }
    }

});

export const {showProduct} = viewProduct.actions;
export default viewProduct;