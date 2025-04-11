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
    // fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const authToken = localStorage.getItem("token");
      if (!authToken) {
        setError("Authentication token is missing. Please log in again.");
        return;
      }

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/LocalHome/bookings/user`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.data.isSuccess) {
        setBookings(response.data.bookings);
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
    router.push(`/localhome/booking/details?bookingId=${bookingId}`);
  };

  if (loading) {
    return (
      <div className="text-center py-16">
        <p>Loading your bookings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="text-center py-16">
        <p>No bookings found. Please make a booking to view here.</p>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-semibold mb-4">Your Bookings</h1>

        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.bookingId}
              onClick={() => handleBookingClick(booking.bookingId)}
              className="border p-4 rounded-md cursor-pointer hover:bg-gray-100 transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium">Booking ID: {booking.bookingId}</h3>
                  <p className="text-gray-500">Local Home ID: {booking.localHomeId}</p>
                  <p className="text-gray-500">Dates: {new Date(booking.startDate).toLocaleDateString()} to {new Date(booking.endDate).toLocaleDateString()}</p>
                  <p className="text-gray-500">Total Days: {booking.totalDays}</p>
                  <p className="text-gray-500">Status: {booking.status}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-blue-700">PKR {booking.totalPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
