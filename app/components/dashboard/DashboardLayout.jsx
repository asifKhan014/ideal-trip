import Link from "next/link";
import React from "react";
import { HiOutlineHome, HiOutlineUser, HiOutlineLogout } from "react-icons/hi";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/6 bg-gray-800 text-white p-6">
        <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/dashboard" className="flex items-center gap-3 hover:underline focus:underline">
                <HiOutlineHome className="text-xl" />
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="flex items-center gap-3 hover:underline focus:underline">
                <HiOutlineUser className="text-xl" />
                Profile
              </Link>
            </li>
            <li>
              <button
                className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors"
                onClick={() => {
                  // Add logout logic here
                  console.log("Logout clicked");
                }}
              >
                <HiOutlineLogout className="text-xl" />
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
}
