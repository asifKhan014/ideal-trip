"use client";

import React, { useState } from "react";

const TransportPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    date: "",
    passengers: 1,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [transportServices, setTransportServices] = useState([
    {
      area: "Islamabad to Lahore",
      services: [
        {
          id: "bus",
          name: "Bus Service",
          price: 1500,
          seats: 50,
          company: "Fast Movers",
          quality: "AC Bus",
        },
        {
          id: "car",
          name: "Private Car",
          price: 5000,
          seats: 4,
          company: "Elite Rides",
          quality: "Sedan",
        },
      ],
    },
    {
      area: "Karachi to Quetta",
      services: [
        {
          id: "bus",
          name: "Bus Service",
          price: 2000,
          seats: 45,
          company: "Speed Transport",
          quality: "Luxury Bus",
        },
        {
          id: "car",
          name: "Private Car",
          price: 7000,
          seats: 4,
          company: "Comfort Wheels",
          quality: "SUV",
        },
      ],
    },
    {
      area: "Peshawar to Multan",
      services: [
        {
          id: "bus",
          name: "Bus Service",
          price: 1800,
          seats: 40,
          company: "Trustline",
          quality: "Non-AC Bus",
        },
        {
          id: "car",
          name: "Private Car",
          price: 6000,
          seats: 4,
          company: "Quick Travels",
          quality: "Hatchback",
        },
      ],
    },
  ]);

  const handleSelectService = (service, area) => {
    setSelectedService({ ...service, area });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredServices = transportServices.filter((tour) =>
    tour.area.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (
      selectedService.id === "bus" &&
      selectedService.seats < formData.passengers
    ) {
      alert("Not enough seats available.");
      return;
    }
    if (
      selectedService.id === "car" &&
      formData.passengers !== selectedService.seats
    ) {
      alert("You must book the full car.");
      return;
    }

    alert(
      `Booking Confirmed:\n\nService: ${selectedService.name}\nArea: ${selectedService.area}\nDate: ${formData.date}\nPassengers: ${formData.passengers}\nPrice: PKR ${selectedService.price}`
    );

    if (selectedService.id === "bus") {
      setTransportServices((prevServices) =>
        prevServices.map((tour) => ({
          ...tour,
          services: tour.services.map((service) =>
            service.id === "bus" && service.name === selectedService.name
              ? { ...service, seats: service.seats - formData.passengers }
              : service
          ),
        }))
      );
    }

    setSelectedService(null);
    setFormData({ date: "", passengers: 1 });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Seamless Transport Solutions
          </h1>
          <p className="text-lg mb-6">
            Choose from our premium Bus and Car services.
          </p>
          <input
            type="text"
            placeholder="Search transport by city..."
            className="p-2 rounded-lg w-full max-w-md text-black border-gray-300"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </header>

      {/* Transport Services Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
          {filteredServices.map((tour, index) => (
            <div key={index} className="mb-12 px-4 md:px-44">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {tour.area}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {tour.services.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white shadow-lg rounded-lg p-4 flex gap-6 items-center justify-evenly hover:shadow-xl transition-shadow duration-300 relative"
                  >
                    <div className="">
                      {service.id === "bus" ? (
                        <div className="text-9xl">🚌</div>
                      ) : (
                        <div className="text-9xl">🚗</div>
                      )}{" "}
                    </div>

                    <div className="">
                      <h4 className="text-lg font-semibold mb-2 ">
                        {service.name}
                      </h4>
                      <p className="font-bold text-lg mb-2">
                        PKR {service.price}
                      </p>
                      <p className="text-sm mb-1">Company: {service.company}</p>
                      <p className="text-sm mb-1">
                        Seats Available: {service.seats}
                      </p>
                      <p className="text-sm mb-4">Quality: {service.quality}</p>
                      <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                        onClick={() => handleSelectService(service, tour.area)}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white shadow-lg rounded-lg p-6 w-96">
            <h2 className="text-2xl font-bold mb-4">
              Book {selectedService.name}
            </h2>
            <p className="mb-2 text-gray-700">
              <strong>Area:</strong> {selectedService.area}
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Price:</strong> PKR {selectedService.price}
            </p>
            <form onSubmit={handleBooking}>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="passengers"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of Passengers
                </label>
                <select
                  id="passengers"
                  name="passengers"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                  value={formData.passengers}
                  onChange={handleChange}
                  disabled={selectedService.id === "car"}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Transport Solutions. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TransportPage;
