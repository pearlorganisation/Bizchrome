// ----------------------------------------------imports------------------------------------------------
import chalk from "chalk";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// -----------------------------------------------------------------------------------------------------
// sendMail - this method is used to send mail
export const sendSignUpOtpMail = async (email, OTP) => {
  // transporter - configuration of admin/user to send mail from
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_MAIL,
      pass: process.env.NODEMAILER_MAIL_PASSWORD,
    },
  });
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  let mailOptions = {
    from: process.env.NODEMAILER_MAIL,
    to: email,
    subject: "Bizchrome signup OTP",
    html: `<h1>Sign up OTP is <br/>  ${OTP}</h1> <br/> <strong></strong>`,
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Nodemailer error", error);
        return reject(error);
      } else {
        return resolve("Otp Sent Successfully" + info.response);
      }
    });
  });
};
