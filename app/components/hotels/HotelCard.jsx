// import React from "react";

// function HotelCard({
//   idCard,
//   name,
//   description,
//   location,
//   pricePerNight,
//   rating,
//   imageUrl,
//   capacity,
// }) {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <img
//         src={imageUrl || "/hotel.jpg"} // fallback to default
//         alt={name}
//         className="w-full h-56 object-cover rounded-lg mb-4"
//       />
//       <div className="flex flex-col gap-2">
//         <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
//         <p className="text-gray-600">{description}</p>
//         <p className="text-sm flex justify-between">
//           <strong>Location:</strong> {location}
//         </p>
//         <p className="text-sm flex justify-between">
//           <strong>Capacity:</strong> {capacity} people
//         </p>
//         <p className="text-xl font-bold text-gray-800 mt-5">
//           ₹{pricePerNight} / night
//         </p>
//         <div className="flex items-center mt-2">
//           <span className="text-yellow-500 mr-2">⭐</span>
//           <span>{rating} / 5</span>
//         </div>
//       </div>

//       <div className="flex justify-end mt-4">
//         <button className="bg-blue-500 text-white py-2 px-4 w-full rounded-lg text-lg hover:bg-blue-600 transition">
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// }

// export default HotelCard;



import React from "react";

function HotelCard({
  idCard,
  name,
  description,
  location,
  pricePerNight,
  rating,
  imageUrl,
  capacity,
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src={imageUrl}
        alt={`Image of ${name}`}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <div className="text-sm text-gray-700 space-y-1">
          <p><strong>📍 Location:</strong> {location}</p>
          <p><strong>👥 Capacity:</strong> {capacity} person{capacity > 1 ? "s" : ""}</p>
        </div>

        <div className="flex justify-between items-center mt-5">
          <span className="text-xl font-bold text-blue-600">₹{pricePerNight}/night</span>
          <div className="flex items-center text-yellow-500 font-medium">
            ⭐ {rating} / 5
          </div>
        </div>

        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300">
          View Details
        </button>
      </div>
    </div>
  );
}

export default HotelCard;
