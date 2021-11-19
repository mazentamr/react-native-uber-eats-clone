import { createSlice } from "@reduxjs/toolkit";

const initialState=[

]

export const cartSlice =createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            state.push(action.payload)
            // console.log(state.cart);
        },
        deleteCart: (state, action) => {
            return state.filter((item, i) => item.item.title != action.payload)
        }
    }
})

export const { addToCart, deleteCart } = cartSlice.actions;

export const selectCart = state => state.cart;

export default cartSlice.reducer