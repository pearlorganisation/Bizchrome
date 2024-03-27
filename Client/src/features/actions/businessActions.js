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

export const getAllJobById = createAsyncThunk(
  "business/getAllJobById",
  async ({ companyId }, { rejectWithValue }) => {
    try {
      console.log("companyId::", companyId);
      const { data } = await instance.get(`job/jobs/company/${companyId}`, {
        withCredentials: true,
      });
      console.log("data::", data);
      return data?.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);
