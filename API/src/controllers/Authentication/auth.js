import bcrypt from "bcrypt";
import { userModel } from "../../models/Authentication/userAuthModel.js";
import { otpModel } from "../../models/Authentication/signupOtpMode.js";
import { sendSignUpOtpMail } from "../../utils/MailTemplates/signupMail.js";

export const signUp = async (req, res) => {
  try {
    const { otp, email } = req.body;
    const savedOtp = await otpModel.find({ email, otp });

    //Verify the otp

    if (savedOtp.length == 0) {
     return res.status(400).json({
        message: "Wrong OTP entered",
        status: false,
      });
    }

    // Deleting the otp from model
    await otpModel.findOneAndDelete({ email, otp });
    //Hashing the password with bcrypt
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newData = new userModel({
      ...req.body,
      password: hashedPassword,
    });
    await newData.save();
     return res
      .status(200)
      .json({
        success: 1,
        message: "Account created successfully, Continue with login",
      });
    console.log(req.body);
  } catch (error) {
    res.status(400).json({
      message: error?.message || "internal server error",
      status: false,
    });
  }
};

export const sendSignUpOtp = async (req, res) => {
  try {
    const { email } = req.body;
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

    res.status(200).json({
      message: "OTP sent successfully",
      status: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error?.message || "Internal server error",
      status: false,
    });
  }
};
