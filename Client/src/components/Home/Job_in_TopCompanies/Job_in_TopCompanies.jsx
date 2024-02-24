import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
const Job_in_TopCompanies = () => {
  return (
    <>
      <div className="h-dvh flex items-center bg-[#F4F2F6] ">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper  "
        >

          <SwiperSlide className="F4F2F6 w-fit flex items-center justify-center group py-6">
            <div className="w-[400px] h-[25rem]  bg-[#fff] rounded-lg hover:cursor-pointer hover:shadow-lg  mx-auto transition-all">
              <div className="p-5">
                <div className="py-5">
                  <div>
                    <img
                      src="https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Fbajaj.png&w=1920&q=75"
                      className=" w-[120px] h-[60px] object-contain"
                    />
                  </div>
                </div>
                <div className=" py-10">
                  <div className="">
                    <h1 className="text-xl font-bold md:text-2xl">
                      Bajaj Allianz Life Insurance
                    </h1>
                    <div></div>
                    <div className=" py-5">
                      <div className="text-lg">Provider of life insurance.</div>
                    </div>
                    <div className=" py-5 px-3">
                      <button
                        type="button"
                        className="mb-2 me-2 rounded-lg px-5 py-2.5 text-lg md;text-xl active:scale-95 transition-all font-bold  text-[#27B0A5] group-hover:bg-[#27B0A5] group-hover:text-white focus:outline-none focus:ring-4"
                      >
                        <div className="flex items-center">
                          <div>View Jobs</div>
                          <div>
                            {" "}
                            <span>
                              <IoIosArrowForward />
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-6">
            <div className="w-[400px] h-[25rem] bg-[#fff] rounded-lg hover:cursor-pointer hover:shadow-lg mx-auto transition-all group">
              <div className="p-5">
                <div className="py-5">
                  <div>
                    <img
                      src="https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Fic-paytm.png&w=1920&q=75"
                      className=" w-[120px] h-[60px] object-contain"
                    />
                  </div>
                </div>
                <div className=" py-10">
                  <div className="">
                    <h1 className="text-xl font-bold md:text-2xl">
                      Paytm Service Pvt. Ltd.
                    </h1>
                    <div></div>
                    <div className=" py-5">
                      <div className="text-lg">
                        Digital payment and e-commerce facilitator.
                      </div>
                    </div>
                    <div className=" py-5 px-3">
                      <button
                        type="button"
                        className="mb-2 me-2 rounded-lg px-5 py-2.5 text-lg md;text-xl active:scale-95 transition-all font-bold  text-[#27B0A5] group-hover:bg-[#27B0A5] group-hover:text-white focus:outline-none focus:ring-4"
                      >
                        <div className="flex items-center">
                          <div>View Jobs</div>
                          <div>
                            {" "}
                            <span>
                              <IoIosArrowForward />
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-6">
            <div className="w-[400px] h-[25rem]  bg-[#fff] rounded-lg hover:cursor-pointer hover:shadow-lg mx-auto transition-all group">
              <div className="p-5">
                <div className="py-5">
                  <div>
                    <img
                      src="https://apna.co/_next/image?url=https%3A%2F%2Fapna-organization-logos.gumlet.io%2Fproduction%2F322333%3Fw%3D128&w=1920&q=75"
                      className=" w-[120px] h-[60px] object-contain"
                    />
                  </div>
                </div>
                <div className=" py-10">
                  <div className="">
                    <h1 className="text-xl font-bold md:text-2xl px-7">
                      Zomato
                    </h1>
                    <div></div>
                    <div className=" py-5">
                      <div className="text-lg px-7">
                        Online food delivery marketplace.
                      </div>
                    </div>
                    <div className=" py-5 px-3">
                      <button
                        type="button"
                        className="mb-2 me-2 rounded-lg px-5 active:scale-95 transition-all py-2.5 text-lg md;text-xl font-bold  text-[#27B0A5] group-hover:bg-[#27B0A5] group-hover:text-white focus:outline-none focus:ring-4"
                      >
                        <div className="flex items-center">
                          <div>View Jobs</div>
                          <div>
                            {" "}
                            <span>
                              <IoIosArrowForward />
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-6">
            <div className="w-[400px] h-[25rem] bg-[#fff] rounded-lg hover:cursor-pointer hover:shadow-lg mx-auto transition-all  group">
              <div className="p-5">
                <div className="py-5">
                  <div>
                    <img
                      src="https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Fic-paytm.png&w=1920&q=75"
                      className=" w-[120px] h-[60px] object-contain"
                    />
                  </div>
                </div>
                <div className=" py-10">
                  <div className="">
                    <h1 className="text-xl font-bold md:text-2xl">
                      Paytm Service Pvt. Ltd.
                    </h1>
                    <div></div>
                    <div className=" py-5">
                      <div className="text-lg">
                        Digital payment and e-commerce facilitator.
                      </div>
                    </div>
                    <div className=" py-5 px-3">
                      <button
                        type="button"
                        className="mb-2 me-2 rounded-lg px-5 py-2.5 active:scale-95 transition-all text-lg md;text-xl font-bold  text-[#27B0A5] group-hover:bg-[#27B0A5] group-hover:text-white focus:outline-none focus:ring-4"
                      >
                        <div className="flex items-center">
                          <div>View Jobs</div>
                          <div>
                            {" "}
                            <span>
                              <IoIosArrowForward />
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Job_in_TopCompanies;
