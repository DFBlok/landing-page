import React from "react";

const FeatureSection = () => {
  return (
    <section className="py-20 bg-gray-400">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Easy Scheduling
            </h3>
            <p className="text-gray-600">
              Book your appointments quickly with our user-friendly interface.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Secure Payments
            </h3>
            <p className="text-gray-600">
              Integrated with Stripe for seamless and secure transactions.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              24/7 Availability
            </h3>
            <p className="text-gray-600">
              Book anytime, from anywhere with our 24/7 online system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
