"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function TransporterList() {
  const [transporters, setTransporters] = useState([]);
  const [filteredTransporters, setFilteredTransporters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchTransporters = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Transport/get-all-transports`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        if (data.isSuccess) {
          setTransporters(data.data);
          setFilteredTransporters(data.data);
        } else {
          setError(data.message || "Failed to fetch transporters");
        }
      } catch (err) {
        setError("Something went wrong while fetching transport data.");
      } finally {
        setLoading(false);
      }
    };

    fetchTransporters();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredTransporters(transporters);
    } else {
      const filtered = transporters.filter(
        (transporter) =>
          transporter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          transporter.startLocation
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          transporter.destination
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
      setFilteredTransporters(filtered);
    }
  }, [searchTerm, transporters]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-200 px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-16 rounded-lg shadow-md mb-10">
        <div className="max-w-4xl mx-auto">
          <span className="bg-yellow-400 px-5 py-1 rounded-full text-gray-900 font-semibold uppercase tracking-wide text-sm">
            Transport Services
          </span>
          <h1 className="w-full text-4xl md:text-5xl font-bold mt-6">
            Explore Available Transport Options
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Choose a ride that suits your route and schedule.
          </p>
          <div className="mt-6 flex justify-center">
            <input
              type="text"
              placeholder="Search by name, departure or destination..."
              className="h-12 w-full max-w-md rounded-full px-6 text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredTransporters.length > 0 ? (
            filteredTransporters.map((transporter) => (
              <Link
                key={transporter.id}
                href={`/transportation/${transporter.id}`}
                className="block"
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 overflow-hidden">
                  <img
                    src={`http://localhost:7216${transporter.primaryImage}`}
                    alt={transporter.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-center text-gray-800">
                      {transporter.name}
                    </h2>
                    <div className="text-center text-sm text-gray-600 space-y-1">
                      <p>
                        <strong className="text-gray-800">From:</strong>{" "}
                        {transporter.startLocation} →{" "}
                        <strong className="text-gray-800">To:</strong>{" "}
                        {transporter.destination}
                      </p>
                      <p>
                        <strong className="text-gray-800">Departure:</strong>{" "}
                        {new Date(transporter.departureTime).toLocaleString()}
                      </p>
                      <p>
                        <strong className="text-gray-800">Seats Left:</strong>{" "}
                        {transporter.seatsAvailable}
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <span className="text-lg font-semibold text-green-600">
                        PKR{transporter.ticketPrice}
                      </span>
                    </div>

                    <div className="flex justify-center">
                      <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition duration-300">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-600 text-lg">
              {searchTerm.trim() === ""
                ? "No transporters available at the moment."
                : "No transporters match your search."}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default TransporterList;
