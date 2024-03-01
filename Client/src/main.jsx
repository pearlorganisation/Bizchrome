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
import OtpVerification from "./pages/Authentication/Candidate/OtpVerification.jsx";
import store from "./Store/configureStore.js";


//Simulation of context api
// const { loggedInUserData, isUserLoggedIn } = useAuth();
//

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
