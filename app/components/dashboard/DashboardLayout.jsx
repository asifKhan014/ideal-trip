'use client';
import Link from "next/link";
import React, { useEffect } from "react";
import { HiOutlineHome, HiOutlineUser, HiOutlineLogout } from "react-icons/hi";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
    const { user, isAuthenticated, logout } = useAuth();
    const router = useRouter();
    useEffect(() => {
        // if (!user) {
        //     router.push("/login");
        // }
    }, [user, router]); 
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gradient-to-b from-indigo-600 to-blue-800 text-white p-8 shadow-xl">
        <h1 className="text-3xl font-semibold mb-8 text-center">Dashboard</h1>
        <nav>
          <ul className="space-y-6">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center gap-4 text-lg hover:bg-indigo-500 py-2 px-4 rounded-md transition-all duration-300 ease-in-out hover:text-white focus:outline-none"
              >
                <HiOutlineHome className="text-2xl" />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="flex items-center gap-4 text-lg hover:bg-indigo-500 py-2 px-4 rounded-md transition-all duration-300 ease-in-out hover:text-white focus:outline-none"
              >
                <HiOutlineUser className="text-2xl" />
                Profile
              </Link>
            </li>
            <li>
              <button
                className="flex items-center gap-4 text-lg text-red-400 hover:bg-red-500 py-2 px-4 rounded-md transition-all duration-300 ease-in-out hover:text-white focus:outline-none"
                onClick={() => {
                  logout();
                  router.push("/");
                }}
              >
                <HiOutlineLogout className="text-2xl" />
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8 overflow-auto shadow-lg rounded-lg mx-6">
        {children}
      </main>
    </div>
  );
}
