import React from "react";
import Header from "./components/layout/Header/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/layout/Footer/Footer";

import { Toaster } from "sonner";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Authentication/Candidate/Login";
import SignUp from "./pages/Authentication/Candidate/SignUp";
import BusinessSignup from "./pages/Authentication/Business/BusinessSignup";
import BusinessLogin from "./pages/Authentication/Business/BusinessLogin";
import LoginAsInvestor from "./pages/Authentication/Investor/LoginAsInvestor";
import Forget from "./pages/Authentication/Candidate/Forget";
import OtpVerification from "./pages/Authentication/Candidate/OtpVerification";
import SendOtp from "./pages/Authentication/Candidate/SendOtp";
import Pricing from "./components/Home/Pricing/Pricing";
import useAuth from "./helper/authHelper";

import UserProfile from "./components/UserProfile/UserProfile";

//importing job postings
import JobPostings from "./components/JobPostings/JobPostings";
import JobDetails from "./components/JobDetails/JobDetails";
import Jobs from "./pages/Jobs/Jobs";
import CreateJobStepForm from "./components/EmployeeProfile/CreateJobStepForm";
import Businnes from "./components/layout/Business";
import Business from "./components/layout/Business";
import PricePlans from "./components/EmployeeProfile/steps/PricePlans";

const App = () => {
  const { isUserLoggedIn } = useAuth();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <Home />,

        },
        {
          path: "/candidate-login",
          element: <Login />,
        },
        {
          path: "/candidate-signup",
          element: <SignUp />,
        },
        {
          path: "/business-signup",
          element: <BusinessSignup />,
        },
        {
          path: "/business-login",
          element: <BusinessLogin />,
        },
        {
          path: "/investor-login",
          element: <LoginAsInvestor />,
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
        {
          path: "/dashboard",

          element: isUserLoggedIn ? (
            <>
              {" "}
              <h2>Logged in</h2>{" "}
            </>
          ) : (
            <h2>Not logged in</h2>
          ),
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

        {
          path: "/test",
          element: <UserProfile />
        },
        {
          path: "/business",
          element: <Business />,
          children: [
            {
              path: 'stepForm',
              element: <CreateJobStepForm />
            },
            {
              path: 'pricePlans',
              element: <PricePlans />
            }
          ]
        },

      ],
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
