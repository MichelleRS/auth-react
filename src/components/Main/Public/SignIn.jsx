import { useRef, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext.jsx";
import "./Auth.css";
import AuthNav from "./AuthNav.jsx";

export default function SignIn() {
  // constants for use in function
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const { signin } = useAuth();
  // initialize state for error handling
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [submitStatusMsg, setSubmitStatusMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // set document title
  useEffect(() => {
    document.title = "React Auth Template - Sign In";
  }, []);

  // send users to home page
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" />;
  }

  // handle form submit
  // TODO handle focus
  const handleSubmit = async (e) => {
    console.log("I pressed the submit button to sign in!!");
    e.preventDefault();
    try {
      // clear error messages
      setEmailErrorMsg("");
      setPasswordErrorMsg("");
      setSubmitStatusMsg("");
      setErrorMsg("");
      // handle empty email input
      if (!emailRef.current?.value) {
        setEmailErrorMsg("Enter your email address.");
      }
      // handle empty password input
      if (!passwordRef.current?.value) {
        setPasswordErrorMsg("Enter your password.");
      }
      // handle general error message on submit
      if (!emailRef.current?.value || !passwordRef.current?.value) {
        setSubmitStatusMsg("Unable to sign in.");
      }
      // get sign in data
      const {
        data: { user, session },
        error,
      } = await signin(emailRef.current.value, passwordRef.current.value);
      // if error, display error message, TODO improve message
      if (error) setErrorMsg("Check form for errors.");
      // if user, navigate to home page
      if (user && session) navigate("/");
    } catch (error) {
      // TODO catch remaining errors
      console.log("error!");
    }
  };

  return (
    <div className="signInContainer">
      <AuthNav />
      <form onSubmit={handleSubmit} className="authForm">
        <div className="authControlGroup">
          {/* email */}
          <div className="authControl">
            <label htmlFor="signInEmail">Email</label>
            <input
              type="email"
              id="signInEmail"
              className="authInput"
              name="signInEmail"
              autoComplete="email"
              ref={emailRef}
              aria-describedby="emailError"
              aria-required="true"
            />
            {/* if blank submit, display password error message */}
            {!emailRef.current?.value && (
              <div id="emailError" className="errorMsg">
                {emailErrorMsg}
              </div>
            )}
          </div>
          {/* password */}
          <div className="authControl">
            <label htmlFor="signInPassword">Password</label>
            <input
              type="password"
              id="signInPassword"
              className="authInput"
              name="signInPassword"
              autoComplete="off"
              ref={passwordRef}
              aria-describedby="passwordError"
              aria-required="true"
            />
            {/* if blank on submit, display password error message */}
            {!passwordRef.current?.value && (
              <div id="passwordError" className="errorMsg">
                {passwordErrorMsg}
              </div>
            )}
          </div>
        </div>
        {/* error summary */}
        <div className="authErrorSummary">
          {/* if any errors on submit, display and announce error message */}
          {errorMsg && (
            // aria-live="assertive": announces message on submit
            <p aria-live="assertive">
              {submitStatusMsg} {errorMsg}
            </p>
          )}
        </div>
        {/* submit */}
        <button type="submit" className="authSubmitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}
