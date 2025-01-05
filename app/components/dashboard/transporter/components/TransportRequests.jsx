// import React from "react";

// const TransportRequests = ({ requests }) => {
//   return (
//     <div className="p-4 bg-white shadow-md rounded-lg">
//       <h2 className="text-xl font-bold mb-2">Transport Requests</h2>
//       <ul>
//         {requests.map((req) => (
//           <li key={req.id} className="mb-1">
//             {req.customer} - {req.date} - <strong>{req.status}</strong>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TransportRequests;

import React from "react";

const TransportRequests = ({ requests }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Transport Requests</h2>
      <ul>
        {requests.map((req) => (
          <li key={req.id} className="border-b py-2">
            <strong>{req.customer}</strong> - {req.date} -{" "}
            <span className="text-blue-500">{req.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransportRequests;
