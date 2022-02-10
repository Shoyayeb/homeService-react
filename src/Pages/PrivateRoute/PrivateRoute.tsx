/* eslint-disable no-restricted-globals */
import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  let { user } = useAuth();

  // console.log("====================================");
  // console.log("location---->", location);
  // console.log("====================================");
  if (user.email) return children;

  // return user.email ? children : <Navigate to="/login" />;
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
