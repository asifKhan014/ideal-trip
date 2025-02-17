// import React from "react";

// const Notifications = ({ notifications }) => {
//   return (
//     <div className="p-4 bg-white shadow-md rounded-lg">
//       <h2 className="text-xl font-bold mb-2">Notifications</h2>
//       <ul>
//         {notifications.map((note) => (
//           <li key={note.id} className="mb-1">
//             {note.message}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Notifications;

import React from "react";

const Notifications = ({ notifications }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      <ul>
        {notifications.map((note) => (
          <li key={note.id} className="border-b py-2">
            {note.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
