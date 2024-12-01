import React from "react";

export default function ServiceHero(props) {
  return (
    <>
      <div className="flex w-full !min-h-[80vh]  bg-[url('/HeroBG/Service1BG.jpg')] bg-cover bg-center mx-auto items-stretch py-10 px-9">
        <div className="container w-full mx-auto flex items-center  justify-evenly text-pretty flex-col ">
          <h1 className="text-white text-4xl md:text-8xl inline-block">
            <span className="text-cyberorange font-bold mr-2">
              {props.orangeTitle}
            </span>
            {props.title}
          </h1>
          <span className="text-white items-center pr-0 md:pl-4 w-full md:w-1/3 mt-2 border-0 md:border-r-2 md:border-r-orange-500 ">
            {props.body}
          </span>
          <button className="bg-cyberorange border border-cyberorange px-6 py-2 text-white hover:bg-white hover:text-cyberorange hover:border-white">
            {props.btnTxt}
          </button>
        </div>
      </div>
    </>
  );
}
