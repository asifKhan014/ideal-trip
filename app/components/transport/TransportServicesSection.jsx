// const TransportServicesSection = ({
//   filteredServices,
//   handleSelectService,
// }) => (
//   <section className="py-12">
//     <div className="container mx-auto">
//       <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
//       {filteredServices.map((tour, index) => (
//         <div key={index} className="mb-12">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">
//             {tour.area}
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {tour.services.map((service) => (
//               <div
//                 key={service.id}
//                 className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 relative"
//               >
//                 <h4 className="text-lg font-semibold mb-2 flex justify-center items-center">
//                   {service.id === "bus" ? (
//                     <span className="mr-2">🚌</span>
//                   ) : (
//                     <span className="mr-2">🚗</span>
//                   )}
//                   {service.name}
//                 </h4>
//                 <p className="font-bold text-lg mb-2">PKR {service.price}</p>
//                 <p className="text-sm mb-1">Company: {service.company}</p>
//                 <p className="text-sm mb-1">Seats Available: {service.seats}</p>
//                 <p className="text-sm mb-4">Quality: {service.quality}</p>
//                 <button
//                   className="bg-blue-600 text-white px-4 py-2 rounded-lg"
//                   onClick={() => handleSelectService(service, tour.area)}
//                 >
//                   Book Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
// );
// export default TransportServicesSection;

import React from "react";

const TransportServicesSection = ({
  filteredServices,
  handleSelectService,
}) => (
  <section className="py-12">
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
      {filteredServices.map((tour, index) => (
        <div key={index} className="mb-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            {tour.area}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tour.services.map((service) => (
              <div
                key={service.id}
                className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 relative"
              >
                <h4 className="text-lg font-semibold mb-2 flex justify-center items-center">
                  {service.id === "bus" ? (
                    <span className="mr-2">🚌</span>
                  ) : (
                    <span className="mr-2">🚗</span>
                  )}
                  {service.name}
                </h4>
                <p className="font-bold text-lg mb-2">PKR {service.price}</p>
                <p className="text-sm mb-1">Company: {service.company}</p>
                <p className="text-sm mb-1">Seats Available: {service.seats}</p>
                <p className="text-sm mb-4">Quality: {service.quality}</p>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  onClick={() => handleSelectService(service, tour.area)}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TransportServicesSection;
