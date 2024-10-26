import Apply from "@/components/Apply/Apply";

import Hero from "@/components/Hero/Hero";
import Home from "@/components/Home/Home";

import PricePlan from "@/components/PricePlan/PricePlan";

import React from "react";

const HomePage = () => {
  return (
    <div>
      <Home />

      <Hero />
      <Apply />
      <PricePlan />
      {/* <Newsletter /> */}

      {/* ----------Tester pages */}
      {/* <CourseBenefits />
      <Testimonials /> */}
      {/* <ServiceList /> */}
      {/* Tester pages ----------*/}
      {/* <FeatureSection /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
