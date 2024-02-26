import express from "express";
import {
  sendSignUpOtp,
  signUp,
  userLogin,
} from "../../controllers/Authentication/auth.js";

const router = express.Router();
router.route("/signup").post(signUp);
router.route("/signupOtp").post(sendSignUpOtp);
router.route("/userLogin").post(userLogin);
export default router;
