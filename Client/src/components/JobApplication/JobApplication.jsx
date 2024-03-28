import React, { useState } from "react";
import "./JobApplication.css";
import axios from "axios";
import { useForm } from "react-hook-form";

const JobApplication = ({ data }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    setErrorMsg("");
    try {
      const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(formData.resume[0].type)) {
        setErrorMsg("Resume needs to be in .pdf/.doc/.docx format only");
        return;
      }
      let formDataToSend = new FormData(); // Create a new FormData object

      formDataToSend.append("postingId", data?._id);
      formDataToSend.append("fullName", formData?.fullName);
      formDataToSend.append("email", formData?.email);
      formDataToSend.append("mobile", formData?.mobile);
      formDataToSend.append("resume", formData.resume[0]);
  
      console.log(formDataToSend)

      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL_LOCAL}job/jobapplication`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.status) {
        setSuccessMsg("Applied Successfully");
      }
    } catch (error) {
      console.error("Error occurred while submitting job application:", error);
      setErrorMsg("Failed to submit job application. Please try again later.");
    }
  };

  return (
    <div className="py-10">
      <div className="w-full text-center text-3xl mb-2 font-semibold">
        Job Application for:
      </div>
      <div className="w-full text-center flex flex-col gap-1 mb-2">
        <div className="text-xl">{data?.position}</div>
        <div className="text-base">at {data?.company}</div>
      </div>

      <form
        className="max-w-sm mx-auto"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Full Name
          </label>
          <input
            {...register("fullName", { required: true })}
            type="text"
            id="fullName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     "
            placeholder=""
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            E-Mail
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     "
            placeholder=""
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Mobile Number
          </label>
          <input
            {...register("mobile", { required: true })}
            type="number"
            id="mobile"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     "
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Résumé
          </label>
          <input
            {...register("resume", { required: true })}
            type="file"
            id="resume"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     "
            required
          />
        </div>
        <div className="w-full h-10 mb-2 px-2 flex justify-center">
          {successMsg?.length > 0 && (
            <div className="text-green-600">{successMsg}</div>
          )}

          {errorMsg?.length > 0 && <div className="text-red-500">{errorMsg}</div>}
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-base px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobApplication;
