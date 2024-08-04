// components/LatestNews.js 9
import React from "react";

const LatestNews = () => {
  return (
    <div>
      <header className="font-medium flex justify-center mt-20 text-2xl text-gray-500">
        <h1>Our Latest News & Articles</h1>
      </header>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://iideainformatics.it/html/devgalaxy/ecofix/assets/img/blog/1.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Sainsbury’s Announces New In-Store Wastage Recycling Scheme.
                  </h1>
                  <p className="leading-relaxed mb-3">
                    There are some reason Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Dolorem, facilis perferendis
                    ipsam..
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
                  src="https://iideainformatics.it/html/devgalaxy/ecofix/assets/img/blog/2.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Plastic Free July: Who produces the most plastic waste?
                  </h1>
                  <p className="leading-relaxed mb-3">
                    There are some reason Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Dolorem, facilis perferendis
                    ipsam..
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
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Government figures show declining recycling rates in the UK
                  </h1>
                  <p className="leading-relaxed mb-3">
                    There are some reason Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Dolorem, facilis perferendis
                    ipsam..
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
  );
};

export default LatestNews;
