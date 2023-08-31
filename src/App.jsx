import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Main/Public/Layout.jsx";
import SignIn from "./components/Main/Public/SignIn.jsx";
import SignUp from "./components/Main/Public/SignUp.jsx";
import Home from "./components/Main/Protected/Home.jsx";
import ProtectedRoute from "./components/Main/Protected/ProtectedRoute.jsx";
import AuthToolbar from "./components/Main/Public/AuthToolbar.jsx";
import { useAuth } from "./context/AuthContext.jsx";

function App() {
  // get user
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Header />
      {/* TODO if not logged in, display AuthToolbar */}
      {/* Main/ routes */}
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
      <Footer />
    </>
  );
}

export default App;
