"use client";
import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Transporter from "../../components/dashboard/transporter/Transporter";
import TourGuide from "../../components/dashboard/TourGuide/TourGuide";
import LocalHomeOwner from "../../components/dashboard/LocalHomeOwner/LocalHomeOwner";
import Tourist from "../../components/dashboard/Tourist/Tourist";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import HotelOwnerDashboard from "../../components/dashboard/HotelOwner/HotelOwner";

export default function Dashboard() {
  const [role, setRole] = useState("");

  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      setRole(user?.role); // Set the role when the user is available
    }
  }, [user, router]); // Dependency array ensures it runs when the user changes

  const renderDashboard = () => {
    switch (role) {
      case "Transporter":
        return <Transporter />;
      case "TourGuide":
        return <TourGuide />;
      case "LocalHomeOwner":
        return <LocalHomeOwner />;
      case "Tourist":
        return <Tourist />;
        case "HotelOwner":
          return <HotelOwnerDashboard />;
      default:
        return <p>Loading dashboard...</p>;
    }
  };

  return <DashboardLayout>{renderDashboard()}</DashboardLayout>;
}
