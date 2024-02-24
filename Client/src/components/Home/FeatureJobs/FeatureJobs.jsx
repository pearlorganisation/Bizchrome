import { IoIosArrowForward } from "react-icons/io";
import Marquee from "react-fast-marquee";
import { FaHome } from "react-icons/fa";
const FeatureJobs = () => {
  const jobsOpening = [
    {
      title: "Work-From-Home Jobs",
      desc: "82 open positions",
      icon: <FaHome size={30} />,
    },
    {
      title: "Freelancing Jobs",
      desc: "21 open positions",
      icon: <FaHome size={30} />,

    },
    {
      title: "Accounting/Finance",
      desc: "43 open positions",
      icon: <FaHome size={30} />,

    },
    {
      title: "IT Jobs",
      desc: "145 open positions",
      icon: <FaHome size={30} />,

    },
    {
      title: "Work-From-Home Jobs",
      desc: "82 open positions",
      icon: <FaHome size={30} />,

    },
    {
      title: "Freelancing Jobs",
      desc: "21 open positions",
      icon: <FaHome size={30} />,

    },
    {
      title: "Accounting/Finance",
      desc: "43 open positions",
      icon: <FaHome size={30} />,

    },
    {
      title: "IT Jobs",
      desc: "145 open positions",
      icon: <FaHome size={30} />,

    },
    {
      title: "Work-From-Home Jobs",
      desc: "82 open positions",
      icon: <FaHome size={30} />,

    },
    {
      title: "Freelancing Jobs",
      desc: "21 open positions",
      icon: <FaHome size={30} />,

    },
    {
      title: "Accounting/Finance",
      desc: "43 open positions",
      icon: <FaHome size={30} />,

    },
    {
      title: "IT Jobs",
      desc: "145 open positions",
      icon: <FaHome size={30} />,

    },
    {
      title: "Work-From-Home Jobs",
      desc: "82 open positions",
      icon: <FaHome size={30} />,

    },
    {
      title: "Freelancing Jobs",
      desc: "21 open positions",
      icon: <FaHome size={30} />,

    },
    {
      title: "Accounting/Finance",
      desc: "43 open positions",
      icon: <FaHome size={30} />,

    },
    {
      title: "IT Jobs",
      desc: "145 open positions",
      icon: <FaHome size={30} />,

    },
  ];
  return (
    <div className="py-12">
      <div className="text-center ">
        <h1 className="text-lg md:text-3xl font-semibold">
          Trending job roles on Bizchrome
        </h1>
      </div>
      <div className=" py-6 w-screen">
        <Marquee pauseOnHover speed={100}>
          {jobsOpening
            .map((item, indx) => (
              <div className="mx-5 cursor-pointer group">
                <div className="flex justify-start items-center border-2 rounded-lg max-w-[280px] hover:border-2 transition-all  hover:border-teal-400">
                  <div className="p-5">
                    <div className="text-gray-300 group-hover:text-teal-400">
                      {item.icon}
                    </div>
                  </div>

                  <div className="flex flex-col ">
                    <div>
                      <h1 className="line-clamp-1">{item.title}</h1>
                    </div>
                    <div>
                      <p>{item.desc}</p>
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
          {jobsOpening
            .map((item, indx) => (
              <div className="mx-5 cursor-pointer group">
                <div className="flex justify-start items-center border-2 rounded-lg max-w-[280px] hover:border-2 transition-all  hover:border-teal-400">
                  <div className="p-5">
                    <div className="text-gray-300 group-hover:text-teal-400">
                      {item.icon}
                    </div>
                  </div>

                  <div className="flex flex-col ">
                    <div>
                      <h1 className="line-clamp-1">{item.title}</h1>
                    </div>
                    <div>
                      <p>{item.desc}</p>
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
    </div>
  );
};

export default FeatureJobs;
