import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchfood=createAsyncThunk(
    "getall/food",
    async()=>{
        try {
            const response=await axios.get("http://localhost:3001/api/food/allFood")
            return response.data
        } catch (error) {
            console.log("err : ",error);
            
        }
    }
)