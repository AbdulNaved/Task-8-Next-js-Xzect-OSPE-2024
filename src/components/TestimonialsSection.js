import React from "react";
import Image from "next/image"; // Ensure this import is added

const TestimonialsSection = () => {
  return (
    <section className="mt-12 bg-green-100 text-green-900 p-6 rounded">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-4">
          <Image
            className="w-16 h-16 rounded-full"
            src="https://www.iideainformatics.it/html/devgalaxy/ecofix/assets/img/testimonial/1.jpg"
            alt="Pat Cummins"
            width={64} // Add width
            height={64} // Add height
          />
          <div>
            <p className="italic">
              &quot;They helped lead me through the process of system selection, site
              layout and place my order. They were informed and has provided
              guidance each step.&quot;
            </p>
            <p className="mt-2 font-bold">
              Pat Cummins, <span className="text-gray-500">Delta Inc.</span>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Image
            className="w-16 h-16 rounded-full"
            src="https://www.iideainformatics.it/html/devgalaxy/ecofix/assets/img/testimonial/2.jpg"
            alt="Lin Nathasha"
            width={64} // Add width
            height={64} // Add height
          />
          <div>
            <p className="italic">
              &quot;They helped lead me through the process of system selection, site
              layout and place my order. They were informed and has provided
              guidance each step.&quot;
            </p>
            <p className="mt-2 font-bold">
              Lin Nathasha,{" "}
              <span className="text-gray-500">Expoint Logistics</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
