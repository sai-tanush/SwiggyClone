import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);   //We are mutating the state here
        },
        removeItem: (state, action) => {
            const newState = state.items.filter((item) => item.id !== action.payload.id)
            state.items = newState;
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    },
},
)

export const {addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;