import React from 'react'

export default function QuotesCardComponent(props) {
  return (
    <div className="flex justify-between ">
        <div className="w-1/4 border-r-2 border-cyberorange p-3 md:p-6">
            <img src={props.image} alt="person" className={props.imgClass} />
        </div>
        <div className="w-3/4  p-3 md:p-6 flex flex-col justify-between space-y-10"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</p>
        <div className="flex space-x-4 items-center"><span className='font-semibold'>- {props.person}</span> <span className='text-cyberorange'>★★★★★ </span></div>
        
        </div>
    </div>
  )
}
