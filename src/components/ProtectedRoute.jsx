import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, ...rest }) => {
  const { isUserAuthenticated } = useAuth();

  return (
    <Route {...rest}>
      {isUserAuthenticated ? children : <Redirect to="/login" />}
    </Route>
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
