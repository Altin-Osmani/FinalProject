import React from "react";

export default function ClientCardComponent(props) {
  return (
    <div className="flex justify-between">
      <div className="w-1/4 border-r-2 border-orange-500 p-3 md:p-6">
        <img src={props.image} alt="person" className={props.imgClass} />
      </div>
      <div className="w-3/4 p-3 md:p-6 flex flex-col justify-between space-y-10">
        <span>{props.body}</span>
      </div>
    </div>
  );
}
