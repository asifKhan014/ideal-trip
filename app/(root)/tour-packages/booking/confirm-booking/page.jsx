// "use client";

// import { useRouter } from "next/navigation";
// import { useSearchParams } from "next/navigation";
// import { useState, useEffect } from "react";
// // import { loadStripe } from "@stripe/stripe-js";

// const packages = [
//   { id: 1, price: 35000, title: "Naran Kaghan", availableSpots: 20 },
//   { id: 2, price: 50000, title: "Hunza Valley", availableSpots: 15 },
//   { id: 3, price: 28000, title: "Swat", availableSpots: 10 },
//   { id: 4, price: 60000, title: "Skardu Adventure", availableSpots: 8 },
//   { id: 5, price: 20000, title: "Karachi City Tour", availableSpots: 25 },
// ];

// export default function BookingPage() {
//   const searchParams = useSearchParams();
//   const packageIds = searchParams.get("id")?.split(",").map(Number) || [];
//   const router = useRouter();

//   const [selectedPackages, setSelectedPackages] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     travelers: 1,
//   });
//   const [errors, setErrors] = useState({});

//   //   const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

//   useEffect(() => {
//     // Filter selected packages from the package list
//     const selected = packages.filter((pkg) => packageIds.includes(pkg.id));
//     setSelectedPackages(selected);

//     // Calculate total price
//     const total = selected.reduce((sum, pkg) => sum + pkg.price, 0);
//     setTotalPrice(total);
//   }, [packageIds]);

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Full name is required.";
//     }
//     if (
//       !formData.email.trim() ||
//       !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
//     ) {
//       newErrors.email = "Enter a valid email address.";
//     }
//     if (!formData.phone.trim() || !/^03\d{9}$/.test(formData.phone)) {
//       newErrors.phone =
//         "Enter a valid Pakistani phone number (e.g., 03XXXXXXXXX).";
//     }
//     if (formData.travelers < 1) {
//       newErrors.travelers = "Travelers must be at least 1.";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setTotalPrice(value);
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleStripePayment = async () => {
//     const stripe = await stripePromise;
//     if (!stripe) {
//       alert("Stripe not loaded.");
//       return;
//     }

//     // const response = await fetch("/api/create-checkout-session", {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/json" },
//     //   body: JSON.stringify({
//     //     packageIds,
//     //     fullName: formData.fullName,
//     //     email: formData.email,
//     //     phone: formData.phone,
//     //     travelers: formData.travelers,
//     //     totalPrice,
//     //   }),
//     // });

//     // const session = await response.json();
//     // if (session.error) {
//     //   alert(session.error);
//     // } else {
//     //   stripe.redirectToCheckout({ sessionId: session.id });
//     // }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       //   handleStripePayment();
//       router.push(`/tour-packages/booking/confirm-booking/success?id=1`);
//     }
//   };

//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
//         {/* Header */}
//         <h1 className="text-3xl font-bold text-gray-800 text-center">
//           Proceed to Booking
//         </h1>
//         <p className="text-center text-gray-600 mt-2">
//           Complete the form to confirm your booking and proceed to payment.
//         </p>

//         {/* Selected Packages */}
//         <div className="mt-6">
//           <h2 className="text-xl font-bold">Selected Packages:</h2>
//           <ul className="list-disc ml-6 mt-2">
//             {selectedPackages.map((pkg) => (
//               <li key={pkg.id}>
//                 {pkg.title} - PKR {pkg.price.toLocaleString()}
//               </li>
//             ))}
//           </ul>
//           <p className="text-lg font-semibold mt-4">
//             Total Price:{" "}
//             <span className="text-blue-600">
//               PKR {totalPrice.toLocaleString()}
//             </span>
//           </p>
//         </div>

//         {/* Booking Form */}
//         <form onSubmit={handleSubmit} className="mt-10 space-y-6">
//           {/* Full Name */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleInputChange}
//               placeholder="Enter your full name"
//               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${
//                 errors.fullName
//                   ? "border-red-500 focus:ring-red-300"
//                   : "border-gray-300 focus:ring-blue-500"
//               }`}
//             />
//             {errors.fullName && (
//               <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
//             )}
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Enter your email address"
//               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${
//                 errors.email
//                   ? "border-red-500 focus:ring-red-300"
//                   : "border-gray-300 focus:ring-blue-500"
//               }`}
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//             )}
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               placeholder="Enter your phone number (e.g., 03XXXXXXXXX)"
//               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${
//                 errors.phone
//                   ? "border-red-500 focus:ring-red-300"
//                   : "border-gray-300 focus:ring-blue-500"
//               }`}
//             />
//             {errors.phone && (
//               <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
//             )}
//           </div>

//           {/* Travelers */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Number of Travelers
//             </label>
//             <input
//               type="number"
//               name="travelers"
//               value={formData.travelers}
//               onChange={handleInputChange}
//               min="1"
//               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${
//                 errors.travelers
//                   ? "border-red-500 focus:ring-red-300"
//                   : "border-gray-300 focus:ring-blue-500"
//               }`}
//             />
//             {errors.travelers && (
//               <p className="text-red-500 text-sm mt-1">{errors.travelers}</p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <div className="text-center">
//             <button
//               type="submit"
//               className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring focus:ring-blue-300"
//             >
//               Proceed to Payment
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
// import { loadStripe } from "@stripe/stripe-js";

// Mock data for packages
const packages = [
  {
    id: 1,
    title: "Naran Kaghan",
    durationDays: 5,
    price: 35000, // Price per traveler in PKR
  },
  {
    id: 2,
    title: "Hunza Valley",
    durationDays: 7,
    price: 50000,
  },
  {
    id: 3,
    title: "Swat",
    durationDays: 4,
    price: 28000,
  },
  {
    id: 4,
    title: "Skardu Adventure",
    durationDays: 6,
    price: 60000,
  },
  {
    id: 5,
    title: "Karachi City Tour",
    durationDays: 3,
    price: 20000,
  },
];

export default function BookingPage() {
  const searchParams = useSearchParams();
  const packageId = searchParams.get("id"); // Extract package ID from URL
  // const packageId = parseInt(searchParams.get("id"), 10); // Extract package ID from URL
  // console.log("id: -----" + packageId);
  const router = useRouter();

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [travelers, setTravelers] = useState(1); // Default number of travelers
  const [totalPrice, setTotalPrice] = useState(0);
  const [userId,setUserId] = useState("");
  //   const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY); // Stripe public key

  // Fetch the package details based on ID
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const userObject = JSON.parse(storedUser);
        setUserId(userObject.userId);
      } catch (error) {
        console.error("Failed to parse user data from localStorage:", error);
      }
    }
    // const packageData = packages.find((pkg) => pkg.id === packageId);
    // console.log("------------------------->>>>>>>>>>>>" + packageData);
    // console.log("-------------------------" + JSON.stringify(packageData));
    if (packageId) {
      // Fetch package details (Replace with your API or data source)
      const fetchPackageDetails = async () => {
        const response = await fetch(
          `https:localhost:7216/api/package/${packageId}`
        );
        const data = await response.json();
        // console.log(data);
        if (data.isSuccess) {
          // console.log(data);
          setSelectedPackage(data.data);
          setTotalPrice(data.data.price);
        }
      };
      fetchPackageDetails();
    }
  }, [packageId]);

  // Handle changes in the number of travelers
  const handleTravelersChange = (e) => {
    const count = parseInt(e.target.value, 10) || 0; // Ensure numeric input
    setTravelers(count);
    if (selectedPackage) {
      setTotalPrice(selectedPackage.price * count); // Update total price
    }
  };

  // Handle Stripe payment
  const handleStripePayment = async () => {
    const stripe = await stripePromise;
    if (!stripe) {
      alert("Stripe not loaded. Please try again.");
      return;
    }

    // const response = await fetch("/api/create-checkout-session", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     packageId: selectedPackage.id,
    //     travelers,
    //     totalPrice,
    //   }),
    // });

    // const session = await response.json();
    // if (session.error) {
    //   alert(session.error);
    // } else {
    //   stripe.redirectToCheckout({ sessionId: session.id });
    // }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (travelers < 1) {
  //     alert("Please enter a valid number of travelers.");
  //     return;
  //   }
  //   // handleStripePayment();
  //   router.push(`/tour-packages/booking/confirm-booking/success?id=1`);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form input
    if (travelers < 1) {
      alert("Please enter a valid number of travelers.");
      return;
    }
    console.log(userId);
  
    // Gather form data
    const formData = {
      Id : userId,
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      phoneNumber: e.target.phone.value,
      numberOfTravelers: travelers,
      packageId: packageId, // Assuming `packageId` is the current package ID
      totalBill: totalPrice,
    };
    console.log(formData);
    router.push('/tour-packages/booking/confirm-booking/success?id=1')
  
    // try {
    //   // Make the API request
    //   const response = await fetch("https://localhost:7216/api/package/booking/initiate", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: formData,
    //   });
  
    //   // Parse the response
    //   const data = await response.json();
  
    //   if (response.ok && data.isSuccess) {
    //     // Redirect to Stripe checkout or success page
    //     console.log("Session ID:", data.SessionId);
    //     // For Stripe Checkout: Redirect to Stripe with the Session ID
    //     // window.location.href = `https://checkout.stripe.com/pay/${data.SessionId}`;
    //   } else {
    //     alert(data.message || "Failed to initiate booking.");
    //   }
    // } catch (error) {
    //   console.error("Error during booking initiation:", error);
    //   alert("An error occurred. Please try again.");
    // }
    // try {
    //   // Make the API request
    //   const response = await axios.post(
    //     "https://localhost:7216/api/package/booking/initiate",
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
  
    //   // Check response status and data
    //   if (response.data.isSuccess) {
    //     // Redirect to Stripe checkout or success page
    //     console.log("Session ID:", response.data.SessionId);
    //     // For Stripe Checkout: Redirect to Stripe with the Session ID
    //     // window.location.href = `https://checkout.stripe.com/pay/${response.data.SessionId}`;
    //   } else {
    //     alert(response.data.message || "Failed to initiate booking.");
    //   }
    // } catch (error) {
    //   // Handle errors (network or API issues)
    //   console.error("Error during booking initiation:", error);
  
    //   // Check if error response is available
    //   if (error.response) {
    //     alert(error.response.data.message || "An error occurred on the server.");
    //   } else {
    //     alert("An error occurred. Please try again.");
    //   }
    // }
  };
  

  //   if (!selectedPackage) return <p>Loading package details...</p>;

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          {/* Booking: {selectedPackage.title ? selectedPackage.title : " "} */}
        </h1>
        <p className="text-center text-gray-600 mb-6">
          {/* Duration: {selectedPackage.durationDays} days | Price: PKR{" "}
          {selectedPackage.price} per traveler */}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Travelers */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Number of Travelers
            </label>
            <input
              type="number"
              name="travelers"
              value={travelers}
              onChange={handleTravelersChange}
              min="1"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Total Price */}
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-lg font-semibold text-gray-800">
              Total Price: PKR {totalPrice}
            </p>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:opacity-90"
            >
              Proceed to Payment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
