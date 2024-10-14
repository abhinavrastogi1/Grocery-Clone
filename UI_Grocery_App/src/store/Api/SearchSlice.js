import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";

export const SearchApi = createAsyncThunk(
  "SearchSlice/SearchApi",
  async (search) => {
    try {
      const response = await axios.post("/api/product/searchProduct",null,{ params:{
        search:search
      }} )
   
        return response.data.data
    } catch (error) {
      console.error(
        "something went wrong while fetching search results",
        error
      );
    }
  }
);
const SearchSlice = createSlice({
  name: "SearchSlice",
  initialState: {
    productsData: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SearchApi.fulfilled, (state, action) => {
      state.status = "success";
      state.productsData = action.payload;
    });
    builder.addCase(SearchApi.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(SearchApi.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default SearchSlice.reducer;