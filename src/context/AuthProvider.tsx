import { useIonRouter } from "@ionic/react";
import React, { useState, createContext, useEffect } from "react";
import LoadingSpinner from "../components/loading_spinner/LoadingSpinner";
import { auth } from "../firebase";
export const AuthContext = createContext({});

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState({});
  const navigate = useIonRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });
        setIsLoading(false);
        navigate.push("/", "forward", "replace");
        return;
      }
      setUser({});
      setIsLoading(false);
      navigate.push("/login", "root", "replace");
    });
    // clean function
    return () => {
      unsub();
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <LoadingSpinner /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
