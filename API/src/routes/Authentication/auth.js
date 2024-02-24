import express from "express";
import {
  sendSignUpOtp,
  signUp,
} from "../../controllers/Authentication/auth.js";

const router = express.Router();
router.route("/signup").post(signUp);
router.route("/signupOtp").post(sendSignUpOtp);
export default router;
