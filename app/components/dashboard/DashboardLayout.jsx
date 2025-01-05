import Link from "next/link";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-5">
        <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <a href="/dashboard/Profile" className="hover:underline">
              Profile
            </a>
          </li>
          <li>
            <button className="text-red-400">Logout</button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-gray-100 p-5 overflow-auto">{children}</div>
    </div>
  );
}
