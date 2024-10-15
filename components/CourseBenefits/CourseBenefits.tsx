import React from "react";

const CourseBenefits = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Our Course?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Hands-on Training</h3>
            <p>
              Learn by doing with real-world projects and code alongside
              experienced instructors.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Expert Mentorship</h3>
            <p>
              Get live support and guidance from industry professionals to help
              you along the way.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Flexible Schedule</h3>
            <p>
              Study at your own pace with flexible schedules designed for busy
              professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBenefits;
