import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchProductsData = createAsyncThunk('fetchProducs', async () => {
    try {
        const response = await axios.get('http://localhost:8000/data');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const productDataSlice = createSlice({
    name: 'productsData',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductsData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProductsData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchProductsData.rejected, (state, action) => {
            console.log(action.payload);
            state.isLoading = false;
            state.isError = true;
        })
    }
});

export default productDataSlice.reducer;