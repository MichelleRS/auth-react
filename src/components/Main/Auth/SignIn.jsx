export default function SignIn() {
  // TODO state

  // handle form submit
  const handleSubmit = () => {
    console.log("I pressed the submit button to sign in!!");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* email */}
      <label htmlFor="email">Email</label>
      <input type="email" id="signInEmail" />
      {/* password */}
      <label htmlFor="password">Password</label>
      <input type="password" id="signInPassword" />
      {/* submit */}
      <button type="submit">Submit</button>
    </form>
  );
}
