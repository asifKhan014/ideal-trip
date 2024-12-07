// import Link from "next/link";

// export default function DestinationDetails({ destination }) {
//   if (!destination) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <p className="text-xl text-gray-600">Loading destination details...</p>
//       </div>
//     );
//   }

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-4xl mx-auto px-6">
//         <Link href="/" className="mb-6 text-blue-600 hover:underline">
//           ← Back
//         </Link>
//         <img
//           src={destination.image}
//           alt={destination.name}
//           className="w-full h-72 object-cover rounded-xl mb-6"
//         />
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">
//           {destination.name}
//         </h1>
//         <p className="text-gray-600 text-lg">{destination.description}</p>
//       </div>
//     </section>
//   );
// }

// // Get static props for the selected destination
// export async function getStaticProps({ params }) {
//   const destinations = [
//     {
//       id: 1,
//       name: "Paris, France",
//       description: "The city of love and lights.",
//       image: "/paris.jpg",
//     },
//     {
//       id: 2,
//       name: "Dubai, UAE",
//       description: "Luxury, skyscrapers, and deserts.",
//       image: "/dubai.jpg",
//     },
//     {
//       id: 3,
//       name: "Tokyo, Japan",
//       description: "A vibrant mix of tradition and modernity.",
//       image: "/tokyo.jpg",
//     },
//     {
//       id: 4,
//       name: "New York, USA",
//       description: "The city that never sleeps.",
//       image: "/newyork.jpg",
//     },
//     {
//       id: 5,
//       name: "Sydney, Australia",
//       description: "Iconic landmarks and stunning beaches.",
//       image: "/sydney.jpg",
//     },
//   ];

//   const destination = destinations.find(
//     (dest) => dest.id.toString() === params.id
//   );

//   return {
//     props: { destination: destination || null },
//     notFound: !destination, // Return 404 if destination is not found
//   };
// }

// // Get static paths for dynamic routes
// export async function getStaticPaths() {
//   const destinations = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

//   const paths = destinations.map((dest) => ({
//     params: { id: dest.id.toString() },
//   }));

//   return {
//     paths,
//     fallback: true, // Enable fallback for non-predefined routes
//   };
// }

import Link from "next/link";

export default function DestinationDetails({ destination }) {
  if (!destination) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-600">Loading destination details...</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/" className="mb-6 text-blue-600 hover:underline">
          ← Back
        </Link>
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-72 object-cover rounded-xl mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {destination.name}
        </h1>
        <p className="text-gray-600 text-lg">{destination.description}</p>
      </div>
    </section>
  );
}

// Get static props for the selected destination
export async function getStaticProps({ params }) {
  const destinations = [
    {
      id: 1,
      name: "Paris, France",
      description: "The city of love and lights.",
      image: "/paris.jpg",
    },
    {
      id: 2,
      name: "Dubai, UAE",
      description: "Luxury, skyscrapers, and deserts.",
      image: "/dubai.jpg",
    },
    {
      id: 3,
      name: "Tokyo, Japan",
      description: "A vibrant mix of tradition and modernity.",
      image: "/tokyo.jpg",
    },
    {
      id: 4,
      name: "New York, USA",
      description: "The city that never sleeps.",
      image: "/newyork.jpg",
    },
    {
      id: 5,
      name: "Sydney, Australia",
      description: "Iconic landmarks and stunning beaches.",
      image: "/sydney.jpg",
    },
  ];

  const destination = destinations.find(
    (dest) => dest.id.toString() === params.id
  );

  return {
    props: { destination: destination || null },
    notFound: !destination, // Return 404 if destination is not found
  };
}

// Get static paths for dynamic routes
export async function getStaticPaths() {
  const destinations = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  const paths = destinations.map((dest) => ({
    params: { id: dest.id.toString() },
  }));

  return {
    paths,
    fallback: true, // Enable fallback for non-predefined routes
  };
}
