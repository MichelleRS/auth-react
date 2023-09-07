import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

import "./Header.css";

export default function Header() {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    console.log("I clicked sign out!");
    try {
      // sign out user
      await signOut();
    } catch {
      // TODO error
    }
  };

  return (
    <header>
      <h1 className="headerTitle">Auth Template</h1>
      {/* if user, render sign out link */}
      {/* TODO update class names */}
      {user && (
        <div className="headerContainerUser">
          <div className="headerNavUser">
            <Link to="/sign-in" onClick={handleSignOut}>
              Sign Out
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
