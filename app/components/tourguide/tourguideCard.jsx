

import React from 'react';

function TourGuideCard({
  id,
  idCard,
  fullName,
  phoneNumber,
  ratePerDay,
  bio,
  experience,
  location,
  rating,
}) {
  const imageSrc = idCard
    ? idCard instanceof Blob
      ? URL.createObjectURL(idCard)
      : idCard
    : '/images/guide-3.jpg'; // default image

  const renderStars = (rating = 0) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-yellow-400 ${i < fullStars ? '' : 'opacity-50'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out max-w-sm mx-auto hover:shadow-2xl">
      <img
        src={imageSrc}
        alt="Tour Guide"
        className="h-56 w-full object-cover rounded-t-3xl"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{fullName || 'Tour Guide'}</h2>
          <div className="flex">{renderStars(rating)}</div>
        </div>

        <p className="text-sm  mb-2">
          <strong>Phone:</strong> {phoneNumber || 'N/A'}
        </p>
        <p className="text-sm  mb-2">
          <strong>Rate/Day:</strong> PKR{ratePerDay || 'Not Available'}
        </p>
        <p className="text-sm  mb-2">
          <strong>Location:</strong> {location || 'Unknown'}
        </p>

        <div className="border-t border-gray-200 my-4"></div>

        <p className=" text-sm mb-2">
          <strong>Bio:</strong> {bio || 'No bio available'}
        </p>
        <p className=" text-sm">
          <strong>Experience:</strong> {experience || 'Not specified'}
        </p>

        <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default TourGuideCard;
