import React from "react";
import { GiMegaphone } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

const PopularJobCategories = () => {
  const integrations = [
    {
      title: "Work-From-Home Jobs",
      desc: "(82 open positions)",
      icon: <FaHome size={30} />,
    },
    {
      title: "Freelancing Jobs",
      desc: "(21 open positions)",
      icon: <GiMegaphone size={30} />,
    },
    {
      title: "Accounting/Finance",
      desc: "(43 open positions)",
      icon: <MdAccountBalance size={30} />,
    },
    {
      title: "IT Jobs",
      desc: "(145 open positions)",
      icon: <FaLaptopCode size={30} />,
    },
    {
      title: "Work-From-Home Jobs",
      desc: "(82 open positions)",
      icon: <FaHome size={30} />,
    },
    {
      title: "Freelancing Jobs",
      desc: "(21 open positions)",
      icon: <GiMegaphone size={30} />,
    },
    {
      title: "Accounting/Finance",
      desc: "(43 open positions)",
      icon: <MdAccountBalance size={30} />,
    },
    {
      title: "IT Jobs",
      desc: "(145 open positions)",
      icon: <FaLaptopCode size={30} />,
    },
    {
      title: "Work-From-Home Jobs",
      desc: "(82 open positions)",
      icon: <FaHome size={30} />,
    },
    {
      title: "Freelancing Jobs",
      desc: "(21 open positions)",
      icon: <GiMegaphone size={30} />,
    },
    {
      title: "Accounting/Finance",
      desc: "(43 open positions)",
      icon: <MdAccountBalance size={30} />,
    },
    {
      title: "IT Jobs",
      desc: "(145 open positions)",
      icon: <FaLaptopCode size={30} />,
    },
    {
      title: "Work-From-Home Jobs",
      desc: "(82 open positions)",
      icon: <FaHome size={30} />,
    },
    {
      title: "Freelancing Jobs",
      desc: "(21 open positions)",
      icon: <GiMegaphone size={30} />,
    },
    {
      title: "Accounting/Finance",
      desc: "(43 open positions)",
      icon: <MdAccountBalance size={30} />,
    },
    {
      title: "IT Jobs",
      desc: "(145 open positions)",
      icon: <FaLaptopCode size={30} />,
    },
  ];
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className=" grid place-items-center  w-full">
          <h1 className="text-gray-800 text-xl font-medium sm:text-2xl">
            Popular Job Categories
          </h1>
        </div>
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((item, idx) => (
            <li className="border rounded-lg">
              <div className="flex items-start justify-between p-4">
                <div className="space-y-2">
                  <div className="grid place-items-center w-[4rem] h-[4rem] text-white rounded-full bg-indigo-600">
                    {item.icon}
                  </div>
                  <h4 className="text-gray-800 font-semibold">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PopularJobCategories;
