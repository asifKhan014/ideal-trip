"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function ForgotPassword() {
  const [emailAddress, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to store error message
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // Clear previous errors

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
      const result = await axios.post(
        `${backendUrl}/api/auth/forgot-password`,
        { emailAddress },
        { headers: { "Content-Type": "application/json" } }
      );

      if (result.data.isSuccess) {
        router.push(`/verify-email?email=${encodeURIComponent(emailAddress)}`);
      } else {
        setErrorMessage(result.data.message || "Something went wrong.");
      }
    } catch (error) {
      console.log(error.response);
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <main id="content" role="main" className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white rounded-xl shadow-lg border-2">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">
              Forgot password?
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Remember your password?
              <a
                className="text-[#4F46E5] pl-1 decoration-2 hover:underline font-bold"
                href="/login"
              >
                Login here
              </a>
            </p>
          </div>

          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="emailAddress"
                    className="block text-sm font-bold ml-1 mb-2"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="emailAddress"
                      name="emailAddress"
                      value={emailAddress}
                      onChange={(e) => setEmail(e.target.value)}
                      className="py-3 px-4 block w-full border-2 rounded-md text-sm focus:ring-[#4F46E5] shadow-sm"
                      required
                    />
                  </div>
                </div>

                {/* Display Error Message */}
                {errorMessage && (
                  <p className="text-xs text-red-600 mt-2">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#4F46E5] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm"
                >
                  Reset password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ForgotPassword;
