import React, { useEffect, useState } from "react";
import JobPostings from "../../components/JobPostings/JobPostings";
import JobDetails from "../../components/JobDetails/JobDetails";
import { useParams, useSearchParams } from "react-router-dom";

import axios from "axios";

const Jobs = () => {
  const { jobType, jobId, postingId } = useParams();

  const [jobData, setJobData] = useState(undefined);
  // let [searchParams, setSearchParams] = useSearchParams();
  const [postingData, setPostingData] = useState([]);

  const getData = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL_LOCAL}job/jobs/${jobId}`
      );
      setPostingData(result.data.data);
    } catch (error) {
      console.log('error is::',error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
      {!postingId && (
        <JobPostings
          data={postingData}
          jobType={jobType}
          setJobData={setJobData}
        />
      )}
      {postingId && (
        <JobDetails data={jobData} jobType={jobType} jobId={jobId} setJobData={setJobData} />
      )}
    </>
  );
};

export default Jobs;
