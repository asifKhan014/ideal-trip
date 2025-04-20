"use client"
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from "react-icons/fa";

export default function PackageDetail() {
  const searchParams = useSearchParams();
  const packageId = searchParams.get("id");
  const router = useRouter();
  const [packageDetails, setPackageDetails] = useState("");
  useEffect(() => {
    if (packageId) {
      const authToken = localStorage.getItem("token");
      // Fetch package details (Replace with your API or data source)
      const fetchPackageDetails = async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/package/${packageId}`,
          {
            method: "GET", // Adjust method as needed (GET, POST, etc.)
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`, // Include Bearer token
            },
          }
        );        
        const data = await response.json();
       
        if(data.isSuccess){
          setPackageDetails(data.data);
        }
      };

      fetchPackageDetails();
    }
  }, [packageId]);

  if (!packageDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-xl text-gray-500">Loading...</p>
      </div>
    );
  }

  const handleProceedToBooking = () => {
    router.push(`/tour-packages/booking/confirm-booking?id=${packageId}`);
    // router.push(`/tour-packages/booking?id=${packageId}`);
  };

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <Image
          src={packageDetails.thumbnail}
          alt={packageDetails.title}
          width={1920}
          height={600}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            {packageDetails.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* Package Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              Package Overview
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              {packageDetails.description}
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center space-x-4">
                <FaCalendarAlt className="text-blue-600 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Tour Date:</strong> {packageDetails.tourDate}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaUsers className="text-green-600 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Available Spots:</strong>{" "}
                  {packageDetails.availableSpots}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-red-600 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Duration:</strong> {packageDetails.durationDays} Days
                  / {packageDetails.durationDays - 1} Nights
                </p>
              </div>
              <p className="text-3xl font-bold text-green-700 mt-6">
                PKR {packageDetails.price} 
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative bg-white p-10 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800">
              Why Choose This Package?
            </h3>
            <ul className="mt-6 space-y-6">
              <li className="flex items-start space-x-4">
                <span className="text-blue-600 text-3xl">🌄</span>
                <span className="text-lg text-gray-600">
                  Stunning landscapes and breathtaking scenery.
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-blue-600 text-3xl">🏨</span>
                <span className="text-lg text-gray-600">
                  Comfortable accommodations with premium amenities.
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-blue-600 text-3xl">👨‍🏫</span>
                <span className="text-lg text-gray-600">
                  Expert guides to ensure an enriching travel experience.
                </span>
              </li>
            </ul>
            <button
              onClick={handleProceedToBooking}
              className="mt-10 w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Proceed to Booking
            </button>
            {/* <div className="absolute top-[-1.5rem] right-[-1.5rem] w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 text-white font-semibold rounded-full flex items-center justify-center shadow-md">
              {packageDetails.tag || "Special"}
            </div> */}
            <div className="absolute top-[-1.5rem] right-[-1.5rem] w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 text-white font-semibold rounded-full flex items-center justify-center shadow-md text-center">
              {packageDetails.tag || "Special"}
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="bg-white py-12 px-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            More Reasons to Join Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-blue-600 text-5xl mb-4">🚍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Comfortable Transport
              </h3>
              <p className="text-gray-600">
                Travel in style with luxury transportation for your journey.
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-5xl mb-4">🍴</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Delicious Meals
              </h3>
              <p className="text-gray-600">
                Savor local cuisines and enjoy meals prepared by top chefs.
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Safety First
              </h3>
              <p className="text-gray-600">
                Your safety is our priority with 24/7 assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
