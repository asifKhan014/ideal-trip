// import React, { useState } from "react";

// const VehicleManagement = ({ vehicles, addVehicle, deleteVehicle }) => {
//   const [newVehicle, setNewVehicle] = useState({
//     name: "",
//     type: "",
//     number: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewVehicle({ ...newVehicle, [name]: value });
//   };

//   const handleAdd = () => {
//     if (newVehicle.name && newVehicle.type && newVehicle.number) {
//       addVehicle(newVehicle);
//       setNewVehicle({ name: "", type: "", number: "" });
//     }
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-lg">
//       <h2 className="text-xl font-bold mb-2">Vehicle Management</h2>
//       <div>
//         <input
//           type="text"
//           name="name"
//           placeholder="Vehicle Name"
//           value={newVehicle.name}
//           onChange={handleChange}
//           className="border p-2 mr-2"
//         />
//         <input
//           type="text"
//           name="type"
//           placeholder="Vehicle Type"
//           value={newVehicle.type}
//           onChange={handleChange}
//           className="border p-2 mr-2"
//         />
//         <input
//           type="text"
//           name="number"
//           placeholder="Vehicle Number"
//           value={newVehicle.number}
//           onChange={handleChange}
//           className="border p-2 mr-2"
//         />
//         <button
//           onClick={handleAdd}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Add Vehicle
//         </button>
//       </div>
//       <ul className="mt-4">
//         {vehicles.map((vehicle) => (
//           <li key={vehicle.id} className="flex justify-between mb-2">
//             {vehicle.name} ({vehicle.type}) - {vehicle.number}
//             <button
//               onClick={() => deleteVehicle(vehicle.id)}
//               className="text-red-500"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default VehicleManagement;

"use client";
import React, { useState } from "react";

const VehicleManagement = ({ vehicles, addVehicle, deleteVehicle }) => {
  const [newVehicle, setNewVehicle] = useState({
    name: "",
    type: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVehicle({ ...newVehicle, [name]: value });
  };

  const handleAdd = () => {
    if (newVehicle.name && newVehicle.type && newVehicle.number) {
      addVehicle(newVehicle);
      setNewVehicle({ name: "", type: "", number: "" });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Vehicle Management</h2>
      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          name="name"
          placeholder="Vehicle Name"
          value={newVehicle.name}
          onChange={handleChange}
          className="border p-2 w-1/3"
        />
        <input
          type="text"
          name="type"
          placeholder="Vehicle Type"
          value={newVehicle.type}
          onChange={handleChange}
          className="border p-2 w-1/3"
        />
        <input
          type="text"
          name="number"
          placeholder="Vehicle Number"
          value={newVehicle.number}
          onChange={handleChange}
          className="border p-2 w-1/3"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul>
        {vehicles.map((vehicle) => (
          <li
            key={vehicle.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>
              {vehicle.name} ({vehicle.type})
            </span>
            <button
              onClick={() => deleteVehicle(vehicle.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleManagement;
