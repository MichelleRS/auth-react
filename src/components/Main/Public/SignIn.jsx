import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext.jsx";

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

  // TODO send users to home page

  // handle form submit
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
        setEmailErrorMsg("Email is required.");
      }
      // handle empty password input
      if (!passwordRef.current?.value) {
        setPasswordErrorMsg("Password is required.");
      }
      // handle general error message on submit
      if (!emailRef.current?.value || !passwordRef.current?.value) {
        setSubmitStatusMsg("Failed to sign in.");
      }
      // get sign in data
      const {
        data: { user, session },
        error,
      } = await signin(emailRef.current.value, passwordRef.current.value);
      // if error, display error message, TODO improve message
      if (error) setErrorMsg(error.message);
      // if user, navigate to home page
      if (user && session) navigate("/");
    } catch (error) {
      // TODO catch remaining errors
      console.log("error!");
    }
  };

  return (
    <>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        {/* email */}
        <label htmlFor="signInEmail">Email</label>
        <input
          type="email"
          id="signInEmail"
          name="signInEmail"
          autoComplete="email"
          ref={emailRef}
          // comment out for error message testing
          // required
        />
        {/* if blank or incorrect on submit, display password error message */}
        {emailErrorMsg}
        {/* password */}
        <label htmlFor="signInPassword">Password</label>
        <input
          type="password"
          id="signInPassword"
          name="signInPassword"
          autoComplete="off"
          ref={passwordRef}
          // comment out for error message testing
          // required
        />
        {/* if blank or incorrect on submit, display password error message */}
        {passwordErrorMsg}
        {/* if any errors on submit, display error message */}
        {errorMsg && (
          <p>
            {submitStatusMsg} {errorMsg}.
          </p>
        )}
        {/* submit */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
