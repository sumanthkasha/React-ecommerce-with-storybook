import { configureStore } from "@reduxjs/toolkit";
import productDataReducer from './slice/productDataSlice';

export const store = configureStore({
    reducer: {
        productData: productDataReducer,
    }
})