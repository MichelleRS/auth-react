export default function AuthToolbar() {
  // handle button events
  const handleSignIn = () => {
    console.log("I clicked the sign in button!!");
  };
  const handleSignUp = () => {
    console.log("I clicked the sign up button!!");
  };
  return (
    <>
      <button type="button" onClick={handleSignIn}>
        Sign In
      </button>
      <button type="button" onClick={handleSignUp}>
        Sign Up
      </button>
    </>
  );
}
