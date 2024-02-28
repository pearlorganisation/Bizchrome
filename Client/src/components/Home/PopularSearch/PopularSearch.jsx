import React from "react";
import style from "./style.module.css";

const PopularSearch = () => {

  const popularSearchData = [
    {
      "title" : "Jobs for Freshers",
      "trendingSpot": 1,
      "color": "#D35400",
      "gradient": "bg-gradient-to-t from-orange-200 to-slate-50",
      "imgUrl": "/fresher.png"
    },
    {
      "title" : "Work from home jobs",
      "trendingSpot": 2,
      "color": "#7D3C98",
      "gradient": "bg-gradient-to-t from-purple-400 to-slate-50",
      "imgUrl": "/wfh.png"
    },
    {
      "title" : "Part time jobs",
      "trendingSpot": 3,
      "color": "#E74C3C",
      "gradient": "bg-gradient-to-t from-red-400 to-slate-50",
      "imgUrl": "/parttimejobs.png"
    },
    {
      "title" : "Jobs for women",
      "trendingSpot": 4,
      "color": "#7D3C98",
      "gradient": "bg-gradient-to-t from-emerald-300 to-slate-50",
      "imgUrl": "/jobsforwomen.png"
    },
    {
      "title" : "International Jobs",
      "trendingSpot": 5,
      "color": "#5DADE2",
      "gradient": "bg-gradient-to-t from-cyan-200 to-slate-50",
      "imgUrl": "/internationaljobs.png"
    },
  ]

  return (
    <div className="grid grid-cols-3 gap-4 container mx-auto py-6">
      <div className="h-[22rem] rounded-md p-4">
        <p className={` font-extrabold tracking-widest text-7xl`}>
          Popular Searches on Biz Chrome
        </p>
      </div>

      {popularSearchData.map((item) => {
        return (
          <div
            className={`h-[22rem] card  rounded-lg relative  ring-2 ring-gray-200 overflow-x-hidden  hover:ring-${item?.color} transition-all hover:cursor-pointer flex flex-col justify-between px-6 py-8 group`}
          >
            <style jsx>{`
              .stroke2 {
                font-size: 58px;
                -webkit-text-stroke-width: 1px;
                -webkit-text-stroke-color: #040404;
                -webkit-text-fill-color: #ffffff;
                letter-spacing: 4px;
                font-family: Arial Black, Gadget, sans-serif;
              }
              .group:hover > .strokeH {
                -webkit-text-stroke-color: #4188ff;
                -webkit-text-stroke-width: 2px;
              }
            `}</style>
            <p
              className={`stroke2 absolute bottom-[7rem] strokeH group-hover:translate-x-[4rem] transition-all translate-x-[10rem] text-nowrap overflow-hidden`}
            >
             {item?.title}
            </p>
            <div className="space-y-2">
              <p>TRENDING AT #{item?.trendingSpot}</p>
              <p className="text-xl font-bold">{item?.title}</p>
            </div>
            <div>
              {" "}
              <button className={`rounded-lg px-10 py-3 border border-gray-600 active:scale-95 transition-all group-hover:bg-[${item.color}] group-hover:text-black`}>
                View 
              </button>{" "}
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
