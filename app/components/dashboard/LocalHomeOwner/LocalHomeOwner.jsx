import React, { useEffect, useState } from "react";
import AddLocalHomeOwnerForm from "./components/AddRoom";
import StatsCard from "../transporter/components/StatsCard";
import { Home } from "lucide-react";
function LocalHomeOwner() {
    const [profile, setProfile] = useState({});
    const [rooms, setVehicles] = useState([]);
    const [requests, setRequests] = useState([]);
    const [notifications, setNotifications] = useState([]);



       
    
    
    // Fetch data from JSON Server
    // useEffect(() => {
        // fetch("http://localhost:5000/localHomeOwner")
        //     .then((res) => res.json())
        //     .then((data) => setProfile(data));
        // fetch("http://localhost:5000/vehicles")
        //     .then((res) => res.json())
        //     .then((data) => setVehicles(data));
        // fetch("http://localhost:5000/requests")
        //     .then((res) => res.json())
        //     .then((data) => setRequests(data));
        // fetch("http://localhost:5000/notifications")
        //     .then((res) => res.json())
        //     .then((data) => setNotifications(data));
    // }, []);

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold"> Manage your home  efficiently</h1>
                {/* <p className="text-gray-600">
                    Manage your home  efficiently
                </p> */}
            </header>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard title="Rooms" count={rooms.length} icon={<Home className="w-6 h-6"/>} />
                <StatsCard title="Requests" count={requests.length} icon="📋" />
                <StatsCard
                    title="Notifications"
                    count={notifications.length}
                    icon="🔔"s
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* <ProfileOverview profile={profile} />
                <Notifications notifications={notifications} /> */}
               <div className="bg-white p-6 rounded-lg shadow w-full">
               Booked rooms will be here.
               </div>

            </div>

            <div className="mt-6">
                {/* <VehicleManagement
                    vehicles={vehicles}
                    addVehicle={addVehicle}
                    deleteVehicle={deleteVehicle}
                /> */}
                <AddLocalHomeOwnerForm/>
            </div>

            <div className="mt-6">
                {/* <TransportRequests requests={requests} /> */}
            </div>
        </div>
    );
}

export default LocalHomeOwner;