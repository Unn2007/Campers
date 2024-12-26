import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export const getCampers = createAsyncThunk(
  "campers/getCampersList",
  async ({ page = 1, limit = 4, filters = {} }, thunkAPI) => {
  
    try {
      const response = await instance.get("/campers", {
        params: {
          page,
          limit,
          ...filters,
        },
      });

      return response.data;
    } catch (e) {
      const errorMessage = e.response?.data?.message || e.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
