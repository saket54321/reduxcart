import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
export const store = configureStore({
    reducer:{
       allcart:CartSlice
    },
})

export default store;