import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import AuthToolbar from "./AuthToolbar.jsx";

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
      {/* if user, render title with sign out link */}
      {user && (
        <div className="headerContainerUser">
          <h1 className="headerTitle">Auth Template</h1>
          <div className="headerNavUser">
            <Link to="/sign-in" onClick={handleSignOut}>
              Sign Out
            </Link>
          </div>
        </div>
      )}
      {/* if not a user, render title with AuthToolbar */}
      {!user && (
        <div className="headerContainerAuth">
          <h1 className="headerTitle">Auth Template</h1>
          <div className="headerAuthToolbar">
            <AuthToolbar />
          </div>
        </div>
      )}
    </header>
  );
}
