
"use client";
import { useState } from "react";

export default function TourGuideHighlights() {
  const [selectedGuide, setSelectedGuide] = useState(null);

  const tourGuides = [
    {
      name: "Sarah Williams",
      image: "/images/guide-2.jpg",
      expertise: "Mountain Expeditions",
      description:
        "Experienced in leading hikes and mountain treks with 10+ years of experience.",
      rating: 4.8,
      certifications: ["Certified Trek Leader", "Wilderness First Responder"],
    },
    {
      name: "John Smith",
      image: "/images/guide-1.jpg",
      expertise: "City Tours",
      description:
        "Specializes in urban cultural tours and historical site explanations.",
      rating: 4.9,
      certifications: ["Licensed Tour Guide", "Cultural Historian"],
    },
    {
      name: "Emma Brown",
      image: "/images/guide-3.jpg",
      expertise: "Adventure Sports",
      description:
        "Expert in organizing adventure activities like rafting and paragliding.",
      rating: 4.7,
      certifications: ["Adventure Sports Expert", "Safety Instructor"],
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-20 bg-gradient-to-r from-blue-50 to-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          Meet Our Expert Tour Guides 
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {tourGuides.map((guide, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={guide.image}
                alt={guide.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {guide.name}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{guide.expertise}</p>
                <p className="mt-2 text-gray-600 text-sm">
                  {guide.description}
                </p>
                <div className="mt-4">
                  <h4 className="text-gray-700 font-medium mb-2">
                    Certifications:
                  </h4>
                  <ul className="space-y-1">
                    {guide.certifications.map((cert, idx) => (
                      <li
                        key={idx}
                        className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold py-1 px-3 rounded-full mr-2"
                      >
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={() => setSelectedGuide(guide)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition"
                  >
                    Book Tour Guide
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {selectedGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Book {selectedGuide.name}
            </h3>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="date"
                >
                  Select Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Enter location"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write a message"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                  rows="3"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setSelectedGuide(null)}
                  className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
