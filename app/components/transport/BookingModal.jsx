// // src/components/BookingModal.js
// const BookingModal = ({
//   selectedService,
//   formData,
//   handleChange,
//   handleBooking,
//   setSelectedService,
// }) => (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//     <div className="bg-white shadow-lg rounded-lg p-6 w-96">
//       <h2 className="text-2xl font-bold mb-4">Book {selectedService.name}</h2>
//       <p className="mb-2 text-gray-700">
//         <strong>Area:</strong> {selectedService.area}
//       </p>
//       <p className="mb-4 text-gray-700">
//         <strong>Price:</strong> PKR {selectedService.price}
//       </p>
//       <form onSubmit={handleBooking}>
//         <div className="mb-4">
//           <label
//             htmlFor="date"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Date
//           </label>
//           <input
//             type="date"
//             id="date"
//             name="date"
//             required
//             className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
//             value={formData.date}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="passengers"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Number of Passengers
//           </label>
//           <select
//             id="passengers"
//             name="passengers"
//             className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
//             value={formData.passengers}
//             onChange={handleChange}
//             disabled={selectedService.id === "car"}
//           >
//             {[1, 2, 3, 4, 5].map((num) => (
//               <option key={num} value={num}>
//                 {num}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="flex justify-between">
//           <button
//             type="button"
//             onClick={() => setSelectedService(null)}
//             className="bg-gray-400 text-white px-4 py-2 rounded-lg"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg"
//           >
//             Confirm Booking
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// );
// export default BookingModal;

import React from "react";

const BookingModal = ({
  selectedService,
  formData,
  setFormData,
  handleChange,
  handleBooking,
  closeModal,
}) => {
  if (!selectedService) return null; // Return nothing if no service is selected

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold mb-4">Book {selectedService.name}</h2>
        <p className="mb-2 text-gray-700">
          <strong>Area:</strong> {selectedService.area}
        </p>
        <p className="mb-4 text-gray-700">
          <strong>Price:</strong> PKR {selectedService.price}
        </p>
        <form onSubmit={handleBooking}>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="passengers"
              className="block text-sm font-medium text-gray-700"
            >
              Number of Passengers
            </label>
            <select
              id="passengers"
              name="passengers"
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
              value={formData.passengers}
              onChange={handleChange}
              disabled={selectedService.id === "car"}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-400 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
