import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { getJobs } from "../actions/jobActions";
const initialState = {
  isLoading: false,
  isError: false,
  jobsData: [],
};
const jobsSlice = createSlice({
  name: "Jobs",
  initialState,
  extraReducers: (builder) => {
    //Handles sign UP
    builder.addCase(getJobs.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getJobs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.jobsData = action.payload;
    });
    builder.addCase(getJobs.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      toast.error(action?.payload || "Something went wrong");
    });

    // createJobs
  },
});

export default jobsSlice.reducer;
