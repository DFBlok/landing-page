import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col  bg-gray-400 items-center  min-h-screen ">
      <section className="flex flex-col gap-5 md:flex-row items-center justify-between py-12 md:py-24 px-6 md:px-12 w-full max-w-screen-xl mx-auto">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8  text-center md:text-left   p-5">
          <h3 className="text-2xl md:text-6xl font-bold text-gray-900 mb-4">
            Master the <span className="text-orange-400">MERN Stack</span> in 8
            Weeks
          </h3>
          <h2 className="text-lg text-gray-100 pt-5 pb-5">
            Become a full-stack developer with MongoDB, Express, React and
            Node.js
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nesciunt perspiciatis nulla, molestias architecto voluptates dolore
            reprehenderit error unde nemo dolor ducimus blanditiis, quis culpa
            ipsam ipsa recusandae. Sequi, pariatur.
          </p>
          <a
            className="bg-orange-400 text-white py-4 px-9 rounded-full hover:bg-orange-700 transition"
            href="#PricePlan"
          >
            Enroll Now
          </a>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 px-5 sm:flex mb-8 md:mb-0 p-5 ">
          <Image
            src="/mern.jpg"
            alt="logo"
            width={600}
            height={200}
            className="rounded-xl shadow-lg transition-all hover:scale-110 duration-300"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
