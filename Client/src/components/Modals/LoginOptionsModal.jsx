import React from "react";
import { Link } from "react-router-dom";

const LoginOptionsModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div
      class={`fixed left-0 top-0 flex h-full w-full items-center justify-center gap-3 bg-black bg-opacity-50 pb-10 z-50 ${
        isModalOpen ? "block" : "hidden"
      }`}
    >
      <div class="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
        <div class="w-full">
          <div class=" mb-20 mt-6 max-w-[400px] mx-auto">
            <div class="mb-8 flex justify-end">
              <h1
                class="mb-4 text-3xl font-extrabold cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                x
              </h1>
            </div>
            <div class="space-y-4 flex flex-col">
              <Link to="/candidate-signUp">
                <button
                  class="p-3 bg-[#0EA89B] rounded-full text-white w-full font-semibold"
                  onClick={() => setIsModalOpen(false)}
                >
                  Login/Register as Candidate
                </button>
              </Link>
              <Link to="business-signUp">
                <button
                  class="p-3 bg-[#0EA89B] rounded-full text-white w-full font-semibold"
                  onClick={() => setIsModalOpen(false)}
                >
                  Login/Register as Business
                </button>
              </Link>
              <Link to="investor-login">
                <button
                  class="p-3 bg-[#0EA89B] rounded-full text-white w-full font-semibold"
                  onClick={() => setIsModalOpen(false)}
                >
                  Login as Investor{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOptionsModal;
