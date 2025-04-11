import React, { useEffect, useState } from "react";
import ProfileOverview from "./components/ProfileOverview";
import VehicleManagement from "./components/VehicleManagement";
import TransportRequests from "./components/TransportRequests";
import Notifications from "./components/Notifications";
import StatsCard from "./components/StatsCard";
import AddTransporterForm from "./components/VehicleManagement";

const TransporterDashboard = () => {
  const [profile, setProfile] = useState({});
  const [vehicles, setVehicles] = useState([]);
  const [requests, setRequests] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Fetch data from JSON Server
  // useEffect(() => {
  //   fetch("http://localhost:5000/transporter")
  //     .then((res) => res.json())
  //     .then((data) => setProfile(data));
  //   fetch("http://localhost:5000/vehicles")
  //     .then((res) => res.json())
  //     .then((data) => setVehicles(data));
  //   fetch("http://localhost:5000/requests")
  //     .then((res) => res.json())
  //     .then((data) => setRequests(data));
  //   fetch("http://localhost:5000/notifications")
  //     .then((res) => res.json())
  //     .then((data) => setNotifications(data));
  // }, []);

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
       <AddTransporterForm/>
      </div>

      <div className="mt-6">
        <TransportRequests requests={requests} />
      </div>
    </div>
  );
};

export default TransporterDashboard;
