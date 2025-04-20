"use client";
import React, { useEffect, useState } from "react";

const ROOM_TYPES = {
  1: "Single",
  2: "Double",
  3: "Suite",
  4: "Deluxe",
};

const RoomForm = ({
  hotelId,
  isEditMode = false,
  initialData,
  onAddRoom,
  onUpdateRoom,
}: any) => {
  const [roomType, setRoomType] = useState(1);
  const [pricePerNight, setPricePerNight] = useState<number | string>("");
  const [capacity, setCapacity] = useState<number | string>("");
  const [numberOfBeds, setNumberOfBeds] = useState<number | string>("");
  const [primaryImage, setPrimaryImage] = useState<File | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const authToken = localStorage.getItem("token");

  useEffect(() => {
    if (isEditMode && initialData) {
      setRoomType(initialData.roomType);
      setPricePerNight(initialData.pricePerNight);
      setCapacity(initialData.capacity);
      setNumberOfBeds(initialData.numberOfBeds);
    }
  }, [initialData, isEditMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData();
    formData.append("RoomType", String(roomType));
    formData.append("PricePerNight", String(pricePerNight));
    formData.append("Capacity", String(capacity));
    formData.append("NumberOfBeds", String(numberOfBeds));
    if (primaryImage) formData.append("PrimaryImage", primaryImage);
    images.forEach((img) => formData.append("Images", img));

    const method = isEditMode ? "PUT" : "POST";
    const url = isEditMode
      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel/room/${initialData.roomId}`
      : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel/add-room?hotelId=${hotelId}`;
    try {
      const res = await fetch(url, {
        method,
        body: formData,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const result = await res.json();
      if (res.ok) {
        if (isEditMode) {
          onUpdateRoom(result.data || result);
        } else {
          onAddRoom(result.data || result);
        }

        // Reset if adding
        if (!isEditMode) {
          setRoomType(1);
          setPricePerNight("");
          setCapacity("");
          setNumberOfBeds("");
          setPrimaryImage(null);
          setImages([]);
        }
      } else {
        setError(result.message || "Failed to submit room.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-6">
      <div className="mb-4">
        <label className="block mb-1 font-medium">Room Type</label>
        <select
          className="w-full border px-3 py-2 rounded"
          value={roomType}
          onChange={(e) => setRoomType(Number(e.target.value))}
        >
          {Object.entries(ROOM_TYPES).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 font-medium">Price Per Night</label>
          <input
            type="number"
            className="w-full border px-3 py-2 rounded"
            value={pricePerNight}
            onChange={(e) => setPricePerNight(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Capacity</label>
          <input
            type="number"
            className="w-full border px-3 py-2 rounded"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Number of Beds</label>
          <input
            type="number"
            className="w-full border px-3 py-2 rounded"
            value={numberOfBeds}
            onChange={(e) => setNumberOfBeds(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block mb-1 font-medium">Primary Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPrimaryImage(e.target.files?.[0] || null)}
        />
      </div>

      <div className="mt-4">
        <label className="block mb-1 font-medium">Additional Images</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => setImages(Array.from(e.target.files || []))}
        />
      </div>

      <button
        type="submit"
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Submitting..." : isEditMode ? "Update Room" : "Add Room"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};

export default RoomForm;
