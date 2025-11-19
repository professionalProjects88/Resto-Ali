import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import port from "../inv";



export const deleteOne=createAsyncThunk(
    "delete/food",
    async(id)=>{
        try {
            const response=await axios.delete(`http://localhost:${port}/api/food/delete/${id}`);
            return response.data
        } catch (error) {
            console.log("err : ",error);
            
        }
    }
)