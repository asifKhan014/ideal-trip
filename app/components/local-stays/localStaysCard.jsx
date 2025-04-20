

import React from "react";

function LocalStaysCard({
  idCard,
  name,
  description,
  location,
  availableFrom,
  availableTo,
  pricePerNight,
  rating,
  imageUrl,
  capacity,
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img
        src={imageUrl}
        // src={"/home.jpg"}
        alt={name}
        className="w-full h-56 object-cover rounded-lg mb-4"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-sm  flex justify-between">
          <strong>Location:</strong> {location}
        </p>
        <p className="text-sm flex justify-between ">
          <strong>Available From:</strong>{" "}
          {new Date(availableFrom).toLocaleDateString()}
        </p>
        <p className="text-sm flex justify-between">
          <strong>Available To:</strong>{" "}
          {new Date(availableTo).toLocaleDateString()}
        </p>
        <p className="text-sm flex justify-between">
          <strong>Capacity:</strong> {capacity} people
        </p>
        <p className="text-xl font-bold text-gray-800 mt-5">
          {pricePerNight} / night
        </p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 mr-2">⭐</span>
          <span>{rating} / 5</span>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 w-full rounded-lg text-lg hover:bg-blue-600 transition">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default LocalStaysCard;
