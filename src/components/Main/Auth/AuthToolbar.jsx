import { NavLink } from "react-router-dom";

export default function AuthToolbar() {
  return (
    <>
      <NavLink
        to="/sign-in"
        // TODO move to css
        style={({ isActive }) => ({
          color: isActive ? "green" : "blue",
        })}
      >
        Sign In
      </NavLink>
      <NavLink
        to="/sign-up"
        // TODO move to css
        style={({ isActive }) => ({
          color: isActive ? "green" : "blue",
        })}
      >
        Sign Up
      </NavLink>
    </>
  );
}
