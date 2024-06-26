import { createSlice } from "@reduxjs/toolkit";
import { createJob, getAllJobById } from "../actions/businessActions";
import { toast } from "sonner";
import { getJobApplicants } from "../actions/jobActions";
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
  jobApplicants: [],
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
      state.step1 = {
        isFilled: false,
        formData: null,
      };
      state.step2 = {
        isFilled: false,
        formData: null,
      };
      state.step3 = {
        isFilled: false,
        formData: null,
      };
      state.step4 = {
        isFilled: false,
        formData: null,
      };
      toast.success("Successfully Created....");
    });
    builder.addCase(createJob.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      toast.error(action?.payload || "Something went wrong");
    });

    // get jobs
    builder.addCase(getAllJobById.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getAllJobById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.businessData = action.payload;
    });
    builder.addCase(getAllJobById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      toast.error(action?.payload || "Something went wrong");
    });

    // get job applicants
    builder.addCase(getJobApplicants.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getJobApplicants.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.jobApplicants = action.payload;
    });
    builder.addCase(getJobApplicants.rejected, (state, action) => {
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
