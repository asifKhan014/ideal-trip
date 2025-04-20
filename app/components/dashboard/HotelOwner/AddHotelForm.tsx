"use client";
import React, { useEffect, useState } from "react";

type HotelFormProps = {
  onAddHotel?: (hotel: any) => void;
  onUpdateHotel?: (updatedHotel: any) => void;
  initialData?: any; // Optional - if editing
  isEditMode?: boolean;
};

const AddHotelForm = ({
  onAddHotel,
  onUpdateHotel,
  initialData,
  isEditMode = false,
}: HotelFormProps) => {
  const [hotelName, setHotelName] = useState("");
  const [hotelDescription, setHotelDescription] = useState("");
  const [address, setAddress] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const [primaryImage, setPrimaryImage] = useState<File | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const authToken = localStorage.getItem("token");

  // Populate form if editing
  useEffect(() => {
    if (isEditMode && initialData) {
      setHotelName(initialData.hotelName);
      setHotelDescription(initialData.hotelDescription);
      setAddress(initialData.address);
      setIsAvailable(initialData.isAvailable);
    }
  }, [initialData, isEditMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("HotelName", hotelName);
    formData.append("HotelDescription", hotelDescription);
    formData.append("Address", address);
    formData.append("IsAvailable", String(isAvailable));

    if (primaryImage) {
      formData.append("PrimaryImage", primaryImage);
    }

    images.forEach((img) => {
      formData.append("Images", img);
    });

    setLoading(true);
    setError(null);
    setSuccessMessage(null);
    
    const endpoint = isEditMode
      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel/${initialData.hotelId}`
      : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel`;

    const method = isEditMode ? "PUT" : "POST";

    try {
      
      const response = await fetch(endpoint, {
        method,
        body: formData,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const result = await response.json();
     
      if (response.ok) {
        setSuccessMessage(isEditMode ? "Hotel updated successfully!" : "Hotel added successfully!");

        if (isEditMode) {
          onUpdateHotel?.(result.data || result); // Update mode
        } else {
          onAddHotel?.(result.data || result); // Add mode
        }

        if (!isEditMode) {
          setHotelName("");
          setHotelDescription("");
          setAddress("");
          setIsAvailable(true);
          setPrimaryImage(null);
          setImages([]);
        }
      } else {
        setError(result.message || "Operation failed.");
      }
    } catch (err) {
      setError("Something went wrong.");
      console.error("Error during hotel operation:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto mt-8"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {isEditMode ? "Edit Hotel" : "Add New Hotel"}
      </h2>

      {/* Form Fields */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Hotel Name *</label>
        <input
          type="text"
          value={hotelName}
          onChange={(e) => setHotelName(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2"
          placeholder="e.g. Hotel Paradise"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Hotel Description *</label>
        <textarea
          value={hotelDescription}
          onChange={(e) => setHotelDescription(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2"
          placeholder="Write a brief description..."
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Address *</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2"
          placeholder="e.g. 123 Paradise Street"
        />
      </div>

      <div className="mb-4 flex items-center space-x-2">
        <input
          type="checkbox"
          checked={isAvailable}
          onChange={(e) => setIsAvailable(e.target.checked)}
        />
        <label className="text-gray-700">Available</label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Primary Image *</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setPrimaryImage(file);
          }}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Additional Images</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => {
            if (e.target.files) {
              setImages(Array.from(e.target.files));
            }
          }}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-semibold"
        disabled={loading}
      >
        {loading ? "Submitting..." : isEditMode ? "Update Hotel" : "Submit Hotel"}
      </button>

      {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};

export default AddHotelForm;
