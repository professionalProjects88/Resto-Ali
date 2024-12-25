import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchOne=createAsyncThunk(
    "getOneF",
    async(id)=>{
        try {
            const response=await axios.get(`http://localhost:3000/api/food/food/${id}`)
            return response.data
        } catch (error) {
            console.log("err : ",error);
        }
    }
)