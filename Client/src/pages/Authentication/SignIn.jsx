import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { signUp, userLogin } from "../../features/actions/Auth/authActions";

import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const [isPassVisible, setsetPassVisible] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // redux
  const dispatch = useDispatch();

  const { userMetaData } = useSelector((state) => state.auth);
  const onSubmit = (data) => {
    dispatch(userLogin(data));
  };
  return (
    <main className="w-full flex">
      <div className="flex-1 flex items-center justify-center h-[90vh]">
        <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
          <div className="">

            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Sign In
              </h3>
              <p className="">
                Don't have an account?{" "}
                <Link
                  to="/signUp"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Sign Up
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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* <div>
                            <label className="font-medium">
                                Mobile Number
                            </label>
                            <div className='w-full'>
                                <input
                                    {...register("number", { required: true })}

                                    type="number"
                                    placeholder='Enter your number'
                                    className="w-full focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                                />
                                {errors.number && (
                                    <span className="text-red-500">This field is required</span>
                                )}

                            </div>
                        </div> */}
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
                  setsetPassVisible(!isPassVisible);
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

            {/* <p class="font-medium mb-1 text-gray-500">Looking for?</p>
                        <div class="flex gap-x-4">

                            {
                                [`Candidate`, `Business`, `Investor`]?.map(item => {
                                    return <div class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-2 font-medium text-gray-700">
                                        <input
                                            {...register("role", { required: true })}

                                            class="peer hidden" type="radio" value={item} id={`${item}`} />
                                        <label class={`peer-checked:border-indigo-400 peer-checked:bg-indigo-200 peer-checked:ring-4 ring-indigo-500/30 absolute top-0 h-full w-full cursor-pointer rounded-xl border ${errors.role ? 'ring-4 ring-red-500/30' : null} `} for={`${item}`}> </label>
                                        <div class="peer-checked:border-transparent peer-checked:bg-indigo-400 peer-checked:ring-2 absolute left-4 size-4 rounded-full border-2 border-gray-300 bg-gray-200 ring-indigo-400 ring-offset-2"></div>
                                        <span class="pointer-events-none z-10 pl-1">{item}</span>
                                    </div>
                                })
                            }
                        </div>

                        {
                            false ? <div>
                                <label className="font-medium">
                                    OTP
                                </label>
                                <div className='w-full'>
                                    <input
                                        {...register("otp", { required: true })}
                                        name='number'
                                        type="number"
                                        placeholder='Enter your OTP'
                                        className="w-full focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                                    />
                                    {errors.otp && (
                                        <span className="text-red-500">This field is required</span>
                                    )}

                                </div>
                            </div> : null
                        } */}
            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
