"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HotelCard from "../../../components/hotels/HotelCard";

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const authToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${authToken}`,
          },
        });

        const data = await response.json();
        console.log("Response data:", data);

        if (data.isSuccess) {
          setHotels(data.data);
          setFilteredHotels(data.data);
        } else {
          setError(data.message || "Failed to fetch hotels");
        }
      } catch (err) {
        console.error("Error fetching hotels:", err);
        setError("Something went wrong while fetching hotel data.");
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredHotels(hotels);
    } else {
      const filtered = hotels.filter(
        (hotel) =>
          hotel.hotelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hotel.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hotel.hotelDescription.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredHotels(filtered);
    }
  }, [searchTerm, hotels]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-4 ">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white  py-20 text-center px-9 rounded-lg shadow-lg mb-10">
        <div className="max-w-4xl mx-auto">
        <div className="flex justify-center items-center">
           <p className="bg-yellow-400 px-6  mb-4  rounded-lg font-bold text-gray-900 "> Hotels</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Available Hotels</h1>
          <p className="text-lg md:text-xl mb-8">Find a perfect stay for your journey</p>
          <div className="relative flex justify-center">
            <input
              type="text"
              placeholder="Search by name, location or description..."
              className="w-full max-w-md px-5 py-3 rounded-full shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-0 mr-12 md:mr-16 mt-3 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Hotel Listings */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {loading ? (
          <div className="text-center">
            <p className="text-lg mb-4">Loading hotels...</p>
            <div className="animate-pulse flex justify-center">
              <div className="h-8 w-8 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        ) : error ? (
          <div className="text-center">
            <p className="text-red-500 text-lg mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Try Again
            </button>
          </div>
        ) : filteredHotels.length > 0 ? (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredHotels.map((hotel) => {
              const room = hotel.rooms?.[0] || {};
              return (
                <Link 
                  href={`/hotels/${hotel.hotelId}`} 
                  key={hotel.hotelId}
                  className="hover:scale-[1.02] transition-transform duration-300"
                >
                  <HotelCard
                    idCard={hotel.hotelId}
                    name={hotel.hotelName}
                    description={hotel.hotelDescription}
                    location={hotel.address}
                    pricePerNight={room.pricePerNight || 0}
                    rating={hotel.rating}
                    imageUrl={`http://localhost:7216${hotel.primaryImage}`}
                    capacity={room.capacity || 1}
                  />
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-xl mb-4">
              {searchTerm.trim() === "" 
                ? "No hotels available right now." 
                : "No hotels match your search."}
            </p>
            {searchTerm.trim() !== "" && (
              <button
                onClick={clearSearch}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Clear Search
              </button>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default Hotels;