import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      // required:[true,"Name is required"],
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
      // required:[true,"Date of birth is required"]
    },
    mobile: {
      type: Number,
    },
    location: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      // required:[true,"Gender is required"],
      enum: ["MALE", "FEMALE", "OTHERS"],
    },
    education: {
      highestQualification: String,
      degree: String,
      specialization: String,
    },
    experience: [
      {
        jobRole: String,
        jobTitle: String,
        department: String,
        role: String,
        company: String,
        skills: String,
        currentlyWorking: Boolean,
        noticePeriod: Number,
      },
    ],
    language: String,
    workType: String,
  },
  { timestamps: true }
);

export const userModel = mongoose.model('user',userSchema,'user')
