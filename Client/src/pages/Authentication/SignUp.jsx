import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../features/scrollToTop";

const SignUp = () => {
  // states
  const [showOtp, setShowOtp] = useState(false);
  const [userData, setUserData] = useState();
  const [isPassVisible, setPassVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  //   refs
  const otpRef = useRef(null);

  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    handleSubmit: handleSubmitOtp,
    formState: { otpErrors },
  } = useForm();

  const onSubmit = (data) => {
    setErrorMsg("");
    setUserData(data);
    console.log(`sending otp to ${data?.email} `);

    axios
      .post(`${import.meta.env.VITE_API_BASE_URL_LOCAL}auth/signupotp`, {
        email: data?.email,
        mobile: data?.mobile
      })
      .then((res) => {
        console.log(res);
        if (res?.data?.status) {
          setShowOtp(true);
        } else {
          // alert(res?.data?.message)
          let msg = res?.data?.message;
          setErrorMsg(msg);
          scrollToTop();
        }
      });

    // dispatch(generateSignUpOTP(data));
  };

  const onOtpSubmit = () => {
    setErrorMsg("");
    let otp = otpRef?.current?.value;
    if (otp?.length <= 0) {
      return;
    }
    console.log(otp);
    const postData = {
      fullName: userData?.fullName,
      mobile: userData?.mobile,
      email: userData?.email,
      otp: otp,
      password: userData?.password,
      userType: userData?.userType,
    };
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL_LOCAL}auth/signup`, postData)
      .then((res) => {
        if (res?.data?.status) {
          scrollToTop()
          setSuccessMsg(res?.data?.message);
          setTimeout(() => {
            Navigate("/signIn");
          }, 3000);
        } else {
          setErrorMsg(res?.data?.message);
          scrollToTop();
        }
      })
      .catch((err) => {
        console.log(err?.message);
      });
  };

  return (
    <main className="w-full flex">
      <div className="flex-1 flex items-center justify-center py-10">
        <div className="w-full max-w-md space-y-8 md:px-4 bg-white text-gray-600">
          <div className="">
            {/* <img src="https://floatui.com/logo.svg" width={150} className="lg:hidden" /> */}
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Sign up
              </h3>
              <p className="">
                Already have an account?{" "}
                <Link
                  to="/signIn"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
          {successMsg?.length > 0 && (
            <div className="text-green-600 text-xl font-semibold text-center">
              {successMsg}
            </div>
          )}

          {errorMsg?.length > 0 && (
            <div className="text-red-600 text-xl font-semibold text-center">
              {errorMsg}
            </div>
          )}
          {!showOtp && (
            <>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="font-medium">Full Name</label>
                  <input
                    {...register("fullName", { required: true })}
                    type="text"
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                  {errors.fullName && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                <div>
                  <label className="font-medium">Mobile Number</label>
                  <div className="w-full">
                    <input
                      {...register("mobile", {
                        required: true,
                        pattern: /^[0-9]{10}$/,
                      })}
                      type="number"
                      placeholder="Enter your number"
                      className="w-full focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                      maxLength={10}
                    />
                    {errors.mobile && (
                      <span className="text-red-500">
                        Please enter correct 10 digit number
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="relative">
                  <label className="font-medium">Password</label>
                  <input
                    {...register("password", { required: true })}
                    type={isPassVisible ? "text" : "password"}
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                  <button
                    onClick={() => {
                      setPassVisible(!isPassVisible);
                    }}
                    className="absolute top-[2.8rem] right-[0.8rem]"
                    type="button"
                  >
                    {" "}
                    {isPassVisible ? <FaEye /> : <FaEyeSlash />}
                  </button>
                  {errors.password && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                <p className="font-medium mb-1 text-gray-500">Looking for?</p>
                <div className="flex gap-x-4">
                  {[`Candidate`, `Business`, `Investor`]?.map((item) => {
                    return (
                      <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-2 font-medium text-gray-700">
                        <input
                          {...register("userType", { required: true })}
                          className="peer hidden"
                          type="radio"
                          value={item}
                          id={`${item}`}
                        />
                        <label
                          className={`peer-checked:border-indigo-400 peer-checked:bg-indigo-200 peer-checked:ring-4 ring-indigo-500/30 absolute top-0 h-full w-full cursor-pointer rounded-xl border ${
                            errors.role ? "ring-4 ring-red-500/30" : null
                          } `}
                          for={`${item}`}
                        >
                          {" "}
                        </label>
                        <div className="peer-checked:border-transparent peer-checked:bg-indigo-400 peer-checked:ring-2 absolute left-4 size-4 rounded-full border-2 border-gray-300 bg-gray-200 ring-indigo-400 ring-offset-2"></div>
                        <span className="pointer-events-none z-10 pl-1">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <button className="w-full px-4 py-2 text-white font-medium text-lg bg-yellow-600 hover:bg-indigo-500 active:bg-indigo-800 rounded-lg duration-150">
                  Send OTP
                </button>
              </form>
            </>
          )}
          {showOtp && (
            <div className="space-y-2">
              <div>
                <label className="font-medium">OTP</label>
                <div className="w-full">
                  <input
                    name="otp"
                    type="number"
                    placeholder="Enter your OTP"
                    ref={otpRef}
                    className="w-full focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div className="flex gap-1 justify-center">
                <button
                  onClick={() => setShowOtp(false)}
                  className="w-[48%] px-4 py-2 text-white font-medium text-lg bg-red-600 hover:bg-red-600 active:bg-red-800 rounded-lg duration-150"
                >
                  back
                </button>
                <button
                  onClick={() => {
                    onOtpSubmit();
                  }}
                  className="w-[48%] px-4 py-2 text-white font-medium text-lg bg-indigo-600 hover:bg-yellow-600 active:bg-yellow-800 rounded-lg duration-150"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default SignUp;
