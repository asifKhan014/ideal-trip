"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaStar, FaBriefcase } from "react-icons/fa";
import FeedBackForm from "../../../components/tourguide/reviews";
export default function TourGuideDetail({ params }) {
  const router = useRouter();
  const id = router?.query?.id || params?.id; // Fix: Access `id` correctly

  const [guideDetails, setGuideDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchGuideDetails = async () => {
        try {
          const authToken = localStorage.getItem("token");
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/TourGuide/${id}`,
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
            setGuideDetails(data.data);
          } else {
            setError(data.message || "Failed to fetch guide details");
          }
        } catch (error) {
          setError("Something went wrong while fetching data.");
          console.error("Error fetching guide details:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchGuideDetails();
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

  if (!guideDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-xl text-gray-500">
          No guide details available
        </p>
      </div>
    );
  }

  const handleBookGuide = () => {
    router.push(`/tourguide/booking?id=${id}`);
  };

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <Image
          src={guideDetails.idCard || "/banner.jpg"}
          alt={guideDetails.Name}
          width={1920}
          height={600}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">
            {guideDetails.Name}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        {/* Guide Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              About {guideDetails.fullName}
            </h2>
            <p className="text-gray-600 mt-4 text-lg">{guideDetails.bio}</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-red-600 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Location:</strong> {guideDetails.location}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaBriefcase className="text-blue-600 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Experience:</strong> {guideDetails.experience} years
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaStar className="text-yellow-500 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Rating:</strong> {guideDetails.rating || "N/A"}
                </p>
              </div>
              <p className="text-3xl font-bold text-green-700 mt-6">
                PKR {guideDetails.ratePerDay} / day
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative bg-white p-10 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800">
              Why Choose This Guide?
            </h3>
            <ul className="mt-6 space-y-6">
              <li className="flex items-start space-x-4">
                <span className="text-blue-600 text-3xl">🌍</span>
                <span className="text-lg text-gray-600">
                  Extensive knowledge of local attractions.
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-blue-600 text-3xl">💬</span>
                <span className="text-lg text-gray-600">
                  Fluent in multiple languages for better communication.
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-blue-600 text-3xl">🚗</span>
                <span className="text-lg text-gray-600">
                  Provides private transportation for convenience.
                </span>
              </li>
            </ul>
            <button
              onClick={handleBookGuide}
              className="mt-10 w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto ">
       <FeedBackForm tourGuideId={id}/>
      </div>
    </section>
  );
}
