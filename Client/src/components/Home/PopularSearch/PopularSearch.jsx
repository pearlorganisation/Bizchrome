import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const PopularSearch = () => {




  const popularSearchData = [
    {
      "_id": "1",
      "title": "Jobs for Freshers",
      "trendingSpot": 1,
      "groupHoverBtn": "group-hover:bg-yellow-600 group-hover:text-white",
      "hoverBg": "hover:bg-gradient-to-t from-yellow-600 to-slate-50 hover:ring-bg-yellow-700",
      "imgUrl": "/fresher.png",
      "targetUrl": "/jobs/jobs-for-freshers",
    },
    {
      "_id": "2",
      "title": "Work from home jobs",
      "trendingSpot": 2,
      "groupHoverBtn": "group-hover:bg-blue-600 group-hover:text-white",
      "hoverBg": "hover:bg-gradient-to-t from-blue-400 to-slate-50 hover:ring-bg-blue-700",
      "imgUrl": "/wfh.png",
      "targetUrl": "/jobs/wfh-jobs",
    },
    {
      "_id": "3",
      "title": "Part time jobs",
      "trendingSpot": 3,
      "groupHoverBtn": "group-hover:bg-red-600 group-hover:text-white",
      "hoverBg": "hover:bg-gradient-to-t from-red-400 to-slate-50 hover:ring-bg-red-700",
      "imgUrl": "/parttimejobs.png",
      "targetUrl": "/jobs/part-time-jobs",
    },
    {
      "_id": "4",
      "title": "Jobs for women",
      "trendingSpot": 4,
      "groupHoverBtn": "group-hover:bg-green-600 group-hover:text-white",
      "hoverBg": "hover:bg-gradient-to-t from-green-300 to-slate-50 hover:ring-bg-green-700",
      "imgUrl": "/jobsforwomen.png",
      "targetUrl": "/jobs/jobs-for-women",
    },
    {
      "_id": "5",
      "title": "International Jobs",
      "trendingSpot": 5,
      "groupHoverBtn": "group-hover:bg-cyan-600 group-hover:text-white",
      "hoverBg": "hover:bg-gradient-to-t from-cyan-200 to-slate-50 hover:ring-bg-cyan-700",
      "imgUrl": "/internationaljobs.png",
      "targetUrl": "/jobs/international-jobs",
    },
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto py-6 px-3">
      <div className="h-[22rem] rounded-md p-4 flex justify-end items-end">
        <p className={`font-extrabold tracking-widest h-fit text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}>
          Popular Searches on Biz Chrome
        </p>
      </div>

      {popularSearchData.map((item) => {
        return (
          <div
            className={`h-[22rem] card rounded-lg relative ring-2 ring-gray-200 overflow-x-hidden ${item?.hoverBg} transition-all duration-300 hover:cursor-pointer flex flex-col justify-between px-6 py-8 group`}
          >
            <style jsx>{`
        .stroke2 {
          font-size: 58px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #abb0b8;
          -webkit-text-fill-color: #ffffff;
          letter-spacing: 4px;
          font-family: Arial Black, Gadget, sans-serif;
        }
        .group:hover > .strokeH {
          -webkit-text-stroke-color: #040404;
          -webkit-text-stroke-width: 2px;
        }
      `}</style>
            <p
              className={`stroke2 absolute bottom-[7rem] strokeH group-hover:translate-x-[4rem] transition-all duration-300 translate-x-[10rem] text-nowrap overflow-hidden`}
            >
              {item?.title}
            </p>
            <div className="space-y-2">
              <p>TRENDING AT #{item?.trendingSpot}</p>
              <p className="text-xl font-bold">{item?.title}</p>
            </div>
            <div>
              {" "}
              <Link to={`${item?.targetUrl}/${item?._id}`}
                className={`rounded-lg px-10 py-3 border border-gray-600 active:scale-95 transition-all duration-300 ${item?.groupHoverBtn}`}
              >
                View
              </Link>
              {" "}
            </div>
            <div className="absolute right-0 bottom-1">
              <img src={item?.imgUrl} alt={`${item?.title} image`} width="180px" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PopularSearch;
