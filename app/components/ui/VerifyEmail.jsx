"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function VerifyEmail() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email"); // Access the 'email' query parameter

  const [message, setMessage] = useState(""); // State to hold success/error messages
  const [loading, setLoading] = useState(false); // State to indicate loading

  // Function to handle Resend Email
  const handleResendEmail = async () => {
    if (!email) {
      setMessage("Email is not provided in the URL.");
      return;
    }

    setLoading(true);
    setMessage(""); // Clear previous messages

    try {
      const response = await axios.post(
        "http://localhost:5277/api/auth/resend-link",
        { email }
      );

      if (response.data.isSuccess) {
        const data = response.data.messege;
        setMessage(data.message || "Verification email resent successfully!");
      } else {
        const errorData = response.data.messege;
        setMessage(errorData.error || "Failed to resend the email. Try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="app"
      className="h-full flex items-center justify-center bg-gray-100"
    >
      <main className="bg-white rounded-md shadow-md w-full max-w-md p-6">
        <header className="text-center mb-6">
          <div className="text-blue-600 text-[3.125rem]">
            <img alt="Logo" src="/travel.png" className="w-32 h-32 mx-auto" />
          </div>
        </header>
        <div className="text-center">
          <div className="text-green-600 text-[5rem] mb-4">
            {/* Email icon */}
            <div className="text-green-600 text-[5rem] mb-4">
              {/* Email icon */}
              <img
                alt="email Icon"
                src="/sent.png"
                className="w-24 h-24 mx-auto"
              />
            </div>
          </div>
          <h1 className="text-2xl font-medium mb-2">Verify Email</h1>
          <p className="text-gray-600 mb-4">
            {email ? (
              <>
                A verification email has been sent to <strong>{email}</strong>.
              </>
            ) : (
              "No email address provided in the URL."
            )}
          </p>
          <p className="text-gray-600 mb-6">
            Click the link in the email to verify your account.
          </p>
          <div className="flex justify-center gap-4">
            <button
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
              onClick={() => console.log("Cancelled")}
            >
              Cancel
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              onClick={handleResendEmail}
              disabled={loading} // Disable button while loading
            >
              {loading ? "Resending..." : "Resend Email"}
            </button>
            <a
              href="https://gmail.com"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Go to Gmail
            </a>
          </div>
          {message && (
            <p
              className={`mt-4 text-sm ${
                message.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
