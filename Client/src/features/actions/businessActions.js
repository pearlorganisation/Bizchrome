import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptors";

export const createJob = createAsyncThunk(
  "business/createJob",
  async ({ jobId, payload }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`job/jobs/${jobId}`, payload, {
        withCredentials: true,
      });
      console.log("data::", data);
      return data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);
