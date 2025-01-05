// import React from "react";

// const StatsCard = ({ title, count, icon }) => {
//   return (
//     <div className="p-4 bg-white rounded-lg shadow-md flex items-center">
//       <div className="text-blue-600 text-3xl mr-4">{icon}</div>
//       <div>
//         <h3 className="text-lg font-semibold">{title}</h3>
//         <p className="text-2xl font-bold">{count}</p>
//       </div>
//     </div>
//   );
// };

// export default StatsCard;

import React from "react";

const StatsCard = ({ title, count, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center">
        <div className="text-blue-600 text-4xl mr-4">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
          <p className="text-3xl font-bold text-gray-800">{count}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
