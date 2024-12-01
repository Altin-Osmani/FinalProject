import React from 'react';

function ServiceWhiteCard({ title, body }) {
  return (
    <div className=" bg-white p-10 text-center relative">
      <h3 className="text-cyberorange text-lg font-semibold mb-4">{title}</h3>
      <p className="text-gray-700">{body}</p>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-600"></div>
    </div>
  );
}

export default ServiceWhiteCard;
