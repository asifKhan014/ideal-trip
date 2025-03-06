"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useAuth } from "../../../hooks/useAuth"; // Adjust the path based on your actual context location
import { useState, useEffect } from "react";
import axios from "axios";
import { Router } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const [userDetails, setUserDetails] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch user data if token exists
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
          const response = await axios.get(`${backendUrl}/api/user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.data.isSuccess) {
            setProfilePhoto(response.data.data.profilePhotoUrl);
            setUserDetails(response.data.data);
          }
        } catch (error) {
          console.error(
            "Error fetching profile:",
            error.response || error.message
          );
        }
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <Disclosure as="nav" className="bg-white shadow sticky top-0 z-50 py-3">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex h-16 justify-between">
          {/* Left: Logo */}
          <div className="flex px-2 lg:px-0">
            <div className="flex flex-shrink-0 items-center">
              <Link href={"/"}>
                <img
                  alt="Ideal Trip"
                  src="/travel.png"
                  className="h-14 w-auto"
                />
              </Link>
            </div>
          </div>

          {/* Center: Links */}
          <div className="hidden lg:flex lg:space-x-8">
            <Link
              href="/"
              className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                router.pathname === "/"
                  ? "border-indigo-500 text-gray-900"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Home
            </Link>
            <Link
              href="#home-tours"
              className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                router.pathname === "/"
                  ? "border-indigo-500 text-gray-900"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}            >
              Tours
            </Link>
            <Link
              href="#"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Transportation
            </Link>
            <Link
              href="#"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Accommodation
            </Link>
            <Link
              href="/tourguide"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              TourGuide
            </Link>
            <Link
              href="/"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Contact Us
            </Link>
          </div>

          {/* Right: User/Profile */}
          <div className="hidden lg:flex lg:items-center">
            {isAuthenticated ? (
              <Menu as="div" className="relative ml-4 flex-shrink-0">
                <Link href="/profile">
                  <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src={
                        profilePhoto
                          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${profilePhoto}`
                          : "/user.png"
                      }
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </Link>
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Your Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Settings
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700"
                      onClick={() => {
                        logout();
                        router.push("/");
                      }}
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Log In
                </Link>
                <Link
                  href="/register"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
