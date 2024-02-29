import React, { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { findLocation } from "../../features/actions/Common/findLocationAction";
import Loader from "./Loader";
import { MultipartProfileForm } from "./MultipartProfileForm/MultipartProfileForm";

export default function UserProfile() {
  const { isFetchLocationDataLoading, isFetchLocationError, locationData } =
    useSelector((store) => store.location);
  const dispatch = useDispatch();
  // console.log("THisi slocationDdata", locationData);

  //
  const func = () => {};

  //Get Geolocation
  const getLocation = () => {
    // Check if geolocation is available in the browser
    if ("geolocation" in navigator) {
      // Get the user's current location
      navigator.geolocation.getCurrentPosition(
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

  return (
    <div className="flex" style={{ width: "100%", height: "1000px" }}>
      <div
        className="w-1/2 h-full px-20 py-20"
        style={{ background: "rgb(55, 40, 58)" }}
      >
        <div className="h-1/4 text-white">
          <div className="w-full h-1/2 ">
            <h1 className="text-2xl font-bold my-7">
              Complete your profile! 👋
            </h1>
            <p>
              {" "}
              Unlock 500+ jobs from top companies and receive direct calls from
              HRs
            </p>
          </div>
          <div className="w-full h-1/2 my-12">
            <div className="flex my-8">
              <div className="w-1/12 flex flex-col justify-center">
                <FaRegCheckCircle size={20} />
              </div>
              <div className="w-full text-xl ">Lorem ipsum dolor sit amet.</div>
            </div>
            <div className="flex my-8">
              <div className="w-1/12 flex flex-col justify-center">
                <FaRegCheckCircle size={20} />
              </div>
              <div className="w-full text-xl ">Lorem ipsum dolor sit amet.</div>
            </div>
            <div className="flex my-8">
              <div className="w-1/12 flex flex-col justify-center">
                <FaRegCheckCircle size={20} />
              </div>
              <div className="w-full text-xl ">Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full">
        <MultipartProfileForm />
      </div>
    </div>
  );
}
