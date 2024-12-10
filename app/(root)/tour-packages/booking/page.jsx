// "use client";
// const packages = [
//   {
//     id: 1,
//     thumbnail: "/images/hero-3.jpg",
//     title: "Naran Kaghan",
//     durationDays: 5, // Duration in integer
//     price: "PKR 35,000",
//     description:
//       "Discover the serene beauty of Naran and Kaghan with guided tours and cozy stays.",
//     tag: "Most Popular",
//     tourDate: "2024-12-15",
//     availableSpots: 20,
//   },
//   {
//     id: 2,
//     thumbnail: "/images/hero-1.jpg",
//     title: "Hunza Valley",
//     durationDays: 7, // Duration in integer
//     price: "PKR 50,000",
//     description: "Immerse yourself in the breathtaking landscapes of Hunza.",
//     tag: "Hot Deal",
//     tourDate: "2024-12-20",
//     availableSpots: 15,
//   },
//   {
//     id: 3,
//     thumbnail: "/images/hero-3.jpg",
//     title: "Swat",
//     durationDays: 4, // Duration in integer
//     price: "PKR 28,000",
//     description: "Explore the Switzerland of the East with luxurious stays.",
//     tag: "Limited Time Offer",
//     tourDate: "2024-12-25",
//     availableSpots: 10,
//   },
//   {
//     id: 4,
//     thumbnail: "/images/hero-3.jpg",
//     title: "Skardu Adventure",
//     durationDays: 6, // Duration in integer
//     price: "PKR 60,000",
//     description:
//       "Experience the majestic Skardu with adventure-filled activities.",
//     tag: "Best Seller",
//     tourDate: "2024-12-30",
//     availableSpots: 8,
//   },
//   {
//     id: 5,
//     thumbnail: "/images/hero-3.jpg",
//     title: "Karachi City Tour",
//     durationDays: 3, // Duration in integer
//     price: "PKR 20,000",
//     description: "A vibrant city tour of the metropolitan hub of Pakistan.",
//     tag: "Recommended",
//     tourDate: "2024-12-10",
//     availableSpots: 25,
//   },
// ];
// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function BookingPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const id = searchParams.get("id"); // Get package ID from URL search params

//   // Fetch package details using ID
//   const [packageDetails, setPackageDetails] = useState(packages);

//   // useEffect(() => {
//   //   if (id) {
//   //     // Fetch package details from API or static data
//   //     fetch(`/api/packages/${id}`)
//   //       .then((res) => res.json())
//   //       .then((data) => setPackageDetails(data));
//   //   }
//   // }, [id]);
//   // setPackageDetails(packages);

//   const handleBookingSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const bookingDetails = Object.fromEntries(formData.entries());

//     // Send booking data to API
//     fetch("/api/bookings", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ ...bookingDetails, packageId: id }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         alert("Booking successful!");
//         router.push("/thank-you");
//       })
//       .catch((err) => {
//         console.error(err);
//         alert("Booking failed!");
//       });
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-10">
//       <h2 className="text-3xl font-bold">{packageDetails.title}</h2>
//       <p>{packageDetails.description}</p>
//       <p>
//         <strong>Price:</strong> {packageDetails.price}
//       </p>
//       <p>
//         <strong>Tour Date:</strong> {packageDetails.tourDate}
//       </p>
//       <form onSubmit={handleBookingSubmit} className="mt-6">
//         <div className="mb-4">
//           <label className="block text-gray-700">Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             required
//             className="w-full border px-4 py-2 rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Email</label>
//           <input
//             type="email"
//             name="email"
//             required
//             className="w-full border px-4 py-2 rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Phone Number</label>
//           <input
//             type="tel"
//             name="phone"
//             required
//             className="w-full border px-4 py-2 rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Number of People</label>
//           <input
//             type="number"
//             name="people"
//             required
//             min="1"
//             max={packageDetails.availableSpots}
//             className="w-full border px-4 py-2 rounded"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Confirm Booking
//         </button>
//       </form>
//     </div>
//   );
// }

// "use client";

// import { useRouter } from "next/navigation";
// import { useSearchParams } from "next/navigation";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function PackageDetail() {
//   const searchParams = useSearchParams();
//   const packageId = searchParams.get("id");
//   const router = useRouter();
//   const [packageDetails, setPackageDetails] = useState(null);

//   useEffect(() => {
//     if (packageId) {
//       // Fetch package details (Replace with your API or data source)
//       const fetchPackageDetails = async () => {
//         const response = await fetch(`/api/packages/${packageId}`);
//         const data = await response.json();
//         setPackageDetails(data);
//       };

//       fetchPackageDetails();
//     }
//   }, [packageId]);

//   if (!packageDetails) {
//     return <p className="text-center py-20 text-gray-500">Loading...</p>;
//   }

//   const handleProceedToBooking = () => {
//     router.push(`/tour-packages/booking?id=${packageId}`);
//   };

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Package Image */}
//           <div>
//             <Image
//               src={packageDetails.thumbnail}
//               alt={packageDetails.title}
//               width={800}
//               height={500}
//               className="rounded-lg shadow-lg"
//             />
//           </div>

//           {/* Package Details */}
//           <div>
//             <h1 className="text-4xl font-bold text-gray-800">
//               {packageDetails.title}
//             </h1>
//             <p className="text-gray-600 text-lg mt-4">
//               {packageDetails.description}
//             </p>

//             <div className="mt-6">
//               <p className="text-lg">
//                 <strong>Tour Date:</strong> {packageDetails.tourDate}
//               </p>
//               <p className="text-lg">
//                 <strong>Available Spots:</strong>{" "}
//                 {packageDetails.availableSpots}
//               </p>
//               <p className="text-lg">
//                 <strong>Duration:</strong> {packageDetails.durationDays} Days /{" "}
//                 {packageDetails.durationDays - 1} Nights
//               </p>
//               <p className="text-2xl font-bold text-green-600 mt-4">
//                 {packageDetails.price}
//               </p>
//             </div>

//             <button
//               onClick={handleProceedToBooking}
//               className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
//             >
//               Proceed to Booking
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Additional Section: Why Choose This Package */}
//       <div className="mt-16 bg-white py-12 px-6 rounded-lg shadow-md">
//         <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
//           Why Choose This Package?
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="text-center">
//             <div className="text-blue-600 text-4xl mb-4">🌄</div>
//             <h3 className="text-xl font-bold text-gray-800 mb-2">
//               Stunning Scenery
//             </h3>
//             <p className="text-gray-600">
//               Explore breathtaking landscapes and serene environments.
//             </p>
//           </div>
//           <div className="text-center">
//             <div className="text-blue-600 text-4xl mb-4">🏨</div>
//             <h3 className="text-xl font-bold text-gray-800 mb-2">Cozy Stays</h3>
//             <p className="text-gray-600">
//               Stay in well-rated accommodations to enhance your travel
//               experience.
//             </p>
//           </div>
//           <div className="text-center">
//             <div className="text-blue-600 text-4xl mb-4">👨‍🏫</div>
//             <h3 className="text-xl font-bold text-gray-800 mb-2">
//               Guided Tours
//             </h3>
//             <p className="text-gray-600">
//               Enjoy expert-guided tours to learn more about the destination.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useRouter } from "next/navigation";
// import { useSearchParams } from "next/navigation";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function PackageDetail() {
//   const searchParams = useSearchParams();
//   const packageId = searchParams.get("id");
//   const router = useRouter();
//   const [packageDetails, setPackageDetails] = useState(packages[0]);

//   // useEffect(() => {
//   //   if (packageId) {
//   //     // Fetch package details (Replace with your API or data source)
//   //     const fetchPackageDetails = async () => {
//   //       const response = await fetch(`/api/packages/${packageId}`);
//   //       const data = await response.json();
//   //       setPackageDetails(data);
//   //     };

//   //     fetchPackageDetails();
//   //   }
//   // }, [packageId]);

//   if (!packageDetails) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-center text-xl text-gray-500">Loading...</p>
//       </div>
//     );
//   }

//   const handleProceedToBooking = () => {
//     router.push(`/tour-packages/booking?id=${packageId}`);
//   };

//   return (
//     <section className="bg-gray-50">
//       {/* Hero Section */}
//       <div className="relative">
//         <Image
//           src={packageDetails.thumbnail}
//           alt={packageDetails.title}
//           width={1920}
//           height={600}
//           className="w-full h-96 object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <h1 className="text-4xl md:text-6xl font-bold text-white">
//             {packageDetails.title}
//           </h1>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Left Section */}
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800">
//               Package Overview
//             </h2>
//             <p className="text-gray-600 mt-4">{packageDetails.description}</p>

//             <div className="mt-8 space-y-4">
//               <p className="text-lg">
//                 <strong>Tour Date:</strong> {packageDetails.tourDate}
//               </p>
//               <p className="text-lg">
//                 <strong>Available Spots:</strong>{" "}
//                 {packageDetails.availableSpots}
//               </p>
//               <p className="text-lg">
//                 <strong>Duration:</strong> {packageDetails.durationDays} Days /{" "}
//                 {packageDetails.durationDays - 1} Nights
//               </p>
//               <p className="text-2xl font-bold text-green-600 mt-4">
//                 {packageDetails.price}
//               </p>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-semibold text-gray-800">
//               Why Choose This Package?
//             </h3>
//             <ul className="mt-6 space-y-4">
//               <li className="flex items-center space-x-4">
//                 <span className="text-blue-600 text-3xl">🌄</span>
//                 <span className="text-lg text-gray-600">
//                   Stunning landscapes and breathtaking scenery.
//                 </span>
//               </li>
//               <li className="flex items-center space-x-4">
//                 <span className="text-blue-600 text-3xl">🏨</span>
//                 <span className="text-lg text-gray-600">
//                   Comfortable accommodations with all amenities.
//                 </span>
//               </li>
//               <li className="flex items-center space-x-4">
//                 <span className="text-blue-600 text-3xl">👨‍🏫</span>
//                 <span className="text-lg text-gray-600">
//                   Expert guides to enhance your travel experience.
//                 </span>
//               </li>
//             </ul>
//             <button
//               onClick={handleProceedToBooking}
//               className="mt-8 w-full px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
//             >
//               Proceed to Booking
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
const packages = [
  {
    id: 1,
    thumbnail: "/images/hero-3.jpg",
    title: "Naran Kaghan",
    durationDays: 5, // Duration in integer
    price: "PKR 35,000",
    description:
      "Discover the serene beauty of Naran and Kaghan with guided tours and cozy stays.",
    tag: "Most Popular",
    tourDate: "2024-12-15",
    availableSpots: 20,
  },
  {
    id: 2,
    thumbnail: "/images/hero-1.jpg",
    title: "Hunza Valley",
    durationDays: 7, // Duration in integer
    price: "PKR 50,000",
    description: "Immerse yourself in the breathtaking landscapes of Hunza.",
    tag: "Hot Deal",
    tourDate: "2024-12-20",
    availableSpots: 15,
  },
  {
    id: 3,
    thumbnail: "/images/hero-3.jpg",
    title: "Swat",
    durationDays: 4, // Duration in integer
    price: "PKR 28,000",
    description: "Explore the Switzerland of the East with luxurious stays.",
    tag: "Limited Time Offer",
    tourDate: "2024-12-25",
    availableSpots: 10,
  },
  {
    id: 4,
    thumbnail: "/images/hero-3.jpg",
    title: "Skardu Adventure",
    durationDays: 6, // Duration in integer
    price: "PKR 60,000",
    description:
      "Experience the majestic Skardu with adventure-filled activities.",
    tag: "Best Seller",
    tourDate: "2024-12-30",
    availableSpots: 8,
  },
  {
    id: 5,
    thumbnail: "/images/hero-3.jpg",
    title: "Karachi City Tour",
    durationDays: 3, // Duration in integer
    price: "PKR 20,000",
    description: "A vibrant city tour of the metropolitan hub of Pakistan.",
    tag: "Recommended",
    tourDate: "2024-12-10",
    availableSpots: 25,
  },
];
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from "react-icons/fa";

export default function PackageDetail() {
  const searchParams = useSearchParams();
  const packageId = searchParams.get("id");
  const router = useRouter();
  const [packageDetails, setPackageDetails] = useState(packages[0]);
  // console.log("------------------->" + packageDetails);
  // useEffect(() => {
  //   if (packageId) {
  //     // Fetch package details (Replace with your API or data source)
  //     const fetchPackageDetails = async () => {
  //       const response = await fetch(`/api/packages/${packageId}`);
  //       const data = await response.json();
  //       setPackageDetails(data);
  //     };

  //     fetchPackageDetails();
  //   }
  // }, [packageId]);

  if (!packageDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-xl text-gray-500">Loading...</p>
      </div>
    );
  }

  const handleProceedToBooking = () => {
    router.push(`/tour-packages/booking/confirm-booking?id=1`);
    // router.push(`/tour-packages/booking?id=${packageId}`);
  };

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <Image
          src={packageDetails.thumbnail}
          alt={packageDetails.title}
          width={1920}
          height={600}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            {packageDetails.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* Package Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              Package Overview
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              {packageDetails.description}
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center space-x-4">
                <FaCalendarAlt className="text-blue-600 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Tour Date:</strong> {packageDetails.tourDate}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaUsers className="text-green-600 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Available Spots:</strong>{" "}
                  {packageDetails.availableSpots}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-red-600 text-xl" />
                <p className="text-lg text-gray-600">
                  <strong>Duration:</strong> {packageDetails.durationDays} Days
                  / {packageDetails.durationDays - 1} Nights
                </p>
              </div>
              <p className="text-3xl font-bold text-green-700 mt-6">
                {packageDetails.price}
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative bg-white p-10 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800">
              Why Choose This Package?
            </h3>
            <ul className="mt-6 space-y-6">
              <li className="flex items-start space-x-4">
                <span className="text-blue-600 text-3xl">🌄</span>
                <span className="text-lg text-gray-600">
                  Stunning landscapes and breathtaking scenery.
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-blue-600 text-3xl">🏨</span>
                <span className="text-lg text-gray-600">
                  Comfortable accommodations with premium amenities.
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-blue-600 text-3xl">👨‍🏫</span>
                <span className="text-lg text-gray-600">
                  Expert guides to ensure an enriching travel experience.
                </span>
              </li>
            </ul>
            <button
              onClick={handleProceedToBooking}
              className="mt-10 w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Proceed to Booking
            </button>
            {/* <div className="absolute top-[-1.5rem] right-[-1.5rem] w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 text-white font-semibold rounded-full flex items-center justify-center shadow-md">
              {packageDetails.tag || "Special"}
            </div> */}
            <div className="absolute top-[-1.5rem] right-[-1.5rem] w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 text-white font-semibold rounded-full flex items-center justify-center shadow-md text-center">
              {packageDetails.tag || "Special"}
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="bg-white py-12 px-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            More Reasons to Join Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-blue-600 text-5xl mb-4">🚍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Comfortable Transport
              </h3>
              <p className="text-gray-600">
                Travel in style with luxury transportation for your journey.
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-5xl mb-4">🍴</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Delicious Meals
              </h3>
              <p className="text-gray-600">
                Savor local cuisines and enjoy meals prepared by top chefs.
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Safety First
              </h3>
              <p className="text-gray-600">
                Your safety is our priority with 24/7 assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
