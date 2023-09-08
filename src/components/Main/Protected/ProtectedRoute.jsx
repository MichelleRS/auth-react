import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext.jsx";

export default function ProtectedRoute() {
  // get user data
  const { user } = useAuth();
  // if not a user, navigate to sign in
  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
}
