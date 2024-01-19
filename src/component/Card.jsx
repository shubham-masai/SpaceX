import React from 'react';
import "../css/Card.css"

const Card = ({ imageUrl, productName, productStage}) => {
  return (
    <div className="m-4 bg-black  max-w-sm bg-white rounded overflow-hidden shadow-lg rounded-lg card cursor-pointer text-black 
    border border-solid-grey-100 rounded-md" 
    >
      <div className="flex">
        <div className="w-1/3">
          <img className="w-full h-40 object-cover" src={imageUrl} alt={productName} />
        </div>

        <div className="w-2/3 pt-7 text-center">
          <h3 className="text-xl font-bold mb-2">{productName}</h3>
          <p >{productStage}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;