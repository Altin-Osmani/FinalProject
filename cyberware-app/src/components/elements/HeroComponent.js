import React from "react";

export default function HeroComponent() {
  return (
    <>
      <div className="flex w-full !min-h-[80vh]  bg-[url('/herobg.jpg')] bg-cover bg-center mx-auto items-stretch p-8">
        <div className="container w-full mx-auto max-w-screen-xl flex flex-col justify-evenly ">
          <div className="flex flex-col">
            <span className="text-white text-xl md:text-3xl text-left">
              Your Cybersecurity Experts
            </span>
            <span className="text-cyberorange text-xl md:text-3xl text-left">
              Securing the Future Today
            </span>
          </div>
          <div className="w-full">
            <span className="text-white text-4xl md:text-7xl ">Tailored, </span>
            <span className="text-cyberorange text-4xl md:text-7xl font-extrabold">
              AI-driven solutions
            </span>
            <span className="text-white text-4xl md:text-7xl "> to </span>
            <div className="flex flex-col md:flex-row">
              <span className="text-white text-4xl md:text-7xl pr-0 md:pr-4 border-0 md:border-r-2 md:border-r-orange-500">
                protect your business
              </span>
              <span className="text-white items-center pr-0 md:pl-4 w-full md:w-1/3 mt-2 ">
                "Protecting the digital future through innovative cybersecurity
                solutions, we empower businesses to safeguard their assets,
                ensure compliance, and maintain trust in an increasingly
                connected world."
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-5 justify-center ">
            <button className="border border-white px-6 py-2 text-white hover:bg-white hover:text-cyberorange flex items-center">
              <span className="mr-4">
                <img src="/btnIcon.png" alt="" className="w-6" />
              </span>
              Free Consulation
            </button>
            <button className="bg-cyberorange border border-cyberorange px-6 py-2 text-white hover:bg-white hover:text-cyberorange hover:border-white">
              Get Started Today
            </button>
          </div>
          <div></div>
          <div className=" grid grid-cols-2 md:grid-cols-5 items-bottom gap-5 justify-items-stretch w-full text-white mt-4 ">
            <span>Finance</span>
            <span>Healthcare</span>
            <span>Government</span>
            <span>Game</span>
            <span className="md:justify-self-center">Education</span>
          </div>
        </div>
      </div>
    </>
  );
}
