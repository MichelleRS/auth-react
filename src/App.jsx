import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Main/Public/Layout.jsx";
import SignIn from "./components/Main/Public/SignIn.jsx";
import SignUp from "./components/Main/Public/SignUp.jsx";
import Home from "./components/Main/Protected/Home.jsx";
import ProtectedRoute from "./components/Main/Protected/ProtectedRoute.jsx";

function App() {
  return (
    <>
      <Header />
      {/* Main/ routes */}
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
