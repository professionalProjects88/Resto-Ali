import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "../reducers/signIn";

const initialState = {
    user:{},
    loading:false,
    error:""
}

const signInSlice = createSlice({
    name: "signIn",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
       .addCase(signIn.pending, (state) => {
            state.loading = true;
        })
       .addCase(signIn.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
       .addCase(signIn.rejected, (state) => {
            state.loading = false;
            state.error = "failed to sign in";
        })
    }
 });

 export default signInSlice.reducer;