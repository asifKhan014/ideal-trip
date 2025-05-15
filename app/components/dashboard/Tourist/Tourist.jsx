"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function UserDashboardBookingDetail() {
  const router = useRouter();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/User/user-bookings`,
        {
          withCredentials:true
        }
      );

      if (response.data.isSuccess) {
        setBookings(response.data.data);
      } else {
        setError(response.data.message || "Failed to fetch bookings.");
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setError("An error occurred while fetching your bookings.");
    } finally {
      setLoading(false);
    }
  };

  const handleBookingClick = (bookingId) => {
    // router.push(`/localhome/booking/details?bookingId=${bookingId}`);
  };

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-gray-600 animate-pulse">Loading your bookings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-600 text-lg font-medium">{error}</p>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="text-center py-20">
        <p className=" text-lg">No bookings found. Please make a booking to view here.</p>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Your Bookings</h1>

        <div className="space-y-6 h-[1200px] overflow-y-auto px-5">
          {bookings.map((booking) => (
            <div
              key={booking.bookingId}
              onClick={() => handleBookingClick(booking.bookingId)}
              className="border border-gray-200 p-6 rounded-lg shadow-sm bg-white cursor-pointer hover:shadow-md hover:bg-gray-50 transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Booking ID: {booking.bookingId}
                  </h3>
                  <p className="text-sm  mb-1">
                    Date: {new Date(booking.bookingDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm  mb-1">Total Days: {booking.totalDays}</p>
                  <p className="text-sm  mb-1">Status: {booking.status}</p>
                  <p className="text-sm  mb-1">Service: {booking.bookingType}</p>

                  {booking.bookingType === "Transporter" && (
                    <>
                      <p className="text-sm  mb-1">Location: {booking.location}</p>
                      <p className="text-sm ">People: {booking.numberOfPeople}</p>
                    </>
                  )}
                </div>

                <div className="text-right">
                  <p className="text-lg font-bold text-blue-700">
                    PKR {booking.amountPaid}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
