// "use client";
// import { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// export default function FeaturedPackages() {
//   const packages = [
//     {
//       id: 1,
//       thumbnail: "/dubai-adventure.jpg",
//       title: "Dubai Adventure – 5 Days/4 Nights",
//       price: "$999",
//       description:
//         "Experience the best of Dubai with guided tours and luxury stays.",
//       tag: "Most Popular",
//     },
//     {
//       id: 2,
//       thumbnail: "/maldives-getaway.jpg",
//       title: "Maldives Getaway – 7 Days/6 Nights",
//       price: "$1,799",
//       description: "Relax on pristine beaches with premium accommodations.",
//       tag: "Hot Deal",
//     },
//     {
//       id: 3,
//       thumbnail: "/paris-romance.jpg",
//       title: "Paris Romance – 3 Days/2 Nights",
//       price: "$799",
//       description: "A romantic escape to the city of love.",
//       tag: "Limited Time Offer",
//     },
//     {
//       id: 4,
//       thumbnail: "/thailand-adventure.jpg",
//       title: "Thailand Adventure – 6 Days/5 Nights",
//       price: "$1,199",
//       description: "Discover exotic Thailand with adventure-filled activities.",
//       tag: "Best Seller",
//     },
//     {
//       id: 5,
//       thumbnail: "/new-zealand.jpg",
//       title: "New Zealand Escape – 10 Days/9 Nights",
//       price: "$2,499",
//       description: "Explore the stunning landscapes of New Zealand.",
//       tag: "Recommended",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handlePrevSlide = () =>
//     setCurrentSlide((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
//   const handleNextSlide = () =>
//     setCurrentSlide((prev) => (prev + 1) % packages.length);

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
//           Featured Packages
//         </h2>
//         <p className="text-lg text-gray-600 text-center mb-12">
//           Explore our top packages crafted for unforgettable experiences.
//         </p>

//         {/* Carousel Container */}
//         <div className="relative">
//           <div className="flex overflow-hidden">
//             {/* Slider Content */}
//             {packages.map((pkg, index) => (
//               <div
//                 key={pkg.id}
//                 className={`min-w-full transform transition-transform duration-500 ${
//                   index === currentSlide
//                     ? "translate-x-0"
//                     : index < currentSlide
//                     ? "-translate-x-full"
//                     : "translate-x-full"
//                 }`}
//               >
//                 {/* Package Card */}
//                 <div className="p-6 bg-gray-50 rounded-lg shadow-md">
//                   {/* Thumbnail */}
//                   <div className="relative">
//                     <img
//                       src={pkg.thumbnail}
//                       alt={pkg.title}
//                       className="w-full h-64 object-cover rounded-lg"
//                     />
//                     {pkg.tag && (
//                       <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-md text-sm shadow-lg">
//                         {pkg.tag}
//                       </span>
//                     )}
//                   </div>
//                   {/* Details */}
//                   <div className="mt-4">
//                     <h3 className="text-2xl font-semibold text-gray-800">
//                       {pkg.title}
//                     </h3>
//                     <p className="text-gray-600 mt-2">{pkg.description}</p>
//                     <div className="flex items-center justify-between mt-4">
//                       <span className="text-xl font-bold text-green-600">
//                         {pkg.price}
//                       </span>
//                       <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
//                         Book Now
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={handlePrevSlide}
//             className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
//           >
//             <FaArrowLeft className="text-gray-800 text-xl" />
//           </button>
//           <button
//             onClick={handleNextSlide}
//             className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
//           >
//             <FaArrowRight className="text-gray-800 text-xl" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

export default function FeaturedPackages() {
  const packages = [
    {
      id: 1,
      thumbnail: "/banner.jpg",
      title: "Dubai Adventure – 5 Days/4 Nights",
      price: "$999",
      description:
        "Experience the best of Dubai with guided tours and luxury stays.",
      tag: "Most Popular",
    },
    {
      id: 2,
      thumbnail: "/maldives-getaway.jpg",
      title: "Maldives Getaway – 7 Days/6 Nights",
      price: "$1,799",
      description: "Relax on pristine beaches with premium accommodations.",
      tag: "Hot Deal",
    },
    {
      id: 3,
      thumbnail: "/paris-romance.jpg",
      title: "Paris Romance – 3 Days/2 Nights",
      price: "$799",
      description: "A romantic escape to the city of love.",
      tag: "Limited Time Offer",
    },
    {
      id: 4,
      thumbnail: "/thailand-adventure.jpg",
      title: "Thailand Adventure – 6 Days/5 Nights",
      price: "$1,199",
      description: "Discover exotic Thailand with adventure-filled activities.",
      tag: "Best Seller",
    },
    {
      id: 5,
      thumbnail: "/new-zealand.jpg",
      title: "New Zealand Escape – 10 Days/9 Nights",
      price: "$2,499",
      description: "Explore the stunning landscapes of New Zealand.",
      tag: "Recommended",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentSlide]);

  // Handle slide change
  const handlePrevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
  const handleNextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % packages.length);

  // Swipe Handlers
  const handlers = useSwipeable({
    onSwipedLeft: handleNextSlide,
    onSwipedRight: handlePrevSlide,
  });

  return (
    <section className="py-24 bg-white" {...handlers}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
          Featured Packages
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Explore our top packages crafted for unforgettable experiences.
        </p>

        {/* Carousel Container */}
        <div className="relative">
          <div className="flex overflow-hidden">
            {/* Slider Content */}
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`min-w-full transform transition-transform duration-500 ${
                  index === currentSlide
                    ? "translate-x-0"
                    : index < currentSlide
                    ? "-translate-x-full"
                    : "translate-x-full"
                }`}
              >
                {/* Package Card */}
                <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                  {/* Thumbnail */}
                  <div className="relative">
                    <img
                      src={pkg.thumbnail}
                      alt={pkg.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    {pkg.tag && (
                      <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-md text-sm shadow-lg">
                        {pkg.tag}
                      </span>
                    )}
                  </div>
                  {/* Details */}
                  <div className="mt-4">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {pkg.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{pkg.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-green-600">
                        {pkg.price}
                      </span>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
          >
            <FaArrowLeft className="text-gray-800 text-xl" />
          </button>
          <button
            onClick={handleNextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
          >
            <FaArrowRight className="text-gray-800 text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
