// components/RecyclingSteps.js 44
import Image from "next/image";
import React from "react";

const Step = () => {
  return (
    <div className="container mx-auto p-4 bg-green-900 text-white">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-3xl font-bold">
          RECYCLING WASTAGE SAVE ENVIRONMENT!
        </h1>
        <h2 className="text-4xl font-bold mt-4">
          Simple Steps Wastage to Recycling Item Processing
        </h2>
        <p className="mt-4">
          Recycling is the process of converting waste materials into new
          materials and objects. To do this, recycling often requires both
          machinery and employees to correctly sort recyclable items based on
          the material they’re made of. This Waste Management video shows the
          step-by-step process of how materials are processed once they reach a
          facility.
        </p>
      </header>

      {/* Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
          GET STARTED
        </button>
        <button className="bg-white hover:bg-gray-100 text-green-700 font-bold py-2 px-4 rounded">
          VIEW OUR PLANS
        </button>
      </div>

      {/* Steps Section */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded text-black">
          <div className="bg-white">
            <img
              className="flex justify-center iteam-center"
              src="https://iideainformatics.it/html/devgalaxy/ecofix/assets/img/process/1.png"
              alt="Collection Wastage"
              layout="responsive"
              width={200}
              height={200}
            />
            <h4 className="text-2xl font-bold mt-2">Collection Wastage</h4>
            <p className="mt-2">
              Recycling is the process of making used or unwanted products into
              new.
            </p>
          </div>
        </div>
        <div className="bg-white text-black p-6 rounded">
          <div>
            <img
              className="flex justify-center iteam-center"
              src="https://iideainformatics.it/html/devgalaxy/ecofix/assets/img/process/2.png"
              alt="Pickup Wastage"
              layout="responsive"
              width={200}
              height={200}
            />
            <h4 className="text-2xl font-bold mt-2">Pickup Wastage</h4>
            <p className="mt-2">
              Recycling is the process of making used or unwanted products into
              new.
            </p>
          </div>
        </div>
        <div className="bg-white text-black p-6 rounded">
          <div>
            <img
              className="flex justify-center iteam-center"
              src="https://iideainformatics.it/html/devgalaxy/ecofix/assets/img/process/3.png"
              alt="Reduce Garbage"
              layout="responsive"
              width={200}
              height={200}
            />
            <h4 className="text-2xl font-bold mt-2">Reduce Garbage</h4>
            <p className="mt-2">
              Recycling is the process of making used or unwanted products into
              new.
            </p>
          </div>
        </div>
        <div className="bg-white text-black p-6 rounded">
          <div>
            <img
              className="flex justify-center iteam-center"
              src="https://iideainformatics.it/html/devgalaxy/ecofix/assets/img/process/4.png"
              alt="Recycling Process"
              layout="responsive"
              width={200}
              height={200}
            />
            <h4 className="text-2xl font-bold mt-2">Recycling Process</h4>
            <p className="mt-2">
              Recycling is the process of making used or unwanted products into
              new.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Step;
