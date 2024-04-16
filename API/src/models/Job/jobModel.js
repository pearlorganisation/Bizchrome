import mongoose from "mongoose";
const jobSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      required: [true, "Position name is required"],
      trim: true,
      minLength: [2, "Position must contain at least 2 characters"],
      maxLength: [40, "Position should contain maximum 40 characters"],
    },
    companyId: {
      type: String,
      required: [true, "Company ID is required"],
      trim: true,
    },
    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
      minLength: [2, "Company name must contain at least 2 characters"],
      maxLength: [100, "Company name should contain maximum 100 characters"],
    },
    minSalary: {
      type: Number,
      default: 0,
    },
    maxSalary: {
      type: Number,
      default: 0,
    },
    companyImg: {
      type: String,
      default: null,
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      default: null,
    },
    jobTypeId: {
      type: Number,
      required: [true, "job type id is required"],
    },
    jobTypeName: {
      type: String,
      default: null,
    },
    jobDescription: {
      type: String,
      required: [true, "Job description name is required"],
      default: null,
    },
    tags: [
      {
        name: {
          type: String,
          default: null,
        },
      },
    ],
    jobHighlights: [
      {
        name: {
          type: String,
          default: null,
        },
      },
    ],
    jobRequirements: {
      experience: {
        type: Number,
        default: 0,
      },
      education: {
        type: String,
        default: null,
      },
      communicationLevel: {
        type: String,
        default: null,
      },
    },
    jobRole: {
      department: {
        type: String,
        default: "",
      },
      employmentType: {
        type: String,
        default: "Full Time",
      },
      category: {
        type: String,
        default: null,
      },
      shift: {
        type: String,
        default: "Day Shift",
      },
    },
    interviewDetails: {
      address: {
        type: String,
        default: "",
      },
      interviewMode: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);
export const jobModel = mongoose.model("job", jobSchema, "job");
