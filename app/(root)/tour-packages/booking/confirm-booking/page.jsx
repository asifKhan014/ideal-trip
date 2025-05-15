
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
  const packageId = searchParams.get("id");
  const router = useRouter();

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [travelers, setTravelers] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [clientSecret, setClientSecret] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem("token");

    if (packageId && authToken) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/package/${packageId}`,
          {
            withCredentials:true,
          }
        )
        .then((response) => {
          if (response.data.isSuccess) {
            setSelectedPackage(response.data.data);
            setTotalPrice(response.data.data.price);
          }
        })
        .catch((error) =>
          console.error("Error fetching package details:", error)
        );
    }
  }, [packageId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const authToken = localStorage.getItem("token");

    if (!authToken) {
      alert("Authentication token missing. Please log in again.");
      return;
    }

    const formData = {
      // fullName: e.target.fullName.value,
      // email: e.target.email.value,
      // phoneNumber: e.target.phone.value,
      numberOfTravelers: travelers,
      packageId,
      totalBill: totalPrice * travelers, // Adjust total price
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/package/booking/initiate`,
        formData,
        { withCredentials:true}
      );

      if (response.data.isSuccess) {

        setClientSecret(response.data.clientSecret);
        
        setBookingId(response.data.bookingId);
      } else {
        alert(response.data.message || "Failed to initiate booking.");
      }
    } catch (error) {
      console.error("Error during booking initiation:", error);
      alert(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 py-16 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-20">
        <h1 className="text-2xl font-semibold mb-4">Book Your Package</h1>

        {selectedPackage ? (
          clientSecret && stripePromise ? (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <StripeCheckoutForm bookingId={bookingId} />
            </Elements>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="block font-medium">Number of Travelers</label>
                <input
                  type="number"
                  min="1"
                  value={travelers}
                  onChange={(e) =>
                    setTravelers(parseInt(e.target.value, 10) || 1)
                  }
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block font-medium">Total Price</label>
                <p className="text-lg font-semibold">
                  PKR {totalPrice * travelers}
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
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
   
      const authToken = localStorage.getItem("token");

      // Send payment confirmation to backend
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/package/booking/payment-success`,
        { bookingId, paymentIntentId: paymentIntent.id },
        { withCredentials:true }
      );
   

      if (response.data.isSuccess) {
        router.push(
          `/tour-packages/booking/confirm-booking/success?bookingId=${bookingId}`
        );
      } else {
    
        alert("Payment processed but failed to update status.");
        // router.push(`/tour-packages/booking/fail-payment`);
      }
    } catch (error) {
      console.error("Error updating payment status:", error);
      alert("Payment processed but failed to update status.");
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
