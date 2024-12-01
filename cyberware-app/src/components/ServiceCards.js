import React from 'react';
import ServiceWhiteCard from './ServiceWhiteCard'; 

function ServiceCards({ cards }) {
  return (
    <div className="bg-cybergray py-12 px-4">
      <div className="container mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <ServiceWhiteCard key={index} title={card.title} body={card.body} />
        ))}
      </div>
    </div>
  );
}

export default ServiceCards;
