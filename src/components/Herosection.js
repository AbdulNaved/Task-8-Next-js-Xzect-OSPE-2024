// pages/index.js


export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://iideainformatics.it/html/devgalaxy/ecofix/assets/img/slider/slide-1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Thought Solution to Safe Environment
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Ecofix is a household name for having been the pioneer of Recycling
            and Waste Disposal Services in country from the corporate clients to
            the average person.
          </p>
          <a
            href="#learn-more"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

