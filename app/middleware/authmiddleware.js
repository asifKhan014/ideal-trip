// "use client";
// import { useContext, useEffect } from "react";
// import { useRouter } from "next/router";
// import AuthContext from "../context/AuthProvider";

// const withAuth = (WrappedComponent, requiredRole = null) => {
//   return (props) => {
//     const { user, loading } = useContext(AuthContext);
//     const router = useRouter();

//     useEffect(() => {
//       if (!loading && !user) {
//         router.push("/auth/login"); // Redirect to login if not authenticated
//       } else if (requiredRole && user?.role !== requiredRole) {
//         router.push("/unauthorized"); // Redirect if insufficient role
//       }
//     }, [user, loading, router]);

//     return loading ? null : <WrappedComponent {...props} />;
//   };
// };

// export default withAuth;
"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use the correct navigation hook
import AuthContext from "../context/AuthProvider";

const withAuth = (WrappedComponent, requiredRole = null) => {
  const AuthenticatedComponent = (props) => {
    const { user, loading } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
      if (!loading) {
        if (!user) {
          router.push("/auth/login");
        } else if (requiredRole && user?.role !== requiredRole) {
          router.push("/unauthorized");
        }
      }
    }, [user, loading, router]);

    if (loading || !user) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
