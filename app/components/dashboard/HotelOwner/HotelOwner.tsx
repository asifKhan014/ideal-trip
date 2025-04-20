// "use client";
// import React, { useEffect, useState } from "react";
// import AddHotelForm from "./AddHotelForm";
// import RoomManager from "./RoomManager";

// const HotelOwnerDashboard = () => {
//   const [showAddHotelForm, setShowAddHotelForm] = useState(false);
//   const [hotels, setHotels] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [editHotel, setEditHotel] = useState<any | null>(null);

//   const authToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

//   // Fetch hotels on mount
//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel/my-hotels`, {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         });
//         const result = await response.json();
//         console.log("Fetched hotels:", result);
//         if (response.ok) {
//           setHotels(result.data || result);
//         } else {
//           setError("Failed to fetch hotels");
//         }
//       } catch (err) {
//         setError("An error occurred while loading hotels.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHotels();
//   }, [authToken]);

//   const handleDelete = async (hotelId: string) => {
//     if (!confirm("Are you sure you want to delete this hotel?")) return;

//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel/${hotelId}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       });

//       if (response.ok) {
//         setHotels((prev) => prev.filter((hotel) => hotel.hotelId !== hotelId));
//       } else {
//         alert("Failed to delete hotel.");
//       }
//     } catch (err) {
//       alert("An error occurred while deleting the hotel.");
//     }
//   };

//   const handleAddHotel = (newHotel: any) => {
//     setHotels((prev) => [newHotel, ...prev]);
//     setShowAddHotelForm(false);
//   };

//   const handleUpdateHotel = (updatedHotel: any) => {
//     setHotels((prev) =>
//       prev.map((hotel) => (hotel.hotelId === updatedHotel.hotelId ? updatedHotel : hotel))
//     );
//     setEditHotel(null);
//     setShowAddHotelForm(false);
//   };

//   return (
//     <div className="p-8 bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen">
//       <header className="flex justify-between items-center mb-10">
//         <div>
//           <h1 className="text-4xl font-extrabold text-blue-800">Hotel Owner Dashboard</h1>
//           <p className="text-gray-600 mt-2">Manage your hotels and rooms efficiently</p>
//         </div>
//         <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md shadow">
//           Logout
//         </button>
//       </header>

//       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Hotels</h2>
//           <p className="text-3xl font-bold text-blue-700">{hotels.length}</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Rooms</h2>
//           <p className="text-3xl font-bold text-blue-700">--</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-lg font-semibold text-gray-700 mb-2">Available Rooms</h2>
//           <p className="text-3xl font-bold text-green-600">--</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-lg font-semibold text-gray-700 mb-2">Bookings</h2>
//           <p className="text-3xl font-bold text-purple-600">--</p>
//         </div>
//       </section>

//       {/* Hotels Management */}
//       <section className="mb-10">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold text-gray-800">Your Hotels</h2>
//           <button
//             onClick={() => {
//               setShowAddHotelForm((prev) => !prev);
//               setEditHotel(null); // Reset edit mode
//             }}
//             className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow"
//           >
//             {showAddHotelForm ? "Close Form" : "Add New Hotel"}
//           </button>
//         </div>

//         {showAddHotelForm && (
//           <AddHotelForm
//             isEditMode={!!editHotel}
//             initialData={editHotel}
//             onAddHotel={handleAddHotel}
//             onUpdateHotel={handleUpdateHotel}
//           />
//         )}

//         {loading ? (
//           <p className="text-gray-500">Loading hotels...</p>
//         ) : error ? (
//           <p className="text-red-500">{error}</p>
//         ) : (
//           <div className="grid gap-4 mt-6">
//             {hotels.map((hotel,id) => (
//               <div
//                 key={id}
//                 className="bg-white p-5 rounded-lg shadow flex justify-between items-center"
//               >
//                 <div>
//                   <h3 className="text-xl font-semibold text-blue-800">{hotel.hotelName}</h3>
//                   <p className="text-gray-600">{hotel.address}</p>
//                 </div>
//                 <div className="flex space-x-3">
//                   <button
//                     onClick={() => {
//                       setEditHotel(hotel);
//                       setShowAddHotelForm(true);
//                     }}
//                     className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(hotel.hotelId)}
//                     className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Rooms Management - untouched */}
//       <section>
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold text-gray-800">Manage Rooms</h2>
//           <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow">
//             Add New Room
//           </button>
//         </div>
//         <div className="grid gap-4">
//           <div className="bg-white p-5 rounded-lg shadow flex justify-between items-center">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-700">Room 101</h3>
//               <p className="text-gray-600">Double Bed · AC · Wi-Fi</p>
//             </div>
//             <div className="flex space-x-3">
//               <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md">
//                 Edit
//               </button>
//               <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md">
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
     
//     </div>
//   );
// };

// export default HotelOwnerDashboard;



"use client";
import React, { useEffect, useState } from "react";
import AddHotelForm from "./AddHotelForm";
import RoomManager from "./RoomManager"; // Make sure this path is correct

const HotelOwnerDashboard = () => {
  const [showAddHotelForm, setShowAddHotelForm] = useState(false);
  const [hotels, setHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editHotel, setEditHotel] = useState<any | null>(null);
  const [openRoomPanels, setOpenRoomPanels] = useState<{ [key: string]: boolean }>({});

  const authToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel/my-hotels`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        const result = await response.json();
        if (response.ok) {
          setHotels(result.data || result);
        } else {
          setError("Failed to fetch hotels");
        }
      } catch {
        setError("An error occurred while loading hotels.");
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [authToken]);

  const handleDelete = async (hotelId: string) => {
    if (!confirm("Are you sure you want to delete this hotel?")) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel/${hotelId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.ok) {
        setHotels((prev) => prev.filter((hotel) => hotel.hotelId !== hotelId));
      } else {
        alert("Failed to delete hotel.");
      }
    } catch {
      alert("An error occurred while deleting the hotel.");
    }
  };

  const handleAddHotel = (newHotel: any) => {
    setHotels((prev) => [newHotel, ...prev]);
    setShowAddHotelForm(false);
  };

  const handleUpdateHotel = (updatedHotel: any) => {
    setHotels((prev) =>
      prev.map((hotel) =>
        hotel.hotelId === updatedHotel.hotelId ? updatedHotel : hotel
      )
    );
    setEditHotel(null);
    setShowAddHotelForm(false);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen">
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-extrabold text-blue-800">
            Hotel Owner Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your hotels and rooms efficiently
          </p>
        </div>
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md shadow">
          Logout
        </button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Total Hotels
          </h2>
          <p className="text-3xl font-bold text-blue-700">{hotels.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Total Rooms
          </h2>
          <p className="text-3xl font-bold text-blue-700">--</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Available Rooms
          </h2>
          <p className="text-3xl font-bold text-green-600">--</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Bookings</h2>
          <p className="text-3xl font-bold text-purple-600">--</p>
        </div>
      </section>

      {/* Add / Edit Hotel Form */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Your Hotels</h2>
          <button
            onClick={() => {
              setShowAddHotelForm((prev) => !prev);
              setEditHotel(null);
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow"
          >
            {showAddHotelForm ? "Close Form" : "Add New Hotel"}
          </button>
        </div>

        {showAddHotelForm && (
          <AddHotelForm
            isEditMode={!!editHotel}
            initialData={editHotel}
            onAddHotel={handleAddHotel}
            onUpdateHotel={handleUpdateHotel}
          />
        )}

        {loading ? (
          <p className="text-gray-500">Loading hotels...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid gap-4 mt-6">
            {hotels.map((hotel, id) => (
              <div
                key={id}
                className="bg-white p-5 rounded-lg shadow flex flex-col space-y-4"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-gray-600">{hotel.address}</p>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => {
                        setEditHotel(hotel);
                        setShowAddHotelForm(true);
                      }}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(hotel.hotelId)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() =>
                        setOpenRoomPanels((prev) => ({
                          ...prev,
                          [hotel.hotelId]: !prev[hotel.hotelId],
                        }))
                      }
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md"
                    >
                      {openRoomPanels[hotel.hotelId]
                        ? "Hide Rooms"
                        : "Manage Rooms"}
                    </button>
                  </div>
                </div>

                {openRoomPanels[hotel.hotelId] && (
                  <RoomManager hotelId={hotel.hotelId} />
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default HotelOwnerDashboard;
