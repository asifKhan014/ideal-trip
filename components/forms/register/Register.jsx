"use client";
import { useState } from "react";

export default function Register() {
  const [role, setRole] = useState("tourist"); // Default to Tourist
  const [formData, setFormData] = useState({
    tourist: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    transporter: {
      fullName: "",
      email: "",
      phoneNumber: "",
      vehicleDetails: "",
      password: "",
      confirmPassword: "",
    },
    propertyOwner: {
      fullName: "",
      email: "",
      phoneNumber: "",
      propertyDetails: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleInputChange = (e, roleType, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [roleType]: { ...prevData[roleType], [field]: e.target.value },
    }));
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>

          {/* Role Selection Tabs */}
          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={() => setRole("tourist")}
              className={`px-4 py-2 rounded-md ${
                role === "tourist" ? "bg-indigo-600 text-white" : "bg-gray-200"
              }`}
            >
              Tourist
            </button>
            <button
              onClick={() => setRole("transporter")}
              className={`px-4 py-2 rounded-md ${
                role === "transporter"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              Transporter
            </button>
            <button
              onClick={() => setRole("propertyOwner")}
              className={`px-4 py-2 rounded-md ${
                role === "propertyOwner"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              Property Owner
            </button>
          </div>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* Form for Tourist */}
          {role === "tourist" && (
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.tourist.fullName}
                  onChange={(e) => handleInputChange(e, "tourist", "fullName")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <input
                  type="email"
                  value={formData.tourist.email}
                  onChange={(e) => handleInputChange(e, "tourist", "email")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.tourist.phoneNumber}
                  onChange={(e) =>
                    handleInputChange(e, "tourist", "phoneNumber")
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  value={formData.tourist.password}
                  onChange={(e) => handleInputChange(e, "tourist", "password")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={formData.tourist.confirmPassword}
                  onChange={(e) =>
                    handleInputChange(e, "tourist", "confirmPassword")
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white rounded-md py-2"
              >
                Register as Tourist
              </button>
            </form>
          )}

          {/* Form for Transporter */}
          {role === "transporter" && (
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.transporter.fullName}
                  onChange={(e) =>
                    handleInputChange(e, "transporter", "fullName")
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <input
                  type="email"
                  value={formData.transporter.email}
                  onChange={(e) => handleInputChange(e, "transporter", "email")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.transporter.phoneNumber}
                  onChange={(e) =>
                    handleInputChange(e, "transporter", "phoneNumber")
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Vehicle Details
                </label>
                <input
                  type="text"
                  value={formData.transporter.vehicleDetails}
                  onChange={(e) =>
                    handleInputChange(e, "transporter", "vehicleDetails")
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  value={formData.transporter.password}
                  onChange={(e) =>
                    handleInputChange(e, "transporter", "password")
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={formData.transporter.confirmPassword}
                  onChange={(e) =>
                    handleInputChange(e, "transporter", "confirmPassword")
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white rounded-md py-2"
              >
                Register as Transporter
              </button>
            </form>
          )}

          {/* Form for Property Owner */}
          {role === "propertyOwner" && (
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.propertyOwner.fullName}
                  onChange={(e) =>
                    handleInputChange(e, "propertyOwner", "fullName")
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <input
                  type="email"
                  value={formData.propertyOwner.email}
                  onChange={(e) =>
                    handleInputChange(e, "propertyOwner", "email")
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.propertyOwner.phoneNumber}
                  onChange={(e) =>
                    handleInputChange(e, "propertyOwner", "phoneNumber")
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Property Details
                </label>
                <input
                  type="text"
                  value={formData.propertyOwner.propertyDetails}
                  onChange={(e) =>
                    handleInputChange(e, "propertyOwner", "propertyDetails")
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  value={formData.propertyOwner.password}
                  onChange={(e) =>
                    handleInputChange(e, "propertyOwner", "password")
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={formData.propertyOwner.confirmPassword}
                  onChange={(e) =>
                    handleInputChange(e, "propertyOwner", "confirmPassword")
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white rounded-md py-2"
              >
                Register as Property Owner
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
