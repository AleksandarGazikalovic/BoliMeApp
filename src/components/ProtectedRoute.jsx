import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isUserAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isUserAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

ProtectedRoute.propTypes = {
  component: React.Component,
};

export default ProtectedRoute;
