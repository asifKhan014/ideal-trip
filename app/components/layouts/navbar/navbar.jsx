// "use client";
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from "@headlessui/react";
// import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";
// import { useAuth } from "../../../hooks/useAuth"; // Adjust the path based on your actual context location
// import { isTokenValid } from "../../../../utils/isTokenValid"; // Import the token validity function
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Loader from "../../ui/Loader";
// export default function Navbar() {
//   // let isAuthenticated = true;
//   const { user, isAuthenticated, logout } = useAuth(); // Assuming token is stored in user object
//   const [userDetails, setUserDetails] = useState(null); // Store user info including profile photo URL
//   const [loading, setLoading] = useState(true); // For handling loading state

//   useEffect(() => {
//     // Fetch user data on component mount (or page load)
//     const fetchUserProfile = async () => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         try {
//           const response = await axios.get(
//             "https://localhost:5277/api/auth/profile",
//             // `${process.env.BASE_URL}/api/auth/profile`,
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );

//           console.log(response.data);

//           if (!response.ok) {
//             throw new Error("Failed to fetch user profile");
//           }
//           if (response.data.isSuccess) {
//             const userData = response.data.data;
//             setUserDetails(userData);
//           }
//         } catch (error) {
//           console.log(error.response);
//         } finally {
//           setLoading(false); // Stop loading after fetching
//         }
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   if (loading) {
//     return (
//       <div>
//         <Loader />
//       </div>
//     ); // Loading state
//   }
//   return (
//     <Disclosure as="nav" className="bg-white shadow sticky top-0 z-50 py-3">
//       <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
//         <div className="flex h-16 justify-between">
//           <div className="flex  px-2 lg:px-0">
//             <div className="flex flex-shrink-0 items-center">
//               <Link href={"/"}>
//                 <img
//                   alt="Ideal Trip"
//                   src="/travel.png"
//                   className="h-14 w-auto"
//                 />
//               </Link>
//             </div>
//           </div>
//           <div className="flex items-center justify-center">
//             <div className="hidden  lg:ml-6 lg:flex lg:space-x-8">
//               {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
//               <Link
//                 href="/"
//                 className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="#home-tours"
//                 className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
//               >
//                 Tours
//               </Link>
//               <Link
//                 href="#"
//                 className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
//               >
//                 Transportation
//               </Link>
//               <Link
//                 href="#"
//                 className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
//               >
//                 Accumodation
//               </Link>
//               <Link
//                 href="/contact-us"
//                 className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>

//           <div className="flex items-center lg:hidden">
//             {/* Mobile menu button */}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon
//                 aria-hidden="true"
//                 className="block h-6 w-6 group-data-[open]:hidden"
//               />
//               <XMarkIcon
//                 aria-hidden="true"
//                 className="hidden h-6 w-6 group-data-[open]:block"
//               />
//             </DisclosureButton>
//           </div>
//           <div className="hidden lg:ml-4 lg:flex lg:items-center">
//             {/* Profile dropdown or login/signup buttons */}
//             {isAuthenticated ? (
//               // Profile dropdown
//               <Menu as="div" className="relative ml-4 flex-shrink-0">
//                 <Link href={"/profile"}>
//                   <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//                     <span className="absolute -inset-1.5" />
//                     <span className="sr-only">Open user menu</span>
//                     <img
//                       alt=""
//                       src="/user.png"
//                       className="h-8 w-8 rounded-full"
//                     />
//                   </MenuButton>
//                 </Link>
//                 <MenuItems
//                   transition
//                   className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//                 >
//                   <MenuItem>
//                     <Link
//                       href="/profile"
//                       className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
//                     >
//                       Your Profile
//                     </Link>
//                   </MenuItem>
//                   <MenuItem>
//                     <Link
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
//                     >
//                       Settings
//                     </Link>
//                   </MenuItem>
//                   <MenuItem>
//                     <button // Assuming logout function is available
//                       className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
//                     >
//                       Sign out
//                     </button>
//                   </MenuItem>
//                 </MenuItems>
//               </Menu>
//             ) : (
//               // Login and SignUp links
//               <div className="flex items-center space-x-4">
//                 <Link legacyBehavior href="/login">
//                   <a className="text-sm font-medium text-gray-500 hover:text-gray-700">
//                     Log In
//                   </a>
//                 </Link>
//                 <Link legacyBehavior href="/register">
//                   <a className="text-sm font-medium text-gray-500 hover:text-gray-700">
//                     Sign Up
//                   </a>
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="lg:hidden">
//         <div className="space-y-1 pb-3 pt-2">
//           {/* Menu links for mobile */}
//           <DisclosureButton
//             as="a"
//             href="#"
//             className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
//           >
//             Home
//           </DisclosureButton>
//           <DisclosureButton
//             as="a"
//             href="#home-tours"
//             className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
//           >
//             Tours
//           </DisclosureButton>
//           <DisclosureButton
//             as="a"
//             href="#"
//             className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
//           >
//             Transportation
//           </DisclosureButton>
//           <DisclosureButton
//             as="a"
//             href="#"
//             className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
//           >
//             Accumodation
//           </DisclosureButton>
//         </div>
//         <div className="border-t border-gray-200 pb-3 pt-4">
//           <div className="flex items-center px-4">
//             <div className="flex-shrink-0">
//               <img
//                 alt=""
//                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                 className="h-10 w-10 rounded-full"
//               />
//             </div>
//             <div className="ml-3">
//               <div className="text-base font-medium text-gray-800">
//                 Tom Cook
//               </div>
//               <div className="text-sm font-medium text-gray-500">
//                 tom@example.com
//               </div>
//             </div>
//             <button
//               type="button"
//               className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//             >
//               <span className="absolute -inset-1.5" />
//               <span className="sr-only">View notifications</span>
//               <BellIcon aria-hidden="true" className="h-6 w-6" />
//             </button>
//           </div>
//           <div className="mt-3 space-y-1">
//             <DisclosureButton
//               as="a"
//               href="#"
//               className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
//             >
//               Your Profile
//             </DisclosureButton>
//             <DisclosureButton
//               as="a"
//               href="#"
//               className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
//             >
//               Settings
//             </DisclosureButton>
//             <DisclosureButton
//               as="a"
//               href="#"
//               className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
//             >
//               Sign out
//             </DisclosureButton>
//           </div>
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   );
// }

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
  const router = useRouter();

  useEffect(() => {
    // Fetch user data if token exists
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
          const response = await axios.get(
            `${backendUrl}/api/auth/profile`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.data.isSuccess) {
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
              className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
            >
              Home
            </Link>
            <Link
              href="#home-tours"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
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
              href="/contact-us"
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
                      src={userDetails?.profilePhoto || "/user.png"}
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
                    <button className="block px-4 py-2 text-sm text-gray-700"
                    onClick={()=>{
                      logout();
                      router.push("/")
                    }}>
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
