import jsonwebtoken from "jsonwebtoken";

import chalk from "chalk";
import { userModel } from "../../models/Authentication/userAuthModel";

const jwt = jsonwebtoken;

export const verifyTokenMiddleware = async (req, res, next) => {
  // console.log("Entered inside user status ");
  try {
    const cookies = req?.cookies;
    const access_token = cookies?.BIZCHROME_ACCESS_TOKEN;
    // console.log("this is access token", access_token);
    if (access_token === null) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized! Please Check Your Login Credentials",
      });
    }
    // console.log("This is access token", access_token);
    jwt.verify(
      access_token,
      process.env.JWT_SECRET_KEY,
      async (error, user) => {
        try {
          if (error) {
            console.log(chalk.green("Entered inside if(error) jwt block"));
            console.log(error?.message ?? error);
            return res.status(403).json({
              success: false,
              message: "Unauthorized! Please Check Your Login Credentials",
            });
          }
          const id = user?.id;

          const userIdentification = await userModel.findOne(
            { _id: id },
          );

          if (userIdentification?.disabled) {
            return res.status(440).json({
              success: false,
              message: "Unauthorized Access! Contact Admin ",
            });
          } // If everything is fine, continue to the next middleware or route handler.
          req.userId = id;
          return next();
        } catch (error) {
          console.log(
            chalk.green("Entered inside catch block of userStatusCheck")
          );
          return res.status(403).json({
            success: false,
            message: error.message || error,
          });
        }
      }
    );
  } catch (error) {
    console.log(chalk.green("Entered inside catch block"));
    return res.status(403).json({
      success: false,
      message: error?.message || error,
    });
  }
};
