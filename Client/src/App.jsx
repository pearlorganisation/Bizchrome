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

        // job application

      

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
          path: ':companyId/createJob',
          element: <CreateJobStepForm />
        },
        {
          path: 'myJobs/:companyId',
          element: <MyJobs />
        },
        {
          path: 'pricePlans',
          element: <PricePlans />
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
