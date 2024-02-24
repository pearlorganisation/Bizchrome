import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Authentication/Candidate/Login.jsx";
import SignUp from "./pages/Authentication/Candidate/SignUp.jsx";
import BusinessSignup from "./pages/Authentication/Business/BusinessSignup.jsx";
import BusinessLogin from "./pages/Authentication/Business/BusinessLogin.jsx";
import LoginAsInvestor from "./pages/Authentication/Investor/LoginAsInvestor.jsx";
import Forget from "./pages/Authentication/Candidate/Forget.jsx";
import { Provider } from "react-redux";
import OtpVarfication from "./pages/Authentication/Candidate/OtpVarfication.jsx";
import store from "./Store/configureStore.js";
import SendOtp from "./pages/Authentication/Candidate/SendOtp.jsx";
import Pricing from "./components/Home/Pricing/Pricing.jsx";

//Simulation of context api
// const { loggedInUserData, isUserLoggedIn } = useAuth();
//
const isUserLoggedIn = false
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

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
        path: "/otpVarfication",
        element: <OtpVarfication />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
