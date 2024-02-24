import { mongoConnect } from "./src/configs/mongoDB.js";
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./src/routes/Authentication/auth.js";
import chalk from "chalk";
import cors from 'cors'

const app = express();

//CORS handling
app.use(
  cors(
    process.env.NODE_ENV === "development"
      ? {
          origin: ["http://127.0.0.1:5173"],
          credentials: true,
          methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
          allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
          exposedHeaders: ["*", "Authorization"],
        }
      : {
          origin: ["http://127.0.0.1:5173"],
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
app.use("/api/v1/auth", authRoutes);
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
