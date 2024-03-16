import { createSlice } from "@reduxjs/toolkit";
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
  name: "Jobs",
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
  extraReducers: (builder) => {},
});

export default businessSlice.reducer;
export const { addDataOfStepForm1, addDataOfStepForm2, addDataOfStepForm3 } =
  businessSlice.actions;
