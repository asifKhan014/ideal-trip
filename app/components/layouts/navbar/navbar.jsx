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
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useAuth } from "../../../hooks/useAuth";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Transportation", href: "/transportation" },
  {
    name: "Accommodation",
    href: "/local-stays",
    submenu: [
      { name: "Hotels", href: "/hotels" },
      { name: "Local Stays", href: "/local-stays" },
    ],
  },
  { name: "TourGuide", href: "/tourguide" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const [userDetails, setUserDetails] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [LoggedIn, setLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`/api/User`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 401) {
          setLoggedIn(false);
        }
        const data = await response.json();
        if (data.isSuccess) {
          setLoggedIn(true);
          setProfilePhoto(data.data.profilePhotoPath);
          setUserDetails(data.data);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogOut = async () => {
    const response = await fetch(`/api/Auth/logout`, {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status == 200) {
      setLoggedIn(false);
      router.push('/');
    }
  };

  return (
    <Disclosure as="nav" className="bg-white shadow sticky top-0 z-50 py-4 md:py-5">
      {({ open }) => (
        <>
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo and mobile menu button */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <img src="/logo1.png" alt="Ideal Trip" className="h-14 w-auto" />
                  </Link>
                </div>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex lg:ml-6 lg:space-x-8 items-center">
                {navLinks.map((link) => {
                  if (link.name === "Dashboard" && !LoggedIn) return null;

                  return link.submenu ? (
                    <div className="relative group" key={link.name}>
                      <Link
                        href={link.href}
                        className={`text-lg font-medium border-b-2 px-1 pt-1 transition-all ${
                          pathname === link.href || link.submenu.some((s) => s.href === pathname)
                            ? "border-indigo-500 text-gray-900"
                            : "border-transparent text-black hover:border-gray-300 hover:text-gray-700"
                        }`}
                      >
                        {link.name}
                      </Link>
                      <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-0 w-40 z-50">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-base font-bold text-black hover:bg-gray-100"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-lg font-medium border-b-2 px-1 pt-1 transition-all ${
                        pathname === link.href
                          ? "border-indigo-500 text-gray-900"
                          : "border-transparent text-black hover:border-gray-300 hover:text-gray-700"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Right Side: Profile / Auth Buttons */}
              <div className="hidden lg:flex lg:items-center lg:space-x-4">
                {LoggedIn ? (
                  <>
                    <button className="p-1 rounded-full text-gray-700 hover:text-gray-900 focus:outline-none">
                      <BellAlertIcon className="h-6 w-6" />
                    </button>

                    <Menu as="div" className="relative">
                      <MenuButton className="flex items-center focus:outline-none">
                        <img
                          src={
                            profilePhoto
                              ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${profilePhoto}`
                              : "/user.png"
                          }
                          alt="Profile"
                          className="h-9 w-9 rounded-full object-cover"
                        />
                      </MenuButton>
                      <MenuItems className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                        <MenuItem>
                          <Link href="/profile" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                            Your Profile
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link href="/dashboard" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                            Dashboard
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                            Settings
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <button
                            onClick={handleLogOut}
                            className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"
                          >
                            Sign out
                          </button>
                        </MenuItem>
                      </MenuItems>
                    </Menu>

                    <Button
                      className="px-5 py-2 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700"
                      onClick={handleLogOut}
                    >
                      Sign out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/register">
                      <Button className="px-5 py-2 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700">
                        Sign Up
                      </Button>
                    </Link>
                    <Link href="/login">
                      <Button className="px-5 py-2 border border-black text-black hover:bg-blue-700 text-lg hover:text-white rounded-lg">
                        Login
                      </Button>
                    </Link>
                  </>
                )}
              </div>

              {/* Mobile menu button and profile image */}
              <div className="flex items-center lg:hidden">
                {LoggedIn && (
                  <div className="flex items-center mr-4">
                    <button className="p-1 rounded-full text-gray-700 hover:text-gray-900 focus:outline-none">
                      <BellAlertIcon className="h-6 w-6" />
                    </button>
                    <img
                      src={
                        profilePhoto
                          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${profilePhoto}`
                          : "/user.png"
                      }
                      alt="Profile"
                      className="h-9 w-9 rounded-full object-cover ml-2"
                    />
                  </div>
                )}
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <DisclosurePanel className="lg:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => {
                if (link.name === "Dashboard" && !LoggedIn) return null;

                return link.submenu ? (
                  <div key={link.name} className="space-y-1">
                    <DisclosureButton
                      as={Link}
                      href={link.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                        pathname === link.href || link.submenu.some((s) => s.href === pathname)
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {link.name}
                    </DisclosureButton>
                    <div className="pl-4 space-y-1">
                      {link.submenu.map((sub) => (
                        <DisclosureButton
                          key={sub.name}
                          as={Link}
                          href={sub.href}
                          className={`block px-3 py-2 rounded-md text-base font-medium ${
                            pathname === sub.href
                              ? "bg-blue-50 text-blue-700"
                              : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                        >
                          {sub.name}
                        </DisclosureButton>
                      ))}
                    </div>
                  </div>
                ) : (
                  <DisclosureButton
                    key={link.name}
                    as={Link}
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === link.href
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </DisclosureButton>
                );
              })}

              {LoggedIn ? (
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        src={
                          profilePhoto
                            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${profilePhoto}`
                            : "/user.png"
                        }
                        alt="Profile"
                        className="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {userDetails?.firstName} {userDetails?.lastName}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {userDetails?.email}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    <DisclosureButton
                      as={Link}
                      href="/profile"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Your Profile
                    </DisclosureButton>
                    <DisclosureButton
                      as={Link}
                      href="/dashboard"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Dashboard
                    </DisclosureButton>
                    <DisclosureButton
                      as={Link}
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Settings
                    </DisclosureButton>
                    <DisclosureButton
                      as="button"
                      onClick={handleLogOut}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Sign out
                    </DisclosureButton>
                  </div>
                </div>
              ) : (
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex flex-col space-y-2 px-2">
                    <Link
                      href="/login"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-700 bg-blue-100 hover:bg-blue-200"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}