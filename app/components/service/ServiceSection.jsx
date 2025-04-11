"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaSuitcase,
  FaBus,
  FaHotel,
  FaMapMarkerAlt,
  FaUserTie,
} from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    // {
    //   icon: <FaSuitcase className="text-5xl text-orange-500" />,
    //   title: "Tour Packages",
    //   description: "Explore curated tours tailored to your preferences.",
    //   link: "/",
    // },
    {
      icon: <FaBus className="text-5xl text-blue-500" />,
      title: "Transport Facilities",
      description: "Convenient transportation options for your journey.",
      link: "/transport",
    },
    {
      icon: <FaHotel className="text-5xl text-green-500" />,
      title: "Hotel Rooms",
      description: "Comfortable stays in top-rated hotels.",
      link: "/transport",
    },
    {
      icon: <FaMapMarkerAlt className="text-5xl text-purple-500" />,
      title: "Local Accommodations",
      description: "Unique stays in local neighborhoods.",
      link: "/transport",
    },
    {
      icon: <FaUserTie className="text-5xl text-teal-500" />,
      title: "Tour Guide",
      description: "Personalized guidance for your trips.",
      link: "/tourguide",
    },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-8">
          What We Offer
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Discover services designed to make your trips memorable and
          hassle-free.
        </p>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link
              href={`${service.link}`}
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`relative p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform ${
                hovered === index ? "scale-105" : "scale-100"
              }`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center">{service.description}</p>

              {/* Hover Tooltip */}
              {hovered === index && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 bg-gray-800 text-white text-sm rounded-md px-4 py-2 shadow-lg text-center">
                  {`${service.title} service includes exclusive features.`}
                  <div className="absolute w-3 h-3 bg-gray-800 transform rotate-45 top-[-6px] left-1/2 -translate-x-1/2"></div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
