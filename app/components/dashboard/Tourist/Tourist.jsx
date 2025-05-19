// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// export default function UserDashboardBookingDetail() {
//   const router = useRouter();
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/User/user-bookings`,
//         { withCredentials: true }
//       );
//       if (response.data.isSuccess) {
//         setBookings(response.data.data);
//       } else {
//         setError(response.data.message || "Failed to fetch bookings.");
//       }
//     } catch (error) {
//       console.error("Error fetching bookings:", error);
//       setError("An error occurred while fetching your bookings.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatDate = (dateStr) => {
//     if (!dateStr) return "—";
//     return new Date(dateStr).toLocaleDateString();
//   };

//   const handleBookingClick = (bookingId) => {
//     // router.push(`/booking/details?bookingId=${bookingId}`);
//   };

//   if (loading) {
//     return (
//       <div className="text-center py-20">
//         <p className="text-lg text-gray-600 animate-pulse">Loading your bookings...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center py-20">
//         <p className="text-red-600 text-lg font-medium">{error}</p>
//       </div>
//     );
//   }

//   if (bookings.length === 0) {
//     return (
//       <div className="text-center py-20">
//         <p className="text-lg">No bookings found. Please make a booking to view here.</p>
//       </div>
//     );
//   }

//   return (
//     <section className="bg-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-8">
//         <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Your Bookings</h1>

//         <div className="space-y-6 h-[1200px] overflow-y-auto px-2">
//           {bookings.map((booking) => (
//             <div
//               key={booking.bookingId}
//               onClick={() => handleBookingClick(booking.bookingId)}
//               className="border border-gray-200 p-6 rounded-xl shadow-sm bg-white hover:shadow-md hover:bg-gray-50 transition cursor-pointer"
//             >
//               <div className="flex justify-between flex-col sm:flex-row gap-4 sm:items-center mb-3">
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800">
//                     {booking.serviceName}
//                   </h3>
//                   <p className="text-sm text-gray-500">
//                     Booking ID: <span className="font-medium">{booking.bookingId}</span>
//                   </p>
//                   <p className="text-sm text-gray-500">Booked On: {formatDate(booking.bookingDate)}</p>
//                 </div>
//                 <div className="flex gap-2">
//                   <span
//                     className={`text-xs px-3 py-1 rounded-full font-medium ${
//                       booking.status === "Paid"
//                         ? "bg-green-100 text-green-700"
//                         : "bg-yellow-100 text-yellow-700"
//                     }`}
//                   >
//                     {booking.status}
//                   </span>
//                   <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
//                     {booking.bookingType}
//                   </span>
//                 </div>
//               </div>

//               <div className="text-sm text-gray-700 space-y-1 mb-4">
//                 {booking.bookingType === "Transport" && (
//                   <>
//                     <p>
//                       <span className="font-medium">Location:</span>{" "}
//                       {booking.location || "—"}
//                     </p>
//                     <p>
//                       <span className="font-medium">People:</span>{" "}
//                       {booking.numberOfPeople || "—"}
//                     </p>
//                   </>
//                 )}

//                 {["Hotel", "LocalHome", "TourGuide"].includes(booking.bookingType) && (
//                   <>
//                     <p>
//                       <span className="font-medium">Start Date:</span>{" "}
//                       {formatDate(booking.startDate)}
//                     </p>
//                     <p>
//                       <span className="font-medium">End Date:</span>{" "}
//                       {formatDate(booking.endDate)}
//                     </p>
//                   </>
//                 )}
//               </div>

//               <div className="flex justify-end">
//                 <p className="text-lg font-semibold text-blue-700">
//                   PKR {booking.amountPaid.toLocaleString()}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  BusFront,
  BedDouble,
  UserCheck,
  Home,
  CalendarDays,
  MapPin,
  Users,
  BadgeCheck,
} from "lucide-react";

const iconMap = {
  Transport: <BusFront className="text-blue-500" />,
  Hotel: <BedDouble className="text-purple-500" />,
  TourGuide: <UserCheck className="text-green-500" />,
  LocalHome: <Home className="text-orange-500" />,
};

export default function UserDashboardBookingDetail() {
  const router = useRouter();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/User/user-bookings`,
        { withCredentials: true }
      );

      if (response.data.isSuccess) {
        setBookings(response.data.data);
      } else {
        setError(response.data.message || "Failed to fetch bookings.");
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setError("An error occurred while fetching your bookings.");
    } finally {
      setLoading(false);
    }
  };

  const handleBookingClick = (bookingId) => {
    // Navigate or show details
  };

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-gray-600 animate-pulse">Loading your bookings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-600 text-lg font-medium">{error}</p>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-lg">No bookings found. Please make a booking to view here.</p>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          Your Bookings
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {bookings.map((booking) => (
            <div
              key={booking.bookingId}
              onClick={() => handleBookingClick(booking.bookingId)}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    {iconMap[booking.bookingType]}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {booking.serviceName}
                  </h3>
                </div>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                  {booking.bookingType}
                </span>
              </div>

              <div className="space-y-1 text-sm text-gray-700">
                <p className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  Booking Date:{" "}
                  {new Date(booking.bookingDate).toLocaleDateString()}
                </p>

                {booking.startDate && booking.endDate && (
                  <p className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    {`From ${booking.startDate} to ${booking.endDate}`}
                  </p>
                )}

                {booking.location && (
                  <p className="flex items-center gap-2">
                    <MapPin size={16} />
                    Route: {booking.location}
                  </p>
                )}

                {booking.numberOfPeople && (
                  <p className="flex items-center gap-2">
                    <Users size={16} />
                    People: {booking.numberOfPeople}
                  </p>
                )}

                <p className="flex items-center gap-2">
                  <BadgeCheck size={16} />
                  Status:{" "}
                  <span className="font-medium text-green-600">
                    {booking.status}
                  </span>
                </p>
              </div>

              <div className="mt-4 text-right">
                <span className="text-xl font-bold text-blue-700">
                  PKR {booking.amountPaid.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import {
//   BusFront,
//   BedDouble,
//   UserCheck,
//   Home,
//   CalendarDays,
//   MapPin,
//   Users,
//   BadgeCheck,
// } from "lucide-react";

// const iconMap = {
//   Transport: <BusFront className="text-blue-500" size={24} />,
//   Hotel: <BedDouble className="text-purple-500" size={24} />,
//   TourGuide: <UserCheck className="text-green-500" size={24} />,
//   LocalHome: <Home className="text-orange-500" size={24} />,
// };

// const typeColors = {
//   Transport: "from-blue-400 to-blue-600",
//   Hotel: "from-purple-400 to-purple-600",
//   TourGuide: "from-green-400 to-green-600",
//   LocalHome: "from-orange-400 to-orange-600",
// };

// export default function UserDashboardBookingDetail() {
//   const router = useRouter();
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/User/user-bookings`,
//         { withCredentials: true }
//       );

//       if (response.data.isSuccess) {
//         setBookings(response.data.data);
//       } else {
//         setError(response.data.message || "Failed to fetch bookings.");
//       }
//     } catch (error) {
//       console.error("Error fetching bookings:", error);
//       setError("An error occurred while fetching your bookings.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status?.toLowerCase()) {
//       case "confirmed":
//         return "bg-green-100 text-green-700";
//       case "pending":
//         return "bg-yellow-100 text-yellow-700";
//       case "cancelled":
//         return "bg-red-100 text-red-700";
//       default:
//         return "bg-gray-100 text-gray-700";
//     }
//   };

//   if (loading) {
//     return (
//       <div className="text-center py-20">
//         <p className="text-lg text-gray-600 animate-pulse">Loading your bookings...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center py-20">
//         <p className="text-red-600 text-lg font-medium">{error}</p>
//       </div>
//     );
//   }

//   if (bookings.length === 0) {
//     return (
//       <div className="text-center py-20">
//         <p className="text-lg">No bookings found. Please make a booking to view here.</p>
//       </div>
//     );
//   }

//   return (
//     <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
//           Your Bookings
//         </h1>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {bookings.map((booking) => (
//             <div
//               key={booking.bookingId}
//               className="relative backdrop-blur-md bg-white/60 border border-gray-200 rounded-3xl p-6 shadow-xl transition-transform hover:scale-[1.02] hover:shadow-2xl"
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <div
//                   className={`p-3 rounded-full bg-gradient-to-tr ${
//                     typeColors[booking.bookingType] || "from-gray-400 to-gray-600"
//                   } shadow-md text-white`}
//                 >
//                   {iconMap[booking.bookingType]}
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold text-gray-800">
//                     {booking.serviceName}
//                   </h3>
//                   <span
//                     className={`inline-block mt-1 px-3 py-0.5 text-xs font-medium text-white rounded-full bg-gradient-to-r ${
//                       typeColors[booking.bookingType]
//                     }`}
//                   >
//                     {booking.bookingType}
//                   </span>
//                 </div>
//               </div>

//               <div className="space-y-2 text-sm text-gray-700">
//                 <p className="flex items-center gap-2">
//                   <CalendarDays size={16} />
//                   <span>Booking Date: {new Date(booking.bookingDate).toLocaleDateString()}</span>
//                 </p>

//                 {booking.startDate && booking.endDate && (
//                   <p className="flex items-center gap-2">
//                     <CalendarDays size={16} />
//                     <span>{booking.startDate} → {booking.endDate}</span>
//                   </p>
//                 )}

//                 {booking.location && (
//                   <p className="flex items-center gap-2">
//                     <MapPin size={16} />
//                     <span>Route: {booking.location}</span>
//                   </p>
//                 )}

//                 {booking.numberOfPeople && (
//                   <p className="flex items-center gap-2">
//                     <Users size={16} />
//                     <span>People: {booking.numberOfPeople}</span>
//                   </p>
//                 )}

//                 <p className="flex items-center gap-2">
//                   <BadgeCheck size={16} />
//                   <span className={`${getStatusColor(booking.status)} px-2 py-0.5 rounded-full text-xs font-medium`}>
//                     {booking.status}
//                   </span>
//                 </p>
//               </div>

//               <div className="mt-6 text-right">
//                 <span className="text-2xl font-bold text-blue-700">
//                   PKR {booking.amountPaid.toLocaleString()}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import {
//   BusFront,
//   BedDouble,
//   UserCheck,
//   Home,
//   CalendarDays,
//   MapPin,
//   Users,
//   BadgeCheck,
// } from "lucide-react";

// const iconMap = {
//   Transport: <BusFront className="text-blue-600" size={26} />,
//   Hotel: <BedDouble className="text-purple-600" size={26} />,
//   TourGuide: <UserCheck className="text-green-600" size={26} />,
//   LocalHome: <Home className="text-orange-600" size={26} />,
// };

// const typeColors = {
//   Transport: "from-blue-500 to-blue-700",
//   Hotel: "from-purple-500 to-purple-700",
//   TourGuide: "from-green-500 to-green-700",
//   LocalHome: "from-orange-500 to-orange-700",
// };

// export default function UserDashboardBookingDetail() {
//   const router = useRouter();
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/User/user-bookings`,
//         { withCredentials: true }
//       );

//       if (response.data.isSuccess) {
//         setBookings(response.data.data);
//       } else {
//         setError(response.data.message || "Failed to fetch bookings.");
//       }
//     } catch (error) {
//       console.error("Error fetching bookings:", error);
//       setError("An error occurred while fetching your bookings.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status?.toLowerCase()) {
//       case "confirmed":
//         return "bg-green-100 text-green-700";
//       case "pending":
//         return "bg-yellow-100 text-yellow-700";
//       case "cancelled":
//         return "bg-red-100 text-red-700";
//       default:
//         return "bg-gray-100 text-gray-700";
//     }
//   };

//   if (loading) {
//     return (
//       <div className="text-center py-24">
//         <p className="text-xl text-gray-600 animate-pulse">Loading your bookings...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center py-24">
//         <p className="text-red-600 text-xl font-semibold">{error}</p>
//       </div>
//     );
//   }

//   if (bookings.length === 0) {
//     return (
//       <div className="text-center py-24">
//         <p className="text-xl text-gray-700">No bookings found. Please make a booking to view here.</p>
//       </div>
//     );
//   }

//   return (
//     <section className="min-h-screen py-16 px-6 bg-gradient-to-br from-white to-blue-50">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-5xl font-bold text-center text-gray-800 mb-14">
//           Your Bookings
//         </h1>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {bookings.map((booking) => (
//             <div
//               key={booking.bookingId}
//               className="relative backdrop-blur-md bg-white/70 border border-gray-200 rounded-3xl p-6 shadow-lg transition-all hover:scale-[1.015] hover:shadow-2xl"
//             >
//               {/* Header */}
//               <div className="flex items-center gap-4 mb-5">
//                 <div
//                   className={`p-4 rounded-full bg-gradient-to-tr ${
//                     typeColors[booking.bookingType] || "from-gray-400 to-gray-600"
//                   } text-white shadow-md`}
//                 >
//                   {iconMap[booking.bookingType]}
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-2xl font-semibold text-gray-900">
//                     {booking.serviceName}
//                   </h3>
//                   <span
//                     className={`inline-block mt-1 px-3 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r ${
//                       typeColors[booking.bookingType]
//                     }`}
//                   >
//                     {booking.bookingType}
//                   </span>
//                 </div>
//               </div>

//               {/* Booking Details */}
//               <div className="space-y-3 text-[16px] text-gray-800 leading-relaxed">
//                 <p className="flex items-center gap-2">
//                   <CalendarDays size={18} />
//                   <strong>Booking Date:</strong> {new Date(booking.bookingDate).toLocaleDateString()}
//                 </p>

//                 {booking.startDate && booking.endDate && (
//                   <p className="flex items-center gap-2">
//                     <CalendarDays size={18} />
//                     <strong>Trip:</strong> {booking.startDate} → {booking.endDate}
//                   </p>
//                 )}

//                 {booking.location && (
//                   <p className="flex items-center gap-2">
//                     <MapPin size={18} />
//                     <strong>Route:</strong> {booking.location}
//                   </p>
//                 )}

//                 {booking.numberOfPeople && (
//                   <p className="flex items-center gap-2">
//                     <Users size={18} />
//                     <strong>People:</strong> {booking.numberOfPeople}
//                   </p>
//                 )}

//                 <p className="flex items-center gap-2">
//                   <BadgeCheck size={18} />
//                   <strong>Status:</strong>
//                   <span className={`ml-1 px-2 py-0.5 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
//                     {booking.status}
//                   </span>
//                 </p>
//               </div>

//               {/* Price */}
//               <div className="mt-6 text-right">
//                 <span className="text-3xl font-bold text-blue-700 tracking-tight">
//                   PKR {booking.amountPaid.toLocaleString()}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



