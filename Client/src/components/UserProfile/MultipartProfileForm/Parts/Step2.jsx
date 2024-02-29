import React from "react";

export default function Step2({ navigateToFormStep, locationData }) {
  return (
    <div>
      <section id="step-2" class="form-step d-none">
        <h2 class="font-normal">Social Profiles</h2>
        {/* <!-- Step 2 input fields --> */}
        <div class="mt-3">Step 2 input fields goes here..</div>
        <div
          class={`mt-3 flex justify-center font-medium align-center  ${
            locationData.length == 0 && "hidden"
          }`}
        >
          {/* <button
            class="button btn-navigate-form-step"
            type="button"
            step_number="1"
          >
            Prev
          </button> */}
          <button
            className={`button btn-navigate-form-step h-10 px-52 text-white align-center font-medium ${
              locationData.length == 0 && "hidden"
            }`}
            type="button"
            step_number="3"
            onClick={() => navigateToFormStep(3)}
            style={{
              color: "white",
              background: "rgb(31, 130, 104)",
            }}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}
