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

// "use client";
// import { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { useSwipeable } from "react-swipeable";

// export default function FeaturedPackages() {
//   const packages = [
//     {
//       id: 1,
//       thumbnail: "/banner.jpg",
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

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextSlide();
//     }, 5000);
//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [currentSlide]);

//   // Handle slide change
//   const handlePrevSlide = () =>
//     setCurrentSlide((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
//   const handleNextSlide = () =>
//     setCurrentSlide((prev) => (prev + 1) % packages.length);

//   // Swipe Handlers
//   const handlers = useSwipeable({
//     onSwipedLeft: handleNextSlide,
//     onSwipedRight: handlePrevSlide,
//   });

//   return (
//     <section className="py-24 bg-white" {...handlers}>
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

// "use client";
// import { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { useSwipeable } from "react-swipeable";

// export default function FeaturedPackages() {
//   const packages = [
//     {
//       id: 1,
//       thumbnail: "/images/hero-1.jpg",
//       title: "Naran Kaghan – 5 Days/4 Nights",
//       price: "PKR 35,000",
//       description:
//         "Discover the serene beauty of Naran and Kaghan with guided tours and cozy stays.",
//       tag: "Most Popular",
//     },
//     {
//       id: 2,
//       thumbnail: "/images/hero-2.jpg",
//       title: "Hunza Valley – 7 Days/6 Nights",
//       price: "PKR 50,000",
//       description: "Immerse yourself in the breathtaking landscapes of Hunza.",
//       tag: "Hot Deal",
//     },
//     {
//       id: 3,
//       thumbnail: "/images/hero-3.jpg",
//       title: "Swat – 4 Days/3 Nights",
//       price: "PKR 28,000",
//       description: "Explore the Switzerland of the East with luxurious stays.",
//       tag: "Limited Time Offer",
//     },
//     {
//       id: 4,
//       thumbnail: "/skardu.jpg",
//       title: "Skardu Adventure – 6 Days/5 Nights",
//       price: "PKR 60,000",
//       description:
//         "Experience the majestic Skardu with adventure-filled activities.",
//       tag: "Best Seller",
//     },
//     {
//       id: 5,
//       thumbnail: "/karachi.jpg",
//       title: "Karachi City Tour – 3 Days/2 Nights",
//       price: "PKR 20,000",
//       description: "A vibrant city tour of the metropolitan hub of Pakistan.",
//       tag: "Recommended",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextSlide();
//     }, 5000);
//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [currentSlide]);

//   // Handle slide change
//   const handlePrevSlide = () =>
//     setCurrentSlide((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
//   const handleNextSlide = () =>
//     setCurrentSlide((prev) => (prev + 1) % packages.length);

//   // Swipe Handlers
//   const handlers = useSwipeable({
//     onSwipedLeft: handleNextSlide,
//     onSwipedRight: handlePrevSlide,
//   });

//   return (
//     <section className="py-24 bg-white" {...handlers}>
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
//           Featured Packages
//         </h2>
//         <p className="text-lg text-gray-600 text-center mb-12">
//           Explore the best travel packages across Pakistan for unforgettable
//           experiences.
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

// "use client";
// import { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { useSwipeable } from "react-swipeable";

// export default function FeaturedPackages() {
//   const packages = [
//     {
//       id: 1,
//       thumbnail: "/images/hero-1.jpg",
//       title: "Naran Kaghan – 5 Days/4 Nights",
//       price: "PKR 35,000",
//       description:
//         "Discover the serene beauty of Naran and Kaghan with guided tours and cozy stays.",
//       tag: "Most Popular",
//     },
//     {
//       id: 2,
//       thumbnail: "/images/hero-2.jpg",
//       title: "Hunza Valley – 7 Days/6 Nights",
//       price: "PKR 50,000",
//       description: "Immerse yourself in the breathtaking landscapes of Hunza.",
//       tag: "Hot Deal",
//     },
//     {
//       id: 3,
//       thumbnail: "/images/hero-3.jpg",
//       title: "Swat – 4 Days/3 Nights",
//       price: "PKR 28,000",
//       description: "Explore the Switzerland of the East with luxurious stays.",
//       tag: "Limited Time Offer",
//     },
//     {
//       id: 4,
//       thumbnail: "/images/hero-1.jpg",
//       title: "Skardu Adventure – 6 Days/5 Nights",
//       price: "PKR 60,000",
//       description:
//         "Experience the majestic Skardu with adventure-filled activities.",
//       tag: "Best Seller",
//     },
//     {
//       id: 5,
//       thumbnail: "/images/hero-2.jpg",
//       title: "Karachi City Tour – 3 Days/2 Nights",
//       price: "PKR 20,000",
//       description: "A vibrant city tour of the metropolitan hub of Pakistan.",
//       tag: "Recommended",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextSlide();
//     }, 5000);
//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [currentSlide]);

//   // Handle slide change
//   const handlePrevSlide = () =>
//     setCurrentSlide((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
//   const handleNextSlide = () =>
//     setCurrentSlide((prev) => (prev + 1) % packages.length);

//   // Swipe Handlers
//   const handlers = useSwipeable({
//     onSwipedLeft: handleNextSlide,
//     onSwipedRight: handlePrevSlide,
//   });

//   return (
//     <section className="py-24 bg-white" {...handlers}>
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
//           Featured Packages
//         </h2>
//         <p className="text-lg text-gray-600 text-center mb-12">
//           Explore the best travel packages across Pakistan for unforgettable
//           experiences.
//         </p>

//         {/* Carousel Container */}
//         <div className="relative overflow-hidden">
//           <div
//             className="flex transition-transform duration-500"
//             style={{
//               transform: `translateX(-${currentSlide * 100}%)`,
//               width: `${packages.length * 100}%`,
//             }}
//           >
//             {/* Slider Content */}
//             {packages.map((pkg) => (
//               <div
//                 key={pkg.id}
//                 className="flex-shrink-0 w-full p-6 bg-gray-50 rounded-lg shadow-md"
//                 style={{ width: "100%" }}
//               >
//                 {/* Package Card */}
//                 <div>
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

// "use client";
// import { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { useSwipeable } from "react-swipeable";

// export default function FeaturedPackages() {
//   const packages = [
//     {
//       id: 1,
//       thumbnail: "/images/hero-1.jpg",
//       title: "Naran Kaghan – 5 Days/4 Nights",
//       price: "PKR 35,000",
//       description:
//         "Discover the serene beauty of Naran and Kaghan with guided tours and cozy stays.",
//       tag: "Most Popular",
//     },
//     {
//       id: 2,
//       thumbnail: "/images/hero-2.jpg",
//       title: "Hunza Valley – 7 Days/6 Nights",
//       price: "PKR 50,000",
//       description: "Immerse yourself in the breathtaking landscapes of Hunza.",
//       tag: "Hot Deal",
//     },
//     {
//       id: 3,
//       thumbnail: "/images/hero-3.jpg",
//       title: "Swat – 4 Days/3 Nights",
//       price: "PKR 28,000",
//       description: "Explore the Switzerland of the East with luxurious stays.",
//       tag: "Limited Time Offer",
//     },
//     {
//       id: 4,
//       thumbnail: "/images/hero-1.jpg",
//       title: "Skardu Adventure – 6 Days/5 Nights",
//       price: "PKR 60,000",
//       description:
//         "Experience the majestic Skardu with adventure-filled activities.",
//       tag: "Best Seller",
//     },
//     {
//       id: 5,
//       thumbnail: "/images/hero-2.jpg",
//       title: "Karachi City Tour – 3 Days/2 Nights",
//       price: "PKR 20,000",
//       description: "A vibrant city tour of the metropolitan hub of Pakistan.",
//       tag: "Recommended",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   // Slide Navigation Handlers
//   const handlePrevSlide = () =>
//     setCurrentSlide((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
//   const handleNextSlide = () =>
//     setCurrentSlide((prev) => (prev + 1) % packages.length);

//   // Swipe Handlers
//   const handlers = useSwipeable({
//     onSwipedLeft: handleNextSlide,
//     onSwipedRight: handlePrevSlide,
//   });

//   return (
//     <section className="py-24 bg-white" {...handlers}>
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
//           Featured Packages
//         </h2>
//         <p className="text-lg text-gray-600 text-center mb-12">
//           Explore the best travel packages across Pakistan for unforgettable
//           experiences.
//         </p>

//         {/* Carousel Container */}
//         <div className="relative overflow-hidden">
//           {/* Slides Wrapper */}
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentSlide * 100}%)`,
//             }}
//           >
//             {packages.map((pkg) => (
//               <div
//                 key={pkg.id}
//                 className="w-full flex-shrink-0"
//                 style={{ flexBasis: "100%" }}
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

// "use client";
// import { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { useSwipeable } from "react-swipeable";

// export default function FeaturedPackages() {
//   const packages = [
//     {
//       id: 1,
//       thumbnail: "/images/hero-1.jpg",
//       title: "Naran Kaghan – 5 Days/4 Nights",
//       price: "PKR 35,000",
//       description:
//         "Discover the serene beauty of Naran and Kaghan with guided tours and cozy stays.",
//       tag: "Most Popular",
//     },
//     {
//       id: 2,
//       thumbnail: "/images/hero-2.jpg",
//       title: "Hunza Valley – 7 Days/6 Nights",
//       price: "PKR 50,000",
//       description: "Immerse yourself in the breathtaking landscapes of Hunza.",
//       tag: "Hot Deal",
//     },
//     {
//       id: 3,
//       thumbnail: "/images/hero-3.jpg",
//       title: "Swat – 4 Days/3 Nights",
//       price: "PKR 28,000",
//       description: "Explore the Switzerland of the East with luxurious stays.",
//       tag: "Limited Time Offer",
//     },
//     {
//       id: 4,
//       thumbnail: "/images/hero-1.jpg",
//       title: "Skardu Adventure – 6 Days/5 Nights",
//       price: "PKR 60,000",
//       description:
//         "Experience the majestic Skardu with adventure-filled activities.",
//       tag: "Best Seller",
//     },
//     {
//       id: 5,
//       thumbnail: "/images/hero-2.jpg",
//       title: "Karachi City Tour – 3 Days/2 Nights",
//       price: "PKR 20,000",
//       description: "A vibrant city tour of the metropolitan hub of Pakistan.",
//       tag: "Recommended",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % packages.length);
//     }, 5000);

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, [packages.length]); // Dependency only on the total slides

//   // Slide Navigation Handlers
//   const handlePrevSlide = () =>
//     setCurrentSlide((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
//   const handleNextSlide = () =>
//     setCurrentSlide((prev) => (prev + 1) % packages.length);

//   // Swipe Handlers
//   const handlers = useSwipeable({
//     onSwipedLeft: handleNextSlide,
//     onSwipedRight: handlePrevSlide,
//   });

//   return (
//     <section className="py-24 bg-white" {...handlers}>
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
//           Featured Packages
//         </h2>
//         <p className="text-lg text-gray-600 text-center mb-12">
//           Explore the best travel packages across Pakistan for unforgettable
//           experiences.
//         </p>

//         {/* Carousel Container */}
//         <div className="relative overflow-hidden">
//           {/* Slides Wrapper */}
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentSlide * 100}%)`,
//             }}
//           >
//             {packages.map((pkg) => (
//               <div
//                 key={pkg.id}
//                 className="w-full flex-shrink-0"
//                 style={{ flexBasis: "100%" }}
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

// "use client";
// import { useState, useEffect, useRef } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { useSwipeable } from "react-swipeable";

// export default function FeaturedPackages() {
//   const packages = [
//     {
//       id: 1,
//       thumbnail: "/images/hero-1.jpg",
//       title: "Naran Kaghan – 5 Days/4 Nights",
//       price: "PKR 35,000",
//       description:
//         "Discover the serene beauty of Naran and Kaghan with guided tours and cozy stays.",
//       tag: "Most Popular",
//     },
//     {
//       id: 2,
//       thumbnail: "/images/hero-2.jpg",
//       title: "Hunza Valley – 7 Days/6 Nights",
//       price: "PKR 50,000",
//       description: "Immerse yourself in the breathtaking landscapes of Hunza.",
//       tag: "Hot Deal",
//     },
//     {
//       id: 3,
//       thumbnail: "/images/hero-3.jpg",
//       title: "Swat – 4 Days/3 Nights",
//       price: "PKR 28,000",
//       description: "Explore the Switzerland of the East with luxurious stays.",
//       tag: "Limited Time Offer",
//     },
//     {
//       id: 4,
//       thumbnail: "/images/hero-1.jpg",
//       title: "Skardu Adventure – 6 Days/5 Nights",
//       price: "PKR 60,000",
//       description:
//         "Experience the majestic Skardu with adventure-filled activities.",
//       tag: "Best Seller",
//     },
//     {
//       id: 5,
//       thumbnail: "/images/hero-2.jpg",
//       title: "Karachi City Tour – 3 Days/2 Nights",
//       price: "PKR 20,000",
//       description: "A vibrant city tour of the metropolitan hub of Pakistan.",
//       tag: "Recommended",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const isTransitioning = useRef(false); // Prevent multiple transitions

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextSlide();
//     }, 5000);

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []); // Only run on mount

//   // Slide Navigation Handlers
//   const handlePrevSlide = () => {
//     if (isTransitioning.current) return;
//     isTransitioning.current = true;
//     setTimeout(() => (isTransitioning.current = false), 500); // Animation duration
//     setCurrentSlide((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
//   };

//   const handleNextSlide = () => {
//     if (isTransitioning.current) return;
//     isTransitioning.current = true;
//     setTimeout(() => (isTransitioning.current = false), 500); // Animation duration
//     setCurrentSlide((prev) => (prev + 1) % packages.length);
//   };

//   // Swipe Handlers
//   const handlers = useSwipeable({
//     onSwipedLeft: handleNextSlide,
//     onSwipedRight: handlePrevSlide,
//   });

//   return (
//     <section className="py-24 bg-white" {...handlers}>
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
//           Featured Packages
//         </h2>
//         <p className="text-lg text-gray-600 text-center mb-12">
//           Explore the best travel packages across Pakistan for unforgettable
//           experiences.
//         </p>

//         {/* Carousel Container */}
//         <div className="relative overflow-hidden">
//           {/* Slides Wrapper */}
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentSlide * 100}%)`,
//               willChange: "transform", // Enable GPU acceleration
//             }}
//           >
//             {packages.map((pkg) => (
//               <div
//                 key={pkg.id}
//                 className="w-full flex-shrink-0"
//                 style={{ flexBasis: "100%" }}
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

// "use client";
// import Image from "next/image";
// import { useState, useRef } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { useSwipeable } from "react-swipeable";

// export default function FeaturedPackages() {
//   const packages = [
//     {
//       id: 1,
//       thumbnail: "/images/hero-3.jpg",
//       title: "Naran Kaghan – 5 Days/4 Nights",
//       price: "PKR 35,000",
//       description:
//         "Discover the serene beauty of Naran and Kaghan with guided tours and cozy stays.",
//       tag: "Most Popular",
//     },
//     // {
//     //   id: 2,
//     //   thumbnail: "/images/hero-1.jpg",
//     //   title: "Hunza Valley – 7 Days/6 Nights",
//     //   price: "PKR 50,000",
//     //   description: "Immerse yourself in the breathtaking landscapes of Hunza.",
//     //   tag: "Hot Deal",
//     // },
//     // {
//     //   id: 3,
//     //   thumbnail: "/images/hero-3.jpg",
//     //   title: "Swat – 4 Days/3 Nights",
//     //   price: "PKR 28,000",
//     //   description: "Explore the Switzerland of the East with luxurious stays.",
//     //   tag: "Limited Time Offer",
//     // },
//     // {
//     //   id: 4,
//     //   thumbnail: "/images/hero-3.jpg",
//     //   title: "Skardu Adventure – 6 Days/5 Nights",
//     //   price: "PKR 60,000",
//     //   description:
//     //     "Experience the majestic Skardu with adventure-filled activities.",
//     //   tag: "Best Seller",
//     // },
//     // {
//     //   id: 5,
//     //   thumbnail: "/images/hero-3.jpg",
//     //   title: "Karachi City Tour – 3 Days/2 Nights",
//     //   price: "PKR 20,000",
//     //   description: "A vibrant city tour of the metropolitan hub of Pakistan.",
//     //   tag: "Recommended",
//     // },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const isTransitioning = useRef(false); // Prevent multiple transitions

//   // Slide Navigation Handlers
//   const handlePrevSlide = () => {
//     if (isTransitioning.current) return;
//     isTransitioning.current = true;
//     setTimeout(() => (isTransitioning.current = false), 500); // Animation duration
//     setCurrentSlide((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
//   };

//   const handleNextSlide = () => {
//     if (isTransitioning.current) return;
//     isTransitioning.current = true;
//     setTimeout(() => (isTransitioning.current = false), 500); // Animation duration
//     setCurrentSlide((prev) => (prev + 1) % packages.length);
//   };

//   // Swipe Handlers
//   const handlers = useSwipeable({
//     onSwipedLeft: handleNextSlide,
//     onSwipedRight: handlePrevSlide,
//   });

//   return (
//     <section className="py-24 bg-white" {...handlers}>
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
//           Featured Packages
//         </h2>
//         <p className="text-lg text-gray-600 text-center mb-12">
//           Explore the best travel packages across Pakistan for unforgettable
//           experiences.
//         </p>

//         {/* Carousel Container */}
//         <div className="relative overflow-hidden">
//           {/* Slides Wrapper */}
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentSlide * 100}%)`,
//               willChange: "transform", // Enable GPU acceleration
//             }}
//           >
//             {packages.map((pkg) => (
//               <div
//                 key={pkg.id}
//                 className="w-full flex-shrink-0"
//                 style={{ flexBasis: "100%" }}
//               >
//                 {/* Package Card */}
//                 <div className="p-6 bg-gray-50 rounded-lg shadow-md">
//                   {/* Thumbnail */}
//                   {/* <div className="relative">
//                     <img
//                       src={pkg.thumbnail}
//                       alt={pkg.title}
//                       className="w-full h-64 object-cover rounded-lg"
//                       loading="lazy"
//                     />

//                     {pkg.tag && (
//                       <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-md text-sm shadow-lg">
//                         {pkg.tag}
//                       </span>
//                     )}
//                   </div> */}
//                   <div className="relative">
//                     <Image
//                       src={pkg.thumbnail}
//                       alt={pkg.title}
//                       width={500} // Set the desired width
//                       height={256} // Set the desired height
//                       className="w-full h-64 object-cover rounded-lg"
//                       priority={false} // Optionally set priority for above-the-fold images
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

// "use client";
// import Image from "next/image";
// import { useState, useRef } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { useSwipeable } from "react-swipeable";

// export default function FeaturedPackages() {
//   const packages = [
//     {
//       id: 1,
//       thumbnail: "/images/hero-3.jpg",
//       title: "Naran Kaghan – 5 Days/4 Nights",
//       price: "PKR 35,000",
//       description:
//         "Discover the serene beauty of Naran and Kaghan with guided tours and cozy stays.",
//       tag: "Most Popular",
//       tourDate: "2024-12-15",
//       availableSpots: 20,
//     },
//     {
//       id: 2,
//       thumbnail: "/images/hero-1.jpg",
//       title: "Hunza Valley – 7 Days/6 Nights",
//       price: "PKR 50,000",
//       description: "Immerse yourself in the breathtaking landscapes of Hunza.",
//       tag: "Hot Deal",
//       tourDate: "2024-12-20",
//       availableSpots: 15,
//     },
//     {
//       id: 3,
//       thumbnail: "/images/hero-3.jpg",
//       title: "Swat – 4 Days/3 Nights",
//       price: "PKR 28,000",
//       description: "Explore the Switzerland of the East with luxurious stays.",
//       tag: "Limited Time Offer",
//       tourDate: "2024-12-25",
//       availableSpots: 10,
//     },
//     {
//       id: 4,
//       thumbnail: "/images/hero-3.jpg",
//       title: "Skardu Adventure – 6 Days/5 Nights",
//       price: "PKR 60,000",
//       description:
//         "Experience the majestic Skardu with adventure-filled activities.",
//       tag: "Best Seller",
//       tourDate: "2024-12-30",
//       availableSpots: 8,
//     },
//     {
//       id: 5,
//       thumbnail: "/images/hero-3.jpg",
//       title: "Karachi City Tour – 3 Days/2 Nights",
//       price: "PKR 20,000",
//       description: "A vibrant city tour of the metropolitan hub of Pakistan.",
//       tag: "Recommended",
//       tourDate: "2024-12-10",
//       availableSpots: 25,
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const isTransitioning = useRef(false);

//   // Slide Navigation Handlers
//   const handlePrevSlide = () => {
//     if (isTransitioning.current) return;
//     isTransitioning.current = true;
//     setTimeout(() => (isTransitioning.current = false), 500);
//     setCurrentSlide((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
//   };

//   const handleNextSlide = () => {
//     if (isTransitioning.current) return;
//     isTransitioning.current = true;
//     setTimeout(() => (isTransitioning.current = false), 500);
//     setCurrentSlide((prev) => (prev + 1) % packages.length);
//   };

//   // Swipe Handlers
//   const handlers = useSwipeable({
//     onSwipedLeft: handleNextSlide,
//     onSwipedRight: handlePrevSlide,
//   });

//   return (
//     <section className="py-24 bg-white" {...handlers}>
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
//           Featured Packages
//         </h2>
//         <p className="text-lg text-gray-600 text-center mb-12">
//           Explore the best travel packages across Pakistan for unforgettable
//           experiences.
//         </p>

//         {/* Carousel Container */}
//         <div className="relative overflow-hidden">
//           {/* Slides Wrapper */}
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentSlide * 100}%)`,
//               willChange: "transform",
//             }}
//           >
//             {packages.map((pkg) => (
//               <div
//                 key={pkg.id}
//                 className="w-full flex-shrink-0"
//                 style={{ flexBasis: "100%" }}
//               >
//                 {/* Package Card */}
//                 <div className="p-6 bg-gray-100 rounded-lg shadow-md">
//                   {/* Thumbnail */}
//                   <div className="relative">
//                     <Image
//                       src={pkg.thumbnail}
//                       alt={pkg.title}
//                       width={500}
//                       height={256}
//                       className="w-full h-64 object-cover rounded-lg"
//                       priority={false}
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
//                     <div className="text-gray-500 mt-3">
//                       <p>
//                         <strong>Tour Date:</strong> {pkg.tourDate}
//                       </p>
//                       <p>
//                         <strong>Available Spots:</strong> {pkg.availableSpots}
//                       </p>
//                     </div>
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
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const packages = [
  {
    id: 1,
    thumbnail: "/images/hero-3.jpg",
    title: "Naran Kaghan",
    durationDays: 5, // Duration in integer
    price: "PKR 35,000",
    description:
      "Discover the serene beauty of Naran and Kaghan with guided tours and cozy stays.",
    tag: "Most Popular",
    tourDate: "2024-12-15",
    availableSpots: 20,
  },
  {
    id: 2,
    thumbnail: "/images/hero-1.jpg",
    title: "Hunza Valley",
    durationDays: 7, // Duration in integer
    price: "PKR 50,000",
    description: "Immerse yourself in the breathtaking landscapes of Hunza.",
    tag: "Hot Deal",
    tourDate: "2024-12-20",
    availableSpots: 15,
  },
];

export default function FeaturedPackages() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isTransitioning = useRef(false);
  const router = useRouter();
  // Slide Navigation Handlers
  const handlePrevSlide = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setTimeout(() => (isTransitioning.current = false), 500);
    setCurrentSlide((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setTimeout(() => (isTransitioning.current = false), 500);
    setCurrentSlide((prev) => (prev + 1) % packages.length);
  };

  // Swipe Handlers
  const handlers = useSwipeable({
    onSwipedLeft: handleNextSlide,
    onSwipedRight: handlePrevSlide,
  });

  const handleBookNow = (id) => {
    // Navigate to booking page with package ID
    router.push(`/tour-packages/booking?id=${id}`);
  };

  return (
    <section className="py-24 bg-white" {...handlers}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
          Featured Packages
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Explore the best travel packages across Pakistan for unforgettable
          experiences.
        </p>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Slides Wrapper */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              willChange: "transform",
            }}
          >
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="w-full flex-shrink-0"
                style={{ flexBasis: "100%" }}
              >
                {/* Package Card */}
                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                  {/* Thumbnail */}
                  <div className="relative">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.title}
                      width={500}
                      height={256}
                      className="w-full h-64 object-cover rounded-lg"
                      priority={false}
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
                    <p className="text-sm text-gray-500 mt-1">
                      Duration: {pkg.durationDays} Days / {pkg.durationDays - 1}
                      <span> Nights</span>
                    </p>
                    <p className="text-gray-600 mt-2">{pkg.description}</p>
                    <div className="text-gray-500 mt-3">
                      <p>
                        <strong>Tour Date:</strong> {pkg.tourDate}
                      </p>
                      <p>
                        <strong>Available Spots:</strong> {pkg.availableSpots}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-green-600">
                        {pkg.price}
                      </span>
                      <button
                        // onClick={() => handleBookNow(1)}
                        onClick={() => handleBookNow(pkg.id)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                      >
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
