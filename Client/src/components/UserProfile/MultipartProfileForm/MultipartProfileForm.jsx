import React, { useEffect, useState } from "react";
import "./form.modules.css";
import { useSelector, useDispatch } from "react-redux";
import { findLocation } from "../../../features/actions/Common/findLocationAction";
import Loader from "../Loader";
import Step2 from "./Parts/Step2";
import Step3 from "./Parts/Step3";
import Step1 from "./Parts/Step1";
export const MultipartProfileForm = () => {
  const [formValue, setFormValue] = useState(false);
  const dispatch = useDispatch();
  const { isFetchLocationDataLoading, isFetchLocationError, locationData } =
    useSelector((store) => store.location);

  //TO get the location
  const getLocation = (e) => {
    e.preventDefault();
    // Check if geolocation is available in the browser
    if ("geolocation" in navigator) {
      // Get the user's current location

      navigator?.geolocation?.getCurrentPosition(
        function (position) {
          // The user's latitude and longitude are in position.coords.latitude and position.coords.longitude
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

          const payload = { latitude, longitude };
          dispatch(findLocation(payload));
        },
        function (error) {
          // Handle errors, if any
          switch (error.code) {
            case error.PERMISSION_DENIED:
              alert("User denied the request for geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              alert("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              alert("An unknown error occurred.");
              break;
          }
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  };

  //TO navigate b/w pages
  const navigateToFormStep = (stepNumber) => {
    /**
     * Hide all form steps.
     */
    document.querySelectorAll(".form-step").forEach((formStepElement) => {
      formStepElement.classList.add("d-none");
    });
    document
      .querySelectorAll(".form-stepper-list")
      .forEach((formStepHeader) => {
        formStepHeader.classList.add("form-stepper-unfinished");
        formStepHeader.classList.remove(
          "form-stepper-active",
          "form-stepper-completed"
        );
      });
    /**
     * Show the current form step (as passed to the function).
     */
    document.querySelector("#step-" + stepNumber).classList.remove("d-none");
    /**
     * Select the form step circle (progress bar).
     */
    const formStepCircle = document.querySelector(
      'li[step="' + stepNumber + '"]'
    );
    /**
     * Mark the current form step as active.
     */
    formStepCircle.classList.remove(
      "form-stepper-unfinished",
      "form-stepper-completed"
    );
    formStepCircle.classList.add("form-stepper-active");
    /**
     * Loop through each form step circles.
     * This loop will continue up to the current step number.
     * Example: If the current step is 3,
     * then the loop will perform operations for step 1 and 2.
     */
    for (let index = 0; index < stepNumber; index++) {
      /**
       * Select the form step circle (progress bar).
       */
      const formStepCircle = document.querySelector('li[step="' + index + '"]');
      /**
       * Check if the element exist. If yes, then proceed.
       */
      if (formStepCircle) {
        /**
         * Mark the form step as completed.
         */
        formStepCircle.classList.remove(
          "form-stepper-unfinished",
          "form-stepper-active"
        );
        formStepCircle.classList.add("form-stepper-completed");
      }
    }
  };

  return (
    <div>
      <div id="multi-step-form-container" >
        {/* <!-- Form Steps / Progress Bar --> */}
        <ul className="form-stepper form-stepper-horizontal text-center mx-auto pl-0">
          {/* <!-- Step 1 --> */}
          <li
            className="form-stepper-active text-center form-stepper-list"
            step="1"
          >
            <a className="mx-2">
              <span className="form-stepper-circle">
                <span>1</span>
              </span>
              <div className="label">About me</div>
            </a>
          </li>
          {/* <!-- Step 2 --> */}
          <li
            className="form-stepper-unfinished text-center form-stepper-list"
            step="2"
          >
            <a className="mx-2">
              <span className="form-stepper-circle text-muted">
                <span>2</span>
              </span>
              <div className="label text-muted">Education</div>
            </a>
          </li>
          {/* <!-- Step 3 --> */}
          <li
            className="form-stepper-unfinished text-center form-stepper-list"
            step="3"
          >
            <a className="mx-2">
              <span className="form-stepper-circle text-muted">
                <span>3</span>
              </span>
              <div className="label text-muted">Experience</div>
            </a>
          </li>
        </ul>
        {/* <!-- Step Wise Form Content --> */}
        <form
          id="userAccountSetupForm"
          name="userAccountSetupForm"
          enctype="multipart/form-data"
          method="POST"
        >
          {/* <!-- Step 1 Content --> */}
          <Step1
            isFetchLocationDataLoading={isFetchLocationDataLoading}
            locationData={locationData}
            getLocation={getLocation}
            Loader={Loader}
            navigateToFormStep={navigateToFormStep}
          />
          {/* <!-- Step 2 Content, default hidden on page load. --> */}
          <Step2
            navigateToFormStep={navigateToFormStep}
            locationData={locationData}
          />
          {/* <!-- Step 3 Content, default hidden on page load. --> */}
          <Step3
            navigateToFormStep={navigateToFormStep}
            locationData={locationData}
          />
        </form>
      </div>
    </div>
  );
};
