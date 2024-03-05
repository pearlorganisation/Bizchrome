import { jobModel } from "../../models/Job/jobModel.js";

export const getJobs = async (req, res) => {
  try {
    const {jobType} = req.body
    const jobs = await jobModel.find({jobType: jobType});
    if(jobs.length){
      res.status(200).json({
        data: jobs,
        success: true,
        message: `Found jobs successfully`
      });
    } else {
      res.status(200).json({
        success: false,
        message: `No job posting found`
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error?.message
    });
  }
};

export const addJobs = async (req, res) => {
    try{
      const postingData = req.body
      const data = new jobModel(postingData);
      await data.save();
      res.status(200).json({status: true, data, message: 'Job posted successfully'})
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error?.message
      });
    }
  
}