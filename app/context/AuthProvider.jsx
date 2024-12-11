'use client';
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  token: null,
  user: null,
  setAuth: () => {},
  logout: () => {}
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");

      if (storedToken) setToken(storedToken);
      if (storedUser) setUser(JSON.parse(storedUser));
    }
  }, []); // This will run once when the component is mounted.

  const setAuth = (token, user) => {
    setToken(token);
    setUser(user);

    // Store token and user in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    // Remove token and user from localStorage
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  };

  return (
    <AuthContext.Provider value={{ token, user, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
// "use client";
// import { createContext, useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import { jwtDecode } from "jwt-decode"; // Named import
// import api from "../../utils/api";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Check for token and load user data on initial load
//   useEffect(() => {
//     const token = Cookies.get("token");
//     if (token) {
//       try {
//         const decoded = jwtDecode(token);
//         setUser(decoded); // Store user data from token
//       } catch (error) {
//         console.error("Invalid token:", error);
//         Cookies.remove("token");
//       }
//     }
//     setLoading(false);
//   }, []);

//   const login = async (credentials) => {
//     const { data } = await api.post("/api/auth/login", credentials);
//     console.log(data);
//     Cookies.set("token", data.messege); // Store token
//     setUser(jwtDecode(data.messege)); // Decode and store user data
//   };

//   const logout = () => {
//     Cookies.remove("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
