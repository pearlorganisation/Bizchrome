import React from "react";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import Connntion from "../../components/Home/Connection/Connntion";
import Job_in_TopCompanies from "../../components/Home/Job_in_TopCompanies/Job_in_TopCompanies";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import TrustedBy from "../../components/Home/TrustedBy/TrustedBy";
import PopularSearch from "../../components/Home/PopularSearch/PopularSearch";
import FeatureJobs from "../../components/Home/FeatureJobs/FeatureJobs";

const Home = () => {
  return (
    <div className="min-h-dvh">
      <HeroSection />
      <Job_in_TopCompanies />
      <PopularSearch />
      <Connntion />
      <FeatureJobs />
      <Testimonials />
      <TrustedBy />
    </div>
  );
};

export default Home;
