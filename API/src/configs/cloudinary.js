import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadFile = async (file) => {
  try {
    // const base64DataURI = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;

    let splitFileName = file.originalname.split('.')
    let extension = `${splitFileName[splitFileName.length - 1]}`

    const result = await cloudinary.uploader.upload(file.path, {
      folder: "resumes", // Optional: Specify the folder in Cloudinary
      resource_type: 'raw', // Specify the resource type as "raw" to prevent format auto-detection
      format: extension, // Explicitly specify the format as "pdf"
    });

    // Delete file from disk storage after successful upload to Cloudinary
    // fs.unlink(file.path, (err) => {
    //   if (err) {
    //     console.error("Error deleting file from disk:", err);
    //   } else {
    //     console.log("File deleted from disk:", file.path);
    //   }
    // });

    return { status: true, result: result };
  } catch (error) {
    // console.error("Error uploading file to Cloudinary:", error);
    return { status: false, message: error?.message };
  }
};
