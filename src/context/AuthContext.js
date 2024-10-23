// src/context/AuthContext.js
import React, { createContext } from "react";
import { Security, useOktaAuth } from "@okta/okta-react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const oktaAuth = useOktaAuth();

  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={() => window.location.assign("/login")}
    >
      <AuthContext.Provider value={{ oktaAuth }}>
        {children}
      </AuthContext.Provider>
    </Security>
  );
};

export { AuthContext, AuthProvider };
