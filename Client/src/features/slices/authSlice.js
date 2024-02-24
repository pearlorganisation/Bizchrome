import { createSlice } from "@reduxjs/toolkit";
import { generateSignUpOTP, signUp } from "../actions/authActions";
import { toast } from "sonner";
const initialState = {
  isUserLoggedIn: false,
  isUserLoggedIn: true,
  isLoading: false,
  isError: false,
  userMetaData: [],
  signUpOtpGenerated: false,
};
const authSlice = createSlice({
  name: "Authentication",
  initialState,
  extraReducers: (builder) => {
    //Handles sign UP
    builder.addCase(signUp.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.signUpOtpGenerated = false;
      state.userMetaData = action.payload;

      //some toast msg will come here
      // console.log("action", action);
      toast.success(action?.payload?.message);
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;

      //some toast msg will come here
      toast.error(action?.payload?.message || "Please try again");
    });
    //All sign up fns ends here.

    //Initialting generate signup OTP
    builder.addCase(generateSignUpOTP.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(generateSignUpOTP.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.signUpOtpGenerated = true;
      //some toast msg will come here
      // console.log("action", action);
      toast.success(action?.payload?.message);
    });
    builder.addCase(generateSignUpOTP.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;

      //some toast msg will come here
      toast.error(action?.payload || "Please try again");
    });
  },
});

export default authSlice.reducer;
