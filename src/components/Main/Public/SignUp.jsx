import { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext.jsx";
import { client } from "../../../services/client.js";
import "./Auth.css";

export default function SignUp() {
  // constants for use in function
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (email, password) => client.auth.signUp({ email, password });
  // TODO initialize state for error handling
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [errorSummary, setErrorSummary] = useState("");

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
    e.preventDefault();
    try {
      // clear error messages
      setEmailErrorMsg("");
      setPasswordErrorMsg("");
      setErrorSummary("");
      // handle empty email input
      if (!emailRef.current?.value) {
        setEmailErrorMsg("Email field is blank. Enter an email address");
      }
      // handle empty password input
      if (!passwordRef.current?.value) {
        setPasswordErrorMsg(
          "Password field is blank. Enter a password of 6 characters or more."
        );
      }
      // TODO handle password length less than 6 characters
      // handle error summary
      if (!emailRef.current?.value || !passwordRef.current?.value) {
        setErrorSummary("Failed to sign up.");
      }
      // handle valid entries and sign up user
      const { data, error } = await register(
        emailRef.current.value,
        passwordRef.current.value
      );
      if (!error && data) {
        console.log("Sign up was a success!");
      }
    } catch (error) {
      // TODO
      console.log("error!");
    }
  };

  return (
    <section className="authContainer">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="authControlGroup">
          {/* email */}
          <div className="authControl">
            <label htmlFor="signUpEmail">Email</label>
            <input
              type="email"
              id="signUpEmail"
              className="authInput"
              name="SignUpEmail"
              autoComplete="email"
              ref={emailRef}
              aria-describedby="emailError"
              aria-required="true"
            />
            {/* if email blank, display email error message element */}
            {!emailRef.current?.value && (
              <div id="emailError">{emailErrorMsg}</div>
            )}
          </div>
          {/* password */}
          <div className="authControl">
            <label htmlFor="signUpPassword">Password</label>
            <input
              type="password"
              id="signUpPassword"
              className="authInput"
              name="signUpPassword"
              autoComplete="off"
              ref={passwordRef}
              aria-describedby="passwordError"
              aria-required="true"
            />
            {/* if password blank, display email error message element */}
            {!passwordRef.current?.value && (
              <div id="passwordError">{passwordErrorMsg}</div>
            )}
          </div>
        </div>
        {/* error summary */}
        <div className="authErrorSummary">
          {/* if there is an error summary, display and announce summary */}
          {errorSummary && <p aria-live="assertive">{errorSummary}</p>}
        </div>
        {/* submit */}
        <button type="submit" className="authSubmitBtn">
          Submit
        </button>
      </form>
    </section>
  );
}
