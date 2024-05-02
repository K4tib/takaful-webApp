import React from 'react';

const Card = ({ title, description, imageUrl, target }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={imageUrl} alt="Image descriptive" className="w-full h-32 sm:h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
        <span className="text-xs text-blue-600">The target is to raise {target}</span>
      </div>
    </div>
  );
};

export default Card;
