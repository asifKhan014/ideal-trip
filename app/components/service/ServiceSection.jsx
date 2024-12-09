// "use client";
// import { useState } from "react";
// import { FaSuitcase, FaBus, FaHotel, FaMapMarkerAlt } from "react-icons/fa";

// export default function ServicesSection() {
//   const services = [
//     {
//       icon: <FaSuitcase className="text-4xl text-orange-500" />,
//       title: "Tour Packages",
//       description: "Explore curated tours tailored to your preferences.",
//       details: "Choose from guided tours, adventure packages, and more.",
//     },
//     {
//       icon: <FaBus className="text-4xl text-blue-500" />,
//       title: "Transport Facilities",
//       description: "Convenient transportation options for your journey.",
//       details: "Pick from rental cars, shuttles, or private rides.",
//     },
//     {
//       icon: <FaHotel className="text-4xl text-green-500" />,
//       title: "Hotel Rooms",
//       description: "Comfortable stays in top-rated hotels.",
//       details: "Enjoy premium amenities, free Wi-Fi, and more.",
//     },
//     {
//       icon: <FaMapMarkerAlt className="text-4xl text-purple-500" />,
//       title: "Local Area Accommodations",
//       description: "Unique stays in local neighborhoods.",
//       details: "Experience authentic living and cultural immersion.",
//     },
//   ];

//   const [hovered, setHovered] = useState(null);

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
//           What We Offer
//         </h2>
//         <p className="text-lg text-gray-600 mb-12">
//           Discover our services designed to make your trips memorable and
//           hassle-free.
//         </p>

//         {/* Service Cards Grid */}
//         <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               onMouseEnter={() => setHovered(index)}
//               onMouseLeave={() => setHovered(null)}
//               className={`p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform ${
//                 hovered === index ? "scale-105" : "scale-100"
//               }`}
//             >
//               {/* Icon and Title */}
//               <div className="mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-800">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 mt-2">{service.description}</p>

//               {/* Additional Details on Hover */}
//               {hovered === index && (
//                 <p className="mt-4 text-sm text-gray-500">{service.details}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState } from "react";
import { FaSuitcase, FaBus, FaHotel, FaMapMarkerAlt } from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      icon: <FaSuitcase className="text-4xl text-orange-500" />,
      title: "Tour Packages",
      description: "Explore curated tours tailored to your preferences.",
      details: "Choose from guided tours, adventure packages, and more.",
    },
    {
      icon: <FaBus className="text-4xl text-blue-500" />,
      title: "Transport Facilities",
      description: "Convenient transportation options for your journey.",
      details: "Pick from rental cars, shuttles, or private rides.",
    },
    {
      icon: <FaHotel className="text-4xl text-green-500" />,
      title: "Hotel Rooms",
      description: "Comfortable stays in top-rated hotels.",
      details: "Enjoy premium amenities, free Wi-Fi, and more.",
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl text-purple-500" />,
      title: "Local Area Accommodations",
      description: "Unique stays in local neighborhoods.",
      details: "Experience authentic living and cultural immersion.",
    },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8">
          What We Offer
        </h2>
        <p className="text-lg text-gray-600 mb-16">
          Discover services designed to make your trips memorable and
          hassle-free.
        </p>

        {/* Service Cards Grid */}
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`relative p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform transition-transform duration-300 ${
                hovered === index ? "scale-105" : "scale-100"
              }`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{service.description}</p>

              {/* Details Tooltip */}
              {hovered === index && (
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-50px] bg-gray-800 text-white text-sm rounded-lg px-4 py-2 shadow-lg">
                  {service.details}
                  <div className="absolute w-3 h-3 bg-gray-800 transform rotate-45 top-[-6px] left-1/2 -translate-x-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
