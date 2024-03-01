import React from "react";
import "./JobDetails.css";

const JobDetails = ({ data }) => {
  console.log("detail for: " + data);
  return (
    <>
      <div className="w-full flex gap-4 justify-center">
        {/* Job card */}
        <div className="" style={{ maxWidth: "650px", width: "100%" }}>
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
            <div class="rounded-lg bg-[#edebee80] px-[16px] py-[12px]">
              <div class="md:grid md:grid-cols-3">
                <div class="flex justify-between md:flex-col md:gap-[8px]">
                  <p class="m-0 text-xs text-[#8C8594] md:text-sm">Fixed</p>
                  <p class="m-0 flex items-center text-xs font-semibold text-[#8C8594] md:text-sm">
                    ₹ {data?.minSalary} ₹ {data?.maxSalary}
                  </p>
                </div>
                <div class="my-[12px] h-[1px] w-full bg-[#8C8594] opacity-20 md:hidden"></div>
                <div class="flex justify-between md:flex-col md:gap-[8px]">
                  <p class="m-0 text-xs text-[#8C8594] md:text-sm">
                    Earning Potential
                  </p>
                  <p class="m-0 text-xs font-semibold text-[#8C8594] md:text-sm">
                    ₹ {data?.maxSalary}
                  </p>
                </div>
              </div>
            </div>

            <div class="flex w-full items-center gap-[16px] md:text-sm">
              <div class="w-full">
                <a href="javascript:void(0)">
                  <div class="w-full rounded border border-solid bg-[#1F8268] px-[16px] py-[8px] text-center font-semibold text-white">
                    <div class="flex w-full cursor-pointer items-center justify-center space-x-[4px]">
                      <p class="m-0 whitespace-nowrap text-center text-sm">
                        Apply for job
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="flex cursor-pointer items-center gap-1 rounded border border-solid border-[#1F8268] px-[16px] py-[8px] font-semibold text-[#1F8268]">
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
          </div>
        </div>
        <div className="">
          <div className="flex flex-col gap-2 rounded-lg border shadow-md bg">
            <div>Get your dream job in 3 simple steps:</div>
            <div className="flex gap-1">
              <span>Apply for job</span>
              <span>Create profile</span>
              <span>Schedule interview</span>
              <span>Get Hired</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
