import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  let { user } = useAuth();
  let location = useLocation();
  console.log("====================================");
  console.log("location---->", location);
  console.log("====================================");
  if (!user.email)
    return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
};

export default PrivateRoute;
