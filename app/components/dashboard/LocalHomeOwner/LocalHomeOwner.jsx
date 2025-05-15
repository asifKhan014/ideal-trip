'use client';
import React, { useEffect, useState } from "react";
import AddLocalHomeForm from "./components/AddRoom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

function LocalHomeOwner() {
  const [homes, setHomes] = useState([]);
  const [editingHome, setEditingHome] = useState(null);
  const [loading, setLoading] = useState(false);

  const authToken = localStorage.getItem("token");

  const fetchHomes = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/LocalHome/GetLocalHomes`, {
        method: "GET",
        credentials:'include'
      });
      const result = await response.json();
      console.log("Response of fectchHomes:", result.data.localHomes);
      
      setHomes(result.data.localHomes || []);
    } catch (err) {
      console.error("Error fetching homes", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this home?")) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/LocalHome/delete-localhome/${id}`,
          {
            method: "DELETE",
            credentials:'include'
          }
        );
        const result = await response.json();
        if (result.isSuccess) {
          alert("Home deleted successfully.");
          fetchHomes();
        } else {
          alert("Failed to delete home.");
        }
      } catch (err) {
        alert("Something went wrong while deleting the home.");
      }
    }
  };

  useEffect(() => {
    fetchHomes();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage your home efficiently</h1>
      </header>

      {/* Homes List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {homes.length === 0 ? (
          <p>No homes available. Add a home below.</p>
        ) : (
          homes.map((home) => (
            <div key={home.id} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{home.name}</h3>
              <p>{home.addressLine}</p>
              <p>{home.pricePerNight} per night</p>
              <div className="flex gap-2 mt-4">
                <Button
                  onClick={() => setEditingHome(home)}
                  variant="outline"
                  className="flex-1"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(home.id)}
                  variant="destructive"
                  className="flex-1"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add/Edit Local Home Form */}
      <div className="mt-6">
        <AddLocalHomeForm home={editingHome} onClose={() => setEditingHome(null)} fetchHomes={fetchHomes} />
      </div>
    </div>
  );
}

export default LocalHomeOwner;
