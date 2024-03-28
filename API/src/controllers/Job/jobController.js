import { jobApplicationModel } from "../../models/Job/jobApplicationModel.js";
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

// authenticating if user applied to job earlier

// export const authJobApplication = async (req, res) => {
//   try {
//     const { postingId, email, mobile } = req.body;

//     if (!postingId && !email && !mobile) {
//       res.status(400).json({
//         status: false,
//         message: "Incomplete data provided in headers",
//       });
//       return
//     }

//     const auth = jobApplicationModel.find({postingId: postingId, $or : [
//       {email}, {mobile}
//     ]})

//   } catch (error) {
//     console.log(error);
//     res.status(400).json({
//       status: false,
//       message: error?.message,
//     });
//   }
// };

//  job application posting

export const applyJob = async (req, res) => {
  try {
    const { postingId, fullName, email, mobile } = req?.body;

    if (!req.file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }

    console.log(JSON.stringify(req.file))
    // if(!postingId || !fullName || !email || !mobile || !req.file) {
    //   res.status(400).json({ message: "Incorrect/Incomplete form data provided" })
    //   return
    // }

    console.log("uploaded");

    const jobApplication = new jobApplicationModel({
      postingId,
      fullName,
      email,
      mobile,
      resumePath: ""
    });

    // jobApplicationModel.save()
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error?.message,
    });
  }
};
