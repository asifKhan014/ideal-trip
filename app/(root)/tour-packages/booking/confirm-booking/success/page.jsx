"use client";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();
  // const { session_id } = router;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-lg p-8 bg-white shadow-md rounded-lg text-center">
        <h1 className="text-3xl font-bold text-green-600">
          Payment Successful!
        </h1>
        <p className="mt-4 text-gray-700">
          Thank you for booking your tour. Your payment has been processed
          successfully.
        </p>
        <p className="mt-2 text-gray-500">
          Your session ID is:
          {/* <strong>{session_id}</strong> */}
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}