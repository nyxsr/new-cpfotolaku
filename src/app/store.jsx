import { configureStore } from "@reduxjs/toolkit";
import benefitSlice from "../data/benefitSlice";

export const store = configureStore({
    reducer:{
        benefitView: benefitSlice
    }
})

export default store;