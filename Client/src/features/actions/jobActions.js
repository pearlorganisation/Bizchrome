// -----------------------------------------------------------------------------------------------------

import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptors";

export const getJobs = createAsyncThunk(
  "job/getJobs",
  async ({ jobId }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`job/jobs/${jobId}`, {
        withCredentials: true,
      });
      console.log("data::", data);
      return data?.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);
