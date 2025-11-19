import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import port from "../inv";


export const fetchfood=createAsyncThunk(
    "getall/food",
    async()=>{
        try {
            const response=await axios.get(`http://localhost:${port}/api/food/allFood`)
            return response.data
        } catch (error) {
            console.log("err : ",error);
            
        }
    }
)