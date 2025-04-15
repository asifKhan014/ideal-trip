"use client";

import { useRouter, useSearchParams } from "next/navigation";
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const transportId = searchParams.get("id");

  const [ticketPrice, setTicketPrice] = useState(0);
  const [seatsBooked, setSeatsBooked] = useState(1);
  const [totalFare, setTotalFare] = useState(0);
  const [clientSecret, setClientSecret] = useState(null);
  const [bookingId, setBookingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch transport price (optional if already available in props or page)
  useEffect(() => {
    const fetchTransportData = async () => {
      const authToken = localStorage.getItem("token");
      console.log("TOken 1",authToken)
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Transport/get-transport/${transportId}`,
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );
        if (res.data.isSuccess) {
          const price = res.data.data.ticketPrice;
          setTicketPrice(price);
          setTotalFare(price); // initial value
        }
      } catch (err) {
        console.error("Failed to fetch transport price", err);
      }
    };

    if (transportId) fetchTransportData();
  }, [transportId]);

  // Recalculate total fare
  useEffect(() => {
    setTotalFare(seatsBooked * ticketPrice);
  }, [seatsBooked, ticketPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const authToken = localStorage.getItem("token");

    if (!authToken) {
      alert("Please log in to continue.");
      return;
    }

    const payload = {
      transportId,
      seatsBooked,
      ticketPrice,
      totalFare,
    };

    try {
      const authToken = localStorage.getItem("token");
      console.log("TOken 2",authToken)
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Transport/booking/initiate`,
        payload,
        { headers: { Authorization: `Bearer ${authToken}` } }
      );

      if (res.data.isSuccess) {
        setClientSecret(res.data.clientSecret);
        setBookingId(res.data.bookingId);
      } else {
        alert(res.data.message || "Booking initiation failed.");
      }
    } catch (error) {
      console.error("Error initiating transport booking:", error);
      alert(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-semibold mb-4">Book Your Transport</h1>

        {clientSecret ? (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <StripeCheckoutForm bookingId={bookingId} />
          </Elements>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-medium mb-1">Seats to Book</label>
              <input
                type="number"
                min={1}
                value={seatsBooked}
                onChange={(e) => setSeatsBooked(parseInt(e.target.value) || 1)}
                className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div>
              <p className="text-lg">
                <strong>Price per Ticket:</strong> {ticketPrice}
              </p>
              <p className="text-xl text-blue-600 font-bold">
                Total Fare: {totalFare}
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || seatsBooked < 1}
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
      router.push("/transport/booking/fail-payment");
      return;
    }

    try {
      const authToken = localStorage.getItem("token");

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/TransportBooking/payment-success`,
        { bookingId, paymentIntentId: paymentIntent.id },
        { headers: { Authorization: `Bearer ${authToken}` } }
      );

      if (response.data.isSuccess) {
        router.push(`/transport/booking/success?bookingId=${bookingId}`);
      } else {
        alert("Payment succeeded but update failed.");
        router.push("/transport/booking/fail-payment");
      }
    } catch (error) {
      console.error("Payment success update failed:", error);
      alert("Payment succeeded but update failed.");
      router.push("/transport/booking/fail-payment");
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
