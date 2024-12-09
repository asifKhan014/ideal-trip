"use client";

import Link from "next/link";

export default function AccountPendingApproval() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 bg-gray-50 lg:px-8">
      <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <div className="text-center">
          <img
            src="/travel.png"
            alt="Your Company Logo"
            className="mx-auto h-20 w-auto"
          />
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Account Pending Approval
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            Your account information has been sent to the admin for
            verification. You will be notified via email once your request has
            been approved.
          </p>
        </div>

        <div className="mt-6">
          <button
            onClick={() => (window.location.href = "/login")}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Back to Login
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Need help?{" "}
          <Link
            href="/contact-support"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  );
}
