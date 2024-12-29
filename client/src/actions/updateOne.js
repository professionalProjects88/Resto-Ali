import { createSlice } from "@reduxjs/toolkit";
import { updateOne } from "../reducers/updateOne";

const initialState = {
    food:{},
    loading:false,
    error:""
}

const updateSlice = createSlice({
    name: "updateOne",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
       .addCase(updateOne.pending, (state) => {
            state.loading = true;
        })
       .addCase(updateOne.fulfilled, (state, action) => {
            state.loading = false;
            state.food = action.payload;
        })
       .addCase(updateOne.rejected, (state) => {
            state.loading = false;
            state.error = "update failed";
        })
    }
 });

 export default updateSlice.reducer;