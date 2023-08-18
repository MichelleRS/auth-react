import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext.jsx";

export default function SignIn() {
  // constants for use in function
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const { signin } = useAuth();

  // TODO initialize state for error handling

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
      // TODO error handling

      // sign in user and navigate to home page
      const {
        data: { user, session },
      } = await signin(emailRef.current.value, passwordRef.current.value);
      if (user && session) navigate("/");
    } catch {
      // TODO error message
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
          required
        />
        {/* password */}
        <label htmlFor="signInPassword">Password</label>
        <input
          type="password"
          id="signInPassword"
          name="signInPassword"
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
