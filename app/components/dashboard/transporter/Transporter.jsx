// import React, { useState } from "react";

// export default function Transporter() {
//   const [vehicles, setVehicles] = useState([
//     { id: 1, name: "Toyota Hiace", type: "Van", number: "ABC-123" },
//   ]);

//   const addVehicle = () => {
//     const newVehicle = {
//       id: vehicles.length + 1,
//       name: "New Vehicle",
//       type: "SUV",
//       number: "XYZ-789",
//     };
//     setVehicles([...vehicles, newVehicle]);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Transporter Dashboard</h2>
//       <button
//         onClick={addVehicle}
//         className="bg-blue-500 text-white p-2 rounded mb-4"
//       >
//         Add Vehicle
//       </button>
//       <ul>
//         {vehicles.map((vehicle) => (
//           <li key={vehicle.id} className="p-2 border mb-2">
//             {vehicle.name} - {vehicle.type} ({vehicle.number})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// import React, { useState } from "react";

// export default function Transporter() {
//   const [vehicles, setVehicles] = useState([
//     { id: 1, name: "Toyota Hiace", type: "Van", number: "ABC-123" },
//     { id: 2, name: "Honda Civic", type: "Car", number: "XYZ-789" },
//   ]);

//   const [requests, setRequests] = useState([
//     { id: 1, customer: "John Doe", date: "2024-06-01", status: "Pending" },
//     { id: 2, customer: "Jane Smith", date: "2024-06-02", status: "Approved" },
//   ]);

//   const [notifications] = useState([
//     "Your vehicle Toyota Hiace has been approved.",
//     "New transport request from John Doe.",
//   ]);

//   // Add Vehicle Handler
//   const addVehicle = () => {
//     const newVehicle = {
//       id: vehicles.length + 1,
//       name: "Suzuki Mehran",
//       type: "Car",
//       number: `NEW-${Math.floor(Math.random() * 1000)}`,
//     };
//     setVehicles([...vehicles, newVehicle]);
//   };

//   // Delete Vehicle Handler
//   const deleteVehicle = (id) => {
//     setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-3xl font-bold mb-5">Transporter Dashboard</h1>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-3 gap-5 mb-10">
//         <div className="bg-blue-500 text-white p-5 rounded-lg shadow">
//           <h2 className="text-xl font-bold">Total Vehicles</h2>
//           <p className="text-3xl mt-2">{vehicles.length}</p>
//         </div>
//         <div className="bg-green-500 text-white p-5 rounded-lg shadow">
//           <h2 className="text-xl font-bold">Transport Requests</h2>
//           <p className="text-3xl mt-2">{requests.length}</p>
//         </div>
//         <div className="bg-yellow-500 text-white p-5 rounded-lg shadow">
//           <h2 className="text-xl font-bold">Notifications</h2>
//           <p className="text-3xl mt-2">{notifications.length}</p>
//         </div>
//       </div>

//       {/* Profile Overview */}
//       <div className="bg-white p-5 rounded-lg shadow mb-10">
//         <h2 className="text-2xl font-bold mb-3">Profile Overview</h2>
//         <p>
//           <strong>Name:</strong> Ali Khan
//         </p>
//         <p>
//           <strong>Email:</strong> ali.khan@example.com
//         </p>
//         <p>
//           <strong>Phone:</strong> +92 300 1234567
//         </p>
//         <p>
//           <strong>Address:</strong> Islamabad, Pakistan
//         </p>
//       </div>

//       {/* Vehicle Management */}
//       <div className="bg-white p-5 rounded-lg shadow mb-10">
//         <div className="flex justify-between items-center mb-5">
//           <h2 className="text-2xl font-bold">Vehicle Management</h2>
//           <button
//             onClick={addVehicle}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//           >
//             + Add Vehicle
//           </button>
//         </div>
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2">#</th>
//               <th className="p-2">Vehicle Name</th>
//               <th className="p-2">Type</th>
//               <th className="p-2">Number</th>
//               <th className="p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {vehicles.map((vehicle, index) => (
//               <tr key={vehicle.id} className="border-t">
//                 <td className="p-2">{index + 1}</td>
//                 <td className="p-2">{vehicle.name}</td>
//                 <td className="p-2">{vehicle.type}</td>
//                 <td className="p-2">{vehicle.number}</td>
//                 <td className="p-2">
//                   <button
//                     onClick={() => deleteVehicle(vehicle.id)}
//                     className="text-red-500 hover:underline"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Transport Requests */}
//       <div className="bg-white p-5 rounded-lg shadow mb-10">
//         <h2 className="text-2xl font-bold mb-3">Transport Requests</h2>
//         <ul>
//           {requests.map((request) => (
//             <li
//               key={request.id}
//               className="border-b p-3 flex justify-between items-center"
//             >
//               <div>
//                 <p>
//                   <strong>Customer:</strong> {request.customer}
//                 </p>
//                 <p>
//                   <strong>Date:</strong> {request.date}
//                 </p>
//               </div>
//               <span
//                 className={`px-2 py-1 rounded-lg ${
//                   request.status === "Pending"
//                     ? "bg-yellow-400"
//                     : "bg-green-400 text-white"
//                 }`}
//               >
//                 {request.status}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Notifications */}
//       <div className="bg-white p-5 rounded-lg shadow">
//         <h2 className="text-2xl font-bold mb-3">Notifications</h2>
//         <ul className="list-disc pl-5">
//           {notifications.map((note, index) => (
//             <li key={index} className="mb-2">
//               {note}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function TransporterDashboard() {
//   const [profile, setProfile] = useState({});
//   const [vehicles, setVehicles] = useState([]);
//   const [requests, setRequests] = useState([]);
//   const [notifications, setNotifications] = useState([]);

//   // Load all data from backend
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const profileRes = await axios.get("http://localhost:5000/transporter");
//       const vehiclesRes = await axios.get("http://localhost:5000/vehicles");
//       const requestsRes = await axios.get("http://localhost:5000/requests");
//       const notificationsRes = await axios.get(
//         "http://localhost:5000/notifications"
//       );

//       setProfile(profileRes.data);
//       setVehicles(vehiclesRes.data);
//       setRequests(requestsRes.data);
//       setNotifications(notificationsRes.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // Add Vehicle
//   const addVehicle = async () => {
//     const newVehicle = {
//       name: "Suzuki Mehran",
//       type: "Car",
//       number: `NEW-${Math.floor(Math.random() * 1000)}`,
//     };

//     const res = await axios.post("http://localhost:5000/vehicles", newVehicle);
//     setVehicles([...vehicles, res.data]);
//   };

//   // Update Vehicle
//   const updateVehicle = async (id) => {
//     const updatedVehicle = {
//       name: "Updated Vehicle",
//       type: "Bus",
//       number: "UPD-456",
//     };
//     await axios.put(`http://localhost:5000/vehicles/${id}`, updatedVehicle);
//     fetchData();
//   };

//   // Delete Vehicle
//   const deleteVehicle = async (id) => {
//     await axios.delete(`http://localhost:5000/vehicles/${id}`);
//     setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-3xl font-bold mb-5">Transporter Dashboard</h1>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-3 gap-5 mb-10">
//         <StatCard title="Total Vehicles" value={vehicles.length} />
//         <StatCard title="Transport Requests" value={requests.length} />
//         <StatCard title="Notifications" value={notifications.length} />
//       </div>

//       {/* Profile Overview */}
//       <div className="bg-white p-5 rounded-lg shadow mb-10">
//         <h2 className="text-2xl font-bold mb-3">Profile Overview</h2>
//         <p>
//           <strong>Name:</strong> {profile.name}
//         </p>
//         <p>
//           <strong>Email:</strong> {profile.email}
//         </p>
//         <p>
//           <strong>Phone:</strong> {profile.phone}
//         </p>
//         <p>
//           <strong>Address:</strong> {profile.address}
//         </p>
//       </div>

//       {/* Vehicle Management */}
//       <div className="bg-white p-5 rounded-lg shadow mb-10">
//         <div className="flex justify-between items-center mb-5">
//           <h2 className="text-2xl font-bold">Vehicle Management</h2>
//           <button
//             onClick={addVehicle}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//           >
//             + Add Vehicle
//           </button>
//         </div>
//         <ul>
//           {vehicles.map((vehicle) => (
//             <li
//               key={vehicle.id}
//               className="flex justify-between items-center mb-2"
//             >
//               <div>
//                 {vehicle.name} - {vehicle.type} ({vehicle.number})
//               </div>
//               <div>
//                 <button
//                   onClick={() => updateVehicle(vehicle.id)}
//                   className="text-yellow-500 mr-3"
//                 >
//                   Update
//                 </button>
//                 <button
//                   onClick={() => deleteVehicle(vehicle.id)}
//                   className="text-red-500"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Transport Requests */}
//       <div className="bg-white p-5 rounded-lg shadow mb-10">
//         <h2 className="text-2xl font-bold mb-3">Transport Requests</h2>
//         <ul>
//           {requests.map((req) => (
//             <li key={req.id} className="mb-2">
//               {req.customer} - {req.date} ({req.status})
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Notifications */}
//       <div className="bg-white p-5 rounded-lg shadow">
//         <h2 className="text-2xl font-bold mb-3">Notifications</h2>
//         <ul>
//           {notifications.map((note, index) => (
//             <li key={index} className="mb-2">
//               {note}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// const StatCard = ({ title, value }) => (
//   <div className="bg-blue-500 text-white p-5 rounded-lg shadow">
//     <h2 className="text-xl font-bold">{title}</h2>
//     <p className="text-3xl mt-2">{value}</p>
//   </div>
// );

// "use client";
// import React, { useEffect, useState } from "react";
// import ProfileOverview from "./components/ProfileOverview";
// import VehicleManagement from "./components/VehicleManagement";
// import TransportRequests from "./components/TransportRequests";
// import StatsCard from "./components/StatsCard";
// import Notifications from "./components/Notifications";

// const Transporter = () => {
//   const [profile, setProfile] = useState({});
//   const [vehicles, setVehicles] = useState([]);
//   const [requests, setRequests] = useState([]);
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/transporter")
//       .then((res) => res.json())
//       .then((data) => setProfile(data));
//     fetch("http://localhost:5000/vehicles")
//       .then((res) => res.json())
//       .then((data) => setVehicles(data));
//     fetch("http://localhost:5000/requests")
//       .then((res) => res.json())
//       .then((data) => setRequests(data));
//     fetch("http://localhost:5000/notifications")
//       .then((res) => res.json())
//       .then((data) => setNotifications(data));
//   }, []);

//   const addVehicle = (vehicle) => {
//     fetch("http://localhost:5000/vehicles", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ ...vehicle, id: Date.now() }),
//     }).then(() => setVehicles([...vehicles, { ...vehicle, id: Date.now() }]));
//   };

//   const deleteVehicle = (id) => {
//     fetch(`http://localhost:5000/vehicles/${id}`, { method: "DELETE" }).then(
//       () => setVehicles(vehicles.filter((v) => v.id !== id))
//     );
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Transporter Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
//         <StatsCard title="Vehicles" count={vehicles.length} icon="🚐" />
//         <StatsCard title="Requests" count={requests.length} icon="📋" />
//         <StatsCard
//           title="Notifications"
//           count={notifications.length}
//           icon="🔔"
//         />
//       </div>

//       <ProfileOverview profile={profile} />
//       <VehicleManagement
//         vehicles={vehicles}
//         addVehicle={addVehicle}
//         deleteVehicle={deleteVehicle}
//       />
//       <TransportRequests requests={requests} />
//       <Notifications notifications={notifications} />
//     </div>
//   );
// };

// export default Transporter;

import React, { useEffect, useState } from "react";
import ProfileOverview from "./components/ProfileOverview";
import VehicleManagement from "./components/VehicleManagement";
import TransportRequests from "./components/TransportRequests";
import Notifications from "./components/Notifications";
import StatsCard from "./components/StatsCard";

const TransporterDashboard = () => {
  const [profile, setProfile] = useState({});
  const [vehicles, setVehicles] = useState([]);
  const [requests, setRequests] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Fetch data from JSON Server
  useEffect(() => {
    fetch("http://localhost:5000/transporter")
      .then((res) => res.json())
      .then((data) => setProfile(data));
    fetch("http://localhost:5000/vehicles")
      .then((res) => res.json())
      .then((data) => setVehicles(data));
    fetch("http://localhost:5000/requests")
      .then((res) => res.json())
      .then((data) => setRequests(data));
    fetch("http://localhost:5000/notifications")
      .then((res) => res.json())
      .then((data) => setNotifications(data));
  }, []);

  const addVehicle = (vehicle) => {
    fetch("http://localhost:5000/vehicles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...vehicle, id: Date.now() }),
    }).then(() => setVehicles([...vehicles, { ...vehicle, id: Date.now() }]));
  };

  const deleteVehicle = (id) => {
    fetch(`http://localhost:5000/vehicles/${id}`, { method: "DELETE" }).then(
      () => setVehicles(vehicles.filter((v) => v.id !== id))
    );
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Transporter Dashboard</h1>
        <p className="text-gray-600">
          Manage your transport services efficiently
        </p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard title="Vehicles" count={vehicles.length} icon="🚐" />
        <StatsCard title="Requests" count={requests.length} icon="📋" />
        <StatsCard
          title="Notifications"
          count={notifications.length}
          icon="🔔"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProfileOverview profile={profile} />
        <Notifications notifications={notifications} />
      </div>

      <div className="mt-6">
        <VehicleManagement
          vehicles={vehicles}
          addVehicle={addVehicle}
          deleteVehicle={deleteVehicle}
        />
      </div>

      <div className="mt-6">
        <TransportRequests requests={requests} />
      </div>
    </div>
  );
};

export default TransporterDashboard;
