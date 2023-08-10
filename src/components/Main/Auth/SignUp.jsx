export default function SignUp() {
  // TODO state

  // handle form submit
  const handleSubmit = () => {
    console.log("I pressed the submit button to sign up!!");
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {/* email */}
        <label htmlFor="email">Email</label>
        <input type="email" id="signUpEmail" />
        {/* password */}
        <label htmlFor="password">Password</label>
        <input type="password" id="signUpPassword" />
        {/* submit */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
