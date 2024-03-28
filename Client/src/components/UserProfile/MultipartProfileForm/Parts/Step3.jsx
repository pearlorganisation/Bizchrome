import React from "react";

export default function Step3({ navigateToFormStep, locationData }) {
  return (
    <div>
      <section id="step-3" className="form-step d-none">
        <h2 className="font-normal">Personal Details</h2>
        {/* <!-- Step 3 input fields --> */}
        <div className="mt-3">Step 3 input fields goes here..</div>
        <div
          className={`mt-3 flex justify-center font-medium align-center  ${
            locationData.length == 0 && "hidden"
          }`}
        >
 
          <button className={`button submit-btn" type="submit  h-10 px-52 text-white align-center font-medium ${
              locationData.length == 0 && "hidden"
            }`} >
            Save
          </button>
        </div>
      </section>
    </div>
  );
}
