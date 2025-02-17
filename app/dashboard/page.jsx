"use client";
import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import Transporter from "../components/dashboard/transporter/Transporter";
import TourGuide from "../components/dashboard/TourGuide/TourGuide";
import LocalHomeOwner from "../components/dashboard/LocalHomeOwner/LocalHomeOwner";
import Tourist from "../components/dashboard/Tourist/Tourist";

export default function Dashboard() {
  const [role, setRole] = useState("");

  useEffect(() => {
    // Fetch user role from backend or localStorage
    // For demo purposes, role is set manually
    const userRole = "transporter"; // Replace with API call or localStorage data
    // const userRole = "tourguide"; // Replace with API call or localStorage data
    setRole(userRole);
  }, []);

  const renderDashboard = () => {
    switch (role) {
      case "transporter":
        return <Transporter />;
      case "tourguide":
        return <TourGuide />;
      case "localhomeowner":
        return <LocalHomeOwner />;
      case "tourist":
        return <Tourist />;
      default:
        return <p>Loading dashboard...</p>;
    }
  };

  return <DashboardLayout>{renderDashboard()}</DashboardLayout>;
}
