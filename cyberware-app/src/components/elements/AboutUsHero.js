import React from "react";

export default function AboutUsHero() {
  return (
    <>
      <div className="flex w-full !min-h-[85vh]  bg-[url('/HeroBG/aboutUsHero.jpg')] bg-cover bg-center mx-auto items-center text-balance p-10">
        <div className="container w-full mx-auto flex justify-center text-center text-white pb-20">
          <h1 className="text-3xl md:text-8xl font-bold">
            <span className="text-cyberorange">Protecting</span> the digital
            future through innovative cybersecurity
            <span className="text-cyberorange"> solutions</span>
          </h1>
        </div>
      </div>
    </>
  );
}
