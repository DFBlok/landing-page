import Apply from "@/components/Apply/Apply";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Home from "@/components/Home/Home";
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";
import Newsletter from "@/components/Newsletter/Newsletter";
import PricePlan from "@/components/PricePlan/PricePlan";
import Testimonials from "@/components/Testimonials/Testimonials";

import React from "react";

const HomePage = () => {
  return (
    <div>
      <Home />

      <Hero />
      <Apply />
      <PricePlan />
      <Newsletter />
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
