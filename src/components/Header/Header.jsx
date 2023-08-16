import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

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
      <h1>Header!!</h1>
      {/* if user, render sign out link */}
      {user && (
        <Link to="/sign-in" onClick={handleSignOut}>
          Sign Out
        </Link>
      )}
    </header>
  );
}
