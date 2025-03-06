"use client";
import React, { useEffect, useState } from "react";
import TourGuideCard from "../../components/tourguide/tourguideCard";
import Link from "next/link";
function TourGuide() {
  const [tourGuides, setTourGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
    const fetchTourGuides = async () => {
        try {
            const authToken = localStorage.getItem("token");
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/TourGuide`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${authToken}`,
                    },
                }
            );
            const data = await response.json();
            console.log(data);
            if (data.isSuccess) {
                setTourGuides(data.data);
            } else {
                setError(data.messege || "Failed to fetch tour guides");
            }
        } catch (err) {
            setError("Something went wrong while fetching data.");
        } finally {
            setLoading(false);
        }
    };

    fetchTourGuides();
}, []);
console.log("tourGuides: ---- ", tourGuides);
  return (
    <div className="min-h-screen  mx-auto px-4 py-8">
      <div className="text-center mb-8 min-h-96 bg-pink-500 pt-20 ">
        <h1 className="text-3xl text-white font-bold">Here, Find your required tourGuide</h1>
      </div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-16 max-w-7xl mx-auto">
          {tourGuides.length > 0 ? (
            tourGuides.map((guide) => (
              <Link href={`/tourguide/${guide.id}`} key={guide.id}>
                <TourGuideCard
                  idCard={guide.id}
                  hourlyRate={guide.ratePerDay}
                  bio={guide.bio}
                  experience={guide.experience}
                  location={guide.location}
                />
              </Link>
            ))
          ) : (
            <p className="text-center col-span-3">No tour guides available</p>
          )}
        </div>
      )}
    </div>
  );
}

export default TourGuide;
