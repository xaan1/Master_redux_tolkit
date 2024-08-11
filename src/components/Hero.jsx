import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-100 py-10 ">
      <div className="container mx-auto flex gap-x-3 flex-col md:flex-row items-center">
        {/* Left Side: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Welcome to Our Bookshop
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            Discover a world of books at unbeatable prices. Find your next great read with us!
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 mt-6 rounded-md hover:bg-blue-700">
            Shop Now
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://images.pexels.com/photos/953864/pexels-photo-953864.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Bookshop"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
