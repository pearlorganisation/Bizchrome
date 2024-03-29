import bcrypt from "bcrypt";
import { userModel } from "../../models/Authentication/userAuthModel.js";
import { otpModel } from "../../models/Authentication/signupOtpModel.js";
import { sendSignUpOtpMail } from "../../utils/MailTemplates/signupMail.js";
import { saveAccessTokenToCookie } from "../../utils/TokenMangement/accessTokenManagement.js";
import jwt from "jsonwebtoken";
import { profileCalculations } from "../../utils/ProfileCalculations/profileCalculations.js";

//Declarations
// const jwt = JsonWebTokenError

//Ends here

export const signUp = async (req, res) => {
  try {
    const { otp, email } = req.body;
    const savedOtp = await otpModel.find({ email, otp });

    //Verify the otp

    if (savedOtp.length == 0) {
      return res.status(200).json({
        message: "Wrong OTP entered",
        status: false,
      });
    }
    // Deleting the otp from model
    await otpModel.findOneAndDelete({ email, otp });
    //Hashing the password with bcrypt
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newData = new userModel({
      fullName: req?.body?.fullName,
      email: req?.body?.email,
      mobile: req?.body?.mobile,
      userType: req?.body?.userType,
      password: hashedPassword,
    });
    await newData.save();
    return res.status(200).json({
      status: true,
      message: "Account created successfully, Redirecting to login",
    });
  } catch (error) {
    res.status(400).json({
      message: error || "Internal server error",
      status: false,
    });
  }
};

export const sendSignUpOtp = async (req, res) => {
  try {
    const { email, mobile } = req.body;
    const isUserExisted = await userModel.find({ $or : [{email: email}, {mobile: mobile}] });
    if (isUserExisted.length !== 0) {
      return res.status(200).json({
        message: "User with this email or mobile already exists",
        status: false,
      });
    }

    const otp = Math.floor(Math.random() * (1000000 - 100000)) + 100000;
    //send OTP from here
    await sendSignUpOtpMail(email, otp);
    const payload = {
      email,
      otp,
    };
    await otpModel.findOneAndUpdate(
      { email }, // Match criteria
      payload, // Updated payload
      {
        upsert: true, // Create a new document if not found
        new: true, // Return the modified document (new: true) or the original (new: false)
      }
    );

    return res.status(200).json({
      message: `OTP sent to ${email}`,
      status: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: error?.message || "Internal server error",
      status: false,
    });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req?.body;
    let user = await userModel.findOne({ email });
    const verifyPassword = await bcrypt.compare(password, user?.password || "");
    if (!verifyPassword) {
      return res.status(200).json({
        message: "Email id and password combination is wrong",
        status: false,
      });
    }
    //Profile calculations

    profileCalculations(user);

    //

    //append cookies from here
    const accessToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.ACCESS_TOKEN_VALIDITY }
    );

    saveAccessTokenToCookie(res, accessToken);

    //ends here

    //Add crypto JS

    //
    return res.status(200).json({
      message: `Logged in successfully`,
      status: true,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error?.message || "Internal server error",
      status: false,
    });
  }
};

// @desc - to fetch the users data
// @route - POST /auth/logout
// @access - PUBLIC
export const logout = async (req, res) => {
  try {
    res.clearCookie("BIZCHROME_ACCESS_TOKEN");
    res.status(200).json({
      success: true,
      message: "Logged Out Successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Internal Server Error! ${error.message}`,
    });
  }
};
