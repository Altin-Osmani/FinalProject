"use client";
import React, { useEffect, useRef } from "react";

export default function HomeCardComponent({ Icon, title, body }) {
  const iconRef = useRef(null); 

  useEffect(() => {
    if (iconRef.current) {
      
      const paths = iconRef.current.querySelectorAll("path");
      paths.forEach((path) => {
        path.setAttribute("fill", "white");
      });
    }
  }, [Icon]); 

  return (
    <div className="w-full h-auto p-4 md:p-6 lg:p-[30px] bg-[#292929] flex flex-col justify-start items-start gap-6 md:gap-8">
      <div className="w-full h-auto flex flex-col justify-start items-start gap-4 md:gap-6 space-y-6">
        {/* Render the Icon */}
        {Icon && (
          <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
            {typeof Icon === "function" ? (
              <div ref={iconRef}>
                <Icon className="w-full h-full" />
              </div>
            ) : (
              <img src={Icon} alt={title} className="w-full h-full" />
            )}
          </div>
        )}

        <div className="w-full text-white text-xl md:text-2xl font-medium leading-normal md:leading-[30px]">
          {title}
        </div>
        <div className="w-full text-white text-sm md:text-base font-normal leading-relaxed">
          {body}
        </div>
      </div>
       <button className="w-2/3 h-auto py-2 bg-[#ff6f0f] flex justify-center items-center">
        <div className="text-white text-sm md:text-base font-bold leading-tight">
          See More
        </div>
      </button>
    </div>
  );
}
