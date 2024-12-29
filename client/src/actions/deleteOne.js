import {deleteOne} from "../reducers/deleteOne"
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  foods: {},
  loading: false,
  error:""
}


const deleteSlice=createSlice({
    name:"allFood",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchfood.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchfood.fulfilled,(state,action)=>{
            state.loading = false
            state.foods = action.payload
        }).addCase(fetchfood.rejected,(state)=>{
            state.loading = false
            state.error = "Failed to fetch foods"
        })
    }
})

export default delteSlice.reducer