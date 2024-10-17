import React from "react";

const PricePlan = () => {
  return (
    <div
      id="PricePlan"
      className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
        {/* Frontend Plan */}
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              Frontend
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700">
              Perfect for individuals or small teams building UI components.
            </p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {" "}
                R2,875.00{" "}
              </strong>
            </p>

            <a
              className="mt-4 block rounded border  bg-orange-400 px-12 py-3 text-center text-sm font-medium text-white hover:text-white hover:bg-orange-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
              href="#"
            >
              Get Started
            </a>
          </div>

          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">
              What&apos;s included:
            </p>

            <ul className="mt-2 space-y-2 sm:mt-4">
              <li className="text-gray-700">
                Access to modern frontend libraries
              </li>
              <li className="text-gray-700">10 users included in the plan</li>
              <li className="text-gray-700">2GB cloud storage for UI assets</li>
              <li className="text-gray-700">Email-based technical support</li>
              <li className="text-gray-700">
                Basic documentation for quick setup
              </li>
            </ul>
          </div>
        </div>

        {/* Backend Plan */}
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              Backend
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700">
              Ideal for teams focused on building robust APIs and server logic.
            </p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {" "}
                R1,725.00{" "}
              </strong>
            </p>

            <a
              className="mt-4 block rounded border  bg-orange-400 px-12 py-3 text-center text-sm font-medium text-white hover:text-white hover:bg-orange-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
              href="#"
            >
              Get Started
            </a>
          </div>

          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">
              What&apos;s included:
            </p>

            <ul className="mt-2 space-y-2 sm:mt-4">
              <li className="text-gray-700">
                Access to backend tools and frameworks
              </li>
              <li className="text-gray-700">20 users included in the plan</li>
              <li className="text-gray-700">5GB cloud storage for databases</li>
              <li className="text-gray-700">
                Phone and email technical support
              </li>
              <li className="text-gray-700">Comprehensive API documentation</li>
            </ul>
          </div>
        </div>

        {/* DevOps Plan */}
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              DevOps
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700">
              Best suited for teams managing deployment pipelines and cloud
              infrastructure.
            </p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {" "}
                R1,800.00{" "}
              </strong>
            </p>

            <a
              className="mt-4 block rounded border  bg-orange-400 px-12 py-3 text-center text-sm font-medium text-white hover:text-white hover:bg-orange-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
              href="#"
            >
              Get Started
            </a>
          </div>

          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">
              What&apos;s included:
            </p>

            <ul className="mt-2 space-y-2 sm:mt-4">
              <li className="text-gray-700">
                Access to DevOps tools and platforms
              </li>
              <li className="text-gray-700">20 users included in the plan</li>
              <li className="text-gray-700">
                5GB cloud storage for deployments
              </li>
              <li className="text-gray-700">
                Phone and email technical support
              </li>
              <li className="text-gray-700">Comprehensive deployment guides</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePlan;
