import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Backend API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add the token from cookies to every request if available
api.interceptors.request.use((config) => {
  const token = Cookies.get("token"); // Read token from cookie
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
