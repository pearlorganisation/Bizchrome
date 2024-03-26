import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required:[true,"Name is required"],
      trim: true,
      minLength: [2, "Name must contain at least 2 characters"],
      maxLength: [15, "Name should contain maximum 15 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    dob: {
      type: Date,
      default: null,
      // required:[true,"Date of birth is required"]
    },
    mobile: {
      default: null,
      required: [true , "Mobile is required"],
      type: Number
    },
    location: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      default: null,
      // required:[true,"Gender is required"],
      enum: ["MALE", "FEMALE", "OTHERS"],
    },
    education: {
      highestQualification: { type: String, default: null },
      degree: { type: String, default: null },
      specialization: { type: String, default: null },
    },
    experience: [
      {
        jobRole: { type: String, default: null },
        jobTitle: { type: String, default: null },
        department: { type: String, default: null },
        role: { type: String, default: null },
        company: { type: String, default: null },
        skills: { type: String, default: null },
        currentlyWorking: { type: Boolean, default: null },
        noticePeriod: { type: Number, default: null },
      },
    ],
    userType: {
      type: String, 
      required: [true, "userType is required"]
    },
    language: { type: String, default: null },
    workType: { type: String, default: null },
  },
  { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
);
export const userModel = mongoose.model("user", userSchema, "user");
