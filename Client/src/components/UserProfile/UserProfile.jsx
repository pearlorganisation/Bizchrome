import React, { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { findLocation } from "../../features/actions/Common/findLocationAction";
import Loader from "./Loader";

export default function UserProfile() {
  const { isFetchLocationDataLoading, isFetchLocationError, locationData } =
    useSelector((store) => store.location);
  const dispatch = useDispatch();
  console.log("THisi slocationDdata", locationData);


//
const func = ()=>{}


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
      <div className="w-1/2 h-full ">
        <div>
          <div className="flex justify-center my-10">
            <svg
              width="144"
              height="144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g clip-path="url(#a)">
                <g opacity="0.5">
                  <path
                    d="M142.56 47.868H1.44v80.666h141.12V47.868Z"
                    fill="url(#b)"
                    opacity="0.7"
                  ></path>
                  <path
                    d="m33.938 104.385-.484 3.291 12.918 4.216.057-.961-12.492-6.546ZM28.08 61.108l-5.658 12.635c.569-.06 1.145-.113 1.738-.158a65.405 65.405 0 0 1 2.94-.166l3.156-11.605-2.177-.706ZM28.732 91.465l4.75 2.384 1.097-6.761-3.637-1.192-2.21 5.57ZM38.377 74.007c1.125.162 2.25.356 3.37.583L30.24 68.368l-1.274 5.014a61.555 61.555 0 0 1 9.411.624ZM36.962 83.71c.286.03.625.07 1.016.11l4.46.495c.463.053.927.101 1.378.15l.157-1.74.21-3.149a45.815 45.815 0 0 0-6.468-1.078l-.753 5.213ZM50.13 73.314c.613-.004 1.492-.012 2.52-.024l.54-4.034-2.834-.92-.226 4.978ZM50.122 73.921h-.016l-.133 2.947c.698.248 1.4.511 2.096.787l.505-3.754-1.029.013c-.588 0-1.076.004-1.423.007ZM31.333 106.983l.597-3.637-9.48-4.856-1.362 5.148 10.245 3.345ZM48.844 70.01l.125-2.124-17.197-5.577-1 3.964 18.072 3.737ZM10.834 100.294l-.576-.628-.182.381.758.247ZM11.504 97.087l7.31-.437-5.722-2.879-1.588 3.316ZM30.644 66.783l-.258 1.018 13.366 7.227a61.27 61.27 0 0 1 4.721 1.326l.343-5.825-18.172-3.746ZM43.776 96.962l-4.685-2.821-2.887-5.221-.855 5.873 6.451 3.284c.496-.515 1.178-.892 1.976-1.115ZM49.666 83.56l1.529.56.29-2.144a52.874 52.874 0 0 0-1.714-.681l-.105 2.266ZM40.945 99.674c.036-.178.089-.349.15-.51l-5.944-3.037-.992 6.758 12.366 6.453.15-2.485c-3.706-1.407-6.258-4.589-5.73-7.179Z"
                    fill="#E4DDD7"
                  ></path>
                  <path
                    d="m47.586 91.34-10.935-3.575 3.359 6.015 4.927 2.967a8.46 8.46 0 0 1 2.323.118l.326-5.525ZM24.805 89.504l2.766 1.378 2.202-5.367-3.621-1.184-1.347 5.172ZM49.34 90.74l.92.3.41-3.02-1.189-.328-.141 3.049ZM49.041 97.36c.117.044.23.089.343.138l.726-5.335-.818-.267-.25 5.464ZM19.483 80.164l-2.536 5.456 5.96 2.943 2.693-9.688c-2.44.36-4.52.847-6.117 1.29ZM43.752 85.162c-2.867-.316-5.637-.62-6.89-.75l-.311 2.145 6.87 2.245.33-3.64ZM11.02 98.093l-.218.454 2.282 2.481 5.762 1.881 1.54-5.412-9.366.596ZM47.925 85.608c-.976-.106-2.032-.215-3.101-.333l-.319 3.88 3.15 1.03.27-4.577ZM47.69 80.57a43.745 43.745 0 0 0-2.495-.734l-.185 3.182-.13 1.569 3.085.332.246-4.175c-.173-.061-.347-.118-.52-.174ZM34.76 85.969l1.226-7.6a48.866 48.866 0 0 0-7.943.194c-.141.016-.278.028-.415.045l-1.194 4.637 8.326 2.724Z"
                    fill="#E4DDD7"
                  ></path>
                  <path
                    d="m7.859 99.321-.657 1.285 2.241.734 37.728 12.314.197-1.435-1-.324-12.918-4.216.484-3.287 12.49 6.543.094-1.589-12.367-6.454 1-6.765 5.944 3.032c.157-.41.395-.774.701-1.087l-6.451-3.283.859-5.873 2.887 5.22 4.681 2.822a6.566 6.566 0 0 1 1.165-.215l-4.927-2.967-3.358-6.016-2.077-.677-1.097 6.766-4.745-2.384 2.209-5.57-1.165-.38-2.202 5.367-2.766-1.379-.326 1.253 8.786 4.414-1.093 6.693-9.354-4.775-.371 1.402 9.479 4.856-.597 3.636-10.245-3.344-2.242-.73-5.766-1.88-2.282-2.481.218-.45 9.366-.596.407-1.435-7.096-3.563 2.714-5.744 6.144 3.044.347-1.236-5.96-2.943 2.537-5.456a50.875 50.875 0 0 1 6.12-1.29c.65-.096 1.327-.186 2.025-.263.137-.016.274-.032.415-.044a48.428 48.428 0 0 1 7.943-.195l-1.226 7.6 1.79.584.311-2.144c1.258.13 4.024.438 6.89.75l-.334 3.64 1.089.357.318-3.88 3.1.333.041-.69-3.084-.332.129-1.568.185-3.182c.83.218 1.666.466 2.496.733.173.057.347.114.52.174a50.695 50.695 0 0 1 3.27 1.237l.129-.965a54.137 54.137 0 0 0-3.762-1.386c-6.68-2.173-13.52-2.907-20.664-2.16-2.677.255-5.04.676-6.983 1.118l1.653-3.616c.992-.13 2.032-.247 3.125-.336a59.362 59.362 0 0 1 13.648.36 56.682 56.682 0 0 1 9.677 2.246c1.213.394 2.423.835 3.633 1.314l.12-.904a59.492 59.492 0 0 0-3.596-1.297c-.004 0-.004 0-.008-.005a59.68 59.68 0 0 0-4.713-1.32l-13.346-7.233-.142.564 11.504 6.222a60.41 60.41 0 0 0-3.371-.584 62.032 62.032 0 0 0-9.41-.628c-.622.004-1.242.016-1.863.04-.976.033-1.956.09-2.94.167-.593.044-1.173.101-1.738.158l5.657-12.635 2.182.705 1.516.49 17.192 5.579 1.391.45 2.835.92.096-.714-24.93-8.079-1.439-.466-.298.649L7.858 99.32Zm2.976.973-.759-.247.186-.377.572.624Zm.669-3.206 1.588-3.316 5.722 2.878-7.31.438Zm32.47-14.358-.158 1.739c-.451-.05-.915-.102-1.379-.15-1.862-.207-3.366-.377-4.46-.495-.39-.045-.729-.08-1.015-.11l.754-5.208c2.173.203 4.33.56 6.467 1.078l-.21 3.146Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="m49.51 87.007 1.25.344.35-2.594-1.471-.543-.13 2.793ZM32.172 101.864l1.092-6.693-8.786-4.414-1.657 6.331 9.35 4.776ZM16.415 86.756 13.7 92.504l7.093 3.563 1.765-6.267-6.144-3.044Z"
                    fill="#C8C2C9"
                  ></path>
                  <path
                    d="m49.481 87.692 1.19.328.088-.669-1.25-.344-.028.685ZM49.638 84.214l1.472.543.084-.636-1.528-.56-.028.653ZM50.106 73.922h.016c.347 0 .839-.004 1.423-.012l1.029-.012.08-.608c-1.028.012-1.907.02-2.52.024l-.028.608ZM30.644 66.783l18.168 3.75.032-.523-18.071-3.738-.13.511Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="m30.773 66.272 1-3.968-1.516-.49L27.1 73.418c.62-.02 1.245-.037 1.862-.04l1.274-5.015.142-.563.258-1.018.137-.51ZM49.48 87.692l.033-.685.125-2.79.028-.656.101-2.262c-.52-.195-1.04-.381-1.556-.555l-.246 4.175-.04.689-.27 4.58-3.15-1.029-1.088-.357-6.87-2.246-1.791-.583-8.326-2.724 1.193-4.638c-.697.077-1.375.167-2.024.264l-2.693 9.688-.347 1.236-1.766 6.267-.407 1.435-1.54 5.412 2.241.729 1.363-5.147.371-1.403 1.661-6.332.327-1.253 1.343-5.176 3.624 1.184 1.166.38 3.637 1.189 2.076.676 10.935 3.575-.327 5.522a8.461 8.461 0 0 0-2.322-.118c-.412.036-.799.11-1.165.215-.799.223-1.476.6-1.976 1.115a3.127 3.127 0 0 0-.85 1.597c-.53 2.59 2.023 5.772 5.725 7.179l-.15 2.484-.092 1.589-.057.961 1 .325.871-6.344a7.359 7.359 0 0 1-.871-.227c-2.879-.941-4.931-3.369-4.56-5.363.363-1.938 2.875-2.745 5.592-1.857.278.09.549.199.81.317l.17-1.241c-.113-.049-.23-.093-.343-.138l.25-5.464.819.267.153-1.126-.92-.3.134-3.036ZM50.13 73.314l.226-4.973-1.391-.45-.125 2.124-.032.523-.343 5.825c.5.162 1 .332 1.5.51l.133-2.947.032-.612Z"
                    fill="#F4F2F6"
                  ></path>
                  <path
                    d="M48.312 77.242a56.792 56.792 0 0 0-9.681-2.246 59.357 59.357 0 0 0-13.648-.36c-1.09.089-2.13.202-3.125.336l-1.653 3.616a54.4 54.4 0 0 1 6.983-1.12c7.14-.745 13.98-.007 20.664 2.162a51.81 51.81 0 0 1 3.762 1.386l.33-2.457a58.62 58.62 0 0 0-3.632-1.317Z"
                    fill="#E3E0E4"
                  ></path>
                  <path
                    d="M48.405 98.421c-2.718-.883-5.234-.08-5.593 1.857-.37 1.994 1.677 4.426 4.56 5.363.295.097.585.17.871.227l.972-7.135a10.235 10.235 0 0 0-.81-.312Z"
                    fill="#C8C2C9"
                  ></path>
                  <path
                    d="m87.531 97.887-1.193-.54.367 2.595.677.203.149-2.258ZM89.858 92.361l-.258 5.144 10.954 4.893-2.189-6.782a103.962 103.962 0 0 1-6.104-2.221 56.842 56.842 0 0 1-2.403-1.034ZM92.866 78.656l-.532-1.637-4.54-.22 5.072 1.857ZM93.6 80.906l-.509-1.565-7.149-2.63-2.572-.126.242 1.698.06.231 9.927 2.392ZM101.079 104.007l-11.54-5.22-.1 1.965 11.716 3.494-.076-.239ZM103.151 77.525l4.375 8.582 2.435.591-2.637-8.982-4.173-.19ZM82.326 65.008l-.617-.016 1.52 10.6 5.306.252-6.21-10.836Z"
                    fill="#E4DDD7"
                  ></path>
                  <path
                    d="m99.736 65.486 8.286 6.713 1.729.085.234.6-1.278-.065 2.306 2.683.948 2.416-1.343-.06 3.516 5.61 1.807 4.629-6.347-10.284-1.206-.053 2.795 9.234 4.778 1.16.475 1.216-8.293-2.04 2.62 5.165c.557.028 1.105.049 1.641.053 2.508.012 4.169-.296 5.064-.531l.617 1.585 1.605 4.126.617 1.585c-.581.028-1.201.045-1.867.04a46.278 46.278 0 0 1-4.322-.23l3.31 6.574 4.685-1.735.496 1.285-4.552 1.699 1.403 2.797 5.532 1.674-18.051-46.268.205.523-7.41-.186ZM83.834 79.163l.326 1.31L94.25 82.9l-.428-1.314-9.987-2.424ZM88.208 64.379l-.903-2.756-6.242-1.12.057.398 4.71 3.413 2.378.065ZM81.281 62.017l.31 2.18 2.767.078-3.077-2.258ZM88.757 61.887l.867 2.53 15.39.388-16.257-2.918ZM100.74 76.403l-9.415-6.993 2.27 6.668 7.145.325ZM84.918 83.484c2.028 1.86 4.452 3.45 8.036 4.803 1.157.438 2.303.843 3.44 1.22L94.61 84.02l-10.185-2.485.492 1.95ZM107.368 98.07a78.504 78.504 0 0 1-4.725-1.156 87.707 87.707 0 0 1-2.218-.645l2.407 7.151 8.101 3.652 4.786-.863-3.585-7.317a66.757 66.757 0 0 1-4.766-.823ZM86.967 65.142l1.955 1.422-.451-1.378-1.504-.044Z"
                    fill="#E4DDD7"
                  ></path>
                  <path
                    d="m98.82 65.466-.205-.004c-.447.421-1.379 1.301-2.338 2.189-1.517 1.402-2.255 2.059-2.642 2.363l2.141 1.569 11.238.567-8.193-6.684ZM93.942 77.096l2.117 6.238 6.148 1.488-4.128-7.532-4.137-.194ZM103.409 85.11l2.194.53-4.065-8.188-2.455-.113 4.326 7.77ZM92.002 76.005l-2.62-8.03-3.9-2.874-2.285-.065 6.31 10.852 2.495.117ZM113.36 107.907l3.742 1.127-.811-1.658-2.931.531ZM89.898 65.223l.931 2.732 2.033 1.484c.858-.718 2.854-2.542 4.439-4.018l-7.403-.198Z"
                    fill="#E4DDD7"
                  ></path>
                  <path
                    d="m108.441 65.417-.302-.738-1.488-.263-25.68-4.56.093.644 6.241 1.119.904 2.752 1.415.037-.867-2.534 16.257 2.919 1.927.344 18.047 46.268-5.531-1.674-2.355-.71-3.742-1.127 2.932-.531-.573-1.167-4.786.876-8.1-3.653-2.407-7.15c.742.227 1.483.441 2.217.644 1.597.442 3.189.831 4.726 1.155 1.633.345 3.221.617 4.766.823.669.09 1.33.167 1.979.231 1.5.146 2.948.227 4.322.232.666 0 1.287-.013 1.867-.041l-.617-1.585c-.766.057-1.616.093-2.56.093-3.145-.008-6.649-.41-10.386-1.183a75.474 75.474 0 0 1-4.46-1.075 94.672 94.672 0 0 1-9.866-3.308c-2.911-1.146-5.314-2.403-7.342-3.72l.234 1.633a6.06 6.06 0 0 0 .233-.073c.775.466 1.577.912 2.412 1.342l-.34 5.184-1.475-.656.198 1.382 1.193.535-.149 2.258-.677-.203.189 1.338 38.719 11.763 2.311.71-.654-1.642-18.825-46.69Zm-7.883 36.981-10.954-4.893.258-5.144c.778.357 1.576.701 2.407 1.034 2.04.815 4.08 1.556 6.104 2.221l2.185 6.782Zm-11.019-3.612 11.54 5.221.076.239-11.717-3.494.101-1.966Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M87.954 91.433a41.276 41.276 0 0 1-2.41-1.341 3.193 3.193 0 0 1-.234.073l.826 5.797 1.476.656.343-5.184ZM96.438 84.465l1.915 5.667c.92.28 1.83.535 2.717.766 2.758.717 5.387 1.204 7.843 1.455l-2.714-5.497-9.761-2.391ZM107.731 72.77l-11.108-.57 5.81 4.28 8.778.385-3.48-4.094Z"
                    fill="#C8C2C9"
                  ></path>
                  <path
                    d="m109.598 77.817 6.347 10.284-1.807-4.63-3.516-5.61 1.343.061-.948-2.415-2.31-2.688 1.278.065-.234-.6-1.729-.085-8.286-6.713-.916-.02 8.198 6.684-11.238-.567.843.616 11.108.571 3.48 4.095-8.778-.386.291.215.076.15.351.681 4.173.19 2.637 8.984 1.226.295-2.794-9.23 1.205.053ZM88.47 65.186l.452 1.379 1.907 1.394-.93-2.736-1.428-.037ZM122.605 105.248l-.496-1.285-4.685 1.735.629 1.248 4.552-1.698Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="m93.091 79.341.508 1.565-9.93-2.392.16.649 9.988 2.424.427 1.313 1.81.438-2.116-6.239 4.14.195 4.129 7.532 1.202.292-4.326-7.775 2.455.113-.354-.713-.444-.333-7.145-.324-2.27-6.672-1.943-1.435 2.62 8.03-2.495-.117-6.31-10.856-.867-.024 6.205 10.835-5.306-.251.141.993 2.572.126 7.15 2.626Zm-.226-.685L87.793 76.8l4.54.218.532 1.638ZM98.615 65.458l-1.314-.032c-1.585 1.475-3.581 3.3-4.44 4.017l.778.571c.383-.303 1.121-.96 2.641-2.363.956-.888 1.887-1.767 2.335-2.193Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="m117.424 105.698-3.31-6.575a60.108 60.108 0 0 1-1.979-.231l3.584 7.316.572 1.168.811 1.658 2.355.709-1.404-2.797-.629-1.248ZM84.426 81.534l10.186 2.48 1.83.447 9.765 2.391 2.714 5.497c.629.065 1.246.114 1.847.146l-2.621-5.164 8.293 2.038-.475-1.216-4.778-1.159-1.226-.296-2.439-.592-4.375-8.58-.347-.682-.076-.146-.295-.215-5.81-4.28-.843-.62-2.14-1.57-.778-.571-2.033-1.484-1.907-1.39-1.955-1.423 1.5.04 1.427.041 7.403.2 1.314.031.206.005.915.024 7.415.186-.206-.523-1.927-.344-15.394-.385-1.415-.037-2.375-.064-4.71-3.418.162 1.115 3.08 2.258-2.766-.077.113.794.62.016.868.025 2.29.065 3.899 2.874 1.944 1.435 9.414 6.996.444.332.354.714 4.065 8.192-2.194-.53-1.201-.293-6.153-1.487-1.81-.438-10.085-2.428-.326-1.31-.161-.648-.06-.235.656 4.589c.214.206.428.413.65.615l-.493-1.941Z"
                    fill="#F4F2F6"
                  ></path>
                  <path
                    opacity="0.5"
                    d="M102.284 95.56c1.512.414 3.004.77 4.459 1.074 3.738.775 7.242 1.18 10.387 1.184.943 0 1.794-.032 2.56-.093l-1.605-4.126c-1.052.194-2.536.364-4.491.352-3.653-.024-7.75-.637-12.185-1.804-2.77-.725-5.645-1.662-8.6-2.793-3.629-1.386-6.201-2.975-8.294-4.75l.56 3.927c2.028 1.318 4.428 2.575 7.343 3.721a92.65 92.65 0 0 0 9.866 3.308Z"
                    fill="#F1EFF1"
                  ></path>
                  <path
                    d="M92.81 89.358c2.955 1.131 5.83 2.067 8.599 2.793 4.436 1.167 8.532 1.78 12.185 1.804 1.956.012 3.443-.158 4.492-.353l-.617-1.585c-.895.235-2.556.544-5.064.531a37.635 37.635 0 0 1-3.488-.199c-2.456-.25-5.084-.737-7.842-1.455a67.91 67.91 0 0 1-2.718-.766l-1.915-5.667-1.83-.445 1.782 5.488a88 88 0 0 1-3.44-1.22c-3.584-1.354-6.007-2.943-8.035-4.803a22.902 22.902 0 0 1-.65-.617l.246 1.735c2.093 1.78 4.665 3.373 8.294 4.759Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="m75.592 103.452 11.193-3.47-.375-2.598-11.434 1.674.616 4.394ZM60.4 75.851l.133-.847-2.54 1.204a68.435 68.435 0 0 1 2.407-.357ZM71.347 87.307l-.23-1.832L60.1 88.884l-.452 3.133 11.698-4.71ZM83.648 78.287l-.245-1.702-.202.097.447 1.605ZM81.116 60.857l-.056-.397-.706.219.762.178ZM72.133 93.634a65.52 65.52 0 0 1-1.887-.336c-2.338-.434-4.508-.835-6.35-.377-2.468.616-3.935 1.43-4.653 1.917l-.758 5.266L72.677 98l-.544-4.366ZM61.896 66.427l-8.613 2.68-.548 4c2.633-1.552 6.14-3.62 8.935-5.27l.226-1.41ZM82.943 75.746l.314-.154-1.544-10.633-1.569.746 2.799 10.04ZM79.93 64.951l1.67-.786-.319-2.189-2.334-.551.984 3.526ZM79.536 88.936c-2.778-.949-4.738-2.4-6.532-3.798l1.105 7.815c1.387.162 2.762.199 4.056-.065 3.129-.632 5.266-2.144 6.253-2.983-1.766-.138-3.39-.458-4.882-.969Z"
                    fill="#E4DDD7"
                  ></path>
                  <path
                    d="M64.037 92.139c2.19-.547 4.488-.13 6.971.32.33.06.666.122 1.004.178L71.432 88l-11.89 4.796-.166 1.146c.798-.457 1.927-.992 3.431-1.459.383-.121.794-.235 1.23-.344ZM59.666 80.488c-1.79.101-3.862.377-6.302.872-.605.121-1.21.259-1.814.4l-.295 2.141 8.226-2.27.185-1.143ZM60.686 74.056l.891-5.615c-1.218.722-3.31 1.958-5.427 3.21-1.359.804-2.528 1.493-3.496 2.064l-.512 3.738c.9-.227 1.802-.438 2.701-.633l5.843-2.764ZM58.968 84.907l-8.241 2.899-.415 3.024 8.116-2.51.54-3.413ZM55.324 100.039a3.853 3.853 0 0 1-.093.551l1.286-.191 1.73-10.944-8.089 2.501-.73 5.359c3.525-.819 6.117.275 5.896 2.724ZM51.602 110.891l-3.113.425-.02.547 3.133-.972ZM48.667 106.946l-.113 2.838 6.632-.916 1.117-7.07-1.677.247c-1.097 1.869-3.334 3.742-5.96 4.901ZM61.319 80.448l-1.052 7.305 11.519-3.563c-2.62-2.01-5.29-3.714-10.467-3.742ZM81.495 77.522l-3.226 1.58c.593.386 1.17.787 1.742 1.184.464.325.916.637 1.367.933l1-.308-.883-3.39ZM73.44 104.121l-.59-4.75-14.563 2.131-1.02 7.074 3.238-.446 12.934-4.009ZM74.105 71.105l5.773.198-1.173-4.492-4.6 4.293ZM73.222 71.076l4.588-4.264-8.69 4.122 4.102.142ZM62.008 75.673c2.303-.215 4.404-.235 6.327-.061l4.221-3.92-4.677-.17-5.657 2.683-.214 1.468ZM82.523 81.947c.049.029.097.061.145.09l-.032-.122-.113.032Z"
                    fill="#E4DDD7"
                  ></path>
                  <path
                    d="m86.979 101.32-.194-1.338-11.189 3.47-.62-4.394 11.434-1.674-.201-1.386-11.427 1.694-.536-3.79c1.258.101 2.524.085 3.774-.166 3.725-.75 6.217-2.554 7.354-3.543l-.238-1.638c-5.278-.438-8.189-2.655-10.89-4.714-4.068-3.097-7.975-6.064-20.438-3.515-.71.146-1.42.304-2.121.475l-.133.96c.605-.141 1.21-.275 1.814-.401 2.44-.499 4.508-.774 6.302-.872l-.181 1.143-8.226 2.27-.088.633 8.213-2.266-.31 1.958-8.258 2.902-.093.67 8.242-2.9-.54 3.414-.182 1.139-1.73 10.945-1.286.19a5.45 5.45 0 0 1-.609 1.447l1.677-.247-1.116 7.069-6.633.917-.06 1.532 3.112-.426-3.137.973-1.068.333-.198 1.459 39.78-12.323ZM59.54 92.795 71.431 88l.581 4.637c-.335-.057-.67-.117-1.004-.178-2.48-.45-4.782-.868-6.971-.32-.436.109-.847.223-1.234.344-1.504.466-2.633 1.001-3.431 1.46l.17-1.148Zm18.628.093c-1.294.26-2.67.223-4.056.065l-1.105-7.815c1.794 1.398 3.75 2.846 6.532 3.798 1.492.511 3.117.835 4.886.969-.991.843-3.128 2.351-6.257 2.983Zm-17.902-5.136 1.052-7.304c5.173.033 7.842 1.73 10.463 3.742a110.896 110.896 0 0 1 .996.773l-1.665.515.23 1.833-11.693 4.706.452-3.133.165-1.132Zm-1.024 7.09c.718-.486 2.185-1.305 4.653-1.917 1.842-.458 4.011-.057 6.35.377.621.113 1.25.231 1.887.336l.544 4.366-14.192 2.104.758-5.266Zm-.956 6.66 14.564-2.136.593 4.751-12.94 4.013-3.233.446 1.016-7.074Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="m73.44 71.725-4.263 3.98c.787.098 1.549.231 2.275.398 2.399.555 4.225 1.418 5.85 2.391l3.943-1.925-1.197-4.605-6.609-.24ZM59.384 82.272l-8.213 2.266-.355 2.594 8.257-2.898.31-1.962ZM78.02 93.735c-1.25.251-2.516.268-3.774.166l.536 3.79 11.427-1.694-.839-5.805c-1.133.99-3.625 2.793-7.35 3.543ZM77.346 61.615l-13.93 4.342-1.057 7.308 16.048-7.592-1.06-4.058Z"
                    fill="#C8C2C9"
                  ></path>
                  <path
                    d="m83.201 76.682.202-.097-.146-.993-.314.154.258.936Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="m58.428 88.32-8.116 2.51-.153 1.13 8.088-2.5.181-1.14ZM72.782 84.96l-.157-.122c-.282-.219-.56-.438-.839-.652l-11.52 3.563-.16 1.13 11.01-3.405 1.666-.514Z"
                    fill="#F4F2F6"
                  ></path>
                  <path
                    d="m61.577 68.442-.89 5.614 1.672-.79 1.057-7.31L77.35 61.62l.509-.158 2.5-.778.705-.219-.093-.649-27.59 8.586-.097.71 8.612-2.68-.226 1.415c-2.794 1.65-6.302 3.717-8.935 5.27l-.08.603c.971-.571 2.136-1.26 3.495-2.063 2.117-1.257 4.205-2.493 5.427-3.214Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="m77.858 61.457-.508.158 1.06 4.057-16.05 7.593-1.674.79-5.843 2.765c.166-.036.331-.073.497-.106.915-.19 1.798-.356 2.656-.502l2.54-1.204 1.686-.799 5.657-2.683 1.242-.588 8.689-4.123.794-.376.097.377 1.173 4.49.174.666 1.197 4.605.246.948.883 3.389-1 .308c.383.256.762.499 1.145.73l.113-.037.032.122c.532.312 1.077.6 1.645.847l-.665-4.597-.448-1.601-.262-.936-2.798-10.037 1.573-.746-.117-.794-1.665.786-.988-3.53 2.334.554-.161-1.118-.762-.175-2.492.767ZM48.47 111.863l.02-.547.06-1.532.112-2.838c2.626-1.155 4.863-3.032 5.956-4.904.286-.487.492-.977.609-1.448.044-.186.076-.373.093-.551.217-2.448-2.375-3.547-5.9-2.72l-.169 1.249c2.492-.51 4.274.32 4.089 2.087-.19 1.812-2.375 3.985-5.073 5.116l-.875 6.425 1.077-.337Z"
                    fill="#F4F2F6"
                  ></path>
                  <path
                    opacity="0.5"
                    d="M74.246 83.84c2.705 2.06 5.612 4.277 10.89 4.715l-.569-3.936c-2.386-.706-4.177-1.982-6.124-3.368-2.302-1.638-4.588-3.26-8.19-4.123-3.999-.953-8.99-.758-15.325.551a81.54 81.54 0 0 0-2.907.665l-.334 2.448c.705-.17 1.41-.328 2.12-.474 12.46-2.541 16.366.43 20.439 3.523Z"
                    fill="#F4F3F4"
                  ></path>
                  <path
                    d="M54.925 77.688c6.334-1.313 11.326-1.508 15.325-.551 3.605.86 5.89 2.484 8.19 4.122 1.947 1.386 3.737 2.66 6.124 3.369l-.25-1.74a16.626 16.626 0 0 1-1.645-.846c-.048-.029-.097-.057-.145-.09a30.24 30.24 0 0 1-1.145-.73c-.448-.3-.9-.611-1.368-.932-.576-.397-1.149-.798-1.741-1.183l3.226-1.581-.246-.949-3.944 1.926c-1.624-.977-3.451-1.836-5.85-2.392-.73-.17-1.488-.3-2.274-.397l4.262-3.98 6.608.243-.173-.665-5.77-.199 4.597-4.293-.097-.377-.795.377-4.592 4.257-4.1-.142-1.243.588 4.678.17-4.222 3.92c-1.923-.175-4.02-.154-6.326.06l.213-1.467-1.685.798-.133.848c-.778.097-1.58.219-2.407.356a72.926 72.926 0 0 0-3.153.608c-.9.195-1.802.406-2.702.633l-.124.904a66.67 66.67 0 0 1 2.907-.665Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M53.348 100.655c.181-1.763-1.597-2.594-4.089-2.087l-.98 7.199c2.694-1.127 4.879-3.3 5.069-5.112Z"
                    fill="#C8C2C9"
                  ></path>
                </g>
                <path
                  d="m49.866 51.285.016-.008a18.119 18.119 0 0 1-1.578-9.065c.75-8.968 8.1-16.156 17.036-16.625 10.434-.558 19.064 7.786 19.064 18.155 0 2.695-.595 5.236-1.642 7.535h.016l-.201.389c-.201.42-.419.833-.652 1.23L67.82 79.533a1.685 1.685 0 0 1-2.987 0L50.72 52.903c-.234-.404-.451-.808-.66-1.237l-.194-.38Z"
                  fill="#4D3951"
                ></path>
                <path
                  d="M56.854 43.54c0 5.261 4.243 9.518 9.468 9.518 5.233 0 9.468-4.265 9.468-9.518 0-5.261-4.243-9.518-9.468-9.518-5.233 0-9.468 4.257-9.468 9.518Z"
                  fill="#fff"
                ></path>
                <path
                  opacity="0.1"
                  d="m80.967 59.812-27.587 8.59-6.177 45.249L86.98 101.32l-6.012-41.508Z"
                  fill="#263238"
                ></path>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h144v144H0z"></path>
                </clipPath>
                <pattern
                  id="b"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlink:href="#c" transform="scale(.00286 .00503)"></use>
                </pattern>
                <image
                  id="c"
                  width="350"
                  height="199"
                  xlink:href="data:image/png;base64,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"
                ></image>
              </defs>
            </svg>
          </div>
          <div
            className="font-bold flex justify-center text-xl"
            style={{ color: `rgb(55, 40, 58)` }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div
            className="w-1/2 my-5 mx-auto text-center flex justify-center "
            style={{
              background: `${
                isFetchLocationDataLoading ? `White` : "rgb(242, 248, 253)"
              }`,
            }}
          >
            {isFetchLocationDataLoading ? (
              <Loader />
            ) : locationData.length === 0 ? (
              "Please share your current location"
            ) : (
              locationData?.cityName + ", " + locationData?.countryName
            )}
          </div>
          <div className="my-5 flex justify-center">
            This will help us find the best jobs for you in your current city
          </div>
          <hr />
        </div>
        <div
          className={`flex justify-center w-full my-5  ${
            locationData.length == 0 || "hidden"
          }`}
        >
          <button
            className={`h-10 px-52 text-white align-center `}
            style={{ background: "rgb(31, 130, 104)" }}
            onClick={getLocation}
          >
            <div className={`flex font-bold  `}>
              <span className="mx-2">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#fff"
                >
                  <path
                    d="M12.5 8C10.29 8 8.5 9.79 8.5 12C8.5 14.21 10.29 16 12.5 16C14.71 16 16.5 14.21 16.5 12C16.5 9.79 14.71 8 12.5 8ZM21.44 11C20.98 6.83 17.67 3.52 13.5 3.06V2C13.5 1.45 13.05 1 12.5 1C11.95 1 11.5 1.45 11.5 2V3.06C7.33 3.52 4.02 6.83 3.56 11H2.5C1.95 11 1.5 11.45 1.5 12C1.5 12.55 1.95 13 2.5 13H3.56C4.02 17.17 7.33 20.48 11.5 20.94V22C11.5 22.55 11.95 23 12.5 23C13.05 23 13.5 22.55 13.5 22V20.94C17.67 20.48 20.98 17.17 21.44 13H22.5C23.05 13 23.5 12.55 23.5 12C23.5 11.45 23.05 11 22.5 11H21.44ZM12.5 19C8.63 19 5.5 15.87 5.5 12C5.5 8.13 8.63 5 12.5 5C16.37 5 19.5 8.13 19.5 12C19.5 15.87 16.37 19 12.5 19Z"
                    fill="#fff"
                  ></path>
                </svg>
              </span>
              <span className="font">Pick Curent Location</span>
            </div>
          </button>
        </div>
        <div
          className={`flex justify-center w-full font-medium ${
            !locationData.length == 0 && "hidden"
          }`}
        >
          <button
            className={`h-10 px-52 text-white align-center ${
              locationData.length == 0 || "hidden"
            } `}
            style={{
              border: "1px solid rgb(31, 130, 104) ",
              color: "rgb(31, 130, 104)",
            }}
          >
            Search Manually
          </button>
        </div>
        <div
          className={`my-5 flex justify-center w-full font-medium ${
            locationData.length == 0 && "hidden"
          }`}
          style={{ color: "white" }}
        >
          <button
            className="h-10 px-52 text-white align-center "
            style={{
              color: "white",
              background: "rgb(31, 130, 104)",
            }}
            onClick={func}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
