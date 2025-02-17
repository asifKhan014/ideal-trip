// import React from "react";

// const ProfileOverview = ({ profile }) => {
//   return (
//     <div className="p-4 bg-white shadow-md rounded-lg">
//       <h2 className="text-xl font-bold mb-2">Profile Overview</h2>
//       <p>
//         <strong>Name:</strong> {profile.name}
//       </p>
//       <p>
//         <strong>Email:</strong> {profile.email}
//       </p>
//       <p>
//         <strong>Phone:</strong> {profile.phone}
//       </p>
//       <p>
//         <strong>Address:</strong> {profile.address}
//       </p>
//     </div>
//   );
// };

// export default ProfileOverview;

import React from "react";

const ProfileOverview = ({ profile }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Profile Overview</h2>
      <ul className="text-gray-700">
        <li className="mb-2">
          <strong>Name:</strong> {profile.name}
        </li>
        <li className="mb-2">
          <strong>Email:</strong> {profile.email}
        </li>
        <li className="mb-2">
          <strong>Phone:</strong> {profile.phone}
        </li>
        <li>
          <strong>Address:</strong> {profile.address}
        </li>
      </ul>
    </div>
  );
};

export default ProfileOverview;
