import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext.jsx";

export default function ProtectedRoute() {
  // get user data
  const { user } = useAuth();
  // get outlet
  const outlet = useOutlet();
  // if not a user, navigate to home page
  if (!user) {
    return <Navigate to="/sign-in" />;
  }
  return (
    // return outlet
    <>{outlet}</>
  );
}
