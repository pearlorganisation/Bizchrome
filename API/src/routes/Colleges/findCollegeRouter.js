import express from "express";
import { getColleges } from "../../controllers/Common/getColleges.js";


const collegeRoutes = express.Router();
collegeRoutes.route("/findColleges").get(getColleges);
// router.route("/signupOtp").post(sendSignUpOtp);
// router.route("/userLogin").post(userLogin);
export default collegeRoutes;
