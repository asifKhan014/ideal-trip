
"use client";

import React, { useEffect, useState } from "react";
import { Pencil, Trash2, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TransportList() {
  const [transports, setTransports] = useState([]);
  const [id, setid] = useState(null);
  const [editData, setEditData] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";
  console.log("Token:", token);
  useEffect(() => {
    fetchTransports();
  }, []);

  const fetchTransports = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Transport/my-tranports`, {
      credentials:'include',
    });
    const data = await res.json();
    console.log("My transports:", data.data);
    if (data?.isSuccess) setTransports(data.data || []);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Transport/delete-transport/${id}`, {
      method: "DELETE",
      credentials:'include',
    });

    const result = await res.json();
    if (result.isSuccess) {
      setTransports(transports.filter((t) => t.id !== id));
    }
  };

  const handleEdit = (transport) => {
    setid(transport.id);
    setEditData({
      name: transport.name || "",
      type: transport.type || "Bus",
      capacity: transport.capacity || "",
      seatsAvailable: transport.seatsAvailable || "",
      startLocation: transport.startLocation || "",
      destination: transport.destination || "",
      departureTime: transport.departureTime ? transport.departureTime.slice(0, 16) : "",
      pricePerSeat: transport.pricePerSeat || "",
      primaryImage: null,
      images: [],
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "primaryImage") {
      setEditData((prev) => ({ ...prev, primaryImage: files?.[0] || null }));
    } else if (name === "images") {
      setEditData((prev) => ({ ...prev, images: files ? Array.from(files) : [] }));
    } else {
      setEditData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleUpdate = async () => {
    if (!id || !editData) return;

    setLoading(true);
    const formData = new FormData();

    Object.entries(editData).forEach(([key, value]) => {
      if (key === "images") {
        value.forEach((img) => formData.append("images", img));
      } else {
        formData.append(key, value);
      }
    });

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Transport/update-transport/${id}`, {
        method: "PUT",
        credentials:'include',
        body: formData,
      });

      const result = await res.json();
      if (result.isSuccess) {
        fetchTransports();
        setid(null);
        setEditData(null);
      }
    } catch (err) {
      console.error("Update failed:", err);
    } finally {
      setLoading(false);
    }
  };

  console.log("Transports:   ========== ", transports);
  console.log("Edit Data:   ========== ", editData);
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">My Transports</h2>
      {transports.length === 0 ? (
        <p>No transports available.</p>
      ) : (
        <div className="space-y-4">
          {transports.map((transport) => {
            const isEditing = transport.id === id;

            return (
              <div
                key={transport.id}
                className="border rounded-lg p-4 flex flex-col gap-4 bg-gray-50"
              >
                {isEditing && editData ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <Input name="name" placeholder="Name" value={editData.name} onChange={handleChange} className="text-black"/>
                      <Input name="type" value={editData.type} disabled className="text-black"/>
                      <Input name="capacity" type="number" placeholder="Capacity" value={editData.capacity} onChange={handleChange} className="text-black"/>
                      <Input name="seatsAvailable" type="number" placeholder="Seats Available" value={editData.seatsAvailable} onChange={handleChange} className="text-black"/>
                      <Input name="startLocation" placeholder="Start Location" value={editData.startLocation} onChange={handleChange} className="text-black"/>
                      <Input name="destination" placeholder="Destination" value={editData.destination} onChange={handleChange} className="text-black"/>
                      <Input name="departureTime" type="datetime-local" value={editData.departureTime} onChange={handleChange} className="text-black"/>
                      <Input name="pricePerSeat" type="number" placeholder="Price Per Seat" value={editData.pricePerSeat} onChange={handleChange} className="text-black"/>

                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Primary Image</label>
                        <Input name="primaryImage" type="file" accept="image/*" onChange={handleChange} className="text-black"/>
                      </div>

                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Additional Images</label>
                        <Input name="images" type="file" accept="image/*" multiple onChange={handleChange} className="text-black"/>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-2">
                      <Button onClick={handleUpdate} disabled={loading}>
                        {loading ? "Saving..." : "Save"}
                      </Button>
                      <Button variant="outline" onClick={() => { setid(null); setEditData(null); }}>
                        <X className="w-4 h-4" /> Cancel
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <p className="font-semibold">{transport.name} ({transport.type})</p>
                      <p className="text-sm text-gray-600">{transport.startLocation} → {transport.destination}</p>
                      <p className="text-sm text-gray-600">Departure: {new Date(transport.departureTime).toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Seats: {transport.seatsAvailable}</p>
                      <p className="text-sm text-gray-600">PKR {transport.ticketPrice} per seat</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => handleEdit(transport)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="destructive" onClick={() => handleDelete(transport.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
