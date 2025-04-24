// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import HotelCard from "../../../components/hotels/HotelCard";

// function Hotels() {
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const router = useRouter();
//   const authToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${authToken}`,
//           },
//         });

//         const data = await response.json();
      
//         console.log("Response data:", data); // Log the response data
//         if (data.isSuccess) {
//           setHotels(data.data);
//         } else {
//           setError(data.message || "Failed to fetch hotels");
//         }
//       } catch (err) {
//         setError("Something went wrong while fetching hotel data.");
//         console.error("Error fetching hotels:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (authToken) {
//       fetchHotels();
//     }
//   }, [authToken]);

//   // if (!authToken) {
//   //   router.push("/login");
//   //   return null;
//   // }

//   return (
//     <div className="min-h-screen mx-auto px-4 py-8 bg-gray-50">
//       <div className="flex flex-col gap-6 text-center mb-8 min-h-96 bg-blue-500 pt-20">
//         <div>
//           <span className="bg-yellow-400 px-6 py-1 rounded-lg font-bold">Hotels</span>
//         </div>
//         <h1 className="text-4xl text-white font-bold">Explore Available Hotels</h1>
//         <p className="text-white text-2xl">Find a perfect stay for your journey</p>
//         <div className="flex justify-center">
//           <input
//             type="text"
//             className="h-12 px-6 py-3 rounded-full shadow-lg w-full max-w-md"
//             placeholder="Search for hotels..."
//           />
//         </div>
//       </div>

//       {loading ? (
//         <p className="text-center">Loading...</p>
//       ) : error ? (
//         <p className="text-center text-red-500">{error}</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-6 max-w-7xl mx-auto py-16 md:pb-36 ">
//           {hotels.length > 0 ? (
//             hotels.map((hotel) => {
//               const room = hotel.rooms?.[0] || {};
//               return (
//                 <Link href={`/hotels/${hotel.hotelId}`} key={hotel.hotelId}>
//                   <HotelCard
//                     idCard={hotel.hotelId}
//                     name={hotel.hotelName}
//                     description={hotel.hotelDescription}
//                     location={hotel.address}
//                     pricePerNight={room.pricePerNight || 0}
//                     rating={hotel.rating}
//                     imageUrl={hotel.imageUrl || "/hotel.jpg"}
//                     capacity={room.capacity || 1}
//                   />
//                 </Link>
//               );
//             })
//           ) : (
//             <p className="text-center col-span-3">No hotels available</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Hotels;

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HotelCard from "../../../components/hotels/HotelCard";

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const authToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${authToken}`,
          },
        });

        const data = await response.json();
        console.log("Response data:", data);

        if (data.isSuccess) {
          setHotels(data.data);
        } else {
          setError(data.message || "Failed to fetch hotels");
        }
      } catch (err) {
        console.error("Error fetching hotels:", err);
        setError("Something went wrong while fetching hotel data.");
      } finally {
        setLoading(false);
      }
    };

      fetchHotels();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Explore Available Hotels</h1>
        <p className="text-xl mb-6">Find a perfect stay for your journey</p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search for hotels..."
            className="w-full max-w-md px-5 py-3 rounded-full shadow-md text-gray-700 focus:outline-none"
          />
        </div>
      </section>

      {/* Hotel Listings */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {loading ? (
          <p className="text-center text-lg">Loading hotels...</p>
        ) : error ? (
          <p className="text-center text-red-500 text-lg">{error}</p>
        ) : hotels.length > 0 ? (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {hotels.map((hotel) => {
              const room = hotel.rooms?.[0] || {};
              return (
                <Link href={`/hotels/${hotel.hotelId}`} key={hotel.hotelId}>
                  <HotelCard
                    idCard={hotel.hotelId}
                    name={hotel.hotelName}
                    description={hotel.hotelDescription}
                    location={hotel.address}
                    pricePerNight={room.pricePerNight || 0}
                    rating={hotel.rating}
                    imageUrl={`http://localhost:5277${hotel.primaryImage}`}
                    capacity={room.capacity || 1}
                  />
                  
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-600">No hotels available right now.</p>
        )}
      </section>
    </main>
  );
}

export default Hotels;
