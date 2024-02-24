import { IoIosArrowForward } from "react-icons/io";
import Marquee from "react-fast-marquee";
const FeatureJobs = () => {
  return (
    <>
      <div className="text-center ">
        <h1 className="text-lg text-xl md:text-3xl font-semibold">
          Trending job roles on Bizchrome
        </h1>
      </div>
      <div className=" py-6 w-screen">
        <Marquee pauseOnHover speed={100}>
          {Array(20)
            .fill(true)
            .map((item, indx) => (
              <div className="mx-5 cursor-pointer">
                <div className="flex justify-start items-center border-2 rounded-lg max-w-[280px] hover:border-2 transition-all  hover:border-teal-400">
                  <div className="p-5">
                    <div>
                      <img src="https://storage.googleapis.com/mumbai_apnatime_prod/department_icons/32.svg" />
                    </div>
                  </div>

                  <div className="flex flex-col ">
                    <div>
                      <h1>Tool and die maker</h1>
                    </div>
                    <div>
                      <p>52 opening</p>
                    </div>
                  </div>
                  <div>
                    <div className="p-4">
                      <IoIosArrowForward />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Marquee>
      </div>

      <div className=" py-6 w-screen">
        <Marquee direction="right" pauseOnHover speed={100}>
          {Array(20)
            .fill(true)
            .map((item, indx) => (
              <div className="mx-5 cursor-pointer">
                <div className="flex justify-start items-center border-2 rounded-lg max-w-[280px] hover:border-2 transition-all  hover:border-teal-400">
                  <div className="p-5">
                    <div>
                      <img src="https://storage.googleapis.com/mumbai_apnatime_prod/department_icons/32.svg" />
                    </div>
                  </div>

                  <div className="flex flex-col ">
                    <div>
                      <h1>Tool and die maker</h1>
                    </div>
                    <div>
                      <p>52 opening</p>
                    </div>
                  </div>
                  <div>
                    <div className="p-4">
                      <IoIosArrowForward />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Marquee>
      </div>
    </>
  );
};

export default FeatureJobs;
