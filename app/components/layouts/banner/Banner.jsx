// import Image from "next/image";
// import React from "react";

// function Banner() {
//   return (
//     <div>
//       {/* <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat "> */}
//       <section className="relative border-b-2 ">
//         {/* <section className="relative bg-[url(/banner.jpg)] bg-blend-darken bg-cover bg-center bg-no-repeat "> */}
//         <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

//         <div className="relative mx-auto  max-w-screen-xl px-4 py-16 sm:py-32  lg:flex lg:justify-between lg:h-screen lg:items-center ">
//           <div className="max-w-xl text-center  ltr:sm:text-left flex flex-col justify-end rtl:sm:text-right">
//             <h1 className="text-3xl text-black font-extrabold sm:text-5xl">
//               Let us find your
//               <strong className="block font-extrabold text-[#4F46E5]">
//                 Forever Home.
//               </strong>
//             </h1>

//             <p className="mt-4 max-w-lg sm:text-xl/relaxed text-black">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
//               illo tenetur fuga ducimus numquam ea!
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4 text-center">
//               <a
//                 href="#home-tours"
//                 className="block w-full rounded bg-[#4F46E5] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#150adb] focus:outline-none focus:ring active:bg-[#150adb] sm:w-auto"
//               >
//                 Get Started
//               </a>

//               <a
//                 href="#"
//                 className="block w-full rounded shadow-md bg-white px-12 py-3 text-sm font-medium text-[#150adb]  hover:text-[#4F46E5] focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
//               >
//                 Learn More
//               </a>
//             </div>
//           </div>
//           <div className="flex items-center justify-end">
//             <Image
//               className=""
//               src="/banner.jpg"
//               alt="Banner Image"
//               width={600}
//               height={600}
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Banner;

// import React from "react";

// export default function Banner() {
//   return (
//     <div className="relative bg-gradient-to-r from-blue-500 to-green-400 text-white">
//       {/* Animated Background Graphics */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-10 left-10 w-40 h-40 bg-white/30 rounded-full animate-pulse"></div>
//         <div className="absolute bottom-10 right-20 w-60 h-60 bg-white/20 rounded-full animate-bounce"></div>
//         <div className="absolute top-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-spin-slow"></div>
//       </div>

//       {/* Content */}
//       <div className="relative max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
//         {/* Left Content */}
//         <div className="text-center lg:text-left">
//           <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
//             Explore the World <br /> with{" "}
//             <span className="text-yellow-300">Our Tours</span>
//           </h1>
//           <p className="mt-4 text-lg text-gray-100">
//             Discover amazing places, unforgettable experiences, and adventures
//             for every traveler.
//           </p>
//           <div className="mt-6 space-x-4">
//             <a
//               href="#tours"
//               className="inline-block px-6 py-3 bg-yellow-300 text-blue-800 font-medium text-lg rounded-lg shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1"
//             >
//               Browse Tours
//             </a>
//             <a
//               href="#contact"
//               className="inline-block px-6 py-3 bg-white text-blue-800 font-medium text-lg rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:-translate-y-1"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>

//         {/* Right Content (Image/Graphic) */}
//         <div className="mt-10 lg:mt-0">
//           <img
//             src="https://via.placeholder.com/400x300"
//             alt="Travel the World"
//             className="rounded-lg shadow-xl transition transform hover:scale-105"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";
// import React from "react";

// export default function AdvancedBanner() {
//   return (
//     <div className="relative bg-gradient-to-br from-indigo-600 to-blue-500 text-white overflow-hidden">
//       {/* Background Animation Elements */}
//       <div className="absolute inset-0">
//         {/* Glowing Circles */}
//         <div className="absolute top-10 left-16 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-16 right-20 w-72 h-72 bg-white/20 rounded-full blur-2xl animate-bounce"></div>
//         <div className="absolute top-24 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-spin-slow"></div>
//       </div>

//       {/* Content */}
//       <div className="relative max-w-7xl mx-auto px-6 sm:px-12 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between">
//         {/* Left Side */}
//         <div className="text-center lg:text-left">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
//             Your Next Adventure <br />
//             <span className="text-yellow-300">Awaits</span>
//           </h1>
//           <p className="mt-4 text-lg text-gray-200">
//             Discover breathtaking destinations, amazing tours, and unforgettable
//             experiences. Let's make your dream journey come true.
//           </p>
//           <div className="mt-6 space-x-4">
//             <a
//               href="#tours"
//               className="inline-block px-8 py-4 bg-yellow-300 text-indigo-800 font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-400 hover:-translate-y-1 transition transform"
//             >
//               Explore Tours
//             </a>
//             <a
//               href="#contact"
//               className="inline-block px-8 py-4 bg-white text-indigo-800 font-semibold text-lg rounded-lg shadow-lg hover:bg-gray-200 hover:-translate-y-1 transition transform"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>

//         {/* Right Side - Image */}
//         <div className="mt-10 lg:mt-0 relative">
//           <div className="flex items-center justify-end">
//             <Image
//               className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
//               src="/banner.jpg"
//               alt="Banner Image"
//               width={400}
//               height={300}
//             />
//           </div>
//           {/* Decorative Badge */}
//           <div className="absolute top-0 left-0 bg-yellow-300 text-indigo-800 font-semibold px-4 py-2 rounded-br-lg shadow-lg">
//             Popular Destination
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import React from "react";

export default function AdvancedBanner() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-600 to-blue-500 text-white overflow-hidden shadow-lg">
      {/* Background Animation Elements */}
      <div className="absolute inset-0">
        {/* Glowing Elements */}
        <div className="absolute top-10 left-16 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-20 w-72 h-72 bg-white/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-24 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-spin-slow"></div>
        {/* Gradient Highlight */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="text-center lg:text-left z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
            Your Next Adventure <br />
            <span className="text-yellow-300">Awaits You</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Discover breathtaking destinations, amazing tours, and unforgettable
            experiences tailored just for you.
          </p>
          <div className="mt-6 space-x-4">
            <a
              href="#tours"
              className="inline-block px-8 py-4 bg-yellow-300 text-indigo-800 font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-400 hover:-translate-y-1 transition transform"
            >
              Explore Tours
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-indigo-800 font-semibold text-lg rounded-lg shadow-lg hover:bg-gray-200 hover:-translate-y-1 transition transform"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="mt-10 lg:mt-0 relative z-10">
          <div className="relative flex items-center justify-end">
            <Image
              className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
              src="/banner.jpg"
              alt="Explore the World"
              width={500}
              height={400}
              priority
            />
            {/* Decorative Ribbon */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-300 rounded-full animate-pulse"></div>
          </div>
          {/* Decorative Badge */}
          <div className="absolute top-0 left-0 bg-yellow-300 text-indigo-800 font-semibold px-4 py-2 rounded-br-lg shadow-lg">
            Popular Destination
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-32 text-blue-500 fill-current"
        >
          <path
            fillOpacity="1"
            d="M0,256L30,240C60,224,120,192,180,192C240,192,300,224,360,213.3C420,203,480,149,540,122.7C600,96,660,96,720,128C780,160,840,224,900,229.3C960,235,1020,181,1080,165.3C1140,149,1200,171,1260,170.7C1320,171,1380,149,1410,138.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
