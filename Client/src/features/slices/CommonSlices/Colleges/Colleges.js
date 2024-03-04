import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { findLocation } from "../../../actions/Common/findLocationAction";
import { getColleges } from "../../../actions/Common/getColleges";
const initialState = {
  isFetchCollegeLoading: false,
  isFetchCollegeError: false,
  colleges: [],
};
const collegeSlice = createSlice({
  name: "Location",
  initialState,
  extraReducers: (builder) => {
    //Handles sign UP
    builder.addCase(getColleges.pending, (state, action) => {
      state.isFetchLocationDataLoading = true;
      state.isFetchLocationError = false;
    });
    builder.addCase(getColleges.fulfilled, (state, action) => {
      state.isFetchLocationDataLoading = false;
      state.isFetchLocationError = false;
      state.locationData = action.payload.data;
      //some toast msg will come here
      // console.log("action", action);
      toast.success(action?.payload?.message);
    });
    builder.addCase(getColleges.rejected, (state, action) => {
      state.isFetchLocationDataLoading = false;
      state.isFetchLocationError = true;

      //some toast msg will come here
      toast.error(action?.payload?.message || "Please try again");
    });
    //All sign up fns ends here.
  },
});

export default collegeSlice.reducer;
