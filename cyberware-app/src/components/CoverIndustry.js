import React from 'react';

function CoverIndustry({ title, description, placeholder, buttonText }) {
  return (
    <div className=" py-12">
      <div className="container mx-auto max-w-screen-xl w-full px-4 flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div className="w-2/3 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-cyberslate text-balance">{title}</h2>
          <p className="text-cyberorange text-xl">{description}</p>
        </div>

        {/* Right Section */}
        <div className="w-1/3 flex flex-col space-y-8  p-10 justify-end">
          <div className="w-full border-b-2 border-cyberlightGray flex justify-end py-2">
            <span>
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 20c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 18V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4 4h16c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 20 20H4Zm8-7L4 8v10h16V8l-8 5Zm0-2 8-5H4l8 5ZM4 8V6v12V8Z" fill="#A5A1A1"/>
              </svg>
            </span>
            <span className="text-cyberlightGray ml-4">
              {placeholder}
            </span>

          </div>
          <div className="w-full flex justify-end">
          <button   className=" h-auto py-2 px-3 bg-orange-500  items-center">
          <div className="text-white text-sm md:text-base font-bold ">
          {buttonText}
          </div>
         </button>
          </div>
        
          </div>
      </div>
    </div>
  );
}

export default CoverIndustry;
