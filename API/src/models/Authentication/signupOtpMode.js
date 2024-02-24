import mongoose from "mongoose";
const otpSchema = new mongoose.Schema(
  { email: String, otp: String, expiryTime: String },
  { timestamps: true }
);

export const otpModel = mongoose.model("signUpOtp", otpSchema, "signUpOtp");
