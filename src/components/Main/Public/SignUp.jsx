import { useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext.jsx";
import { client } from "../../../services/client.js";

export default function SignUp() {
  // constants for use in function
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (email, password) => client.auth.signUp({ email, password });
  // TODO initialize state for error handling

  // set document title
  useEffect(() => {
    document.title = "React Auth Template - Sign Up";
  }, []);

  // send users to home page
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" />;
  }

  // handle form submit
  const handleSubmit = async (e) => {
    console.log("I pressed the submit button to sign up!!");
    e.preventDefault();
    // TODO error handling
    try {
      const { data, error } = await register(
        emailRef.current.value,
        passwordRef.current.value
      );
      if (!error && data) {
        console.log("Sign up was a success!");
      }
    } catch (error) {
      // TODO
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {/* email */}
        <label htmlFor="signUpEmail">Email</label>
        <input
          type="email"
          id="signUpEmail"
          name="SignUpEmail"
          autoComplete="email"
          ref={emailRef}
          required
        />
        {/* password */}
        <label htmlFor="signUpPassword">Password</label>
        <input
          type="password"
          id="signUpPassword"
          name="signUpPassword"
          autoComplete="off"
          ref={passwordRef}
          required
        />
        {/* submit */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
