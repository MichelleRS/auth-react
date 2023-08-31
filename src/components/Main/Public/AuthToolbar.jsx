import { NavLink } from "react-router-dom";

export default function AuthToolbar() {
  const handleClick = () => {
    console.log("I clicked sign in!");
  };
  return (
    <>
      <NavLink to="/sign-in" onClick={handleClick}>
        Sign In
      </NavLink>
      <NavLink to="/sign-up">Sign Up</NavLink>
    </>
  );
}
