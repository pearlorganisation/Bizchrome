import React, { useEffect, useState } from "react";
import "./JobPostings.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const JobPostings = ({data, setJobData}) => {

  // State to manage the open/closed state of each accordion item
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  //jobDetail state
  const [isJobViewed, setIsJobViewd] = useState(false);

  //filters count state
  const [filtersCount, setFiltersCount] = useState(5);

  // State to manage the value of the salary slider
  const [salaryValue, setSalaryValue] = useState(100000);
  const [maxSalaryValue, setMaxSalaryValue] = useState(500000);

  // State to manage the value of the experience slider
  const [experienceValue, setExperienceValue] = useState(0);
  const [maxExperienceValue, setMaxExperienceValue] = useState(20);

  // state to manage all department accordian
  const [isAllDepartmentsOpen, setIsAllDepartmentsOpen] = useState(false);

  //state for window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to toggle the accordion content visibility
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
  };

  const toggleAccordion4 = () => {
    setIsOpen4(!isOpen4);
  };

  const toggleAccordion5 = () => {
    setIsOpen5(!isOpen5);
  };

  const toggleAccordion6 = () => {
    setIsOpen6(!isOpen6);
  };

  const toggleAccordion7 = () => {
    setIsOpen7(!isOpen7);
  };

  const toggleAllDepartments = () => {
    setIsAllDepartmentsOpen(!isAllDepartmentsOpen);
  };

  // Function to handle salary slider value change
  const handleSliderChange = (event) => {
    setSalaryValue(parseInt(event.target.value));
  };

  // Function to handle Experience slider value change
  const handleSliderChange2 = (event) => {
    setExperienceValue(parseInt(event.target.value));
  };

 

  // useEffect for window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set initial class
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  //open job details

  // const openDetails = (jobid) => {
    
  // }

  return (
    <>
      <div className="mt-4">
        <div className="w-full text-xl font-bold text-center ">
          Jobs Found: {data.length}
        </div>
        <div className="w-full flex justify-center">
          {windowWidth > 950 && (
            <>
              {/* desktop filter section */}
              <div
                className={`w-72 p-3`}
                style={{ maxHeight: "1200px", maxWidth: "330px" }}
              >
                <div className="border rounded-lg shadow-md px-6">
                  <div className="mt-3 font-medium flex">
                    <span className="flex flex-col justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#190A28"
                          d="M1.51 2.675c1.943 2.483 4.815 6.158 4.815 6.158V13a1.676 1.676 0 003.35 0V8.833s2.872-3.675 4.815-6.158c.427-.55.033-1.342-.67-1.342H2.172a.831.831 0 00-.661 1.342z"
                        ></path>
                      </svg>
                    </span>
                    <span className="pl-2">
                      Filters {filtersCount > 0 && `(${filtersCount})`}
                    </span>
                  </div>
                  {/* date posted */}
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
                      className={isOpen ? "" : "hidden"}
                      aria-labelledby="accordion-flush-heading-1"
                    >
                      <div className="py-4 border-b border-gray-200 dark:border-gray-700">
                        {/* radio button */}
                        <div className="flex">
                          <div className="flex items-center h-5">
                            <input
                              id="allDays"
                              aria-describedby="helper-radio-text"
                              type="radio"
                              name="date-posted"
                              value=""
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                            />
                          </div>
                          <div className="ms-2 text-sm">
                            <label
                              htmlFor="helper-radio"
                              className="font-medium text-gray-900 dark:text-gray-300"
                            >
                              All
                            </label>
                          </div>
                        </div>

                        {/* radio button */}
                        <div className="flex">
                          <div className="flex items-center h-5">
                            <input
                              id="last24hrs"
                              aria-describedby="helper-radio-text"
                              type="radio"
                              name="date-posted"
                              value=""
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                            />
                          </div>
                          <div className="ms-2 text-sm">
                            <label
                              htmlFor="helper-radio"
                              className="font-medium text-gray-900 dark:text-gray-300"
                            >
                              Last 24 Hours
                            </label>
                          </div>
                        </div>

                        {/* radio button */}
                        <div className="flex">
                          <div className="flex items-center h-5">
                            <input
                              id="last3Days"
                              aria-describedby="helper-radio-text"
                              type="radio"
                              name="date-posted"
                              value=""
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                            />
                          </div>
                          <div className="ms-2 text-sm">
                            <label
                              htmlFor="helper-radio"
                              className="font-medium text-gray-900 dark:text-gray-300"
                            >
                              Last 3 Days
                            </label>
                          </div>
                        </div>

                        {/* radio button */}
                        <div className="flex">
                          <div className="flex items-center h-5">
                            <input
                              id="last7Days"
                              aria-describedby="helper-radio-text"
                              type="radio"
                              name="date-posted"
                              value=""
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                            />
                          </div>
                          <div className="ms-2 text-sm">
                            <label
                              htmlFor="helper-radio"
                              className="font-medium text-gray-900 dark:text-gray-300"
                            >
                              Last 7 Days
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Salary */}
                  <div
                    id="accordion-flush"
                    data-accordion="collapse"
                    data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    data-inactive-classes="text-gray-500 dark:text-gray-400"
                  >
                    <h2 id="accordion-flush-heading-2">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-black border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                        data-accordion-target="#accordion-flush-body-1"
                        aria-expanded="true"
                        aria-controls="accordion-flush-body-1"
                        onClick={toggleAccordion2}
                      >
                        <span className="font-bold">Salary</span>
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
                      id="accordion-flush-body-2"
                      className={isOpen2 ? "" : "hidden"}
                      aria-labelledby="accordion-flush-heading-1"
                    >
                      <div
                        htmlFor="minmax-range"
                        className="flex flex-col justify-evenly py-1"
                      >
                        <span className="text-base font-medium text-gray-900 dark:text-white">
                          Salary range here
                        </span>
                        <span className="text-sm font-medium mb-2 text-gray-600">
                          Minimum monthly salary
                        </span>
                        <span className="text-sm">₹ {salaryValue}</span>
                      </div>

                      <input
                        id="minmax-range"
                        type="range"
                        min="0"
                        max={maxSalaryValue}
                        value={salaryValue}
                        onChange={handleSliderChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                      />
                    </div>
                  </div>
                  {/* work type */}
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
                        onClick={toggleAccordion3}
                      >
                        <span className="font-bold">Work Type</span>
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
                      className={isOpen3 ? "" : "hidden"}
                      aria-labelledby="accordion-flush-heading-1"
                    >
                      <div className="py-4 border-b border-gray-200 dark:border-gray-700">
                        {/* checkbox */}
                        <div class="flex items-center mb-4">
                          <input
                            id="fulltimeCb"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="fulltimeCb"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Full Time
                          </label>
                        </div>

                        {/* checkbox */}
                        <div class="flex items-center mb-4">
                          <input
                            id="parttimeCb"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="parttimeCb"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Part Time
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* work shift */}
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
                        onClick={toggleAccordion4}
                      >
                        <span className="font-bold">Work Shift</span>
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
                      className={isOpen4 ? "" : "hidden"}
                      aria-labelledby="accordion-flush-heading-1"
                    >
                      <div className="py-4 border-b border-gray-200 dark:border-gray-700">
                        {/* checkbox */}
                        <div class="flex items-center mb-4">
                          <input
                            id="dayShiftCb"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="dayShiftCb"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Day Shift
                          </label>
                        </div>

                        {/* checkbox */}
                        <div class="flex items-center mb-4">
                          <input
                            id="nightShiftCb"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="nightShiftCb"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Night Shift
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Department */}
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
                        onClick={toggleAccordion5}
                      >
                        <span className="font-bold">Department</span>
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
                      className={isOpen5 ? "" : "hidden"}
                      aria-labelledby="accordion-flush-heading-1"
                    >
                      <div className="py-4 border-b border-gray-200 dark:border-gray-700">
                        {/* checkbox */}
                        <div class="flex items-center mb-3">
                          <input
                            id="department1"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="department1"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Admin/ Back Office
                          </label>
                        </div>

                        {/* checkbox */}
                        <div class="flex items-center mb-3">
                          <input
                            id="department2"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="department2"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Admin/ Back Office
                          </label>
                        </div>

                        {/* checkbox */}
                        <div class="flex items-center mb-3">
                          <input
                            id="department3"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="department3"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Admin/ Back Office
                          </label>
                        </div>

                        {/* checkbox */}
                        <div class="flex items-center mb-3">
                          <input
                            id="department4"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="department4"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Admin/ Back Office
                          </label>
                        </div>

                        {/* checkbox */}
                        <div class="flex items-center mb-3">
                          <input
                            id="department5"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="department5"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Admin/ Back Office
                          </label>
                        </div>

                        {/* more departments listing */}

                        <div
                          id="accordian-all-departments"
                          className={isAllDepartmentsOpen ? "" : "hidden"}
                          aria-labelledby="accordion-flush-heading-1"
                        >
                          <div>
                            {/* checkbox */}
                            <div class="flex items-center mb-3">
                              <input
                                id="department1"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="department1"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Admin/ Back Office
                              </label>
                            </div>

                            {/* checkbox */}
                            <div class="flex items-center mb-3">
                              <input
                                id="department2"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="department2"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Admin/ Back Office
                              </label>
                            </div>

                            {/* checkbox */}
                            <div class="flex items-center mb-3">
                              <input
                                id="department3"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="department3"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Admin/ Back Office
                              </label>
                            </div>

                            {/* checkbox */}
                            <div class="flex items-center mb-3">
                              <input
                                id="department4"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="department4"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Admin/ Back Office
                              </label>
                            </div>

                            {/* checkbox */}
                            <div class="flex items-center mb-3">
                              <input
                                id="department5"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="department5"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Admin/ Back Office
                              </label>
                            </div>
                          </div>
                        </div>
                        <a
                          type="button"
                          href="javascript:void(0)"
                          className="mb-3 text-green-800 hover:text-green-900 hover:underline transition duration-300"
                          data-accordion-target="#accordian-all-departments"
                          aria-expanded="true"
                          aria-controls="accordian-all-departments"
                          onClick={toggleAllDepartments}
                        >
                          {isAllDepartmentsOpen ? "Show Less" : "Show more"}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div
                    id="accordion-flush"
                    data-accordion="collapse"
                    data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    data-inactive-classes="text-gray-500 dark:text-gray-400"
                  >
                    <h2 id="accordion-flush-heading-2">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-black border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                        data-accordion-target="#accordion-flush-body-1"
                        aria-expanded="true"
                        aria-controls="accordion-flush-body-1"
                        onClick={toggleAccordion6}
                      >
                        <span className="font-bold">Experience</span>
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
                      id="accordion-flush-body-2"
                      className={isOpen6 ? "" : "hidden"}
                      aria-labelledby="accordion-flush-heading-1"
                    >
                      <div
                        htmlFor="minmax-range"
                        className="flex flex-col justify-evenly"
                      >
                        <span className="text-sm font-medium mb-2 text-gray-600">
                          Minimum work experience
                        </span>
                        <span className="text-base">
                          {experienceValue === 0
                            ? "Any"
                            : `${experienceValue} years`}
                        </span>
                      </div>

                      <input
                        id="minmax-range"
                        type="range"
                        min="0"
                        max={maxExperienceValue}
                        value={experienceValue}
                        onChange={handleSliderChange2}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                      />
                    </div>
                  </div>
                  {/* Sort By */}
                  <div
                    id="accordion-flush"
                    data-accordion="collapse"
                    data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    data-inactive-classes="text-gray-500 dark:text-gray-400"
                  >
                    <h2 id="accordion-flush-heading-2">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-black border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                        data-accordion-target="#accordion-flush-body-1"
                        aria-expanded="true"
                        aria-controls="accordion-flush-body-1"
                        onClick={toggleAccordion7}
                      >
                        <span className="font-bold">Sort By</span>
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
                      id="accordion-flush-body-2"
                      className={isOpen7 ? "" : "hidden"}
                      aria-labelledby="accordion-flush-heading-1"
                    >
                      <div className="py-4 border-b border-gray-200 dark:border-gray-700">
                        {/* radio button */}
                        <div className="flex">
                          <div className="flex items-center h-5">
                            <input
                              id="allDays"
                              aria-describedby="helper-radio-text"
                              type="radio"
                              name="date-posted"
                              value=""
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                            />
                          </div>
                          <div className="ms-2 text-sm">
                            <label
                              htmlFor="helper-radio"
                              className="font-medium text-gray-900 dark:text-gray-300"
                            >
                              All
                            </label>
                          </div>
                        </div>

                        {/* radio button */}
                        <div className="flex">
                          <div className="flex items-center h-5">
                            <input
                              id="last24hrs"
                              aria-describedby="helper-radio-text"
                              type="radio"
                              name="date-posted"
                              value=""
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                            />
                          </div>
                          <div className="ms-2 text-sm">
                            <label
                              htmlFor="helper-radio"
                              className="font-medium text-gray-900 dark:text-gray-300"
                            >
                              Last 24 Hours
                            </label>
                          </div>
                        </div>

                        {/* radio button */}
                        <div className="flex">
                          <div className="flex items-center h-5">
                            <input
                              id="last3Days"
                              aria-describedby="helper-radio-text"
                              type="radio"
                              name="date-posted"
                              value=""
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                            />
                          </div>
                          <div className="ms-2 text-sm">
                            <label
                              htmlFor="helper-radio"
                              className="font-medium text-gray-900 dark:text-gray-300"
                            >
                              Last 3 Days
                            </label>
                          </div>
                        </div>

                        {/* radio button */}
                        <div className="flex">
                          <div className="flex items-center h-5">
                            <input
                              id="last7Days"
                              aria-describedby="helper-radio-text"
                              type="radio"
                              name="date-posted"
                              value=""
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                            />
                          </div>
                          <div className="ms-2 text-sm">
                            <label
                              htmlFor="helper-radio"
                              className="font-medium text-gray-900 dark:text-gray-300"
                            >
                              Last 7 Days
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* card collection */}
          <div
            className="flex flex-col"
            style={{ maxWidth: "650px", width: "100%" }}
          >
            {/* card */}
            {data &&
              data?.map((item) => {
                return (
                  <Link to={`${item?.id}`}>
                  <div className="m-3 p-4 flex flex-col justify-evenly gap-2 border rounded-lg shadow-md cursor-pointer"
                   onClick={() => setJobData(item) }
                   >
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
                          <div className="text-lg font-semibold">{item?.position}</div>
                          <div className="text-xs">{item?.company}</div>
                        </div>
                      </div>
                      <span className="icon">
                        <svg
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
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
                      <span className="pl-2 text-gray-500 text-sm">
                        {item?.type}
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
                      <span className="pl-2 text-gray-500 text-sm">
                        {item?.minSalary} - {item?.maxSalary}
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
                      {item?.tags &&
                        item?.tags.map((tag) => {
                          return (
                            <div
                              className="bg-gray-300 text-gray-700 rounded-sm px-2"
                              style={{ minWidth: "auto" }}
                            >
                              {tag}
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPostings;
