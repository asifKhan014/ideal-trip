// // hooks/useAuth.js
// 'use client'
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthProvider";

// export const useAuth = () => {
//   const { token, user, setAuth, logout } = useContext(AuthContext);

//   const isAuthenticated = Boolean(token);

//   const hasRole = (role) => user?.roles?.includes(role);

//   return { token, user, setAuth, logout, isAuthenticated, hasRole };
// };
