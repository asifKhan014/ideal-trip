"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaMapMarkerAlt, FaStar, FaBed, FaDollarSign } from "react-icons/fa";
// import FeedBackForm from "../../../../components/local-stays/reviews";

export default function RoomDetail({ params }) {
  const {  roomId:id } = useParams();
  const router = useRouter();
  // const roomId = router?.query?.roomId || params?.roomId; // Fix: Access `roomId` correctly

  const [roomDetails, setRoomDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchRoomDetails = async () => {
       
        try {
          const authToken = localStorage.getItem("token");

          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel/rooms/${id}`, // API Path for fetching room details
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
              },
            }
          );
          const data = await response.json();
        console.log("Response data:", data);
          if (data.isSuccess) {
            setRoomDetails(data.data); // Assuming `data.room` contains room details
          } else {
            setError(data.message || "Failed to fetch room details");
          }
        } catch (error) {
          setError("Something went wrong while fetching data.");
          console.error("Error fetching room details:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchRoomDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-xl text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-xl text-red-500">{error}</p>
      </div>
    );
  }

  if (!roomDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-xl text-gray-500">
          No room details available
        </p>
      </div>
    );
  }

  const handleBookRoom = () => {
    router.push(`/hotels/booking?id=${id}`);
  };

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <Image
          // src={`http://localhost:5277${hotel.primaryImage}` || "/banner.jpg"}  
          src={"/banner.jpg"}  
          alt={roomDetails.roomType}
          width={1920}
          height={600}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">{roomDetails.roomType}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        {/* Room Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800">About This Room</h2>
            <p className="text-gray-600 mt-4 text-lg">{roomDetails.description}</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-red-600 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Location:</strong> {roomDetails.addressLine}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaBed className="text-blue-600 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Capacity:</strong> {roomDetails.capacity} people
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaStar className="text-yellow-500 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Rating:</strong> {roomDetails.rating || "N/A"}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaDollarSign className="text-green-500 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Price:</strong> PKR{roomDetails.pricePerNight} / night
                </p>
              </div>
              <p className="text-3xl font-bold text-green-700 mt-6">
                Available From: {new Date(roomDetails.availableFrom).toLocaleDateString()} - To: {new Date(roomDetails.availableTo).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative bg-white p-10 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800">Why Choose This Room?</h3>
            <ul className="mt-6 space-y-6">
              <li className="flex items-start space-x-4">
                <span className="text-blue-600 text-3xl">🏡</span>
                <span className="text-lg text-gray-600">
                  Cozy and well-equipped for individuals or couples.
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-blue-600 text-3xl">📍</span>
                <span className="text-lg text-gray-600">
                  Great location near local attractions.
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-blue-600 text-3xl">🌟</span>
                <span className="text-lg text-gray-600">
                  Excellent reviews and feedback from past guests.
                </span>
              </li>
            </ul>
            <button
              onClick={handleBookRoom}
              className="mt-10 w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="max-w-7xl mx-auto ">
        {/* <FeedBackForm roomId={roomId} /> */}
      </div>
    </section>
  );
}
