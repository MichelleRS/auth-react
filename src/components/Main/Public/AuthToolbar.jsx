import { NavLink } from "react-router-dom";
import "./Auth.css";

export default function AuthToolbar() {
  const handleClick = () => {
    console.log("I clicked sign in!");
  };
  return (
    <div className="authNavLinksContainer">
      <NavLink to="/sign-in" onClick={handleClick} className="authNavLink">
        Sign In
      </NavLink>
      <NavLink to="/sign-up" className="authNavLink">
        Sign Up
      </NavLink>
    </div>
  );
}
