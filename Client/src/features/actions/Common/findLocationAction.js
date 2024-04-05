import { createAsyncThunk } from "@reduxjs/toolkit";

import { instance } from "../../../services/axiosInterceptors";
export const findLocation = createAsyncThunk(
  "/location",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post("/location", payload, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response?.data;
    } catch (error) {
      console.log("Error in location", error);
      return rejectWithValue(error.message);
    }
  }
);
