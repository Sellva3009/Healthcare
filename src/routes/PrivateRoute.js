// src/routes/PrivateRoute.js
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authState } = useOktaAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        authState?.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
