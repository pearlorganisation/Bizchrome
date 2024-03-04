import React, { useState } from "react";
import Select from "react-select";
export default function Step2({ navigateToFormStep, locationData }) {

// const {}



  const [isSelected, SetIsSelected] = useState(0);
  const [triggerNext, SetTriggerNext] = useState(0);
  console.log("This is selected ", isSelected);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const dropdowns = {
    1: false,
    2: false,
    3: `Diploma`,
    4: `ITI`,
    5: `Graduation`,
    6: `Post Graduation`,
  };

  //Make an api call for the courses form the data base.

  return (
    <div>
      <section id="step-2" class="form-step d-none">
        {/* <!-- Step 2 input fields --> */}
        <div className="border-red-500">
          <div>
            <h4
              className="font-roboto font-[600]  "
              style={{ color: `rgb(25 10 40` }}
            >
              Your Highest Education
            </h4>
            <div
              className="w-3/4 grid grid-cols-4 gap-3 my-5 mx-auto"
              // style={{ border: "4px solid red" }}
            >
              <div
                className={` flex justify-center rounded-2xl font-roboto border font-[40] w-full leading-6`}
                style={{
                  color: isSelected === 1 ? `white` : `#37283a`,
                  border: "2px solid grey",
                  background: isSelected === 1 ? `#37283a` : `white`,
                }}
              >
                <button type="button" onClick={() => SetIsSelected(1)}>
                  10th or Below 10th
                </button>
              </div>
              <div
                className="flex justify-center rounded-2xl font-roboto border font-[40] leading-6"
                style={{
                  color: isSelected === 2 ? `white` : `#37283a`,
                  border: "2px solid grey",

                  background: isSelected === 2 ? `#37283a` : `white`,
                }}
              >
                <button type="button" onClick={() => SetIsSelected(2)}>
                  12th Pass
                </button>
              </div>
              <div
                className="flex justify-center rounded-2xl font-roboto border font-[40] leading-6"
                style={{
                  color: isSelected === 3 ? `white` : `#37283a`,
                  border: "2px solid grey",
                  background: isSelected === 3 ? `#37283a` : `white`,
                }}
              >
                <button type="button" onClick={() => SetIsSelected(3)}>
                  Diploma
                </button>
              </div>
              <div
                className="flex justify-center rounded-2xl font-roboto border font-[40] leading-6"
                style={{
                  color: isSelected === 4 ? `white` : `#37283a`,
                  border: "2px solid grey",
                  background: isSelected === 4 ? `#37283a` : `white`,
                }}
              >
                <button type="button" onClick={() => SetIsSelected(4)}>
                  ITI
                </button>
              </div>
              <div
                className="flex justify-center rounded-2xl font-roboto border font-[40] leading-6"
                style={{
                  color: isSelected === 5 ? `white` : `#37283a`,
                  border: "2px solid grey",
                  background: isSelected === 5 ? `#37283a` : `white`,
                }}
              >
                <button type="button" onClick={() => SetIsSelected(5)}>
                  Graduate
                </button>
              </div>
              <div
                className="flex justify-center rounded-2xl font-roboto border font-[40] leading-6"
                style={{
                  color: isSelected === 6 ? `white` : `#37283a`,
                  border: "2px solid grey",
                  background: isSelected === 6 ? `#37283a` : `white`,
                }}
              >
                <button type="button" onClick={() => SetIsSelected(6)}>
                  Post Graduate
                </button>
              </div>
            </div>
          </div>
        </div>
        {(isSelected === 3 ||
          isSelected === 4 ||
          isSelected === 5 ||
          isSelected === 6) && (
          <div>
            <Select
              // defaultValue={selectedOption}
              // onChange={setSelectedOption}
              options={options}
            />
          </div>
        )}
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
