import React from "react";

export default function NewsletterCardComponent(props) {
  return (
    <div className="flex justify-between ">
      <div className="w-full h-auto p-5 md:p-8 bg-cyberzinc  justify-start items-start border-b-2 border-b-orange-500 ">
        <div className="w-full h-auto flex flex-col justify-start items-start space-y-8">
          <span className="flex justify-end w-full">
            <svg
              width="30"
              height="30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M6.25 26.25v-20c0-.688.245-1.276.734-1.766A2.407 2.407 0 0 1 8.75 3.75h12.5c.688 0 1.276.245 1.766.734.49.49.734 1.079.734 1.766v20L15 22.5l-8.75 3.75Zm2.5-3.813L15 19.75l6.25 2.688V6.25H8.75v16.188Z"
                fill="#FF6F0F"
              />
            </svg>
          </span>
          <div className="mt-0">
            <div className="w-full text-black text-base font-semibold">
              {props.subtitle}
            </div>
            <span className="text-cyberorange text-sm">{props.date}</span>
          </div>
          <div className="w-full text-black text-xl md:text-2xl font-semibold">
            {props.title}
          </div>
          <div className="w-full text-black text-sm md:text-base font-normal ">
            {props.body}
          </div>
          <button className="w-full h-auto py-2 bg-cyberorange flex justify-center items-center">
          <div className="text-black text-sm md:text-base font-bold ">
            See More
          </div>
        </button>
        </div>

   </div>
      </div>

  );
}
