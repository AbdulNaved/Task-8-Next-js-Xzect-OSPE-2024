import React from 'react';
import Image from 'next/image';
import styles from '../app/Footer.module.css'; // Updated to use CSS module properly

const Footer = () => {
  return (
    <footer>
      <div className="flex w-full flex-wrap md:text-left text-center order-first bg-green-800 text-white py-12">
        <div className="flex lg:w-1/4 md:w-1/2 w-full px-4 mb-8 md:mb-0">
          <Image
            className="flex-wrap md:flex-wrap w-32 h-auto"
            src="https://iideainformatics.it/html/devgalaxy/ecofix/assets/img/logo-white.png"
            alt="Ecofix Recycling Logo"
            width={128} // Add width for Image component
            height={128} // Add height for Image component
          />
          <div className="ml-3">
            <p>Location: 123, Broklyn Street, New York</p>
            <p>Phone: +99 268 827 2500</p>
            <p>E-mail: info@ecofix.com</p>
            <p>Opening Hour: 08.00 AM - 09.00 PM</p>
          </div>
        </div>

        {/* The rest of your code remains unchanged */}

        <div className={`${styles.Footer} mt-8 py-4 flex flex-col items-center`}>
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
