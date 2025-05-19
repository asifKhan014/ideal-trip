"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function UserDashboard() {
  const [editMode, setEditMode] = useState(false);
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState(""); // Separate display name
  const [address, setAddress] = useState("");
  const [profilePhoto, setProfilePicture] = useState("");
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const router = useRouter();

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/User`,
        {
          method: "GET",
          credentials: "include", // 🔐 Send cookies
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 401) {
        alert("Session expired. Please log in again.");
        router.push("/login");
        return;
      }

      const data = await response.json();

      if (data.isSuccess) {
        console.log(data.data);
        setFullName(data.data.userName);
        setDisplayName(data.data.userName);
        setAddress(data.data.address);
        setProfilePicture(data.data.profilePhotoPath);
        setEmail(data.data.email);
      } else {
        alert(data.message || "Failed to fetch user data.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("An error occurred while fetching user data.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("FullName", fullName);
      formData.append("Address", address);
      if (file) {
        formData.append("ProfilePhoto", file);
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/User/`,
        {
          method: "POST",
          body: formData,
          credentials: "include", // 🔐 Send cookies
        }
      );

      if (response.status === 401) {
        alert("Session expired. Please log in again.");
        router.push("/login");
        return;
      }

      const data = await response.json();
      if (data.isSuccess) {
        alert("Profile updated successfully!");
        fetchUserData();
        setEditMode(false);
        setDisplayName(fullName);
      } else {
        alert(data.message || "Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred while updating your profile.");
    }
  };

  return loading ? (
    <div className="flex justify-center items-center h-64">Loading</div>
  ) : (
    <div className={`flex justify-center items-center min-h-screen`}>
      <div className={`w-full max-w-4xl p-8 rounded-lg shadow-xl bg-slate-200`}>
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32">
            <img
              src={
                profilePhoto
                  ? profilePhoto.startsWith("blob:")
                    ? profilePhoto // preview from URL.createObjectURL
                    : `${process.env.NEXT_PUBLIC_BACKEND_URL}/${profilePhoto}` // saved file path
                  : "/user.png"
              }
              alt="Profile"
              className={`w-32 h-32 rounded-full object-cover border-4 shadow-md transition-colors duration-300 `}
            />
            {editMode && (
              <label
                htmlFor="upload-profile-pic"
                className={`absolute bottom-0 right-0 text-xs px-3 py-1 rounded-full cursor-pointer shadow-md transition-colors duration-300 `}
              >
                Change
              </label>
            )}
            <input
              type="file"
              id="upload-profile-pic"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setFile(e.target.files[0]);
                  setProfilePicture(URL.createObjectURL(e.target.files[0]));
                }
              }}
            />
          </div>
          <h2 className="mt-4 text-2xl font-bold">{displayName}</h2>
          <p className={"text-gray-500"}>{email}</p>
        </div>

        <div className={`mt-6 p-6 rounded-lg  bg-gray-50`}>
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label className={`block text-sm font-medium text-gray-700`}>
                Full Name
              </label>
              {editMode ? (
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500bg-white border-gray-300`}
                />
              ) : (
                <p className={`transition-colors duration-300text-gray-800`}>
                  {fullName}
                </p>
              )}
            </div>

            <div>
              <label className={`block text-sm font-medium text-gray-700`}>
                Address
              </label>
              {editMode ? (
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={`w-full p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white border-gray-300`}
                />
              ) : (
                <p className={"text-gray-800"}>{address}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          {editMode ? (
            <button
              onClick={handleSave}
              className={`px-6 py-3 font-semibold rounded-lg shadow-md hover:opacity-90 bg-green-600 text-white`}
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className={`px-6 py-3 font-semibold rounded-lg shadow-md hover:opacity-90 bg-blue-600 text-white`}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
