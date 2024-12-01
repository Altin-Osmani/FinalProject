import React from "react";

function JobCardComponent({ title, date, description, workTypes }) {
  
  const words = title.split(" ");
  const lastWord = words.pop();
  const restOfTitle = words.join(" ");

  return (
    <div className="bg-cybergray text-white p-6 shadow-md hover:shadow-lg transition-shadow ">
      <div className="bg-white text-sm text-black font-semibold py-3 px-5 w-max mb-4">
        {date}
      </div>

      <h3 className="text-3xl font-semibold mb-3">
        <span className="text-cyberorange">{restOfTitle}</span>{" "}
        <span className="text-white">{lastWord}</span>
      </h3>

      <p className="text-sm text-gray-300 mb-4">{description}</p>

      <div className=" space-x-4 mb-4 text-center p-5">
        {workTypes.map((type, index) => (
          <span
            key={index}
            className="border border-white px-10 py-2  text-white shadow-md hover:bg-gray-700 transition-all duration-300"
          >
            {type}
          </span>
        ))}
      </div>

      {/* Apply Button */}
      <button className="w-full bg-cyberorange hover:bg-orange-600 text-white py-2  font-medium">
        Apply
      </button>
    </div>
  );
}

export default JobCardComponent;
