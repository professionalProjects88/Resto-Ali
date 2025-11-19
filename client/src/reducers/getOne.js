import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import port from "../inv";

export const fetchOne=createAsyncThunk(
    "getOneF",
    async(id)=>{
        try {
            const response=await axios.get(`http://localhost:${port}/api/food/food/${id}`)
            return response.data
        } catch (error) {
            console.log("err : ",error);
        }
    }
)