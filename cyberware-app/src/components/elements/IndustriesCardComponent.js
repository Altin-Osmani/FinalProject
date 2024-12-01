import React from 'react';


export default function IndustriesCardComponent() {
  return (
    <div className="w-full h-auto p-4 md:p-8 lg:p-12 bg-cybergray flex flex-col justify-center items-start gap-6 md:gap-8">
      {/* Placeholder for Image/Logo */}
      <div className="w-16 h-20 md:w-20 md:h-24 lg:w-[100px] lg:h-[127.26px] relative"></div>

      {/* Heading Section */}
      <div className="w-full flex justify-center items-center gap-2">
        <div className="grow">
          <span className="text-[#ff6f0f] text-3xl md:text-4xl lg:text-5xl font-bold font-['Roboto'] leading-tight md:leading-[48px] lg:leading-[56px]">
            Our
          </span>
          <span className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-['Roboto'] leading-tight md:leading-[48px] lg:leading-[56px]">
            Mission Statement
          </span>
        </div>
      </div>

      {/* Mission Statement Text */}
      <div className="w-full text-white text-base md:text-lg lg:text-2xl font-normal font-['Roboto'] leading-normal md:leading-8 lg:leading-10">
        At Cyberware Global Defense (CGD), our mission is to safeguard businesses by delivering
        cutting-edge cybersecurity solutions. By combining advanced AI technologies with
        industry-leading expertise, we ensure that our clients are protected from the evolving
        landscape of cyber threats. Our goal is to keep your business secure and resilient.
      </div>
    </div>
  );
}