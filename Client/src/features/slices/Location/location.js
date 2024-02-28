import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { findLocation } from "../../actions/Common/findLocationAction";
const initialState = {
  isFetchLocationDataLoading: false,
  isFetchLocationError: false,
  locationData: [],
};
const locationSlice = createSlice({
  name: "Location",
  initialState,
  extraReducers: (builder) => {
    //Handles sign UP
    builder.addCase(findLocation.pending, (state, action) => {
      state.isFetchLocationDataLoading = true;
      state.isFetchLocationError = false;
    });
    builder.addCase(findLocation.fulfilled, (state, action) => {
      state.isFetchLocationDataLoading = false;
      state.isFetchLocationError = false;
      state.locationData = action.payload.data;
      //some toast msg will come here
      // console.log("action", action);
      toast.success(action?.payload?.message);
    });
    builder.addCase(findLocation.rejected, (state, action) => {
      state.isFetchLocationDataLoading = false;
      state.isFetchLocationError = true;

      //some toast msg will come here
      toast.error(action?.payload || "Please try again");
    });
    //All sign up fns ends here.
  },
});

export default locationSlice.reducer;
