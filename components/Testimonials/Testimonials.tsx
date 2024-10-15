import React from "react";

const Testimonials = () => {
  return (
    <div className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <p className="mb-4">
              "This course transformed my career. I went from beginner to
              building full-stack apps!"
            </p>
            <h3 className="font-semibold">– Sarah K., Full-Stack Developer</h3>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <p className="mb-4">
              "The mentors were amazing and really helped me build confidence in
              coding."
            </p>
            <h3 className="font-semibold">– John D., Junior Developer</h3>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <p className="mb-4">
              "Best investment I've made. I landed a job within 3 months of
              finishing."
            </p>
            <h3 className="font-semibold">– Emma R., Front-End Developer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
