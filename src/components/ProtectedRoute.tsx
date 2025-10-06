import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
  // Flag to protect only verified users (optional)
  requireVerification?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  requireVerification = false,
}) => {
  const { user, isLoading } = useAuth();

  // 1. Show a loading state while fetching auth status
  if (isLoading) {
    // Replace with a proper loading spinner (e.g., shadcn/ui spinner)
    return <div className="p-8 text-center">Loading user session...</div>;
  }

  // 2. Redirect unauthenticated users
  if (!user) {
    // Redirect to the login page, maintaining the current path as state
    return <Navigate to="/login" replace />;
  }

  // 3. Optional: Redirect non-verified users (Crucial for professional apps!)
  if (requireVerification && !user.emailVerified) {
    // You can redirect to an "access denied" page or the verification instruction page
    return <Navigate to="/verify-email" replace />;
  }

  // 4. Render the nested route component
  return <Outlet />;
};

export default ProtectedRoute;
