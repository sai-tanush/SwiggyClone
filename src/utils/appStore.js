import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/cartSlice";

const appStore = configureStore({
    reducer: {  //This reducer in sppStore(redux store) contains all small reducers from cartSlice
        cart : cartReducer,
    },
});

export default appStore;