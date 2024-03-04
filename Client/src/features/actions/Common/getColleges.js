import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/axiosInterceptors";

export const getColleges = createAsyncThunk(
  "/getColleges",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.get("/colleges/findColleges", payload, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response?.data;
    } catch (error) {
      console.log("Error in location", error);
      return rejectWithValue(error);
    }
  }
);
