import { mongoConnect } from "./src/configs/mongoDB.js";
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./src/routes/Authentication/auth.js";

import locationRoutes from "./src/routes/Location/findLocation.js";
import chalk from "chalk";
import cors from "cors";
import collegeRoutes from "./src/routes/Colleges/findCollegeRouter.js";
import jobRoutes from "./src/routes/Job/jobRouter.js";

const app = express();

//CORS handling

app.use(
  cors(
    process.env.NODE_ENV === "development"
      ? {
          origin: ["http://localhost:5173", "https://bizchrome.vercel.app"],
          credentials: true,
          methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
          allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
          exposedHeaders: ["*", "Authorization"],
        }
      : {
          origin: ["http://localhost:5173", "https://bizchrome.vercel.app"],
          credentials: true,
          methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
          allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
          exposedHeaders: ["*", "Authorization"],
        }
  )
);

//

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "APP is running successfully.",
  });
});

// ++++++++++++++++++++Routes Section starts from here++++++++
//Auth routes
app.use("/api/v1/auth", authRoutes);

//Find Location Routes
app.use("/api/v1/location", locationRoutes);

//Find Colleges Routes
app.use("/api/v1/colleges", collegeRoutes);

//Job routes
app.use("/api/v1/job", jobRoutes);

// allows us to access the env file data
dotenv.config();

const PORT = process.env.PORT || 6500;

mongoConnect();

app.listen(PORT, () => {
  console.log(
    chalk.bgGreenBright(`server is running on`),
    `http://localhost:${PORT}/`
  );
});
