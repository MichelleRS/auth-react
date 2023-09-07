import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Main/Public/Layout.jsx";
import Account from "./components/Main/Public/Account.jsx";
import SignIn from "./components/Main/Public/SignIn.jsx";
import SignUp from "./components/Main/Public/SignUp.jsx";
import ProtectedRoute from "./components/Main/Protected/ProtectedRoute.jsx";
import Home from "./components/Main/Protected/Home.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* set root path to Layout component */}
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="account" element={<Account />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          {/* protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          {/* TODO catch all */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
