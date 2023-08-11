import { useEffect } from "react";

export default function SignUp() {
  // TODO state

  // handle form submit
  const handleSubmit = () => {
    console.log("I pressed the submit button to sign up!!");
  };

  // ISSUE: "Hello" message is logging twice in developer mode.
  // TEST: Does it log twice when deployed?
  useEffect(() => {
    console.log("Hello from useEffect - sign up!!");
    document.title = "React Auth Template - Sign Up";
  }, []);

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
          required
        />
        {/* password */}
        <label htmlFor="signUpPassword">Password</label>
        <input
          type="password"
          id="signUpPassword"
          name="signUpPassword"
          autoComplete="off"
          required
        />
        {/* submit */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
