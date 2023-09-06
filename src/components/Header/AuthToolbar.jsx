import { NavLink } from "react-router-dom";
import "../Main/Public/Auth.css";
import "./Header.css";

export default function AuthToolbar() {
  const handleClick = () => {
    console.log("I clicked sign in!");
  };
  return (
    <>
      <NavLink to="/sign-in" onClick={handleClick} className="authNavLink">
        Sign In
      </NavLink>
      <NavLink to="/sign-up" className="authNavLink">
        Sign Up
      </NavLink>
    </>
  );
}
