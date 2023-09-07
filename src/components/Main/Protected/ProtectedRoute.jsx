import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext.jsx";

export default function ProtectedRoute() {
  // get user data
  const { user } = useAuth();
  const location = useLocation();

  return (
    // if user, send to Outlet
    // if not a user, send to Account
    user?.user ? (
      <Outlet />
    ) : (
      <Navigate to="/account" state={{ from: location }} replace />
    )
  );
}
