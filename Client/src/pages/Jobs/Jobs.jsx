import React, { useEffect, useState } from "react";
import JobPostings from "../../components/JobPostings/JobPostings";
import JobDetails from "../../components/JobDetails/JobDetails";
import { useParams, useSearchParams } from "react-router-dom";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { getJobs } from "../../features/actions/jobActions";

import {Circles} from 'react-loader-spinner'

const Jobs = () => {
  const [postingData, setPostingData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const { jobsData } = useSelector(state => state.jobs)
  const { jobType, jobId, postingId } = useParams();
  const dispatch = useDispatch();

  const [jobData, setJobData] = useState(undefined);
  // let [searchParams, setSearchParams] = useSearchParams();

  const getData = async () => {
    
    try {
      await axios.get(
        `${import.meta.env.VITE_API_BASE_URL_LOCAL}job/jobs/${jobId}`
      ).then((result) => {
        setPostingData(result.data.data);
        setIsLoading(false)
      })
    } catch (error) {
      setIsLoading(false)
      console.log("error is::", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   setPostingData(jobsData);
  // }, [jobsData])

  // setPostingData(result)

  // let postingData = [
  //     {
  //       id:'1',
  //       position: "Front end dev",
  //       company: "Pearl Org",
  //       companyImg: "/no-image.png",
  //       type: "Fresher",
  //       minSalary: 100000,
  //       maxSalary: 500000,
  //       tags: ["Fresher role", "Full Time", "Basic English", "JavaScript"],
  //     },

  //     {
  //       id:'2',
  //       position: "Front end dev",
  //       company: "Pearl Org",
  //       companyImg: "/no-image.png",
  //       type: "Fresher",
  //       minSalary: 100000,
  //       maxSalary: 500000,
  //       tags: ["Fresher role", "Full Time", "Basic English", "JavaScript"],
  //     },

  //     {
  //       id:'3',
  //       position: "Front end dev",
  //       company: "Pearl Org",
  //       companyImg: "/no-image.png",
  //       type: "Fresher",
  //       minSalary: 100000,
  //       maxSalary: 500000,
  //       tags: ["Fresher role", "Full Time", "Basic English", "JavaScript"],
  //     },

  //     {
  //       id:'4',
  //       position: "Front end dev",
  //       company: "Pearl Org",
  //       companyImg: "/no-image.png",
  //       type: "Fresher",
  //       minSalary: 100000,
  //       maxSalary: 500000,
  //       tags: ["Fresher role", "Full Time", "Basic English", "JavaScript"],
  //     },

  //     {
  //       id:'5',
  //       position: "Front end dev",
  //       company: "Pearl Org",
  //       companyImg: "/no-image.png",
  //       type: "Fresher",
  //       minSalary: 100000,
  //       maxSalary: 500000,
  //       tags: ["Fresher role", "Full Time", "Basic English", "JavaScript"],
  //     },

  //     {
  //       id:'6',
  //       position: "Front end dev",
  //       company: "Pearl Org",
  //       companyImg: "/no-image.png",
  //       type: "Fresher",
  //       minSalary: 100000,
  //       maxSalary: 500000,
  //       tags: ["Fresher role", "Full Time", "Basic English", "JavaScript"],
  //     },

  //     {
  //       id:'7',
  //       position: "Front end dev",
  //       company: "Pearl Org",
  //       companyImg: "/no-image.png",
  //       type: "Fresher",
  //       minSalary: 100000,
  //       maxSalary: 500000,
  //       tags: ["Fresher role", "Full Time", "Basic English", "JavaScript"],
  //     },

  //     {
  //       id:'8',
  //       position: "Front end dev",
  //       company: "Pearl Org",
  //       companyImg: "/no-image.png",
  //       type: "Fresher",
  //       minSalary: 100000,
  //       maxSalary: 500000,
  //       tags: ["Fresher role", "Full Time", "Basic English", "JavaScript"],
  //     },

  //     {
  //       id:'9',
  //       position: "Front end dev",
  //       company: "Pearl Org",
  //       companyImg: "/no-image.png",
  //       type: "Fresher",
  //       minSalary: 100000,
  //       maxSalary: 500000,
  //       tags: ["Fresher role", "Full Time", "Basic English", "JavaScript"],
  //     },
  // ];

  return (
    <>
      {isLoading ? (
        <>
        <div className="h-[80vh] w-full flex flex-row justify-center pt-[10%]">
          <Circles
            height="100"
            width="100"
            color="#4d64e5"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
        </>
      ) : (
        <>
          {!postingId && (
            <JobPostings
              data={postingData}
              setPostingData={postingData}
              jobType={jobType}
              setJobData={setJobData}
            />
          )}
          {postingId && (
            <JobDetails
              data={jobData}
              jobType={jobType}
              jobId={jobId}
              setJobData={setJobData}
            />
          )}
        </>
      )}
    </>
  );
};

export default Jobs;
