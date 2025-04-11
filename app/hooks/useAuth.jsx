// hooks/useAuth.js
'use client'
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export const useAuth = () => {
  const { token, user, setAuth, logout } = useContext(AuthContext);

  const isAuthenticated = Boolean(token);
  // console.log("token:", token);
  const hasRole = user?.role;
  // console.log("HasRole: ",hasRole)
  
  console.log("Hi user:",user)
  return { token, user, setAuth, logout, isAuthenticated, hasRole };
};
