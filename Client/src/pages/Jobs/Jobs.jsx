import React, { useEffect, useState } from "react";
import JobPostings from "../../components/JobPostings/JobPostings";
import JobDetails from "../../components/JobDetails/JobDetails";
import { useParams, useSearchParams } from "react-router-dom";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { getJobs } from "../../features/actions/jobActions";


const Jobs = () => {
  const [postingData, setPostingData] = useState([]);
  const [apiUrl, setApiUrl] = useState("")
  const [isLoading, setIsLoading] = useState(true);
  // const { jobsData } = useSelector(state => state.jobs)
  const { jobType, jobId, postingId } = useParams();
  const dispatch = useDispatch();

  const [jobData, setJobData] = useState(undefined);
  // let [searchParams, setSearchParams] = useSearchParams();

 // API functions
 const getData = async (apiUrl) => {
  setIsLoading(true)
  try {
    await axios.get(
      `${import.meta.env.VITE_API_BASE_URL_LOCAL}job/jobs/${jobId}${apiUrl}`
    ).then((result) => {
      setPostingData(result.data.data);
      setIsLoading(false)
    })
  } catch (error) {
    setIsLoading(false)
    console.log("error is::", error);
  }
};

  // useEffects------------------------

  // scroll to top effect
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    // NOTE TO SELF: don't start with -> /
    setApiUrl(`?minSalary=0`)
  }, [jobId])

  useEffect(() => {
    console.log(apiUrl)
    if(!apiUrl.length) return
    getData(apiUrl);
  }, [apiUrl]);

 


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
      {
        <>
          {!postingId && (
            <JobPostings
              postingData={postingData}
              jobType={jobType}
              setJobData={setJobData}
              setApiUrl={setApiUrl}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
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
      }
    </>
  );
};

export default Jobs;
