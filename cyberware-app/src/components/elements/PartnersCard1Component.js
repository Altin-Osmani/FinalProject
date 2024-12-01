import React from 'react'

export default function PartnersCard1Component(props) {
  return (
<>
<div className="bg-white p-8"> 
    <div className="flex  flex-col md:flex-row md:items-stretch space-x-0 md:space-x-8 space-y-8 md:space-y-0 mb-10">
        <div className="w-full md:w-1/2"><img src={props.img1} alt="" /></div>
        <div className="w-full md:w-1/2"><img src={props.img2} alt="" /></div>
    </div>
    <div className="flex flex-col justify-between">
       <h2 className="text-3xl md:text-5xl text-black text-bold !font-light">{props.title} <span className="text-cyberorange">{props.orangetitle}</span></h2>
       <p className="text-lg md:text-2xl mt-4">{props.body}</p>
    </div>
</div>
</>
  )
}
