"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaUsers, FaClock, FaMoneyBillWave } from "react-icons/fa";
import FeedBackForm from "../../../components/transport/reviews"; // Optional: Rename or remove if not needed

export default function TransportDetail({ params }) {
  const router = useRouter();
  const id = router?.query?.id || params?.id;

  const [transport, setTransport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchTransportDetails = async () => {
        try {
          const authToken = localStorage.getItem("token");
          // console.log("Auth Token:", authToken);

          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Transport/get-transport/${id}`,
            {
              method: "GET",
              credentials:'include'
            }
          );
          const data = await response.json();
          if (data.isSuccess) {
            setTransport(data.data);
          } else {
            setError(data.message || "Failed to fetch transport details");
          }
        } catch (error) {
          setError("Something went wrong while fetching data.");
          console.error("Error fetching transport details:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchTransportDetails();
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

  if (!transport) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-xl text-gray-500">
          No transport details available
        </p>
      </div>
    );
  }

  const handleBookTransport = () => {
    if (!authToken) {
      router.push("/login");
      return null;
    }
    router.push(`/transportation/booking?id=${id}`);
  };
  console.log("transport data: ", transport.images?.[0].imageUrl)
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <Image
          // src={transport.primaryImage || "/banner.jpg"}
          src={`http://localhost:7216${transport.images?.[0].imageUrl}`}
          alt={transport.name}
          width={1920}
          height={600}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">
            {transport.name}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              About {transport.name}
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Type: {transport.type}
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-red-600 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Route:</strong> {transport.startLocation} ➔ {transport.destination}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <FaClock className="text-blue-600 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Departure:</strong>{" "}
                  {new Date(transport.departureTime).toLocaleString()}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <FaUsers className="text-purple-600 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Seats Available:</strong> {transport.seatsAvailable} / {transport.capacity}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <FaMoneyBillWave className="text-green-600 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Ticket Price:</strong> PKR{transport.ticketPrice}
                </p>
              </div>

              <p className="text-2xl font-bold text-green-700 mt-6">
                {transport.isAvailable ? "Currently Available ✅" : "Not Available ❌"}
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative bg-white p-10 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800">
              Why Book This Transport?
            </h3>
            <ul className="mt-6 space-y-6">
              <li className="flex items-start space-x-4">
                <span className="text-blue-600 text-3xl">🚌</span>
                <span className="text-lg text-gray-600">
                  Reliable and comfortable transport service.
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-blue-600 text-3xl">🕒</span>
                <span className="text-lg text-gray-600">
                  On-time departure and flexible bookings.
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-blue-600 text-3xl">💺</span>
                <span className="text-lg text-gray-600">
                  Spacious seating and clean interiors.
                </span>
              </li>
            </ul>
            <button
              onClick={handleBookTransport}
              className="mt-10 w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Feedback Form (optional) */}
      <div className="max-w-7xl mx-auto">
        <FeedBackForm transporterId={id} />
      </div>
    </section>
  );
}
