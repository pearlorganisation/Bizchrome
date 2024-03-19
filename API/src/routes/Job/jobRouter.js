    import express from "express";
    import { addJobs, getJobs } from "../../controllers/Job/jobController.js";


    const jobRoutes = express.Router();
    jobRoutes.route("/jobs/:jobTypeId").get(getJobs);
    jobRoutes.route("/jobs/:jobTypeId").post(addJobs);
    // router.route("/signupOtp").post(sendSignUpOtp);
    export default jobRoutes;
