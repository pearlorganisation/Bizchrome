import { createSlice } from "@reduxjs/toolkit";
import { createJob } from "../actions/businessActions";
import { toast } from "sonner";
const initialState = {
  isLoading: false,
  isError: false,
  step1: {
    isFilled: false,
    formData: null,
  },
  step2: {
    isFilled: false,
    formData: null,
  },
  step3: {
    isFilled: false,
    formData: null,
  },
  step4: {
    isFilled: false,
    formData: null,
  },
  businessAuth: null,
  businessData: [],
};
const businessSlice = createSlice({
  name: "businessSlice",
  initialState,
  reducers: {
    addDataOfStepForm1: (state, action) => {
      state.step1 = action.payload;
    },
    addDataOfStepForm2: (state, action) => {
      state.step2 = action.payload;
    },
    addDataOfStepForm3: (state, action) => {
      state.step3 = action.payload;
    },
  },
  extraReducers: (builder) => {
    //Handles sign UP
    builder.addCase(createJob.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(createJob.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.businessData = action.payload;
      toast.success("Successfully Created....");
    });
    builder.addCase(createJob.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      toast.error(action?.payload || "Something went wrong");
    });

    // createJobs
  },
});

export default businessSlice.reducer;
export const { addDataOfStepForm1, addDataOfStepForm2, addDataOfStepForm3 } =
  businessSlice.actions;
