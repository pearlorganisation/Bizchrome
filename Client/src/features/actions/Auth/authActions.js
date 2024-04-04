import { createAsyncThunk } from "@reduxjs/toolkit";

import { instance } from "../../../services/axiosInterceptors";
export const signUp = createAsyncThunk(
  "/signUp",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post("/auth/signUp", payload, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response?.data;
    } catch (error) {
      console.log("Error in otp", error);
      return rejectWithValue(error);
    }
  }
);

//TO Genrate sign up OTP
export const generateSignUpOTP = createAsyncThunk(
  "/signUpOtp",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post("/auth/signupOtp", payload, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//To login
export const userLogin = createAsyncThunk(
  "/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post("/auth/userLogin", payload, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("log for dispatch--->", response?.data);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// To Logout
export const userLogout = createAsyncThunk(
  "/logout",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post("/auth/logout", payload, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
