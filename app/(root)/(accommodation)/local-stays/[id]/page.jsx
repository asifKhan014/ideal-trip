"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaStar, FaBed, FaDollarSign } from "react-icons/fa";
import FeedBackForm from "../../../../components/local-stays/reviews";

export default function LocalHomeDetail({ params }) {
  const router = useRouter();
  const id = router?.query?.id || params?.id; // Fix: Access `id` correctly

  const [localHomeDetails, setLocalHomeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    if (id) {
      const fetchLocalHomeDetails = async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/LocalHome/GetLocalHomeById/${id}`,
            {
              method: "GET",
              credentials:'include',
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          if (data.isSuccess) {
            setLocalHomeDetails(data.data);
          } else {
            setError(data.message || "Failed to fetch local home details");
          }
        } catch (error) {
          setError("Something went wrong while fetching data.");
          console.error("Error fetching local home details:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchLocalHomeDetails();
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



  if (!localHomeDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-xl text-gray-500">
          No local home details available
        </p>
      </div>
    );
  }

  const handleBookHome = () => {


    router.push(`/local-stays/booking?id=${id}`);
  };
console.log("Local Home Details:", localHomeDetails);

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <Image
          src={`${localHomeDetails.mainImage!=null?`/${localHomeDetails.mainImage}`:'/local1.jpg'}`}  

          alt={localHomeDetails.name}
          width={1920}
          height={600}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">
            {localHomeDetails.name}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        {/* Local Home Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              About {localHomeDetails.name}
            </h2>
            <p className="text-gray-600 mt-4 text-lg">{localHomeDetails.description}</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-red-600 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Location:</strong> {localHomeDetails.addressLine}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaBed className="text-blue-600 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Capacity:</strong> {localHomeDetails.capacity} people
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaStar className="text-yellow-500 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Rating:</strong> {localHomeDetails.rating || "N/A"}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaDollarSign className="text-green-500 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Price:</strong> ₹{localHomeDetails.pricePerNight} / night
                </p>
              </div>
              <p className="text-3xl font-bold text-green-700 mt-6">
                Available From: {new Date(localHomeDetails.availableFrom).toLocaleDateString()} - To: {new Date(localHomeDetails.availableTo).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative bg-white p-10 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800">
              Why Choose This Home?
            </h3>
            <ul className="mt-6 space-y-6">
              <li className="flex items-start space-x-4">
                <span className="text-blue-600 text-3xl">🏡</span>
                <span className="text-lg text-gray-600">
                  Cozy and well-equipped for families.
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
              onClick={handleBookHome}
              className="mt-10 w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="max-w-7xl mx-auto ">
        <FeedBackForm localHomeId={id} />
      </div>
    </section>
  );
}
