// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// function TourGuide() {
//   return (
//     <div id="home-tours" className="py-32 px-6 sm:px-16">
//       <div className="text-3xl sm:text-4xl text-black font-bold mb-8">
//         Choose Prefered Tours
//       </div>
//       <div className="w-full h-[150px] sm:w-full sm:h-[300px] relative px-9 mb-16">
//         <Image
//           src="/tours-home.jpg"
//           layout="fill"
//           objectFit="cover"
//           alt="Tours Home"
//           className="rounded-md"
//         />
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div>
//           <Link
//             href="/tours/tour-details"
//             className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
//           >
//             <img
//               alt=""
//               src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//               className="h-56 w-full rounded-md object-cover"
//             />

//             <div className="mt-2">
//               <dl>
//                 <div>
//                   <dt className="sr-only">Price</dt>

//                   <dd className="text-sm text-gray-500">$240,000</dd>
//                 </div>

//                 <div>
//                   <dt className="sr-only">Address</dt>

//                   <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
//                 </div>
//               </dl>

//               <div className="mt-6 flex items-center gap-8 text-xs">
//                 <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                   <svg
//                     className="size-4 text-indigo-700"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
//                     />
//                   </svg>

//                   <div className="mt-1.5 sm:mt-0">
//                     <p className="text-gray-500">Parking</p>

//                     <p className="font-medium">2 spaces</p>
//                   </div>
//                 </div>

//                 <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                   <svg
//                     className="size-4 text-indigo-700"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//                     />
//                   </svg>

//                   <div className="mt-1.5 sm:mt-0">
//                     <p className="text-gray-500">Bathroom</p>

//                     <p className="font-medium">2 rooms</p>
//                   </div>
//                 </div>

//                 <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                   <svg
//                     className="size-4 text-indigo-700"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//                     />
//                   </svg>

//                   <div className="mt-1.5 sm:mt-0">
//                     <p className="text-gray-500">Bedroom</p>

//                     <p className="font-medium">4 rooms</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </div>
//         <div>
//           <a
//             href="#"
//             className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
//           >
//             <img
//               alt=""
//               src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//               className="h-56 w-full rounded-md object-cover"
//             />

//             <div className="mt-2">
//               <dl>
//                 <div>
//                   <dt className="sr-only">Price</dt>

//                   <dd className="text-sm text-gray-500">$240,000</dd>
//                 </div>

//                 <div>
//                   <dt className="sr-only">Address</dt>

//                   <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
//                 </div>
//               </dl>

//               <div className="mt-6 flex items-center gap-8 text-xs">
//                 <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                   <svg
//                     className="size-4 text-indigo-700"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
//                     />
//                   </svg>

//                   <div className="mt-1.5 sm:mt-0">
//                     <p className="text-gray-500">Parking</p>

//                     <p className="font-medium">2 spaces</p>
//                   </div>
//                 </div>

//                 <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                   <svg
//                     className="size-4 text-indigo-700"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//                     />
//                   </svg>

//                   <div className="mt-1.5 sm:mt-0">
//                     <p className="text-gray-500">Bathroom</p>

//                     <p className="font-medium">2 rooms</p>
//                   </div>
//                 </div>

//                 <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                   <svg
//                     className="size-4 text-indigo-700"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//                     />
//                   </svg>

//                   <div className="mt-1.5 sm:mt-0">
//                     <p className="text-gray-500">Bedroom</p>

//                     <p className="font-medium">4 rooms</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </a>
//         </div>
//         <div>
//           <a
//             href="#"
//             className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
//           >
//             <img
//               alt=""
//               src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//               className="h-56 w-full rounded-md object-cover"
//             />

//             <div className="mt-2">
//               <dl>
//                 <div>
//                   <dt className="sr-only">Price</dt>

//                   <dd className="text-sm text-gray-500">$240,000</dd>
//                 </div>

//                 <div>
//                   <dt className="sr-only">Address</dt>

//                   <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
//                 </div>
//               </dl>

//               <div className="mt-6 flex items-center gap-8 text-xs">
//                 <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                   <svg
//                     className="size-4 text-indigo-700"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
//                     />
//                   </svg>

//                   <div className="mt-1.5 sm:mt-0">
//                     <p className="text-gray-500">Parking</p>

//                     <p className="font-medium">2 spaces</p>
//                   </div>
//                 </div>

//                 <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                   <svg
//                     className="size-4 text-indigo-700"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//                     />
//                   </svg>

//                   <div className="mt-1.5 sm:mt-0">
//                     <p className="text-gray-500">Bathroom</p>

//                     <p className="font-medium">2 rooms</p>
//                   </div>
//                 </div>

//                 <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                   <svg
//                     className="size-4 text-indigo-700"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//                     />
//                   </svg>

//                   <div className="mt-1.5 sm:mt-0">
//                     <p className="text-gray-500">Bedroom</p>

//                     <p className="font-medium">4 rooms</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TourGuide;

import Image from "next/image";
import Link from "next/link";
import React from "react";

// Example data for the cards
const tourData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    price: "$240,000",
    address: "123 Wallaby Avenue, Park Road",
    features: [
      {
        icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
        label: "Parking",
        value: "2 spaces",
      },
      {
        icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
        label: "Bathroom",
        value: "2 rooms",
      },
      {
        icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
        label: "Bedroom",
        value: "4 rooms",
      },
    ],
    link: "/tours/tour-details",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    price: "$240,000",
    address: "123 Wallaby Avenue, Park Road",
    features: [
      {
        icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
        label: "Parking",
        value: "2 spaces",
      },
      {
        icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
        label: "Bathroom",
        value: "2 rooms",
      },
      {
        icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
        label: "Bedroom",
        value: "4 rooms",
      },
    ],
    link: "/tours/tour-details",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    price: "$240,000",
    address: "123 Wallaby Avenue, Park Road",
    features: [
      {
        icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
        label: "Parking",
        value: "2 spaces",
      },
      {
        icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
        label: "Bathroom",
        value: "2 rooms",
      },
      {
        icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
        label: "Bedroom",
        value: "4 rooms",
      },
    ],
    link: "/tours/tour-details",
  },
  // Add more items here as needed
];

function TourGuide() {
  return (
    <div id="home-tours" className="py-32 px-6 sm:px-16">
      <div className="text-3xl sm:text-4xl text-black font-bold mb-8">
        Choose Preferred Tours
      </div>
      <div className="w-full h-[150px] sm:w-full sm:h-[300px] relative px-9 mb-16">
        <Image
          src="/tours-home.jpg"
          layout="fill"
          objectFit="cover"
          alt="Tours Home"
          className="rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tourData.map((tour) => (
          <div key={tour.id}>
            <Link
              href={tour.link}
              className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
            >
              <img
                alt=""
                src={tour.image}
                className="h-56 w-full rounded-md object-cover"
              />
              <div className="mt-2">
                <dl>
                  <div>
                    <dt className="sr-only">Price</dt>
                    <dd className="text-sm text-gray-500">{tour.price}</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Address</dt>
                    <dd className="font-medium">{tour.address}</dd>
                  </div>
                </dl>
                <div className="mt-6 flex items-center gap-8 text-xs">
                  {tour.features.map((feature, index) => (
                    <div
                      key={index}
                      className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
                    >
                      <svg
                        className="size-4 text-indigo-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={feature.icon}
                        />
                      </svg>
                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500">{feature.label}</p>
                        <p className="font-medium">{feature.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TourGuide;
