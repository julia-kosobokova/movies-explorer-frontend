import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ children, ...props }) => {
  return props.loggedIn ? children : <Navigate to="/" replace />;
};

export default ProtectedRouteElement;