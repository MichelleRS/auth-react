// TODO: remove Account.jsx

import { Routes, Route } from "react-router-dom";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";

export default function Account() {
  // TODO set document title
  // TODO navigate user to home page
  return (
    <>
      <h2>This is the account page!!</h2>
      {/* route between sign in and sign up forms based on selected toolbar link */}
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}
