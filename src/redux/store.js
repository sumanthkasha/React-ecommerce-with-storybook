import { configureStore } from "@reduxjs/toolkit";
import {productDataReducer} from './slice/productDataSlice';
import { wishlistDataReducer } from "./slice/productDataSlice";

export const store = configureStore({
    reducer: {
        productData: productDataReducer, 
        wishlist: wishlistDataReducer,
    }
})