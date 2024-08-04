// components/ServiceInfo.js actuly 3 aurat wala
import Image from "next/image";
import React from "react";

const ServiceInfo = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 p-8">
          <div className="mb-4">
            <span className="text-xs font-semibold text-green-600 uppercase bg-green-100 py-1 px-2 rounded">
              Waste Disposal & Recycling Services in Commercial & Domestic
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            The Pioneers In The Recycling Service!
          </h1>
          <p className="text-gray-600 mb-4">
            We are providing the effectively waste disposal & recycling service
            with our modern technologies, we serve commonly, client first
            priority.
          </p>
          <p className="text-gray-600 mb-6">
            How can better environment for future universe to recycling waste
            disposal? We believe the most effective strategy is to stop waste
            from entering the ocean in the first place.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-30">
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2zM4 6c0-2.2 1.8-4 4-4s4 1.8 4 4H4zM20 6c0-2.2 1.8-4 4-4s4 1.8 4 4H20z"
                ></path>
              </svg>
              <span className="text-gray-700">Ontime Scheduled</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18v18H3z"
                ></path>
              </svg>
              <span className="text-gray-700">24/7 Services</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 12l8-8-8 8zM12 12l-8 8 8-8z"
                ></path>
              </svg>
              <span className="text-gray-700">Affordable Cost</span>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <Image
            className="object-cover w-full h-full"
            src="https://www.iideainformatics.it/html/devgalaxy/ecofix/assets/img/about/about.jpg"
            alt="Recycling Service"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-0 right-0 p-4 bg-green-600 text-white rounded-tl-lg">
            <div className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2zM4 6c0-2.2 1.8-4 4-4s4 1.8 4 4H4zM20 6c0-2.2 1.8-4 4-4s4 1.8 4 4H20z"
                ></path>
              </svg>
              <span className="text-2xl font-semibold">4754</span>
            </div>
            <div className="text-sm">Happy Customers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
