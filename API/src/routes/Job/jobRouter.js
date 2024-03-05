import express from "express";
import { addJobs, getJobs } from "../../controllers/Job/jobController.js";


const jobRoutes = express.Router();
jobRoutes.route("/jobs").get(getJobs);
jobRoutes.route("/jobs").post(addJobs);
// router.route("/signupOtp").post(sendSignUpOtp);
export default jobRoutes;
