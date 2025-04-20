"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import FeedBackForm from "../../../../components/hotels/reviews"
function HotelDetail() {
  const { hotelId } = useParams();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const authToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
 
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel/${hotelId}/rooms`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        
        const data = await response.json();
       
        if (data.isSuccess) {
          setRooms(data.rooms);
        } else {
          setError(data.message || "Failed to fetch rooms");
        }
      } catch (err) {
        console.error("Error fetching rooms:", err);
        setError("Something went wrong while fetching room data.");
      } finally {
        setLoading(false);
      }
    };

    if (hotelId && authToken) {
      fetchRooms();
    }
  }, [hotelId, authToken]);

  if (!authToken) {
    return (
      <p className="text-center text-red-500">Unauthorized. Please login.</p>
    );
  }

  // Helper to map roomType numbers to names
  const mapRoomType = (type) => {
    switch (type) {
      case 1:
        return "Deluxe Room";
      case 2:
        return "Suite";
      case 3:
        return "Executive";
      default:
        return "Standard Room";
    }
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">Rooms Available</h1>
      </div>

      {loading ? (
        <p className="text-center">Loading rooms...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : rooms.length === 0 ? (
        <p className="text-center">No rooms found for this hotel.</p>
      ) : (
       <div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {rooms.map((room) => (
            <Link
              href={`/hotels/${hotelId}/${room.roomId}`}
              key={room.roomId}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-[1.02]"
            >
              <img
                    src={`http://localhost:5277${room.primaryImage}`}
                    alt="Room"
                className="w-full h-52 object-cover"
              />
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {mapRoomType(room.roomType)}
                  </h2>
                  <span className="text-lg font-bold text-green-600">
                    ₹{room.pricePerNight} / night
                  </span>
                </div>

                <div className="text-sm text-gray-600 flex flex-col gap-1">
                  <p>
                    <span className="font-medium">Capacity:</span>{" "}
                    {room.capacity} {room.capacity === 1 ? "person" : "people"}
                  </p>
                  <p>
                    <span className="font-medium">Beds:</span>{" "}
                    {room.numberOfBeds}
                  </p>
                  <p>
                    <span className="font-medium">Availability:</span>{" "}
                    <span
                      className={`font-semibold ${
                        room.isAvailable ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {room.isAvailable ? "Available" : "Not Available"}
                    </span>
                  </p>
                </div>

                <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
                  Book Now
                </button>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-20 max-w-7xl mx-auto">

                  <FeedBackForm hotelId={hotelId} />
          
        </div>
       </div>
      )}
    </div>
  );
}

export default HotelDetail;
