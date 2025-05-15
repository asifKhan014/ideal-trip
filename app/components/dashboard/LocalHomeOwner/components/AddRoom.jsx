'use client";'
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function AddLocalHomeForm({ home = null, onClose, fetchHomes }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    addressLine: "",
    pricePerNight: "",
    capacity: "",
    availableFrom: "",
    availableTo: "",
    primaryImage: null,
    images: []
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const authToken = localStorage.getItem("token");

  useEffect(() => {
    if (home) {
      setFormData({
        name: home.name,
        description: home.description,
        addressLine: home.addressLine,
        pricePerNight: home.pricePerNight,
        capacity: home.capacity,
        availableFrom: home.availableFrom,
        availableTo: home.availableTo,
        primaryImage: null,
        images: []
      });
    }
  }, [home]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "primaryImage") {
      setFormData({ ...formData, [name]: files[0] });
    } else if (name === "images") {
      setFormData({ ...formData, [name]: [...files] });
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
      const response = await fetch(
        home
          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/LocalHome/update-localhome/${home.id}`
          : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/LocalHome/add-localhome`,
        {
          method: home ? "PUT" : "POST",
          body: data,
          credentials:'include'
        }
      );
      const result = await response.json();

      if (result.isSuccess) {
        alert(home ? "Home updated successfully." : "Home added successfully.");
        fetchHomes();
        onClose();
      } else {
        setError(result.message || "Failed to add/update home.");
      }
    } catch (err) {
      setError("Something went wrong while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 max-w-2xl text-black bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{home ? "Edit Local Home" : "Add Local Home"}</h2>

      <Input
        name="name"
        placeholder="Name"
        required
        onChange={handleChange}
        className="text-black"
        value={formData.name}
      />
      <Textarea
        name="description"
        placeholder="Description"
        required
        onChange={handleChange}
        className="text-black"
        value={formData.description}
      />
      <Input
        name="addressLine"
        placeholder="Address Line"
        required
        onChange={handleChange}
        className="text-black"
        value={formData.addressLine}
      />
      <Input
        name="pricePerNight"
        placeholder="Price Per Night"
        type="number"
        required
        onChange={handleChange}
        className="text-black"
        value={formData.pricePerNight}
      />
      <Input
        name="capacity"
        placeholder="Capacity"
        type="number"
        onChange={handleChange}
        className="text-black"
        value={formData.capacity}
      />
      <Input
        name="availableFrom"
        type="datetime-local"
        required
        onChange={handleChange}
        className="text-black"
        value={formData.availableFrom}
      />
      <Input
        name="availableTo"
        type="datetime-local"
        required
        onChange={handleChange}
        className="text-black"
        value={formData.availableTo}
      />

      <label className="block">Primary Image</label>
      <Input
        name="primaryImage"
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="text-black"
      />

      <label className="block">Images</label>
      <Input
        name="images"
        type="file"
        accept="image/*"
        multiple
        onChange={handleChange}
        className="text-black"
      />

      <Button
        variant="destructive"
        className="w-full bg-black text-white py-2"
        type="submit"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </Button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}
