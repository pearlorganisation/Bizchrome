import { jobModel } from "../../models/Job/jobModel.js";

// get all jobs data for the type
export const getJobs = async (req, res) => {
  try {
    const { jobTypeId } = req?.params;
    const {minSalary, experience, whenPosted , workType , workShift, department } = req?.query
    
    let query = {jobTypeId: jobTypeId}
    
    
    if(req?.query){
      query = {
        jobTypeId: Number(jobTypeId),
        minSalary: {$gte: Number(minSalary) || 0},
        "jobRequirements.experience":{$lte : Number(experience) || 100},
      }
      if(whenPosted) {
        let daysAgo = new Date();
        daysAgo.setDate(daysAgo.getDate() - whenPosted);
        query['updatedAt'] = {$gte: daysAgo}
      }
      if(workType){
        query['jobRole.employmentType'] = workType
      }
      if(workShift){
        query['jobRole.shift'] = workShift
      }
      if(department){
        query['jobRole.department'] = department
      }
    }

    // console.log(query)

    
    if (!jobTypeId)
      res.status(400).json({ message: "url parameter not provided" });
    const jobs = await jobModel.find(query);
    if (jobs.length) {
      res.status(200).json({
        data: jobs,
        success: true,
        message: `Found jobs successfully`,
      });
    } else {
      res.status(200).json({
        data: jobs,
        success: false,
        message: `No job posting found`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error?.message,
    });
  }
};

export const addJobs = async (req, res) => {
  try {
    const { jobTypeId } = req.params;
    if (!jobTypeId)
      res.status(400).json({ message: "url parameter not provided" });
    let postingData = req.body;
    postingData["jobTypeId"] = jobTypeId;
    const data = new jobModel(postingData);
    await data.save();
    res
      .status(200)
      .json({ status: true, data, message: "Job posted successfully" });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error?.message,
    });
  }
};
