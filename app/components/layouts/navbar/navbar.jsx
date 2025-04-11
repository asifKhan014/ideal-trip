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
import {
  Bars3Icon,
  BellAlertIcon,
  BellIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useAuth } from "../../../hooks/useAuth";
import { useState, useEffect } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  // console.log("User: ", user);
  // console.log("isAuth:", isAuthenticated);
  const [userDetails, setUserDetails] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const pathname = usePathname();
  useEffect(() => {
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
    <Disclosure as="nav" className="bg-white shadow sticky top-0 z-50 py-4">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
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
          <div className="hidden  lg:flex items-center justify-center lg:space-x-8 ">
            <Link
              href="/dashboard"
              className={`inline-flex items-center border-b-2 px-1 pt-1 text-lg font-medium ${
                pathname === "/dashboard"
                  ? "border-indigo-500 text-gray-900"
                  : "border-transparent text-black hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/"
              className={`inline-flex items-center border-b-2 px-1 pt-1 text-lg font-medium ${
                pathname === "/"
                  ? "border-indigo-500 text-gray-900"
                  : "border-transparent text-black hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Home
            </Link>
            {/* <Link
              href="/tours"
              className={`inline-flex items-center border-b-2 px-1 pt-1 text-lg font-medium ${
                pathname === "/tour-packages"
                  ? "border-indigo-500 text-gray-900"
                  : "border-transparent text-black hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Tours
            </Link> */}
            <Link
              href="/transportation"
              className={`inline-flex items-center border-b-2 px-1 pt-1 text-lg font-medium ${
                pathname === "/transportation"
                  ? "border-indigo-500 text-gray-900"
                  : "border-transparent text-black hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Transportation
            </Link>
            <div className="relative group">
              <Link
                href="/local-stays"
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-lg font-medium ${
                  pathname === "/hotels" || pathname === "/local-stays"
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-black hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Accommodation
              </Link>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-6 w-36">
                <Link
                  href="/hotels"
                  className="block px-4 py-2 text-lg text-black hover:bg-gray-100"
                >
                  Hotels
                </Link>
                <Link
                  href="/local-stays"
                  className="block px-4 py-2 text-lg text-black hover:bg-gray-100"
                >
                  Local Stays
                </Link>
              </div>
            </div>
            <Link
              href="/tourguide"
              className={`inline-flex items-center border-b-2 px-1 pt-1 text-lg font-medium ${
                pathname === "/tourguide"
                  ? "border-indigo-500 text-gray-900"
                  : "border-transparent text-black hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              TourGuide
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-lg font-medium text-black hover:border-gray-300 hover:text-gray-700"
            >
              Contact Us
            </Link>
          </div>

          {/* Right: User/Profile */}
          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-6">
                <BellAlertIcon className="h-7 w-7" />
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
                        className="block px-4 py-2 text-sm text-black"
                      >
                        Your Profile
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 text-sm text-black"
                      >
                        Dashboard
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-black"
                      >
                        Settings
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <button
                        className="block px-4 py-2 text-sm text-black"
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
                <Button
                  className="hidden lg:flex items-center px-5 py-2  text-base font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                  onClick={() => {
                    logout();
                    router.push("/");
                  }}
                >
                  Sign out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/register"
                  // className="text-sm font-medium text-black hover:text-gray-700"
                >
                  <Button className="hidden lg:flex items-center px-5 py-2  text-base font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none">
                    Sign Up
                  </Button>
                </Link>
                <Link
                  href="/login"
                  // className="text-sm font-medium text-black hover:text-gray-700"
                >
                  <Button className=" lg:flex items-center px-5 py-2  text-base font-bold text-black hover:text-white border-black border rounded-lg hover:bg-blue-700 focus:outline-none">
                    Login
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
