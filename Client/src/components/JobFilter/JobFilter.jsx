import React, { useEffect, useState } from "react";

const JobFilter = ({setPostingsData, data}) => {

// State to manage the open/closed state of each accordion item
const [isOpen, setIsOpen] = useState(true);
const [isOpen2, setIsOpen2] = useState(false);
const [isOpen3, setIsOpen3] = useState(false);
const [isOpen4, setIsOpen4] = useState(false);
const [isOpen5, setIsOpen5] = useState(false);
const [isOpen6, setIsOpen6] = useState(false);
const [isOpen7, setIsOpen7] = useState(false);

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


// useEffect for salary slider
useEffect(() => {
    let newData =  data.filter((d) => salaryValue <= d?.maxSalary);
    setPostingsData(newData)
  }, [salaryValue])
  

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


  return (
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      value={0}
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
                      value={1}
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
                      value={3}
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
                      value={7}
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                <div className="flex items-center mb-4">
                  <input
                    id="fulltimeCb"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="fulltimeCb"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Full Time
                  </label>
                </div>

                {/* checkbox */}
                <div className="flex items-center mb-4">
                  <input
                    id="parttimeCb"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="parttimeCb"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                <div className="flex items-center mb-4">
                  <input
                    id="dayShiftCb"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="dayShiftCb"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Day Shift
                  </label>
                </div>

                {/* checkbox */}
                <div className="flex items-center mb-4">
                  <input
                    id="nightShiftCb"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="nightShiftCb"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                <div className="flex items-center mb-3">
                  <input
                    id="department1"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="department1"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Admin/ Back Office
                  </label>
                </div>

                {/* checkbox */}
                <div className="flex items-center mb-3">
                  <input
                    id="department2"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="department2"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Admin/ Back Office
                  </label>
                </div>

                {/* checkbox */}
                <div className="flex items-center mb-3">
                  <input
                    id="department3"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="department3"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Admin/ Back Office
                  </label>
                </div>

                {/* checkbox */}
                <div className="flex items-center mb-3">
                  <input
                    id="department4"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="department4"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Admin/ Back Office
                  </label>
                </div>

                {/* checkbox */}
                <div className="flex items-center mb-3">
                  <input
                    id="department5"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="department5"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
                    <div className="flex items-center mb-3">
                      <input
                        id="department1"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="department1"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Admin/ Back Office
                      </label>
                    </div>

                    {/* checkbox */}
                    <div className="flex items-center mb-3">
                      <input
                        id="department2"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="department2"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Admin/ Back Office
                      </label>
                    </div>

                    {/* checkbox */}
                    <div className="flex items-center mb-3">
                      <input
                        id="department3"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="department3"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Admin/ Back Office
                      </label>
                    </div>

                    {/* checkbox */}
                    <div className="flex items-center mb-3">
                      <input
                        id="department4"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="department4"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Admin/ Back Office
                      </label>
                    </div>

                    {/* checkbox */}
                    <div className="flex items-center mb-3">
                      <input
                        id="department5"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="department5"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                  {experienceValue === 0 ? "Any" : `${experienceValue} years`}
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
  );
};

export default JobFilter;