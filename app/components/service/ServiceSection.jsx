"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaBus,
  FaHotel,
  FaMapMarkerAlt,
  FaUserTie,
} from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      icon: <FaBus className="text-5xl text-blue-500  transition-colors" />,
      title: "Transport Facilities",
      description: "Convenient transportation options for your journey.",
      link: "/transportation",
    },
    {
      icon: <FaHotel className="text-5xl text-green-500  transition-colors" />,
      title: "Hotel Rooms",
      description: "Comfortable stays in top-rated hotels.",
      link: "/hotels",
    },
    {
      icon: <FaMapMarkerAlt className="text-5xl text-purple-500  transition-colors" />,
      title: "Local Accommodations",
      description: "Unique stays in local neighborhoods.",
      link: "/local-stays",
    },
    {
      icon: <FaUserTie className="text-5xl text-teal-500  transition-colors" />,
      title: "Tour Guide",
      description: "Personalized guidance for your trips.",
      link: "/tourguide",
    },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-20 md:py-36 bg-gradient-to-b from-white to-blue-200">
      <div className="max-w-screen-2xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 text-center mb-6">
          What We Offer
        </h2>
        <p className="text-lg text-gray-600 text-center mb-14">
          Discover services designed to make your trips memorable and hassle-free.
        </p>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              href={service.link}
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform ${
                hovered === index ? "scale-105 backdrop-blur-md" : "scale-100"
              }`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 text-center mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-center text-gray-600 group-hover:text-gray-800 transition-colors">
                {service.description}
              </p>

              {/* Tooltip */}
              {hovered === index && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 bg-gray-800 text-white text-sm rounded-lg px-4 py-2 text-center opacity-90 shadow-xl z-20 transition-opacity duration-300">
                  {`${service.title} service includes exclusive features.`}
                  <div className="absolute w-3 h-3 bg-gray-800 transform rotate-45 -top-1 left-1/2 -translate-x-1/2"></div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
