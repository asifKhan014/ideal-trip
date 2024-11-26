// "use client";
// import { useState } from "react";

// export default function UserSettings() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     profilePic: "/default-profile.jpg", // Default profile picture
//     username: "JohnDoe",
//     email: "johndoe@example.com",
//     address: "1234 Elm Street",
//     password: "",
//     newPassword: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = () => {
//     // Add API call logic here to save changes
//     setIsEditing(false);
//     alert("Profile updated successfully!");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 py-12 px-6">
//       <div className="w-full max-w-lg bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="bg-gradient-to-r from-indigo-600 to-blue-500 py-6 px-4 text-center">
//           <h1 className="text-2xl font-bold text-white">
//             {isEditing ? "Edit Profile" : "User Settings"}
//           </h1>
//         </div>
//         <div className="p-6 space-y-6">
//           {/* Profile Picture */}
//           <div className="flex justify-center">
//             <img
//               src={userDetails.profilePic}
//               alt="Profile Pic"
//               className="w-24 h-24 rounded-full border-2 border-indigo-500 object-cover"
//             />
//           </div>
//           {/* User Details */}
//           <div className="space-y-4">
//             {/* Username */}
//             <div>
//               <label
//                 htmlFor="username"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Username
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={userDetails.username}
//                 onChange={handleInputChange}
//                 disabled={!isEditing}
//                 className={`mt-2 block w-full rounded-md border ${
//                   isEditing ? "border-gray-300" : "border-transparent"
//                 } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 ${
//                   isEditing ? "bg-white" : "bg-gray-100"
//                 }`}
//               />
//             </div>
//             {/* Email */}
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={userDetails.email}
//                 onChange={handleInputChange}
//                 disabled={!isEditing}
//                 className={`mt-2 block w-full rounded-md border ${
//                   isEditing ? "border-gray-300" : "border-transparent"
//                 } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 ${
//                   isEditing ? "bg-white" : "bg-gray-100"
//                 }`}
//               />
//             </div>
//             {/* Address */}
//             <div>
//               <label
//                 htmlFor="address"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Street Address
//               </label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 value={userDetails.address}
//                 onChange={handleInputChange}
//                 disabled={!isEditing}
//                 className={`mt-2 block w-full rounded-md border ${
//                   isEditing ? "border-gray-300" : "border-transparent"
//                 } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 ${
//                   isEditing ? "bg-white" : "bg-gray-100"
//                 }`}
//               />
//             </div>
//             {/* Password Change */}
//             {isEditing && (
//               <>
//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Current Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={userDetails.password}
//                     onChange={handleInputChange}
//                     className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2"
//                     placeholder="Enter current password"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="newPassword"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     New Password
//                   </label>
//                   <input
//                     type="password"
//                     id="newPassword"
//                     name="newPassword"
//                     value={userDetails.newPassword}
//                     onChange={handleInputChange}
//                     className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2"
//                     placeholder="Enter new password"
//                   />
//                 </div>
//               </>
//             )}
//           </div>
//           {/* Action Buttons */}
//           <div className="flex justify-end space-x-4">
//             {isEditing ? (
//               <>
//                 <button
//                   onClick={() => setIsEditing(false)}
//                   className="py-2 px-4 bg-gray-100 text-gray-600 rounded-lg shadow hover:bg-gray-200 transition"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleSave}
//                   className="py-2 px-4 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
//                 >
//                   Save Changes
//                 </button>
//               </>
//             ) : (
//               <button
//                 onClick={() => setIsEditing(true)}
//                 className="py-2 px-4 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
//               >
//                 Edit Profile
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";

// export default function UserSettings() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     profilePic: "/default-profile.jpg",
//     username: "JohnDoe",
//     email: "johndoe@example.com",
//     address: "1234 Elm Street",
//     password: "",
//     newPassword: "",
//     notificationsEnabled: true,
//     twoFactorAuth: false,
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setUserDetails((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSave = () => {
//     // API call logic to save changes
//     setIsEditing(false);
//     alert("Profile updated successfully!");
//   };

//   const handleDeleteAccount = () => {
//     // API call logic to delete account
//     setShowDeleteModal(false);
//     alert("Account deleted successfully!");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 py-12 px-6">
//       <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="bg-gradient-to-r from-indigo-600 to-blue-500 py-6 px-4 text-center">
//           <h1 className="text-2xl font-bold text-white">
//             {isEditing ? "Edit Profile" : "User Settings"}
//           </h1>
//         </div>
//         <div className="p-6 space-y-6">
//           {/* Profile Picture */}
//           <div className="flex justify-center">
//             <img
//               src={userDetails.profilePic}
//               alt="Profile Pic"
//               className="w-24 h-24 rounded-full border-2 border-indigo-500 object-cover"
//             />
//           </div>
//           {/* User Details */}
//           <div className="space-y-4">
//             <div>
//               <label
//                 htmlFor="username"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Username
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={userDetails.username}
//                 onChange={handleInputChange}
//                 disabled={!isEditing}
//                 className={`mt-2 block w-full rounded-md border ${
//                   isEditing ? "border-gray-300" : "border-transparent"
//                 } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 ${
//                   isEditing ? "bg-white" : "bg-gray-100"
//                 }`}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={userDetails.email}
//                 onChange={handleInputChange}
//                 disabled={!isEditing}
//                 className={`mt-2 block w-full rounded-md border ${
//                   isEditing ? "border-gray-300" : "border-transparent"
//                 } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 ${
//                   isEditing ? "bg-white" : "bg-gray-100"
//                 }`}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="address"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Street Address
//               </label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 value={userDetails.address}
//                 onChange={handleInputChange}
//                 disabled={!isEditing}
//                 className={`mt-2 block w-full rounded-md border ${
//                   isEditing ? "border-gray-300" : "border-transparent"
//                 } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 ${
//                   isEditing ? "bg-white" : "bg-gray-100"
//                 }`}
//               />
//             </div>
//             {isEditing && (
//               <>
//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Current Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={userDetails.password}
//                     onChange={handleInputChange}
//                     className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="newPassword"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     New Password
//                   </label>
//                   <input
//                     type="password"
//                     id="newPassword"
//                     name="newPassword"
//                     value={userDetails.newPassword}
//                     onChange={handleInputChange}
//                     className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2"
//                   />
//                 </div>
//               </>
//             )}
//           </div>
//           {/* Additional Options */}
//           <div className="space-y-4">
//             <div className="flex items-center justify-between">
//               <span className="text-sm font-medium text-gray-700">
//                 Enable Notifications
//               </span>
//               <input
//                 type="checkbox"
//                 name="notificationsEnabled"
//                 checked={userDetails.notificationsEnabled}
//                 onChange={handleInputChange}
//                 className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//               />
//             </div>
//             <div className="flex items-center justify-between">
//               <span className="text-sm font-medium text-gray-700">
//                 Two-Factor Authentication
//               </span>
//               <input
//                 type="checkbox"
//                 name="twoFactorAuth"
//                 checked={userDetails.twoFactorAuth}
//                 onChange={handleInputChange}
//                 className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//               />
//             </div>
//           </div>
//           {/* Action Buttons */}
//           <div className="flex justify-between items-center space-x-4">
//             {isEditing ? (
//               <>
//                 <button
//                   onClick={() => setIsEditing(false)}
//                   className="py-2 px-4 bg-gray-100 text-gray-600 rounded-lg shadow hover:bg-gray-200 transition"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleSave}
//                   className="py-2 px-4 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
//                 >
//                   Save Changes
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button
//                   onClick={() => setShowDeleteModal(true)}
//                   className="py-2 px-4 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
//                 >
//                   Delete Account
//                 </button>
//                 <button
//                   onClick={() => setIsEditing(true)}
//                   className="py-2 px-4 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
//                 >
//                   Edit Profile
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//       {/* Delete Account Modal */}
//       {showDeleteModal && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-xl font-bold text-gray-800">
//               Confirm Account Deletion
//             </h2>
//             <p className="text-gray-600 mt-4">
//               Are you sure you want to delete your account? This action cannot
//               be undone.
//             </p>
//             <div className="mt-6 flex justify-end space-x-4">
//               <button
//                 onClick={() => setShowDeleteModal(false)}
//                 className="py-2 px-4 bg-gray-100 text-gray-600 rounded-lg shadow hover:bg-gray-200 transition"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleDeleteAccount}
//                 className="py-2 px-4 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import { useState } from "react";

export default function UserSettings() {
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [userDetails, setUserDetails] = useState({
    profilePic: "/default-profile.jpg",
    username: "JohnDoe",
    email: "johndoe@example.com",
    address: "1234 Elm Street",
    notificationsEnabled: true,
    twoFactorAuth: false,
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    // API call logic to save changes
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handlePasswordChange = () => {
    if (userDetails.newPassword !== userDetails.confirmNewPassword) {
      alert("Passwords do not match!");
      return;
    }
    // API call logic to update the password
    setShowPasswordChange(false);
    alert("Password updated successfully!");
  };

  const handleDeleteAccount = () => {
    // API call logic to delete the account
    setShowDeleteModal(false);
    alert("Account deleted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 py-12 px-6">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 py-6 px-4 text-center">
          <h1 className="text-2xl font-bold text-white">
            {isEditing ? "Edit Profile" : "User Settings"}
          </h1>
        </div>
        <div className="p-6 space-y-6">
          {/* Profile Picture */}
          <div className="flex justify-center">
            <img
              src={userDetails.profilePic}
              alt="Profile Pic"
              className="w-24 h-24 rounded-full border-2 border-indigo-500 object-cover"
            />
          </div>
          {/* User Details */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={userDetails.username}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`mt-2 block w-full rounded-md border ${
                  isEditing ? "border-gray-300" : "border-transparent"
                } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 ${
                  isEditing ? "bg-white" : "bg-gray-100"
                }`}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`mt-2 block w-full rounded-md border ${
                  isEditing ? "border-gray-300" : "border-transparent"
                } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 ${
                  isEditing ? "bg-white" : "bg-gray-100"
                }`}
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Street Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={userDetails.address}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`mt-2 block w-full rounded-md border ${
                  isEditing ? "border-gray-300" : "border-transparent"
                } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2 ${
                  isEditing ? "bg-white" : "bg-gray-100"
                }`}
              />
            </div>
          </div>

          {/* Additional Options */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Enable Notifications
              </span>
              <input
                type="checkbox"
                name="notificationsEnabled"
                checked={userDetails.notificationsEnabled}
                onChange={handleInputChange}
                className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Two-Factor Authentication
              </span>
              <input
                type="checkbox"
                name="twoFactorAuth"
                checked={userDetails.twoFactorAuth}
                onChange={handleInputChange}
                className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Password Change */}
          <div className="space-y-4">
            <button
              onClick={() => setShowPasswordChange(!showPasswordChange)}
              className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Change Password
            </button>
            {showPasswordChange && (
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="currentPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    value={userDetails.currentPassword}
                    onChange={handleInputChange}
                    className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="newPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={userDetails.newPassword}
                    onChange={handleInputChange}
                    className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmNewPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirmNewPassword"
                    name="confirmNewPassword"
                    value={userDetails.confirmNewPassword}
                    onChange={handleInputChange}
                    className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2"
                  />
                </div>
                <button
                  onClick={handlePasswordChange}
                  className="w-full py-3 px-6 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                >
                  Save New Password
                </button>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center space-x-4">
            {isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(false)}
                  className="py-2 px-4 bg-gray-100 text-gray-600 rounded-lg shadow hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="py-2 px-4 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowDeleteModal(true)}
                  className="py-2 px-4 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
                >
                  Delete Account
                </button>
                <button
                  onClick={() => setIsEditing(true)}
                  className="py-2 px-4 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
                >
                  Edit Profile
                </button>
              </>
            )}
          </div>

          {/* Delete Confirmation Modal */}
          {showDeleteModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                <h2 className="text-lg font-bold text-gray-800">
                  Confirm Account Deletion
                </h2>
                <p className="text-sm text-gray-600">
                  Are you sure you want to delete your account? This action
                  cannot be undone.
                </p>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="py-2 px-4 bg-gray-100 text-gray-600 rounded-lg shadow hover:bg-gray-200 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteAccount}
                    className="py-2 px-4 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// "use client";
// import React, { useState } from "react";

// function UserProfileSettings() {
//   const [editMode, setEditMode] = useState(false);

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

// export default UserProfileSettings;
