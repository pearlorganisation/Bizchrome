import { createSlice } from "@reduxjs/toolkit";
import {
  generateSignUpOTP,
  signUp,
  userLogin,
  userLogout,
} from "../actions/Auth/authActions";
import { toast } from "sonner";
const initialState = {
  isUserLoggedIn: false,
  isLoading: false,
  isError: false,
  userMetaData: [],
  signUpOtpGenerated: false,
  isUserCreated: false,
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
      state.isUserCreated = true;
      //some toast msg will come here
      // console.log("action", action);
      toast.success(action?.payload?.message);
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;

      //some toast msg will come here
      console.log("Action payla", action);
      toast.error(action?.payload || "Please try again");
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
      console.log("Action payla", action);
      toast.error(action?.payload || "Please try again");
    });

    //Login

    builder.addCase(userLogin.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isUserLoggedIn = true;
      state.userMetaData = action?.payload?.data;
      // state.signUpOtpGenerated = true;

      //some toast msg will come here
      // console.log("action", action);
      toast.success(action?.payload?.message);
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;

      //some toast msg will come here
      console.log("Action payla", action);
      toast.error(action?.payload || "Please try again");
    });

    //  ToLogout
    builder.addCase(userLogout.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(userLogout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isUserLoggedIn = false;
      state.userMetaData = [];
      localStorage.clear();
      sessionStorage.clear();
      localStorage.removeItem("persist:BizChrome");
      toast.success("Logout Successfully", {
        position: "top-center",
      });

      toast.success("Logout Successfully");
    });
    builder.addCase(userLogout.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;

      //some toast msg will come here
      console.log("Action payla", action);
      toast.error(action?.payload || "Please try again");
    });
  },
});

export default authSlice.reducer;
