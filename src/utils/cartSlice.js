import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        items: [],
        totalAmount:0,
    },
    reducers: {
        addItem: (state, action) => {
            console.log("action.payload = ", action.payload);
            state.items.push(action.payload);   //We are mutating the state here
        },

        removeItem: (state, action) => {
            const newState = state.items.filter((item) => item.id !== action.payload.id)
            state.items = newState;
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
        addAmount: (state, action) => {
            state.totalAmount += action.payload;
            console.log("state.totalAmount + action.payload = ", state.totalAmount + action.payload);
            console.log("totalAmount Array = ", state.totalAmount);
            //return state.totalAmount + action.payload
            
        },
        removeAmount: (state, action) => {
            state.totalAmount -= action.payload;
        }
    },
},
)

export const {addItem, removeItem, clearCart, addAmount, removeAmount } = cartSlice.actions;

export default cartSlice.reducer;

//index-DvbW5iUK