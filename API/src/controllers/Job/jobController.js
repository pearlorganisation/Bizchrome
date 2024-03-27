import { jobModel } from "../../models/Job/jobModel.js";

// get all jobs data for the type
export const getJobs = async (req, res) => {
  try {
    const { jobTypeId } = req?.params;
    const {
      minSalary,
      experience,
      whenPosted,
      workType,
      workShift,
      department,
    } = req?.query;

    let query = { jobTypeId: jobTypeId };

    console.log("experience", experience);

    if (req?.query) {
      query = {
        jobTypeId: parseInt(jobTypeId),
        "jobRequirements.experience": { $gte: parseInt(experience) || 0 },
        maxSalary: { $gte: parseInt(minSalary) || 0 },
      };

      if (parseInt(whenPosted) > 0) {
        let daysAgo = new Date();
        daysAgo.setDate(daysAgo.getDate() - whenPosted);
        query["updatedAt"] = { $gte: daysAgo };
      }

      if (workType?.length > 0) {
        query["jobRole.employmentType"] = { $in: workType };
      }

      // if(department?.length > 0){
      //   query["jobRole.department"] = {$in: department}
      // }

      if (workShift?.length > 0) {
        query["jobRole.shift"] = { $in: workShift };
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

// get all jobs posted by a comapany
export const getPostedJobs = async (req, res) => {
  try {
    const { companyId } = req?.params;

    const query = { companyId: companyId }; // case insensitive regex search for jobs posted according to company

    if (!companyId) res.status(400).json({ message: "Incorrect Url" });

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
