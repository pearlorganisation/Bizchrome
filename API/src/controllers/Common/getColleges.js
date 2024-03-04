import mongoose from "mongoose";
import { collegeModel } from "../../models/Colleges/collegeModel.js";

export const getColleges = async (req, res) => {
  try {
    const documents = await collegeModel.find();
    console.log(`HIT`);
    res.status(200).json({
      data: documents,
      success: true,
      message: `Found colleges successfully`,
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: error?.message,
    });
  }
};
