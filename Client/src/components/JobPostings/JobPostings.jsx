import React, { useEffect, useState } from "react";
import "./JobPostings.css";
import { Link } from "react-router-dom";
import JobFilter from "../JobFilter/JobFilter";

import { Circles } from "react-loader-spinner";

const JobPostings = ({
  postingData,
  setJobData,
  setApiUrl,
  isLoading,
  setIsLoading,
}) => {
  // //jobDetail state
  // const [isJobViewed, setIsJobViewd] = useState(false);

  //state for window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  return (
    <div className="py-10">
      <div className="w-full text-xl font-bold text-center ">
        Jobs Found: {postingData.length}
      </div>
      <div className="w-full flex justify-center">
        {windowWidth > 950 && (
          <>
            <JobFilter setApiUrl={setApiUrl} />
          </>
        )}
        {isLoading ? (
          <>
            <div
              className="flex flex-row justify-center pt-[10%]"
              style={{ maxWidth: "650px", width: "100%" }}
            >
              <Circles
                height="100"
                width="100"
                color="#4d64e5"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperclassName=""
                visible={true}
              />
            </div>
          </>
        ) : (
          <>
            {/* card collection */}
            <div
              className="flex flex-col"
              style={{ maxWidth: "650px", width: "100%" }}
            >
              {/* card */}
              {postingData &&
                postingData?.map((item) => {
                  return (
                    <Link to={`${item?._id}`} key={item?._id}>
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
                            {item?.location}
                          </span>
                        </div>
                        <div className="w-full flex">
                          <div className="flex flex-col justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              fill="currentColor"
                              className="bi bi-currency-rupee"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
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
                            item?.tags?.map((tag) => {
                              return (
                                <div
                                key={tag?._id}
                                  className="bg-gray-300 text-gray-700 rounded-sm px-2"
                                  style={{ minWidth: "auto" }}
                                >
                                  {tag?.name}
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default JobPostings;
