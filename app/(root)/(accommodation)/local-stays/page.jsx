"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LocalStaysCard from "../../../components/local-stays/localStaysCard";

function LocalHomes() {
  const [localHomes, setLocalHomes] = useState([]);
  const [filteredHomes, setFilteredHomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchLocalHomes = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/LocalHome/GetLocalHomes`,
          {
            method: "GET",
            credentials: 'include',
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log("Local homes data:", data.data.localHomes);
        if (data.isSuccess) {
          setLocalHomes(data.data.localHomes);
          setFilteredHomes(data.data.localHomes);
        } else {
          setError(data.message || "Failed to fetch local homes");
        }
      } catch (err) {
        setError("Something went wrong while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchLocalHomes();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredHomes(localHomes);
    } else {
      const filtered = localHomes.filter(
        (home) =>
          home.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          home.addressLine.toLowerCase().includes(searchTerm.toLowerCase()) ||
          home.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredHomes(filtered);
    }
  }, [searchTerm, localHomes]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen mx-auto px-4 py-8 bg-gray-100">
      <div className="flex flex-col gap-6 text-center mb-8 min-h-96 bg-gradient-to-r from-blue-600 to-indigo-600 pt-20 rounded-lg shadow-lg">
        <div>
          <span className="bg-yellow-400 px-6 py-1 rounded-lg font-bold text-gray-900">
            Local Homes
          </span>
        </div>
        <h1 className="text-4xl text-white font-bold">
          Explore Available Local Homes
        </h1>
        <div>
          <p className="text-white text-2xl">
            We have a list of local homes that can make your stay comfortable
            and memorable.
          </p>
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            className="h-12 px-6 py-3 rounded-full shadow-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Search by name, location or description..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center">
          <p className="text-lg">Loading local homes...</p>
        </div>
      ) : error ? (
        <div className="text-center">
          <p className="text-red-500 text-lg">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
          {filteredHomes.length > 0 ? (
            filteredHomes.map((home) => (
              <Link href={`/local-stays/${home.id}`} key={home.id} className="hover:scale-105 transition-transform duration-300">
                <LocalStaysCard
                  idCard={home.id}
                  name={home.name}
                  description={home.description}
                  location={home.addressLine}
                  availableFrom={home.availableFrom}
                  availableTo={home.availableTo}
                  pricePerNight={home.pricePerNight}
                  rating={home.rating}
                  imageUrl={`http://localhost:7216/${home.imageUrl}`}
                  capacity={home.capacity}
                />
              </Link>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-600 text-xl">
                {searchTerm.trim() === "" 
                  ? "No local homes available at the moment." 
                  : "No homes match your search. Try different keywords."}
              </p>
              {searchTerm.trim() !== "" && (
                <button 
                  onClick={() => setSearchTerm("")}
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

export default LocalHomes;