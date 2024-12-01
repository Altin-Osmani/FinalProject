import React from "react";

export default function HomeIndustries() {
  return (
    <>
      <div className="py-12 bg-white">
        <div className="container mx-auto w-full max-w-screen-xl px-4 flex flex-col lg:flex-row items-center">
          {/* Left Side */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6 p-10">
            <p className="text-4xl font-semibold text-cyberorange">
              "Always On Guard: Your 24/7 Online Security Solution for Unmatched
              Protection"
            </p>
            <div className="py-6 flex space-x-4">
              {/* Explore Services Button */}
              <button
                type="button"
                className="border-2 border-cyberorange text-cyberorange font-medium py-3 px-12 hover:bg-cyberorange hover:text-white transition duration-300"
              >
                Explore our Services
              </button>

              {/* Book a Demo Button */}
              <button
                type="button"
                className="bg-cyberorange text-white font-medium py-3 px-20 hover:bg-orange-600 transition duration-300"
              >
                Book a Demo
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 flex justify-center items-center">
          <img src="/people/GIF.gif" alt="Animated GIF" className="w-full h-auto border-b-4 border-cyberorange" />
           
          </div>
        </div>
      </div>
      {/* bottom part  */}
      <div className="py-12 bg-white">
        
        <div className="container mx-auto w-full max-w-screen-xl px-4">
          {/* Industries We Serve Title */}
          <div className="w-full text-center mb-8">
            <p className="text-cyberorange text-3xl font-semibold pb-20">
              Industries We Serve
            </p>
          </div>
          <hr className="w-[120%] -ml-[10%] relative border-b-2 border-black !z-10" />
          {/* Icons Section */}
          <div className="w-full flex flex-wrap justify-between items-center space-x-8 py-8 -mt-14 relative !z-20">
            {/* Icon Items */}
            
            <div className="text-center">
              <img
                src="/HomeIcons/Frame 44.png" // Replace with actual icon path
                alt="Finance"
                className="h-16 mx-auto"
              />
            </div>
            <div className="text-center">
              <img
                src="/HomeIcons/Frame 45.png" // Replace with actual icon path
                alt="Healthcare"
                className="h-16 mx-auto"
              />
            </div>
            <div className="text-center">
              <img
                src="/HomeIcons/Frame 46.png" // Replace with actual icon path
                alt="Government"
                className="h-16 mx-auto"
              />
            </div>
            <div className="text-center">
              <img
                src="/HomeIcons/Frame 47.png" // Replace with actual icon path
                alt="Retail"
                className="h-16 mx-auto"
              />
            </div>
            <div className="text-center">
              <img
                src="/HomeIcons/Frame 48.png" // Replace with actual icon path
                alt="eGame"
                className="h-16 mx-auto"
              />
            </div>
            <div className="text-center">
              <img
                src="/HomeIcons/Frame 43.png" // Replace with actual icon path
                alt="Education"
                className="h-20 mx-auto"
              />
            </div>
          </div>

          {/* Get Started Button */}
          <div className="text-center mt-8">
            <button
              type="button"
              className="bg-cyberorange text-white font-medium py-3 px-12  hover:bg-orange-600 transition duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
