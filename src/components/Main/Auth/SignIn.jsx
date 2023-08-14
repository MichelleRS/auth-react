import { useEffect } from "react";

export default function SignIn() {
  // TODO state

  // handle form submit
  const handleSubmit = () => {
    console.log("I pressed the submit button to sign in!!");
  };

  // set document title
  useEffect(() => {
    document.title = "React Auth Template - Sign In";
  }, []);

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
          required
        />
        {/* password */}
        <label htmlFor="signInPassword">Password</label>
        <input
          type="password"
          id="signInPassword"
          name="signInPassword"
          autoComplete="off"
          required
        />
        {/* submit */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
