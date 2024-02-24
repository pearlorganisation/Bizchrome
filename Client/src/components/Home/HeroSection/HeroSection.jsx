import React from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Marquee from "react-fast-marquee";

const HeroSection = () => {
  return (
    <section class="bg-[#F1F1F2] min-h-dvh dark:bg-gray-900 relative z-10">
      <div className="max-w-screen-xl mx-auto py-24 space-y-6">
        <div className="space-y-4">
          <p className="font-bold text-lg text-[#4F46E5]">INDIA'S #1 JOB PLATFORM</p>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-medium w-[70%]">Embrace The BizChrome Work Revolution!</h1>
          <p className="text-lg font-medium">Discover 50 lakh+ career opportunities</p>
        </div>
        <div className="grid grid-cols-[25rem_20rem_auto] bg-white rounded-md  w-fit px-3 py-2 shadow-md">
          <div className="flex justify-start items-center gap-3 px-3 border-r-[3px]"><IoSearch className="text-gray-400" size={30} /><input className="w-full h-full focus: outline-none bg-transparent" type="text" name="" id="" placeholder="Search Jobs By Name" /></div>
          <div className="flex justify-start items-center gap-3 px-3"><HiOutlineLocationMarker className="text-gray-400" size={30} /><input className="w-full h-full focus: outline-none bg-transparent" type="text" name="" id="" placeholder="Search Jobs By City" /></div>
          <div><button className="bg-[#4F46E5] px-8 py-3 rounded-md text-white active:scale-95 transition-all" type="button">Search Jobs</button></div>
        </div>
      </div>
      <div className="absolute bottom-[10rem] w-screen">
        <Marquee speed={100}>
          {
            Array(20).fill(true).map((item, indx) => <div class="flex cursor-pointer items-center gap-4 bg-white px-3 py-3 rounded mx-3">
              <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" alt="" />
              <div class="font-medium dark:text-white">
                <div>Jese Leos</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Joined in January 2024</div>
              </div>
            </div>)
          }
        </Marquee>

      </div>
      <img className="h-[30rem] absolute right-[3rem] bottom-[8rem] -z-10 mix-blend-normal" src="https://png.pngtree.com/background/20211216/original/pngtree-business-people-white-collar-workers-meeting-at-work-picture-image_1532037.jpg" alt="" />
    </section>
  );
};

export default HeroSection;
