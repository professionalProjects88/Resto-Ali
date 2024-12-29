import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const deleteOne=createAsyncThunk(
    "delete/food",
    async(id)=>{
        try {
            const response=await axios.delete(`http://localhost:3000/api/food/delete/${id}`);
            return response.data
        } catch (error) {
            console.log("err : ",error);
            
        }
    }
)