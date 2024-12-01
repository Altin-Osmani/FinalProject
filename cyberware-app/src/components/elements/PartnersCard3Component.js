import React from 'react'

export default function PartnersCard3Component(props) {
  return (
    <>
    <div className="bg-cyberslate p-8"> 
        <div className="flex  flex-col md:flex-row-reverse md:items-stretch space-x-0 md:space-x-8 space-y-8 md:space-y-0 ">
            <div className="w-full md:w-1/2"><img src={props.img} alt="" /></div>
            <div className="w-full md:w-1/2">
                <div className="flex flex-col justify-between">
                    <h2 className="text-3xl md:text-5xl text-white text-bold">{props.title} <span className="text-cyberorange">{props.orangetitle}</span></h2>
                    <p className="text-lg md:text-2xl mt-4 text-white !font-light">{props.body}</p>
                </div>
            </div>    
        </div>
    </div>
    </>
  )
}
