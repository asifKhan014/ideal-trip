import React from "react";

const TourGuideCard = ({
  location,
  duration,
  availableSeats,
  price,
  days,
  type,
  rating,
  image,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200">
      <img className="w-full" src={'/images/guide-3.jpg'} alt={`Image of ${location}`} />
      {/* <img className="w-full" src={image} alt={`Image of ${location}`} /> */}
      
      <div className="px-6 py-4">
        <h2 className="text-lg font-bold">Location: {location}</h2>
        <p className="text-sm text-gray-600">
          <strong>Duration:</strong> {duration}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Available Seats:</strong> {availableSeats}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Price:</strong> ${price}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Days:</strong> {days} Days
        </p>
      </div>
      <div className="px-6 py-4 flex items-center justify-between">
        <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          {type}
        </span>
        <span className="text-yellow-500 text-sm flex items-center">
          {"★".repeat(rating)}
        </span>
      </div>
    </div>
  );
};

export default TourGuideCard;
