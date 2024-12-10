// import React from "react";

// function page() {
//   return (
//     <div className="min-h-screen bg-white p-6 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full  rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4">
//       <div className="flex flex-col items-center">
//         <div className="min-h-[110px]">
//           <img
//             src="https://readymadeui.com/team-1.webp"
//             className="w-28 h-w-28 rounded-full"
//           />
//         </div>

//         <div className="mt-4 text-center">
//           <p className="text-lg text-gray-800 font-bold">John Doe</p>
//           <p className="text-sm text-gray-500 mt-1">m77468934@gmail.com</p>
//         </div>
//       </div>

//       <div className="mt-8 flex flex-wrap justify-center gap-8">Adddress</div>
//     </div>
//   );
// }

// export default page;

// "use client";
// import React, { useState, useEffect } from "react";

// function page() {
//   const [editMode, setEditMode] = useState(false);
//   const [userDetails, setUserDetails] = useState(null); // Store user info including profile photo URL
//   const [loading, setLoading] = useState(true); // For handling loading state

//   useEffect(() => {
//     // Fetch user data on component mount (or page load)
//     const fetchUserProfile = async () => {
//       const token = localStorage.getItem("token");

//       if (token) {
//         try {
//           const response = await fetch(
//             `http://localhost:5277/api/user/profile/`,
//             {
//               method: "GET",
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );

//           if (!response.ok) {
//             throw new Error("Failed to fetch user profile");
//           }

//           const userData = await response.json();
//           setUserDetails(userData); // Set user profile data (including profile photo URL)
//         } catch (error) {
//           console.error(error.message);
//         } finally {
//           setLoading(false); // Stop loading after fetching
//         }
//       }
//     };

//     fetchUserProfile();
//   }, []);
//   const user = localStorage.getItem("user");
//   console.log(user["userId"]);
//   if (loading) {
//     return <div>Loading...</div>; // Loading state
//   }

//   const handleEdit = () => {
//     setEditMode(!editMode);
//   };

//   const handleSave = () => {
//     // Add logic to save user changes
//     alert("Changes saved successfully!");
//     setEditMode(false);
//   };

//   const handleDeleteAccount = () => {
//     // Add delete account logic
//     const confirmDelete = confirm(
//       "Are you sure you want to delete your account? This action cannot be undone."
//     );
//     if (confirmDelete) {
//       alert("Account deleted.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white p-6 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4 max-w-lg">
//       <div className="flex flex-col items-center">
//         <div className="relative">
//           <img
//             src="https://readymadeui.com/team-1.webp"
//             alt="Profile"
//             className="w-28 h-28 rounded-full object-cover shadow-md"
//           />
//           <label
//             htmlFor="upload-profile-pic"
//             className="absolute bottom-0 right-0 bg-indigo-600 text-white text-sm px-2 py-1 rounded-full cursor-pointer shadow-md"
//           >
//             Change
//           </label>
//           <input
//             type="file"
//             id="upload-profile-pic"
//             className="hidden"
//             onChange={(e) => {
//               // Handle profile picture upload
//               alert("Profile picture updated!");
//             }}
//           />
//         </div>

//         <div className="mt-4 text-center">
//           <p className="text-lg text-gray-800 font-bold">John Doe</p>
//           <p className="text-sm text-gray-500 mt-1">m77468934@gmail.com</p>
//         </div>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-lg font-semibold text-gray-800">
//           Personal Information
//         </h2>
//         <div className="mt-4">
//           {editMode ? (
//             <>
//               <label className="block text-sm font-medium text-gray-700">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 defaultValue="John Doe"
//                 className="w-full mt-2 p-3 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//               <label className="block text-sm font-medium text-gray-700 mt-4">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 defaultValue="m77468934@gmail.com"
//                 className="w-full mt-2 p-3 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//               <label className="block text-sm font-medium text-gray-700 mt-4">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 defaultValue="123 Street, City, Country"
//                 className="w-full mt-2 p-3 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </>
//           ) : (
//             <div className="space-y-4">
//               <div>
//                 <p className="text-sm font-medium text-gray-700">Username</p>
//                 <p className="text-gray-800">John Doe</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-700">Email</p>
//                 <p className="text-gray-800">m77468934@gmail.com</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-700">Address</p>
//                 <p className="text-gray-800">123 Street, City, Country</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="mt-8 flex flex-col gap-4">
//         {editMode ? (
//           <button
//             onClick={handleSave}
//             className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-200"
//           >
//             Save Changes
//           </button>
//         ) : (
//           <button
//             onClick={handleEdit}
//             className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-200"
//           >
//             Edit Profile
//           </button>
//         )}
//         <button
//           className="w-full py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-700 transition duration-200"
//           onClick={() => alert("Password change modal or page opens.")}
//         >
//           Change Password
//         </button>
//         <button
//           className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition duration-200"
//           onClick={handleDeleteAccount}
//         >
//           Delete Account
//         </button>
//       </div>
//     </div>
//   );
// }

// export default page;

// "use client";
// import React, { useState, useEffect } from "react";

// function UserProfile() {
//   const [editMode, setEditMode] = useState(false);
//   const [userDetails, setUserDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [services, setServices] = useState([]); // For storing availed services

//   useEffect(() => {
//     // Fetch user data and services on component mount
//     const fetchUserProfile = async () => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         try {
//           const response = await fetch(
//             "http://localhost:5277/api/user/profile",
//             {
//               method: "GET",
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );

//           if (!response.ok) {
//             throw new Error("Failed to fetch user profile");
//           }

//           const userData = await response.json();
//           setUserDetails(userData.data);

//           const servicesResponse = await fetch(
//             "http://localhost:5277/api/user/services",
//             {
//               method: "GET",
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );

//           if (!servicesResponse.ok) {
//             throw new Error("Failed to fetch user services");
//           }

//           const servicesData = await servicesResponse.json();
//           setServices(servicesData.data);
//         } catch (error) {
//           console.error(error.message);
//         } finally {
//           setLoading(false);
//         }
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   const handleEdit = () => {
//     setEditMode(!editMode);
//   };

//   const handleSave = () => {
//     // Add logic to save user changes
//     alert("Changes saved successfully!");
//     setEditMode(false);
//   };

//   const handleDeleteAccount = () => {
//     const confirmDelete = confirm(
//       "Are you sure you want to delete your account? This action cannot be undone."
//     );
//     if (confirmDelete) {
//       alert("Account deleted.");
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
//         <div className="flex flex-col items-center">
//           {/* Profile Picture */}
//           <div className="relative">
//             <img
//               src={
//                 userDetails?.profilePhoto || "https://via.placeholder.com/150"
//               }
//               alt="Profile"
//               className="w-28 h-28 rounded-full object-cover shadow-md"
//             />
//             {editMode && (
//               <label
//                 htmlFor="upload-profile-pic"
//                 className="absolute bottom-0 right-0 bg-indigo-600 text-white text-sm px-2 py-1 rounded-full cursor-pointer shadow-md"
//               >
//                 Change
//               </label>
//             )}
//             <input
//               type="file"
//               id="upload-profile-pic"
//               className="hidden"
//               onChange={(e) => alert("Profile picture updated!")}
//             />
//           </div>

//           {/* User Information */}
//           <div className="mt-4 text-center">
//             {editMode ? (
//               <input
//                 type="text"
//                 defaultValue={userDetails?.name}
//                 className="text-lg font-bold text-gray-800 border-b-2"
//               />
//             ) : (
//               <p className="text-lg font-bold text-gray-800">
//                 {userDetails?.name}
//               </p>
//             )}
//             <p className="text-sm text-gray-500 mt-1">{userDetails?.email}</p>
//           </div>
//         </div>

//         {/* Personal Information */}
//         <div className="mt-8">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Personal Information
//           </h2>
//           <div className="mt-4 space-y-4">
//             <div>
//               <p className="text-sm font-medium text-gray-700">Address</p>
//               {editMode ? (
//                 <input
//                   type="text"
//                   defaultValue={userDetails?.address}
//                   className="w-full mt-1 p-2 border rounded-md"
//                 />
//               ) : (
//                 <p className="text-gray-800">{userDetails?.address}</p>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Availed Services */}
//         <div className="mt-8">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Availed Services
//           </h2>
//           <ul className="mt-4 space-y-4">
//             {services.length > 0 ? (
//               services.map((service) => (
//                 <li
//                   key={service.id}
//                   className="bg-gray-50 p-4 rounded-lg shadow border"
//                 >
//                   <h3 className="text-md font-semibold text-gray-700">
//                     {service.name}
//                   </h3>
//                   <p className="text-sm text-gray-500">{service.description}</p>
//                 </li>
//               ))
//             ) : (
//               <p className="text-gray-500">No services availed yet.</p>
//             )}
//           </ul>
//         </div>

//         {/* Action Buttons */}
//         <div className="mt-8 flex flex-col gap-4">
//           {editMode ? (
//             <button
//               onClick={handleSave}
//               className="py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700"
//             >
//               Save Changes
//             </button>
//           ) : (
//             <button
//               onClick={handleEdit}
//               className="py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700"
//             >
//               Edit Profile
//             </button>
//           )}
//           <button
//             className="py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-700"
//             onClick={() => alert("Password change modal or page opens.")}
//           >
//             Change Password
//           </button>
//           <button
//             className="py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700"
//             onClick={handleDeleteAccount}
//           >
//             Delete Account
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserProfile;

// "use client";

// import axios from "axios";
// import React, { useState, useEffect } from "react";

// function UserDashboard() {
//   const [editMode, setEditMode] = useState(false);
//   const [userDetails, setUserDetails] = useState(null);
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch user details and services
//     const fetchUserData = async () => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         try {
//           const response = await axios.get(
//             "http://localhost:5277/api/user/profile",
//             {
//               headers: { Authorization: `Bearer ${token}` },
//             }
//           );
//           if (!response.ok) throw new Error("Failed to fetch user profile");

//           const data = await response.json();
//           setUserDetails(data.data);

//           const servicesResponse = await fetch(
//             "http://localhost:5277/api/user/services",
//             {
//               method: "GET",
//               headers: { Authorization: `Bearer ${token}` },
//             }
//           );
//           if (!servicesResponse.ok) throw new Error("Failed to fetch services");

//           const servicesData = await servicesResponse.json();
//           setServices(servicesData.data);
//         } catch (error) {
//           console.error(error.message);
//         } finally {
//           setLoading(false);
//         }
//       }
//     };

//     fetchUserData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         Loading...
//       </div>
//     );
//   }

//   const handleEditToggle = () => setEditMode(!editMode);

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row">
//       {/* Sidebar */}
//       <aside className="bg-gray-800 text-white w-full lg:w-64 p-6 space-y-4">
//         <h1 className="text-2xl font-bold">User Dashboard</h1>
//         <nav>
//           <ul className="space-y-2">
//             <li>
//               <a
//                 href="#profile"
//                 className="block p-2 rounded-lg bg-gray-700 hover:bg-gray-600"
//               >
//                 Profile
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#services"
//                 className="block p-2 rounded-lg bg-gray-700 hover:bg-gray-600"
//               >
//                 Availed Services
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 bg-gray-100">
//         {/* Profile Section */}
//         <section id="profile" className="mb-8">
//           <h2 className="text-xl font-bold mb-4">Profile Information</h2>
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <div className="flex items-center space-x-6">
//               {/* Profile Picture */}
//               <div className="relative">
//                 <img
//                   src={
//                     userDetails?.profilePhoto ||
//                     "https://via.placeholder.com/150"
//                   }
//                   alt="Profile"
//                   className="w-24 h-24 rounded-full object-cover"
//                 />
//                 {editMode && (
//                   <label
//                     htmlFor="upload-photo"
//                     className="absolute bottom-0 right-0 bg-indigo-600 text-white px-2 py-1 rounded-full cursor-pointer"
//                   >
//                     Edit
//                   </label>
//                 )}
//                 <input
//                   id="upload-photo"
//                   type="file"
//                   className="hidden"
//                   onChange={(e) => alert("Profile picture updated!")}
//                 />
//               </div>

//               {/* User Info */}
//               <div className="flex-1">
//                 {editMode ? (
//                   <>
//                     <input
//                       type="text"
//                       defaultValue={userDetails?.name}
//                       className="block w-full p-2 border rounded-lg mb-2"
//                     />
//                     <input
//                       type="email"
//                       defaultValue={userDetails?.email}
//                       className="block w-full p-2 border rounded-lg mb-2"
//                     />
//                   </>
//                 ) : (
//                   <>
//                     <h3 className="text-lg font-bold">{userDetails?.name}</h3>
//                     <p className="text-gray-500">{userDetails?.email}</p>
//                   </>
//                 )}
//               </div>
//             </div>
//             {/* Edit/Save Button */}
//             <button
//               onClick={handleEditToggle}
//               className={`mt-4 px-4 py-2 rounded-lg ${
//                 editMode ? "bg-green-500" : "bg-indigo-500"
//               } text-white`}
//             >
//               {editMode ? "Save Changes" : "Edit Profile"}
//             </button>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section id="services">
//           <h2 className="text-xl font-bold mb-4">Availed Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {services.length > 0 ? (
//               services.map((service) => (
//                 <div
//                   key={service.id}
//                   className="bg-white rounded-lg shadow-lg p-4 space-y-2"
//                 >
//                   <h3 className="text-lg font-bold">{service.name}</h3>
//                   <p className="text-sm text-gray-500">{service.description}</p>
//                 </div>
//               ))
//             ) : (
//               <p className="col-span-full text-center text-gray-500">
//                 No services availed yet.
//               </p>
//             )}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default UserDashboard;

// "use client";

// import axios from "axios";
// import React, { useState, useEffect } from "react";

// function UserDashboard() {
//   const [editMode, setEditMode] = useState(false);
//   const [userDetails, setUserDetails] = useState(null);
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const token = localStorage.getItem("token");
//       const user = localStorage.getItem("user");

//       // Parse userId from localStorage
//       if (!user) {
//         console.error("User information is missing in localStorage");
//         setLoading(false);
//         return;
//       }

//       const { userId } = JSON.parse(user);
//       console.log("Token:", token);
//       console.log("UserId:", userId);

//       if (token) {
//         try {
//           const userResponse = await axios.get(
//             `http://localhost:5277/api/User/${userId}`, // Endpoint with userId
//             {
//               headers: { Authorization: `Bearer ${token}` }, // Include the token
//             }
//           );

//           // Log and parse response
//           console.log("User Data:", userResponse.data);
//           if (userResponse.data?.isSuccess) {
//             setUserDetails(userResponse.data?.data); // Assuming data contains user details
//           } else {
//             console.error(
//               "Failed to fetch user details:",
//               userResponse.data?.message
//             );
//           }

//           // Uncomment if you have services API ready
//           // const servicesResponse = await axios.get(
//           //   "http://localhost:5277/api/user/services",
//           //   {
//           //     headers: { Authorization: `Bearer ${token}` },
//           //   }
//           // );
//           // setServices(servicesResponse.data?.data);
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         console.error("No token found in localStorage");
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         Loading...
//       </div>
//     );
//   }

//   const handleEditToggle = () => setEditMode(!editMode);

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row">
//       {/* Sidebar */}
//       <aside className="bg-gray-800 text-white w-full lg:w-64 p-6 space-y-4">
//         <h1 className="text-2xl font-bold">User Dashboard</h1>
//         <nav>
//           <ul className="space-y-2">
//             <li>
//               <a
//                 href="#profile"
//                 className="block p-2 rounded-lg bg-gray-700 hover:bg-gray-600"
//               >
//                 Profile
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#services"
//                 className="block p-2 rounded-lg bg-gray-700 hover:bg-gray-600"
//               >
//                 Availed Services
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 bg-gray-100">
//         {/* Profile Section */}
//         <section id="profile" className="mb-8">
//           <h2 className="text-xl font-bold mb-4">Profile Information</h2>
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <div className="flex items-center space-x-6">
//               {/* Profile Picture */}
//               <div className="relative">
//                 <img
//                   src={
//                     userDetails?.profilePhoto ||
//                     "https://via.placeholder.com/150"
//                   }
//                   alt="Profile"
//                   className="w-24 h-24 rounded-full object-cover"
//                 />
//                 {editMode && (
//                   <label
//                     htmlFor="upload-photo"
//                     className="absolute bottom-0 right-0 bg-indigo-600 text-white px-2 py-1 rounded-full cursor-pointer"
//                   >
//                     Edit
//                   </label>
//                 )}
//                 <input
//                   id="upload-photo"
//                   type="file"
//                   className="hidden"
//                   onChange={(e) => alert("Profile picture updated!")}
//                 />
//               </div>

//               {/* User Info */}
//               <div className="flex-1">
//                 {editMode ? (
//                   <>
//                     <input
//                       type="text"
//                       defaultValue={userDetails?.name}
//                       className="block w-full p-2 border rounded-lg mb-2"
//                     />
//                     <input
//                       type="email"
//                       defaultValue={userDetails?.email}
//                       className="block w-full p-2 border rounded-lg mb-2"
//                     />
//                   </>
//                 ) : (
//                   <>
//                     <h3 className="text-lg text-gray-500 font-bold">
//                       {userDetails?.fullName}
//                     </h3>
//                     <p className="text-gray-500">{userDetails?.email}</p>
//                   </>
//                 )}
//               </div>
//             </div>
//             {/* Edit/Save Button */}
//             <button
//               onClick={handleEditToggle}
//               className={`mt-4 px-4 py-2 rounded-lg ${
//                 editMode ? "bg-green-500" : "bg-indigo-500"
//               } text-white`}
//             >
//               {editMode ? "Save Changes" : "Edit Profile"}
//             </button>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section id="services">
//           <h2 className="text-xl font-bold mb-4">Availed Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {services.length > 0 ? (
//               services.map((service) => (
//                 <div
//                   key={service.id}
//                   className="bg-white rounded-lg shadow-lg p-4 space-y-2"
//                 >
//                   <h3 className="text-lg font-bold">{service.name}</h3>
//                   <p className="text-sm text-gray-500">{service.description}</p>
//                 </div>
//               ))
//             ) : (
//               <p className="col-span-full text-center text-gray-500">
//                 No services availed yet.
//               </p>
//             )}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default UserDashboard;

// "use client";

// import axios from "axios";
// import React, { useState, useEffect } from "react";

// function UserDashboard() {
//   const [editMode, setEditMode] = useState(false);
//   const [userDetails, setUserDetails] = useState(null);
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const token = localStorage.getItem("token");
//       const user = localStorage.getItem("user");

//       // Parse userId from localStorage
//       if (!user) {
//         console.error("User information is missing in localStorage");
//         setLoading(false);
//         return;
//       }

//       const { userId } = JSON.parse(user);
//       console.log("Token:", token);
//       console.log("UserId:", userId);

//       if (token) {
//         try {
//           const userResponse = await axios.get(
//             `http://localhost:5277/api/User/${userId}`,
//             {
//               headers: { Authorization: `Bearer ${token}` },
//             }
//           );

//           // Log and parse response
//           console.log("User Data:", userResponse.data);
//           if (userResponse.data?.isSuccess) {
//             setUserDetails(userResponse.data?.data);
//           } else {
//             console.error(
//               "Failed to fetch user details:",
//               userResponse.data?.message
//             );
//           }
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         console.error("No token found in localStorage");
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         Loading...
//       </div>
//     );
//   }

//   const handleEditToggle = () => setEditMode(!editMode);

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row">
//       {/* Sidebar */}
//       <aside className="bg-gray-800 text-white w-full lg:w-64 p-6 space-y-4">
//         <h1 className="text-2xl font-bold">User Dashboard</h1>
//         <nav>
//           <ul className="space-y-2">
//             <li>
//               <a
//                 href="#profile"
//                 className="block p-2 rounded-lg bg-gray-700 hover:bg-gray-600"
//               >
//                 Profile
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#services"
//                 className="block p-2 rounded-lg bg-gray-700 hover:bg-gray-600"
//               >
//                 Availed Services
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 bg-gray-100">
//         {/* Profile Section */}
//         <section id="profile" className="mb-8">
//           <h2 className="text-xl font-bold mb-4">Profile Information</h2>
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <div className="flex items-center space-x-6">
//               {/* Profile Picture */}
//               <div className="relative">
//                 <img
//                   src={
//                     userDetails.profilePhotoUrl
//                       ? userDetails.profilePhotoUrl
//                       : "https://via.placeholder.com/150"
//                   }
//                   alt="Profile"
//                   className="w-24 h-24 rounded-full object-cover"
//                 />
//                 {editMode && (
//                   <label
//                     htmlFor="upload-photo"
//                     className="absolute bottom-0 right-0 bg-indigo-600 text-white px-2 py-1 rounded-full cursor-pointer"
//                   >
//                     Edit
//                   </label>
//                 )}
//                 <input
//                   id="upload-photo"
//                   type="file"
//                   className="hidden"
//                   onChange={(e) => alert("Profile picture updated!")}
//                 />
//               </div>

//               {/* User Info */}
//               <div className="flex-1">
//                 {editMode ? (
//                   <>
//                     <input
//                       type="text"
//                       defaultValue={userDetails?.userName}
//                       className="block w-full p-2 border rounded-lg mb-2"
//                     />
//                     <input
//                       type="email"
//                       defaultValue={userDetails?.email}
//                       className="block w-full p-2 border rounded-lg mb-2"
//                     />
//                     <input
//                       type="text"
//                       defaultValue={userDetails?.address}
//                       className="block w-full p-2 border rounded-lg mb-2"
//                     />
//                   </>
//                 ) : (
//                   <>
//                     <h3 className="text-lg font-bold">
//                       {userDetails?.userName}
//                     </h3>
//                     <p className="text-gray-500">{userDetails?.email}</p>
//                     <p className="text-gray-500">{userDetails?.address}</p>
//                   </>
//                 )}
//               </div>
//             </div>
//             {/* Edit/Save Button */}
//             <button
//               onClick={handleEditToggle}
//               className={`mt-4 px-4 py-2 rounded-lg ${
//                 editMode ? "bg-green-500" : "bg-indigo-500"
//               } text-white`}
//             >
//               {editMode ? "Save Changes" : "Edit Profile"}
//             </button>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section id="services">
//           <h2 className="text-xl font-bold mb-4">Availed Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {services.length > 0 ? (
//               services.map((service) => (
//                 <div
//                   key={service.id}
//                   className="bg-white rounded-lg shadow-lg p-4 space-y-2"
//                 >
//                   <h3 className="text-lg font-bold">{service.name}</h3>
//                   <p className="text-sm text-gray-500">{service.description}</p>
//                 </div>
//               ))
//             ) : (
//               <p className="col-span-full text-center text-gray-500">
//                 No services availed yet.
//               </p>
//             )}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default UserDashboard;

// "use client";

// import axios from "axios";
// import React, { useState, useEffect } from "react";

// function UserDashboard() {
//   const [editMode, setEditMode] = useState(false);
//   const [userDetails, setUserDetails] = useState(null);
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [updatedDetails, setUpdatedDetails] = useState({
//     userName: "",
//     email: "",
//     address: "",
//   });

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const token = localStorage.getItem("token");
//       const user = localStorage.getItem("user");

//       if (!user) {
//         console.error("User information is missing in localStorage");
//         setLoading(false);
//         return;
//       }

//       const { userId } = JSON.parse(user);

//       if (token) {
//         try {
//           const userResponse = await axios.get(
//             `http://localhost:5277/api/User/${userId}`,
//             {
//               headers: { Authorization: `Bearer ${token}` },
//             }
//           );

//           if (userResponse.data?.isSuccess) {
//             const data = userResponse.data?.data;
//             setUserDetails(data);
//             setUpdatedDetails({
//               userName: data.userName || "",
//               email: data.email || "",
//               address: data.address || "",
//             });
//           } else {
//             console.error(
//               "Failed to fetch user details:",
//               userResponse.data?.message
//             );
//           }
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         console.error("No token found in localStorage");
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSaveChanges = async () => {
//     const token = localStorage.getItem("token");
//     const user = localStorage.getItem("user");
//     const { userId } = JSON.parse(user);

//     if (token) {
//       try {
//         const formData = new FormData();
//         formData.append("userName", updatedDetails.userName);
//         formData.append("email", updatedDetails.email);
//         formData.append("address", updatedDetails.address);

//         const response = await axios.post(
//           `http://localhost:5277/api/User/${userId}`,
//           formData,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         );

//         if (response.data?.isSuccess) {
//           setUserDetails(updatedDetails); // Update UI with new data
//           setEditMode(false); // Exit edit mode
//           alert("Profile updated successfully!");
//         } else {
//           console.error("Error updating profile:", response.data?.message);
//         }
//       } catch (error) {
//         console.error("Error while saving changes:", error);
//       }
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         Loading...
//       </div>
//     );
//   }

//   const handleEditToggle = () => setEditMode(!editMode);

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row">
//       {/* Sidebar */}
//       <aside className="bg-gray-800 text-white w-full lg:w-64 p-6 space-y-4">
//         <h1 className="text-2xl font-bold">User Dashboard</h1>
//         <nav>
//           <ul className="space-y-2">
//             <li>
//               <a
//                 href="#profile"
//                 className="block p-2 rounded-lg bg-gray-700 hover:bg-gray-600"
//               >
//                 Profile
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#services"
//                 className="block p-2 rounded-lg bg-gray-700 hover:bg-gray-600"
//               >
//                 Availed Services
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 bg-gray-100">
//         {/* Profile Section */}
//         <section id="profile" className="mb-8">
//           <h2 className="text-xl font-bold mb-4">Profile Information</h2>
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <div className="flex items-center space-x-6">
//               {/* Profile Picture */}
//               <div className="relative">
//                 <img
//                   src={
//                     userDetails?.profilePhotoUrl ||
//                     "https://via.placeholder.com/150"
//                   }
//                   alt="Profile"
//                   className="w-24 h-24 rounded-full object-cover"
//                 />
//               </div>

//               {/* User Info */}
//               <div className="flex-1">
//                 {editMode ? (
//                   <>
//                     <input
//                       type="text"
//                       name="userName"
//                       value={updatedDetails.userName}
//                       onChange={handleInputChange}
//                       className="block w-full p-2 border rounded-lg mb-2"
//                     />
//                     <input
//                       type="email"
//                       name="email"
//                       value={updatedDetails.email}
//                       onChange={handleInputChange}
//                       className="block w-full p-2 border rounded-lg mb-2"
//                     />
//                     <input
//                       type="text"
//                       name="address"
//                       value={updatedDetails.address}
//                       onChange={handleInputChange}
//                       className="block w-full p-2 border rounded-lg mb-2"
//                     />
//                   </>
//                 ) : (
//                   <>
//                     <h3 className="text-lg font-bold">
//                       {userDetails?.userName}
//                     </h3>
//                     <p className="text-gray-500">{userDetails?.email}</p>
//                     <p className="text-gray-500">{userDetails?.address}</p>
//                   </>
//                 )}
//               </div>
//             </div>
//             {/* Edit/Save Button */}
//             <button
//               onClick={editMode ? handleSaveChanges : handleEditToggle}
//               className={`mt-4 px-4 py-2 rounded-lg ${
//                 editMode ? "bg-green-500" : "bg-indigo-500"
//               } text-white`}
//             >
//               {editMode ? "Save Changes" : "Edit Profile"}
//             </button>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section id="services">
//           <h2 className="text-xl font-bold mb-4">Availed Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {services.length > 0 ? (
//               services.map((service) => (
//                 <div
//                   key={service.id}
//                   className="bg-white rounded-lg shadow-lg p-4 space-y-2"
//                 >
//                   <h3 className="text-lg font-bold">{service.name}</h3>
//                   <p className="text-sm text-gray-500">{service.description}</p>
//                 </div>
//               ))
//             ) : (
//               <p className="col-span-full text-center text-gray-500">
//                 No services availed yet.
//               </p>
//             )}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default UserDashboard;

// "use client";

// import axios from "axios";
// import React, { useState, useEffect } from "react";

// function UserDashboard() {
//   const [editMode, setEditMode] = useState(false);
//   const [userDetails, setUserDetails] = useState(null);
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [updatedDetails, setUpdatedDetails] = useState({
//     userName: "",
//     address: "",
//   });

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const token = localStorage.getItem("token");
//       const user = localStorage.getItem("user");

//       if (!user) {
//         console.error("User information is missing in localStorage");
//         setLoading(false);
//         return;
//       }

//       const { userId } = JSON.parse(user);

//       if (token) {
//         try {
//           const userResponse = await axios.get(
//             `http://localhost:5277/api/User/${userId}`,
//             {
//               headers: { Authorization: `Bearer ${token}` },
//             }
//           );

//           if (userResponse.data?.isSuccess) {
//             const data = userResponse.data?.data;
//             setUserDetails(data);
//             setUpdatedDetails({
//               userName: data.userName || "",
//               address: data.address || "",
//             });
//           } else {
//             console.error(
//               "Failed to fetch user details:",
//               userResponse.data?.message
//             );
//           }
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         console.error("No token found in localStorage");
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSaveChanges = async () => {
//     const token = localStorage.getItem("token");
//     const user = localStorage.getItem("user");
//     const { userId } = JSON.parse(user);

//     if (token) {
//       try {
//         const formData = new FormData();
//         formData.append("userName", updatedDetails.userName);
//         formData.append("address", updatedDetails.address);

//         const response = await axios.post(
//           `http://localhost:5277/api/User/${userId}`,
//           formData,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         );

//         if (response.data?.isSuccess) {
//           setUserDetails((prev) => ({
//             ...prev,
//             userName: updatedDetails.userName,
//             address: updatedDetails.address,
//           }));
//           setEditMode(false);
//           alert("Profile updated successfully!");
//         } else {
//           console.error("Error updating profile:", response.data?.message);
//         }
//       } catch (error) {
//         console.error("Error while saving changes:", error);
//       }
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         Loading...
//       </div>
//     );
//   }

//   const handleEditToggle = () => setEditMode(!editMode);

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row">
//       {/* Sidebar */}
//       <aside className="bg-gray-800 text-white w-full lg:w-64 p-6 space-y-4">
//         <h1 className="text-2xl font-bold">User Dashboard</h1>
//         <nav>
//           <ul className="space-y-2">
//             <li>
//               <a
//                 href="#profile"
//                 className="block p-2 rounded-lg bg-gray-700 hover:bg-gray-600"
//               >
//                 Profile
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#services"
//                 className="block p-2 rounded-lg bg-gray-700 hover:bg-gray-600"
//               >
//                 Availed Services
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 bg-gray-100">
//         {/* Profile Section */}
//         <section id="profile" className="mb-8">
//           <h2 className="text-xl font-bold mb-4">Profile Information</h2>
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <div className="flex items-center space-x-6">
//               {/* Profile Picture */}
//               <div className="relative">
//                 <img
//                   src={
//                     userDetails?.profilePhotoUrl ||
//                     "https://via.placeholder.com/150"
//                   }
//                   alt="Profile"
//                   className="w-24 h-24 rounded-full object-cover"
//                 />
//               </div>

//               {/* User Info */}
//               <div className="flex-1">
//                 {editMode ? (
//                   <>
//                     <input
//                       type="text"
//                       name="userName"
//                       value={updatedDetails.userName}
//                       onChange={handleInputChange}
//                       className="block w-full p-2 border rounded-lg mb-2"
//                       placeholder="Username"
//                     />
//                     <input
//                       type="email"
//                       value={userDetails?.email}
//                       readOnly
//                       className="block w-full p-2 border rounded-lg mb-2 bg-gray-100 cursor-not-allowed"
//                       placeholder="Email (Read-Only)"
//                     />
//                     <input
//                       type="text"
//                       name="address"
//                       value={updatedDetails.address}
//                       onChange={handleInputChange}
//                       className="block w-full p-2 border rounded-lg mb-2"
//                       placeholder="Address"
//                     />
//                   </>
//                 ) : (
//                   <>
//                     <h3 className="text-lg font-bold">
//                       {userDetails?.userName}
//                     </h3>
//                     <p className="text-gray-500">{userDetails?.email}</p>
//                     <p className="text-gray-500">{userDetails?.address}</p>
//                   </>
//                 )}
//               </div>
//             </div>
//             {/* Edit/Save Button */}
//             <button
//               onClick={editMode ? handleSaveChanges : handleEditToggle}
//               className={`mt-4 px-4 py-2 rounded-lg ${
//                 editMode ? "bg-green-500" : "bg-indigo-500"
//               } text-white`}
//             >
//               {editMode ? "Save Changes" : "Edit Profile"}
//             </button>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section id="services">
//           <h2 className="text-xl font-bold mb-4">Availed Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {services.length > 0 ? (
//               services.map((service) => (
//                 <div
//                   key={service.id}
//                   className="bg-white rounded-lg shadow-lg p-4 space-y-2"
//                 >
//                   <h3 className="text-lg font-bold">{service.name}</h3>
//                   <p className="text-sm text-gray-500">{service.description}</p>
//                 </div>
//               ))
//             ) : (
//               <p className="col-span-full text-center text-gray-500">
//                 No services availed yet.
//               </p>
//             )}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default UserDashboard;

"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";

function UserDashboard() {
  const [editMode, setEditMode] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatedDetails, setUpdatedDetails] = useState({
    userName: "",
    address: "",
  });
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");

      if (!user) {
        console.error("User information is missing in localStorage");
        setLoading(false);
        return;
      }

      const { userId } = JSON.parse(user);

      if (token) {
        try {
          const userResponse = await axios.get(
            `http://localhost:5277/api/User/${userId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          if (userResponse.data?.isSuccess) {
            const data = userResponse.data?.data;
            setUserDetails(data);
            setUpdatedDetails({
              userName: data.userName || "",
              address: data.address || "",
            });
          } else {
            console.error(
              "Failed to fetch user details:",
              userResponse.data?.message
            );
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        console.error("No token found in localStorage");
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setSelectedPhoto(file);
  };

  const handleSaveChanges = async () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const { userId } = JSON.parse(user);

    console.log(userId);
    if (token) {
      try {
        const formData = new FormData();
        formData.append("fullName", updatedDetails.userName);
        formData.append("address", updatedDetails.address);

        if (selectedPhoto) {
          formData.append("profilePhoto", selectedPhoto);
        }

        const response = await axios.post(
          `http://localhost:5277/api/User/${userId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data?.isSuccess);
        if (response.data?.isSuccess) {
          const updatedData = response.data.data;
          setUserDetails((prev) => ({
            ...prev,
            ...updatedDetails,
            profilePhotoUrl:
              updatedData.profilePhotoUrl || prev.profilePhotoUrl,
          }));
          setEditMode(false);
          alert("Profile updated successfully!");
        } else {
          console.error("Error updating profile:", response.data?.message);
        }
      } catch (error) {
        console.error("Error while saving changes:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  const handleEditToggle = () => setEditMode(!editMode);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-full lg:w-64 p-6 space-y-4">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <a
                href="#profile"
                className="block p-2 rounded-lg bg-gray-700 hover:bg-gray-600"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block p-2 rounded-lg bg-gray-700 hover:bg-gray-600"
              >
                Availed Services
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {/* Profile Section */}
        <section id="profile" className="mb-8">
          <h2 className="text-xl font-bold mb-4">Profile Information</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-6">
              {/* Profile Picture */}
              <div className="relative">
                <img
                  src={
                    userDetails?.profilePhotoUrl ||
                    "https://via.placeholder.com/150"
                  }
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
                {editMode && (
                  <label
                    htmlFor="upload-photo"
                    className="absolute bottom-0 right-0 bg-indigo-600 text-white px-2 py-1 rounded-full cursor-pointer"
                  >
                    Edit
                  </label>
                )}
                <input
                  id="upload-photo"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
              </div>

              {/* User Info */}
              <div className="flex-1">
                {editMode ? (
                  <>
                    <input
                      type="text"
                      name="userName"
                      value={updatedDetails.userName}
                      onChange={handleInputChange}
                      className="block w-full p-2 border rounded-lg mb-2"
                      placeholder="Username"
                    />
                    <input
                      type="email"
                      value={userDetails?.email}
                      readOnly
                      className="block w-full p-2 border rounded-lg mb-2 bg-gray-100 cursor-not-allowed"
                      placeholder="Email (Read-Only)"
                    />
                    <input
                      type="text"
                      name="address"
                      value={updatedDetails.address}
                      onChange={handleInputChange}
                      className="block w-full p-2 border rounded-lg mb-2"
                      placeholder="Address"
                    />
                  </>
                ) : (
                  <>
                    <h3 className="text-lg font-bold">
                      {userDetails?.userName}
                    </h3>
                    <p className="text-gray-500">{userDetails?.email}</p>
                    <p className="text-gray-500">{userDetails?.address}</p>
                  </>
                )}
              </div>
            </div>
            {/* Edit/Save Button */}
            <button
              onClick={editMode ? handleSaveChanges : handleEditToggle}
              className={`mt-4 px-4 py-2 rounded-lg ${
                editMode ? "bg-green-500" : "bg-indigo-500"
              } text-white`}
            >
              {editMode ? "Save Changes" : "Edit Profile"}
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services">
          <h2 className="text-xl font-bold mb-4">Availed Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.length > 0 ? (
              services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg p-4 space-y-2"
                >
                  <h3 className="text-lg font-bold">{service.name}</h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No services availed yet.
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default UserDashboard;
