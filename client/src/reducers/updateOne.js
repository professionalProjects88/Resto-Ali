import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import port from "../inv";


export const updateOne = createAsyncThunk(
  "updateFood",
  async (id,data, { rejectWithValue }) => {
    try {
      const response = await axios.put(`http://localhost:${port}/api/food/update/${id}`, data);
      
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
