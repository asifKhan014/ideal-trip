"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const [role, setRole] = useState("tourist");
  const [error, setError] = useState("");
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
        .matches(/^\d{10,15}$/, "Phone number must be 10-15 digits")
        .required("Phone Number is required"),
      Address: Yup.string().required("Address is required"),
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
      Address: Yup.string().required("Address is required"),
      vehicleDetails: Yup.string().required("Vehicle details are required"),
      vehicleRegistrationDoc: Yup.mixed().required(
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
    localhomeOwner: Yup.object({
      FullName: Yup.string().required("Full Name is required"),
      Email: Yup.string()
        .email("Invalid Email address")
        .required("Email is required"),
      PhoneNumber: Yup.string()
        .matches(/^\d{10,15}$/, "Phone number must be 10-15 digits")
        .required("Phone Number is required"),
      Address: Yup.string().required("Address is required"),
      propertyDetails: Yup.string().required("Property details are required"),
      propertyOwnershipDoc: Yup.mixed().required(
        "Property Ownership Form is required"
      ),
      imageGalleryDoc: Yup.mixed().required("Image Gallery is required"),
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
      Address: Yup.string().required("Address is required"),
      hotelDetails: Yup.string().required("Hotel details are required"),
      propertyOwnershipDoc: Yup.mixed().required(
        "Property Ownership Form is required"
      ),
      imageGalleryDoc: Yup.mixed().required("Image Gallery is required"),
      Password: Yup.string()
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
        .matches(/^\d{10,15}$/, "Phone number must be 10-15 digits")
        .required("Phone Number is required"),
      Address: Yup.string().required("Address is required"),
      idCard: Yup.mixed().required("ID Card is required"),
      Password: Yup.string()
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
      if (value instanceof File) {
        formData.append(key, value); // For single file
      } else if (Array.isArray(value)) {
        value.forEach((file) => formData.append(key, file)); // For multiple files
      } else {
        formData.append(key, value); // For other fields
      }
    });
    try {
      const response = await axios.post(
        `http://localhost:5277/api/auth/register/${role}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Success:", response.data); // Logs the success response
      if (response.data.isSuccess) {
        console.log("Should redirect now");
        router.push(`/verify-email?email=${encodeURIComponent(values.Email)}`);
      }
    } catch (error) {
      // Handle error and access backend response
      if (error.response) {
        // Extract backend response message
        const backendMessage = error.response.data.messege;
        console.error("Backend Error:", backendMessage);
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

          <Formik
            key={role}
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
                    {[
                      "vehicleRegistrationDoc",
                      "driverLicense",
                      "propertyOwnershipDoc",
                      "imageGalleryDoc",
                      "idCard",
                    ].includes(field) ? (
                      field === "imageGalleryDoc" ? (
                        <input
                          id={field}
                          type="file"
                          multiple
                          onChange={(e) =>
                            setFieldValue(field, Array.from(e.target.files))
                          }
                          className="mt-2 block w-full bg-gray-50 border rounded-md p-3"
                        />
                      ) : (
                        <input
                          id={field}
                          type="file"
                          onChange={(e) =>
                            setFieldValue(field, e.target.files[0])
                          }
                          className="mt-2 block w-full bg-gray-50 border rounded-md p-3"
                        />
                      )
                    ) : (
                      <Field
                        id={field}
                        name={field}
                        type={
                          field.toLowerCase().includes("password")
                            ? "password"
                            : "text"
                        }
                        className="mt-2 block w-full bg-gray-50 border rounded-md p-3"
                      />
                    )}
                    <ErrorMessage
                      name={field}
                      component="div"
                      className="text-sm text-red-600"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Register
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <p className="mb-10 text-center text-sm text-gray-500">
          Already have a account?
          <Link
            href="/login"
            className="font-bold ml-2 leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
      <span className="errors">{error}</span>
    </div>
  );
}
