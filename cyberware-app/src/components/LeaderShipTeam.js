import React from 'react'

export default function LeaderShipTeam(props) {
  return (
        <div className="relative w-full max-w-sm py-16 md:py-10">
          {/* Image Section */}
          <div className="w-full relative">
            <img
              src={props.image}
              alt={props.title}
              className="w-full h-80 object-cover object-top"
            />
          </div>
    
          {/* Content Section */}
          <div className="w-full relative h-1/3 bg-cyberslate text-white p-4">
            <h3 className="text-lg font-bold">{props.title}</h3>
            <p>{props.postion}</p>
            <p className="text-sm mt-2">{props.body}</p>
          </div>
    
          {/* Diagonal Bottom Shape */}
          <div className="absolute left-0 w-full h-12 bg-cyberslate transform skew-y-6 origin-bottom -mt-5"></div>
          <button className="absolute  left-4 w-12 h-12 bg-cyberorange rounded-full flex justify-center items-center">
            <svg
             className="w-8"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.6548 23.833H7.33398V20.1663H29.6548L19.3882 9.89967L22.0007 7.33301L36.6673 21.9997L22.0007 36.6663L19.3882 34.0997L29.6548 23.833Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
  )
}
