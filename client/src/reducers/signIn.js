import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import port from "../inv";


export const signIn = createAsyncThunk(
  "signIn",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`http://localhost:${port}/api/user/signIn`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
