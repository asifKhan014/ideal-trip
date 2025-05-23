"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const [role, setRole] = useState("tourist");
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
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
      ratePerDay: "",
      Location: "",
      Bio: "",
      Experience: "",
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
        .matches(
          /^03\d{9}$/,
          "Phone number must start with 03 and be exactly 11 digits"
        )
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
        .matches(
          /^03\d{9}$/,
          "Phone number must start with 03 and be exactly 11 digits"
        )
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
        .matches(
          /^03\d{9}$/,
          "Phone number must start with 03 and be exactly 11 digits"
        )
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
        .matches(
          /^03\d{9}$/,
          "Phone number must start with 03 and be exactly 11 digits"
        )
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
        .matches(
          /^03\d{9}$/,
          "Phone number must start with 03 and be exactly 11 digits"
        )
        .required("Phone Number is required"),
      Address: Yup.string().required("Address is required"),
      idCard: Yup.mixed().required("ID Card is required"),
      ratePerDay: Yup.number()
        .integer()
        .min(1)
        .max(20000)
        .required("Per Day Rate is required"),
      Bio: Yup.string().required("Bio is required"),
      Experience: Yup.string().required("Experience is required"),
      Location: Yup.string().required("Preferred Location is required"),
      Password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("Password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setLoading(true);
    setError([]);
    const formData = new FormData();
    
    Object.entries(values).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (Array.isArray(value)) {
        value.forEach((file) => formData.append(key, file));
      } else {
        formData.append(key, value);
      }
    });
    
    const formatErrors = (errorObj) => {
      return Object.values(errorObj).flat();
    };    
    
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
      const response = await axios.post(
        `${backendUrl}/api/auth/register/${role}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      
      if (response.data.isSuccess) {
        router.push(`/verify-email?email=${encodeURIComponent(values.Email)}`);
      }
    } catch (error) {
      if (error.response) {
        let backendErrors = error.response.data.errors;
        const errorMessages = formatErrors(backendErrors);
        setError(errorMessages);
      }
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-400 flex items-center justify-center py-12 px-6 ">
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
            {({ setFieldValue, isSubmitting }) => (
              <Form className="space-y-6">
                {Object.keys(initialValues[role]).map((field, index) => (
                  <div key={index} className="space-y-1">
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
                        <>
                          <input
                            id={field}
                            name={field}
                            type="file"
                            multiple
                            onChange={(e) =>
                              setFieldValue(field, Array.from(e.target.files))
                            }
                            className="mt-2 block w-full bg-gray-50 border rounded-md p-3"
                          />
                          <ErrorMessage
                            name={field}
                            component="div"
                            className="text-sm text-red-600"
                          />
                        </>
                      ) : (
                        <>
                          <input
                            id={field}
                            name={field}
                            type="file"
                            onChange={(e) =>
                              setFieldValue(field, e.target.files[0])
                            }
                            className="mt-2 block w-full bg-gray-50 border rounded-md p-3"
                          />
                          <ErrorMessage
                            name={field}
                            component="div"
                            className="text-sm text-red-600"
                          />
                        </>
                      )
                    ) : (
                      <>
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
                        <ErrorMessage
                          name={field}
                          component="div"
                          className="text-sm text-red-600"
                        />
                      </>
                    )}
                  </div>
                ))}
                
                {error.length > 0 && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <div className="text-sm text-red-600">
                      <ul className="list-disc pl-5 space-y-1">
                        {error.map((err, index) => (
                          <li key={index}>{err}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || isSubmitting}
                  className={`w-full py-3 px-6 rounded-md text-white ${
                    loading || isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700"
                  }`}
                >
                  {loading || isSubmitting ? "Registering..." : "Register"}
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
    </div>
  );
}