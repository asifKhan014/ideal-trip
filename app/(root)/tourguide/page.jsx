"use client";
import React, { useEffect, useState } from "react";
import TourGuideCard from "../../components/tourguide/tourguideCard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../hooks/useAuth";

function TourGuide() {
  const [tourGuides, setTourGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  // const authToken = localStorage.getItem("token");
  // const authToken = localStorage.getItem("token");
  const {token:authToken} = useAuth();
  useEffect(() => {
    const fetchTourGuides = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/TourGuide`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${authToken}`,
            },
          }
        );
        const data = await response.json();
        console.log("TourGuide Data", data);
        if (data.isSuccess) {
          setTourGuides(data.data);
        } else {
          setError(data.message || "Failed to fetch tour guides");
        }
      } catch (err) {
        setError("Something went wrong while fetching data.");
      } finally {
        setLoading(false);
      }


      // if (authToken == null) {
      //   router.push("/login");
      // }
    };

    fetchTourGuides();
  }, []);
  // var token = localStorage.getItem("token");
  
  return (
    <div className="min-h-screen  mx-auto px-4 py-8">
      <div className="flex flex-col gap-6 text-center mb-8 min-h-96 bg-blue-500 pt-20 ">
        <div>
          <span className="bg-yellow-400 px-6 py-1 rounded-lg font-bold">
            TourGuide
          </span>
        </div>
        <h1 className="text-4xl text-white font-bold">
          Here, Find your required tourGuide
        </h1>
        <div>
          <p className="text-white text-2xl ">
            We have a list of tour guides who can help you to make your trip
            memorable.
          </p>
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            className="h-12 px-6 py-3 rounded-full shadow-lg w-full max-w-md"
            placeholder="Search for tour guide..."
          />
        </div>
      </div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4 px-6 max-w-7xl mx-auto">
          {tourGuides.length > 0 ? (
            tourGuides.map((guide) => (
              <Link href={`/tourguide/${guide.id}`} key={guide.id}>
                <TourGuideCard
                  idCard={guide.id}
                  ratePerDay={guide.ratePerDay}
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
