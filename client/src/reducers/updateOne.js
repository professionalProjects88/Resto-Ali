import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateOne = createAsyncThunk(
  "updateFood",
  async (id,data, { rejectWithValue }) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/food/update/${id}`, data);
      console.log("entred");
      
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
