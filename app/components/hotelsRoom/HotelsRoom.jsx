"use client";


import { useState } from "react";

export default function HotelAndLocalRooms() {
  const [hotelRooms] = useState([
    {
      id: 1,
      image: "/images/hotel1.jpg",
      name: "Luxury Hotel Suite",
      features: ["Free WiFi", "Pool Access", "Breakfast Included"],
      rating: 4.7,
      price: 150,
    },
    {
      id: 2,
      image: "/images/hotel2.jpg",
      name: "Deluxe Double Room",
      features: ["Free WiFi", "Airport Shuttle", "City View"],
      rating: 4.5,
      price: 100,
    },
  ]);

  const [localRooms] = useState([
    {
      id: 1,
      image: "/images/local1.jpg",
      name: "Cozy Cottage",
      features: ["Kitchen Access", "Pet Friendly", "Countryside View"],
      rating: 4.8,
      price: 80,
    },
    {
      id: 2,
      image: "/images/local2.jpg",
      name: "Modern Studio Apartment",
      features: ["Free WiFi", "Downtown Location", "Balcony"],
      rating: 4.6,
      price: 60,
    },
  ]);

  return (
    <section className="bg-gray-50 py-20 px-4 lg:px-20">
      <div className="container mx-auto px-6">
        {/* Hotel Rooms Section */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Hotel Rooms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotelRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        {/* <ComparisonTable title="Compare Hotel Rooms" rooms={hotelRooms} /> */}

        {/* Local Home Rooms Section */}
        <h2 className="text-4xl pt-6 lg:pt-9 font-bold text-center text-gray-800 mt-12 mb-8">
          Local Home Stays
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        {/* <ComparisonTable title="Compare Local Home Stays" rooms={localRooms} /> */}
      </div>
    </section>
  );
}

// RoomCard Component
function RoomCard({ room }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
      <img
        src={room.image}
        alt={room.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800">{room.name}</h3>
        <ul className="mt-4 text-gray-600 text-sm space-y-1">
          {room.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              ✅ {feature}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-between items-center">
          <div>
            <p className="text-xl font-bold text-gray-800">
              ${room.price}/night
            </p>
            <p className="text-yellow-500 text-sm flex items-center">
              ⭐ {room.rating.toFixed(1)} / 5
            </p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

// ComparisonTable Component
function ComparisonTable({ title, rooms }) {
  return (
    <div className="mt-12 bg-white rounded-lg shadow-md p-6 overflow-x-auto">
      <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {title}
      </h3>
      <table className="table-auto w-full text-left border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-gray-800">
            <th className="border border-gray-300 px-4 py-3">Room</th>
            <th className="border border-gray-300 px-4 py-3">Features</th>
            <th className="border border-gray-300 px-4 py-3">Price</th>
            <th className="border border-gray-300 px-4 py-3">Rating</th>
            <th className="border border-gray-300 px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.id} className="hover:bg-gray-100 transition-colors">
              <td className="border border-gray-300 px-4 py-3">{room.name}</td>
              <td className="border border-gray-300 px-4 py-3">
                {room.features.join(", ")}
              </td>
              <td className="border border-gray-300 px-4 py-3">
                ${room.price}/night
              </td>
              <td className="border border-gray-300 px-4 py-3">
                ⭐ {room.rating.toFixed(1)}
              </td>
              <td className="border border-gray-300 px-4 py-3">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:ring focus:ring-orange-300">
                  Check Availability
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
