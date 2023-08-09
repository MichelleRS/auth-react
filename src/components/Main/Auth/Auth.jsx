import AuthToolbar from "./AuthToolbar.jsx";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";

export default function Auth() {
  // TODO redirect authorized users to home page
  return (
    <main>
      {/* auth toolbar */}
      <AuthToolbar />
      {/* TODO toggle between sign in and sign up forms based on selected toolbar button */}
      <SignIn />
      <SignUp />
    </main>
  );
}
