import mongoose from "mongoose";
const collegeSchema = new mongoose.Schema({});

export const collegeModel = mongoose.model(
  "Colleges",
  collegeSchema,
  "Colleges"
);
