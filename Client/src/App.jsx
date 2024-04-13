import React from "react";
import Header from "./components/layout/Header/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/layout/Footer/Footer";

import { Toaster } from "sonner";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Authentication/Candidate/Login";
// import SignUp from "./pages/Authentication/Candidate/SignUp";
import Forget from "./pages/Authentication/Candidate/Forget";
import OtpVerification from "./pages/Authentication/Candidate/OtpVerification";
import SendOtp from "./pages/Authentication/Candidate/SendOtp";
import Pricing from "./components/Home/Pricing/Pricing";
import useAuth from "./helper/authHelper";

import UserProfile from "./components/UserProfile/UserProfile";

//importing job postings

import Jobs from "./pages/Jobs/Jobs";
import CreateJobStepForm from "./components/EmployeeProfile/CreateJobStepForm";

import PricePlans from "./components/EmployeeProfile/steps/PricePlans";
import Business from "./pages/business/Business";
import MyJobs from "./pages/business/MyJobs";
import SignUp from "./pages/Authentication/SignUp";
import SignIn from "./pages/Authentication/SignIn";
import { Navigate } from "react-router-dom";
import BusinessDashboard from "./pages/business/BusinessDashboard";
import BusinessProfile from "./pages/business/BusinessProfile";
import CandidateProfile from "./pages/candidateProfile/CandidateProfile";
import Updateprofile from "./pages/candidateProfile/Updateprofile";
import HowWeWorks from "./pages/howWeWorks/HowWeWorks";
import ContactUs from "./pages/contactUs/ContactUs";
import JobApplicants from "./pages/business/JobApplicants";

const App = () => {
  const { isUserLoggedIn, userMetaData } = useAuth();
  const router = createBrowserRouter([
    {
      path: "/",
      element: isUserLoggedIn && userMetaData?.userType === 'Business' ? <Navigate to='/business' /> : <Layout />,

      children: [
        {
          path: "/",
          element: <Home />,

        },

        {
          path: "/contact",
          element: <ContactUs />,

        },
        {
          path: "/signIn",
          element: isUserLoggedIn ? <Navigate to='/' /> : <SignIn />,
        },
        {
          path: "/signUp",
          element: isUserLoggedIn ? <Navigate to='/' /> : <SignUp />,
        },


        {
          path: "/forget",
          element: <Forget />,
        },

        {
          path: "/otpVerification",
          element: <OtpVerification />,
        },
        {
          path: "/sendOtp",
          element: <SendOtp />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },


        // job posting path
        {
          path: "/jobs/:jobType/:jobId",
          element: <Jobs />
        },

        {
          path: "/jobs/:jobType/:jobId/:postingId",
          element: <Jobs />
        },

        // job application

        {
          path: "/candidateProfile",
          element: isUserLoggedIn && userMetaData?.userType === 'Candidate' ? <CandidateProfile /> : <Navigate to='/' />,
        },
        {
          path: "/updateProfile",
          element: isUserLoggedIn && userMetaData?.userType === 'Candidate' ? <Updateprofile /> : <Navigate to='/' />
        },

        {
          path: "/test",
          element: <UserProfile />
        },


      ],

    },
    {
      path: "/business",
      element: userMetaData?.userType === 'Business' ? <Business /> : <Navigate to="/" replace={true} />,
      children: [
        {
          path: '',
          element: <BusinessDashboard />
        },
        {
          path: ':companyId/createJob',
          element: <CreateJobStepForm />
        },

        {
          path: 'myJobs/:companyId',
          element: <MyJobs />
        },
        {
          path: ':jobId/jobApplicants',
          element: <JobApplicants />
        },
        {
          path: 'pricePlans',
          element: <PricePlans />
        },
        {
          path: 'profile',
          element: <BusinessProfile />
        }
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </div>
  );
};

export default App;
