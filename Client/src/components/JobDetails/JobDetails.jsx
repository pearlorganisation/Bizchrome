import React, { useState } from "react";
import "./JobDetails.css";
import { redirect, useParams } from "react-router-dom";

const JobDetails = ({ data }) => {
  if (!data) {
    const { jobType } = useParams();
    window.location.href = `/jobs/${jobType}`;
  }

  const [isOpen, setIsOpen] = useState(false);

  // let similarJobsData = [

  // ]

  // Function to toggle the accordion content visibility
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex w-full max-w-5xl flex-col md:mx-auto md:flex-row md:justify-center md:gap-[16px] md:py-6">
        <divName
          className="md:space-y-[12px]"
          style={{ maxWidth: "650px", width: "100%" }}
        >
          {/* Job card */}
          <div className="p-4 flex flex-col justify-evenly gap-2 border rounded-lg shadow-md cursor-pointer">
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
                  <div className="text-lg font-semibold">{data?.position}</div>
                  <div className="text-xs">{data?.company}</div>
                </div>
              </div>
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
              <span className="pl-2 text-gray-500 text-sm">{data?.type}</span>
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
                {data?.minSalary} - {data?.maxSalary}
              </span>
            </div>
            <div className="rounded-lg bg-[#edebee80] px-[16px] py-[12px]">
              <div className="md:grid md:grid-cols-3">
                <div className="flex justify-between md:flex-col md:gap-[8px]">
                  <p className="m-0 text-xs text-[#8C8594] md:text-sm">Fixed</p>
                  <p className="m-0 flex items-center text-xs font-semibold text-[#8C8594] md:text-sm">
                    ₹ {data?.minSalary} ₹ {data?.maxSalary}
                  </p>
                </div>
                <div className="my-[12px] h-[1px] w-full bg-[#8C8594] opacity-20 md:hidden"></div>
                <div className="flex justify-between md:flex-col md:gap-[8px]">
                  <p className="m-0 text-xs text-[#8C8594] md:text-sm">
                    Earning Potential
                  </p>
                  <p className="m-0 text-xs font-semibold text-[#8C8594] md:text-sm">
                    ₹ {data?.maxSalary}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="flex gap-2 no-scrollbar"
              style={{
                maxWidth: "100%",
                overflowX: "auto",
                whiteSpace: "nowrap",
              }}
            >
              {data?.tags &&
                data?.tags.map((tag) => {
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

            <div className="flex w-full items-center gap-[16px] md:text-sm">
              <div className="w-full">
                <a href="javascript:void(0)">
                  <div className="w-full rounded border border-solid bg-[#1F8268] px-[16px] py-[8px] text-center font-semibold text-white">
                    <div className="flex w-full cursor-pointer items-center justify-center space-x-[4px]">
                      <p className="m-0 whitespace-nowrap text-center text-sm">
                        Apply for job
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex cursor-pointer items-center gap-1 rounded border border-solid border-[#1F8268] px-[16px] py-[8px] font-semibold text-[#1F8268]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#1F8268"
                    d="M12 10.757c-.507 0-.96.201-1.307.516L5.94 8.495A2.2 2.2 0 006 8.026a2.2 2.2 0 00-.06-.468l4.7-2.751c.36.335.833.542 1.36.542 1.107 0 2-.897 2-2.008a2.001 2.001 0 00-2-2.008c-1.107 0-2 .897-2 2.008 0 .16.027.315.06.469l-4.7 2.75A1.987 1.987 0 004 6.019c-1.107 0-2 .897-2 2.008 0 1.112.893 2.008 2 2.008.527 0 1-.207 1.36-.542l4.747 2.785c-.034.14-.054.288-.054.435 0 1.078.874 1.954 1.947 1.954a1.953 1.953 0 001.947-1.954A1.953 1.953 0 0012 10.757z"
                  ></path>
                </svg>
                Share
              </div>
            </div>
          </div>

          {/* Job Description card */}
          <div className="md:space-y-[16px] p-4 flex flex-col justify-evenly gap-2 border rounded-lg shadow-md cursor-pointer">
            {/* job highlights */}
            <div className="rounded-lg border border-solid border-[#C1DBFB] bg-[#F5F9FE] p-[16px] flex flex-col gap-2 px-4">
              <span className="pl-1 font-bold text-lg">Job highlights</span>
              <span className="flex gap-4">
                <icon className="w-3">🔥</icon>
                <p className="m-0 text-base md:text-md">Urgently hirign</p>
              </span>
              <span className="flex gap-4">
                <icon className="w-3">💼</icon>
                <p className="m-0 text-base">500+ applicants</p>
              </span>
            </div>

            {/* horizontal line */}
            <div className="mx-auto mt-[24px] hidden h-[1px] w-[95%] bg-[#E8E7EA] md:block"></div>

            {/* job description */}
            <div className="md:mt-[24px] rounded-lg border border-solid border-[#e6e6e6] p-[16px] flex flex-col gap-3">
              <div>
                <h3 className="text-lg font-bold">Job Description</h3>
                <div className="flex flex-col gap-3 mt-3">
                  <span>About the Role</span>
                  <span>
                    We are looking for a highly skilled Full-Stack Engineer who
                    will be responsible for designing and developing front-end,
                    back-end and architecture, ensuring the responsiveness of
                    applications and working alongside design team for web
                    design features, among other duties. Full Stack Developer
                    will be required to see out a project from conception to
                    final product, requiring good organizational skills and
                    attention to detail.
                  </span>
                </div>
              </div>
              <div>
                <div
                  id="accordian-all-departments"
                  className={isOpen ? "" : "hidden"}
                  aria-labelledby="accordion-flush-heading-1"
                >
                  <h3 className="text-lg font-bold">Job Description</h3>
                  <div className="flex flex-col gap-3 mt-3">
                    <span>About the Role</span>
                    <span>
                      We are looking for a highly skilled Full-Stack Engineer
                      who will be responsible for designing and developing
                      front-end, back-end and architecture, ensuring the
                      responsiveness of applications and working alongside
                      design team for web design features, among other duties.
                      Full Stack Developer will be required to see out a project
                      from conception to final product, requiring good
                      organizational skills and attention to detail.
                    </span>
                  </div>
                </div>
                <a
                  type="button"
                  href="javascript:void(0)"
                  className="mb-3 text-green-800 hover:text-green-900 hover:underline transition duration-300"
                  data-accordion-target="#accordian-all-departments"
                  aria-expanded="true"
                  aria-controls="accordian-all-departments"
                  onClick={toggleAccordion}
                >
                  {isOpen ? "Show Less" : "Show more"}
                </a>
              </div>
            </div>

            {/* Job requirements */}
            <div className="mb-[8px] bg-white p-[16px] rounded-lg border border-solid border-[#e6e6e6]">
              <div>
                <p className="mb-[16px] bg-white text-md font-semibold md:mb-[12px] md:text-xl md:font-bold">
                  Job Requirements
                </p>
                <div className="grid grid-cols-1 gap-[12px] md:grid-cols-2">
                  <div className="flex w-full space-x-[8px]">
                    <div className="mt-[2px] md:mt-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#8C8594"
                          fill-rule="evenodd"
                          d="M11.166 2.833a3.333 3.333 0 00-3.333 3.333h-2.5c-.997 0-1.77.978-1.656 2.092l.389 3.75c.097.946.809 1.658 1.655 1.658h5.502v-1.001c0-.483.348-.874.776-.874.43 0 .776.391.776.874v1.001h5.503c.846 0 1.557-.713 1.655-1.658l.388-3.75c.115-1.114-.658-2.092-1.655-2.092h-2.5a3.333 3.333 0 00-3.333-3.333h-1.667zm0 1.667c-.92 0-1.667.746-1.667 1.666h5c0-.92-.746-1.666-1.666-1.666h-1.667z"
                          clip-rule="evenodd"
                        ></path>
                        <path
                          fill="#8C8594"
                          d="M5.333 14.5h5.905v.905a.762.762 0 001.524 0V14.5h5.905c.503 0 .892.442.826.94l-.26 1.991a3.333 3.333 0 01-3.305 2.902H8.072a3.333 3.333 0 01-3.306-2.902l-.26-1.99a.833.833 0 01.827-.941z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:text-md md:leading-[24px]">
                        Experience
                      </p>
                      <p className="m-0 text-sm leading-[20px] text-[#190A28] md:text-md md:leading-[24px]">
                        Min. 3 Years
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full space-x-[8px]">
                    <div className="mt-[2px] md:mt-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        fill="none"
                        viewBox="0 0 25 24"
                      >
                        <g clip-path="url(#clip0_1601_75448)">
                          <path
                            fill="#8C8594"
                            d="M5.884 13.011v2.416c0 .628.35 1.212.911 1.513l4.385 2.347a1.772 1.772 0 001.684 0l4.384-2.347c.561-.3.912-.885.912-1.513v-2.416l-5.296 2.837a1.772 1.772 0 01-1.684 0l-5.296-2.837zm5.296-8.305L3.788 8.661a.858.858 0 000 1.513l7.392 3.955a1.772 1.772 0 001.684 0l7.05-3.774v5.08c0 .473.394.86.876.86a.871.871 0 00.877-.86v-5.51a.862.862 0 00-.456-.757l-8.347-4.462a1.82 1.82 0 00-1.684 0z"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1601_75448">
                            <path
                              fill="#fff"
                              d="M0 0H20V20H0z"
                              transform="translate(2.5 2)"
                            ></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:text-md md:leading-[24px]">
                        Education
                      </p>
                      <p className="m-0 text-sm leading-[20px] text-[#190A28] md:text-md md:leading-[24px]">
                        Graduate
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full space-x-[8px]">
                    <div className="mt-[2px] md:mt-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#8C8594"
                          d="M12.033 3C7.09 3 3.067 7.038 3.067 12c0 1.718.485 3.386 1.402 4.83l-1.453 3.83a.25.25 0 00.337.318l3.554-1.597A8.872 8.872 0 0012.034 21C16.978 21 21 16.962 21 12s-4.023-9-8.967-9zm-.563 11.508H7.684V9.492h3.663v.888H8.704v1.065h2.427v.87H8.704v1.29h2.766v.902zm4.846 0h-1.043l-2.034-3.559v3.559h-.973V9.492h1.094l1.984 3.496V9.493h.972v5.014z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:text-md md:leading-[24px]">
                        English Level
                      </p>
                      <p className="m-0 text-sm leading-[20px] text-[#190A28] md:text-md md:leading-[24px]">
                        Good (Intermediate / Advanced) English
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-[24px] hidden h-[1px] w-full bg-[#E8E7EA] md:block"></div>
            </div>

            {/* Job Role */}
            <div className="mb-[8px] bg-white p-[16px] md:py-0">
              <div>
                <p className="mb-[16px] text-md font-semibold md:mb-[12px] md:text-xl md:font-bold">
                  Job Role
                </p>
                <div className="grid grid-cols-1 gap-[12px] md:grid-cols-2">
                  <div className="flex w-full space-x-[8px]">
                    <div className="mt-[2px] md:mt-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <g clip-path="url(#clip0_1601_75488)">
                          <path
                            fill="#8C8594"
                            fill-rule="evenodd"
                            d="M13.25 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8.75h-4A1.75 1.75 0 0113.25 7V3zm5 4.25l-3.5-3.5V7a.25.25 0 00.25.25h3.25zm-9.25 4a.75.75 0 01.75.75v5a.75.75 0 01-1.5 0v-5a.75.75 0 01.75-.75zM12.75 16a.75.75 0 00-1.5 0v1a.75.75 0 001.5 0v-1zM15 13.25a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75z"
                            clip-rule="evenodd"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1601_75488">
                            <path fill="#fff" d="M0 0H24V24H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:text-md md:leading-[24px]">
                        Department
                      </p>
                      <p className="m-0 text-sm leading-[20px] text-[#190A28] md:text-md md:leading-[24px]">
                        Software Engineering
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full space-x-[8px]">
                    <div className="mt-[2px] md:mt-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        fill="none"
                        viewBox="0 0 25 24"
                      >
                        <path
                          fill="#fff"
                          d="M0 0H20V20H0z"
                          transform="translate(2.5 2)"
                        ></path>
                        <path
                          fill="#8C8594"
                          d="M12.5 3.667A8.333 8.333 0 1020.832 12a8.343 8.343 0 00-8.334-8.333zm2.96 10.745l-3.333-1.666a.834.834 0 01-.461-.746V7.834a.833.833 0 111.667 0v3.651l2.872 1.437a.834.834 0 01-.745 1.49z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:text-md md:leading-[24px]">
                        Employment Type
                      </p>
                      <p className="m-0 text-sm leading-[20px] text-[#190A28] md:text-md md:leading-[24px]">
                        Full Time
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full space-x-[8px]">
                    <div className="mt-[2px] md:mt-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path fill="#fff" d="M0 0H24V24H0z"></path>
                        <path
                          fill="#8C8594"
                          d="M7 15H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2zM19 15h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2zM13 3h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2z"
                        ></path>
                        <path
                          fill="#8C8594"
                          fill-rule="evenodd"
                          d="M8 12.9A1.1 1.1 0 006.9 14v1a.9.9 0 11-1.8 0v-1A2.9 2.9 0 018 11.1h8a2.9 2.9 0 012.9 2.9v1a.9.9 0 11-1.8 0v-1a1.1 1.1 0 00-1.1-1.1H8z"
                          clip-rule="evenodd"
                        ></path>
                        <path
                          fill="#8C8594"
                          fill-rule="evenodd"
                          d="M12 8.1a.9.9 0 01.9.9v3a.9.9 0 11-1.8 0V9a.9.9 0 01.9-.9z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:text-md md:leading-[24px]">
                        Role / Category
                      </p>
                      <p className="m-0 text-sm leading-[20px] text-[#190A28] md:text-md md:leading-[24px]">
                        Software Development
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full space-x-[8px]">
                    <div className="mt-[2px] md:mt-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        fill="none"
                        viewBox="0 0 25 24"
                      >
                        <path
                          fill="#8C8594"
                          d="M12.5 21.416l-2.791-2.75H5.834v-3.875L3.084 12l2.75-2.792V5.333h3.875l2.792-2.75 2.791 2.75h3.875v3.875L21.917 12l-2.75 2.791v3.875h-3.875l-2.791 2.75zm0-4.416c1.39 0 2.57-.486 3.542-1.459.973-.972 1.459-2.152 1.459-3.541 0-1.39-.486-2.57-1.459-3.542C15.07 7.486 13.89 7 12.501 7c-.361 0-.723.034-1.084.104-.36.07-.701.18-1.02.333a5.048 5.048 0 012.135 1.865A4.87 4.87 0 0113.334 12a4.87 4.87 0 01-.802 2.698 5.048 5.048 0 01-2.136 1.864c.32.153.66.264 1.021.333.361.07.723.105 1.084.105z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:text-md md:leading-[24px]">
                        Shift
                      </p>
                      <p className="m-0 text-sm leading-[20px] text-[#190A28] md:text-md md:leading-[24px]">
                        Day Shift
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-[24px] hidden h-[1px] w-full bg-[#E8E7EA] md:block"></div>
            </div>

            {/* Interview & address details */}
            <div className="bg-white p-[16px] md:py-0">
              <div>
                <p className="mb-[16px] text-md font-semibold md:mb-[12px] md:text-xl md:font-bold">
                  Interview & address details
                </p>
                <div className="flex flex-col gap-[12px]">
                  <div className="flex w-full space-x-[8px]">
                    <div className="mt-[2px] md:mt-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <g clip-path="url(#clip0_1601_75488)">
                          <path
                            fill="#8C8594"
                            fill-rule="evenodd"
                            d="M13.25 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8.75h-4A1.75 1.75 0 0113.25 7V3zm5 4.25l-3.5-3.5V7a.25.25 0 00.25.25h3.25zm-9.25 4a.75.75 0 01.75.75v5a.75.75 0 01-1.5 0v-5a.75.75 0 01.75-.75zM12.75 16a.75.75 0 00-1.5 0v1a.75.75 0 001.5 0v-1zM15 13.25a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75z"
                            clip-rule="evenodd"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1601_75488">
                            <path fill="#fff" d="M0 0H24V24H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:text-md md:leading-[24px]">
                        Company Address
                      </p>
                      <p className="m-0 text-sm leading-[20px] text-[#190A28] md:text-md md:leading-[24px]">
                        Salt Lake Road, DD Block, Sector 1, Bidhannagar,
                        Kolkata, West Bengal, India
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full space-x-[8px]">
                    <div className="mt-[2px] md:mt-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        fill="none"
                        viewBox="0 0 25 24"
                      >
                        <path
                          fill="#fff"
                          d="M0 0H20V20H0z"
                          transform="translate(2.5 2)"
                        ></path>
                        <path
                          fill="#8C8594"
                          d="M12.5 3.667A8.333 8.333 0 1020.832 12a8.343 8.343 0 00-8.334-8.333zm2.96 10.745l-3.333-1.666a.834.834 0 01-.461-.746V7.834a.833.833 0 111.667 0v3.651l2.872 1.437a.834.834 0 01-.745 1.49z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:text-md md:leading-[24px]">
                        Interview mode
                      </p>
                      <p className="m-0 text-sm leading-[20px] text-[#190A28] md:text-md md:leading-[24px]">
                        Online/Telephonic
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-[24px] hidden h-[1px] w-full bg-[#E8E7EA] md:block"></div>
            </div>

            {/* Posted by */}
            <div class="bg-white p-[16px] rounded-lg border border-solid border-[#e6e6e6]">
              <p class="md:font-md m-0 text-sm text-[#8C8594] md:text-md md:leading-[24px]">
                Job posted by{" "}
                <span class="font-semibold text-[#190A28]">
                  {data?.company}
                </span>
              </p>
            </div>
          </div>
        </divName>
        <div className="mb-[16px] flex h-full w-full flex-col space-y-[12px] md:mb-0 md:w-[335px]">
          {/* steps to apply */}
          <div className="relative mx-[12px] md:m-0 md:p-0">
            <img
              src="/ApplicationSteps.avif"
              alt=""
              className="h-auto w-auto"
            />
          </div>

          {/* similar jobs */}

          <div className="rounded-0 border-[#E8E7EA] bg-[#EBF3FE] md:rounded-xl md:border md:border-solid md:bg-white md:p-[16px]">
            <h3 className="text-green-800 font-bold">Similar jobs</h3>

            {similarJobsData && similarJobsData?.map((item) => {
                return (
                  <Link to={`${item?.id}`}>
                    <div
                      className="m-3 p-4 flex flex-col justify-evenly gap-2 border rounded-lg shadow-md cursor-pointer"
                      onClick={() => setJobData(item)}
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
                            <div className="text-lg font-semibold">
                              {item?.position}
                            </div>
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

            <p className="m-0 mt-[16px] hidden cursor-pointer rounded border border-solid bg-[#EAF8F4] px-[16px] py-[8px] text-center text-sm font-semibold text-[#1F8268] md:block">
              Show more
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
