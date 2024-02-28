import express from "express";

import { findLocation } from "../../controllers/Common/findLocation.js";

const locationRouter = express.Router();
locationRouter.route("/").post(findLocation);
export default locationRouter;
