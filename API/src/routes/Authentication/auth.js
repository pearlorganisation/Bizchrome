import express from "express";
import {
  logout,
  sendSignUpOtp,
  signUp,
  userLogin,
} from "../../controllers/Authentication/auth.js";

const router = express.Router();
router.route("/signup").post(signUp);
router.route("/signupOtp").post(sendSignUpOtp);
router.route("/userLogin").post(userLogin);
router.route("/logout").post(logout);

export default router;
