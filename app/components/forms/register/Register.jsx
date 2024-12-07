"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const [role, setRole] = useState("tourist");
  const [backendError, setBackendError] = useState(null);  // State to store backend error
  const router = useRouter();
  const initialValues = {
    tourist: {
      FullName: "",
      Email: "",
      PhoneNumber: "",
      Address: "",
      Password: "",
      ConfirmPassword: "",
    },
    transporter: {
      FullName: "",
      Email: "",
      PhoneNumber: "",
      Address: "",
      vehicleDetails: "",
      vehicleRegistrationDoc: null,
      driverLicense: null,
      Password: "",
      ConfirmPassword: "",
    },
    localhomeOwner: {
      FullName: "",
      Email: "",
      PhoneNumber: "",
      Address: "",
      propertyDetails: "",
      propertyOwnershipDoc: null,
      imageGalleryDoc: [],
      Password: "",
      ConfirmPassword: "",
    },
    hotelOwner: {
      FullName: "",
      Email: "",
      PhoneNumber: "",
      Address: "",
      hotelDetails: "",
      propertyOwnershipDoc: null,
      imageGalleryDoc: [],
      Password: "",
      ConfirmPassword: "",
    },
    tourGuide: {
      FullName: "",
      Email: "",
      PhoneNumber: "",
      Address: "",
      idCard: null,
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
        .matches(/^(03[0-9]{9})$/, "Phone number must be a valid Pakistani number (e.g., 03001234567)")
        .required("Phone Number is required"),
      Address: Yup.string().required("Address is required"),
      Password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      )
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
        .matches(/^(03[0-9]{9})$/, "Phone number must be a valid Pakistani number (e.g., 03001234567)")
        .required("Phone Number is required"),
      Address: Yup.string().required("Address is required"),
      vehicleDetails: Yup.string().required("Vehicle details are required"),
      vehicleRegistrationDoc: Yup.mixed().required(
        "Vehicle Registration Form is required"
      ),
      driverLicense: Yup.mixed().required("Driver License is required"),
      Password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      )
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("Password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    localhomeOwner: Yup.object({
      FullName: Yup.string().required("Full Name is required"),
      Email: Yup.string()
        .email("Invalid Email address")
        .required("Email is required"),
      PhoneNumber: Yup.string()
        .matches(/^(03[0-9]{9})$/, "Phone number must be a valid Pakistani number (e.g., 03001234567)")
        .required("Phone Number is required"),
      Address: Yup.string().required("Address is required"),
      propertyDetails: Yup.string().required("Property details are required"),
      propertyOwnershipDoc: Yup.mixed().required(
        "Property Ownership Form is required"
      ),
      imageGalleryDoc: Yup.mixed().required("Image Gallery is required"),
      Password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      )
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
        .matches(/^(03[0-9]{9})$/, "Phone number must be a valid Pakistani number (e.g., 03001234567)")
        .required("Phone Number is required"),
      Address: Yup.string().required("Address is required"),
      hotelDetails: Yup.string().required("Hotel details are required"),
      propertyOwnershipDoc: Yup.mixed().required(
        "Property Ownership Form is required"
      ),
      imageGalleryDoc: Yup.mixed().required("Image Gallery is required"),
      Password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      )
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("Password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    tourGuide: Yup.object({
      FullName: Yup.string().required("Full Name is required"),
      Email: Yup.string()
        .email("Invalid Email address")
        .required("Email is required"),
      PhoneNumber: Yup.string()
        .matches(/^(03[0-9]{9})$/, "Phone number must be a valid Pakistani number (e.g., 03001234567)")
        .required("Phone Number is required"),
      Address: Yup.string().required("Address is required"),
      idCard: Yup.mixed().required("ID Card is required"),
      Password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      )
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("Password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (key === "imageGalleryDoc") {
        value?.forEach((file) => formData.append(key, file));
      } else {
        formData.append(key, value);
      }
    });
    try {
      const response = await axios.post(
        `https://localhost:7216/api/auth/register/${role}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Success:", response.data); // Logs the success response
      if (response.data.isSuccess) {
        router.push(`/verify-email?email=${encodeURIComponent(values.Email)}`);
      }
    } catch (error) {
      // Handle error and set backend error message
      if (error.response) {
        // Extract backend error message
        setBackendError(error.response.data.message || "Something went wrong!");
        console.error("Backend Error:", error.response.data);
      } else {
        setBackendError("Network error. Please try again later.");
      }
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
            className="mt-2 block w-full bg-gray-50 border rounded-md p-3"
          >
            <option value="tourist">Tourist</option>
            <option value="transporter">Transporter</option>
            <option value="localhomeOwner">Local Home Owner</option>
            <option value="hotelOwner">Hotel Owner</option>
            <option value="tourGuide">Tour Guide</option>
          </select>

          {backendError && (
            <div className="text-red-500 text-sm mt-4">{backendError}</div>
          )}

          <Formik
            initialValues={initialValues[role]}
            validationSchema={validationSchema[role]}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <Field
                    id="FullName"
                    name="FullName"
                    type="text"
                    placeholder="Full Name"
                    className="block w-full p-3 rounded-md border-gray-300"
                  />
                  <ErrorMessage name="FullName" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <Field
                    id="Email"
                    name="Email"
                    type="email"
                    placeholder="Email"
                    className="block w-full p-3 rounded-md border-gray-300"
                  />
                  <ErrorMessage name="Email" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <Field
                    id="PhoneNumber"
                    name="PhoneNumber"
                    type="text"
                    placeholder="Phone Number (e.g., 03001234567)"
                    className="block w-full p-3 rounded-md border-gray-300"
                  />
                  <ErrorMessage name="PhoneNumber" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <Field
                    id="Address"
                    name="Address"
                    type="text"
                    placeholder="Address"
                    className="block w-full p-3 rounded-md border-gray-300"
                  />
                  <ErrorMessage name="Address" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <Field
                    id="Password"
                    name="Password"
                    type="password"
                    placeholder="Password"
                    className="block w-full p-3 rounded-md border-gray-300"
                  />
                  <ErrorMessage name="Password" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <Field
                    id="ConfirmPassword"
                    name="ConfirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="block w-full p-3 rounded-md border-gray-300"
                  />
                  <ErrorMessage name="ConfirmPassword" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-indigo-600 text-white rounded-md py-3 px-6 hover:bg-indigo-700 focus:outline-none"
                  >
                    {isSubmitting ? "Submitting..." : "Register"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
