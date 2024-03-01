import React from "react";
import { Link } from "react-router-dom";

const SendOtp = () => {
  return (
    <>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div class="flex flex-col items-center justify-center text-center space-y-2">
              <div class="font-semibold text-3xl">
                <p>Otp Verification</p>
              </div>
              
            </div>

            <div>
              <form action="" method="post">
                <div class="flex flex-col space-y-16">
                  <div>
                    <label
                      for=""
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email or Number
                    </label>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                      rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                        dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=" Enter Email or Number"
                      required=""
                    />
                  </div>

                  <div class="flex flex-col space-y-5">
                    <div>
                        <Link to="/OtpVerification">
                        <button class="flex flex-row items-center justify-center text-center w-full 
                        border rounded-xl outline-none py-5 bg-[#3ACABE] border-none text-white text-sm shadow-sm">
                        Send Otp
                      </button>
                        </Link>
                     

                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendOtp;
