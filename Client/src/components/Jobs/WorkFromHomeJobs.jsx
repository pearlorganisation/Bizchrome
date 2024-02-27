import React, { useState } from "react";
import "./WorkFromHomeJobs.css";

const WorkFromHomeJobs = () => {

    // State to manage the open/closed state of each accordion item
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the accordion content visibility
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };


  return (
    <>
      <div className="w-full px-10 flex">
        {/* filter section */}
        <div
          className="w-72 p-3"
          style={{ maxHeight: "1200px", maxWidth: "250px" }}
        >
          <div className="border rounded-lg shadow-md px-6">
            <div
              id="accordion-flush"
              data-accordion="collapse"
              data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400"
            >
              <h2 id="accordion-flush-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-black border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                  data-accordion-target="#accordion-flush-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-flush-body-1"
                  onClick={toggleAccordion}
                >
                  <span className="font-bold">Date Posted</span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-1"
                className={isOpen ? '' : 'hidden'}
                aria-labelledby="accordion-flush-heading-1"
              >
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to{" "}
                    <a
                      href="/docs/getting-started/introduction/"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      get started
                    </a>{" "}
                    and start developing websites even faster with components on
                    top of Tailwind CSS.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* card collection */}
        <div
          className="flex flex-col"
          style={{ maxWidth: "520px", width: "100%" }}
        >
          {/* cards */}
          <div className="m-3 p-4 flex flex-col justify-evenly gap-2 border rounded-lg shadow-md cursor-pointer">
            <div className="w-full flex justify-between ">
              <div className="flex">
                <div className="flex flex-col justify-center">
                  <img
                    src="/no-image.png"
                    style={{ width: "32px", height: "32px" }}
                    alt=""
                  />
                </div>
                <div className="flex flex-col pl-2">
                  <div className="text-lg">Position Name</div>
                  <div className="text-xs">Company Name</div>
                </div>
              </div>
              <span className="icon">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M312,256l-199-199a15,15 0 01 0-19l29-29a15,15 0 01 19,0l236,235a16,16 0 01 0,24l-236,235a15,15 0 01-19,0l-29-29a15,15 0 01 0-19z" />
                </svg>
              </span>
            </div>
            <div className="w-full flex">
              <div className="flex flex-col justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
                </svg>
              </div>
              <span className="pl-2 text-gray-400 text-sm">Work from home</span>
            </div>
            <div className="w-full flex">
              <div className="flex flex-col justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
                </svg>
              </div>
              <span className="pl-2 text-gray-500 text-sm">
                100000 - 400000
              </span>
            </div>
            <div
              className="flex gap-2 no-scrollbar"
              style={{
                maxWidth: "100%",
                overflowX: "auto",
                whiteSpace: "nowrap",
              }}
            >
              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>
              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>

              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>

              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>

              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>

              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>

              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>
            </div>
          </div>

          <div className="m-3 p-4 flex flex-col justify-evenly gap-2 border rounded-lg shadow-md cursor-pointer">
            <div className="w-full flex justify-between ">
              <div className="flex">
                <div className="flex flex-col justify-center">
                  <img
                    src="/no-image.png"
                    style={{ width: "32px", height: "32px" }}
                    alt=""
                  />
                </div>
                <div className="flex flex-col pl-2">
                  <div className="text-lg">Position Name</div>
                  <div className="text-xs">Company Name</div>
                </div>
              </div>
              <span className="icon">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M312,256l-199-199a15,15 0 01 0-19l29-29a15,15 0 01 19,0l236,235a16,16 0 01 0,24l-236,235a15,15 0 01-19,0l-29-29a15,15 0 01 0-19z" />
                </svg>
              </span>
            </div>
            <div className="w-full flex">
              <div className="flex flex-col justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
                </svg>
              </div>
              <span className="pl-2 text-gray-400 text-sm">Work from home</span>
            </div>
            <div className="w-full flex">
              <div className="flex flex-col justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
                </svg>
              </div>
              <span className="pl-2 text-gray-500 text-sm">
                100000 - 400000
              </span>
            </div>
            <div
              className="flex gap-2 no-scrollbar"
              style={{
                maxWidth: "100%",
                overflowX: "auto",
                whiteSpace: "nowrap",
              }}
            >
              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>
              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>

              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>

              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>

              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>

              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>

              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>
            </div>
          </div>

          <div className="m-3 p-4 flex flex-col justify-evenly gap-2 border rounded-lg shadow-md cursor-pointer">
            <div className="w-full flex justify-between ">
              <div className="flex">
                <div className="flex flex-col justify-center">
                  <img
                    src="/no-image.png"
                    style={{ width: "32px", height: "32px" }}
                    alt=""
                  />
                </div>
                <div className="flex flex-col pl-2">
                  <div className="text-lg">Position Name</div>
                  <div className="text-xs">Company Name</div>
                </div>
              </div>
              <span className="icon">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M312,256l-199-199a15,15 0 01 0-19l29-29a15,15 0 01 19,0l236,235a16,16 0 01 0,24l-236,235a15,15 0 01-19,0l-29-29a15,15 0 01 0-19z" />
                </svg>
              </span>
            </div>
            <div className="w-full flex">
              <div className="flex flex-col justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
                </svg>
              </div>
              <span className="pl-2 text-gray-400 text-sm">Work from home</span>
            </div>
            <div className="w-full flex">
              <div className="flex flex-col justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
                </svg>
              </div>
              <span className="pl-2 text-gray-500 text-sm">
                100000 - 400000
              </span>
            </div>
            <div
              className="flex gap-2 no-scrollbar"
              style={{
                maxWidth: "100%",
                overflowX: "auto",
                whiteSpace: "nowrap",
              }}
            >
              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>
              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>

              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>

              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>

              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>

              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>

              <div
                className="bg-gray-300 text-gray-700 rounded-sm px-2"
                style={{ minWidth: "auto" }}
              >
                Full-time
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default WorkFromHomeJobs;
