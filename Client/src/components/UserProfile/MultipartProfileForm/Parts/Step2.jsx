import React from "react";

export default function Step2({ navigateToFormStep, locationData }) {
  return (
    <div>
      <section id="step-2" class="form-step d-none">
        {/* <!-- Step 2 input fields --> */}
        <div className="border-red-500">
          <div>
            <h4
              className="font-roboto font-[600] "
              style={{ color: `rgb(25 10 40` }}
            >
              Your Highest Education
            </h4>
            <div
              className="w-3/4 grid grid-cols-4 gap-3 my-5 mx-auto"
              // style={{ border: "4px solid red" }}
            >
              <div
                className={` flex justify-center rounded-2xl font-roboto border font-[40] w-full `}
                style={{
                  color: ` rgba(0, 0, 0, 0.87) `,
                  border: "2px solid grey",
                  background
                }}
              >
                <button>10th or Below 10th</button>
              </div>
              <div
                className="flex justify-center rounded-2xl font-roboto border font-[40]"
                style={{
                  color: ` rgba(0, 0, 0, 0.87) `,
                  border: "2px solid grey",
                }}
              >
                <button>12th Pass</button>
              </div>
              <div
                className="flex justify-center rounded-2xl font-roboto border font-[40]"
                style={{
                  color: ` rgba(0, 0, 0, 0.87) `,
                  border: "2px solid grey",
                }}
              >
                <button>Diploma</button>
              </div>
              <div
                className="flex justify-center rounded-2xl font-roboto border font-[40]"
                style={{
                  color: ` rgba(0, 0, 0, 0.87) `,
                  border: "2px solid grey",
                }}
              >
                <button>ITI</button>
              </div>
              <div
                className="flex justify-center rounded-2xl font-roboto border font-[40]"
                style={{
                  color: ` rgba(0, 0, 0, 0.87) `,
                  border: "2px solid grey",
                }}
              >
                <button>Graduate</button>
              </div>
              <div
                className="flex justify-center rounded-2xl font-roboto border font-[40]"
                style={{
                  color: ` rgba(0, 0, 0, 0.87) `,
                  border: "2px solid grey",
                }}
              >
                <button>Post Graduate</button>
              </div>
            </div>
          </div>
        </div>

        <div
          class={`mt-3 flex justify-center font-medium align-center  ${
            locationData.length == 0 && "hidden"
          }`}
        >
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
