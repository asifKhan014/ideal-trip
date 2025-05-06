"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, AlertTriangle } from "lucide-react";

export default function AddTransporterForm() {
  const [formData, setFormData] = useState({
    name: "",
    type: "Bus",
    capacity: "",
    seatsAvailable: "",
    startLocation: "",
    destination: "",
    departureTime: "",
    pricePerSeat: "",
    primaryImage: null,
    images: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const authToken = typeof window !== "undefined" ? localStorage.getItem("token") : "";
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "primaryImage") {
      setFormData({ ...formData, primaryImage: files?.[0] || null });
    } else if (name === "images") {
      setFormData({ ...formData, images: files ? Array.from(files) : [] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "images") {
        value.forEach((file) => data.append("images", file));
      } else {
        data.append(key, value);
      }
    });

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Transport/add-transport`, {
        method: "POST",
        body: data,
        credentials:'include'
      });

      const result = await response.json();
      if (result.isSuccess) {
        setFormData({
          name: "",
          type: "",
          capacity: "",
          seatsAvailable: "",
          startLocation: "",
          destination: "",
          departureTime: "",
          pricePerSeat: "",
          primaryImage: null,
          images: [],
        });
      } else {
        setError(result.message || "Failed to add transporter");
      }
    } catch (err) {
      setError("Something went wrong while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl p-6 bg-white rounded-2xl shadow-lg ">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Add New Transport</h2>

      {error && (
        <div className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-3 rounded-md mb-4 border border-red-300">
          <AlertTriangle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
        <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="text-black"/>
        <Input name="type" placeholder="Type" value={formData.type} onChange={handleChange} required className="text-black" disabled/>

        <Input name="capacity" type="number" placeholder="Capacity" value={formData.capacity} onChange={handleChange} required className="text-black"/>
        <Input name="seatsAvailable" type="number" placeholder="Seats Available" value={formData.seatsAvailable} onChange={handleChange} required className="text-black"/>

        <Input name="startLocation" placeholder="Start Location" value={formData.startLocation} onChange={handleChange} required className="text-black"/>
        <Input name="destination" placeholder="Destination" value={formData.destination} onChange={handleChange} required className="text-black"/>

        <Input name="departureTime" type="datetime-local" value={formData.departureTime} onChange={handleChange} required className="text-black"/>
        <Input name="pricePerSeat" type="number" placeholder="Price Per Seat" value={formData.pricePerSeat} onChange={handleChange} required className="text-black"/>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Primary Image</label>
          <Input
            name="primaryImage"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="file:mr-4 file:py-2 text-black file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
            required
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Additional Images</label>
          <Input
            name="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleChange}
            className="file:mr-4 text-black file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
          />
        </div>

        <div className="col-span-1 md:col-span-2 mt-4">
          <Button
            className="w-full bg-black text-white py-2 px-4 rounded-xl hover:bg-gray-900 transition disabled:opacity-60"
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : (
              <div className="flex items-center justify-center gap-2">
                <Upload className="w-4 h-4" />
                Submit
              </div>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
