import React, { useEffect, useState } from 'react';

const RoomManagement = ({ hotelId, authToken }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    roomType: '',
    pricePerNight: '',
    capacity: '',
    numberOfBeds: '',
    primaryImage: null,
    images: [],
  });

  // Fetch rooms on component mount
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel/${hotelId}/rooms`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        const result = await response.json();
        if (response.ok) {
          setRooms(result.data);
        } else {
          setError('Failed to fetch rooms');
        }
      } catch (err) {
        setError('An error occurred while loading rooms.');
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [hotelId, authToken]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { roomType, pricePerNight, capacity, numberOfBeds, primaryImage, images } = formData;
    if (!roomType || !pricePerNight || !capacity || !numberOfBeds || !primaryImage) {
      setError('Please fill in all required fields.');
      return;
    }

    const data = new FormData();
    data.append('RoomType', roomType);
    data.append('PricePerNight', pricePerNight);
    data.append('Capacity', capacity);
    data.append('NumberOfBeds', numberOfBeds);
    data.append('PrimaryImage', primaryImage[0]);
    Array.from(images).forEach((image) => {
      data.append('Images', image);
    });

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel/${hotelId}/add-room`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        body: data,
      });
      const result = await response.json();
      if (response.ok) {
        setRooms((prevRooms) => [result.data, ...prevRooms]);
        setFormData({
          roomType: '',
          pricePerNight: '',
          capacity: '',
          numberOfBeds: '',
          primaryImage: null,
          images: [],
        });
        setError(null);
      } else {
        setError('Failed to add room');
      }
    } catch (err) {
      setError('An error occurred while adding the room.');
    }
  };

  // Handle room deletion
  const handleDelete = async (roomId) => {
    if (window.confirm('Are you sure you want to delete this room?')) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Hotel/${hotelId}/rooms/${roomId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        if (response.ok) {
          setRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));
        } else {
          setError('Failed to delete room');
        }
      } catch (err) {
        setError('An error occurred while deleting the room.');
      }
    }
  };

  return (
    <div>
      <h2>Manage Rooms</h2>
      {loading ? (
        <p>Loading rooms...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Room Type:</label>
              <input
                type="text"
                name="roomType"
                value={formData.roomType}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Price Per Night:</label>
              <input
                type="number"
                name="pricePerNight"
                value={formData.pricePerNight}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Capacity:</label>
              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Number of Beds:</label>
              <input
                type="number"
                name="numberOfBeds"
                value={formData.numberOfBeds}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Primary Image:</label>
              <input
                type="file"
                name="primaryImage"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Additional Images:</label>
              <input
                type="file"
                name="images"
                multiple
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Add Room</button>
          </form>
          <ul>
            {rooms.map((room) => (
              <li key={room.id}>
                <p>{room.roomType}</p>
                <p>{room.pricePerNight}</p>
                <p>{room.capacity}</p>
                <p>{room.numberOfBeds}</p>
                <button onClick={() => handleDelete(room.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RoomManagement;
