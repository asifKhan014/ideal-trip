"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function TransporterList() {
  const [transporters, setTransporters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const authToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    const fetchTransporters = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Transport/get-all-transports`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        const data = await response.json();
        console.log("Transports fetched successfully:", data.data);

        if (data.isSuccess) {
          setTransporters(data.data); // updated to use transport data directly
        } else {
          setError(data.message || "Failed to fetch transporters");
        }
      } catch (err) {
        setError("Something went wrong while fetching transport data.");
      } finally {
        setLoading(false);
      }
    };

    if (authToken) fetchTransporters();
  }, [authToken]);

  if (!authToken) {
    router.push("/login");
    return null;
  }

  return (
    <div className="min-h-screen mx-auto px-4 py-8">
      <div className="flex flex-col gap-6 text-center mb-8 min-h-96 bg-blue-500 pt-20">
        <div>
          <span className="bg-yellow-400 px-6 py-1 rounded-lg font-bold">
            Transport Services
          </span>
        </div>
        <h1 className="text-4xl text-white font-bold">
          Explore Available Transporters
        </h1>
        <p className="text-white text-2xl">
          Choose a ride that suits your needs and destination.
        </p>
        <div className="flex justify-center">
          <input
            type="text"
            className="h-12 px-6 py-3 rounded-full shadow-lg w-full max-w-md"
            placeholder="Search for transport options..."
          />
        </div>
      </div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-6 max-w-7xl mx-auto">
          {transporters.length > 0 ? (
            transporters.map((transporter) => (
              <Link
                href={`/transportation/${transporter.id}`}
                key={transporter.id}
                className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition"
              >
                <div>
                  <img
                    src={transporter.primaryImage}
                    alt={transporter.name}
                    className="w-full h-48 object-cover rounded"
                  />
                  <h2 className="text-xl font-bold mt-2">{transporter.name}</h2>
                  <p className="text-sm text-gray-600">
                    From: {transporter.startLocation} → To: {transporter.destination}
                  </p>
                  <p className="text-sm text-gray-600">
                    Departure: {new Date(transporter.departureTime).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-700">Seats Available: {transporter.seatsAvailable}</p>
                  <p className="text-lg font-semibold text-green-700">₹{transporter.ticketPrice}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center col-span-3">No transporters available</p>
          )}
        </div>
      )}
    </div>
  );
}

export default TransporterList;
