import { Link } from "react-router-dom";

export default function AuthToolbar() {
  return (
    <>
      <Link to="/sign-in">Sign In</Link>
      <Link to="/sign-up">Sign Up</Link>
    </>
  );
}
