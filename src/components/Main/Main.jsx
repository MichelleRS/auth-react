// import "./App.css";
import "../../App.css";
import { useAuth } from "../../context/AuthContext.jsx";
import AuthToolbar from "./Public/AuthToolbar.jsx";
import { Route, Routes } from "react-router-dom";
import Layout from "./Public/Layout.jsx";
import SignIn from "./Public/SignIn.jsx";
import SignUp from "./Public/SignUp.jsx";
import Home from "./Protected/Home.jsx";
import ProtectedRoute from "./Protected/ProtectedRoute.jsx";

export default function Main() {
  // get user
  const { user } = useAuth();

  return (
    <main>
      {/* if user, display sign in and sign out links */}
      {!user && <AuthToolbar />}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          {/* protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          {/* TODO catch all */}
        </Route>
      </Routes>
    </main>
  );
}
