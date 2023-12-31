import { useState, useContext, createContext, useEffect } from "react";
import { client } from "../services/client.js";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

// sign in user
const signin = (email, password) =>
  client.auth.signInWithPassword({ email, password });

// sign out user
const signOut = () => client.auth.signOut();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);

  // onAuthStateChange has a callback function that takes in two parameters: event and session
  // event parameter can be any of the following values: SIGNED_IN, SIGNED_OUT, TOKEN_REFRESHED, USER_UPDATED, PASSWORD_RECOVERY
  // session parameter contains details about the current session
  useEffect(() => {
    const { data } = client.auth.onAuthStateChange((event, session) => {
      // if the event is signed in, update user state and set auth state to true
      if (event === "SIGNED_IN") {
        setUser(session.user);
        setAuth(true);
      }
      // if signed out, update user state and set auth state to false
      else if (event === "SIGNED_OUT") {
        setUser(null);
        setAuth(false);
      }
    });
    return () => {
      // unsubscribe to the auth listener
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, auth, signin, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
