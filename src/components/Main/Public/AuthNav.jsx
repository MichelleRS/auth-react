import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div className="headerAuthToolbar">
      <NavLink to="/sign-in" className="authNavLink">
        Sign In
      </NavLink>

      <NavLink to="/sign-up" className="authNavLink">
        Sign Up
      </NavLink>
    </div>
  );
}
