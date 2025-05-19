"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function BookingPage() {
  const searchParams = useSearchParams();
  const [bookingId, setBookingId] = useState(null);
  const Id = searchParams.get("id");
  const router = useRouter();
  const [tourGuide, setTourGuide] = useState(null);
  const [travelers, setTravelers] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [clientSecret, setClientSecret] = useState(null);
  const [loading, setLoading] = useState(false);
  const [specialRequest, setSpecialRequest] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {

    if (Id) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/TourGuide/${Id}`, {
          withCredentials:true,
        })
        .then((response) => {
          if (response.status === 401) {
            alert("Session expired. Please log in again.");
            router.push("/login");
            return;
          }
          if (response.data.isSuccess) {
            setTourGuide(response.data.data);
            // setTotalPrice(response.data.data.price);
            setTotalPrice(0);
          }
        })
        .catch((error) =>
          console.error("Error fetching package details:", error)
        );
    }
  }, [Id]);

  const calculateTotalPrice = (start, end) => {
    if (start && end) {
      const startTime = new Date(start).getTime();
      const endTime = new Date(end).getTime();
      const dayDifference = (endTime - startTime) / (1000 * 60 * 60 * 24);
      if (dayDifference > 0) {
        setTotalPrice(dayDifference * tourGuide.ratePerDay );
      } else {
        setTotalPrice(0);
      }
    }
  };

  const handleStartDateChange = (e) => {
    const selectedStartDate = e.target.value;
    setStartDate(selectedStartDate);
    setEndDate(""); // Reset end date to ensure correct selection
    calculateTotalPrice(selectedStartDate, endDate);
  };

  const handleEndDateChange = (e) => {
    const selectedEndDate = e.target.value;
    if (new Date(selectedEndDate) > new Date(startDate)) {
      setEndDate(selectedEndDate);
      calculateTotalPrice(startDate, selectedEndDate);
    }
  };

  const handleTravelersChange = (e) => {
    const numberOfTravelers = parseInt(e.target.value, 10) || 1;
    setTravelers(numberOfTravelers);
    calculateTotalPrice(startDate, endDate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      tourGuideId: Id,
      startDate: startDate,
      endDate: endDate,
      numberOfTravelers: travelers,
      specialRequest: specialRequest,
    };
    
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/TourGuide/booking/initiate`,
        formData,
        { withCredentials:true }
      );

      if (response.data.isSuccess) {
       
        setClientSecret(response.data.clientSecret);
        
        setBookingId(response.data.bookingId);
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
        <h1 className="text-2xl font-semibold mb-4">Book Your TourGuide</h1>

        {tourGuide ? (
          clientSecret && stripePromise ? (
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
                  disabled={!startDate} // Prevent selection before choosing start date
                />
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Number of Travelers
                </label>
                <input
                  type="number"
                  min="1"
                  value={travelers}
                  onChange={handleTravelersChange}
                  className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Special Request
                </label>
                <textarea
                  name="specialRequest"
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                  rows="3"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Total Price</label>
                <p className="text-lg font-semibold text-blue-700">
                  PKR {totalPrice}
                </p>
              </div>

              <button
                type="submit"
                disabled={loading || totalPrice === 0}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:bg-gray-400"
              >
                {loading ? "Processing..." : "Proceed to Payment"}
              </button>
            </form>
          )
        ) : (
          <p>Loading package details...</p>
        )}
      </div>
     
    </section>
  );
}

function StripeCheckoutForm({ bookingId }) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter(); // Use router for navigation
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    // Confirm the payment without automatic redirection
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {}, // Remove return_url to prevent automatic redirection
      redirect: "if_required", // Prevents Stripe from redirecting automatically
    });

    if (error) {
      console.error("Payment Error:", error.message);
      alert(error.message);
      setLoading(false);
      router.push(`/tour-packages/booking/fail-payment`);
      return;
    }

    try {

      // Send payment confirmation to backend
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/TourGuide/booking/payment-success`,
        { bookingId, paymentIntentId: paymentIntent.id },
        { withCredentials:true}
      );

      if (response.data.isSuccess) {
        router.push(`/tourguide/booking/success?bookingId=${bookingId}`);
      } else {
       
        alert("Payment processed but failed to update status.11");
        // router.push(`/tour-packages/booking/fail-payment`);
      }
    } catch (error) {
      console.error("Error updating payment status:", error);
      alert("Payment processed but failed to update status.22");
      // router.push(`/tour-packages/booking/fail-payment`);
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
