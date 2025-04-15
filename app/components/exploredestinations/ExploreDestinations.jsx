"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Tooltip } from "react-tooltip";

export default function ExploreDestinations() {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    {
      id: 1,
      name: "Paris, France",
      description: "The city of love and lights.",
      image: "/images/hero-1.jpg",
      coordinates: { x: 40, y: 30 },
    },
    {
      id: 2,
      name: "Dubai, UAE",
      description: "Luxury, skyscrapers, and deserts.",
      image: "/images/hero-2.jpg",
      coordinates: { x: 70, y: 50 },
    },
    {
      id: 3,
      name: "Tokyo, Japan",
      description: "A vibrant mix of tradition and modernity.",
      image: "/images/hero-3.jpg",
      coordinates: { x: 90, y: 20 },
    },
    {
      id: 4,
      name: "New York, USA",
      description: "The city that never sleeps.",
      image: "/images/hero-2.jpg",
      coordinates: { x: 20, y: 40 },
    },
    {
      id: 5,
      name: "Sydney, Australia",
      description: "Iconic landmarks and stunning beaches.",
      image: "/images/hero-1.jpg",
      coordinates: { x: 80, y: 70 },
    },{
      id: 6,
      name: "Tokyo, Japan",
      description: "A vibrant mix of tradition and modernity.",
      image: "/images/hero-3.jpg",
      coordinates: { x: 90, y: 20 },
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedDestination(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="py-16 md:py-36 bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-6">
          Explore Destinations
        </h2>
        <p className="text-lg text-gray-600 text-center mb-10">
          Discover incredible places around the globe. Click a pin or card to
          learn more.
        </p>

        {/* Interactive Map */}
        <div className="relative bg-blue-200 w-full h-96 rounded-xl shadow-lg overflow-hidden mb-12">
          <img
            src="/images/map.png"
            alt="World Map"
            className="w-full h-full object-cover opacity-90"
          />
          {destinations.map((destination) => (
            <div
              key={destination.id}
              data-tooltip-id="tooltip"
              data-tooltip-content={destination.name}
              aria-label={destination.name}
              className="absolute bg-red-600 rounded-full w-5 h-5 cursor-pointer shadow-md hover:scale-110 transition-transform z-10"
              style={{
                top: `${destination.coordinates.y}%`,
                left: `${destination.coordinates.x}%`,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => setSelectedDestination(destination)}
            ></div>
          ))}
          <Tooltip
            id="tooltip"
            className="text-sm bg-gray-800 text-white p-2 rounded"
          />
        </div>

        {/* Destination Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="relative rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedDestination(destination)}
              aria-label={`Learn more about ${destination.name}`}
            >
              <img
                src={destination.image}
                alt={`Image of ${destination.name}`}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 flex items-end p-4">
                <h3 className="text-lg font-semibold text-white">
                  {destination.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Destination Details */}
        {selectedDestination && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm"
            aria-modal="true"
            role="dialog"
          >
            <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                onClick={() => setSelectedDestination(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
              <img
                src={selectedDestination.image}
                alt={`Image of ${selectedDestination.name}`}
                className="w-full h-60 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-bold text-gray-800 mt-4">
                {selectedDestination.name}
              </h3>
              <p className="text-gray-600 mt-2">
                {selectedDestination.description}
              </p>
              <Link href={`/destination/${selectedDestination.id}`}>
                <button className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
