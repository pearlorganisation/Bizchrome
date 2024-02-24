import React from "react";
import Logo from '../../../assets/Images/Biz-chrome-logo.png'
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  return (
    <>
      <section className="py-14">
        <div className="max-w-xl sm:text-center md:mx-auto py-12">
          <h3 className="text-3xl font-semibold sm:text-4xl">
            See What Others Saying About Us
          </h3>

        </div>
        <div className="w-full mx-auto px-4 md:px-8">
          <Marquee pauseOnHover>
            {
              Array(6).fill(true).map(item => {
                return <div className="max-w-3xl mx-8 cursor-pointer text-center">
                  <div className="pb-6">
                    <img src={Logo} width={80} className="mx-auto" />
                  </div>
                  <figure>
                    <blockquote>
                      <p className="text-gray-400 text-lg font-semibold sm:text-xl">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.“
                      </p>
                    </blockquote>
                    <div className="mt-6">
                      <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-14 h-14 mx-auto rounded-full" />
                      <div className="mt-3">
                        <span className="block text-gray-800 font-semibold">Martin escobar</span>
                        <span className="block text-gray-600 text-sm mt-0.5">Founder of meta</span>
                      </div>
                    </div>
                  </figure>
                </div>
              })
            }
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
