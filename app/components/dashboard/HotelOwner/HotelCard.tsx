import React, { useState } from "react";

const HotelCard = ({ hotel, onDelete, onEdit }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!confirm(`Delete "${hotel.hotelName}"?`)) return;
    setLoading(true);
    try {
      const response = await fetch(`/api/Hotel/${hotel.id}`, {
        method: "DELETE",
        credentials:'include',
      });
      if (response.ok) {
        onDelete(hotel.id);
      } else {
        console.error("Failed to delete hotel.");
      }
    } catch (err) {
      console.error("Error deleting hotel:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow flex justify-between items-center hover:shadow-md transition">
      <div>
        <h3 className="text-xl font-semibold text-blue-800">{hotel.hotelName}</h3>
        <p className="text-gray-600">{hotel.address}</p>
      </div>
      <div className="flex space-x-3">
        <button
          onClick={() => onEdit(hotel)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          disabled={loading}
          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
        >
          {loading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
