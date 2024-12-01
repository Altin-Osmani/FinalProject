import React from 'react';

function IndustriesCardComponent({ Icon, title, body }) {
    return (
      <div className="w-full bg-cybergray text-center text-white py-8 px-4 rounded-md shadow-lg transition-transform hover:scale-105">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <img src={Icon} alt={`${title} Icon`} className="h-16 w-16" />
        </div>
        {/* Title */}
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        {/* Body */}
        <p className="text-sm leading-6 mb-6">{body}</p>
        {/* Button */}
        <button className="bg-cyberorange hover:bg-orange-600 text-white py-2 px-6 ">
          See More
        </button>
      </div>
    );
  }
  
 

export default IndustriesCardComponent;
