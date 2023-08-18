import { NavLink } from "react-router-dom";

export default function AuthToolbar() {
  const handleClick = () => {
    console.log("I clicked sign in!");
  };
  return (
    <>
      <NavLink
        to="/sign-in"
        onClick={handleClick}
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
