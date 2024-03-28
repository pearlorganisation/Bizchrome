import mongoose from "mongoose";
const JobApplicationSchema = new mongoose.Schema(
  {
    postingId: {
      type: String,
      required: [true, "Job Posting ID is required"],
      trim: true,
    },
    fullName: {
      type: String,
      required: [true, "Candidate full name is required"],
    },
    email: {
      type: String,
      required: [true, "Candidate email is required"],
    },
    mobile: {
      type: String,
      required: [true, "Candidate mobile is required"],
    },
    resumePath: {
      type: String,
      required: [true, "resume path is required"],
    },
    // job status true is accepted, false is rejected
    jobStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export const jobApplicationModel = mongoose.model("jobApplication", JobApplicationSchema);
