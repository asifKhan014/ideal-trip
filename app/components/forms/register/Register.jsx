// "use client";
// import { useState } from "react";

// export default function Register() {
//   const [role, setRole] = useState("tourist"); // Default to Tourist
//   const [formData, setFormData] = useState({
//     tourist: {
//       FullName: "",
//       Email: "",
//       PhoneNumber: "",
//       Password: "",
//       ConfirmPassword: "",
//     },
//     transporter: {
//       FullName: "",
//       Email: "",
//       PhoneNumber: "",
//       vehicleDetails: "",
//       Password: "",
//       ConfirmPassword: "",
//     },
//     propertyOwner: {
//       FullName: "",
//       Email: "",
//       PhoneNumber: "",
//       propertyDetails: "",
//       Password: "",
//       ConfirmPassword: "",
//     },
//     hotelOwner: {
//       FullName: "",
//       Email: "",
//       PhoneNumber: "",
//       hotelDetails: "",
//       Password: "",
//       ConfirmPassword: "",
//     },
//   });
//   console.log(formData[0]);
//   const handleInputChange = (e, roleType, field) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [roleType]: { ...prevData[roleType], [field]: e.target.value },
//     }));
//   };

//   return (
//     <>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm"> */}
//         <div className="">
//           <img
//             alt="Your Company"
//             src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
//             className="mx-auto h-10 w-auto"
//           />
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Create your account
//           </h2>

//           {/* Role Selection Tabs */}
//           <div className="mt-4 flex justify-center space-x-4">
//             <button
//               onClick={() => setRole("tourist")}
//               className={`px-4 py-2 rounded-md ${
//                 role === "tourist" ? "bg-indigo-600 text-white" : "bg-gray-200"
//               }`}
//             >
//               Tourist
//             </button>
//             <button
//               onClick={() => setRole("transporter")}
//               className={`px-4 py-2 rounded-md ${
//                 role === "transporter"
//                   ? "bg-indigo-600 text-white"
//                   : "bg-gray-200"
//               }`}
//             >
//               Transporter
//             </button>
//             <button
//               onClick={() => setRole("propertyOwner")}
//               className={`px-4 py-2 rounded-md ${
//                 role === "propertyOwner"
//                   ? "bg-indigo-600 text-white"
//                   : "bg-gray-200"
//               }`}
//             >
//               Property Owner
//             </button>
//             <button
//               onClick={() => setRole("hotelOwner")}
//               className={`px-4 py-2 rounded-md ${
//                 role === "hotelOwner"
//                   ? "bg-indigo-600 text-white"
//                   : "bg-gray-200"
//               }`}
//             >
//               Hotel Owner
//             </button>
//           </div>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           {/* Form for Tourist */}
//           {role === "tourist" && (
//             <form className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.tourist.FullName}
//                   onChange={(e) => handleInputChange(e, "tourist", "FullName")}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Email address
//                 </label>
//                 <input
//                   type="Email"
//                   value={formData.tourist.Email}
//                   onChange={(e) => handleInputChange(e, "tourist", "Email")}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   value={formData.tourist.PhoneNumber}
//                   onChange={(e) =>
//                     handleInputChange(e, "tourist", "PhoneNumber")
//                   }
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Password
//                 </label>
//                 <input
//                   type="Password"
//                   value={formData.tourist.Password}
//                   onChange={(e) => handleInputChange(e, "tourist", "Password")}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Confirm Password
//                 </label>
//                 <input
//                   type="Password"
//                   value={formData.tourist.ConfirmPassword}
//                   onChange={(e) =>
//                     handleInputChange(e, "tourist", "ConfirmPassword")
//                   }
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 text-white rounded-md py-2"
//               >
//                 Register as Tourist
//               </button>
//             </form>
//           )}

//           {/* Form for Transporter */}
//           {role === "transporter" && (
//             <form className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.transporter.FullName}
//                   onChange={(e) =>
//                     handleInputChange(e, "transporter", "FullName")
//                   }
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Email address
//                 </label>
//                 <input
//                   type="Email"
//                   value={formData.transporter.Email}
//                   onChange={(e) => handleInputChange(e, "transporter", "Email")}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   value={formData.transporter.PhoneNumber}
//                   onChange={(e) =>
//                     handleInputChange(e, "transporter", "PhoneNumber")
//                   }
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Vehicle Details
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.transporter.vehicleDetails}
//                   onChange={(e) =>
//                     handleInputChange(e, "transporter", "vehicleDetails")
//                   }
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Password
//                 </label>
//                 <input
//                   type="Password"
//                   value={formData.transporter.Password}
//                   onChange={(e) =>
//                     handleInputChange(e, "transporter", "Password")
//                   }
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Confirm Password
//                 </label>
//                 <input
//                   type="Password"
//                   value={formData.transporter.ConfirmPassword}
//                   onChange={(e) =>
//                     handleInputChange(e, "transporter", "ConfirmPassword")
//                   }
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 text-white rounded-md py-2"
//               >
//                 Register as Transporter
//               </button>
//             </form>
//           )}

//           {/* Form for Property Owner */}
//           {role === "propertyOwner" && (
//             <form className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.propertyOwner.FullName}
//                   onChange={(e) =>
//                     handleInputChange(e, "propertyOwner", "FullName")
//                   }
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Email address
//                 </label>
//                 <input
//                   type="Email"
//                   value={formData.propertyOwner.Email}
//                   onChange={(e) =>
//                     handleInputChange(e, "propertyOwner", "Email")
//                   }
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   value={formData.propertyOwner.PhoneNumber}
//                   onChange={(e) =>
//                     handleInputChange(e, "propertyOwner", "PhoneNumber")
//                   }
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Property Details
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.propertyOwner.propertyDetails}
//                   onChange={(e) =>
//                     handleInputChange(e, "propertyOwner", "propertyDetails")
//                   }
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Password
//                 </label>
//                 <input
//                   type="Password"
//                   value={formData.propertyOwner.Password}
//                   onChange={(e) =>
//                     handleInputChange(e, "propertyOwner", "Password")
//                   }
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Confirm Password
//                 </label>
//                 <input
//                   type="Password"
//                   value={formData.propertyOwner.ConfirmPassword}
//                   onChange={(e) =>
//                     handleInputChange(e, "propertyOwner", "ConfirmPassword")
//                   }
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 text-white rounded-md py-2"
//               >
//                 Register as Property Owner
//               </button>
//             </form>
//           )}

//           {/* Form for Hotel  Owner */}
//           {role === "hotelOwner" && (
//             <form className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.hotelOwner.FullName}
//                   onChange={(e) =>
//                     handleInputChange(e, "hotelOwner", "FullName")
//                   }
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Email address
//                 </label>
//                 <input
//                   type="Email"
//                   value={formData.hotelOwner.Email}
//                   onChange={(e) => handleInputChange(e, "hotelOwner", "Email")}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   value={formData.hotelOwner.PhoneNumber}
//                   onChange={(e) =>
//                     handleInputChange(e, "hotelOwner", "PhoneNumber")
//                   }
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Hotel Details
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.hotelOwner.propertyDetails}
//                   onChange={(e) =>
//                     handleInputChange(e, "hotelOwner", "propertyDetails")
//                   }
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Password
//                 </label>
//                 <input
//                   type="Password"
//                   value={formData.hotelOwner.Password}
//                   onChange={(e) =>
//                     handleInputChange(e, "hotelOwner", "Password")
//                   }
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Confirm Password
//                 </label>
//                 <input
//                   type="Password"
//                   value={formData.hotelOwner.ConfirmPassword}
//                   onChange={(e) =>
//                     handleInputChange(e, "hotelOwner", "ConfirmPassword")
//                   }
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 text-white rounded-md py-2"
//               >
//                 Register as Hotel Owner
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// "use client";
// import { useState } from "react";

// export default function Register() {
//   const [role, setRole] = useState("tourist"); // Default role
//   const [formData, setFormData] = useState({
//     tourist: {
//       FullName: "",
//       Email: "",
//       PhoneNumber: "",
//       Password: "",
//       ConfirmPassword: "",
//     },
//     transporter: {
//       FullName: "",
//       Email: "",
//       PhoneNumber: "",
//       vehicleDetails: "",
//       vehicleRegistrationForm: null,
//       driverLicense: null,
//       Password: "",
//       ConfirmPassword: "",
//     },
//     propertyOwner: {
//       FullName: "",
//       Email: "",
//       PhoneNumber: "",
//       propertyDetails: "",
//       propertyOwnershipForm: null,
//       imageGallery: null,
//       Password: "",
//       ConfirmPassword: "",
//     },
//     hotelOwner: {
//       FullName: "",
//       Email: "",
//       PhoneNumber: "",
//       hotelDetails: "",
//       propertyOwnershipForm: null,
//       imageGallery: null,
//       Password: "",
//       ConfirmPassword: "",
//     },
//   });

//   const handleInputChange = (e, roleType, field) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [roleType]: { ...prevData[roleType], [field]: e.target.value },
//     }));
//   };

//   const handleFileUpload = (e, roleType, field) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [roleType]: { ...prevData[roleType], [field]: e.target.files[0] },
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-6">
//       <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="bg-gradient-to-r from-indigo-600 to-blue-500 py-8 px-4 text-center">
//           <h1 className="text-3xl font-bold text-white">Create Your Account</h1>
//           <p className="text-indigo-200 mt-2">
//             Select your role and complete the form to register.
//           </p>
//         </div>
//         <div className="p-6 sm:p-10 space-y-8">
//           {/* Dropdown Role Selection */}
//           <div>
//             <label
//               htmlFor="roleSelection"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Select Role
//             </label>
//             <select
//               id="roleSelection"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="mt-2 block w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
//             >
//               <option value="tourist">Tourist</option>
//               <option value="transporter">Transporter</option>
//               <option value="propertyOwner">Property Owner</option>
//               <option value="hotelOwner">Hotel Owner</option>
//             </select>
//           </div>

//           {/* Form */}
//           <form className="space-y-6">
//             {/* Common Fields */}
//             {[
//               "Full Name",
//               "Email",
//               "Phone Number",
//               "Password",
//               "Confirm Password",
//             ].map((field, index) => (
//               <div key={index}>
//                 <label
//                   htmlFor={field.toLowerCase().replace(/\s/g, "")}
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   {field}
//                 </label>
//                 <input
//                   id={field.toLowerCase().replace(/\s/g, "")}
//                   type={
//                     field.includes("Password")
//                       ? "Password"
//                       : field.includes("Email")
//                       ? "Email"
//                       : "text"
//                   }
//                   value={
//                     formData[role][
//                       field
//                         .toLowerCase()
//                         .replace(/\s/g, "")
//                         .replace("confirm", "confirm")
//                     ]
//                   }
//                   onChange={(e) =>
//                     handleInputChange(
//                       e,
//                       role,
//                       field
//                         .toLowerCase()
//                         .replace(/\s/g, "")
//                         .replace("confirm", "confirm")
//                     )
//                   }
//                   className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-3"
//                   placeholder={`Enter your ${field}`}
//                 />
//               </div>
//             ))}

//             {/* Role-Specific Fields */}
//             {role === "transporter" && (
//               <>
//                 <div>
//                   <label
//                     htmlFor="vehicleDetails"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Vehicle Details
//                   </label>
//                   <input
//                     id="vehicleDetails"
//                     type="text"
//                     value={formData.transporter.vehicleDetails}
//                     onChange={(e) =>
//                       handleInputChange(e, "transporter", "vehicleDetails")
//                     }
//                     className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-3"
//                     placeholder="Enter vehicle details"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="vehicleRegistrationForm"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Upload Vehicle Registration Form
//                   </label>
//                   <input
//                     id="vehicleRegistrationForm"
//                     type="file"
//                     onChange={(e) =>
//                       handleFileUpload(
//                         e,
//                         "transporter",
//                         "vehicleRegistrationForm"
//                       )
//                     }
//                     className="mt-2 block w-full text-sm text-gray-600"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="driverLicense"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Upload Driver License
//                   </label>
//                   <input
//                     id="driverLicense"
//                     type="file"
//                     onChange={(e) =>
//                       handleFileUpload(e, "transporter", "driverLicense")
//                     }
//                     className="mt-2 block w-full text-sm text-gray-600"
//                   />
//                 </div>
//               </>
//             )}
//             {["propertyOwner", "hotelOwner"].includes(role) && (
//               <>
//                 <div>
//                   <label
//                     htmlFor="propertyOwnershipForm"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Upload Property Ownership Document
//                   </label>
//                   <input
//                     id="propertyOwnershipForm"
//                     type="file"
//                     onChange={(e) =>
//                       handleFileUpload(e, role, "propertyOwnershipForm")
//                     }
//                     className="mt-2 block w-full text-sm text-gray-600"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="imageGallery"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Upload Image Gallery (Building/Rooms)
//                   </label>
//                   <input
//                     id="imageGallery"
//                     type="file"
//                     multiple
//                     onChange={(e) => handleFileUpload(e, role, "imageGallery")}
//                     className="mt-2 block w-full text-sm text-gray-600"
//                   />
//                 </div>
//               </>
//             )}
//             <button
//               type="submit"
//               className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-indigo-700 hover:to-blue-600 focus:ring-4 focus:ring-indigo-300 focus:outline-none transition duration-200"
//             >
//               Register as {role.charAt(0).toUpperCase() + role.slice(1)}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// GOOD
// "use client";
// import { useState } from "react";

// export default function Register() {
//   const [role, setRole] = useState("tourist"); // Default role
//   const [formData, setFormData] = useState({
//     tourist: {
//       FullName: "",
//       Email: "",
//       PhoneNumber: "",
//       Password: "",
//       ConfirmPassword: "",
//     },
//     transporter: {
//       FullName: "",
//       Email: "",
//       PhoneNumber: "",
//       vehicleDetails: "",
//       vehicleRegistrationForm: null,
//       driverLicense: null,
//       Password: "",
//       ConfirmPassword: "",
//     },
//     propertyOwner: {
//       FullName: "",
//       Email: "",
//       PhoneNumber: "",
//       propertyDetails: "",
//       propertyOwnershipForm: null,
//       imageGallery: null,
//       Password: "",
//       ConfirmPassword: "",
//     },
//     hotelOwner: {
//       FullName: "",
//       Email: "",
//       PhoneNumber: "",
//       hotelDetails: "",
//       propertyOwnershipForm: null,
//       imageGallery: null,
//       Password: "",
//       ConfirmPassword: "",
//     },
//   });

//   const [errors, setErrors] = useState({}); // Track validation errors

//   const handleInputChange = (e, roleType, field) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [roleType]: { ...prevData[roleType], [field]: e.target.value },
//     }));
//   };

//   const handleFileUpload = (e, roleType, field) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [roleType]: { ...prevData[roleType], [field]: e.target.files[0] },
//     }));
//   };

//   const validateField = (field, value, roleType) => {
//     let error = "";

//     if (!value || value.trim() === "") {
//       error = `${field} is required`;
//     } else if (field === "Email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
//       error = "Invalid Email address";
//     } else if (field === "PhoneNumber" && !/^\d{10,15}$/.test(value)) {
//       error = "Invalid phone number";
//     } else if (
//       (field === "Password" || field === "ConfirmPassword") &&
//       value.length < 6
//     ) {
//       error = "Password must be at least 6 characters";
//     } else if (
//       field === "ConfirmPassword" &&
//       value !== formData[roleType].Password
//     ) {
//       error = "Passwords do not match";
//     }
//     return error;
//   };

//   const validateForm = () => {
//     const currentErrors = {};
//     const currentRoleData = formData[role];

//     // Validate each field for the selected role
//     for (let field in currentRoleData) {
//       const error = validateField(field, currentRoleData[field], role);
//       if (error) currentErrors[field] = error;
//     }

//     setErrors(currentErrors);
//     return Object.keys(currentErrors).length === 0; // Form is valid if no errors
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       alert("Form submitted successfully");
//     } else {
//       alert("Please fix the errors before submitting");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-6">
//       <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="bg-gradient-to-r from-indigo-600 to-blue-500 py-8 px-4 text-center">
//           <h1 className="text-3xl font-bold text-white">Create Your Account</h1>
//           <p className="text-indigo-200 mt-2">
//             Select your role and complete the form to register.
//           </p>
//         </div>
//         <div className="p-6 sm:p-10 space-y-8">
//           <div>
//             <label
//               htmlFor="roleSelection"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Select Role
//             </label>
//             <select
//               id="roleSelection"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="mt-2 block w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
//             >
//               <option value="tourist">Tourist</option>
//               <option value="transporter">Transporter</option>
//               <option value="propertyOwner">Property Owner</option>
//               <option value="hotelOwner">Hotel Owner</option>
//             </select>
//           </div>

//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {Object.keys(formData[role]).map((field, index) => (
//               <div key={index}>
//                 <label
//                   htmlFor={field}
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   {field
//                     .replace(/([A-Z])/g, " $1")
//                     .replace(/^./, (str) => str.toUpperCase())}
//                 </label>
//                 {field.includes("Form") || field === "imageGallery" ? (
//                   <input
//                     id={field}
//                     type="file"
//                     multiple={field === "imageGallery"}
//                     onChange={(e) => handleFileUpload(e, role, field)}
//                     className="mt-2 block w-full text-sm text-gray-600"
//                   />
//                 ) : (
//                   <input
//                     id={field}
//                     type={
//                       field.includes("Password")
//                         ? "Password"
//                         : field === "Email"
//                         ? "Email"
//                         : "text"
//                     }
//                     value={formData[role][field]}
//                     onChange={(e) => handleInputChange(e, role, field)}
//                     className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-3"
//                     placeholder={`Enter your ${field}`}
//                   />
//                 )}
//                 {errors[field] && (
//                   <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
//                 )}
//               </div>
//             ))}
//             <button
//               type="submit"
//               className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-indigo-700 hover:to-blue-600 focus:ring-4 focus:ring-indigo-300 focus:outline-none transition duration-200"
//             >
//               Register as {role.charAt(0).toUpperCase() + role.slice(1)}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function Register() {
  const [role, setRole] = useState("tourist");

  const initialValues = {
    tourist: {
      FullName: "",
      Email: "",
      PhoneNumber: "",
      Password: "",
      ConfirmPassword: "",
    },
    transporter: {
      FullName: "",
      Email: "",
      PhoneNumber: "",
      vehicleDetails: "",
      vehicleRegistrationForm: null,
      driverLicense: null,
      Password: "",
      ConfirmPassword: "",
    },
    propertyOwner: {
      FullName: "",
      Email: "",
      PhoneNumber: "",
      propertyDetails: "",
      propertyOwnershipForm: null,
      imageGallery: null,
      Password: "",
      ConfirmPassword: "",
    },
    hotelOwner: {
      FullName: "",
      Email: "",
      PhoneNumber: "",
      hotelDetails: "",
      propertyOwnershipForm: null,
      imageGallery: null,
      Password: "",
      ConfirmPassword: "",
    },
  };

  const validationSchema = {
    tourist: Yup.object({
      FullName: Yup.string().required("Full Name is required"),
      Email: Yup.string()
        .email("Invalid Email address")
        .required("Email is required"),
      PhoneNumber: Yup.string()
        .matches(/^\d{10,15}$/, "Phone number must be 10-15 digits")
        .required("Phone Number is required"),
      Password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("Password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    transporter: Yup.object({
      FullName: Yup.string().required("Full Name is required"),
      Email: Yup.string()
        .email("Invalid Email address")
        .required("Email is required"),
      PhoneNumber: Yup.string()
        .matches(/^\d{10,15}$/, "Phone number must be 10-15 digits")
        .required("Phone Number is required"),
      vehicleDetails: Yup.string().required("Vehicle details are required"),
      vehicleRegistrationForm: Yup.mixed().required(
        "Vehicle Registration Form is required"
      ),
      driverLicense: Yup.mixed().required("Driver License is required"),
      Password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("Password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    propertyOwner: Yup.object({
      FullName: Yup.string().required("Full Name is required"),
      Email: Yup.string()
        .email("Invalid Email address")
        .required("Email is required"),
      PhoneNumber: Yup.string()
        .matches(/^\d{10,15}$/, "Phone number must be 10-15 digits")
        .required("Phone Number is required"),
      propertyDetails: Yup.string().required("Property details are required"),
      propertyOwnershipForm: Yup.mixed().required(
        "Property Ownership Form is required"
      ),
      imageGallery: Yup.mixed().required("Image Gallery is required"),
      Password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("Password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    hotelOwner: Yup.object({
      FullName: Yup.string().required("Full Name is required"),
      Email: Yup.string()
        .email("Invalid Email address")
        .required("Email is required"),
      PhoneNumber: Yup.string()
        .matches(/^\d{10,15}$/, "Phone number must be 10-15 digits")
        .required("Phone Number is required"),
      hotelDetails: Yup.string().required("Hotel details are required"),
      propertyOwnershipForm: Yup.mixed().required(
        "Property Ownership Form is required"
      ),
      imageGallery: Yup.mixed().required("Image Gallery is required"),
      Password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("Password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
  };

  const handleSubmit = async (values) => {
    console.log(values);

    try {
      const result = await axios.post(
        `https://localhost:7216/api/UserAccount/register/${role}`,
        values,
        {
          headers: {
            "Content-Type": "application/json", // Change to multipart/form-data if sending files
          },
        }
      );

      console.log("Response:", result.data);
      alert("Registration successful: " + result.data.message);
    } catch (error) {
      console.error(
        "Error during registration:",
        error.response?.data || error.message
      );
      alert(
        "Registration failed: " +
          (error.response?.data?.message || "Unexpected error")
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 py-8 px-4 text-center">
          <h1 className="text-3xl font-bold text-white">Create Your Account</h1>
          <p className="text-indigo-200 mt-2">
            Select your role and complete the form to register.
          </p>
        </div>
        <div className="p-6 sm:p-10 space-y-8">
          <div>
            <label
              htmlFor="roleSelection"
              className="block text-sm font-medium text-gray-700"
            >
              Select Role
            </label>
            <select
              id="roleSelection"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-2 block w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
            >
              <option value="tourist">Tourist</option>
              <option value="transporter">Transporter</option>
              <option value="propertyOwner">Property Owner</option>
              <option value="hotelOwner">Hotel Owner</option>
            </select>
          </div>

          <Formik
            key={role} // Reset Formik when the role changes
            initialValues={initialValues[role]}
            validationSchema={validationSchema[role]}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ setFieldValue }) => (
              <Form className="space-y-6">
                {Object.keys(initialValues[role]).map((field, index) => (
                  <div key={index}>
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {field
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </label>
                    {field.includes("Form") || field === "imageGallery" ? (
                      <input
                        id={field}
                        type="file"
                        onChange={(e) =>
                          setFieldValue(field, e.target.files[0])
                        }
                        className="mt-2 block w-full text-sm text-gray-600"
                      />
                    ) : (
                      <Field
                        id={field}
                        name={field}
                        type={
                          field.includes("Password")
                            ? "password"
                            : field === "Email"
                            ? "email"
                            : "text"
                        }
                        className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-3"
                        placeholder={`Enter your ${field}`}
                      />
                    )}
                    <ErrorMessage
                      name={field}
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-indigo-700 hover:to-blue-600 focus:ring-4 focus:ring-indigo-300 focus:outline-none transition duration-200"
                >
                  Register as {role.charAt(0).toUpperCase() + role.slice(1)}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
