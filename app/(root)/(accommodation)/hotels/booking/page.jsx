"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function BookingPage() {
  const searchParams = useSearchParams();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalDays, setTotalDays] = useState(0);
  const [clientSecret, setClientSecret] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bookingId, setBookingId] = useState(null);

  const calculateTotalDays = (start, end) => {
    if (start && end) {
      const startTime = new Date(start).getTime();
      const endTime = new Date(end).getTime();
      const dayDifference = (endTime - startTime) / (1000 * 60 * 60 * 24);
      setTotalDays(dayDifference > 0 ? dayDifference : 0);
    }
  };

  const handleStartDateChange = (e) => {
    const selectedStartDate = e.target.value;
    setStartDate(selectedStartDate);
    setEndDate("");
    calculateTotalDays(selectedStartDate, endDate);
  };

  const handleEndDateChange = (e) => {
    const selectedEndDate = e.target.value;
    if (new Date(selectedEndDate) > new Date(startDate)) {
      setEndDate(selectedEndDate);
      calculateTotalDays(startDate, selectedEndDate);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const hotelRoomId = searchParams.get("id");

    const formData = {
      hotelRoomId,
      startDate,
      endDate,
      totalDays,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel/booking/initiate`,
        formData,
        {
          withCredentials:true,
        }
      );
      if (response.data.isSuccess) {
        setClientSecret(response.data.data.clientSecret);
        setBookingId(response.data.data.bookingId);
      } else {
        alert(response.data.message || "Failed to initiate booking.");
      }
    } catch (error) {
      if (error.response?.status === 401) {
        alert("Session expired. Please log in again.");
        router.push("/login");
        return;
      }
      console.error("Error during booking initiation:", error);
      alert(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-semibold mb-4">Book Your Hotel Room</h1>

        {clientSecret ? (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <StripeCheckoutForm bookingId={bookingId} />
          </Elements>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 p-4 border rounded-lg shadow-md bg-white"
          >
            <div>
              <label className="block font-medium mb-1">Start Date</label>
              <input
                type="date"
                value={startDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={handleStartDateChange}
                className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">End Date</label>
              <input
                type="date"
                value={endDate}
                min={
                  startDate
                    ? new Date(new Date(startDate).getTime() + 86400000)
                        .toISOString()
                        .split("T")[0]
                    : new Date().toISOString().split("T")[0]
                }
                onChange={handleEndDateChange}
                className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                required
                disabled={!startDate}
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Total Days</label>
              <p className="text-lg font-semibold text-blue-700">{totalDays}</p>
            </div>

            <button
              type="submit"
              disabled={loading || totalDays === 0}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:bg-gray-400"
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function StripeCheckoutForm({ bookingId }) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {},
      redirect: "if_required",
    });

    if (error) {
      console.error("Payment Error:", error.message);
      alert(error.message);
      setLoading(false);
      router.push("/hotels/booking/fail-payment");
      return;
    }

    try {
      const authToken = localStorage.getItem("token");

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel/booking/payment-success`,
        {
          bookingId,
          paymentIntentId: paymentIntent.id,
        },
        {
          withCredentials:true,
        }
      );

      if (response.data.isSuccess) {
        router.push(`/hotels/booking/success?bookingId=${bookingId}`);
      } else {
        alert("Payment processed but failed to update status.");
        router.push("/hotels/booking/fail-payment");
      }
    } catch (error) {
      console.error("Error updating payment status:", error);
      alert("Payment processed but failed to update status.");
      router.push("/hotels/booking/fail-payment");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handlePayment} className="space-y-4">
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}
