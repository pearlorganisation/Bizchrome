    import express from "express";
    import { addJobs, getJobs, getPostedJobs } from "../../controllers/Job/jobController.js";


    const jobRoutes = express.Router();
    jobRoutes.route("/jobs/:jobTypeId").get(getJobs); // route for getting jobs posted according to job id
    jobRoutes.route("/jobs/:jobTypeId").post(addJobs); // route for posting job according to job id 
    jobRoutes.route("/jobs/company/:companyId").get(getPostedJobs);
    export default jobRoutes;
