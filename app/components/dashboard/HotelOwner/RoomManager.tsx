"use client";
import React, { useEffect, useState } from "react";
import RoomForm from "./RoomForm";

const RoomManager = ({ hotelId }: { hotelId: string }) => {
  const [rooms, setRooms] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editRoom, setEditRoom] = useState<any | null>(null);
  const authToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const fetchRooms = async () => {
    setLoading(true);
    console.log("Fetching rooms for hotelId:", hotelId);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel/${hotelId}/rooms`, {
        credentials:'include'
      });
      const data = await res.json();
      console.log("Fetched rooms:", data);
      setRooms(data.rooms);
    } catch (err) {
      setError("Failed to fetch rooms.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, [hotelId]);

  const handleAddRoom = (newRoom: any) => {
    setRooms((prev) => [newRoom, ...prev]);
    setShowForm(false);
  };

  const handleUpdateRoom = (updatedRoom: any) => {
    setRooms((prev) =>
      prev.map((room) => (room.roomId === updatedRoom.roomId ? updatedRoom : room))
    );
    setEditRoom(null);
    setShowForm(false);
  };

  const handleDelete = async (roomId: string) => {
    if (!confirm("Are you sure you want to delete this room?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel/room/${roomId}`, {
        method: "DELETE",
        credentials:'include'
      });

      if (res.ok) {
        setRooms((prev) => prev.filter((room) => room.roomId !== roomId));
      } else {
        alert("Failed to delete room.");
      }
    } catch (err) {
      alert("Error deleting room.");
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Rooms</h2>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-md"
          onClick={() => {
            setEditRoom(null);
            setShowForm((prev) => !prev);
          }}
        >
          {showForm ? "Close Form" : "Add Room"}
        </button>
      </div>

      {showForm && (
        <RoomForm
          hotelId={hotelId}
          isEditMode={!!editRoom}
          initialData={editRoom}
          onAddRoom={handleAddRoom}
          onUpdateRoom={handleUpdateRoom}
        />
      )}

      {loading ? (
        <p>Loading rooms...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="space-y-4 mt-4">
          {rooms.map((room,id) => (
            <div
              key={id}
              className="bg-white p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">Room Type: {room.roomType}</p>
                <p>Price: ${room.pricePerNight}</p>
                <p>Capacity: {room.capacity} | Beds: {room.numberOfBeds}</p>
              </div>
              <div className="space-x-2">
                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                  onClick={() => {
                    setEditRoom(room);
                    setShowForm(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(room.roomId)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomManager;
