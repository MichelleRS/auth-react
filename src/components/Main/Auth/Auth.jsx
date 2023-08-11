import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AuthToolbar from "./AuthToolbar.jsx";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";

export default function Auth() {
  // TODO redirect authorized users to home page

  // ISSUE: "Hello" message is logging twice in developer mode.
  // TEST: Does it log twice when deployed?
  useEffect(() => {
    console.log("Hello from useEffect - auth!!");
    document.title = "React Auth Template - Sign In or Sign Up";
  }, []);

  return (
    <main>
      {/* auth toolbar with sign in and sign up links */}
      <AuthToolbar />
      {/* route between sign in and sign up forms based on selected toolbar link */}
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </main>
  );
}
