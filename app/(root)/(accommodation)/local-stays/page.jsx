"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LocalStaysCard from "../../../components/local-stays/localStaysCard"; // Assuming this is a reusable component

function LocalHomes() {
  const [localHomes, setLocalHomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const authToken = localStorage.getItem("token");

  // Fetch local homes when component mounts
  useEffect(() => {
    const fetchLocalHomes = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/LocalHome/GetLocalHomes`,
          {
            method: "GET",
            credentials:'include',
            headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${authToken}`,
            },
          }
        );
        const data = await response.json();
        console.log("Local homes data:", data.data.localHomes);
        if (data.isSuccess) {
          setLocalHomes(data.data.localHomes); // Assuming response data has a `data` field containing local homes
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

  // Redirect to login if token is missing
  // if (!authToken) {
  //   router.push("/login");
  //   return null;
  // }

  return (
    <div className="min-h-screen mx-auto px-4 py-8">
      <div className="flex flex-col gap-6 text-center mb-8 min-h-96 bg-blue-500 pt-20">
        <div>
          <span className="bg-yellow-400 px-6 py-1 rounded-lg font-bold">
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
            className="h-12 px-6 py-3 rounded-full shadow-lg w-full max-w-md"
            placeholder="Search for local homes..."
          />
        </div>
      </div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-6 max-w-7xl mx-auto">
          {localHomes.length > 0 ? (
            localHomes.map((home) => (
              <Link href={`/local-stays/${home.id}`} key={home.id}>
                <LocalStaysCard
                  idCard={home.id}
                  name={home.name}
                  description={home.description}
                  location={home.addressLine}
                  availableFrom={home.availableFrom}
                  availableTo={home.availableTo}
                  pricePerNight={home.pricePerNight}
                  rating={home.rating}
                  // imageUrl={home.imageUrl}
                  imageUrl={`http://localhost:5277/${home.imageUrl}`}
                  capacity={home.capacity}
                />
              </Link>
            ))
          ) : (
            <p className="text-center col-span-3">No local homes available</p>
          )}
        </div>
      )}
    </div>
  );
}

export default LocalHomes;
