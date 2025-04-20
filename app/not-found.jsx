// app/not-found.tsx
"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 | Page Not Found";
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 text-center">
      <div className="max-w-md">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Page not found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>

      {/* Optional: Fun Illustration */}
      <div className="mt-12 w-full max-w-sm">
        <img
          src="/404.svg"
          alt="404 illustration"
          className="w-full object-contain"
        />
      </div>
    </main>
  );
}
