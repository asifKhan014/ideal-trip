'use client'
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/router";

const withAuth = (Component, allowedRoles = []) => {
  return (props) => {
    const { isAuthenticated, hasRole } = useAuth();
    const router = useRouter();

    if (!isAuthenticated) {
      router.replace("/login");
      return null;
    }

    if (allowedRoles.length && !allowedRoles.some((role) => hasRole(role))) {
      router.replace("/403");
      return null;
    }

    return <Component {...props} />;
  };
};

export default withAuth;