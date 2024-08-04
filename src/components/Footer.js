// components/Footer.js 10
import React from "react";
import "../app/Footer.module.css"

const Footer = () => {
  return (
    <footer>
      <div className="flex w-full flex-wrap md:text-left text-center order-first bg-green-800 text-white py-12">
        <div className="flex lg:w-1/4 md:w-1/2 w-full px-4 mb-8 md:mb-0">
          <Image
            className="flex-wrap md:flex-wrap w-32 h-auto"
            src="https://iideainformatics.it/html/devgalaxy/ecofix/assets/img/logo-white.png"
            alt="Ecofix Recycling Logo"
          />
          <div className="ml-3">
            <p>Location: 123, Broklyn Street, New York</p>
            <p>Phone: +99 268 827 2500</p>
            <p>E-mail: info@ecofix.com</p>
            <p>Opening Hour: 08.00 AM - 09.00 PM</p>
          </div>
        </div>

        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 md:mb-0">
          <h4 className="font-bold mb-4">Company</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Meet Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                News & Media
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Project
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 md:mb-0">
          <h4 className="font-bold mb-4">Services</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Paper Recycling
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Plastic Recycling
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Glass Recycling
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Metal Recycling
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Electronics Recycling
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h4 className="font-bold mb-4">Newsletter</h4>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="p-2 mb-2 w-full text-black rounded-md"
            />
            <button
              className="bg-green-400 rounded-xl py-3 px-4 hover:bg-red-500 w-full"
              type="submit"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4">Stay tuned for our latest news</p>
        </div>
        <div
          className={`${Footer.module} mt-8 py-4 flex flex-col items-center`}
        >
          <p className="text-lg flex flex-wrap items-center justify-center text-center">
            &copy; 2024 Ecofix. All rights reserved.
            <span className="text-red-500 mx-2">❤️</span>
            <span className="font-bold">Xzect OSPE 2024</span>
          </p>
          <div className="flex flex-wrap space-x-4 mt-2 justify-center">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Recycling Tips
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
