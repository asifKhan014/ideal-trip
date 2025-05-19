"use client";
import React, { useEffect, useState } from "react";
import TourGuideCard from "../../components/tourguide/tourguideCard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../hooks/useAuth";

function TourGuide() {
  const [tourGuides, setTourGuides] = useState([]);
  const [filteredGuides, setFilteredGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const { token: authToken } = useAuth();

  useEffect(() => {
    const fetchTourGuides = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/TourGuide`,
          {
            method: "GET",
            credentials: 'include',
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        if (data.isSuccess) {
          setTourGuides(data.data);
          setFilteredGuides(data.data);
        } else {
          setError(data.errors || "Failed to fetch tour guides");
        }
      } catch (err) {
        setError("Something went wrong while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchTourGuides();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredGuides(tourGuides);
    } else {
      const filtered = tourGuides.filter(
        (guide) =>
          guide.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          guide.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          guide.bio.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredGuides(filtered);
    }
  }, [searchTerm, tourGuides]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen mx-auto px-4 py-8 bg-gray-100">
      <div className="flex flex-col gap-6 text-center mb-8 min-h-96 bg-gradient-to-r from-blue-600 to-indigo-600 pt-20 rounded-lg shadow-xl">
        <div>
          <span className="bg-yellow-400 px-6 py-1 rounded-lg font-bold text-lg text-gray-900">
            Tour Guides
          </span>
        </div>
        <h1 className="text-4xl text-white font-bold mb-4">
          Find Your Perfect Tour Guide
        </h1>
        <div>
          <p className="text-white text-2xl mb-4">
            We have a list of experienced tour guides to help make your trip memorable.
          </p>
        </div>
        <div className="relative flex justify-center">
          <input
            type="text"
            className="h-12 px-6 py-3 rounded-full shadow-lg w-full max-w-md mx-auto focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Search by name, location or expertise..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-0 mr-12 mt-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 mb-4">Loading tour guides...</p>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <p className="text-red-500 text-lg mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-6 max-w-screen-2xl mx-auto py-8">
          {filteredGuides.length > 0 ? (
            filteredGuides.map((guide) => (
              <Link 
                href={`/tourguide/${guide.id}`} 
                key={guide.id}
                className="hover:scale-[1.02] transition-transform duration-300"
              >
                <TourGuideCard
                  id={guide.id}
                  fullName={guide.fullName}
                  phoneNumber={guide.phoneNumber}
                  ratePerDay={guide.ratePerDay}
                  experience={guide.experience}
                  bio={guide.bio}
                  location={guide.location}
                  rating={guide.rating}
                />
              </Link>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-600 text-xl">
                {searchTerm.trim() === "" 
                  ? "No tour guides available at the moment." 
                  : "No guides match your search. Try different keywords."}
              </p>
              {searchTerm.trim() !== "" && (
                <button
                  onClick={clearSearch}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Clear Search
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TourGuide;