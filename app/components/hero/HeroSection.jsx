"use client";
// import { useState } from "react";

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     "/images/destination1.jpg", // Add paths to your images
//     "/images/destination2.jpg",
//     "/images/destination3.jpg",
//   ];

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Carousel Background */}
//       <div className="absolute inset-0">
//         <img
//           src={slides[currentSlide]}
//           alt="Destination"
//           className="w-full h-full object-cover transition-all duration-700"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
//       </div>

//       {/* Carousel Controls */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full"
//       >
//         ◀
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full"
//       >
//         ▶
//       </button>

//       {/* Hero Content */}
//       <div className="relative z-10 text-white flex flex-col items-center justify-center h-full px-4">
//         {/* Headline and Subheadline */}
//         <h1 className="text-4xl md:text-6xl font-bold text-center">
//           Explore the World with Ideal Trip
//         </h1>
//         <p className="text-lg md:text-2xl mt-4 text-center">
//           Your One-Stop Solution for Tours, Transport, and Stay.
//         </p>

//         {/* Search Bar */}
//         <div className="mt-8 bg-white rounded-lg shadow-lg p-4 w-full max-w-4xl flex flex-col md:flex-row gap-4">
//           <input
//             type="text"
//             placeholder="Where do you want to go?"
//             className="flex-1 px-4 py-2 border rounded-md focus:outline-none"
//           />
//           <input
//             type="date"
//             placeholder="From"
//             className="px-4 py-2 border rounded-md focus:outline-none"
//           />
//           <input
//             type="date"
//             placeholder="To"
//             className="px-4 py-2 border rounded-md focus:outline-none"
//           />
//           <select className="px-4 py-2 border rounded-md focus:outline-none">
//             <option value="">Service Type</option>
//             <option value="tour">Tour</option>
//             <option value="transport">Transport</option>
//             <option value="room">Room</option>
//           </select>
//           <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//             Search
//           </button>
//         </div>

//         {/* Call-to-Action Buttons */}
//         <div className="mt-6 flex gap-4">
//           <button className="px-6 py-3 bg-orange-500 text-white rounded-md text-lg hover:bg-orange-600">
//             Plan Your Trip
//           </button>
//           <button className="px-6 py-3 bg-white text-orange-500 border-2 border-orange-500 rounded-md text-lg hover:bg-orange-100">
//             Explore Packages
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     "/tours-home.jpg", // Replace with your image paths
//     "/banner.jpg",
//     "/tours-home.jpg",
//   ];

//   // Autoplay logic: Change slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000); // 5000ms = 5 seconds

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, [slides.length]);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Carousel Background */}
//       <div className="absolute inset-0">
//         <img
//           src={slides[currentSlide]}
//           alt={`Slide ${currentSlide + 1}`}
//           className="w-full h-full object-cover transition-all duration-700"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
//       </div>

//       {/* Carousel Controls */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white"
//       >
//         ◀
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white"
//       >
//         ▶
//       </button>

//       {/* Hero Content */}
//       <div className="relative z-10 text-white flex flex-col items-center justify-center h-full px-4">
//         {/* Headline and Subheadline */}
//         <h1 className="text-4xl md:text-6xl font-bold text-center">
//           Explore the World with Ideal Trip
//         </h1>
//         <p className="text-lg md:text-2xl mt-4 text-center">
//           Your One-Stop Solution for Tours, Transport, and Stay.
//         </p>

//         {/* Search Bar */}
//         <div className="mt-8 bg-white rounded-lg shadow-lg p-4 w-full max-w-4xl flex flex-col md:flex-row gap-4">
//           <input
//             type="text"
//             placeholder="Where do you want to go?"
//             className="flex-1 px-4 py-2 border rounded-md focus:outline-none"
//           />
//           <input
//             type="date"
//             className="px-4 py-2 border rounded-md focus:outline-none"
//           />
//           <input
//             type="date"
//             className="px-4 py-2 border rounded-md focus:outline-none"
//           />
//           <select className="px-4 py-2 border rounded-md focus:outline-none">
//             <option value="">Service Type</option>
//             <option value="tour">Tour</option>
//             <option value="transport">Transport</option>
//             <option value="room">Room</option>
//           </select>
//           <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//             Search
//           </button>
//         </div>

//         {/* Call-to-Action Buttons */}
//         <div className="mt-6 flex gap-4">
//           <button className="px-6 py-3 bg-orange-500 text-white rounded-md text-lg hover:bg-orange-600">
//             Plan Your Trip
//           </button>
//           <button className="px-6 py-3 bg-white text-orange-500 border-2 border-orange-500 rounded-md text-lg hover:bg-orange-100">
//             Explore Packages
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     "/tours-home.jpg", // Replace with your image paths
//     "/banner.jpg",
//     "/tours-home.jpg",
//   ];

//   // Autoplay logic: Change slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000); // 5000ms = 5 seconds

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, [slides.length]);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Carousel Background */}
//       <div className="absolute inset-0">
//         <img
//           src={slides[currentSlide]}
//           alt={`Slide ${currentSlide + 1}`}
//           className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
//       </div>

//       {/* Carousel Controls */}
//       <button
//         onClick={prevSlide}
//         aria-label="Previous Slide"
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 p-3 rounded-full hover:bg-white hover:shadow-lg transition"
//       >
//         ◀
//       </button>
//       <button
//         onClick={nextSlide}
//         aria-label="Next Slide"
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 p-3 rounded-full hover:bg-white hover:shadow-lg transition"
//       >
//         ▶
//       </button>

//       {/* Hero Content */}
//       <div className="relative z-10 text-white flex flex-col items-center justify-center h-full px-4">
//         {/* Headline and Subheadline */}
//         <h1 className="text-4xl md:text-6xl font-bold text-center">
//           Explore the World with Ideal Trip
//         </h1>
//         <p className="text-lg md:text-2xl mt-4 text-center">
//           Your One-Stop Solution for Tours, Transport, and Stay.
//         </p>

//         {/* Search Bar */}
//         <div className="mt-8 bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl flex flex-col md:flex-row gap-4">
//           <input
//             type="text"
//             placeholder="Where do you want to go?"
//             className="flex-1 px-4 py-2  border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//           />
//           <input
//             type="date"
//             className="px-4 py-2 text-black border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//           />
//           <input
//             type="date"
//             className="px-4 py-2 text-black border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//           />
//           <select className="px-4 py-2 text-black border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
//             <option value="">Service Type</option>
//             <option value="tour">Tour</option>
//             <option value="transport">Transport</option>
//             <option value="room">Room</option>
//           </select>
//           <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
//             Search
//           </button>
//         </div>

//         {/* Call-to-Action Buttons */}
//         <div className="mt-6 flex gap-4">
//           <button className="px-6 py-3 bg-orange-500 text-white rounded-md text-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300">
//             Plan Your Trip
//           </button>
//           <button className="px-6 py-3 bg-white text-orange-500 border-2 border-orange-500 rounded-md text-lg hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300">
//             Explore Packages
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [searchData, setSearchData] = useState({
//     destination: "",
//     startDate: "",
//     endDate: "",
//     serviceType: "",
//   });

//   const slides = [
//     "/images/hero-1.jpg", // Replace with your image paths
//     "/images/hero-2.jpg",
//     "/images/hero-3.jpg",
//   ];

//   // Autoplay logic: Change slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000); // 5000ms = 5 seconds

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, [slides.length]);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setSearchData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Build search query string
//   const buildSearchQuery = () => {
//     const { destination, startDate, endDate, serviceType } = searchData;
//     return `/search?destination=${destination}&startDate=${startDate}&endDate=${endDate}&serviceType=${serviceType}`;
//   };

//   const isSearchValid = () => {
//     const { destination, startDate, endDate, serviceType } = searchData;
//     return destination && startDate && endDate && serviceType;
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Carousel Background */}
//       <div className="absolute inset-0">
//         {/* <img
//           src={slides[currentSlide]}
//           alt={`Slide ${currentSlide + 1}`}
//           className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
//         /> */}
//         <Image
//           src={slides[currentSlide]}
//           alt={`Slide ${currentSlide + 1}`}
//           layout="fill"
//           objectFit="cover"
//         />

//         <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
//       </div>

//       {/* Carousel Controls */}
//       <button
//         onClick={prevSlide}
//         aria-label="Previous Slide"
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 p-3 rounded-full  hover:bg-white hover:shadow-lg transition"
//       >
//         ◀
//       </button>
//       <button
//         onClick={nextSlide}
//         aria-label="Next Slide"
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 p-3 rounded-full hover:bg-white hover:shadow-lg transition"
//       >
//         ▶
//       </button>

//       {/* Hero Content */}
//       <div className="relative z-10 text-white flex flex-col items-center justify-center h-full px-4">
//         {/* Headline and Subheadline */}
//         <h1 className="text-4xl md:text-6xl font-bold text-center">
//           Explore the World with Ideal Trip
//         </h1>
//         <p className="text-lg md:text-2xl mt-4 text-center">
//           Your One-Stop Solution for Tours, Transport, and Stay.
//         </p>

//         {/* Search Bar */}
//         <div className="mt-8 bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl flex flex-col md:flex-row gap-4">
//           <input
//             type="text"
//             name="destination"
//             placeholder="Where do you want to go?"
//             value={searchData.destination}
//             onChange={handleInputChange}
//             className="flex-1 px-4 py-2 border text-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//           />
//           <input
//             type="date"
//             name="startDate"
//             value={searchData.startDate}
//             onChange={handleInputChange}
//             className="px-4 py-2 border text-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//           />
//           <input
//             type="date"
//             name="endDate"
//             value={searchData.endDate}
//             onChange={handleInputChange}
//             className="px-4 py-2 border text-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//           />
//           <select
//             name="serviceType"
//             value={searchData.serviceType}
//             onChange={handleInputChange}
//             className="px-4 py-2 border text-black  rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//           >
//             <option value="">Service Type</option>
//             <option value="tour">Tour</option>
//             <option value="transport">Transport</option>
//             <option value="room">Room</option>
//           </select>
//           {isSearchValid() ? (
//             <Link
//               href={buildSearchQuery()}
//               className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
//             >
//               Search
//             </Link>
//           ) : (
//             <button
//               onClick={() =>
//                 alert("Please fill in all fields before searching.")
//               }
//               className="px-6 py-2 bg-gray-400 text-white rounded-md cursor-not-allowed"
//             >
//               Search
//             </button>
//           )}
//         </div>

//         {/* Call-to-Action Buttons */}
//         <div className="mt-6 flex gap-4">
//           <button className="px-6 py-3 bg-orange-500 text-white rounded-md text-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300">
//             Plan Your Trip
//           </button>
//           <button className="px-6 py-3 bg-white text-orange-500 border-2 border-orange-500 rounded-md text-lg hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300">
//             Explore Packages
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [searchData, setSearchData] = useState({
//     destination: "",
//     startDate: "",
//     endDate: "",
//     serviceType: "",
//   });
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
//   const inputRef = useRef(null);

//   const slides = [
//     "/images/hero-1.jpg",
//     "/images/hero-2.jpg",
//     "/images/hero-3.jpg",
//   ];

//   const suggestions = [
//     "Hunza Valley",
//     "Skardu",
//     "Swat Valley",
//     "Murree",
//     "Fairy Meadows",
//     "Naran & Kaghan",
//     "Neelum Valley",
//     "Lahore",
//     "Karachi",
//     "Islamabad",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (inputRef.current && !inputRef.current.contains(event.target)) {
//         setShowSuggestions(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setSearchData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (name === "destination") {
//       const matches = suggestions.filter((place) =>
//         place.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredSuggestions(matches);
//       setShowSuggestions(true);
//     }
//   };

//   const handleSuggestionSelect = (suggestion) => {
//     setSearchData((prev) => ({
//       ...prev,
//       destination: suggestion,
//     }));
//     setShowSuggestions(false);
//   };

//   const buildSearchQuery = () => {
//     const { destination, startDate, endDate, serviceType } = searchData;
//     return `/search?destination=${encodeURIComponent(
//       destination
//     )}&startDate=${startDate}&endDate=${endDate}&serviceType=${serviceType}`;
//   };

//   const isSearchValid = () => {
//     const { destination, startDate, endDate, serviceType } = searchData;
//     return destination && startDate && endDate && serviceType;
//   };

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background Carousel */}
//       <div className="absolute inset-0">
//         <Image
//           src={slides[currentSlide]}
//           alt={`Slide ${currentSlide + 1}`}
//           layout="fill"
//           objectFit="cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
//       </div>

//       {/* Carousel Controls */}
//       <button
//         onClick={prevSlide}
//         aria-label="Previous Slide"
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 p-3 rounded-full hover:bg-white hover:shadow-lg transition"
//       >
//         ◀
//       </button>
//       <button
//         onClick={nextSlide}
//         aria-label="Next Slide"
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 p-3 rounded-full hover:bg-white hover:shadow-lg transition"
//       >
//         ▶
//       </button>

//       {/* Hero Content */}
//       <div className="relative z-10 text-white flex flex-col items-center justify-center h-full px-4">
//         <h1 className="text-4xl md:text-6xl font-bold text-center">
//           Explore the World with Ideal Trip
//         </h1>
//         <p className="text-lg md:text-2xl mt-4 text-center">
//           Your One-Stop Solution for Tours, Transport, and Stay.
//         </p>

//         {/* Search Bar */}
//         <div
//           className="mt-8 bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl relative"
//           ref={inputRef}
//         >
//           <div className="flex flex-col md:flex-row gap-4">
//             {/* Destination Input with Suggestions */}
//             <div className="relative flex-1">
//               <input
//                 type="text"
//                 name="destination"
//                 placeholder="Where do you want to go?"
//                 value={searchData.destination}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//               />
//               {showSuggestions && filteredSuggestions.length > 0 && (
//                 <ul className="absolute z-20 w-full bg-white border rounded-md shadow-lg mt-1">
//                   {filteredSuggestions.map((suggestion, index) => (
//                     <li
//                       key={index}
//                       className="px-4 py-2 text-black hover:bg-blue-100 cursor-pointer"
//                       onClick={() => handleSuggestionSelect(suggestion)}
//                     >
//                       {suggestion}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             {/* Date Inputs */}
//             <input
//               type="date"
//               name="startDate"
//               value={searchData.startDate}
//               onChange={handleInputChange}
//               className="px-4 py-2 border text-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             />
//             <input
//               type="date"
//               name="endDate"
//               value={searchData.endDate}
//               onChange={handleInputChange}
//               className="px-4 py-2 border text-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             />

//             {/* Service Type Dropdown */}
//             <select
//               name="serviceType"
//               value={searchData.serviceType}
//               onChange={handleInputChange}
//               className="px-4 py-2 border text-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             >
//               <option value="">Service Type</option>
//               <option value="tour">Tour</option>
//               <option value="transport">Transport</option>
//               <option value="room">Room</option>
//             </select>
//           </div>

//           {/* Search Button */}
//           <div className="mt-4">
//             {isSearchValid() ? (
//               <Link
//                 href={buildSearchQuery()}
//                 className="block w-full px-6 py-3 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
//               >
//                 Search
//               </Link>
//             ) : (
//               <button
//                 disabled
//                 className="block w-full px-6 py-3 bg-gray-400 text-white text-center rounded-md cursor-not-allowed"
//               >
//                 Search
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchData, setSearchData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    serviceType: "",
  });
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const inputRef = useRef(null);

  const slides = [
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
  ];

  const suggestions = [
    "Hunza Valley",
    "Skardu",
    "Swat Valley",
    "Murree",
    "Fairy Meadows",
    "Naran & Kaghan",
    "Neelum Valley",
    "Lahore",
    "Karachi",
    "Islamabad",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "destination") {
      setSearchData((prev) => ({
        ...prev,
        destination: value,
      }));

      const matches = suggestions.filter((place) =>
        place.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredSuggestions(matches);
      setShowSuggestions(true);
    } else {
      setSearchData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSuggestionSelect = (suggestion) => {
    setSearchData((prev) => ({
      ...prev,
      destination: suggestion,
    }));
    setShowSuggestions(false);
  };

  const buildSearchQuery = () => {
    const { destination, startDate, endDate, serviceType } = searchData;
    return `/search?destination=${encodeURIComponent(
      destination
    )}&startDate=${startDate}&endDate=${endDate}&serviceType=${serviceType}`;
  };

  const isSearchValid = () => {
    const { destination, startDate, endDate, serviceType } = searchData;
    return (
      suggestions.includes(destination) && startDate && endDate && serviceType
    );
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <Image
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 p-3 rounded-full hover:bg-white hover:shadow-lg transition"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 p-3 rounded-full hover:bg-white hover:shadow-lg transition"
      >
        ▶
      </button>

      {/* Hero Content */}
      <div className="relative z-10 text-white flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Explore the World with Ideal Trip
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-center">
          Your One-Stop Solution for Tours, Transport, and Stay.
        </p>

        {/* Search Bar */}
        <div
          className="mt-8 bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl relative"
          ref={inputRef}
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Destination Input with Suggestions */}
            <div className="relative flex-1">
              <input
                type="text"
                name="destination"
                placeholder="Where do you want to go?"
                value={searchData.destination}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              {showSuggestions && filteredSuggestions.length > 0 && (
                <ul className="absolute z-20 w-full bg-white border rounded-md shadow-lg mt-1 max-h-40 overflow-y-auto">
                  {filteredSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 text-black hover:bg-blue-100 cursor-pointer"
                      onClick={() => handleSuggestionSelect(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Date Inputs */}
            <input
              type="date"
              name="startDate"
              value={searchData.startDate}
              onChange={handleInputChange}
              className="px-4 py-2 border text-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="date"
              name="endDate"
              value={searchData.endDate}
              onChange={handleInputChange}
              className="px-4 py-2 border text-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />

            {/* Service Type Dropdown */}
            <select
              name="serviceType"
              value={searchData.serviceType}
              onChange={handleInputChange}
              className="px-4 py-2 border text-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="">Service Type</option>
              <option value="tour">Tour Guide</option>
              <option value="room">Tour Packages</option>
              <option value="transport">Transport</option>
              <option value="room">Room</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="mt-4">
            {isSearchValid() ? (
              <Link
                // href={buildSearchQuery()}
                href={"/search-results"}
                className="block w-full px-6 py-3 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Search
              </Link>
            ) : (
              <button
                disabled
                className="block w-full px-6 py-3 bg-gray-400 text-white text-center rounded-md cursor-not-allowed"
              >
                Search
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
