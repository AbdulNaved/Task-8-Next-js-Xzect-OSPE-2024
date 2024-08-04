//55555555
import Image from "next/image";
import React from "react";

const Solutions = () => {
  return (
    <div className="font-medium flex justify-center items-center mt-5 mb-5">
      <div className="container">
        <div className="font-medium text-green-900 flex flex-col items-center text-center text-2xl">
          <p>Revolution Ongoing Development</p>
          <h1 className="text-3xl">
            Recently Recycling Solutions And Waste Management
          </h1>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://iideainformatics.it/html/devgalaxy/ecofix/assets/img/project/1.jpg"
                    alt="Plastic Recycling Services"
                    layout="responsive"
                    width={720}
                    height={400}
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Plastic Recycling Services
                    </h1>
                    <p className="leading-relaxed mb-3">
                      More than 35 million tons of plastics were generated in
                      the United States and only 8.7 percent was recycled.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://iideainformatics.it/html/devgalaxy/ecofix/assets/img/project/2.jpg"
                    alt="Metal Recycling Services"
                    layout="responsive"
                    width={720}
                    height={400}
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Metal Recycling Services
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Their primary purpose is to ship normal packages in
                      basically the same ways that the postal service does.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://iideainformatics.it/html/devgalaxy/ecofix/assets/img/blog/3.jpg"
                    alt="Aluminium Recycling Services"
                    layout="responsive"
                    width={720}
                    height={400}
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Aluminium Recycling Services
                    </h1>
                    <p className="leading-relaxed mb-3">
                      In 2018, 3.9 million tons of aluminum municipal waste was
                      generated. The total recycling rate was 34.9 percent.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solutions;
