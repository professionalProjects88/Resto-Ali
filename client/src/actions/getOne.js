import { createSlice } from "@reduxjs/toolkit";
import {fetchOne} from "../reducers/getOne"


const initialState = {
  food: {},
  loading: false,
  error: ""
}

const getOne=createSlice({
    name:"oneFood",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
       .addCase(fetchOne.pending,(state)=>{
            state.loading = true
        })
       .addCase(fetchOne.fulfilled,(state,action)=>{
            state.loading = false
            state.food = action.payload
        }).addCase(fetchOne.rejected,(state)=>{
            state.loading = false
            state.error = "Failed to fetch food"
        })
    }
})

export default getOne.reducer