"use client";
// import { useState } from "react";

// export default function TestimonialsAndReviews() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const testimonials = [
//     {
//       id: 1,
//       name: "John Doe",
//       location: "New York, USA",
//       rating: 5,
//       feedback:
//         "Amazing experience! Everything was perfectly organized, and the staff was very helpful.",
//       profilePic: "/john.jpg",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       location: "London, UK",
//       rating: 4.5,
//       feedback:
//         "The trip was fantastic! I loved the hotel and local activities. Highly recommended.",
//       profilePic: "/jane.jpg",
//     },
//     {
//       id: 3,
//       name: "Ali Khan",
//       location: "Lahore, Pakistan",
//       rating: 4,
//       feedback:
//         "Good value for money. The transport was comfortable, and the guide was knowledgeable.",
//       profilePic: "/ali.jpg",
//     },
//   ];

//   const visualContent = {
//     video: "/testimonials-video.mp4", // Replace with your video URL or path
//     userPhotos: ["/photo1.jpg", "/photo2.jpg", "/photo3.jpg"], // Replace with actual paths
//   };

//   const nextSlide = () =>
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//   const prevSlide = () =>
//     setCurrentSlide(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length
//     );

//   return (
//     <section className="bg-gray-50 py-12">
//       <div className="container mx-auto px-6">
//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
//           Testimonials and Reviews
//         </h2>

//         {/* Carousel for Testimonials */}
//         <div className="relative bg-white shadow-lg rounded-lg p-6 overflow-hidden">
//           <button
//             onClick={prevSlide}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-200 p-3 rounded-full hover:bg-gray-300 focus:ring focus:ring-gray-400 transition"
//           >
//             ◀
//           </button>
//           <div className="flex flex-col items-center text-center">
//             <img
//               src={testimonials[currentSlide].profilePic}
//               alt={testimonials[currentSlide].name}
//               className="w-20 h-20 rounded-full object-cover shadow-md mb-4"
//             />
//             <h3 className="text-2xl font-semibold text-gray-800">
//               {testimonials[currentSlide].name}
//             </h3>
//             <p className="text-sm text-gray-600">
//               {testimonials[currentSlide].location}
//             </p>
//             <p className="text-yellow-500 my-2">
//               {"⭐".repeat(Math.floor(testimonials[currentSlide].rating))}{" "}
//               {testimonials[currentSlide].rating.toFixed(1)}/5
//             </p>
//             <p className="text-gray-700 text-sm md:text-base mt-4 max-w-xl">
//               {testimonials[currentSlide].feedback}
//             </p>
//           </div>
//           <button
//             onClick={nextSlide}
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-200 p-3 rounded-full hover:bg-gray-300 focus:ring focus:ring-gray-400 transition"
//           >
//             ▶
//           </button>
//         </div>

//         {/* Visual Content Section */}
//         <div className="mt-12">
//           <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
//             User-Generated Content
//           </h3>
//           <div className="flex flex-col lg:flex-row gap-8 items-center">
//             {/* Video Testimonial */}
//             <div className="w-full lg:w-1/2">
//               <video
//                 src={visualContent.video}
//                 controls
//                 className="rounded-lg shadow-lg w-full"
//               />
//             </div>
//             {/* User Photos */}
//             <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
//               {visualContent.userPhotos.map((photo, index) => (
//                 <img
//                   key={index}
//                   src={photo}
//                   alt={`User Photo ${index + 1}`}
//                   className="w-full h-48 object-cover rounded-lg shadow-md"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";

export default function TestimonialsAndReviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      location: "New York, USA",
      rating: 5,
      feedback:
        "The trip exceeded my expectations! The services were seamless, and the staff was fantastic. Highly recommended.",
      profilePic: "/john.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      location: "London, UK",
      rating: 4.5,
      feedback:
        "From start to finish, everything was flawless. The hotel and activities were exactly as described. Great experience!",
      profilePic: "/jane.jpg",
    },
    {
      id: 3,
      name: "Ali Khan",
      location: "Lahore, Pakistan",
      rating: 4,
      feedback:
        "Comfortable transport, excellent guide, and a memorable experience overall. Worth every penny.",
      profilePic: "/ali.jpg",
    },
  ];

  const visualContent = {
    video: "/testimonials-video.mp4", // Replace with your video URL or path
    userPhotos: ["/photo1.jpg", "/photo2.jpg", "/photo3.jpg"], // Replace with actual paths
  };

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          What Our Customers Say
        </h2>

        {/* Testimonial Carousel */}
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-200 p-3 rounded-full hover:bg-gray-300 focus:ring focus:ring-gray-400 transition z-10"
          >
            ◀
          </button>
          <div className="flex flex-col items-center text-center p-8">
            <img
              src={testimonials[currentSlide].profilePic}
              alt={testimonials[currentSlide].name}
              className="w-24 h-24 rounded-full object-cover shadow-md mb-4 border-4 border-blue-100"
            />
            <h3 className="text-2xl font-semibold text-gray-800">
              {testimonials[currentSlide].name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {testimonials[currentSlide].location}
            </p>
            <div className="flex gap-1 justify-center text-yellow-500 my-2">
              {Array.from({
                length: Math.floor(testimonials[currentSlide].rating),
              }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
              {testimonials[currentSlide].rating % 1 !== 0 && (
                <span className="text-yellow-400">⭐</span>
              )}
            </div>
            <p className="text-gray-700 text-base md:text-lg mt-4 max-w-3xl">
              {testimonials[currentSlide].feedback}
            </p>
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-200 p-3 rounded-full hover:bg-gray-300 focus:ring focus:ring-gray-400 transition z-10"
          >
            ▶
          </button>
        </div>

        {/* Visual Content */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            User Stories and Memories
          </h3>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Video Testimonial */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-lg shadow-lg overflow-hidden">
                <video
                  src={visualContent.video}
                  controls
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            {/* User Photos */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {visualContent.userPhotos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`User Photo ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
