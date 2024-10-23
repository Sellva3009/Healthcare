// src/components/Login.js
import React from "react";
import { useOktaAuth } from "@okta/okta-react";

const Login = () => {
  const { oktaAuth, authState } = useOktaAuth();

  const handleLogin = async () => {
    await oktaAuth.signInWithRedirect();
  };

  if (authState?.isAuthenticated) {
    return <p>You are already logged in!</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={handleLogin}>
          Login with Okta
        </button>
      </div>
    </div>
  );
};

export default Login;
