// 66666
import Image from "next/image";
import React from "react";

const CoreFeature = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white rounded-lg shadow-md overflow-hidden">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto relative">
          <img
            className="object-cover w-full h-full"
            src="https://www.iideainformatics.it/html/devgalaxy/ecofix/assets/img/choose_us.jpg"
            alt="Recycling Image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-sm font-semibold text-green-600 uppercase">
            Our Core Feature
          </h2>
          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Why You Should Take Our Eco-friendly Services?
          </h1>
          <p className="mt-4 text-gray-600">
            There might be a lot of talk about reusing and recycling these days
            but taking discarded materials and turning them into something new
            is by no means a modern concept. People have been discarding and
            reusing materials for a very long time ago.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center">
            <div className="flex items-center mr-6 mb-4 sm:mb-0">
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
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="ml-2 text-gray-700">Convenient Pickup</span>
            </div>
            <div className="flex items-center">
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
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="ml-2 text-gray-700">Reducing Waste</span>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="mt-8">
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-green-700">
                  Recycling Service
                </span>
                <span className="text-sm font-medium text-green-700">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-green-700">
                  Waste Management
                </span>
                <span className="text-sm font-medium text-green-700">70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreFeature;
