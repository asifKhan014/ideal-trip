"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function TransporterList() {
  const [transporters, setTransporters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const authToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

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
                className=" rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition"
              >
                <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 space-y-5 transition-transform duration-300 hover:scale-105">
                  {/* <img
                    src={transporter.primaryImage}
                    alt={transporter.name}
                    className="w-full h-48 object-cover rounded-md"
                  /> */}

                  <div className="text-9xl text-blue-500 text-center">🚌</div>

                  <h2 className="text-3xl font-bold text-gray-800 text-center">
                    {transporter.name}
                  </h2>

                  <div className="text-sm text-gray-600 text-center">
                    <p>
                      <span className="font-semibold text-gray-800">From:</span>{" "}
                      {transporter.startLocation}
                      <span className="mx-2">→</span>
                      <span className="font-semibold text-gray-800">
                        To:
                      </span>{" "}
                      {transporter.destination}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-800">
                        Departure:
                      </span>{" "}
                      {new Date(transporter.departureTime).toLocaleString()}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-800">
                        Seats Available:
                      </span>{" "}
                      {transporter.seatsAvailable}
                    </p>
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="text-lg font-semibold text-green-600">
                      ₹{transporter.ticketPrice}
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200 ease-in-out">
                      Book Now
                    </button>
                  </div>
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
