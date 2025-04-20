import React, { useEffect, useState } from "react";
import ProfileOverview from "./components/ProfileOverview";
import VehicleManagement from "./components/VehicleManagement";
import TransportRequests from "./components/TransportRequests";
import Notifications from "./components/Notifications";
import StatsCard from "./components/StatsCard";
import AddTransporterForm from "./components/VehicleManagement";
import TransportList from "./components/TransportList";

const TransporterDashboard = () => {
  const [profile, setProfile] = useState({});
  const [vehicles, setVehicles] = useState([]);
  const [requests, setRequests] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const authToken = typeof window !== "undefined" ? localStorage.getItem("token") : "";

  useEffect(() => {
    fetchTransports();
  }, []);

  const fetchTransports = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Transport/my-tranports`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    const data = await res.json();
    console.log("total transports:", data.data.length);
    if (data?.isSuccess) setVehicles(data.data || []);
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
        <AddTransporterForm />
      </div>
      <div className="mt-6">
        <TransportList />
      </div>
    </div>
  );
};

export default TransporterDashboard;

// Please improve this dashboard of transporter
// add functionalities of delete, update and display added transports of transporter
// I provide you a code that I already implement
// your task is to complete other functionalites so :
// 1. Add a form to add new transports.
// 2. Display the list of added transports.
// 3. Implement delete functionality for each transport.
// 4. Implement update functionality for each transport.
// 5. Ensure the UI is user-friendly and responsive.

// apis
// add:/api/Transport/add-transport
// update:/api/Transport/update-transport/{transportId}
// delete:/api/Transport/delete-transport/{id}
// get:/api/Transport/my-tranports
