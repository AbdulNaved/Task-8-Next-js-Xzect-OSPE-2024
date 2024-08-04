// components/RecyclingSection.js 7

import React from "react";

const RecyclingSection = () => {
  return (
    <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-green-900 text-white p-6 rounded">
        <h2 className="text-4xl font-bold">
          Time Is The Best Way To Think About Recycling
        </h2>
        <p className="mt-4">
          Recycling is not just learning which bin to throw an item into. It’s
          about appreciating the resources that went into making the item and
          understanding the value of these materials. You will truly understand
          recycling if you change your mindset.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center">
            <span className="bg-white text-green-700 p-2 rounded-full mr-2">
              ✔
            </span>{" "}
            Reduce Greenhouse Effect
          </li>
          <li className="flex items-center">
            <span className="bg-white text-green-700 p-2 rounded-full mr-2">
              ✔
            </span>{" "}
            Conserve Natural Resources
          </li>
          <li className="flex items-center">
            <span className="bg-white text-green-700 p-2 rounded-full mr-2">
              ✔
            </span>{" "}
            Reduces Carbon Emissions
          </li>
          <li className="flex items-center">
            <span className="bg-white text-green-700 p-2 rounded-full mr-2">
              ✔
            </span>{" "}
            Protects Ecosystems
          </li>
          <li className="flex items-center">
            <span className="bg-white text-green-700 p-2 rounded-full mr-2">
              ✔
            </span>{" "}
            Economic Benefits
          </li>
        </ul>
        <button className="mt-6 bg-white hover:bg-gray-100 text-green-700 font-bold py-2 px-4 rounded">
          CONTACT US
        </button>
      </div>

      <div className="bg-green-900 text-white p-6 rounded">
        <h3 className="text-2xl font-bold">Request A Quote</h3>
        <p className="mt-2">
          There are various ways to reduce waste so you can have the peace of
          mind that you’re making a positive impact.
        </p>
        <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
          <input
            className="border p-2 rounded"
            type="text"
            placeholder="Name"
          />
          <input
            className="border p-2 rounded"
            type="text"
            placeholder="Company Name"
          />
          <input
            className="border p-2 rounded"
            type="text"
            placeholder="Contact Number"
          />
          <input
            className="border p-2 rounded"
            type="email"
            placeholder="E-mail"
          />
          <select className="border p-2 rounded">
            <option>Select Service Type</option>
          </select>
          <select className="border p-2 rounded">
            <option>Select Recycling Type</option>
          </select>
          <input className="border p-2 rounded" type="date" />
          <input className="border p-2 rounded" type="time" />
          <button className="md:col-span-2 bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mt-4">
            SUBMIT REQUEST
          </button>
        </form>
      </div>
    </section>
  );
};

export default RecyclingSection;
