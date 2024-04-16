import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minLength: [2, "Name must contain at least 2 characters"],
      maxLength: [15, "Name should contain maximum 15 characters"],
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    profileDescription: {
      type: String,
    },
    dob: {
      type: Date,
      default: null,
      // required:[true,"Date of birth is required"]
    },
    mobile: {
      default: null,
      required: [true, "Mobile is required"],
      type: Number,
    },
    location: {
      type: Object,
      default: null,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      default: null,
      enum: ["MALE", "FEMALE", "OTHERS"],
    },
    education: {
      highestQualification: { type: String, default: null },
      degree: { type: String, default: null },
      specialization: { type: String, default: null },
    },
    tagLine: {
      type: String,
    },
    skillTags: [
      {
        type: String,
      },
    ],
    experiences: [
      {
        type: Object,
      },
    ],
    userType: {
      type: String,
      required: [true, "userType is required"],
    },
    language: { type: String, default: null },
    workType: { type: String, default: null },
    role: {
      type: String,
      enum: ["BUSINESS", "CANDIDATE", "INVESTOR"],
    },
  },
  { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
);
export const userModel = mongoose.model("user", userSchema, "user");
