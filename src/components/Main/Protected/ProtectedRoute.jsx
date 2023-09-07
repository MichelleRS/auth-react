import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext.jsx";

export default function ProtectedRoute() {
  // get user data
  const { user } = useAuth();
  // if not a user, navigate to account page
  if (!user) {
    return <Navigate to="/account" />;
  }

  return <Outlet />;
}
